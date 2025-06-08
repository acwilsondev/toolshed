import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ReservationValidationService, type DateRange } from '../app/utils/reservationValidator.server'
import { ReservationEventType, ReservationStatus } from '../app/utils/types'
import type { ReservationState, Item } from '../app/utils/types'
import { mockStorage } from './mocks/db'

// Storage is now mocked globally in test setup

describe('ReservationValidationService Unit Tests', () => {
  let validator: ReservationValidationService;
  let mockItem1: Item;
  let mockItem2: Item;
  
  beforeEach(async () => {
    validator = new ReservationValidationService();
    vi.clearAllMocks();
    
    // Create actual mock items in the mock storage
    mockItem1 = await mockStorage.createItem({
      owner_id: 'user-1',
      title: 'Test Drill',
      description: 'A drill for testing',
      category: 'Tools',
      tags: ['power', 'drill'],
      location: 'Test Location',
      quantity_total: 2
    });
    
    mockItem2 = await mockStorage.createItem({
      owner_id: 'user-1',
      title: 'Test Ladder',
      description: 'A ladder for testing',
      category: 'Tools',
      tags: ['ladder'],
      location: 'Test Location',
      quantity_total: 1
    });
  });
  
  describe('Date Range Overlap Logic', () => {
    it('should correctly identify overlapping date ranges', () => {
      // Test the core business logic without database calls
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
      
      // Test via reflection since datesOverlap is private
      const validatorAny = validator as any;
      
      expect(validatorAny.datesOverlap(range1, range2)).toBe(true);
      expect(validatorAny.datesOverlap(range1, range3)).toBe(false); 
      expect(validatorAny.datesOverlap(range2, range3)).toBe(true);
    });
    
    it('should handle edge cases for date overlaps', () => {
      const validatorAny = validator as any;
      
      // Adjacent ranges (touching but not overlapping)
      const range1: DateRange = {
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-01-05')
      };
      
      const range2: DateRange = {
        startDate: new Date('2024-01-05'),
        endDate: new Date('2024-01-10')
      };
      
      expect(validatorAny.datesOverlap(range1, range2)).toBe(false);
      
      // Same start date
      const range3: DateRange = {
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-01-03')
      };
      
      const range4: DateRange = {
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-01-05')
      };
      
      expect(validatorAny.datesOverlap(range3, range4)).toBe(true);
    });
  });
  
  describe('Basic Validation Rules', () => {
    it('should reject requests without required dates', async () => {
      const invalidRequest = {
        event_type: ReservationEventType.REQUESTED,
        quantity: 1
        // Missing start_date and end_date
      };
      
      const result = await validator.validateNewReservation(invalidRequest, mockItem1.id);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Start date and end date are required for new reservations');
    });
    
    it('should reject requests with end date before start date', async () => {
      const invalidRequest = {
        event_type: ReservationEventType.REQUESTED,
        start_date: new Date('2024-01-05'),
        end_date: new Date('2024-01-01'),
        quantity: 1
      };
      
      const result = await validator.validateNewReservation(invalidRequest, mockItem1.id);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Start date must be before end date');
    });
    
    it('should reject requests with past start dates', async () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);
      
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      
      const invalidRequest = {
        event_type: ReservationEventType.REQUESTED,
        start_date: pastDate,
        end_date: futureDate,
        quantity: 1
      };
      
      const result = await validator.validateNewReservation(invalidRequest, mockItem1.id);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Start date cannot be in the past');
    });
    
    it('should reject requests for non-existent items', async () => {
      mockStorage.getItemById.mockResolvedValue(null);
      
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
      
      const result = await validator.validateNewReservation(request, 'non-existent');
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Item not found');
    });
    
    it('should reject requests exceeding total quantity', async () => {
      mockStorage.getItemById.mockResolvedValue(mockItem1);
      
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dayAfter = new Date();
      dayAfter.setDate(dayAfter.getDate() + 2);
      
      const request = {
        event_type: ReservationEventType.REQUESTED,
        start_date: tomorrow,
        end_date: dayAfter,
        quantity: 5 // More than mockItem1's total of 2
      };
      
      const result = await validator.validateNewReservation(request, mockItem1.id);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Requested quantity (5) exceeds total available (2)');
    });
    
    it('should accept valid requests with no conflicts', async () => {
      mockStorage.getItemById.mockResolvedValue(mockItem1);
      mockStorage.getReservations.mockResolvedValue([]);
      
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dayAfter = new Date();
      dayAfter.setDate(dayAfter.getDate() + 2);
      
      const validRequest = {
        event_type: ReservationEventType.REQUESTED,
        start_date: tomorrow,
        end_date: dayAfter,
        quantity: 1
      };
      
      const result = await validator.validateNewReservation(validRequest, mockItem1.id);
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });
  
  describe('Extension Validation', () => {
    it('should reject extensions to past dates', async () => {
      const existingReservation: ReservationState = {
        id: 'reservation-1',
        item_id: 'item-1',
        owner_id: 'user-1',
        requester_id: 'user-2',
        status: ReservationStatus.ACTIVE,
        quantity_requested: 1,
        start_date: new Date('2024-06-10'),
        end_date: new Date('2024-06-15'),
        notes: null,
        version: 2,
        created_at: new Date(),
        updated_at: new Date()
      };
      
      mockStorage.getReservationById.mockResolvedValue(existingReservation);
      
      // Test extension to past date
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);
      
      const result = await validator.validateExtension('reservation-1', pastDate);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('New end date cannot be in the past');
    });
  });
  
  describe('Overlap Detection and Quantity Management', () => {
    it('should detect overlapping reservations correctly', async () => {
      mockStorage.getItemById.mockResolvedValue(mockItem2); // Single quantity item
      
      // Mock an existing reservation that overlaps
      const existingReservation: ReservationState = {
        id: 'reservation-1',
        item_id: 'item-2',
        owner_id: 'user-1',
        requester_id: 'user-2',
        status: ReservationStatus.APPROVED,
        quantity_requested: 1,
        start_date: new Date('2024-06-10'),
        end_date: new Date('2024-06-15'),
        notes: null,
        version: 1,
        created_at: new Date(),
        updated_at: new Date()
      };
      
      mockStorage.getReservations.mockResolvedValue([existingReservation]);
      
      const dateRange: DateRange = {
        startDate: new Date('2024-06-12'), // Overlaps with existing reservation
        endDate: new Date('2024-06-17')
      };
      
      const overlapInfo = await validator.checkOverlappingReservations(mockItem2.id, dateRange, 1);
      
      expect(overlapInfo.hasOverlap).toBe(true);
      expect(overlapInfo.overlappingReservations).toHaveLength(1);
      expect(overlapInfo.availableQuantity).toBe(0); // 1 total - 1 reserved = 0
      expect(overlapInfo.requestedQuantity).toBe(1);
    });
    
    it('should allow overlaps when sufficient quantity is available', async () => {
      mockStorage.getItemById.mockResolvedValue(mockItem1); // Multi-quantity item
      
      // Mock an existing reservation that uses only part of the quantity
      const existingReservation: ReservationState = {
        id: 'reservation-1',
        item_id: 'item-1',
        owner_id: 'user-1',
        requester_id: 'user-2',
        status: ReservationStatus.APPROVED,
        quantity_requested: 1,
        start_date: new Date('2024-06-10'),
        end_date: new Date('2024-06-15'),
        notes: null,
        version: 1,
        created_at: new Date(),
        updated_at: new Date()
      };
      
      mockStorage.getReservations.mockResolvedValue([existingReservation]);
      
      const dateRange: DateRange = {
        startDate: new Date('2024-06-12'),
        endDate: new Date('2024-06-17')
      };
      
      const overlapInfo = await validator.checkOverlappingReservations(mockItem1.id, dateRange, 1);
      
      expect(overlapInfo.hasOverlap).toBe(true);
      expect(overlapInfo.overlappingReservations).toHaveLength(1);
      expect(overlapInfo.availableQuantity).toBe(1); // 2 total - 1 reserved = 1
      expect(overlapInfo.requestedQuantity).toBe(1);
    });
    
    it('should not count cancelled or rejected reservations as conflicts', async () => {
      mockStorage.getItemById.mockResolvedValue(mockItem2);
      
      // Mock cancelled and rejected reservations
      const cancelledReservation: ReservationState = {
        id: 'reservation-1',
        item_id: 'item-2',
        owner_id: 'user-1',
        requester_id: 'user-2',
        status: ReservationStatus.CANCELLED,
        quantity_requested: 1,
        start_date: new Date('2024-06-10'),
        end_date: new Date('2024-06-15'),
        notes: null,
        version: 2,
        created_at: new Date(),
        updated_at: new Date()
      };
      
      const rejectedReservation: ReservationState = {
        id: 'reservation-2',
        item_id: 'item-2',
        owner_id: 'user-1',
        requester_id: 'user-3',
        status: ReservationStatus.REJECTED,
        quantity_requested: 1,
        start_date: new Date('2024-06-12'),
        end_date: new Date('2024-06-17'),
        notes: null,
        version: 1,
        created_at: new Date(),
        updated_at: new Date()
      };
      
      mockStorage.getReservations.mockResolvedValue([cancelledReservation, rejectedReservation]);
      
      const dateRange: DateRange = {
        startDate: new Date('2024-06-12'),
        endDate: new Date('2024-06-17')
      };
      
      const overlapInfo = await validator.checkOverlappingReservations(mockItem2.id, dateRange, 1);
      
      expect(overlapInfo.hasOverlap).toBe(false);
      expect(overlapInfo.overlappingReservations).toHaveLength(0);
      expect(overlapInfo.availableQuantity).toBe(1); // Full quantity available
    });
  });
  
  describe('State Transition Validation', () => {
    it('should allow valid state transitions', () => {
      const validTransitions = [
        { from: ReservationStatus.PENDING, to: ReservationEventType.APPROVED },
        { from: ReservationStatus.PENDING, to: ReservationEventType.REJECTED },
        { from: ReservationStatus.PENDING, to: ReservationEventType.CANCELLED },
        { from: ReservationStatus.APPROVED, to: ReservationEventType.ACTIVATED },
        { from: ReservationStatus.APPROVED, to: ReservationEventType.CANCELLED },
        { from: ReservationStatus.ACTIVE, to: ReservationEventType.RETURNED },
        { from: ReservationStatus.ACTIVE, to: ReservationEventType.CANCELLED },
        { from: ReservationStatus.ACTIVE, to: ReservationEventType.EXTENDED },
      ];
      
      for (const transition of validTransitions) {
        const result = validator.validateStateTransition(transition.from, transition.to);
        expect(result.isValid).toBe(true);
        expect(result.errors).toHaveLength(0);
      }
    });
    
    it('should reject invalid state transitions', () => {
      const invalidTransitions = [
        { from: ReservationStatus.PENDING, to: ReservationEventType.ACTIVATED },
        { from: ReservationStatus.PENDING, to: ReservationEventType.RETURNED },
        { from: ReservationStatus.REJECTED, to: ReservationEventType.APPROVED },
        { from: ReservationStatus.RETURNED, to: ReservationEventType.ACTIVATED },
        { from: ReservationStatus.CANCELLED, to: ReservationEventType.APPROVED },
      ];
      
      for (const transition of invalidTransitions) {
        const result = validator.validateStateTransition(transition.from, transition.to);
        expect(result.isValid).toBe(false);
        expect(result.errors.length).toBeGreaterThan(0);
        expect(result.errors[0]).toContain('Invalid state transition');
      }
    });
  });
  
  describe('Extension Validation', () => {
    it('should validate basic extension requirements', async () => {
      // Use relative dates to ensure they're in the future
      const currentEndDate = new Date();
      currentEndDate.setDate(currentEndDate.getDate() + 10); // 10 days from now
      
      const newEndDate = new Date();
      newEndDate.setDate(newEndDate.getDate() + 15); // 15 days from now (5 days after current end)
      
      const existingReservation: ReservationState = {
        id: 'reservation-1',
        item_id: mockItem1.id, // Use actual mock item ID
        owner_id: 'user-1',
        requester_id: 'user-2',
        status: ReservationStatus.ACTIVE,
        quantity_requested: 1,
        start_date: new Date(), // Today
        end_date: currentEndDate,
        notes: null,
        version: 2,
        created_at: new Date(),
        updated_at: new Date()
      };
      
      mockStorage.getReservationById.mockResolvedValue(existingReservation);
      mockStorage.getReservations.mockResolvedValue([]);
      mockStorage.getItemById.mockResolvedValue(mockItem1); // Ensure item exists
      
      // Test valid extension
      const result = await validator.validateExtension('reservation-1', newEndDate);
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
    
    it('should reject extensions to earlier dates', async () => {
      const existingReservation: ReservationState = {
        id: 'reservation-1',
        item_id: 'item-1',
        owner_id: 'user-1',
        requester_id: 'user-2',
        status: ReservationStatus.ACTIVE,
        quantity_requested: 1,
        start_date: new Date('2024-06-10'),
        end_date: new Date('2024-06-15'),
        notes: null,
        version: 2,
        created_at: new Date(),
        updated_at: new Date()
      };
      
      mockStorage.getReservationById.mockResolvedValue(existingReservation);
      
      // Test extension to earlier date
      const earlierDate = new Date('2024-06-12'); // Before current end date
      const result = await validator.validateExtension('reservation-1', earlierDate);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('New end date must be later than current end date');
    });
    
    it('should reject extensions to past dates', async () => {
      const existingReservation: ReservationState = {
        id: 'reservation-1',
        item_id: 'item-1',
        owner_id: 'user-1',
        requester_id: 'user-2',
        status: ReservationStatus.ACTIVE,
        quantity_requested: 1,
        start_date: new Date('2024-06-10'),
        end_date: new Date('2024-06-15'),
        notes: null,
        version: 2,
        created_at: new Date(),
        updated_at: new Date()
      };
      
      mockStorage.getReservationById.mockResolvedValue(existingReservation);
      
      // Test extension to past date
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);
      
      const result = await validator.validateExtension('reservation-1', pastDate);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('New end date cannot be in the past');
    });
  });
});
