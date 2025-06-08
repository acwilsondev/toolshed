import '@testing-library/jest-dom'
import { vi } from 'vitest'
import { mockStorage, resetMockData } from './mocks/db'

// Mock global fetch for testing
global.fetch = vi.fn()

// Mock environment variables
process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
process.env.SESSION_SECRET = 'test-secret'
process.env.NODE_ENV = 'test'

// Mock the storage module
vi.mock('../server/storage', () => ({
  storage: mockStorage
}));

// Mock console.error to avoid noise in tests unless explicitly testing errors
const originalError = console.error
beforeAll(() => {
  console.error = vi.fn()
})

afterAll(() => {
  console.error = originalError
})

// Clear all mocks and reset data between tests
afterEach(() => {
  resetMockData()
})

