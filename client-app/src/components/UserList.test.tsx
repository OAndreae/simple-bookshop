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
    expect(users).toHaveLength(3)
    expect(users[0]).toHaveTextContent('John Doe')
    expect(users[1]).toHaveTextContent('Jane Smith')
    expect(users[2]).toHaveTextContent('Alice Johnson')
  })

  it('handles error state', async () => {
    server.use(
      http.get('http://localhost:8080/api/users', () => {
        return HttpResponse.error()
      })
    )

    renderWithClient(<UserList />)
    
    const errorMessage = await screen.findByText('Error loading users: Network Error')
    expect(errorMessage).toBeInTheDocument()
  })
}) 