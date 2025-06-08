// Common types for the Toolshed application
// These will be expanded when the data schema is integrated

export interface User {
  id: string;
  email: string;
  name: string;
  location?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: ToolCategory;
  condition: ToolCondition;
  availability: ToolAvailability;
  location?: string;
  contactMethod: ContactMethod;
  ownerId: string;
  owner?: User;
  images?: string[];
  tags?: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BorrowRequest {
  id: string;
  toolId: string;
  tool?: Tool;
  borrowerId: string;
  borrower?: User;
  requestedStartDate: Date;
  requestedEndDate: Date;
  message?: string;
  status: BorrowRequestStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  toolId: string;
  tool?: Tool;
  reviewerId: string;
  reviewer?: User;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Enums
export enum ToolCategory {
  POWER_TOOLS = 'power-tools',
  HAND_TOOLS = 'hand-tools',
  GARDEN = 'garden',
  AUTOMOTIVE = 'automotive',
  HOME = 'home',
  SPECIALTY = 'specialty',
}

export enum ToolCondition {
  EXCELLENT = 'excellent',
  GOOD = 'good',
  FAIR = 'fair',
  NEEDS_REPAIR = 'needs-repair',
}

export enum ToolAvailability {
  AVAILABLE = 'available',
  LIMITED = 'limited',
  WEEKENDS = 'weekends',
  BY_APPOINTMENT = 'by-appointment',
}

export enum ContactMethod {
  MESSAGE = 'message',
  EMAIL = 'email',
  PHONE = 'phone',
}

export enum BorrowRequestStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  DECLINED = 'declined',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

// Form types
export interface ToolFormData {
  title: string;
  description: string;
  category: string;
  condition: string;
  availability: string;
  location?: string;
  contactMethod: string;
  tags?: string[];
}

export interface SearchFilters {
  query?: string;
  category?: string;
  condition?: string;
  availability?: string;
  location?: string;
  tags?: string[];
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
