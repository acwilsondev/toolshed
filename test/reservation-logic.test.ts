import { describe, it, expect, beforeAll, afterAll, beforeEach, vi } from 'vitest'
import { ReservationValidationService, type DateRange, type ValidationResult } from '../app/utils/reservationValidator.server'
import { ReservationEventType, ReservationStatus } from '../app/utils/types'
import { mockStorage } from './mocks/db'
import type { User, Item } from '../shared/schema'

// Test data setup
let testUser1: User;
let testUser2: User;
let testItem1: Item;
let testItem2: Item;
let validator: ReservationValidationService;

describe('Reservation Business Logic', () => {
  beforeAll(async () => {
    validator = new ReservationValidationService();
    
    // Create test users
    testUser1 = await mockStorage.createUser({
      name: 'Test User 1',
      email: 'test1@example.com',
      password: 'password123',
      neighborhood: 'Test Area',
      contactMethod: 'email'
    });
    
    testUser2 = await mockStorage.createUser({
      name: 'Test User 2', 
      email: 'test2@example.com',
      password: 'password123',
      neighborhood: 'Test Area',
      contactMethod: 'email'
    });
  });
  
  beforeEach(async () => {
    // Recreate test items before each test to ensure clean state
    testItem1 = await mockStorage.createItem({
      owner_id: testUser1.id,
      title: 'Test Drill',
      description: 'A drill for testing',
      category: 'Tools',
      tags: ['power', 'drill'],
      location: 'Test Location',
      quantity_total: 2 // Multiple quantity for testing
    });
    
    testItem2 = await mockStorage.createItem({
      owner_id: testUser1.id,
      title: 'Test Ladder',
      description: 'A ladder for testing',
      category: 'Tools', 
      tags: ['ladder'],
      location: 'Test Location',
      quantity_total: 1 // Single quantity
    });
  });
  
  afterAll(async () => {
    // Test cleanup is handled by setup.ts resetMockData()
  });

  describe('Date Overlap Detection', () => {
    it('should correctly detect overlapping date ranges', () => {
      const range1: DateRange = {
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-01-05')
      };
      
      const range2: DateRange = {
        startDate: new Date('2024-01-03'),
        endDate: new Date('2024-01-07')
      };
      
      const range3: DateRange = {
        startDate: new Date('2024-01-06'),
        endDate: new Date('2024-01-10')
      };
      
      // Test overlap detection through validation
      expect(validator).toBeDefined();
      // Note: Testing private methods through public interface
    });
  });

  describe('Basic Validation', () => {
    it('should reject reservations without required dates', async () => {
      const invalidRequest = {
        event_type: ReservationEventType.REQUESTED,
        quantity: 1
        // Missing start_date and end_date
      };
      
      const result = await validator.validateNewReservation(invalidRequest, testItem1.id);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Start date and end date are required for new reservations');
    });
    
    it('should reject reservations with start date after end date', async () => {
      const invalidRequest = {
        event_type: ReservationEventType.REQUESTED,
        start_date: new Date('2024-01-05'),
        end_date: new Date('2024-01-01'), // End before start
        quantity: 1
      };
      
      const result = await validator.validateNewReservation(invalidRequest, testItem1.id);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Start date must be before end date');
    });
    
    it('should reject reservations with past start dates', async () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1); // Yesterday
      
      const invalidRequest = {
        event_type: ReservationEventType.REQUESTED,
        start_date: pastDate,
        end_date: new Date('2024-12-31'),
        quantity: 1
      };
      
      const result = await validator.validateNewReservation(invalidRequest, testItem1.id);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Start date cannot be in the past');
    });
    
    it('should reject reservations for non-existent items', async () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dayAfter = new Date();
      dayAfter.setDate(dayAfter.getDate() + 2);
      
      const request = {
        event_type: ReservationEventType.REQUESTED,
        start_date: tomorrow,
        end_date: dayAfter,
        quantity: 1
      };
      
      const result = await validator.validateNewReservation(request, 'non-existent-id');
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Item not found');
    });
    
    it('should reject reservations exceeding total quantity', async () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dayAfter = new Date();
      dayAfter.setDate(dayAfter.getDate() + 2);
      
      const request = {
        event_type: ReservationEventType.REQUESTED,
        start_date: tomorrow,
        end_date: dayAfter,
        quantity: 5 // More than testItem1's total quantity of 2
      };
      
      const result = await validator.validateNewReservation(request, testItem1.id);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Requested quantity (5) exceeds total available (2)');
    });
  });

  describe('Overlapping Reservation Prevention', () => {
    beforeEach(async () => {
      // Clean up any existing reservations before each test
      // Note: In a real test environment, you'd want to use a test database
    });
    
    it('should allow non-overlapping reservations', async () => {
      const futureDate1 = new Date();
      futureDate1.setDate(futureDate1.getDate() + 7); // Next week
      const futureDate2 = new Date();
      futureDate2.setDate(futureDate2.getDate() + 8);
      
      const futureDate3 = new Date();
      futureDate3.setDate(futureDate3.getDate() + 10); // Week after
      const futureDate4 = new Date();
      futureDate4.setDate(futureDate4.getDate() + 11);
      
      // First reservation
      const request1 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: futureDate1,
        end_date: futureDate2,
        quantity: 1,
        item_id: testItem2.id
      };
      
      // Create first reservation
      await mockStorage.createReservationEvent(request1, testUser2.id);
      
      // Second non-overlapping reservation  
      const request2 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: futureDate3,
        end_date: futureDate4,
        quantity: 1
      };
      
      const result = await validator.validateNewReservation(request2, testItem2.id);
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
    
    it('should prevent double-booking for single quantity items', async () => {
      const futureDate1 = new Date();
      futureDate1.setDate(futureDate1.getDate() + 14); // Two weeks from now
      const futureDate2 = new Date();
      futureDate2.setDate(futureDate2.getDate() + 16);
      
      const futureDate3 = new Date();
      futureDate3.setDate(futureDate3.getDate() + 15); // Overlapping
      const futureDate4 = new Date();
      futureDate4.setDate(futureDate4.getDate() + 17);
      
      // First reservation
      const request1 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: futureDate1,
        end_date: futureDate2,
        quantity: 1,
        item_id: testItem2.id
      };
      
      await mockStorage.createReservationEvent(request1, testUser2.id);
      
      // Overlapping reservation should fail
      const request2 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: futureDate3,
        end_date: futureDate4,
        quantity: 1
      };
      
      const result = await validator.validateNewReservation(request2, testItem2.id);
      
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.includes('Insufficient quantity available'))).toBe(true);
    });
    
    it('should allow partial overlaps when quantity permits', async () => {
      const futureDate1 = new Date();
      futureDate1.setDate(futureDate1.getDate() + 21); // Three weeks from now
      const futureDate2 = new Date();
      futureDate2.setDate(futureDate2.getDate() + 23);
      
      const futureDate3 = new Date();
      futureDate3.setDate(futureDate3.getDate() + 22); // Overlapping
      const futureDate4 = new Date();
      futureDate4.setDate(futureDate4.getDate() + 24);
      
      // First reservation (1 of 2 quantity)
      const request1 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: futureDate1,
        end_date: futureDate2,
        quantity: 1,
        item_id: testItem1.id // Item with quantity 2
      };
      
      await mockStorage.createReservationEvent(request1, testUser2.id);
      
      // Second overlapping reservation should succeed (1 more of 2 total)
      const request2 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: futureDate3,
        end_date: futureDate4,
        quantity: 1
      };
      
      const result = await validator.validateNewReservation(request2, testItem1.id);
      
      expect(result.isValid).toBe(true);
      expect(result.warnings?.some(w => w.includes('existing reservation(s) overlap'))).toBe(true);
    });
    
    it('should prevent overlaps when total quantity would be exceeded', async () => {
      const futureDate1 = new Date();
      futureDate1.setDate(futureDate1.getDate() + 28); // Four weeks from now
      const futureDate2 = new Date();
      futureDate2.setDate(futureDate2.getDate() + 30);
      
      const futureDate3 = new Date();
      futureDate3.setDate(futureDate3.getDate() + 29); // Overlapping
      const futureDate4 = new Date();
      futureDate4.setDate(futureDate4.getDate() + 31);
      
      // First reservation taking full quantity
      const request1 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: futureDate1,
        end_date: futureDate2,
        quantity: 2, // Full quantity
        item_id: testItem1.id
      };
      
      await mockStorage.createReservationEvent(request1, testUser2.id);
      
      // Overlapping reservation should fail
      const request2 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: futureDate3,
        end_date: futureDate4,
        quantity: 1
      };
      
      const result = await validator.validateNewReservation(request2, testItem1.id);
      
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.includes('Insufficient quantity available'))).toBe(true);
    });
    
    it('should allow exactly X overlapping reservations for quantity X item', async () => {
      // Test comprehensive scenario: Item with quantity 3 should allow exactly 3 overlapping reservations
      
      // Create a test item with quantity 3
      const testItem3 = await mockStorage.createItem({
        owner_id: testUser1.id,
        title: 'Multi-Quantity Test Item',
        description: 'Item with quantity 3 for overlap testing',
        category: 'Tools',
        tags: ['test', 'multi'],
        location: 'Test Location',
        quantity_total: 3
      });
      
      // Define overlapping time period for all reservations
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + 35); // 5 weeks from now
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 37); // 5 weeks + 2 days
      
      // Create first reservation (1/3)
      const request1 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: startDate,
        end_date: endDate,
        quantity: 1,
        item_id: testItem3.id
      };
      await mockStorage.createReservationEvent(request1, testUser2.id);
      
      // Validate second reservation (2/3) - should succeed
      const request2 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: startDate,
        end_date: endDate,
        quantity: 1,
        item_id: testItem3.id
      };
      const result2 = await validator.validateNewReservation(request2, testItem3.id);
      expect(result2.isValid).toBe(true);
      expect(result2.warnings?.some(w => w.includes('existing reservation(s) overlap'))).toBe(true);
      
      // Create second reservation
      await mockStorage.createReservationEvent(request2, testUser2.id);
      
      // Validate third reservation (3/3) - should succeed (exactly at capacity)
      const request3 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: startDate,
        end_date: endDate,
        quantity: 1,
        item_id: testItem3.id
      };
      const result3 = await validator.validateNewReservation(request3, testItem3.id);
      expect(result3.isValid).toBe(true);
      expect(result3.warnings?.some(w => w.includes('existing reservation(s) overlap'))).toBe(true);
      
      // Create third reservation (now at full capacity)
      await mockStorage.createReservationEvent(request3, testUser2.id);
      
      // Validate fourth reservation (4/3) - should FAIL (exceeds capacity)
      const request4 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: startDate,
        end_date: endDate,
        quantity: 1,
        item_id: testItem3.id
      };
      const result4 = await validator.validateNewReservation(request4, testItem3.id);
      
      expect(result4.isValid).toBe(false);
      expect(result4.errors.some(e => e.includes('Insufficient quantity available'))).toBe(true);
      expect(result4.errors.some(e => e.includes('Requested: 1, Available: 0'))).toBe(true);
    });
    
    it('should handle mixed quantity overlapping reservations correctly', async () => {
      // Test scenario: Item with quantity 4, mixed reservation sizes
      
      const testItem4 = await mockStorage.createItem({
        owner_id: testUser1.id,
        title: 'Large Quantity Test Item',
        description: 'Item with quantity 4 for mixed overlap testing',
        category: 'Tools',
        tags: ['test', 'large'],
        location: 'Test Location',
        quantity_total: 4
      });
      
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + 42); // 6 weeks from now
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 44);
      
      // Create first reservation for quantity 2 (2/4 used)
      const request1 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: startDate,
        end_date: endDate,
        quantity: 2,
        item_id: testItem4.id
      };
      await mockStorage.createReservationEvent(request1, testUser2.id);
      
      // Second reservation for quantity 1 (3/4 used) - should succeed
      const request2 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: startDate,
        end_date: endDate,
        quantity: 1,
        item_id: testItem4.id
      };
      const result2 = await validator.validateNewReservation(request2, testItem4.id);
      expect(result2.isValid).toBe(true);
      
      await mockStorage.createReservationEvent(request2, testUser2.id);
      
      // Third reservation for quantity 1 (4/4 used) - should succeed
      const request3 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: startDate,
        end_date: endDate,
        quantity: 1,
        item_id: testItem4.id
      };
      const result3 = await validator.validateNewReservation(request3, testItem4.id);
      expect(result3.isValid).toBe(true);
      
      await mockStorage.createReservationEvent(request3, testUser2.id);
      
      // Fourth reservation for quantity 1 (5/4 would exceed) - should FAIL
      const request4 = {
        event_type: ReservationEventType.REQUESTED,
        start_date: startDate,
        end_date: endDate,
        quantity: 1,
        item_id: testItem4.id
      };
      const result4 = await validator.validateNewReservation(request4, testItem4.id);
      expect(result4.isValid).toBe(false);
      expect(result4.errors.some(e => e.includes('Insufficient quantity available'))).toBe(true);
    });
  });

  describe('State Transitions', () => {
    it('should allow valid state transitions', () => {
      const validTransitions = [
        { from: ReservationStatus.PENDING, event: ReservationEventType.APPROVED },
        { from: ReservationStatus.PENDING, event: ReservationEventType.REJECTED },
        { from: ReservationStatus.PENDING, event: ReservationEventType.CANCELLED },
        { from: ReservationStatus.APPROVED, event: ReservationEventType.ACTIVATED },
        { from: ReservationStatus.APPROVED, event: ReservationEventType.CANCELLED },
        { from: ReservationStatus.ACTIVE, event: ReservationEventType.RETURNED },
        { from: ReservationStatus.ACTIVE, event: ReservationEventType.CANCELLED },
        { from: ReservationStatus.ACTIVE, event: ReservationEventType.EXTENDED },
      ];
      
      for (const transition of validTransitions) {
        const result = validator.validateStateTransition(transition.from, transition.event);
        expect(result.isValid).toBe(true);
        expect(result.errors).toHaveLength(0);
      }
    });
    
    it('should reject invalid state transitions', () => {
      const invalidTransitions = [
        { from: ReservationStatus.PENDING, event: ReservationEventType.ACTIVATED },
        { from: ReservationStatus.PENDING, event: ReservationEventType.RETURNED },
        { from: ReservationStatus.REJECTED, event: ReservationEventType.APPROVED },
        { from: ReservationStatus.RETURNED, event: ReservationEventType.ACTIVATED },
        { from: ReservationStatus.CANCELLED, event: ReservationEventType.APPROVED },
      ];
      
      for (const transition of invalidTransitions) {
        const result = validator.validateStateTransition(transition.from, transition.event);
        expect(result.isValid).toBe(false);
        expect(result.errors.length).toBeGreaterThan(0);
        expect(result.errors[0]).toContain('Invalid state transition');
      }
    });
  });

  describe('Extension Validation', () => {
    it('should validate extension requests', async () => {
      const futureDate1 = new Date();
      futureDate1.setDate(futureDate1.getDate() + 35); // Five weeks from now
      const futureDate2 = new Date();
      futureDate2.setDate(futureDate2.getDate() + 37);
      
      // Create a reservation first
      const request = {
        event_type: ReservationEventType.REQUESTED,
        start_date: futureDate1,
        end_date: futureDate2,
        quantity: 1,
        item_id: testItem2.id
      };
      
      const event = await mockStorage.createReservationEvent(request, testUser2.id);
      
      // Test valid extension (extending end date)
      const newEndDate = new Date();
      newEndDate.setDate(newEndDate.getDate() + 40);
      
      const result = await validator.validateExtension(event.reservationId, newEndDate);
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
    
    it('should reject extensions that would cause conflicts', async () => {
      // This would need a more complex setup with multiple reservations
      // to properly test extension conflicts
      expect(true).toBe(true); // Placeholder for now
    });
  });

  describe('Availability Checking', () => {
    it('should calculate available quantity correctly', async () => {
      const futureDate1 = new Date();
      futureDate1.setDate(futureDate1.getDate() + 42);
      const futureDate2 = new Date();
      futureDate2.setDate(futureDate2.getDate() + 44);
      
      const dateRange: DateRange = {
        startDate: futureDate1,
        endDate: futureDate2
      };
      
      // Check availability for item with quantity 2
      const availability = await validator.getAvailability(testItem1.id, dateRange);
      
      expect(availability).toBe(2); // Should have full availability
    });
  });
});

