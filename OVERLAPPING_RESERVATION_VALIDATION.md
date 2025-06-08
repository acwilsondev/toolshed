# Overlapping Reservation Validation Implementation

## Overview

This document describes the implementation of overlapping reservation validation for the Toolshed application, addressing the high-impact missing business logic identified in the README.md.

## Problem Solved

- **Double-booking prevention**: Items cannot be reserved when insufficient quantity is available
- **Quantity management**: Proper handling of items with multiple quantities
- **Date conflict detection**: Accurate overlap detection between reservation periods
- **State transition validation**: Ensures proper reservation lifecycle management

## Implementation Components

### 1. ReservationValidationService

**Location**: `app/utils/reservationValidator.server.ts`

**Key Features**:
- Date range overlap detection using interval mathematics
- Quantity-aware availability calculation
- State transition validation with defined state machine
- Extension conflict validation
- Comprehensive error reporting

**Core Algorithm**:
```typescript
// Date overlap detection
private datesOverlap(range1: DateRange, range2: DateRange): boolean {
  return range1.startDate < range2.endDate && range2.startDate < range1.endDate;
}

// Availability calculation
availableQuantity = totalQuantity - sum(conflictingReservations.quantity)
```

### 2. Enhanced Storage Layer

**Location**: `server/storage.ts`

**Enhancements**:
- Integrated validation into `createReservationEvent()`
- Added `itemId` field to reservation events for proper tracking
- Automatic validation of new reservations, state transitions, and extensions
- Descriptive error messages for validation failures

### 3. Schema Updates

**Location**: `shared/schema.ts`

**Changes**:
- Added `itemId` field to `reservationEvents` table
- Enhanced relationships between items and reservation events
- Proper foreign key constraints

### 4. Availability API Endpoint

**Location**: `app/routes/api.items.$id.availability.tsx`

**Features**:
- Real-time availability checking for any date range
- Detailed conflict reporting
- Support for quantity queries
- RESTful API design

**Usage**:
```bash
GET /api/items/{item_id}/availability?start_date=2024-01-01&end_date=2024-01-05&quantity=1
```

**Response**:
```json
{
  "item_id": "item-123",
  "total_quantity": 2,
  "available_quantity": 1,
  "requested_quantity": 1,
  "is_available": true,
  "overlapping_reservations": 1,
  "conflicts": [
    {
      "reservation_id": "res-456",
      "requester_id": "user-789",
      "quantity": 1,
      "start_date": "2024-01-02T00:00:00.000Z",
      "end_date": "2024-01-04T00:00:00.000Z",
      "status": "approved"
    }
  ]
}
```

## Validation Rules

### Basic Validation
- ✅ Start date must be before end date
- ✅ Start date cannot be in the past
- ✅ Requested quantity must be > 0
- ✅ Requested quantity cannot exceed item's total quantity
- ✅ Item must exist

### Overlap Detection
- ✅ Checks against PENDING, APPROVED, and ACTIVE reservations
- ✅ Ignores CANCELLED, REJECTED, and RETURNED reservations
- ✅ Calculates available quantity during overlap period
- ✅ Allows overlaps when sufficient quantity remains

### State Transitions
```
PENDING → APPROVED | REJECTED | CANCELLED
APPROVED → ACTIVATED | CANCELLED | EXTENDED
ACTIVE → RETURNED | CANCELLED | EXTENDED
REJECTED → (no transitions except NOTES_UPDATED)
RETURNED → (no transitions except NOTES_UPDATED)
CANCELLED → (no transitions except NOTES_UPDATED)
```

### Extension Validation
- ✅ New end date must be later than current end date
- ✅ New end date cannot be in the past
- ✅ Extension period cannot conflict with other reservations

## Integration Points

### Frontend Integration

1. **Availability Checking**:
```typescript
// Check availability before showing reservation form
const checkAvailability = async (itemId: string, startDate: Date, endDate: Date, quantity: number) => {
  const response = await fetch(`/api/items/${itemId}/availability?` + 
    `start_date=${startDate.toISOString()}&` +
    `end_date=${endDate.toISOString()}&` +
    `quantity=${quantity}`);
  return response.json();
};
```

2. **Real-time Validation**:
```typescript
// Validate dates as user types
const validateReservation = useCallback(async () => {
  if (startDate && endDate && quantity) {
    const availability = await checkAvailability(itemId, startDate, endDate, quantity);
    setIsAvailable(availability.is_available);
    setConflicts(availability.conflicts);
  }
}, [startDate, endDate, quantity]);
```

### API Integration

1. **Creating Reservations**:
```typescript
// POST /api/reservations/events
{
  "event_type": "requested",
  "item_id": "item-123",
  "start_date": "2024-01-01T00:00:00.000Z",
  "end_date": "2024-01-05T00:00:00.000Z",
  "quantity": 1,
  "notes": "Need for weekend project"
}
```

2. **Error Handling**:
```typescript
try {
  const response = await createReservation(reservationData);
} catch (error) {
  if (error.status === 409) {
    // Handle overlap conflict
    showError('Item is not available during the selected dates');
  }
}
```

## Testing

### Unit Tests
**Location**: `test/reservation-validation-unit.test.ts`

**Coverage**:
- ✅ Date overlap logic (edge cases, adjacent ranges)
- ✅ Basic validation rules
- ✅ State transition validation
- ✅ Quantity calculations
- ✅ Extension validation

### Integration Tests
**Location**: `test/reservation-api.test.ts`, `test/reservation-logic.test.ts`

**Coverage**:
- 🔄 End-to-end API validation (requires database setup)
- 🔄 Full workflow testing (requires database setup)

### Running Tests
```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- reservation-validation-unit
```

## Error Handling

### Validation Errors
```typescript
interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings?: string[];
}
```

### Common Error Messages
- `"Start date and end date are required for new reservations"`
- `"Start date must be before end date"`
- `"Start date cannot be in the past"`
- `"Requested quantity (X) exceeds total available (Y)"`
- `"Insufficient quantity available. Requested: X, Available: Y during [date range]"`
- `"Invalid state transition: Cannot apply X to reservation with status Y"`

### HTTP Status Codes
- `200`: Success
- `400`: Invalid request data
- `404`: Item/reservation not found
- `409`: Conflict (overlap detected)
- `500`: Internal server error

## Performance Considerations

### Database Queries
- Efficient filtering of reservations by item and status
- Indexed queries on reservation events
- Minimal data fetching for validation

### Caching Opportunities
- Item details can be cached
- Availability calculations for popular items
- State transition rules (static)

### Optimization Notes
- Event sourcing allows for efficient conflict detection
- Quantity calculations are performed in-memory
- Validation runs early to fail fast

## Deployment Checklist

### Database Migration
- [ ] Add `itemId` column to `reservation_events` table
- [ ] Update foreign key constraints
- [ ] Migrate existing data if needed

### Environment Setup
- [ ] Ensure PostgreSQL test database exists
- [ ] Configure test database user and permissions
- [ ] Set up CI/CD pipeline with database tests

### Production Deployment
- [ ] Deploy schema changes
- [ ] Deploy validation service
- [ ] Deploy availability API endpoint
- [ ] Update frontend to use availability checking
- [ ] Monitor error rates and performance

### Documentation
- [ ] Update API documentation
- [ ] Create user guides for new validation features
- [ ] Document error handling procedures

## Future Enhancements

### Planned Features
1. **Calendar Integration**: Visual availability calendar
2. **Notification System**: Alert users of conflicts
3. **Automatic Suggestions**: Suggest alternative dates
4. **Bulk Operations**: Validate multiple reservations
5. **Priority Reservations**: VIP user preferences

### Technical Improvements
1. **Caching Layer**: Redis for availability data
2. **Real-time Updates**: WebSocket notifications
3. **Performance Monitoring**: Detailed metrics
4. **Load Testing**: Stress testing with concurrent users

## Conclusion

The overlapping reservation validation system provides robust protection against double-booking while maintaining flexibility for complex scenarios. The implementation follows established patterns, includes comprehensive testing, and provides clear error messages for debugging and user experience.

The modular design allows for easy extension and maintenance, while the API-first approach enables future frontend enhancements and third-party integrations.

