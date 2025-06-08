import { describe, it, expect, beforeEach } from 'vitest'
import { 
  CreateUserSchema,
  UpdateUserSchema,
  LoginSchema,
  CreateItemSchema,
  UpdateItemSchema,
  CreateReservationEventSchema,
  PaginationSchema,
  AvailabilityQuerySchema
} from '../app/utils/validation.server'
import { 
  validateRequestBody,
  validateSearchParams,
  validatePathParams,
  sanitizeText,
  checkRateLimit
} from '../app/utils/validationMiddleware.server'
import { ReservationEventType } from '../app/utils/types'

describe('Input Validation System', () => {
  describe('User Validation Schemas', () => {
    it('should validate correct user creation data', () => {
      const validUser = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'SecurePass123',
        neighborhood: 'Downtown',
        contact_method: 'email'
      };
      
      const result = CreateUserSchema.safeParse(validUser);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe('John Doe');
        expect(result.data.email).toBe('john@example.com');
      }
    });
    
    it('should reject weak passwords', () => {
      const invalidUser = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'weak', // Too short, no uppercase, no number
        neighborhood: 'Downtown'
      };
      
      const result = CreateUserSchema.safeParse(invalidUser);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              path: ['password'],
              message: expect.stringContaining('Password must be at least 8 characters')
            })
          ])
        );
      }
    });
    
    it('should reject invalid email formats', () => {
      const invalidUser = {
        name: 'John Doe',
        email: 'not-an-email',
        password: 'SecurePass123'
      };
      
      const result = CreateUserSchema.safeParse(invalidUser);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              path: ['email'],
              message: 'Invalid email format'
            })
          ])
        );
      }
    });
    
    it('should reject names with invalid characters', () => {
      const invalidUser = {
        name: 'John<script>alert(1)</script>',
        email: 'john@example.com',
        password: 'SecurePass123'
      };
      
      const result = CreateUserSchema.safeParse(invalidUser);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              path: ['name'],
              message: 'Name contains invalid characters'
            })
          ])
        );
      }
    });
    
    it('should reject unknown fields with strict schema', () => {
      const invalidUser = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'SecurePass123',
        maliciousField: '<script>alert(1)</script>'
      };
      
      const result = CreateUserSchema.safeParse(invalidUser);
      expect(result.success).toBe(false);
    });
  });
  
  describe('Item Validation Schemas', () => {
    it('should validate correct item data', () => {
      const validItem = {
        owner_id: '550e8400-e29b-41d4-a716-446655440000',
        title: 'Power Drill',
        description: 'High-quality cordless drill',
        category: 'Tools',
        tags: ['power', 'drill', 'cordless'],
        location: 'Garage',
        quantity_total: 1
      };
      
      const result = CreateItemSchema.safeParse(validItem);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.title).toBe('Power Drill');
        expect(result.data.quantity_total).toBe(1);
      }
    });
    
    it('should reject invalid UUIDs for owner_id', () => {
      const invalidItem = {
        owner_id: 'not-a-uuid',
        title: 'Power Drill',
        category: 'Tools',
        location: 'Garage',
        quantity_total: 1
      };
      
      const result = CreateItemSchema.safeParse(invalidItem);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              path: ['owner_id'],
              message: 'Invalid UUID format'
            })
          ])
        );
      }
    });
    
    it('should reject quantities that are too large or negative', () => {
      const invalidQuantities = [0, -1, 1001];
      
      invalidQuantities.forEach(quantity => {
        const invalidItem = {
          owner_id: '550e8400-e29b-41d4-a716-446655440000',
          title: 'Power Drill',
          category: 'Tools',
          location: 'Garage',
          quantity_total: quantity
        };
        
        const result = CreateItemSchema.safeParse(invalidItem);
        expect(result.success).toBe(false);
      });
    });
    
    it('should validate and sanitize tags', () => {
      const itemWithTags = {
        owner_id: '550e8400-e29b-41d4-a716-446655440000',
        title: 'Power Drill',
        category: 'Tools',
        location: 'Garage',
        tags: ['power', 'drill-battery', 'tool_heavy'],
        quantity_total: 1
      };
      
      const result = CreateItemSchema.safeParse(itemWithTags);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.tags).toEqual(['power', 'drill-battery', 'tool_heavy']);
      }
    });
    
    it('should reject too many tags', () => {
      const itemWithManyTags = {
        owner_id: '550e8400-e29b-41d4-a716-446655440000',
        title: 'Power Drill',
        category: 'Tools',
        location: 'Garage',
        tags: Array(11).fill('tag'), // 11 tags (max is 10)
        quantity_total: 1
      };
      
      const result = CreateItemSchema.safeParse(itemWithManyTags);
      expect(result.success).toBe(false);
    });
  });
  
  describe('Reservation Validation Schemas', () => {
    it('should validate correct reservation event data', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dayAfter = new Date();
      dayAfter.setDate(dayAfter.getDate() + 2);
      
      const validReservation = {
        event_type: ReservationEventType.REQUESTED,
        item_id: '550e8400-e29b-41d4-a716-446655440000',
        quantity: 1,
        start_date: tomorrow,
        end_date: dayAfter,
        correlation_id: 'corr_123456_abc123'
      };
      
      const result = CreateReservationEventSchema.safeParse(validReservation);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.event_type).toBe(ReservationEventType.REQUESTED);
        expect(result.data.quantity).toBe(1);
      }
    });
    
    it('should reject end date before start date', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const today = new Date();
      
      const invalidReservation = {
        event_type: ReservationEventType.REQUESTED,
        item_id: '550e8400-e29b-41d4-a716-446655440000',
        quantity: 1,
        start_date: tomorrow,
        end_date: today // Before start date
      };
      
      const result = CreateReservationEventSchema.safeParse(invalidReservation);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              path: ['end_date'],
              message: 'End date must be after start date'
            })
          ])
        );
      }
    });
    
    it('should require fields for new reservations', () => {
      const incompleteReservation = {
        event_type: ReservationEventType.REQUESTED,
        // Missing required fields: item_id, start_date, end_date, quantity
      };
      
      const result = CreateReservationEventSchema.safeParse(incompleteReservation);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              message: 'New reservations require item_id, start_date, end_date, and quantity'
            })
          ])
        );
      }
    });
  });
  
  describe('Validation Middleware', () => {
    it('should validate request body correctly', async () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'SecurePass123'
      };
      
      const request = new Request('http://localhost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validData)
      });
      
      const result = await validateRequestBody(request, CreateUserSchema);
      expect(result.success).toBe(true);
      expect(result.data).toEqual(expect.objectContaining(validData));
    });
    
    it('should return validation errors for invalid body', async () => {
      const invalidData = {
        name: 'John<script>alert(1)</script>',
        email: 'not-an-email',
        password: 'weak'
      };
      
      const request = new Request('http://localhost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invalidData)
      });
      
      const result = await validateRequestBody(request, CreateUserSchema);
      expect(result.success).toBe(false);
      expect(result.errors).toEqual(expect.arrayContaining([
        expect.stringContaining('Invalid email format'),
        expect.stringContaining('Password must be at least 8 characters'),
        expect.stringContaining('Name contains invalid characters')
      ]));
    });
    
    it('should validate search parameters', () => {
      const request = new Request('http://localhost?limit=10&offset=20');
      
      const result = validateSearchParams(request, PaginationSchema);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.limit).toBe(10);
        expect(result.data.offset).toBe(20);
      }
    });
    
    it('should validate path parameters', () => {
      const params = {
        owner_id: '550e8400-e29b-41d4-a716-446655440000'
      };
      
      const result = validatePathParams(params, CreateItemSchema.pick({ owner_id: true }));
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.owner_id).toBe('550e8400-e29b-41d4-a716-446655440000');
      }
    });
  });
  
  describe('Text Sanitization', () => {
    it('should remove dangerous characters', () => {
      const dangerous = '<script>alert("XSS")</script>Hello & "World"';
      const sanitized = sanitizeText(dangerous);
      expect(sanitized).toBe('scriptalert(XSS)/scriptHello World');
      expect(sanitized).not.toContain('<');
      expect(sanitized).not.toContain('>');
      expect(sanitized).not.toContain('"');
      expect(sanitized).not.toContain('&');
    });
    
    it('should normalize whitespace', () => {
      const messy = '  Hello    world  \n\t  test  ';
      const sanitized = sanitizeText(messy);
      expect(sanitized).toBe('Hello world test');
    });
    
    it('should handle non-string input', () => {
      expect(sanitizeText(null as any)).toBe('');
      expect(sanitizeText(undefined as any)).toBe('');
      expect(sanitizeText(123 as any)).toBe('');
    });
  });
  
  describe('Rate Limiting', () => {
    it('should allow requests within limit', () => {
      const identifier = 'test-user-1';
      
      const result1 = checkRateLimit(identifier, 5, 60000);
      expect(result1.allowed).toBe(true);
      expect(result1.remaining).toBe(4);
      
      const result2 = checkRateLimit(identifier, 5, 60000);
      expect(result2.allowed).toBe(true);
      expect(result2.remaining).toBe(3);
    });
    
    it('should block requests exceeding limit', () => {
      const identifier = 'test-user-2';
      const maxRequests = 3;
      
      // Use up the limit
      for (let i = 0; i < maxRequests; i++) {
        const result = checkRateLimit(identifier, maxRequests, 60000);
        expect(result.allowed).toBe(true);
      }
      
      // Next request should be blocked
      const blockedResult = checkRateLimit(identifier, maxRequests, 60000);
      expect(blockedResult.allowed).toBe(false);
      expect(blockedResult.remaining).toBe(0);
    });
    
    it('should reset after time window', async () => {
      const identifier = 'test-user-3';
      const maxRequests = 2;
      const windowMs = 100; // Very short window for testing
      
      // Use up the limit
      checkRateLimit(identifier, maxRequests, windowMs);
      checkRateLimit(identifier, maxRequests, windowMs);
      
      // Should be blocked
      const blockedResult = checkRateLimit(identifier, maxRequests, windowMs);
      expect(blockedResult.allowed).toBe(false);
      
      // Wait for window to expire
      await new Promise(resolve => setTimeout(resolve, windowMs + 10));
      
      // Should be allowed again
      const allowedResult = checkRateLimit(identifier, maxRequests, windowMs);
      expect(allowedResult.allowed).toBe(true);
      expect(allowedResult.remaining).toBe(maxRequests - 1);
    }, 1000);
  });
  
  describe('Query Parameter Validation', () => {
    it('should validate availability query with proper dates', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dayAfter = new Date();
      dayAfter.setDate(dayAfter.getDate() + 2);
      
      const validQuery = {
        start_date: tomorrow.toISOString(),
        end_date: dayAfter.toISOString(),
        quantity: '2'
      };
      
      const result = AvailabilityQuerySchema.safeParse(validQuery);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.quantity).toBe(2);
        expect(result.data.start_date).toBeInstanceOf(Date);
      }
    });
    
    it('should reject past dates in availability query', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const today = new Date();
      
      const invalidQuery = {
        start_date: yesterday.toISOString(),
        end_date: today.toISOString(),
        quantity: '1'
      };
      
      const result = AvailabilityQuerySchema.safeParse(invalidQuery);
      expect(result.success).toBe(false);
    });
  });
});

