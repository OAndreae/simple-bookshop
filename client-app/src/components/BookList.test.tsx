import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import BookList from './BookList'
import { renderWithClient } from '../test/utils'
import { http, HttpResponse } from 'msw'
import { server } from '../test/mocks/server'

describe('BookList', () => {
  it('renders books from API', async () => {
    renderWithClient(<BookList />)
    
    // First check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    
    // Wait for books to be loaded
    const books = await screen.findAllByRole('listitem')
    expect(books).toHaveLength(3)
    expect(books[0]).toHaveTextContent('The Great Gatsby by F. Scott Fitzgerald')
    expect(books[1]).toHaveTextContent('1984 by George Orwell')
    expect(books[2]).toHaveTextContent('Pride and Prejudice by Jane Austen')
  })

  it('handles error state', async () => {
    server.use(
      http.get('http://localhost:8080/api/books', () => {
        return HttpResponse.error()
      })
    )

    renderWithClient(<BookList />)
    
    const errorMessage = await screen.findByText('Error loading books: Network Error')
    expect(errorMessage).toBeInTheDocument()
  })
}) 