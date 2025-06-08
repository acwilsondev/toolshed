import { describe, it, expect, beforeEach } from 'vitest'
import { action, loader } from '../app/routes/api.items.$id'
import { mockStorage } from './mocks/db'
import type { User, Item } from '../shared/schema'

describe('Error Handling Integration Tests', () => {
  let testUser: User;
  let testItem: Item;
  
  beforeEach(async () => {
    // Create test user and item
    testUser = await mockStorage.createUser({
      name: 'Error Test User',
      email: 'errortest@example.com',
      password: 'password123',
      neighborhood: 'Test Area',
      contactMethod: 'email'
    });
    
    testItem = await mockStorage.createItem({
      owner_id: testUser.id,
      title: 'Error Test Item',
      description: 'Item for error testing',
      category: 'Tools',
      tags: ['test'],
      location: 'Test Location',
      quantity_total: 5
    });
  });
  
  describe('Authentication Errors', () => {
    it('should return standardized authentication error for missing token', async () => {
      const request = new Request(`http://localhost/api/items/${testItem.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // Missing Authorization header
        }
      });
      
      const response = await loader({ 
        request, 
        params: { id: testItem.id }, 
        context: {} 
      });
      
      expect(response.status).toBe(401);
      
      const data = await response.json();
      expect(data.error).toBe('AuthenticationError');
      expect(data.message).toBe('Bearer token required');
      expect(data.code).toBe('AUTHENTICATION_ERROR');
      expect(data.timestamp).toBeDefined();
      expect(data.requestId).toMatch(/^req_\d+_[a-z0-9]+$/);
      expect(data.path).toBe(`/api/items/${testItem.id}`);
    });
    
    it('should return standardized authentication error for invalid token format', async () => {
      const request = new Request(`http://localhost/api/items/${testItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer invalid-token-format'
        },
        body: JSON.stringify({ title: 'Updated' })
      });
      
      const response = await action({ 
        request, 
        params: { id: testItem.id }, 
        context: {} 
      });
      
      expect(response.status).toBe(401);
      
      const data = await response.json();
      expect(data.error).toBe('AuthenticationError');
      expect(data.message).toBe('Invalid token format');
      expect(data.code).toBe('AUTHENTICATION_ERROR');
    });
  });
  
  describe('Validation Errors', () => {
    it('should return standardized validation error for invalid UUID', async () => {
      const request = new Request('http://localhost/api/items/invalid-uuid', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer mock-jwt-token-${testUser.id}`
        }
      });
      
      const response = await loader({ 
        request, 
        params: { id: 'invalid-uuid' }, 
        context: {} 
      });
      
      expect(response.status).toBe(400);
      
      const data = await response.json();
      expect(data.error).toBe('ValidationError');
      expect(data.message).toBe('Invalid path parameters');
      expect(data.code).toBe('VALIDATION_ERROR');
      expect(data.details).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Invalid item ID format')
        ])
      );
    });
    
    it('should return standardized validation error for invalid request body', async () => {
      const request = new Request(`http://localhost/api/items/${testItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer mock-jwt-token-${testUser.id}`
        },
        body: JSON.stringify({
          title: '', // Invalid: empty title
          quantity_total: -5 // Invalid: negative quantity
        })
      });
      
      const response = await action({ 
        request, 
        params: { id: testItem.id }, 
        context: {} 
      });
      
      expect(response.status).toBe(400);
      
      const data = await response.json();
      expect(data.error).toBe('ValidationError');
      expect(data.message).toBe('Invalid request data');
      expect(data.details).toEqual(
        expect.arrayContaining([
          expect.stringContaining('title'),
          expect.stringContaining('quantity_total')
        ])
      );
    });
    
    it('should return standardized validation error for unsupported HTTP method', async () => {
      const request = new Request(`http://localhost/api/items/${testItem.id}`, {
        method: 'PATCH', // Unsupported method
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer mock-jwt-token-${testUser.id}`
        },
        body: JSON.stringify({ title: 'Test' })
      });
      
      const response = await action({ 
        request, 
        params: { id: testItem.id }, 
        context: {} 
      });
      
      expect(response.status).toBe(400);
      
      const data = await response.json();
      expect(data.error).toBe('ValidationError');
      expect(data.message).toBe('Method PATCH not allowed');
      expect(data.details).toEqual(['Supported methods: PUT, DELETE']);
    });
  });
  
  describe('Not Found Errors', () => {
    it('should return standardized not found error for non-existent item', async () => {
      const nonExistentId = '550e8400-e29b-41d4-a716-999999999999';
      const request = new Request(`http://localhost/api/items/${nonExistentId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer mock-jwt-token-${testUser.id}`
        }
      });
      
      const response = await loader({ 
        request, 
        params: { id: nonExistentId }, 
        context: {} 
      });
      
      expect(response.status).toBe(404);
      
      const data = await response.json();
      expect(data.error).toBe('NotFoundError');
      expect(data.message).toBe('Item not found');
      expect(data.code).toBe('NOT_FOUND');
    });
  });
  
  describe('Rate Limiting', () => {
    it('should return standardized rate limit error with proper headers', async () => {
      // Simulate rate limit exceeded by making many requests quickly
      const requests = [];
      const clientId = 'test-client-rate-limit';
      
      // Make requests until rate limit is hit
      for (let i = 0; i < 52; i++) { // Limit is 50 for write operations
        const request = new Request(`http://localhost/api/items/${testItem.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer mock-jwt-token-${testUser.id}`,
            'X-Forwarded-For': clientId
          },
          body: JSON.stringify({ title: `Update ${i}` })
        });
        
        requests.push(action({ 
          request, 
          params: { id: testItem.id }, 
          context: {} 
        }));
      }
      
      const responses = await Promise.all(requests);
      
      // Find the rate-limited response
      const rateLimitedResponse = responses.find(r => r.status === 429);
      expect(rateLimitedResponse).toBeDefined();
      
      if (rateLimitedResponse) {
        const data = await rateLimitedResponse.json();
        expect(data.error).toBe('RateLimitError');
        expect(data.message).toBe('Rate limit exceeded');
        expect(data.code).toBe('RATE_LIMIT_EXCEEDED');
        
        // Check rate limit headers
        expect(rateLimitedResponse.headers.get('X-RateLimit-Remaining')).toBe('0');
        expect(rateLimitedResponse.headers.get('X-RateLimit-Reset')).toBeDefined();
        expect(rateLimitedResponse.headers.get('Retry-After')).toBeDefined();
      }
    });
  });
  
  describe('Success Responses with Metadata', () => {
    it('should return standardized success response with metadata', async () => {
      const request = new Request(`http://localhost/api/items/${testItem.id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer mock-jwt-token-${testUser.id}`
        }
      });
      
      const response = await loader({ 
        request, 
        params: { id: testItem.id }, 
        context: {} 
      });
      
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(data.data).toBeDefined(); // Actual response data
      expect(data.data.id).toBe(testItem.id);
      expect(data.data.title).toBe('Error Test Item');
      
      expect(data.metadata).toBeDefined();
      expect(data.metadata.timestamp).toBeDefined();
      expect(data.metadata.requestId).toMatch(/^req_\d+_[a-z0-9]+$/);
      expect(data.metadata.rateLimit).toBeDefined();
      expect(data.metadata.rateLimit.remaining).toBeGreaterThanOrEqual(0);
      expect(data.metadata.rateLimit.resetTime).toBeDefined();
      
      // Check rate limit headers
      expect(response.headers.get('X-RateLimit-Remaining')).toBeDefined();
      expect(response.headers.get('X-RateLimit-Reset')).toBeDefined();
    });
    
    it('should include warnings in success response when appropriate', async () => {
      // Use a unique client ID to avoid rate limiting interference
      const uniqueClientId = `test-client-warnings-${Date.now()}-${Math.random()}`;
      const request = new Request(`http://localhost/api/items/${testItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer mock-jwt-token-${uniqueClientId}`, // Use unique ID
          'X-Forwarded-For': uniqueClientId
        },
        body: JSON.stringify({
          title: 'Updated Item',
          quantity_total: 3 // Reduction from 5 to 3
        })
      });
      
      const response = await action({ 
        request, 
        params: { id: testItem.id }, 
        context: {} 
      });
      
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(data.data.quantityTotal).toBe(3);
      expect(data.warnings).toBeDefined();
      expect(data.warnings).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Quantity reduced from 5 to 3')
        ])
      );
    });
  });
  
  describe('Error Correlation and Tracing', () => {
    it('should maintain unique request IDs for error correlation', async () => {
      const requests = [];
      
      // Make multiple requests with errors
      for (let i = 0; i < 3; i++) {
        const request = new Request('http://localhost/api/items/invalid-uuid', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer mock-jwt-token-${testUser.id}`
          }
        });
        
        requests.push(loader({ 
          request, 
          params: { id: 'invalid-uuid' }, 
          context: {} 
        }));
      }
      
      const responses = await Promise.all(requests);
      const data = await Promise.all(responses.map(r => r.json()));
      
      // Check that each error has a unique request ID
      const requestIds = data.map(d => d.requestId);
      const uniqueRequestIds = new Set(requestIds);
      
      expect(uniqueRequestIds.size).toBe(3); // All should be unique
      
      // Check that all have proper path tracking
      data.forEach(d => {
        expect(d.path).toBe('/api/items/invalid-uuid');
        expect(d.requestId).toMatch(/^req_\d+_[a-z0-9]+$/);
      });
    });
  });
});

