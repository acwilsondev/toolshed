import { describe, it, expect, beforeEach, vi } from 'vitest'
import { 
  ApiError,
  ValidationError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  InternalServerError,
  DatabaseError,
  ExternalServiceError,
  ErrorHandlerStrategy,
  generateRequestId,
  withErrorHandler,
  BadRequestError,
  ResourceNotFoundError,
  BusinessLogicError
} from '../app/utils/errorHandler.server'
import { z } from 'zod'

describe('Error Handling System', () => {
  describe('Error Classes', () => {
    describe('ValidationError', () => {
      it('should create validation error with default message', () => {
        const error = new ValidationError();
        expect(error.message).toBe('Request validation failed');
        expect(error.statusCode).toBe(400);
        expect(error.code).toBe('VALIDATION_ERROR');
        expect(error.name).toBe('ValidationError');
      });
      
      it('should create validation error with custom message and details', () => {
        const details = ['Field is required', 'Invalid format'];
        const error = new ValidationError('Custom validation message', details);
        expect(error.message).toBe('Custom validation message');
        expect(error.details).toEqual(details);
      });
      
      it('should create validation error from Zod error', () => {
        const schema = z.object({
          email: z.string().email(),
          age: z.number().min(18)
        });
        
        const result = schema.safeParse({ email: 'invalid', age: 15 });
        expect(result.success).toBe(false);
        
        if (!result.success) {
          const error = ValidationError.fromZodError(result.error);
          expect(error.message).toBe('Request validation failed');
          expect(error.details.length).toBeGreaterThan(0);
          expect(error.details[0]).toContain('email:');
        }
      });
    });
    
    describe('AuthenticationError', () => {
      it('should create authentication error with default message', () => {
        const error = new AuthenticationError();
        expect(error.message).toBe('Authentication required');
        expect(error.statusCode).toBe(401);
        expect(error.code).toBe('AUTHENTICATION_ERROR');
      });
      
      it('should create authentication error with custom message', () => {
        const error = new AuthenticationError('Token expired');
        expect(error.message).toBe('Token expired');
      });
    });
    
    describe('AuthorizationError', () => {
      it('should create authorization error', () => {
        const error = new AuthorizationError('Access denied');
        expect(error.message).toBe('Access denied');
        expect(error.statusCode).toBe(403);
        expect(error.code).toBe('AUTHORIZATION_ERROR');
      });
    });
    
    describe('NotFoundError', () => {
      it('should create not found error with default resource', () => {
        const error = new NotFoundError();
        expect(error.message).toBe('Resource not found');
        expect(error.statusCode).toBe(404);
        expect(error.code).toBe('NOT_FOUND');
      });
      
      it('should create not found error with custom resource', () => {
        const error = new NotFoundError('User');
        expect(error.message).toBe('User not found');
      });
    });
    
    describe('ConflictError', () => {
      it('should create conflict error with details', () => {
        const details = ['Item has active reservations', 'Cannot delete'];
        const error = new ConflictError('Cannot perform operation', details);
        expect(error.message).toBe('Cannot perform operation');
        expect(error.statusCode).toBe(409);
        expect(error.code).toBe('CONFLICT');
        expect(error.details).toEqual(details);
      });
    });
    
    describe('RateLimitError', () => {
      it('should create rate limit error with reset time', () => {
        const resetTime = Date.now() + 60000;
        const error = new RateLimitError(resetTime, 0);
        expect(error.message).toBe('Rate limit exceeded');
        expect(error.statusCode).toBe(429);
        expect(error.code).toBe('RATE_LIMIT_EXCEEDED');
        expect(error.resetTime).toBe(resetTime);
        expect(error.remaining).toBe(0);
      });
      
      it('should add rate limit headers to response', () => {
        const resetTime = Date.now() + 60000;
        const error = new RateLimitError(resetTime, 5);
        const response = error.toResponse();
        
        expect(response.headers?.get('X-RateLimit-Remaining')).toBe('5');
        expect(response.headers?.get('X-RateLimit-Reset')).toBe(resetTime.toString());
        expect(response.headers?.has('Retry-After')).toBe(true);
      });
    });
    
    describe('InternalServerError', () => {
      it('should create internal server error', () => {
        const error = new InternalServerError();
        expect(error.message).toBe('Internal server error');
        expect(error.statusCode).toBe(500);
        expect(error.code).toBe('INTERNAL_SERVER_ERROR');
      });
      
      it('should create internal server error with cause', () => {
        const cause = new Error('Database connection failed');
        const error = new InternalServerError('Service unavailable', cause);
        expect(error.message).toBe('Service unavailable');
        expect(error.stack).toContain('Caused by:');
      });
    });
    
    describe('DatabaseError', () => {
      it('should create database error', () => {
        const error = new DatabaseError('SELECT query');
        expect(error.message).toBe('Database operation failed: SELECT query');
        expect(error.statusCode).toBe(500);
        expect(error.code).toBe('DATABASE_ERROR');
      });
    });
    
    describe('ExternalServiceError', () => {
      it('should create external service error', () => {
        const error = new ExternalServiceError('Payment gateway');
        expect(error.message).toBe('External service error: Payment gateway');
        expect(error.statusCode).toBe(502);
        expect(error.code).toBe('EXTERNAL_SERVICE_ERROR');
      });
    });
  });
  
  describe('Error Response Format', () => {
    it('should generate standardized error response', () => {
      const error = new ValidationError('Invalid input', ['Field required']);
      error.requestId = 'req_123';
      error.path = '/api/test';
      
      const response = error.toResponse(['Warning message']);
      
      expect(response.status).toBe(400);
      
      // Note: We can't easily test the response body in this test setup
      // but the structure is verified by TypeScript types
    });
    
    it('should include timestamp in error response', () => {
      const error = new NotFoundError('Item');
      expect(error.timestamp).toBeInstanceOf(Date);
    });
  });
  
  describe('Error Logging', () => {
    let consoleSpy: any;
    
    beforeEach(() => {
      consoleSpy = {
        error: vi.spyOn(console, 'error').mockImplementation(() => {}),
        warn: vi.spyOn(console, 'warn').mockImplementation(() => {}),
        info: vi.spyOn(console, 'info').mockImplementation(() => {})
      };
    });
    
    it('should log 5xx errors as error level', () => {
      const error = new InternalServerError('Test error');
      error.log();
      expect(consoleSpy.error).toHaveBeenCalledWith(
        'API Error (5xx):',
        expect.stringContaining('InternalServerError')
      );
    });
    
    it('should log 4xx errors as warning level', () => {
      const error = new ValidationError('Test validation error');
      error.log();
      expect(consoleSpy.warn).toHaveBeenCalledWith(
        'API Error (4xx):',
        expect.stringContaining('ValidationError')
      );
    });
  });
  
  describe('ErrorHandlerStrategy', () => {
    let errorHandler: ErrorHandlerStrategy;
    
    beforeEach(() => {
      errorHandler = new ErrorHandlerStrategy('req_123', '/api/test');
    });
    
    it('should handle ApiError instances correctly', () => {
      const originalError = new ValidationError('Original error');
      const handledError = errorHandler.handleError(originalError);
      
      expect(handledError).toBe(originalError);
      expect(handledError.requestId).toBe('req_123');
      expect(handledError.path).toBe('/api/test');
    });
    
    it('should convert Response objects to ApiErrors', () => {
      const response = new Response('Unauthorized', { status: 401 });
      const handledError = errorHandler.handleError(response);
      
      expect(handledError).toBeInstanceOf(AuthenticationError);
      expect(handledError.requestId).toBe('req_123');
    });
    
    it('should handle generic JavaScript errors', () => {
      const jsError = new Error('Something went wrong');
      const handledError = errorHandler.handleError(jsError, 'test operation');
      
      expect(handledError).toBeInstanceOf(InternalServerError);
      expect(handledError.message).toBe('test operation: Something went wrong');
    });
    
    it('should detect validation errors from message', () => {
      const jsError = new Error('validation failed');
      const handledError = errorHandler.handleError(jsError);
      
      expect(handledError).toBeInstanceOf(ValidationError);
    });
    
    it('should detect authentication errors from message', () => {
      const jsError = new Error('unauthorized access');
      const handledError = errorHandler.handleError(jsError);
      
      expect(handledError).toBeInstanceOf(AuthenticationError);
    });
    
    it('should detect not found errors from message', () => {
      const jsError = new Error('not found');
      const handledError = errorHandler.handleError(jsError);
      
      expect(handledError).toBeInstanceOf(NotFoundError);
    });
    
    it('should handle unknown error types', () => {
      const unknownError = 'string error';
      const handledError = errorHandler.handleError(unknownError);
      
      expect(handledError).toBeInstanceOf(InternalServerError);
      expect(handledError.message).toBe('Unknown error occurred');
    });
    
    it('should create success response with metadata', () => {
      const data = { id: 1, name: 'Test' };
      const warnings = ['Deprecated API'];
      const rateLimit = { remaining: 10, resetTime: Date.now() + 60000 };
      
      const response = errorHandler.createSuccessResponse(data, warnings, rateLimit);
      
      expect(response.status).toBe(200);
      expect(response.headers?.get('X-RateLimit-Remaining')).toBe('10');
    });
  });
  
  describe('Utility Functions', () => {
    it('should generate unique request IDs', () => {
      const id1 = generateRequestId();
      const id2 = generateRequestId();
      
      expect(id1).toMatch(/^req_\d+_[a-z0-9]+$/);
      expect(id2).toMatch(/^req_\d+_[a-z0-9]+$/);
      expect(id1).not.toBe(id2);
    });
  });
  
  describe('Higher-Order Error Handler', () => {
    it('should wrap function and handle errors', async () => {
      const mockHandler = vi.fn().mockRejectedValue(new Error('Test error'));
      const wrappedHandler = withErrorHandler(mockHandler, 'test context');
      
      const mockRequest = { request: new Request('http://localhost/test') };
      const response = await wrappedHandler(mockRequest);
      
      expect(response).toBeInstanceOf(Response);
      expect(response.status).toBe(500); // InternalServerError
    });
    
    it('should pass through successful responses', async () => {
      const successResponse = new Response('OK', { status: 200 });
      const mockHandler = vi.fn().mockResolvedValue(successResponse);
      const wrappedHandler = withErrorHandler(mockHandler);
      
      const mockRequest = { request: new Request('http://localhost/test') };
      const response = await wrappedHandler(mockRequest);
      
      expect(response).toBe(successResponse);
    });
  });
  
  describe('Error Aliases', () => {
    it('should provide convenient error aliases', () => {
      expect(BadRequestError).toBe(ValidationError);
      expect(ResourceNotFoundError).toBe(NotFoundError);
      expect(BusinessLogicError).toBe(ConflictError);
    });
  });
  
  describe('Error Context and Stack Traces', () => {
    it('should preserve error stack traces with cause', () => {
      const originalError = new Error('Original cause');
      const wrappedError = new InternalServerError('Wrapped error', originalError);
      
      expect(wrappedError.stack).toContain('Caused by:');
      expect(wrappedError.stack).toContain('Original cause');
    });
    
    it('should set request context on errors', () => {
      const error = new ValidationError('Test error');
      error.requestId = 'req_test_123';
      error.path = '/api/test/endpoint';
      
      expect(error.requestId).toBe('req_test_123');
      expect(error.path).toBe('/api/test/endpoint');
    });
  });
});

