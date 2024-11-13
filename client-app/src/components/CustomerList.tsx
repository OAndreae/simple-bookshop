import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Customer {
  id: number
  name: string
}

async function fetchCustomers() {
  const response = await axios.get<Customer[]>('http://localhost:8080/api/customers')
  return response.data
}

export default function CustomerList() {
  const { data: customers = [], isLoading, isError, error } = useQuery({
    queryKey: ['customers'],
    queryFn: fetchCustomers
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading customers: {error.message}</div>

  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.id}>{customer.name}</li>
      ))}
    </ul>
  )
} 