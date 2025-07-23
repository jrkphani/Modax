import type { RenderOptions } from '@testing-library/react'
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import { afterEach, beforeAll, afterAll, vi } from 'vitest'
import type { ReactNode, ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})

// Mock window.matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
})

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))
})

// Mock ResizeObserver
beforeAll(() => {
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))
})

// Suppress console errors in tests
const originalError = console.error
beforeAll(() => {
  console.error = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render')
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})

// Custom test utilities
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Mock providers wrapper for tests
export const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

// Custom render function that includes providers
export const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, { wrapper: AllTheProviders, ...options })
}

// Re-export everything
export * from '@testing-library/react'
export { renderWithProviders as render }