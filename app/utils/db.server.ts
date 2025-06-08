// Event-sourced in-memory database for development
// This implements the reservation system with complete event sourcing

import type { 
  User, 
  Item, 
  ReservationState,
  ReservationEvent,
  ReservationStatus,
  ReservationEventType,
  CreateUserRequest,
  CreateItemRequest,
  CreateReservationEventRequest,
  PaginatedResponse
} from './types';
import { v4 as uuidv4 } from 'uuid';

// In-memory storage
let users: User[] = [];
let items: Item[] = [];
let reservationEvents: ReservationEvent[] = [];

// Sample data for development
const sampleUsers: User[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Alice Johnson",
    email: "alice@neighborhood.local",
    neighborhood: "Downtown",
    contact_method: "message",
    created_at: new Date('2024-01-15'),
    updated_at: new Date('2024-01-15')
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Bob Smith", 
    email: "bob@neighborhood.local",
    neighborhood: "Riverside",
    contact_method: "email",
    created_at: new Date('2024-01-20'),
    updated_at: new Date('2024-01-20')
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Carol Davis",
    email: "carol@neighborhood.local", 
    neighborhood: "Hillside",
    contact_method: "phone",
    created_at: new Date('2024-01-25'),
    updated_at: new Date('2024-01-25')
  }
];

const sampleItems: Item[] = [
  {
    id: "650e8400-e29b-41d4-a716-446655440001",
    owner_id: "550e8400-e29b-41d4-a716-446655440001",
    title: "Electric Drill",
    description: "High-quality cordless drill with multiple bits",
    category: "power-tools",
    tags: ["drilling", "construction", "DIY"],
    location: "Downtown",
    photo_path: null,
    quantity_total: 1,
    quantity_available: 1,
    created_at: new Date('2024-01-15')
  },
  {
    id: "650e8400-e29b-41d4-a716-446655440002", 
    owner_id: "550e8400-e29b-41d4-a716-446655440002",
    title: "Garden Hose",
    description: "50ft expandable garden hose with spray nozzle",
    category: "garden",
    tags: ["watering", "garden", "outdoor"],
    location: "Riverside",
    photo_path: null,
    quantity_total: 1,
    quantity_available: 1,
    created_at: new Date('2024-01-20')
  },
  {
    id: "650e8400-e29b-41d4-a716-446655440003",
    owner_id: "550e8400-e29b-41d4-a716-446655440001", 
    title: "Socket Set",
    description: "Complete metric and standard socket set",
    category: "automotive",
    tags: ["automotive", "repair", "mechanic"],
    location: "Downtown",
    photo_path: null,
    quantity_total: 1,
    quantity_available: 0,
    created_at: new Date('2024-01-22')
  }
];

const sampleReservationEvents: ReservationEvent[] = [
  {
    id: "750e8400-e29b-41d4-a716-446655440001",
    reservation_id: "850e8400-e29b-41d4-a716-446655440001",
    event_type: ReservationEventType.REQUESTED,
    actor_id: "550e8400-e29b-41d4-a716-446655440002",
    timestamp: new Date('2024-01-23T10:00:00Z'),
    quantity: 1,
    start_date: new Date('2024-01-25T09:00:00Z'),
    end_date: new Date('2024-01-27T17:00:00Z'),
    notes: "Need for weekend project"
  },
  {
    id: "750e8400-e29b-41d4-a716-446655440002",
    reservation_id: "850e8400-e29b-41d4-a716-446655440001", 
    event_type: ReservationEventType.APPROVED,
    actor_id: "550e8400-e29b-41d4-a716-446655440001",
    timestamp: new Date('2024-01-23T14:30:00Z')
  },
  {
    id: "750e8400-e29b-41d4-a716-446655440003",
    reservation_id: "850e8400-e29b-41d4-a716-446655440001",
    event_type: ReservationEventType.ACTIVATED,
    actor_id: "550e8400-e29b-41d4-a716-446655440002", 
    timestamp: new Date('2024-01-25T09:15:00Z'),
    notes: "Picked up successfully"
  }
];

// Initialize with sample data
export function initializeDatabase() {
  users = [...sampleUsers];
  items = [...sampleItems];
  reservationEvents = [...sampleReservationEvents];
}

// Event sourcing logic - compute reservation state from events
export function computeReservationState(reservationId: string): ReservationState | null {
  const events = reservationEvents
    .filter(e => e.reservation_id === reservationId)
    .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

  if (events.length === 0) return null;

  const firstEvent = events[0];
  if (firstEvent.event_type !== ReservationEventType.REQUESTED) return null;

  let state: ReservationState = {
    id: reservationId,
    item_id: firstEvent.quantity ? getItemIdFromFirstEvent(reservationId) : "",
    owner_id: "",
    requester_id: firstEvent.actor_id,
    status: ReservationStatus.PENDING,
    quantity_requested: firstEvent.quantity || 1,
    start_date: firstEvent.start_date || null,
    end_date: firstEvent.end_date || null,
    notes: firstEvent.notes || null,
    version: events.length,
    created_at: firstEvent.timestamp,
    updated_at: events[events.length - 1].timestamp
  };

  // Find item and owner
  const item = items.find(i => i.id === state.item_id);
  if (item) {
    state.owner_id = item.owner_id;
  }

  // Apply events in order
  for (const event of events) {
    switch (event.event_type) {
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
        if (event.end_date) state.end_date = event.end_date;
        break;
      case ReservationEventType.NOTES_UPDATED:
        if (event.notes) state.notes = event.notes;
        break;
    }
    state.updated_at = event.timestamp;
  }

  return state;
}

function getItemIdFromFirstEvent(reservationId: string): string {
  // This is a helper to get item_id from context since it's not always in the event
  // In a real implementation, this would be handled differently
  return "650e8400-e29b-41d4-a716-446655440003"; // Socket set for demo
}

// User operations
export async function getUsers(limit = 50, offset = 0): Promise<User[]> {
  return users.slice(offset, offset + limit);
}

export async function getUserById(id: string): Promise<User | null> {
  return users.find(user => user.id === id) || null;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return users.find(user => user.email === email) || null;
}

export async function createUser(userData: CreateUserRequest): Promise<User> {
  const newUser: User = {
    id: uuidv4(),
    name: userData.name,
    email: userData.email,
    neighborhood: userData.neighborhood || "",
    contact_method: userData.contact_method || "message",
    created_at: new Date(),
    updated_at: new Date()
  };
  
  users.push(newUser);
  return newUser;
}

export async function updateUser(id: string, userData: Partial<CreateUserRequest>): Promise<User | null> {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return null;

  users[userIndex] = {
    ...users[userIndex],
    ...userData,
    updated_at: new Date()
  };

  return users[userIndex];
}

export async function deleteUser(id: string): Promise<boolean> {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return false;

  users.splice(userIndex, 1);
  return true;
}

// Item operations
export async function getItems(limit = 50, offset = 0): Promise<Item[]> {
  return items.slice(offset, offset + limit);
}

export async function getItemById(id: string): Promise<Item | null> {
  return items.find(item => item.id === id) || null;
}

export async function createItem(itemData: CreateItemRequest): Promise<Item> {
  const newItem: Item = {
    id: uuidv4(),
    owner_id: itemData.owner_id,
    title: itemData.title,
    description: itemData.description || null,
    category: itemData.category,
    tags: itemData.tags || [],
    location: itemData.location,
    photo_path: itemData.photo_path || null,
    quantity_total: itemData.quantity_total,
    quantity_available: itemData.quantity_total,
    created_at: new Date()
  };
  
  items.push(newItem);
  return newItem;
}

export async function updateItem(id: string, itemData: Partial<CreateItemRequest>): Promise<Item | null> {
  const itemIndex = items.findIndex(item => item.id === id);
  if (itemIndex === -1) return null;

  items[itemIndex] = {
    ...items[itemIndex],
    ...itemData
  };

  return items[itemIndex];
}

export async function deleteItem(id: string): Promise<boolean> {
  const itemIndex = items.findIndex(item => item.id === id);
  if (itemIndex === -1) return false;

  items.splice(itemIndex, 1);
  return true;
}

// Reservation operations
export async function getReservations(
  limit = 50, 
  offset = 0,
  itemId?: string,
  requesterId?: string,
  status?: string
): Promise<ReservationState[]> {
  // Get all unique reservation IDs
  const reservationIds = [...new Set(reservationEvents.map(e => e.reservation_id))];
  
  let states = reservationIds
    .map(id => computeReservationState(id))
    .filter((state): state is ReservationState => state !== null);

  // Apply filters
  if (itemId) {
    states = states.filter(s => s.item_id === itemId);
  }
  if (requesterId) {
    states = states.filter(s => s.requester_id === requesterId);
  }
  if (status) {
    states = states.filter(s => s.status === status);
  }

  return states.slice(offset, offset + limit);
}

export async function getReservationById(id: string): Promise<ReservationState | null> {
  return computeReservationState(id);
}

export async function getReservationEvents(
  limit = 50,
  offset = 0,
  reservationId?: string,
  afterTimestamp?: Date
): Promise<ReservationEvent[]> {
  let events = [...reservationEvents];

  if (reservationId) {
    events = events.filter(e => e.reservation_id === reservationId);
  }

  if (afterTimestamp) {
    events = events.filter(e => e.timestamp > afterTimestamp);
  }

  return events
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(offset, offset + limit);
}

export async function createReservationEvent(
  eventData: CreateReservationEventRequest,
  actorId: string
): Promise<ReservationEvent> {
  // Generate reservation ID if creating new reservation
  const reservationId = eventData.reservation_id || uuidv4();

  // Validate business rules
  if (eventData.event_type === ReservationEventType.REQUESTED) {
    if (!eventData.item_id) {
      throw new Error("item_id is required for reservation requests");
    }
    
    const item = await getItemById(eventData.item_id);
    if (!item) {
      throw new Error("Item not found");
    }

    if ((eventData.quantity || 1) > item.quantity_available) {
      throw new Error("Insufficient quantity available");
    }
  }

  // Create the event
  const newEvent: ReservationEvent = {
    id: uuidv4(),
    reservation_id: reservationId,
    event_type: eventData.event_type,
    actor_id: actorId,
    timestamp: new Date(),
    quantity: eventData.quantity || null,
    start_date: eventData.start_date || null,
    end_date: eventData.end_date || null,
    notes: eventData.notes || null,
    expected_version: eventData.expected_version || null
  };

  reservationEvents.push(newEvent);

  // Update item availability if needed
  if (eventData.event_type === ReservationEventType.ACTIVATED && eventData.item_id) {
    const item = items.find(i => i.id === eventData.item_id);
    if (item) {
      item.quantity_available -= eventData.quantity || 1;
    }
  } else if (eventData.event_type === ReservationEventType.RETURNED && eventData.item_id) {
    const item = items.find(i => i.id === eventData.item_id);
    if (item) {
      item.quantity_available += eventData.quantity || 1;
    }
  }

  return newEvent;
}

// Authentication (simplified for demo)
export async function authenticateUser(email: string, password: string): Promise<User | null> {
  // In production, this would verify hashed passwords
  const user = await getUserByEmail(email);
  return user; // Simplified - always authenticate for demo
}

// Health check
export function getHealthStatus() {
  return {
    status: "healthy",
    uptime: Math.floor(process.uptime())
  };
}

// Initialize database on module load
initializeDatabase();