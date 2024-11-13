import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { cleanup, render } from '@testing-library/react'
import { beforeEach, afterEach } from 'vitest'
import type { RenderOptions } from '@testing-library/react'
import type { PropsWithChildren } from 'react'

let testQueryClient: QueryClient

beforeEach(() => {
  testQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Infinity,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    }
  })
})

afterEach(() => {
  cleanup()
  testQueryClient.clear()
})

function TestProvider({
  children
}: PropsWithChildren) {
  return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  )
}

export function renderWithClient(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, {
    wrapper: TestProvider,
    ...options,
  })
} 