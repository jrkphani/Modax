# ModAx Internal Portal - Site Structure Update

Last Updated: January 2025

## Overview

This document outlines the complete structure and recent updates to the ModAx Internal Strategy Portal, including navigation changes, new components, and technical improvements.

## Current Site Map

### Main Navigation Structure

```
/
├── Dashboard (/)
│
├── Learn & Onboard
│   ├── Training Center (/learn/training-center)
│   └── Internal Training (/learn/internal-training)
│
├── Strategy
│   ├── Strategy Overview (/strategy/overview)
│   ├── Opportunities (/strategy/opportunities)
│   ├── Value Delivery (/strategy/value-delivery)
│   └── Sales Playbook (/strategy/playbook)
│
├── Client Engagement
│   ├── Client Assessment (/clients/assessment)
│   └── Success Stories (/clients/success-stories)
│
├── Operations
│   ├── Delivery Framework (/operations/delivery-framework)
│   ├── Trust & Transparency (/operations/trust-transparency)
│   └── Risk Management (/operations/risk-management)
│
└── Resources
    └── Design System (/resources/design-system)
```

## Page Components and Layouts

### 1. Dashboard Page
- **Path**: `/`
- **Components**: 
  - Hero section with animated gradient background
  - Quick links grid
  - Key metrics cards
  - Recent updates section
  - Interactive navigation cards

### 2. Training Center
- **Path**: `/learn/training-center`
- **Features**:
  - Role-based learning paths
  - Interactive training modules
  - Gamification elements (points, badges)
  - Progress tracking
  - Video integration
  - Interactive exercises

### 3. Strategy Overview
- **Path**: `/strategy/overview`
- **Components**:
  - Journey visualization
  - Phase cards with progress indicators
  - Impact metrics
  - Client testimonials carousel

### 4. Opportunities Page
- **Path**: `/strategy/opportunities`
- **Features**:
  - Lane-based visualization
  - Opportunity cards with metrics
  - Filtering and search
  - Success metrics dashboard

### 5. Value Delivery
- **Path**: `/strategy/value-delivery`
- **Components**:
  - Process flow visualization
  - Value chain mapping
  - ROI calculator
  - Case study integration

### 6. Sales Playbook
- **Path**: `/strategy/playbook`
- **Features**:
  - Discovery guides
  - Objection handling
  - Talk tracks
  - Role-playing scenarios
  - Resource library

### 7. Client Assessment
- **Path**: `/clients/assessment`
- **Components**:
  - Assessment wizard
  - Maturity model visualization
  - Scoring system
  - Recommendation engine
  - Report generation

### 8. Delivery Framework
- **Path**: `/operations/delivery-framework`
- **Features**:
  - Methodology overview
  - Phase details
  - Deliverables templates
  - Timeline visualization
  - Resource allocation

### 9. Trust & Transparency
- **Path**: `/operations/trust-transparency`
- **Components**:
  - Risk matrix
  - Communication protocols
  - Trust toolkit
  - Feedback mechanisms

### 10. Risk Management
- **Path**: `/operations/risk-management`
- **Features**:
  - Risk assessment tools
  - Mitigation strategies
  - Scenario planning
  - Alert system

## Key Components Added

### Global Components

1. **Layout Component** (`/components/layout/Layout.tsx`)
   - Responsive sidebar navigation
   - Collapsible menu with icons
   - User profile section
   - Dark mode support
   - Mobile-responsive design

2. **Search System** (`/contexts/SearchProvider.tsx`)
   - Global search functionality
   - Keyboard shortcuts (Cmd+K)
   - Recent searches
   - Popular searches
   - Search indexing of all pages

3. **Offline Support** (`/components/features/OfflineIndicator.tsx`)
   - Service worker integration
   - Offline detection
   - Cache management
   - Form queue system

### UI Components

1. **Navigation Cards** - Interactive cards with hover effects
2. **Progress Indicators** - Visual progress tracking
3. **Metric Cards** - Data visualization components
4. **Interactive Charts** - Using Nivo library
5. **Motion Components** - Framer Motion animations

## Technical Updates

### Dependencies Added
- `@nivo/bar`, `@nivo/core` - Data visualization
- `framer-motion` - Animations
- `lucide-react` - Icon library
- `zustand` - State management
- Various `@radix-ui` components for accessibility

### Configuration Changes

1. **Vite Configuration** (`vite.config.ts`)
```typescript
- Host changed to '127.0.0.1' for better WebSocket compatibility
- StrictPort enabled for consistent port usage
- HMR explicitly configured
- Path aliases configured (@/ -> ./src/)
```

2. **TypeScript Configuration**
- Strict mode enabled
- Path aliases configured
- React 18 types

3. **Package.json Updates**
- React downgraded from 19 to 18.3.1 for stability
- All React-related packages aligned to same version
- Added type-check script

## Navigation Configuration

The navigation structure is centrally managed in `/src/config/navigation.tsx` with:
- Icon imports from lucide-react
- Hierarchical menu structure
- Route definitions
- Menu grouping

## Styling and Design System

- **Primary Colors**: #667eea (purple), #764ba2 (secondary purple)
- **Font Stack**: Inter for UI, JetBrains Mono for code
- **Spacing**: Tailwind CSS default scale
- **Components**: shadcn/ui base components
- **Dark Mode**: Full dark mode support
- **Responsive**: Mobile-first design approach

## State Management

- **Global State**: Zustand for app-wide state
- **Search State**: Context API for search functionality
- **Local State**: React hooks for component state
- **Form State**: React Hook Form (planned)

## Performance Optimizations

1. Code splitting by route
2. Lazy loading of heavy components
3. Image optimization
4. Service worker for offline support
5. Efficient re-renders with React.memo

## Accessibility Features

- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## Future Enhancements

1. **Planned Features**:
   - Real-time collaboration
   - Advanced analytics dashboard
   - AI-powered recommendations
   - Mobile app version

2. **Technical Improvements**:
   - GraphQL migration
   - Micro-frontend architecture
   - Enhanced caching strategies
   - Performance monitoring

## Development Guidelines

1. **Component Structure**: Feature-based organization
2. **Naming Convention**: PascalCase for components, camelCase for functions
3. **Type Safety**: No `any` types, strict TypeScript
4. **Testing**: Component tests required
5. **Documentation**: JSDoc for all public APIs

## Deployment

- **Internal Portal**: AWS ECS with VPN access
- **Build Process**: Vite production build
- **Environment**: Separate dev, staging, prod
- **CI/CD**: GitHub Actions pipeline