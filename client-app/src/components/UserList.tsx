import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface User {
  id: number
  name: string
}

async function fetchUsers() {
  const response = await axios.get<User[]>('http://127.0.0.1:8080/api/users')
  return response.data
}

export default function UserList() {
  const { data: users = [], isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading users: {error.message}</div>

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
} 