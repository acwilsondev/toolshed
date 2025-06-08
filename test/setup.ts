import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock global fetch for testing
global.fetch = vi.fn()

// Mock environment variables
process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
process.env.SESSION_SECRET = 'test-secret'
process.env.NODE_ENV = 'test'

// Mock console.error to avoid noise in tests unless explicitly testing errors
const originalError = console.error
beforeAll(() => {
  console.error = vi.fn()
})

afterAll(() => {
  console.error = originalError
})

// Clear all mocks between tests
afterEach(() => {
  vi.clearAllMocks()
})

