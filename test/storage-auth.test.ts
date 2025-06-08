import { describe, it, expect, vi, beforeEach } from 'vitest'
import bcrypt from 'bcryptjs'
import { mockStorage } from './mocks/db'
import type { User } from '../shared/schema'

// Mock bcrypt
vi.mock('bcryptjs')

describe('DatabaseStorage Authentication Security', () => {
  const mockUser: User = {
    id: 'user-123',
    name: 'Test User',
    email: 'test@example.com',
    password: '$2a$10$hashedPassword', // Mock bcrypt hash
    neighborhood: 'Test Area',
    contactMethod: 'email',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('authenticateUser', () => {
    it('should use bcrypt.compare for password verification', async () => {
      const plainPassword = 'testPassword123'
      
      // Mock getUserByEmail to return our test user
      mockStorage.getUserByEmail.mockResolvedValue(mockUser)
      
      // Mock bcrypt.compare to return true for valid password
      vi.mocked(bcrypt.compare).mockResolvedValue(true as never)

      const result = await mockStorage.authenticateUser(mockUser.email, plainPassword)

      // Verify bcrypt.compare was called with correct parameters
      expect(bcrypt.compare).toHaveBeenCalledWith(plainPassword, mockUser.password)
      // Should return user without password field
      const { password, ...expectedUser } = mockUser
      expect(result).toEqual(expectedUser)
    })

    it('should return null when password does not match', async () => {
      const plainPassword = 'wrongPassword'
      
      // Mock getUserByEmail to return our test user
      mockStorage.getUserByEmail.mockResolvedValue(mockUser)
      
      // Mock bcrypt.compare to return false for invalid password
      vi.mocked(bcrypt.compare).mockResolvedValue(false as never)

      const result = await mockStorage.authenticateUser(mockUser.email, plainPassword)

      // Verify bcrypt.compare was called and authentication failed
      expect(bcrypt.compare).toHaveBeenCalledWith(plainPassword, mockUser.password)
      expect(result).toBeNull()
    })

    it('should return null when user does not exist', async () => {
      const plainPassword = 'testPassword123'
      const nonExistentEmail = 'nonexistent@example.com'
      
      // Mock getUserByEmail to return null (user not found)
      mockStorage.getUserByEmail.mockResolvedValue(null)

      const result = await mockStorage.authenticateUser(nonExistentEmail, plainPassword)

      // Verify bcrypt.compare was NOT called since user doesn't exist
      expect(bcrypt.compare).not.toHaveBeenCalled()
      expect(result).toBeNull()
    })

    it('should never compare passwords using plain text equality', async () => {
      const plainPassword = 'testPassword123'
      
      // Create a user with the same password as plaintext (security anti-pattern)
      const insecureUser = { ...mockUser, password: plainPassword }
      
      mockStorage.getUserByEmail.mockResolvedValue(insecureUser)
      vi.mocked(bcrypt.compare).mockResolvedValue(false as never) // Bcrypt should fail

      const result = await mockStorage.authenticateUser(insecureUser.email, plainPassword)

      // Even though password matches as plain text, bcrypt.compare should be used
      expect(bcrypt.compare).toHaveBeenCalledWith(plainPassword, plainPassword)
      expect(result).toBeNull() // Should fail because bcrypt.compare returned false
    })

    it('should handle bcrypt comparison errors gracefully', async () => {
      const plainPassword = 'testPassword123'
      
      mockStorage.getUserByEmail.mockResolvedValue(mockUser)
      
      // Mock bcrypt.compare to throw an error
      vi.mocked(bcrypt.compare).mockRejectedValue(new Error('Bcrypt error'))

      await expect(mockStorage.authenticateUser(mockUser.email, plainPassword))
        .rejects.toThrow('Bcrypt error')
      
      expect(bcrypt.compare).toHaveBeenCalledWith(plainPassword, mockUser.password)
    })
  })
})

