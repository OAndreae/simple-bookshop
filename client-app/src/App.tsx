import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './lib/query-client'
import BookList from './components/BookList'
import CustomerList from './components/CustomerList'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomerList />
      <BookList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
