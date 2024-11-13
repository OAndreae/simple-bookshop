import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './lib/query-client'
import BookList from './components/BookList'
import UserList from './components/UserList'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
      <BookList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
