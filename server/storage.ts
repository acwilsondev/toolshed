import {
  users,
  items,
  reservationEvents,
  type User,
  type UpsertUser,
  type Item,
  type InsertItem,
  type ReservationEvent,
  type InsertReservationEvent,
} from "../shared/schema";
import { db } from "./db";
import { eq, desc, and, gte } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import { ReservationStatus, ReservationEventType, type ReservationState, type CreateUserRequest, type CreateItemRequest, type CreateReservationEventRequest } from "../app/utils/types";

// Interface for storage operations
export interface IStorage {
  // User operations (mandatory for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Additional user operations
  getUserByEmail(email: string): Promise<User | null>;
  createUser(userData: CreateUserRequest): Promise<User>;
  updateUser(id: string, userData: Partial<CreateUserRequest>): Promise<User | null>;
  deleteUser(id: string): Promise<boolean>;
  getUsers(limit?: number, offset?: number): Promise<User[]>;
  
  // Item operations
  getItems(limit?: number, offset?: number): Promise<Item[]>;
  getItemById(id: string): Promise<Item | null>;
  createItem(itemData: CreateItemRequest): Promise<Item>;
  updateItem(id: string, itemData: Partial<CreateItemRequest>): Promise<Item | null>;
  deleteItem(id: string): Promise<boolean>;
  
  // Reservation operations (event sourced)
  getReservationEvents(limit?: number, offset?: number, reservationId?: string, afterTimestamp?: Date): Promise<ReservationEvent[]>;
  createReservationEvent(eventData: CreateReservationEventRequest, actorId: string): Promise<ReservationEvent>;
  getReservationById(id: string): Promise<ReservationState | null>;
  getReservations(limit?: number, offset?: number, itemId?: string, requesterId?: string, status?: ReservationStatus): Promise<ReservationState[]>;
  
  // Authentication
  authenticateUser(email: string, password: string): Promise<User | null>;
}

export class DatabaseStorage implements IStorage {
  // User operations (mandatory for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Additional user operations
  async getUserByEmail(email: string): Promise<User | null> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || null;
  }

  async createUser(userData: CreateUserRequest): Promise<User> {
    const newUser = {
      id: uuidv4(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      neighborhood: userData.neighborhood || '',
      contactMethod: userData.contact_method || '',
    };
    
    const [user] = await db.insert(users).values(newUser).returning();
    return user;
  }

  async updateUser(id: string, userData: Partial<CreateUserRequest>): Promise<User | null> {
    const updateData: Partial<typeof users.$inferInsert> = {
      ...(userData.name && { name: userData.name }),
      ...(userData.email && { email: userData.email }),
      ...(userData.password && { password: userData.password }),
      ...(userData.neighborhood && { neighborhood: userData.neighborhood }),
      ...(userData.contact_method && { contactMethod: userData.contact_method }),
      updatedAt: new Date(),
    };

    const [user] = await db
      .update(users)
      .set(updateData)
      .where(eq(users.id, id))
      .returning();
    
    return user || null;
  }

  async deleteUser(id: string): Promise<boolean> {
    const result = await db.delete(users).where(eq(users.id, id));
    return (result.rowCount ?? 0) > 0;
  }

  async getUsers(limit = 50, offset = 0): Promise<User[]> {
    return await db.select().from(users).limit(limit).offset(offset);
  }

  // Item operations
  async getItems(limit = 50, offset = 0): Promise<Item[]> {
    return await db.select().from(items).limit(limit).offset(offset);
  }

  async getItemById(id: string): Promise<Item | null> {
    const [item] = await db.select().from(items).where(eq(items.id, id));
    return item || null;
  }

  async createItem(itemData: CreateItemRequest): Promise<Item> {
    const newItem: InsertItem = {
      id: uuidv4(),
      ownerId: itemData.owner_id,
      title: itemData.title,
      description: itemData.description || null,
      category: itemData.category,
      tags: itemData.tags || [],
      location: itemData.location,
      photoPath: itemData.photo_path || null,
      quantityTotal: itemData.quantity_total,
      quantityAvailable: itemData.quantity_total,
    };

    const [item] = await db.insert(items).values(newItem).returning();
    return item;
  }

  async updateItem(id: string, itemData: Partial<CreateItemRequest>): Promise<Item | null> {
    const updateData: Partial<typeof items.$inferInsert> = {
      ...(itemData.title && { title: itemData.title }),
      ...(itemData.description !== undefined && { description: itemData.description }),
      ...(itemData.category && { category: itemData.category }),
      ...(itemData.tags && { tags: itemData.tags }),
      ...(itemData.location && { location: itemData.location }),
      ...(itemData.photo_path !== undefined && { photoPath: itemData.photo_path }),
      ...(itemData.quantity_total && { quantityTotal: itemData.quantity_total }),
    };

    const [item] = await db
      .update(items)
      .set(updateData)
      .where(eq(items.id, id))
      .returning();
    
    return item || null;
  }

  async deleteItem(id: string): Promise<boolean> {
    const result = await db.delete(items).where(eq(items.id, id));
    return (result.rowCount ?? 0) > 0;
  }

  // Reservation operations (event sourced)
  async getReservationEvents(
    limit = 50,
    offset = 0,
    reservationId?: string,
    afterTimestamp?: Date
  ): Promise<ReservationEvent[]> {
    if (reservationId && afterTimestamp) {
      return await db.select().from(reservationEvents)
        .where(and(
          eq(reservationEvents.reservationId, reservationId),
          gte(reservationEvents.timestamp, afterTimestamp)
        ))
        .orderBy(desc(reservationEvents.timestamp))
        .limit(limit)
        .offset(offset);
    } else if (reservationId) {
      return await db.select().from(reservationEvents)
        .where(eq(reservationEvents.reservationId, reservationId))
        .orderBy(desc(reservationEvents.timestamp))
        .limit(limit)
        .offset(offset);
    } else if (afterTimestamp) {
      return await db.select().from(reservationEvents)
        .where(gte(reservationEvents.timestamp, afterTimestamp))
        .orderBy(desc(reservationEvents.timestamp))
        .limit(limit)
        .offset(offset);
    } else {
      return await db.select().from(reservationEvents)
        .orderBy(desc(reservationEvents.timestamp))
        .limit(limit)
        .offset(offset);
    }
  }

  async createReservationEvent(
    eventData: CreateReservationEventRequest,
    actorId: string
  ): Promise<ReservationEvent> {
    // Import validation here to avoid circular dependency
    const { reservationValidator } = await import('../app/utils/reservationValidator.server');
    
    // For new reservations (REQUESTED events), validate against overlaps
    if (eventData.event_type === 'requested' && eventData.item_id) {
      const validation = await reservationValidator.validateNewReservation(eventData, eventData.item_id);
      if (!validation.isValid) {
        throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
      }
    }
    
    // For existing reservations, validate state transitions
    if (eventData.reservation_id) {
      const existingReservation = await this.getReservationById(eventData.reservation_id);
      if (existingReservation) {
        const stateValidation = reservationValidator.validateStateTransition(
          existingReservation.status,
          eventData.event_type as ReservationEventType
        );
        if (!stateValidation.isValid) {
          throw new Error(`Invalid state transition: ${stateValidation.errors.join(', ')}`);
        }
      }
    }
    
    // For extension events, validate the extension
    if (eventData.event_type === 'extended' && eventData.reservation_id && eventData.end_date) {
      const extensionValidation = await reservationValidator.validateExtension(
        eventData.reservation_id,
        eventData.end_date
      );
      if (!extensionValidation.isValid) {
        throw new Error(`Extension validation failed: ${extensionValidation.errors.join(', ')}`);
      }
    }

    const newEvent: InsertReservationEvent = {
      id: uuidv4(),
      reservationId: eventData.reservation_id || uuidv4(),
      itemId: eventData.item_id || null, // Store item_id in the event
      eventType: eventData.event_type,
      actorId,
      quantity: eventData.quantity || null,
      startDate: eventData.start_date || null,
      endDate: eventData.end_date || null,
      notes: eventData.notes || null,
      expectedVersion: eventData.expected_version || null,
    };

    const [event] = await db.insert(reservationEvents).values(newEvent).returning();
    return event;
  }

  async getReservationById(id: string): Promise<ReservationState | null> {
    const events = await this.getReservationEvents(undefined, undefined, id);
    if (events.length === 0) return null;

    return await this.computeReservationStateFromEvents(events);
  }

  async getReservations(
    limit = 50,
    offset = 0,
    itemId?: string,
    requesterId?: string,
    status?: ReservationStatus
  ): Promise<ReservationState[]> {
    const allEvents = await this.getReservationEvents();
    const reservationMap = new Map<string, ReservationEvent[]>();

    // Group events by reservation ID
    for (const event of allEvents) {
      if (!reservationMap.has(event.reservationId)) {
        reservationMap.set(event.reservationId, []);
      }
      reservationMap.get(event.reservationId)!.push(event);
    }

    // Compute reservation states
    const reservations: ReservationState[] = [];
    for (const [reservationId, events] of reservationMap.entries()) {
      const state = await this.computeReservationStateFromEvents(events);
      if (state) {
        // Apply filters
        if (itemId && state.item_id !== itemId) continue;
        if (requesterId && state.requester_id !== requesterId) continue;
        if (status && state.status !== status) continue;
        
        reservations.push(state);
      }
    }

    // Apply pagination
    return reservations
      .sort((a, b) => b.updated_at.getTime() - a.updated_at.getTime())
      .slice(offset, offset + limit);
  }

  // Authentication
  async authenticateUser(email: string, password: string): Promise<User | null> {
    const user = await this.getUserByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  // Helper method to compute reservation state from events
  private async computeReservationStateFromEvents(events: ReservationEvent[]): Promise<ReservationState | null> {
    if (events.length === 0) return null;

    // Sort events by timestamp
    const sortedEvents = events.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    
    const firstEvent = sortedEvents[0];
    const lastEvent = sortedEvents[sortedEvents.length - 1];

    // Get item_id from the first event (should be from a 'requested' event)
    const itemId = await this.getItemIdFromReservationId(firstEvent.reservationId);
    
    // Get owner_id from the item
    let ownerId = '';
    if (itemId) {
      const item = await this.getItemById(itemId);
      ownerId = item?.ownerId || '';
    }

    let state: ReservationState = {
      id: firstEvent.reservationId,
      item_id: itemId || '',
      owner_id: ownerId,
      requester_id: firstEvent.actorId,
      status: ReservationStatus.PENDING,
      quantity_requested: firstEvent.quantity || 1,
      start_date: firstEvent.startDate,
      end_date: firstEvent.endDate,
      notes: firstEvent.notes,
      version: sortedEvents.length,
      created_at: firstEvent.timestamp,
      updated_at: lastEvent.timestamp,
    };

    // Apply events in order to compute final state
    for (const event of sortedEvents) {
      switch (event.eventType as ReservationEventType) {
        case ReservationEventType.REQUESTED:
          state.status = ReservationStatus.PENDING;
          if (event.quantity) state.quantity_requested = event.quantity;
          if (event.startDate) state.start_date = event.startDate;
          if (event.endDate) state.end_date = event.endDate;
          if (event.notes) state.notes = event.notes;
          break;
        case ReservationEventType.APPROVED:
          state.status = ReservationStatus.APPROVED;
          break;
        case ReservationEventType.REJECTED:
          state.status = ReservationStatus.REJECTED;
          break;
        case ReservationEventType.ACTIVATED:
          state.status = ReservationStatus.ACTIVE;
          break;
        case ReservationEventType.RETURNED:
          state.status = ReservationStatus.RETURNED;
          break;
        case ReservationEventType.CANCELLED:
          state.status = ReservationStatus.CANCELLED;
          break;
        case ReservationEventType.EXTENDED:
          if (event.endDate) state.end_date = event.endDate;
          break;
        case ReservationEventType.NOTES_UPDATED:
          if (event.notes) state.notes = event.notes;
          break;
      }
      state.updated_at = event.timestamp;
    }

    return state;
  }

  private async getItemIdFromReservationId(reservationId: string): Promise<string> {
    // Get all events for this reservation to find the initial request event
    const events = await this.getReservationEvents(undefined, undefined, reservationId);
    const requestEvent = events.find(e => e.eventType === 'requested');
    
    // Return the item_id from the request event
    return requestEvent?.itemId || '';
  }
}

export const storage = new DatabaseStorage();