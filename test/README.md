# Testing Infrastructure - Toolshed

This directory contains the testing infrastructure and test files for the Toolshed application.

## Testing Stack

- **Vitest** - Fast unit test runner with native TypeScript support
- **@testing-library/react** - Simple and complete React DOM testing utilities
- **@testing-library/jest-dom** - Custom Jest matchers for DOM elements
- **jsdom** - DOM implementation for testing

## Running Tests

```bash
# Run tests in watch mode (recommended for development)
npm run test

# Run tests once
npm run test:run

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

### Unit Tests
- **Location**: Co-located with source files (`*.test.ts`, `*.test.tsx`)
- **Purpose**: Test individual functions, components, and utilities
- **Examples**: Session management, component rendering, business logic

### Test Categories

1. **Utility Tests** (`app/utils/*.test.ts`)
   - Session management (`session.server.test.ts`)
   - Database operations
   - Helper functions

2. **Component Tests** (`app/components/*.test.tsx`)
   - Navigation component (`Navigation.test.tsx`)
   - Layout components
   - Form components

3. **Business Logic Tests** (`test/*.test.ts`)
   - Reservation state management
   - Event sourcing logic
   - Validation rules

## Testing Guidelines

### Following Project Rules

Per the project rules, we follow a **red-green-refactor** workflow:

1. **Red**: Write a failing test first
2. **Green**: Write minimal code to make it pass
3. **Refactor**: Clean up code while keeping tests green

### Test One Class at a Time

- **Mock external dependencies** to isolate the unit under test
- **Use dependency injection** to make testing easier
- **Test single responsibility** - one class/function per test suite

### Test Structure

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('ComponentName', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('method/feature name', () => {
    it('should describe expected behavior', () => {
      // Arrange
      const input = 'test input'
      
      // Act
      const result = functionUnderTest(input)
      
      // Assert
      expect(result).toBe('expected output')
    })
  })
})
```

## Mocking

### External Dependencies

```typescript
// Mock external modules
vi.mock('../../server/storage', () => ({
  storage: {
    getUser: vi.fn()
  }
}))

// Mock Remix router
vi.mock('@remix-run/react', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>{children}</a>
  ),
  useLocation: () => ({ pathname: '/' })
}))
```

### Environment Variables

Test environment variables are set in `test/setup.ts`:

```typescript
process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
process.env.SESSION_SECRET = 'test-secret'
process.env.NODE_ENV = 'test'
```

## Coverage

Coverage reports are generated in the `coverage/` directory when running `npm run test:coverage`.

### Coverage Goals

- **Utilities**: 90%+ coverage (critical business logic)
- **Components**: 80%+ coverage (UI behavior)
- **Routes**: 70%+ coverage (integration points)

## Future Testing

As the application grows, we plan to add:

1. **Integration Tests**: Testing API endpoints and database interactions
2. **E2E Tests**: Full user workflows with Playwright or Cypress
3. **Contract Tests**: API contract validation
4. **Performance Tests**: Load testing for reservation system

## Continuous Integration

Tests should run on every commit and pull request. The CI pipeline should:

1. Run `npm run test:run` to execute all tests
2. Run `npm run test:coverage` to generate coverage reports
3. Fail the build if tests fail or coverage drops below thresholds
4. Run `npm run typecheck` to ensure TypeScript compilation

## Troubleshooting

### Common Issues

1. **Import Errors**: Check path aliases in `vitest.config.ts`
2. **Mock Issues**: Ensure mocks are cleared between tests
3. **TypeScript Errors**: Verify types are included in `tsconfig.json`
4. **DOM Issues**: Ensure jsdom environment is configured

### Debugging Tests

```typescript
// Add debugging output
console.log('Debug value:', result)

// Use only/skip for focused testing
it.only('should test specific case', () => { /* test */ })
it.skip('should skip this test', () => { /* test */ })
```

