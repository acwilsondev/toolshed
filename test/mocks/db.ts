import { vi } from 'vitest';
import type { Item, User, ReservationEvent } from '../../shared/schema';
import type { ReservationState } from '../../app/utils/types';
import { ReservationStatus } from '../../app/utils/types';

// Mock data stores
let mockUsers: User[] = [];
let mockItems: Item[] = [];
let mockReservationEvents: ReservationEvent[] = [];

// Helper function to generate UUIDs for testing
let mockIdCounter = 1;
const generateMockId = () => {
  const counter = mockIdCounter++;
  // Generate a valid UUID v4 format using the counter
  const hex = counter.toString(16).padStart(8, '0');
  return `550e8400-e29b-41d4-a716-${hex.padStart(12, '0')}`;
};

// Mock storage implementation
export const mockStorage = {
  // User operations
  getUser: vi.fn(async (id: string): Promise<User | undefined> => {
    return mockUsers.find(u => u.id === id);
  }),
  
  getUserByEmail: vi.fn(async (email: string): Promise<User | null> => {
    return mockUsers.find(u => u.email === email) || null;
  }),
  
  createUser: vi.fn(async (userData: any): Promise<User> => {
    const newUser: User = {
      id: generateMockId(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      neighborhood: userData.neighborhood || '',
      contactMethod: userData.contact_method || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockUsers.push(newUser);
    return newUser;
  }),
  
  updateUser: vi.fn(async (id: string, userData: any): Promise<User | null> => {
    const userIndex = mockUsers.findIndex(u => u.id === id);
    if (userIndex === -1) return null;
    
    mockUsers[userIndex] = {
      ...mockUsers[userIndex],
      ...userData,
      updatedAt: new Date()
    };
    return mockUsers[userIndex];
  }),
  
  deleteUser: vi.fn(async (id: string): Promise<boolean> => {
    const initialLength = mockUsers.length;
    mockUsers = mockUsers.filter(u => u.id !== id);
    return mockUsers.length < initialLength;
  }),
  
  getUsers: vi.fn(async (limit = 50, offset = 0): Promise<User[]> => {
    return mockUsers.slice(offset, offset + limit);
  }),
  
  // Item operations
  getItems: vi.fn(async (limit = 50, offset = 0): Promise<Item[]> => {
    return mockItems.slice(offset, offset + limit);
  }),
  
  getItemById: vi.fn(async (id: string): Promise<Item | null> => {
    return mockItems.find(i => i.id === id) || null;
  }),
  
  createItem: vi.fn(async (itemData: any): Promise<Item> => {
    const newItem: Item = {
      id: generateMockId(),
      ownerId: itemData.owner_id,
      title: itemData.title,
      description: itemData.description || null,
      category: itemData.category,
      tags: itemData.tags || [],
      location: itemData.location,
      photoPath: itemData.photo_path || null,
      quantityTotal: itemData.quantity_total,
      quantityAvailable: itemData.quantity_total,
      createdAt: new Date()
    };
    mockItems.push(newItem);
    return newItem;
  }),
  
  updateItem: vi.fn(async (id: string, itemData: any): Promise<Item | null> => {
    const itemIndex = mockItems.findIndex(i => i.id === id);
    if (itemIndex === -1) return null;
    
    // Map API field names to database field names
    const updateData = {
      ...(itemData.title && { title: itemData.title }),
      ...(itemData.description !== undefined && { description: itemData.description }),
      ...(itemData.category && { category: itemData.category }),
      ...(itemData.tags && { tags: itemData.tags }),
      ...(itemData.location && { location: itemData.location }),
      ...(itemData.photo_path !== undefined && { photoPath: itemData.photo_path }),
      ...(itemData.quantity_total !== undefined && { quantityTotal: itemData.quantity_total })
    };
    
    mockItems[itemIndex] = {
      ...mockItems[itemIndex],
      ...updateData
    };
    return mockItems[itemIndex];
  }),
  
  deleteItem: vi.fn(async (id: string): Promise<boolean> => {
    const initialLength = mockItems.length;
    mockItems = mockItems.filter(i => i.id !== id);
    return mockItems.length < initialLength;
  }),
  
  // Reservation operations
  getReservationEvents: vi.fn(async (
    limit = 50, 
    offset = 0, 
    reservationId?: string, 
    afterTimestamp?: Date
  ): Promise<ReservationEvent[]> => {
    let events = mockReservationEvents;
    
    if (reservationId) {
      events = events.filter(e => e.reservationId === reservationId);
    }
    
    if (afterTimestamp) {
      events = events.filter(e => e.timestamp >= afterTimestamp);
    }
    
    return events
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(offset, offset + limit);
  }),
  
  createReservationEvent: vi.fn(async (eventData: any, actorId: string): Promise<ReservationEvent> => {
    const newEvent: ReservationEvent = {
      id: generateMockId(),
      reservationId: eventData.reservation_id || generateMockId(),
      itemId: eventData.item_id,
      eventType: eventData.event_type,
      actorId,
      timestamp: new Date(),
      quantity: eventData.quantity || null,
      startDate: eventData.start_date || null,
      endDate: eventData.end_date || null,
      notes: eventData.notes || null,
      expectedVersion: eventData.expected_version || null
    };
    mockReservationEvents.push(newEvent);
    return newEvent;
  }),
  
  getReservationById: vi.fn(async (id: string): Promise<ReservationState | null> => {
    const events = mockReservationEvents.filter(e => e.reservationId === id);
    if (events.length === 0) return null;
    
    // Simple mock state computation
    const firstEvent = events[0];
    return {
      id: firstEvent.reservationId,
      item_id: firstEvent.itemId || '',
      owner_id: 'mock-owner',
      requester_id: firstEvent.actorId,
      status: ReservationStatus.PENDING,
      quantity_requested: firstEvent.quantity || 1,
      start_date: firstEvent.startDate,
      end_date: firstEvent.endDate,
      notes: firstEvent.notes,
      version: events.length,
      created_at: firstEvent.timestamp,
      updated_at: events[events.length - 1].timestamp
    };
  }),
  
  getReservations: vi.fn(async (
    limit = 50, 
    offset = 0, 
    itemId?: string, 
    requesterId?: string, 
    status?: any
  ): Promise<ReservationState[]> => {
    // Group events by reservation ID
    const reservationMap = new Map<string, ReservationEvent[]>();
    
    for (const event of mockReservationEvents) {
      if (!reservationMap.has(event.reservationId)) {
        reservationMap.set(event.reservationId, []);
      }
      reservationMap.get(event.reservationId)!.push(event);
    }
    
    // Convert to reservation states
    const reservations: ReservationState[] = [];
    for (const [reservationId, events] of reservationMap.entries()) {
      const firstEvent = events[0];
      const state: ReservationState = {
        id: reservationId,
        item_id: firstEvent.itemId || '',
        owner_id: 'mock-owner',
        requester_id: firstEvent.actorId,
        status: ReservationStatus.PENDING,
        quantity_requested: firstEvent.quantity || 1,
        start_date: firstEvent.startDate,
        end_date: firstEvent.endDate,
        notes: firstEvent.notes,
        version: events.length,
        created_at: firstEvent.timestamp,
        updated_at: events[events.length - 1].timestamp
      };
      
      // Apply filters
      if (itemId && state.item_id !== itemId) continue;
      if (requesterId && state.requester_id !== requesterId) continue;
      if (status && state.status !== status) continue;
      
      reservations.push(state);
    }
    
    return reservations
      .sort((a, b) => b.updated_at.getTime() - a.updated_at.getTime())
      .slice(offset, offset + limit);
  }),
  
  // Authentication
  authenticateUser: vi.fn(async (email: string, password: string): Promise<User | null> => {
    // Import bcrypt within the function to get the mocked version
    const bcrypt = await import('bcryptjs').then(m => m.default);
    
    const user = await mockStorage.getUserByEmail(email);
    if (!user) {
      return null;
    }
    
    try {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        // Return user without password hash
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword as User;
      }
      return null;
    } catch (error) {
      throw error; // Re-throw bcrypt errors for test verification
    }
  }),
  
  upsertUser: vi.fn(async (userData: any): Promise<User> => {
    const existingUser = mockUsers.find(u => u.id === userData.id);
    if (existingUser) {
      return await mockStorage.updateUser(userData.id, userData) as User;
    } else {
      return await mockStorage.createUser(userData);
    }
  })
};

// Reset function for tests
export const resetMockData = () => {
  mockUsers = [];
  mockItems = [];
  mockReservationEvents = [];
  mockIdCounter = 1;
  vi.clearAllMocks();
};

// Default export for easy importing
export default mockStorage;

