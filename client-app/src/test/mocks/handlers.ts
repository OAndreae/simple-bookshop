import { http, HttpResponse } from 'msw'
import usersResponse from './responses/api/users.json'

export const handlers = [
  http.get('http://localhost:8080/api/users', () => {
    return HttpResponse.json(usersResponse)
  })
] 