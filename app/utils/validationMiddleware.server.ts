import { json } from '@remix-run/node';
import { z, ZodError } from 'zod';

/**
 * Validation middleware for API routes
 * 
 * Provides consistent validation and error handling across all API endpoints
 */

/**
 * Validation result interface
 */
interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: string[];
  response?: Response;
}

/**
 * Validates request body against a Zod schema
 */
export async function validateRequestBody<T>(
  request: Request,
  schema: z.ZodType<T>
): Promise<ValidationResult<T>> {
  try {
    const body = await request.json();
    const validatedData = schema.parse(body);
    
    return {
      success: true,
      data: validatedData
    };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.errors.map(err => {
        const path = err.path.join('.');
        return path ? `${path}: ${err.message}` : err.message;
      });
      
      return {
        success: false,
        errors,
        response: json({
          error: 'Validation failed',
          details: errors
        }, { status: 400 })
      };
    }
    
    // Handle non-JSON or other parsing errors
    return {
      success: false,
      errors: ['Invalid request body format'],
      response: json({
        error: 'Invalid request body',
        details: ['Request body must be valid JSON']
      }, { status: 400 })
    };
  }
}

/**
 * Validates URL search parameters against a Zod schema
 */
export function validateSearchParams<T>(
  request: Request,
  schema: z.ZodType<T>
): ValidationResult<T> {
  try {
    const url = new URL(request.url);
    const params = Object.fromEntries(url.searchParams.entries());
    const validatedData = schema.parse(params);
    
    return {
      success: true,
      data: validatedData
    };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.errors.map(err => {
        const path = err.path.join('.');
        return path ? `${path}: ${err.message}` : err.message;
      });
      
      return {
        success: false,
        errors,
        response: json({
          error: 'Invalid query parameters',
          details: errors
        }, { status: 400 })
      };
    }
    
    return {
      success: false,
      errors: ['Invalid query parameters'],
      response: json({
        error: 'Invalid query parameters',
        details: ['Query parameters are malformed']
      }, { status: 400 })
    };
  }
}

/**
 * Validates URL path parameters against a Zod schema
 */
export function validatePathParams<T>(
  params: Record<string, string | undefined>,
  schema: z.ZodType<T>
): ValidationResult<T> {
  try {
    const validatedData = schema.parse(params);
    
    return {
      success: true,
      data: validatedData
    };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.errors.map(err => {
        const path = err.path.join('.');
        return path ? `${path}: ${err.message}` : err.message;
      });
      
      return {
        success: false,
        errors,
        response: json({
          error: 'Invalid path parameters',
          details: errors
        }, { status: 400 })
      };
    }
    
    return {
      success: false,
      errors: ['Invalid path parameters'],
      response: json({
        error: 'Invalid path parameters',
        details: ['Path parameters are malformed']
      }, { status: 400 })
    };
  }
}

/**
 * Sanitizes text input to prevent XSS and other injection attacks
 */
export function sanitizeText(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }
  
  return input
    // Remove potentially dangerous characters
    .replace(/[<>"'&]/g, '')
    // Normalize whitespace
    .replace(/\s+/g, ' ')
    // Trim whitespace
    .trim()
    // Limit length as additional safety
    .substring(0, 10000);
}

/**
 * Validates and sanitizes a complete request
 */
export async function validateRequest<TBody, TQuery, TParams>(
  request: Request,
  params: Record<string, string | undefined>,
  options: {
    bodySchema?: z.ZodType<TBody>;
    querySchema?: z.ZodType<TQuery>;
    paramsSchema?: z.ZodType<TParams>;
  }
): Promise<{
  success: boolean;
  data?: {
    body?: TBody;
    query?: TQuery;
    params?: TParams;
  };
  response?: Response;
}> {
  const results: {
    body?: ValidationResult<TBody>;
    query?: ValidationResult<TQuery>;
    params?: ValidationResult<TParams>;
  } = {};
  
  // Validate body if schema provided
  if (options.bodySchema) {
    results.body = await validateRequestBody(request, options.bodySchema);
    if (!results.body.success) {
      return {
        success: false,
        response: results.body.response
      };
    }
  }
  
  // Validate query parameters if schema provided
  if (options.querySchema) {
    results.query = validateSearchParams(request, options.querySchema);
    if (!results.query.success) {
      return {
        success: false,
        response: results.query.response
      };
    }
  }
  
  // Validate path parameters if schema provided
  if (options.paramsSchema) {
    results.params = validatePathParams(params, options.paramsSchema);
    if (!results.params.success) {
      return {
        success: false,
        response: results.params.response
      };
    }
  }
  
  return {
    success: true,
    data: {
      body: results.body?.data,
      query: results.query?.data,
      params: results.params?.data
    }
  };
}

/**
 * Creates a validation error response with consistent format
 */
export function createValidationErrorResponse(
  message: string,
  details: string[] = [],
  status: number = 400
): Response {
  return json({
    error: message,
    details,
    timestamp: new Date().toISOString()
  }, { status });
}

/**
 * Rate limiting helper to prevent abuse
 */
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 100,
  windowMs: number = 60 * 1000 // 1 minute
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  // Clean up old entries
  for (const [key, value] of requestCounts.entries()) {
    if (value.resetTime < now) {
      requestCounts.delete(key);
    }
  }
  
  const current = requestCounts.get(identifier);
  
  if (!current || current.resetTime < now) {
    // First request or window expired
    const resetTime = now + windowMs;
    requestCounts.set(identifier, { count: 1, resetTime });
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetTime
    };
  }
  
  if (current.count >= maxRequests) {
    // Rate limit exceeded
    return {
      allowed: false,
      remaining: 0,
      resetTime: current.resetTime
    };
  }
  
  // Increment count
  current.count++;
  requestCounts.set(identifier, current);
  
  return {
    allowed: true,
    remaining: maxRequests - current.count,
    resetTime: current.resetTime
  };
}

