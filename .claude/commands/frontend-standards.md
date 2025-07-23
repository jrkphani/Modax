# Frontend Development Standards Command

Enforce comprehensive frontend coding standards for ModAx: $ARGUMENTS

## CRITICAL RULES - NEVER VIOLATE

### 1. TypeScript - ZERO TOLERANCE FOR `any`
```typescript
// ❌ NEVER DO THIS
const processData = (data: any) => { ... }
let result: any;
function handleEvent(e: any) { ... }

// ✅ ALWAYS DO THIS
const processData = (data: UserData) => { ... }
let result: string | number;
function handleEvent(e: React.MouseEvent<HTMLButtonElement>) { ... }

// ✅ When type is truly unknown, use `unknown` and type guards
function processUnknownData(data: unknown) {
  if (typeof data === 'string') {
    // data is now typed as string
  }
}
```

### 2. Error Boundaries - MANDATORY
Every feature module MUST have error boundaries:

```typescript
// src/components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    // Send to error tracking service
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 border border-error rounded-lg">
          <h2 className="text-lg font-semibold text-error">Something went wrong</h2>
          <details className="mt-2">
            <summary className="cursor-pointer text-sm">Error details</summary>
            <pre className="mt-2 text-xs overflow-auto">
              {this.state.error?.toString()}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage: Wrap every route/feature
<ErrorBoundary>
  <FeatureComponent />
</ErrorBoundary>
```

## COMPREHENSIVE CODING CHECKLIST

### 1. Structure & Readability
```typescript
// ✅ SEMANTIC HTML - ALWAYS USE CORRECT ELEMENTS
export function Navigation() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
      </ul>
    </nav>
  );
}

// ❌ NEVER USE DIVS FOR EVERYTHING
export function Navigation() {
  return (
    <div className="navigation">
      <div className="nav-list">...</div>
    </div>
  );
}

// ✅ SINGLE RESPONSIBILITY - ONE COMPONENT, ONE PURPOSE
export function UserAvatar({ user }: { user: User }) { ... }
export function UserProfile({ user }: { user: User }) { ... }

// ❌ AVOID GOD COMPONENTS
export function UserEverything() { 
  // 500 lines of mixed concerns
}
```

### 2. Type Safety & Linting
```typescript
// ✅ STRICT TYPING WITH INTERFACES
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled?: boolean;
  'aria-label'?: string;
}

// ✅ INFER TYPES WHERE POSSIBLE
const BUTTON_VARIANTS = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  danger: 'bg-error text-white',
} as const;

type ButtonVariant = keyof typeof BUTTON_VARIANTS;

// ✅ USE GENERICS FOR REUSABLE COMPONENTS
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
```

### 3. Design System & Tokens
```typescript
// ❌ NEVER HARDCODE VALUES
<div style={{ color: '#667eea', padding: '16px' }}>

// ✅ ALWAYS USE DESIGN TOKENS
import { colors, spacing } from '@/design-tokens';

<div className="text-primary p-4">
// or with CSS variables
<div style={{ 
  color: 'var(--color-primary)', 
  padding: 'var(--spacing-md)' 
}}>

// ✅ EXTEND TOKENS PROPERLY
// src/design-tokens/index.ts
export const extendedColors = {
  ...baseColors,
  'brand-purple': '#667eea',
  'brand-purple-dark': '#5a67d8',
} as const;
```

### 4. Performance & Responsiveness
```typescript
// ✅ OPTIMIZE IMPORTS
import { Button } from '@/components/ui/button';
// NOT: import * as UI from '@/components/ui';

// ✅ PREVENT UNNECESSARY RE-RENDERS
import { memo, useCallback, useMemo } from 'react';

const ExpensiveComponent = memo(({ data }: Props) => {
  const processedData = useMemo(
    () => expensiveCalculation(data),
    [data]
  );
  
  const handleClick = useCallback((id: string) => {
    // Handle click
  }, []);
  
  return <div>{/* Render */}</div>;
});

// ✅ LAZY LOAD HEAVY COMPONENTS
const HeavyChart = lazy(() => import('@/components/charts/HeavyChart'));

// ✅ RESPONSIVE DESIGN
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Mobile-first responsive grid */}
</div>
```

### 5. Accessibility (MANDATORY)
```typescript
// ✅ KEYBOARD NAVIGATION
<button
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
  tabIndex={0}
  aria-label="Save changes"
>
  Save
</button>

// ✅ ARIA LABELS AND ROLES
<nav role="navigation" aria-label="Main">
  <ul role="list">
    <li role="listitem">
      <a href="/home" aria-current={isActive ? 'page' : undefined}>
        Home
      </a>
    </li>
  </ul>
</nav>

// ✅ SCREEN READER SUPPORT
<img src={user.avatar} alt={`Profile picture of ${user.name}`} />

<div aria-live="polite" aria-atomic="true">
  {status && <p>{status}</p>}
</div>
```

### 6. Error/Loading/Empty States (ALL REQUIRED)
```typescript
// ✅ HANDLE ALL STATES
function DataComponent() {
  const { data, isLoading, error } = useQuery(['data'], fetchData);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Spinner />
        <span className="ml-2">Loading...</span>
      </div>
    );
  }
  
  if (error) {
    return (
      <Alert variant="error">
        <AlertTitle>Error loading data</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
        <Button onClick={() => refetch()} className="mt-2">
          Try again
        </Button>
      </Alert>
    );
  }
  
  if (!data || data.length === 0) {
    return (
      <EmptyState
        title="No data found"
        description="Start by adding your first item"
        action={<Button onClick={handleAdd}>Add Item</Button>}
      />
    );
  }
  
  return <DataList data={data} />;
}
```

### 7. Cross-Browser & Cross-Device
```typescript
// ✅ USE FEATURE DETECTION
if ('IntersectionObserver' in window) {
  // Use Intersection Observer
} else {
  // Fallback behavior
}

// ✅ PROGRESSIVE ENHANCEMENT
<picture>
  <source srcSet={`${image}.webp`} type="image/webp" />
  <source srcSet={`${image}.jpg`} type="image/jpeg" />
  <img src={`${image}.jpg`} alt={description} />
</picture>

// ✅ TOUCH-FRIENDLY TARGETS
<button className="min-h-[44px] min-w-[44px] p-3">
  {/* 44px minimum for touch targets */}
</button>
```

### 8. Testing (REQUIRED FOR ALL COMPONENTS)
```typescript
// Component.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Component } from './Component';

describe('Component', () => {
  it('renders with correct props', () => {
    render(<Component title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  
  it('handles user interaction', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Component onClick={handleClick} />);
    await user.click(screen.getByRole('button'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('handles error states', () => {
    render(<Component data={null} error={new Error('Failed')} />);
    expect(screen.getByText(/Failed/)).toBeInTheDocument();
  });
  
  it('is accessible', async () => {
    const { container } = render(<Component />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### 9. Documentation & Comments
```typescript
/**
 * Button component with multiple variants and sizes
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" onClick={handleSave}>
 *   Save Changes
 * </Button>
 * ```
 */
interface ButtonProps {
  /** Visual style variant */
  variant: 'primary' | 'secondary' | 'danger';
  /** Size of the button */
  size: 'sm' | 'md' | 'lg';
  /** Click handler */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Button content */
  children: React.ReactNode;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Accessible label for screen readers */
  'aria-label'?: string;
}
```

### 10. Security Best Practices
```typescript
// ❌ NEVER TRUST USER INPUT
<div dangerouslySetInnerHTML={{ __html: userContent }} />

// ✅ SANITIZE USER INPUT
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userContent) }} />

// ❌ NEVER EXPOSE SECRETS
const API_KEY = 'sk-1234567890';

// ✅ USE ENVIRONMENT VARIABLES
const apiKey = import.meta.env.VITE_API_KEY;

// ✅ VALIDATE ALL INPUTS
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(0).max(150),
});

function handleSubmit(data: unknown) {
  const validated = schema.parse(data);
  // Now data is type-safe and validated
}
```

## ENFORCEMENT RULES

1. **NO EXCEPTIONS TO TYPESCRIPT RULES**
   - Never use `any` - use `unknown` with type guards
   - All functions must have explicit return types
   - All props must be fully typed

2. **ERROR BOUNDARIES ARE MANDATORY**
   - Every route must be wrapped
   - Every async component must handle errors
   - All errors must be logged

3. **ACCESSIBILITY IS NOT OPTIONAL**
   - All interactive elements must be keyboard accessible
   - All images must have alt text
   - All forms must have proper labels

4. **TESTING IS REQUIRED**
   - Minimum 80% coverage for critical paths
   - All user interactions must be tested
   - Accessibility tests are mandatory

## PR CHECKLIST (COPY THIS)

```markdown
## Frontend Standards Checklist

- [ ] **NO `any` types** - all TypeScript strictly typed
- [ ] **Error boundaries** implemented for all features
- [ ] **Semantic HTML** - correct elements used
- [ ] **Design tokens** - no hardcoded values
- [ ] **Performance** - lazy loading, memoization where needed
- [ ] **Responsive** - tested on mobile, tablet, desktop
- [ ] **Accessible** - keyboard nav, ARIA labels, alt text
- [ ] **All states handled** - loading, error, empty, success
- [ ] **Cross-browser tested** - Chrome, Firefox, Safari, Edge
- [ ] **Tests written** - unit, integration, accessibility
- [ ] **Documented** - props, usage examples, edge cases
- [ ] **Security** - inputs sanitized, no exposed secrets
- [ ] **Linting passes** - ESLint, Prettier, TypeScript
```

Usage: `/frontend-standards [component-name]`

This command ensures ALL frontend code meets the highest standards for quality, accessibility, performance, and maintainability.