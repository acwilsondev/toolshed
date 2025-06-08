import { z } from 'zod';
import { ReservationEventType } from './types';

/**
 * Comprehensive input validation schemas using Zod
 * 
 * Benefits:
 * - Type safety at runtime and compile time
 * - Automatic type inference
 * - Built-in sanitization
 * - Detailed error messages
 * - Protection against injection attacks
 */

// Common validation patterns
const uuidSchema = z.string().uuid('Invalid UUID format');
const emailSchema = z.string().email('Invalid email format').max(255, 'Email too long');
const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .max(128, 'Password too long')
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase, and number');

const nameSchema = z.string()
  .min(1, 'Name is required')
  .max(100, 'Name too long')
  .regex(/^[a-zA-Z\s\-']+$/, 'Name contains invalid characters');

const textSchema = z.string().max(1000, 'Text too long');
const urlSchema = z.string().url('Invalid URL format').optional();

// User validation schemas
export const CreateUserSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  neighborhood: z.string().max(100, 'Neighborhood name too long').optional(),
  contact_method: z.enum(['email', 'phone', 'message'], {
    errorMap: () => ({ message: 'Contact method must be email, phone, or message' })
  }).optional()
}).strict(); // Reject unknown fields

export const UpdateUserSchema = CreateUserSchema.partial().strict();

export const LoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required')
}).strict();

// Item validation schemas
export const CreateItemSchema = z.object({
  owner_id: uuidSchema,
  title: z.string()
    .min(1, 'Title is required')
    .max(200, 'Title too long')
    .regex(/^[a-zA-Z0-9\s\-_.,()]+$/, 'Title contains invalid characters'),
  description: z.string()
    .max(2000, 'Description too long')
    .optional()
    .nullable(),
  category: z.string()
    .min(1, 'Category is required')
    .max(50, 'Category too long')
    .regex(/^[a-zA-Z\s\-]+$/, 'Category contains invalid characters'),
  tags: z.array(
    z.string()
      .min(1, 'Tag cannot be empty')
      .max(30, 'Tag too long')
      .regex(/^[a-zA-Z0-9\-_]+$/, 'Tag contains invalid characters')
  ).max(10, 'Too many tags').optional().default([]),
  location: z.string()
    .min(1, 'Location is required')
    .max(200, 'Location too long'),
  photo_path: z.string().max(500, 'Photo path too long').optional().nullable(),
  quantity_total: z.number()
    .int('Quantity must be a whole number')
    .min(1, 'Quantity must be at least 1')
    .max(1000, 'Quantity too large')
}).strict();

export const UpdateItemSchema = CreateItemSchema.omit({ owner_id: true }).partial();

// Reservation validation schemas
export const CreateReservationEventSchema = z.object({
  event_type: z.nativeEnum(ReservationEventType, {
    errorMap: () => ({ message: 'Invalid reservation event type' })
  }),
  reservation_id: uuidSchema.optional(),
  item_id: uuidSchema.optional(),
  correlation_id: z.string()
    .max(255, 'Correlation ID too long')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Correlation ID contains invalid characters')
    .optional(),
  quantity: z.number()
    .int('Quantity must be a whole number')
    .min(1, 'Quantity must be at least 1')
    .max(100, 'Quantity too large')
    .optional(),
  start_date: z.coerce.date().refine(
    (date) => date > new Date(),
    'Start date must be in the future'
  ).optional(),
  end_date: z.coerce.date().optional(),
  notes: textSchema.optional().nullable(),
  expected_version: z.number().int().min(0).optional()
}).strict()
  // Custom validation for date relationships
  .refine(
    (data) => {
      if (data.start_date && data.end_date) {
        return data.end_date > data.start_date;
      }
      return true;
    },
    {
      message: 'End date must be after start date',
      path: ['end_date']
    }
  )
  // Validate required fields for new reservations
  .refine(
    (data) => {
      if (data.event_type === ReservationEventType.REQUESTED) {
        return data.item_id && data.start_date && data.end_date && data.quantity;
      }
      return true;
    },
    {
      message: 'New reservations require item_id, start_date, end_date, and quantity',
      path: ['event_type']
    }
  );

// Query parameter validation schemas
export const PaginationSchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(50),
  offset: z.coerce.number().int().min(0).default(0)
}).partial();

export const ReservationEventsQuerySchema = PaginationSchema.extend({
  reservation_id: uuidSchema.optional(),
  after_timestamp: z.coerce.date().optional()
}).partial();

export const ReservationsQuerySchema = PaginationSchema.extend({
  item_id: uuidSchema.optional(),
  requester_id: uuidSchema.optional(),
  status: z.string().max(20).optional()
}).partial();

// API response validation (for testing and type safety)
export const ApiErrorSchema = z.object({
  error: z.string(),
  details: z.array(z.string()).optional(),
  warnings: z.array(z.string()).optional()
});

// Extension validation for specific operations
export const ExtensionRequestSchema = z.object({
  reservation_id: uuidSchema,
  new_end_date: z.coerce.date().refine(
    (date) => date > new Date(),
    'New end date must be in the future'
  )
}).strict();

// Item availability query
export const AvailabilityQuerySchema = z.object({
  start_date: z.coerce.date(),
  end_date: z.coerce.date(),
  quantity: z.coerce.number().int().min(1).max(100).default(1)
}).strict()
  .refine(
    (data) => data.end_date > data.start_date,
    {
      message: 'End date must be after start date',
      path: ['end_date']
    }
  )
  .refine(
    (data) => data.start_date > new Date(),
    {
      message: 'Start date must be in the future',
      path: ['start_date']
    }
  );

// Export inferred types for TypeScript
export type CreateUserRequest = z.infer<typeof CreateUserSchema>;
export type UpdateUserRequest = z.infer<typeof UpdateUserSchema>;
export type LoginRequest = z.infer<typeof LoginSchema>;
export type CreateItemRequest = z.infer<typeof CreateItemSchema>;
export type UpdateItemRequest = z.infer<typeof UpdateItemSchema>;
export type CreateReservationEventRequest = z.infer<typeof CreateReservationEventSchema>;
export type PaginationQuery = z.infer<typeof PaginationSchema>;
export type ReservationEventsQuery = z.infer<typeof ReservationEventsQuerySchema>;
export type ReservationsQuery = z.infer<typeof ReservationsQuerySchema>;
export type ExtensionRequest = z.infer<typeof ExtensionRequestSchema>;
export type AvailabilityQuery = z.infer<typeof AvailabilityQuerySchema>;

