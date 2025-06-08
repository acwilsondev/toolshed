import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { createRemixStub } from '@remix-run/testing'
import { action } from '../app/routes/api.reservations.events'
import { ReservationEventType } from '../app/utils/types'
import { mockStorage } from './mocks/db'
import type { User, Item } from '../shared/schema'

// Integration tests for the reservation API endpoints
describe('Reservation API Integration', () => {
  let testUser: User;
  let testItem: Item;
  
  beforeAll(async () => {
    // Create test data
    testUser = await mockStorage.createUser({
      name: 'API Test User',
      email: 'apitest@example.com',
      password: 'password123',
      neighborhood: 'Test Area',
      contactMethod: 'email'
    });
    
    testItem = await mockStorage.createItem({
      owner_id: testUser.id,
      title: 'API Test Item',
      description: 'An item for API testing',
      category: 'Tools',
      tags: ['test'],
      location: 'Test Location',
      quantity_total: 1
    });
  });
  
  afterAll(async () => {
    // Test cleanup is handled by setup.ts resetMockData()
  });
  
  it('should reject overlapping reservations through API', async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    
    // Create first reservation
    const request1 = new Request('http://localhost/api/reservations/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer mock-jwt-token-${testUser.id}`
      },
      body: JSON.stringify({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: tomorrow.toISOString(),
        end_date: dayAfter.toISOString(),
        quantity: 1
      })
    });
    
    const response1 = await action({ request: request1, params: {}, context: {} });
    expect(response1.status).toBe(201);
    
    // Try to create overlapping reservation - should now be rejected
    const request2 = new Request('http://localhost/api/reservations/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer mock-jwt-token-${testUser.id}`
      },
      body: JSON.stringify({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: tomorrow.toISOString(),
        end_date: dayAfter.toISOString(),
        quantity: 1
      })
    });
    
    const response2 = await action({ request: request2, params: {}, context: {} });
    expect(response2.status).toBe(409); // Should be rejected with conflict status
    
    const errorData = await response2.json();
    expect(errorData.error).toBe('Reservation validation failed');
    expect(errorData.details).toEqual(
      expect.arrayContaining([
        expect.stringContaining('Insufficient quantity available')
      ])
    );
  });
  
  it('should allow valid reservations through API', async () => {
    // Create a separate item for this test to avoid conflicts
    const testItem2 = await mockStorage.createItem({
      owner_id: testUser.id,
      title: 'Second API Test Item',
      description: 'Another item for API testing',
      category: 'Tools',
      tags: ['test'],
      location: 'Test Location',
      quantity_total: 1
    });
    
    const futureDate1 = new Date();
    futureDate1.setDate(futureDate1.getDate() + 10);
    const futureDate2 = new Date();
    futureDate2.setDate(futureDate2.getDate() + 11);
    
    const request = new Request('http://localhost/api/reservations/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer mock-jwt-token-${testUser.id}`
      },
      body: JSON.stringify({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem2.id,
        start_date: futureDate1.toISOString(),
        end_date: futureDate2.toISOString(),
        quantity: 1
      })
    });
    
    const response = await action({ request, params: {}, context: {} });
    expect(response.status).toBe(201);
    
    const data = await response.json();
    expect(data.eventType).toBe(ReservationEventType.REQUESTED);
    expect(data.itemId).toBe(testItem2.id);
  });
});

