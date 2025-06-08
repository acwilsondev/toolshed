// PostgreSQL database layer with event sourcing
import { storage } from "../../server/storage";
import type { 
  User, 
  Item, 
  ReservationState,
  ReservationEvent,
  CreateUserRequest,
  CreateItemRequest,
  CreateReservationEventRequest,
  PaginatedResponse
} from './types';
import { 
  ReservationStatus,
  ReservationEventType
} from './types';
import bcrypt from 'bcryptjs';

export async function initializeDatabase() {
  // Insert sample data if database is empty
  const existingUsers = await storage.getUsers(1);
  if (existingUsers.length === 0) {
    // Create sample users with hashed passwords
    const sampleUsers = [
      {
        name: "Alice Johnson",
        email: "alice@neighborhood.local",
        password: await bcrypt.hash('password123', 10),
        neighborhood: "Downtown",
        contact_method: "message"
      },
      {
        name: "Bob Smith", 
        email: "bob@neighborhood.local",
        password: await bcrypt.hash('password123', 10),
        neighborhood: "Riverside",
        contact_method: "email"
      },
      {
        name: "Carol Davis",
        email: "carol@neighborhood.local",
        password: await bcrypt.hash('password123', 10),
        neighborhood: "Hillside",
        contact_method: "phone"
      }
    ];

    for (const user of sampleUsers) {
      await storage.createUser(user);
    }

    // Get created user IDs for items
    const createdUsers = await storage.getUsers();
    const alice = createdUsers.find(u => u.name === "Alice Johnson");
    const bob = createdUsers.find(u => u.name === "Bob Smith");
    
    if (alice && bob) {
      // Create sample items
      const sampleItems = [
        {
          owner_id: alice.id,
          title: "Electric Drill",
          description: "Cordless drill with various bits",
          category: "Tools",
          tags: ["power tool", "cordless"],
          location: "Downtown",
          quantity_total: 1
        },
        {
          owner_id: bob.id,
          title: "Ladder",
          description: "6-foot aluminum step ladder",
          category: "Tools", 
          tags: ["ladder", "aluminum"],
          location: "Riverside",
          quantity_total: 1
        }
      ];

      for (const item of sampleItems) {
        await storage.createItem(item);
      }
    }
  }
}

export function computeReservationState(reservationId: string): ReservationState | null {
  // This function is now handled by the storage layer
  return null;
}

// User operations
export async function getUsers(limit = 50, offset = 0): Promise<User[]> {
  return await storage.getUsers(limit, offset);
}

export async function getUserById(id: string): Promise<User | null> {
  const user = await storage.getUser(id);
  return user || null;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return await storage.getUserByEmail(email);
}

export async function createUser(userData: CreateUserRequest): Promise<User> {
  // Hash password before storing
  const hashedData = {
    ...userData,
    password: await bcrypt.hash(userData.password, 10)
  };
  return await storage.createUser(hashedData);
}

export async function updateUser(id: string, userData: Partial<CreateUserRequest>): Promise<User | null> {
  if (userData.password) {
    userData.password = await bcrypt.hash(userData.password, 10);
  }
  return await storage.updateUser(id, userData);
}

export async function deleteUser(id: string): Promise<boolean> {
  return await storage.deleteUser(id);
}

// Item operations
export async function getItems(limit = 50, offset = 0): Promise<Item[]> {
  return await storage.getItems(limit, offset);
}

export async function getItemById(id: string): Promise<Item | null> {
  return await storage.getItemById(id);
}

export async function createItem(itemData: CreateItemRequest): Promise<Item> {
  return await storage.createItem(itemData);
}

export async function updateItem(id: string, itemData: Partial<CreateItemRequest>): Promise<Item | null> {
  return await storage.updateItem(id, itemData);
}

export async function deleteItem(id: string): Promise<boolean> {
  return await storage.deleteItem(id);
}

// Reservation operations
export async function getReservations(
  limit = 50,
  offset = 0,
  itemId?: string,
  requesterId?: string,
  status?: ReservationStatus
): Promise<ReservationState[]> {
  return await storage.getReservations(limit, offset, itemId, requesterId, status);
}

export async function getReservationById(id: string): Promise<ReservationState | null> {
  return await storage.getReservationById(id);
}

export async function getReservationEvents(
  limit = 50,
  offset = 0,
  reservationId?: string,
  afterTimestamp?: Date
): Promise<ReservationEvent[]> {
  return await storage.getReservationEvents(limit, offset, reservationId, afterTimestamp);
}

export async function createReservationEvent(
  eventData: CreateReservationEventRequest,
  actorId: string
): Promise<ReservationEvent> {
  return await storage.createReservationEvent(eventData, actorId);
}

// Authentication
export async function authenticateUser(email: string, password: string): Promise<User | null> {
  const user = await storage.getUserByEmail(email);
  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }
  return null;
}

export function getHealthStatus() {
  return {
    status: "healthy",
    timestamp: new Date().toISOString(),
    database: "postgresql",
    eventSourcing: "enabled"
  };
}