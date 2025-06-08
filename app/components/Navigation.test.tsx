import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navigation } from './Navigation'

// Mock Remix router
vi.mock('@remix-run/react', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>{children}</a>
  ),
  useLocation: () => ({ pathname: '/' }),
  useLoaderData: () => ({})
}))

describe('Navigation', () => {
  it('should render Toolshed brand', () => {
    render(<Navigation />)
    
    expect(screen.getByText('Toolshed')).toBeInTheDocument()
  })

  it('should show sign in/register buttons when no user is provided', () => {
    render(<Navigation />)
    
    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText('Join Community')).toBeInTheDocument()
    expect(screen.queryByText('Sign Out')).not.toBeInTheDocument()
  })

  it('should show user welcome and sign out when user is logged in', () => {
    const mockUser = {
      id: 'test-user-id',
      name: 'Alice Johnson',
      email: 'alice@example.com'
    }

    render(<Navigation user={mockUser} />)
    
    expect(screen.getByText('Welcome back, Alice Johnson!')).toBeInTheDocument()
    expect(screen.getByText('Sign Out')).toBeInTheDocument()
    expect(screen.queryByText('Sign In')).not.toBeInTheDocument()
    expect(screen.queryByText('Join Community')).not.toBeInTheDocument()
  })

  it('should show different navigation links for authenticated users', () => {
    const mockUser = {
      id: 'test-user-id',
      name: 'Alice Johnson',
      email: 'alice@example.com'
    }

    render(<Navigation user={mockUser} />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Browse')).toBeInTheDocument()
    expect(screen.getByText('Share')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })

  it('should show only public navigation links for non-authenticated users', () => {
    render(<Navigation />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Browse')).toBeInTheDocument()
    expect(screen.queryByText('Share')).not.toBeInTheDocument()
    expect(screen.queryByText('Profile')).not.toBeInTheDocument()
  })

  it('should have correct links for authenticated navigation', () => {
    const mockUser = {
      id: 'test-user-id',
      name: 'Alice Johnson',
      email: 'alice@example.com'
    }

    render(<Navigation user={mockUser} />)
    
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
    expect(screen.getByText('Browse').closest('a')).toHaveAttribute('href', '/browse')
    expect(screen.getByText('Share').closest('a')).toHaveAttribute('href', '/share')
    expect(screen.getByText('Profile').closest('a')).toHaveAttribute('href', '/profile')
    expect(screen.getByText('Sign Out').closest('a')).toHaveAttribute('href', '/logout')
  })
})

