import { describe, it, expect, beforeEach } from 'vitest'
import { action } from '../app/routes/api.items.$id'
import { ReservationEventType } from '../app/utils/types'
import { mockStorage } from './mocks/db'
import type { User, Item } from '../shared/schema'

describe('Item API Quantity Validation Integration', () => {
  let testUser: User;
  let testItem: Item;
  
  beforeEach(async () => {
    // Create test user
    testUser = await mockStorage.createUser({
      name: 'API Test User',
      email: 'apitest@example.com',
      password: 'password123',
      neighborhood: 'Test Area',
      contactMethod: 'email'
    });
    
    // Create test item with quantity 3
    testItem = await mockStorage.createItem({
      owner_id: testUser.id,
      title: 'API Test Item',
      description: 'Item for API testing',
      category: 'Tools',
      tags: ['test'],
      location: 'Test Location',
      quantity_total: 3
    });
  });
  
  it('should reject quantity reduction below active reservation needs via API', async () => {
    // Create active reservations that need 2 units
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 7);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 10);
    
    await mockStorage.createReservationEvent({
      event_type: ReservationEventType.REQUESTED,
      item_id: testItem.id,
      start_date: startDate,
      end_date: endDate,
      quantity: 2
    }, testUser.id);
    
    // Try to reduce quantity to 1 via API (should fail)
    const request = new Request('http://localhost/api/items/' + testItem.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer mock-jwt-token-${testUser.id}`
      },
      body: JSON.stringify({
        title: 'Updated Item',
        quantity_total: 1 // Less than needed
      })
    });
    
    const response = await action({ 
      request, 
      params: { id: testItem.id }, 
      context: {} 
    });
    
    expect(response.status).toBe(409); // Conflict
    
    const data = await response.json();
    expect(data.error).toBe('Item update validation failed');
    expect(data.details).toEqual(
      expect.arrayContaining([
        expect.stringContaining('Cannot reduce quantity to 1'),
        expect.stringContaining('2 units are needed')
      ])
    );
  });
  
  it('should allow safe quantity reduction via API', async () => {
    // Create reservation that needs 1 unit
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 14);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 17);
    
    await mockStorage.createReservationEvent({
      event_type: ReservationEventType.REQUESTED,
      item_id: testItem.id,
      start_date: startDate,
      end_date: endDate,
      quantity: 1
    }, testUser.id);
    
    // Reduce quantity to 2 via API (should succeed)
    const request = new Request('http://localhost/api/items/' + testItem.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer mock-jwt-token-${testUser.id}`
      },
      body: JSON.stringify({
        title: 'Updated Item',
        quantity_total: 2 // Safe reduction
      })
    });
    
    const response = await action({ 
      request, 
      params: { id: testItem.id }, 
      context: {} 
    });
    
    expect(response.status).toBe(200); // Success
    
    const data = await response.json();
    expect(data.quantityTotal).toBe(2);
    expect(data._warnings).toEqual(
      expect.arrayContaining([
        expect.stringContaining('Quantity reduced from 3 to 2')
      ])
    );
  });
  
  it('should reject item deletion with active reservations via API', async () => {
    // Create an active reservation
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 21);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 24);
    
    await mockStorage.createReservationEvent({
      event_type: ReservationEventType.REQUESTED,
      item_id: testItem.id,
      start_date: startDate,
      end_date: endDate,
      quantity: 1
    }, testUser.id);
    
    // Try to delete item via API (should fail)
    const request = new Request('http://localhost/api/items/' + testItem.id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer mock-jwt-token-${testUser.id}`
      }
    });
    
    const response = await action({ 
      request, 
      params: { id: testItem.id }, 
      context: {} 
    });
    
    expect(response.status).toBe(409); // Conflict
    
    const data = await response.json();
    expect(data.error).toBe('Item deletion validation failed');
    expect(data.details).toEqual(
      expect.arrayContaining([
        expect.stringContaining('Cannot delete item with 1 active reservation(s)')
      ])
    );
  });
});

