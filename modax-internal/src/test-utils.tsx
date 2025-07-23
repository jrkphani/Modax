/* eslint-disable react-refresh/only-export-components */
import React, { type ReactNode } from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Mock providers wrapper for tests
const AllTheProviders = ({ children }: { children: ReactNode }) => {
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

// Utility functions
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Re-export everything
export * from '@testing-library/react'
export { renderWithProviders as render }