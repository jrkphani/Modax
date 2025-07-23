# ModAx Internal Portal Technical Implementation
## Modern React Stack with Vite, Tailwind CSS 4, and MSW

---

## Tech Stack Overview

### Core Framework & Build Tools
- **React 18.x** - Latest React with concurrent features
- **Vite** - Lightning-fast dev server and build tool
- **TypeScript** - Type safety and better developer experience

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework (latest version)
- **tailwind-merge** - Intelligently merge Tailwind classes
- **class-variance-authority (cva)** - Type-safe component variants
- **shadcn/ui** - Headless, accessible component library
- **reactbits** - UI helpers and primitives

### State Management & Routing
- **zustand** - Lightweight state management
- **react-router-dom** - Client-side routing

### Data Visualization
- **Nivo** - Rich interactive charts
  - `@nivo/bar` - Bar charts
  - `@nivo/line` - Line charts
  - `@nivo/pie` - Pie charts
  - `@nivo/sankey` - Flow diagrams

### Development & Testing
- **Mock Service Worker (MSW)** - API mocking for development
- **Vitest** - Fast unit testing
- **ESLint** - Code linting with circular dependency prevention
- **Prettier** - Code formatting with Tailwind plugin

---

## Project Structure

```
/ModAx-Internal
├── /src
│   ├── /app
│   │   ├── /routes          # Route components
│   │   ├── /layouts         # Layout components
│   │   └── App.tsx          # Main app component
│   ├── /features
│   │   ├── /dashboard       # Dashboard feature
│   │   ├── /strategy        # Strategy visualizations
│   │   ├── /playbooks       # Sales playbooks
│   │   ├── /tools           # Calculators, simulators
│   │   └── /training        # Training modules
│   ├── /components
│   │   ├── /ui              # shadcn/ui components
│   │   ├── /charts          # Nivo chart components
│   │   └── /shared          # Shared components
│   ├── /hooks               # Custom React hooks
│   ├── /lib
│   │   ├── /utils           # Utility functions
│   │   └── /cn.ts           # Class name utilities
│   ├── /services
│   │   ├── /api             # API service layer
│   │   └── /auth            # Authentication
│   ├── /stores              # Zustand stores
│   ├── /styles
│   │   └── globals.css      # Global styles & Tailwind
│   ├── /types               # TypeScript types
│   └── /mocks               # MSW mock handlers
├── /public
│   └── mockServiceWorker.js # MSW service worker
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
└── package.json
```

---

## Implementation Guide

### 1. Initial Setup

```bash
# Create new Vite project
npm create vite@latest modax-internal -- --template react-ts

# Install dependencies
cd modax-internal
npm install

# Core dependencies
npm install react-router-dom zustand
npm install @tanstack/react-query # Optional but recommended

# UI & Styling
npm install tailwindcss@next @tailwindcss/forms @tailwindcss/typography
npm install tailwind-merge class-variance-authority
npm install @radix-ui/react-* # As needed for shadcn/ui
npm install reactbits

# Charts
npm install @nivo/core @nivo/bar @nivo/line @nivo/pie @nivo/sankey

# Development
npm install -D msw vitest @testing-library/react
npm install -D eslint prettier prettier-plugin-tailwindcss
npm install -D @types/react @types/react-dom
```

### 2. Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@features': path.resolve(__dirname, './src/features'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@stores': path.resolve(__dirname, './src/stores'),
    },
  },
  server: {
    port: 3001, // Different port for internal
  },
})
```

### 3. Tailwind Configuration

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#667eea",
          dark: "#5a67d8",
          light: "#7c8ff0",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#764ba2",
          foreground: "#ffffff",
        },
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-in": "slideIn 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
}
```

### 4. MSW Setup for Development

```typescript
// src/mocks/handlers.ts
import { rest } from 'msw'

export const handlers = [
  // Mock authentication
  rest.post('/api/auth/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: {
          id: '1',
          name: 'John Doe',
          role: 'sales',
          permissions: ['view_playbooks', 'use_tools'],
        },
        token: 'mock-jwt-token',
      })
    )
  }),

  // Mock strategy data
  rest.get('/api/strategy/overview', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        marketSize: {
          total: 10.7,
          segments: {
            processReinvention: 5.4,
            legacyModernization: 3.2,
            pocRecovery: 2.1,
          },
        },
        opportunities: [
          { id: 1, title: 'Failed POC Recovery', value: 2.1 },
          { id: 2, title: 'Legacy Modernization', value: 3.2 },
          { id: 3, title: 'Process Reinvention', value: 5.4 },
        ],
      })
    )
  }),

  // Mock calculator data
  rest.post('/api/tools/roi-calculator', async (req, res, ctx) => {
    const { processTime, errorRate, volume } = await req.json()
    
    return res(
      ctx.status(200),
      ctx.json({
        currentCost: processTime * volume * 50,
        projectedCost: processTime * volume * 5,
        savings: processTime * volume * 45,
        roi: 900,
        paybackPeriod: 3,
      })
    )
  }),
]

// src/mocks/browser.ts
import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)

// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

// Start MSW in development
if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser')
  await worker.start({
    onUnhandledRequest: 'bypass',
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### 5. Component Examples

```typescript
// src/lib/cn.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// src/components/ui/button.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-dark",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### 6. State Management with Zustand

```typescript
// src/stores/strategyStore.ts
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface StrategyState {
  selectedPath: 'poc' | 'legacy' | 'process' | null
  marketData: {
    total: number
    segments: Record<string, number>
  }
  setSelectedPath: (path: StrategyState['selectedPath']) => void
  setMarketData: (data: StrategyState['marketData']) => void
}

export const useStrategyStore = create<StrategyState>()(
  devtools(
    persist(
      (set) => ({
        selectedPath: null,
        marketData: {
          total: 0,
          segments: {},
        },
        setSelectedPath: (path) => set({ selectedPath: path }),
        setMarketData: (data) => set({ marketData: data }),
      }),
      {
        name: 'strategy-storage',
      }
    )
  )
)
```

### 7. Chart Components with Nivo

```typescript
// src/components/charts/MarketOpportunityChart.tsx
import { ResponsivePie } from '@nivo/pie'
import { useStrategyStore } from '@/stores/strategyStore'

export function MarketOpportunityChart() {
  const { marketData } = useStrategyStore()
  
  const data = Object.entries(marketData.segments).map(([key, value]) => ({
    id: key,
    label: key.replace(/([A-Z])/g, ' $1').trim(),
    value,
  }))

  return (
    <div className="h-[400px] w-full">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'purple_blue' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
      />
    </div>
  )
}
```

### 8. ESLint Configuration

```javascript
// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-cycle': ['error', { maxDepth: 1 }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
```

---

## Key Features Implementation

### 1. Interactive Strategy Canvas
- Built with D3.js or Nivo Sankey diagrams
- Real-time animations with Framer Motion
- Touch-enabled for mobile devices

### 2. Scenario Simulator
- Form built with shadcn/ui components
- State managed with zustand
- Results calculated client-side
- Exportable recommendations

### 3. ROI Calculator
- Input validation with react-hook-form
- Charts with Nivo
- PDF export capability
- Shareable results links

### 4. Training Modules
- Video integration with react-player
- Progress tracking in zustand
- Quiz components with instant feedback
- Certificate generation

---

## Performance Optimizations

### 1. Code Splitting
```typescript
// Lazy load heavy features
const StrategyCanvas = lazy(() => import('@/features/strategy/StrategyCanvas'))
const ROICalculator = lazy(() => import('@/features/tools/ROICalculator'))
```

### 2. Image Optimization
- Use WebP with fallbacks
- Implement lazy loading
- Optimize with sharp in build

### 3. Bundle Optimization
- Tree-shake unused Nivo charts
- Minimize Tailwind CSS with PurgeCSS
- Split vendor chunks strategically

---

## Deployment

### Development
```bash
npm run dev
# Runs on http://localhost:3001 with MSW mocking
```

### Production Build
```bash
npm run build
npm run preview
```

### Environment Variables
```env
VITE_API_URL=https://api.modax.internal
VITE_AUTH_DOMAIN=auth.modax.internal
VITE_ENABLE_MSW=false # Disable MSW in production
```

---

## Testing Strategy

### Unit Tests with Vitest
```typescript
// src/components/ui/button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders with correct variant', () => {
    render(<Button variant="primary">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-primary')
  })
})
```

### Integration Tests with MSW
```typescript
// src/features/calculator/calculator.test.tsx
import { render, screen, waitFor } from '@testing-library/react'
import { ROICalculator } from './ROICalculator'

test('calculates ROI correctly', async () => {
  render(<ROICalculator />)
  // MSW will intercept the API call
  // Test the UI updates correctly
})
```

---

This modern stack provides everything needed for a high-performance internal portal with excellent developer experience and user experience.