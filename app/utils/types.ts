// Common types for the Toolshed application - Event Sourced Reservation System

// Enums for the reservation system
export enum ReservationStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  ACTIVE = 'active',
  RETURNED = 'returned',
  CANCELLED = 'cancelled',
}

export enum ReservationEventType {
  REQUESTED = 'requested',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  ACTIVATED = 'activated',
  RETURNED = 'returned',
  CANCELLED = 'cancelled',
  EXTENDED = 'extended',
  NOTES_UPDATED = 'notes_updated',
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  neighborhood: string;
  contact_method: string;
  created_at: Date;
  updated_at: Date;
}

export interface Item {
  id: string;
  owner_id: string;
  title: string;
  description: string | null;
  category: string;
  tags: string[];
  location: string;
  photo_path: string | null;
  quantity_total: number;
  quantity_available: number;
  created_at: Date;
}

export interface ReservationState {
  id: string;
  item_id: string;
  owner_id: string;
  requester_id: string;
  status: ReservationStatus;
  quantity_requested: number;
  start_date: Date | null;
  end_date: Date | null;
  notes: string | null;
  version: number;
  created_at: Date;
  updated_at: Date;
}

export interface ReservationEvent {
  id: string;
  reservation_id: string;
  event_type: ReservationEventType;
  actor_id: string;
  timestamp: Date;
  quantity?: number | null;
  start_date?: Date | null;
  end_date?: Date | null;
  notes?: string | null;
  expected_version?: number | null;
}

// Form and request types
export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  neighborhood?: string;
  contact_method?: string;
}

export interface CreateItemRequest {
  owner_id: string;
  title: string;
  description?: string;
  category: string;
  tags?: string[];
  location: string;
  photo_path?: string;
  quantity_total: number;
}

export interface CreateReservationEventRequest {
  reservation_id?: string;
  item_id?: string;
  event_type: ReservationEventType;
  quantity?: number;
  start_date?: Date;
  end_date?: Date;
  notes?: string;
  expected_version?: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
}

// Error types
export interface ValidationError {
  field: string;
  message: string;
}

export interface ApiError {
  message: string;
  code?: string;
  validationErrors?: ValidationError[];
}
