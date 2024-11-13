import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithClient } from '../test/utils'
import { http, HttpResponse } from 'msw'
import { server } from '../test/mocks/server'
import CustomerList from './CustomerList'

describe('CustomerList', () => {
  it('renders customers from API', async () => {
    renderWithClient(<CustomerList />)
    
    // First check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    
    // Wait for customers to be loaded
    const customers = await screen.findAllByRole('listitem')
    expect(customers).toHaveLength(3)
    expect(customers[0]).toHaveTextContent('John Doe')
    expect(customers[1]).toHaveTextContent('Jane Smith')
    expect(customers[2]).toHaveTextContent('Alice Johnson')
  })

  it('handles error state', async () => {
    server.use(
      http.get('http://localhost:8080/api/customers', () => {
        return HttpResponse.error()
      })
    )

    renderWithClient(<CustomerList />)
    
    const errorMessage = await screen.findByText('Error loading customers: Network Error')
    expect(errorMessage).toBeInTheDocument()
  })
}) 