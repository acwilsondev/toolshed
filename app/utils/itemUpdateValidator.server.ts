import { storage } from '../../server/storage';
import type { Item } from '../../shared/schema';
import type { CreateItemRequest } from './types';
import { ReservationStatus } from './types';

/**
 * Validation result for item update operations
 */
export interface ItemUpdateValidationResult {
  isValid: boolean;
  errors: string[];
  warnings?: string[];
}

/**
 * Service for validating item updates, particularly quantity changes
 * that could conflict with existing reservations
 */
export class ItemUpdateValidationService {
  
  /**
   * Validates an item update, ensuring quantity changes don't conflict
   * with existing active reservations
   */
  async validateItemUpdate(
    itemId: string, 
    updateData: Partial<CreateItemRequest>
  ): Promise<ItemUpdateValidationResult> {
    const errors: string[] = [];
    const warnings: string[] = [];
    
    // Get the current item
    const currentItem = await storage.getItemById(itemId);
    if (!currentItem) {
      errors.push('Item not found');
      return { isValid: false, errors, warnings };
    }
    
    // If quantity_total is being updated, validate against active reservations
    if (updateData.quantity_total !== undefined) {
      const quantityValidation = await this.validateQuantityReduction(
        itemId, 
        currentItem.quantityTotal, 
        updateData.quantity_total
      );
      
      errors.push(...quantityValidation.errors);
      warnings.push(...quantityValidation.warnings);
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      warnings: warnings.length > 0 ? warnings : undefined
    };
  }
  
  /**
   * Validates reducing an item's quantity against active reservations
   */
  private async validateQuantityReduction(
    itemId: string,
    currentQuantity: number,
    newQuantity: number
  ): Promise<{ errors: string[], warnings: string[] }> {
    const errors: string[] = [];
    const warnings: string[] = [];
    
    // Basic validation
    if (newQuantity < 0) {
      errors.push('Quantity cannot be negative');
      return { errors, warnings };
    }
    
    if (newQuantity === currentQuantity) {
      // No change, no validation needed
      return { errors, warnings };
    }
    
    if (newQuantity > currentQuantity) {
      // Increasing quantity is always safe
      warnings.push(`Quantity increased from ${currentQuantity} to ${newQuantity}`);
      return { errors, warnings };
    }
    
    // Quantity is being reduced - check active reservations
    const activeReservations = await this.getActiveReservationsForItem(itemId);
    
    if (activeReservations.length === 0) {
      // No active reservations, reduction is safe
      warnings.push(`Quantity reduced from ${currentQuantity} to ${newQuantity} (no active reservations)`);
      return { errors, warnings };
    }
    
    // Calculate maximum quantity needed for current active reservations
    const maxQuantityNeeded = await this.calculateMaxQuantityNeeded(itemId, activeReservations);
    
    if (newQuantity < maxQuantityNeeded) {
      errors.push(
        `Cannot reduce quantity to ${newQuantity}. ` +
        `${maxQuantityNeeded} units are needed for ${activeReservations.length} active reservation(s). ` +
        `Minimum allowed quantity: ${maxQuantityNeeded}`
      );
      
      // Provide detailed breakdown
      const breakdown = await this.getReservationBreakdown(activeReservations);
      errors.push(`Active reservations: ${breakdown}`);
    } else if (newQuantity === maxQuantityNeeded) {
      warnings.push(
        `Quantity reduced to minimum safe value (${newQuantity}). ` +
        `All ${maxQuantityNeeded} units are reserved by active reservations.`
      );
    } else {
      warnings.push(
        `Quantity reduced from ${currentQuantity} to ${newQuantity}. ` +
        `${maxQuantityNeeded} units are reserved by active reservations, ` +
        `${newQuantity - maxQuantityNeeded} units remain available.`
      );
    }
    
    return { errors, warnings };
  }
  
  /**
   * Gets all active reservations for an item (pending, approved, or active status)
   */
  private async getActiveReservationsForItem(itemId: string) {
    const allReservations = await storage.getReservations(undefined, undefined, itemId);
    
    // Filter to only "active" reservations that would be affected by quantity changes
    return allReservations.filter(reservation => 
      reservation.status === ReservationStatus.PENDING ||
      reservation.status === ReservationStatus.APPROVED ||
      reservation.status === ReservationStatus.ACTIVE
    );
  }
  
  /**
   * Calculates the maximum quantity needed to satisfy all active reservations
   * at any point in time (considering overlapping reservations)
   */
  private async calculateMaxQuantityNeeded(itemId: string, activeReservations: any[]) {
    if (activeReservations.length === 0) return 0;
    
    // Create timeline of all reservation start/end events
    const events: { date: Date, type: 'start' | 'end', quantity: number }[] = [];
    
    for (const reservation of activeReservations) {
      if (reservation.start_date && reservation.end_date) {
        events.push({
          date: new Date(reservation.start_date),
          type: 'start',
          quantity: reservation.quantity_requested
        });
        events.push({
          date: new Date(reservation.end_date),
          type: 'end',
          quantity: reservation.quantity_requested
        });
      }
    }
    
    // Sort events by date
    events.sort((a, b) => a.date.getTime() - b.date.getTime());
    
    // Calculate maximum concurrent quantity
    let currentQuantity = 0;
    let maxQuantity = 0;
    
    for (const event of events) {
      if (event.type === 'start') {
        currentQuantity += event.quantity;
      } else {
        currentQuantity -= event.quantity;
      }
      maxQuantity = Math.max(maxQuantity, currentQuantity);
    }
    
    return maxQuantity;
  }
  
  /**
   * Provides a human-readable breakdown of active reservations
   */
  private async getReservationBreakdown(activeReservations: any[]): Promise<string> {
    const statusCounts = activeReservations.reduce((acc, reservation) => {
      acc[reservation.status] = (acc[reservation.status] || 0) + reservation.quantity_requested;
      return acc;
    }, {} as Record<string, number>);
    
    const breakdown = Object.entries(statusCounts)
      .map(([status, quantity]) => `${quantity} ${status}`)
      .join(', ');
    
    return breakdown;
  }
  
  /**
   * Validates item deletion against active reservations
   */
  async validateItemDeletion(itemId: string): Promise<ItemUpdateValidationResult> {
    const errors: string[] = [];
    const warnings: string[] = [];
    
    const activeReservations = await this.getActiveReservationsForItem(itemId);
    
    if (activeReservations.length > 0) {
      errors.push(
        `Cannot delete item with ${activeReservations.length} active reservation(s). ` +
        `Cancel or complete all reservations before deleting.`
      );
      
      const breakdown = await this.getReservationBreakdown(activeReservations);
      errors.push(`Active reservations: ${breakdown}`);
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      warnings: warnings.length > 0 ? warnings : undefined
    };
  }
}

