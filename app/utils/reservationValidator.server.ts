import type { 
  ReservationState, 
  ReservationEvent, 
  CreateReservationEventRequest,
  Item 
} from './types';
import { ReservationStatus, ReservationEventType } from './types';
import { storage } from '../../server/storage';

/**
 * Validation result for reservation operations
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings?: string[];
}

/**
 * Date range for reservation overlap checking
 */
export interface DateRange {
  startDate: Date;
  endDate: Date;
}

/**
 * Overlap detection result
 */
export interface OverlapInfo {
  hasOverlap: boolean;
  overlappingReservations: ReservationState[];
  availableQuantity: number;
  requestedQuantity: number;
}

/**
 * Service class for validating reservation operations
 * Implements core business logic for preventing double-booking and managing availability
 */
export class ReservationValidationService {
  
  /**
   * Validates a new reservation request against existing reservations
   * @param request The reservation request to validate
   * @param itemId The ID of the item being reserved
   * @returns Validation result with any errors or warnings
   */
  async validateNewReservation(
    request: CreateReservationEventRequest,
    itemId: string
  ): Promise<ValidationResult> {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Basic validation
    if (request.event_type !== ReservationEventType.REQUESTED) {
      errors.push('Only REQUESTED events can create new reservations');
    }

    if (!request.start_date || !request.end_date) {
      errors.push('Start date and end date are required for new reservations');
      return { isValid: false, errors, warnings };
    }

    if (request.start_date >= request.end_date) {
      errors.push('Start date must be before end date');
    }

    if (request.start_date < new Date()) {
      errors.push('Start date cannot be in the past');
    }

    const requestedQuantity = request.quantity || 1;
    if (requestedQuantity <= 0) {
      errors.push('Requested quantity must be greater than 0');
    }

    // If basic validation fails, return early
    if (errors.length > 0) {
      return { isValid: false, errors, warnings };
    }

    // Get item to check total quantity
    const item = await storage.getItemById(itemId);
    if (!item) {
      errors.push('Item not found');
      return { isValid: false, errors, warnings };
    }

    if (requestedQuantity > item.quantityTotal) {
      errors.push(`Requested quantity (${requestedQuantity}) exceeds total available (${item.quantityTotal})`);
    }

    // Check for overlapping reservations
    const dateRange: DateRange = {
      startDate: request.start_date,
      endDate: request.end_date
    };

    const overlapInfo = await this.checkOverlappingReservations(itemId, dateRange, requestedQuantity);
    
    if (overlapInfo.hasOverlap) {
      if (overlapInfo.availableQuantity < requestedQuantity) {
        errors.push(
          `Insufficient quantity available. Requested: ${requestedQuantity}, ` +
          `Available: ${overlapInfo.availableQuantity} during ${dateRange.startDate.toDateString()} - ${dateRange.endDate.toDateString()}`
        );
      }
    }

    // Add warnings for close reservations
    if (overlapInfo.overlappingReservations.length > 0 && overlapInfo.availableQuantity >= requestedQuantity) {
      warnings.push(
        `${overlapInfo.overlappingReservations.length} existing reservation(s) overlap with this time period`
      );
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Checks for overlapping reservations for a specific item and date range
   * @param itemId The item to check reservations for
   * @param dateRange The date range to check for overlaps
   * @param requestedQuantity The quantity being requested
   * @returns Information about overlapping reservations and availability
   */
  async checkOverlappingReservations(
    itemId: string,
    dateRange: DateRange,
    requestedQuantity: number = 1
  ): Promise<OverlapInfo> {
    // Get all active reservations for this item
    const activeReservations = await storage.getReservations(
      undefined, // limit
      undefined, // offset  
      itemId     // itemId filter
    );

    // Filter to only active and approved reservations that could conflict
    const conflictingStatuses = [
      ReservationStatus.APPROVED,
      ReservationStatus.ACTIVE,
      ReservationStatus.PENDING // Include pending to prevent optimistic booking
    ];

    const overlappingReservations = activeReservations.filter(reservation => {
      // Only check reservations in conflicting states
      if (!conflictingStatuses.includes(reservation.status)) {
        return false;
      }

      // Only check reservations with valid date ranges
      if (!reservation.start_date || !reservation.end_date) {
        return false;
      }

      // Check for date overlap
      return this.datesOverlap(
        { startDate: reservation.start_date, endDate: reservation.end_date },
        dateRange
      );
    });

    // Calculate available quantity during the overlap period
    const item = await storage.getItemById(itemId);
    const totalQuantity = item?.quantityTotal || 0;
    
    const reservedQuantity = overlappingReservations.reduce((sum, reservation) => {
      return sum + (reservation.quantity_requested || 1);
    }, 0);

    const availableQuantity = Math.max(0, totalQuantity - reservedQuantity);

    return {
      hasOverlap: overlappingReservations.length > 0,
      overlappingReservations,
      availableQuantity,
      requestedQuantity
    };
  }

  /**
   * Checks if two date ranges overlap
   * @param range1 First date range
   * @param range2 Second date range
   * @returns True if the ranges overlap
   */
  private datesOverlap(range1: DateRange, range2: DateRange): boolean {
    // Ranges overlap if one starts before the other ends
    return range1.startDate < range2.endDate && range2.startDate < range1.endDate;
  }

  /**
   * Validates a reservation state transition
   * @param currentStatus Current reservation status
   * @param eventType The event being applied
   * @returns Validation result
   */
  validateStateTransition(
    currentStatus: ReservationStatus,
    eventType: ReservationEventType
  ): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    const validTransitions: Record<ReservationStatus, ReservationEventType[]> = {
      [ReservationStatus.PENDING]: [
        ReservationEventType.APPROVED,
        ReservationEventType.REJECTED,
        ReservationEventType.CANCELLED,
        ReservationEventType.NOTES_UPDATED
      ],
      [ReservationStatus.APPROVED]: [
        ReservationEventType.ACTIVATED,
        ReservationEventType.CANCELLED,
        ReservationEventType.EXTENDED,
        ReservationEventType.NOTES_UPDATED
      ],
      [ReservationStatus.REJECTED]: [
        ReservationEventType.NOTES_UPDATED
      ],
      [ReservationStatus.ACTIVE]: [
        ReservationEventType.RETURNED,
        ReservationEventType.CANCELLED,
        ReservationEventType.EXTENDED,
        ReservationEventType.NOTES_UPDATED
      ],
      [ReservationStatus.RETURNED]: [
        ReservationEventType.NOTES_UPDATED
      ],
      [ReservationStatus.CANCELLED]: [
        ReservationEventType.NOTES_UPDATED
      ]
    };

    const allowedTransitions = validTransitions[currentStatus] || [];
    
    if (!allowedTransitions.includes(eventType)) {
      errors.push(
        `Invalid state transition: Cannot apply ${eventType} to reservation with status ${currentStatus}`
      );
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Gets the current availability for an item during a specific date range
   * @param itemId The item ID to check
   * @param dateRange The date range to check availability for
   * @returns Available quantity during that period
   */
  async getAvailability(itemId: string, dateRange: DateRange): Promise<number> {
    const overlapInfo = await this.checkOverlappingReservations(itemId, dateRange, 0);
    return overlapInfo.availableQuantity;
  }

  /**
   * Validates an extension request
   * @param reservationId The reservation being extended
   * @param newEndDate The new end date
   * @returns Validation result
   */
  async validateExtension(
    reservationId: string,
    newEndDate: Date
  ): Promise<ValidationResult> {
    const errors: string[] = [];
    const warnings: string[] = [];

    const reservation = await storage.getReservationById(reservationId);
    if (!reservation) {
      errors.push('Reservation not found');
      return { isValid: false, errors, warnings };
    }

    if (!reservation.end_date || !reservation.start_date) {
      errors.push('Reservation must have valid start and end dates');
      return { isValid: false, errors, warnings };
    }

    if (newEndDate <= reservation.end_date) {
      errors.push('New end date must be later than current end date');
    }

    if (newEndDate <= new Date()) {
      errors.push('New end date cannot be in the past');
    }

    // Check if extension period would conflict with other reservations
    const extensionPeriod: DateRange = {
      startDate: reservation.end_date,
      endDate: newEndDate
    };

    const overlapInfo = await this.checkOverlappingReservations(
      reservation.item_id,
      extensionPeriod,
      reservation.quantity_requested
    );

    if (overlapInfo.hasOverlap && overlapInfo.availableQuantity < reservation.quantity_requested) {
      errors.push(
        `Cannot extend reservation: insufficient quantity available during extension period`
      );
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }
}

// Export singleton instance
export const reservationValidator = new ReservationValidationService();

