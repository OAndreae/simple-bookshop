import { useQuery } from '@tanstack/react-query'

interface User {
  id: number
  name: string
}

async function fetchUsers() {
  const response = await fetch('/api/users')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json() as Promise<User[]>
}

export default function UserList() {
  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading users</div>

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
} 