import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Book {
  id: number
  title: string
  author: string
}

async function fetchBooks() {
  const response = await axios.get<Book[]>('http://localhost:8080/api/books')
  return response.data
}

export default function BookList() {
  const { data: books = [], isLoading, isError, error } = useQuery({
    queryKey: ['books'],
    queryFn: fetchBooks
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading books: {error.message}</div>

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title} by {book.author}</li>
      ))}
    </ul>
  )
} 