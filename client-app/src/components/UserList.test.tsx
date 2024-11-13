import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import UserList from './UserList'
import { renderWithClient } from '../test/utils'
import { http, HttpResponse } from 'msw'
import { server } from '../test/mocks/server'

describe('UserList', () => {
  it('renders users from API', async () => {
    renderWithClient(<UserList />)
    
    // First check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    
    // Wait for users to be loaded
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(2)
    expect(users[0]).toHaveTextContent('John Doe')
    expect(users[1]).toHaveTextContent('Jane Smith')
  })

  it('handles error state', async () => {
    server.use(
      http.get('/api/users', () => {
        return HttpResponse.error()
      })
    )

    renderWithClient(<UserList />)
    
    const errorMessage = await screen.findByText('Error loading users')
    expect(errorMessage).toBeInTheDocument()
  })
}) 