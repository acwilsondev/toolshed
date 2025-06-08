import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getCurrentUser, requireUser } from './session.server'

// Mock the storage module
vi.mock('../../server/storage', () => ({
  storage: {
    getUser: vi.fn()
  }
}))

describe('session.server', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getCurrentUser', () => {
    it('should return null when no cookie is present', async () => {
      const request = new Request('http://localhost:3000', {
        headers: {}
      })

      const result = await getCurrentUser(request)
      
      expect(result).toBeNull()
    })

    it('should return null when user_session cookie is missing', async () => {
      const request = new Request('http://localhost:3000', {
        headers: {
          'Cookie': 'other_cookie=value'
        }
      })

      const result = await getCurrentUser(request)
      
      expect(result).toBeNull()
    })

    it('should return null when user_session cookie is empty', async () => {
      const request = new Request('http://localhost:3000', {
        headers: {
          'Cookie': 'user_session='
        }
      })

      const result = await getCurrentUser(request)
      
      expect(result).toBeNull()
    })

    it('should return user when valid session cookie exists', async () => {
      const mockUser = {
        id: 'test-user-id',
        name: 'Test User',
        email: 'test@example.com'
      }

      // Mock the storage.getUser to return our test user
      const { storage } = await import('../../server/storage')
      vi.mocked(storage.getUser).mockResolvedValue(mockUser)

      const request = new Request('http://localhost:3000', {
        headers: {
          'Cookie': 'user_session=test-user-id'
        }
      })

      const result = await getCurrentUser(request)
      
      expect(result).toEqual(mockUser)
      expect(storage.getUser).toHaveBeenCalledWith('test-user-id')
    })

    it('should handle storage errors gracefully', async () => {
      const { storage } = await import('../../server/storage')
      vi.mocked(storage.getUser).mockRejectedValue(new Error('Database error'))

      const request = new Request('http://localhost:3000', {
        headers: {
          'Cookie': 'user_session=test-user-id'
        }
      })

      const result = await getCurrentUser(request)
      
      expect(result).toBeNull()
    })
  })

  describe('requireUser', () => {
    it('should return user when user is provided', () => {
      const mockUser = {
        id: 'test-user-id',
        name: 'Test User',
        email: 'test@example.com'
      }

      const result = requireUser(mockUser)
      
      expect(result).toBe(mockUser)
    })

    it('should throw Response when user is null', () => {
      expect(() => requireUser(null)).toThrow()
    })

    it('should throw Response when user is undefined', () => {
      expect(() => requireUser(undefined)).toThrow()
    })

    it('should throw 401 Response when user is falsy', () => {
      try {
        requireUser(null)
      } catch (error) {
        expect(error).toBeInstanceOf(Response)
        expect(error.status).toBe(401)
      }
    })
  })
})

