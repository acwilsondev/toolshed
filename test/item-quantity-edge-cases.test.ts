import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ItemUpdateValidationService } from '../app/utils/itemUpdateValidator.server'
import { ReservationEventType, ReservationStatus } from '../app/utils/types'
import { mockStorage } from './mocks/db'
import type { User, Item } from '../shared/schema'

describe('Item Quantity vs Reservation Edge Cases', () => {
  let validator: ItemUpdateValidationService;
  let testUser: User;
  let testItem: Item;
  
  beforeEach(async () => {
    validator = new ItemUpdateValidationService();
    
    // Create test user
    testUser = await mockStorage.createUser({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      neighborhood: 'Test Area',
      contactMethod: 'email'
    });
    
    // Create test item with quantity 5
    testItem = await mockStorage.createItem({
      owner_id: testUser.id,
      title: 'Multi-Quantity Test Item',
      description: 'Item for quantity edge case testing',
      category: 'Tools',
      tags: ['test'],
      location: 'Test Location',
      quantity_total: 5
    });
  });
  
  describe('Quantity Reduction with Active Reservations', () => {
    it('should prevent reducing quantity below active reservation needs', async () => {
      // Create overlapping reservations that need 3 units total
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + 7);
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 10);
      
      // Reservation 1: 2 units
      await mockStorage.createReservationEvent({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: startDate,
        end_date: endDate,
        quantity: 2
      }, testUser.id);
      
      // Reservation 2: 1 unit (overlapping)
      await mockStorage.createReservationEvent({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: startDate,
        end_date: endDate,
        quantity: 1
      }, testUser.id);
      
      // Try to reduce quantity to 2 (should fail - need 3)
      const result = await validator.validateItemUpdate(testItem.id, {
        quantity_total: 2
      });
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Cannot reduce quantity to 2'),
          expect.stringContaining('3 units are needed'),
          expect.stringContaining('Minimum allowed quantity: 3')
        ])
      );
    });
    
    it('should allow reducing to exactly the minimum required quantity', async () => {
      // Create reservations that need exactly 4 units
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + 14);
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 17);
      
      // Create 4 separate 1-unit reservations (all overlapping)
      for (let i = 0; i < 4; i++) {
        await mockStorage.createReservationEvent({
          event_type: ReservationEventType.REQUESTED,
          item_id: testItem.id,
          start_date: startDate,
          end_date: endDate,
          quantity: 1
        }, testUser.id);
      }
      
      // Reduce quantity to exactly 4 (should succeed with warning)
      const result = await validator.validateItemUpdate(testItem.id, {
        quantity_total: 4
      });
      
      expect(result.isValid).toBe(true);
      expect(result.warnings).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Quantity reduced to minimum safe value (4)'),
          expect.stringContaining('All 4 units are reserved')
        ])
      );
    });
    
    it('should handle complex overlapping reservation patterns', async () => {
      // Create a complex scenario with multiple overlapping periods
      
      // Period 1: Days 7-10, needs 3 units
      const period1Start = new Date();
      period1Start.setDate(period1Start.getDate() + 7);
      const period1End = new Date();
      period1End.setDate(period1End.getDate() + 10);
      
      await mockStorage.createReservationEvent({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: period1Start,
        end_date: period1End,
        quantity: 3
      }, testUser.id);
      
      // Period 2: Days 9-12, needs 2 units (overlaps with period 1 on days 9-10)
      const period2Start = new Date();
      period2Start.setDate(period2Start.getDate() + 9);
      const period2End = new Date();
      period2End.setDate(period2End.getDate() + 12);
      
      await mockStorage.createReservationEvent({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: period2Start,
        end_date: period2End,
        quantity: 2
      }, testUser.id);
      
      // Maximum concurrent need is 5 (3 + 2 during overlap)
      // Try to reduce to 4 (should fail)
      const result = await validator.validateItemUpdate(testItem.id, {
        quantity_total: 4
      });
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Cannot reduce quantity to 4'),
          expect.stringContaining('5 units are needed')
        ])
      );
    });
    
    it('should allow reduction when no overlapping reservations exist', async () => {
      // Create non-overlapping reservations
      
      // Reservation 1: Days 7-9
      const res1Start = new Date();
      res1Start.setDate(res1Start.getDate() + 7);
      const res1End = new Date();
      res1End.setDate(res1End.getDate() + 9);
      
      await mockStorage.createReservationEvent({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: res1Start,
        end_date: res1End,
        quantity: 3
      }, testUser.id);
      
      // Reservation 2: Days 11-13 (no overlap)
      const res2Start = new Date();
      res2Start.setDate(res2Start.getDate() + 11);
      const res2End = new Date();
      res2End.setDate(res2End.getDate() + 13);
      
      await mockStorage.createReservationEvent({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: res2Start,
        end_date: res2End,
        quantity: 2
      }, testUser.id);
      
      // Max concurrent need is 3, so reducing to 4 should be fine
      const result = await validator.validateItemUpdate(testItem.id, {
        quantity_total: 4
      });
      
      expect(result.isValid).toBe(true);
      expect(result.warnings).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Quantity reduced from 5 to 4'),
          expect.stringContaining('3 units are reserved'),
          expect.stringContaining('1 units remain available')
        ])
      );
    });
    
    it('should count all pending reservations as active', async () => {
      // Note: Our mock storage always returns reservations as PENDING status
      // This test verifies that pending reservations are correctly counted as active
      
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + 21);
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 24);
      
      // Create two overlapping reservations (both will be PENDING in mock)
      await mockStorage.createReservationEvent({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: startDate,
        end_date: endDate,
        quantity: 2
      }, testUser.id);
      
      await mockStorage.createReservationEvent({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: startDate,
        end_date: endDate,
        quantity: 1
      }, testUser.id);
      
      // Should consider both reservations (3 units total)
      const result = await validator.validateItemUpdate(testItem.id, {
        quantity_total: 2
      });
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Cannot reduce quantity to 2'),
          expect.stringContaining('3 units are needed')
        ])
      );
    });
    
    it('should allow quantity increases without restriction', async () => {
      // Create some active reservations
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + 28);
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 31);
      
      await mockStorage.createReservationEvent({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: startDate,
        end_date: endDate,
        quantity: 3
      }, testUser.id);
      
      // Increase quantity (should always be allowed)
      const result = await validator.validateItemUpdate(testItem.id, {
        quantity_total: 10
      });
      
      expect(result.isValid).toBe(true);
      expect(result.warnings).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Quantity increased from 5 to 10')
        ])
      );
    });
    
    it('should handle negative quantity attempts', async () => {
      const result = await validator.validateItemUpdate(testItem.id, {
        quantity_total: -1
      });
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Quantity cannot be negative');
    });
    
    it('should handle zero quantity with active reservations', async () => {
      // Create an active reservation
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + 35);
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 38);
      
      await mockStorage.createReservationEvent({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: startDate,
        end_date: endDate,
        quantity: 1
      }, testUser.id);
      
      // Try to set quantity to 0
      const result = await validator.validateItemUpdate(testItem.id, {
        quantity_total: 0
      });
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Cannot reduce quantity to 0'),
          expect.stringContaining('1 units are needed'),
          expect.stringContaining('Minimum allowed quantity: 1')
        ])
      );
    });
  });
  
  describe('Item Deletion with Active Reservations', () => {
    it('should prevent deletion when active reservations exist', async () => {
      // Create active reservations
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + 42);
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 45);
      
      await mockStorage.createReservationEvent({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: startDate,
        end_date: endDate,
        quantity: 2
      }, testUser.id);
      
      await mockStorage.createReservationEvent({
        event_type: ReservationEventType.REQUESTED,
        item_id: testItem.id,
        start_date: startDate,
        end_date: endDate,
        quantity: 1
      }, testUser.id);
      
      const result = await validator.validateItemDeletion(testItem.id);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Cannot delete item with 2 active reservation(s)'),
          expect.stringContaining('Cancel or complete all reservations before deleting')
        ])
      );
    });
    
    it('should allow deletion when no active reservations exist', async () => {
      const result = await validator.validateItemDeletion(testItem.id);
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });
  
  describe('Edge Cases and Error Handling', () => {
    it('should handle non-existent item validation', async () => {
      const result = await validator.validateItemUpdate('non-existent-id', {
        quantity_total: 10
      });
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Item not found');
    });
    
    it('should handle updates with no quantity change', async () => {
      // Update other fields without changing quantity
      const result = await validator.validateItemUpdate(testItem.id, {
        title: 'Updated Title',
        description: 'Updated Description'
      });
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
    
    it('should handle same quantity update', async () => {
      const result = await validator.validateItemUpdate(testItem.id, {
        quantity_total: 5 // Same as current
      });
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toBeUndefined();
    });
  });
});

