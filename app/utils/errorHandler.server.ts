import { json, type TypedResponse } from '@remix-run/node';
import type { z } from 'zod';

/**
 * Standardized API error handling system following OOP design patterns
 * 
 * Features:
 * - Consistent error response format
 * - Proper HTTP status codes
 * - Error classification and logging
 * - Request context tracking
 * - Rate limiting integration
 */

// Error response schema for type safety
export interface ApiErrorResponse {
  error: string;
  message: string;
  details?: string[];
  warnings?: string[];
  code?: string;
  timestamp: string;
  requestId?: string;
  path?: string;
}

// Success response wrapper for consistency
export interface ApiSuccessResponse<T = any> {
  data: T;
  warnings?: string[];
  metadata?: {
    timestamp: string;
    requestId?: string;
    rateLimit?: {
      remaining: number;
      resetTime: number;
    };
  };
}

/**
 * Base error class for API errors
 */
export abstract class ApiError extends Error {
  abstract readonly statusCode: number;
  abstract readonly code: string;
  public readonly details: string[] = [];
  public readonly timestamp: Date;
  public requestId?: string;
  public path?: string;

  constructor(
    message: string,
    details?: string[],
    cause?: Error
  ) {
    super(message);
    this.name = this.constructor.name;
    this.details = details || [];
    this.timestamp = new Date();
    
    if (cause) {
      this.stack = `${this.stack}\nCaused by: ${cause.stack}`;
    }
  }

  /**
   * Convert error to standardized API response format
   */
  toResponse(warnings?: string[]): TypedResponse<ApiErrorResponse> {
    const response: ApiErrorResponse = {
      error: this.name,
      message: this.message,
      code: this.code,
      timestamp: this.timestamp.toISOString(),
      ...(this.details.length > 0 && { details: this.details }),
      ...(warnings && warnings.length > 0 && { warnings }),
      ...(this.requestId && { requestId: this.requestId }),
      ...(this.path && { path: this.path })
    };

    return json(response, { status: this.statusCode });
  }

  /**
   * Log error with appropriate level
   */
  log(): void {
    const logData = {
      error: this.name,
      message: this.message,
      code: this.code,
      statusCode: this.statusCode,
      details: this.details,
      requestId: this.requestId,
      path: this.path,
      stack: this.stack,
      timestamp: this.timestamp.toISOString()
    };

    if (this.statusCode >= 500) {
      console.error('API Error (5xx):', JSON.stringify(logData, null, 2));
    } else if (this.statusCode >= 400) {
      console.warn('API Error (4xx):', JSON.stringify(logData, null, 2));
    } else {
      console.info('API Info:', JSON.stringify(logData, null, 2));
    }
  }
}

/**
 * Client errors (4xx status codes)
 */
export class ValidationError extends ApiError {
  readonly statusCode = 400;
  readonly code = 'VALIDATION_ERROR';

  constructor(message: string = 'Request validation failed', details?: string[]) {
    super(message, details);
  }

  static fromZodError(zodError: z.ZodError): ValidationError {
    const details = zodError.errors.map(err => {
      const path = err.path.length > 0 ? err.path.join('.') : 'root';
      return `${path}: ${err.message}`;
    });
    
    return new ValidationError('Request validation failed', details);
  }
}

export class AuthenticationError extends ApiError {
  readonly statusCode = 401;
  readonly code = 'AUTHENTICATION_ERROR';

  constructor(message: string = 'Authentication required') {
    super(message);
  }
}

export class AuthorizationError extends ApiError {
  readonly statusCode = 403;
  readonly code = 'AUTHORIZATION_ERROR';

  constructor(message: string = 'Insufficient permissions') {
    super(message);
  }
}

export class NotFoundError extends ApiError {
  readonly statusCode = 404;
  readonly code = 'NOT_FOUND';

  constructor(resource: string = 'Resource') {
    super(`${resource} not found`);
  }
}

export class ConflictError extends ApiError {
  readonly statusCode = 409;
  readonly code = 'CONFLICT';

  constructor(message: string = 'Request conflicts with current state', details?: string[]) {
    super(message, details);
  }
}

export class RateLimitError extends ApiError {
  readonly statusCode = 429;
  readonly code = 'RATE_LIMIT_EXCEEDED';
  public readonly resetTime: number;
  public readonly remaining: number;

  constructor(resetTime: number, remaining: number = 0) {
    super('Rate limit exceeded');
    this.resetTime = resetTime;
    this.remaining = remaining;
  }

  toResponse(warnings?: string[]): TypedResponse<ApiErrorResponse> {
    const response = super.toResponse(warnings);
    
    // Add rate limit headers
    response.headers?.set('X-RateLimit-Remaining', this.remaining.toString());
    response.headers?.set('X-RateLimit-Reset', this.resetTime.toString());
    response.headers?.set('Retry-After', Math.ceil((this.resetTime - Date.now()) / 1000).toString());
    
    return response;
  }
}

/**
 * Server errors (5xx status codes)
 */
export class InternalServerError extends ApiError {
  readonly statusCode = 500;
  readonly code = 'INTERNAL_SERVER_ERROR';

  constructor(message: string = 'Internal server error', cause?: Error) {
    super(message, [], cause);
  }
}

export class DatabaseError extends ApiError {
  readonly statusCode = 500;
  readonly code = 'DATABASE_ERROR';

  constructor(operation: string, cause?: Error) {
    super(`Database operation failed: ${operation}`, [], cause);
  }
}

export class ExternalServiceError extends ApiError {
  readonly statusCode = 502;
  readonly code = 'EXTERNAL_SERVICE_ERROR';

  constructor(service: string, cause?: Error) {
    super(`External service error: ${service}`, [], cause);
  }
}

/**
 * Error handler class following the Strategy pattern
 */
export class ErrorHandlerStrategy {
  private requestId?: string;
  private path?: string;

  constructor(requestId?: string, path?: string) {
    this.requestId = requestId;
    this.path = path;
  }

  /**
   * Handle any error and convert to appropriate ApiError
   */
  handleError(error: unknown, context?: string): ApiError {
    let apiError: ApiError;

    if (error instanceof ApiError) {
      apiError = error;
    } else if (error instanceof Response) {
      // Handle Response objects (thrown by requireAuth, etc.)
      apiError = this.responseToApiError(error);
    } else if (error instanceof Error) {
      // Handle generic JavaScript errors
      if (error.message.includes('validation')) {
        apiError = new ValidationError(error.message);
      } else if (error.message.includes('unauthorized') || error.message.includes('authentication')) {
        apiError = new AuthenticationError(error.message);
      } else if (error.message.includes('not found')) {
        apiError = new NotFoundError();
      } else {
        apiError = new InternalServerError(
          context ? `${context}: ${error.message}` : error.message,
          error
        );
      }
    } else {
      // Handle unknown error types
      apiError = new InternalServerError(
        context ? `${context}: Unknown error occurred` : 'Unknown error occurred'
      );
    }

    // Set request context
    apiError.requestId = this.requestId;
    apiError.path = this.path;

    return apiError;
  }

  /**
   * Convert Response object to ApiError
   */
  private responseToApiError(response: Response): ApiError {
    switch (response.status) {
      case 400:
        return new ValidationError(response.statusText);
      case 401:
        return new AuthenticationError(response.statusText);
      case 403:
        return new AuthorizationError(response.statusText);
      case 404:
        return new NotFoundError();
      case 409:
        return new ConflictError(response.statusText);
      case 429:
        return new RateLimitError(Date.now() + 60000); // Default 1 minute reset
      default:
        return new InternalServerError(response.statusText);
    }
  }

  /**
   * Create standardized success response
   */
  createSuccessResponse<T>(
    data: T,
    warnings?: string[],
    rateLimit?: { remaining: number; resetTime: number }
  ): TypedResponse<ApiSuccessResponse<T>> {
    const response: ApiSuccessResponse<T> = {
      data,
      ...(warnings && warnings.length > 0 && { warnings }),
      metadata: {
        timestamp: new Date().toISOString(),
        ...(this.requestId && { requestId: this.requestId }),
        ...(rateLimit && { rateLimit })
      }
    };

    const headers: Record<string, string> = {};
    if (rateLimit) {
      headers['X-RateLimit-Remaining'] = rateLimit.remaining.toString();
      headers['X-RateLimit-Reset'] = rateLimit.resetTime.toString();
    }

    return json(response, { headers });
  }
}

/**
 * Utility function to generate request IDs
 */
export function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Higher-order function to wrap route handlers with standardized error handling
 */
export function withErrorHandler<T extends (...args: any[]) => Promise<Response>>(
  handler: T,
  context?: string
): T {
  return (async (...args: Parameters<T>) => {
    const requestId = generateRequestId();
    const request = args[0]?.request as Request;
    const path = request ? new URL(request.url).pathname : undefined;
    
    const errorHandler = new ErrorHandlerStrategy(requestId, path);

    try {
      return await handler(...args);
    } catch (error) {
      const apiError = errorHandler.handleError(error, context);
      apiError.log();
      return apiError.toResponse();
    }
  }) as T;
}

/**
 * Method decorator for error handling (if using decorators)
 */
export function HandleErrors(context?: string) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    
    descriptor.value = async function (...args: any[]) {
      const requestId = generateRequestId();
      const request = args[0]?.request as Request;
      const path = request ? new URL(request.url).pathname : undefined;
      
      const errorHandler = new ErrorHandlerStrategy(requestId, path);

      try {
        return await method.apply(this, args);
      } catch (error) {
        const apiError = errorHandler.handleError(error, context || propertyName);
        apiError.log();
        return apiError.toResponse();
      }
    };

    return descriptor;
  };
}

// Export commonly used error types for convenience
export {
  ValidationError as BadRequestError,
  NotFoundError as ResourceNotFoundError,
  ConflictError as BusinessLogicError
};

