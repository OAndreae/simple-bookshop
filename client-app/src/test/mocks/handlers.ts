import { http, HttpResponse } from 'msw'
import booksResponse from './responses/api/books.json'
import usersResponse from './responses/api/users.json'

export const HTTP_METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch',
} as const

type HttpMethod = typeof HTTP_METHOD[keyof typeof HTTP_METHOD]

const addHandler = (method: HttpMethod, endpoint: string, response: object) => {
  const baseUrl = 'http://localhost:8080'
  const fullUrl = `${baseUrl}${endpoint}`
  
  switch (method) {
    case HTTP_METHOD.GET:
      return http.get(fullUrl, () => HttpResponse.json(response))
    case HTTP_METHOD.POST:
      return http.post(fullUrl, () => HttpResponse.json(response))
    case HTTP_METHOD.PUT:
      return http.put(fullUrl, () => HttpResponse.json(response))
    case HTTP_METHOD.DELETE:
      return http.delete(fullUrl, () => HttpResponse.json(response))
    case HTTP_METHOD.PATCH:
      return http.patch(fullUrl, () => HttpResponse.json(response))
    default:
      throw new Error(`Unsupported HTTP method: ${method}`)
  }
}

export const handlers = [
  addHandler(HTTP_METHOD.GET, '/api/users', usersResponse),
  addHandler(HTTP_METHOD.GET, '/api/books', booksResponse),
] 