# ModAx Internal Portal - Component Library

## Overview

This document provides a comprehensive overview of all components used in the ModAx Internal Portal, including their purpose, props, and usage examples.

## Layout Components

### 1. Layout (`/components/layout/Layout.tsx`)
Main application layout wrapper with sidebar navigation.

**Features:**
- Responsive sidebar (collapsible on mobile)
- User profile section
- Navigation menu
- Dark mode support
- Outlet for page content

**Key Elements:**
- Logo with ModAx branding
- Collapsible navigation groups
- User avatar and name
- Responsive breakpoints

### 2. Sidebar (`/components/layout/Sidebar.tsx`)
Navigation sidebar component with hierarchical menu structure.

**Props:**
- `isOpen`: boolean - Controls sidebar visibility on mobile
- `onClose`: function - Callback for closing sidebar

**Features:**
- Icon-based navigation
- Nested menu support
- Active route highlighting
- Smooth transitions

## Page Components

### 1. Dashboard (`/pages/Dashboard.tsx`)
Main dashboard with overview metrics and quick actions.

**Sections:**
- Hero banner with gradient animation
- Quick stats cards
- Recent activity feed
- Navigation grid

### 2. Training Center (`/pages/TrainingCenter.tsx`)
Comprehensive training hub with role-based learning paths.

**Components:**
- Role selector tabs
- Module cards with progress
- Points and badges display
- Interactive exercises
- Video player integration

**Features:**
- Gamification system
- Progress tracking
- Skill assessments
- Certificate generation

### 3. Strategy Overview (`/pages/StrategyOverview.tsx`)
Visual representation of the ModAx transformation journey.

**Components:**
- Journey timeline
- Phase cards
- Progress indicators
- Impact metrics
- Client testimonials

### 4. Opportunities (`/pages/Opportunities.tsx`)
Lane-based opportunity management system.

**Components:**
- Lane visualization
- Opportunity cards
- Filter controls
- Success metrics
- CTA section

### 5. Client Assessment (`/pages/ClientAssessment.tsx`)
Interactive client evaluation tool.

**Components:**
- Assessment wizard
- Maturity model chart
- Scoring system
- Recommendation cards
- Report generator

### 6. Sales Playbook (`/pages/SalesPlaybook.tsx`)
Comprehensive sales enablement resource.

**Sections:**
- Discovery guides
- Objection handling
- Talk tracks
- Role-play scenarios
- Resource library

### 7. Delivery Framework (`/pages/DeliveryFramework.tsx`)
Project delivery methodology visualization.

**Components:**
- Phase timeline
- Deliverable cards
- Resource matrix
- Timeline chart
- Success metrics

### 8. Value Delivery (`/pages/ValueDelivery.tsx`)
Value chain and ROI demonstration tools.

**Components:**
- Process flow diagram
- Value metrics
- ROI calculator
- Case study cards
- Impact visualization

## Feature Components

### 1. SearchProvider (`/contexts/SearchProvider.tsx`)
Global search functionality with keyboard shortcuts.

**Features:**
- Fuzzy search algorithm
- Recent searches
- Popular searches
- Keyboard navigation (Cmd+K)
- Result ranking

**API:**
```typescript
const { 
  isOpen, 
  query, 
  results, 
  openSearch, 
  closeSearch, 
  performSearch 
} = useSearch();
```

### 2. OfflineIndicator (`/components/features/OfflineIndicator.tsx`)
Offline detection and user notification system.

**Features:**
- Network status detection
- Service worker integration
- Visual indicators
- Form queue management

**Hooks:**
- `useOnlineStatus()` - Returns online/offline state
- `useOfflineForm()` - Manages offline form submissions

### 3. ThemeProvider (Planned)
Dark mode and theme management.

**Features:**
- System preference detection
- Manual toggle
- Persistent preference
- Smooth transitions

## UI Components

### 1. Card Components
Various card layouts for different content types.

**Variants:**
- Metric cards with icons
- Navigation cards with hover effects
- Content cards with actions
- Stats cards with charts

### 2. Button Components
Consistent button styling using shadcn/ui.

**Variants:**
- Primary, secondary, outline
- Sizes: sm, md, lg
- Icon support
- Loading states

### 3. Form Components
Form elements with validation support.

**Components:**
- Input fields
- Select dropdowns
- Checkboxes
- Radio groups
- Textarea

### 4. Modal Components
Dialog and modal implementations.

**Features:**
- Accessible (ARIA compliant)
- Focus trap
- Keyboard navigation
- Backdrop click handling

### 5. Chart Components
Data visualization using Nivo.

**Types:**
- Bar charts
- Line charts
- Pie charts
- Sankey diagrams

## Animation Components

### 1. Motion Wrappers
Framer Motion animation components.

**Animations:**
- Fade in/out
- Slide transitions
- Scale effects
- Stagger children

### 2. Loading States
Skeleton screens and loading indicators.

**Components:**
- Skeleton cards
- Spinner overlays
- Progress bars
- Shimmer effects

## Utility Components

### 1. ErrorBoundary
Graceful error handling for component trees.

**Features:**
- Error logging
- Fallback UI
- Recovery actions
- Error reporting

### 2. SEO Components
Meta tag management for better SEO.

**Props:**
- title
- description
- keywords
- og tags

## Hooks Library

### 1. `useDebounce`
Debounces value changes.

```typescript
const debouncedValue = useDebounce(value, delay);
```

### 2. `useLocalStorage`
Persistent local storage with React state.

```typescript
const [value, setValue] = useLocalStorage(key, defaultValue);
```

### 3. `useMediaQuery`
Responsive design helper.

```typescript
const isMobile = useMediaQuery('(max-width: 768px)');
```

### 4. `useClickOutside`
Detect clicks outside element.

```typescript
useClickOutside(ref, () => handleClose());
```

## Design Tokens

### Colors
```scss
--primary: #667eea
--secondary: #764ba2
--background: #f7fafc
--foreground: #1a202c
--muted: #718096
--accent: #ed8936
```

### Typography
```scss
--font-sans: 'Inter', sans-serif
--font-mono: 'JetBrains Mono', monospace
```

### Spacing
Using Tailwind's default spacing scale (0.25rem base).

### Breakpoints
```scss
--mobile: 640px
--tablet: 768px
--desktop: 1024px
--wide: 1280px
```

## Component Guidelines

### Best Practices
1. Always use TypeScript interfaces for props
2. Include default props where appropriate
3. Add JSDoc comments for public APIs
4. Use semantic HTML elements
5. Ensure keyboard accessibility
6. Include ARIA labels
7. Test with screen readers
8. Maintain consistent naming

### Performance Tips
1. Use React.memo for expensive components
2. Lazy load heavy components
3. Optimize images and assets
4. Minimize re-renders
5. Use proper key props in lists

### Testing Requirements
1. Unit tests for logic
2. Component tests for UI
3. Accessibility tests
4. Integration tests
5. Visual regression tests (planned)