# ModAx Knowledge Portal Migration Plan

## Overview
This plan outlines the migration from the current navigation structure to the new Knowledge Portal organization while maintaining the updated design system (Primary: #6d28d9, Secondary: #c026d3).

## Current State Analysis
- **Authentication**: Context exists but no route protection
- **Navigation**: Sidebar-based with collapsible sections
- **Landing**: Dashboard page after login
- **Design System**: Recently updated with new brand colors

## Target State
- **Landing**: Strategy Overview page (not Dashboard)
- **Navigation**: Reorganized into 5 main sections
- **Search**: Global search with command palette (⌘K)
- **Mobile**: Responsive slide-out navigation
- **Quick Access**: Persistent bottom toolbar

## Migration Phases

### Phase 1: Foundation (Week 1)
**Goal**: Set up new navigation structure and core components

1. **Update Navigation Configuration**
   - [ ] Create new navigation structure in `/src/config/navigation.ts`
   - [ ] Map existing pages to new hierarchy
   - [ ] Add new section icons and metadata

2. **Create New Layout Components**
   - [ ] TopBar component with search and profile
   - [ ] Enhanced Sidebar with new sections
   - [ ] Breadcrumb component
   - [ ] Quick Access widget

3. **Implement Route Protection**
   - [ ] Create ProtectedRoute component
   - [ ] Add authentication persistence
   - [ ] Update router configuration

4. **Create Strategy Overview Page**
   - [ ] New landing page after login
   - [ ] Market Opportunity section
   - [ ] Three-Act Journey visualization
   - [ ] Success Stories carousel
   - [ ] Intelligence Fabric preview

### Phase 2: Content Reorganization (Week 2)
**Goal**: Migrate existing content to new structure

1. **Sales Enablement Section**
   - [ ] Create Quick Start subsection
     - Elevator Pitches
     - Discovery Scripts
     - Objection Handling
   - [ ] Migrate Battle Cards
   - [ ] Organize Pitch Decks
   - [ ] Move Tools & Calculators

2. **Playbooks Section**
   - [ ] Create 90-Day Execution structure
   - [ ] Add Discovery Process
   - [ ] Add Expansion Strategy
   - [ ] Migrate existing playbook content

3. **Resources Section**
   - [ ] Organize Case Studies
   - [ ] Create Templates library
   - [ ] Add Training Materials
   - [ ] Create Marketing Assets

4. **Knowledge Base**
   - [ ] Consolidate documentation
   - [ ] Add technical specifications
   - [ ] Create FAQ section

### Phase 3: Enhanced Features (Week 3)
**Goal**: Add search, mobile support, and polish

1. **Global Search Implementation**
   - [ ] Create search component with ⌘K shortcut
   - [ ] Implement search indexing
   - [ ] Add search results categorization
   - [ ] Quick actions support

2. **Mobile Navigation**
   - [ ] Responsive sidebar
   - [ ] Touch-friendly interactions
   - [ ] Mobile search experience
   - [ ] Gesture support

3. **User Experience Enhancements**
   - [ ] Persistent navigation state
   - [ ] Bookmarking functionality
   - [ ] Recently viewed items
   - [ ] Notification system

## File Structure Changes

```
src/
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx (new)
│   │   ├── Sidebar.tsx (updated)
│   │   ├── Breadcrumb.tsx (new)
│   │   ├── QuickAccess.tsx (new)
│   │   └── ProtectedRoute.tsx (new)
│   └── search/
│       ├── GlobalSearch.tsx (new)
│       └── SearchResults.tsx (new)
├── pages/
│   ├── strategy/
│   │   ├── StrategyOverview.tsx (new - landing)
│   │   ├── MarketOpportunity.tsx
│   │   ├── ThreeActJourney.tsx
│   │   └── SuccessStories.tsx
│   ├── sales-enablement/
│   │   ├── index.tsx
│   │   ├── quick-start/
│   │   ├── battle-cards/
│   │   ├── pitch-decks/
│   │   └── tools/
│   ├── playbooks/
│   │   ├── index.tsx
│   │   ├── ninety-day/
│   │   ├── discovery/
│   │   └── expansion/
│   ├── resources/
│   │   ├── index.tsx
│   │   ├── case-studies/
│   │   ├── templates/
│   │   ├── training/
│   │   └── marketing/
│   └── knowledge-base/
│       ├── index.tsx
│       ├── documentation/
│       ├── specifications/
│       └── faqs/
└── config/
    ├── navigation.ts (updated)
    └── search-config.ts (new)
```

## Design System Application

### Color Usage
- **Primary (#6d28d9)**: Active navigation, CTAs, links
- **Secondary (#c026d3)**: Accents, hover states, badges
- **Emerald (#50C878)**: Success states, metrics, positive indicators
- **Grays**: 90% of UI following minimal design principle

### Component Styling
- Navigation: Dark sidebar with primary highlights
- Search: Clean white/gray with primary accents
- Cards: Subtle borders with hover effects
- Buttons: Primary for main actions, ghost for secondary

## Implementation Priority

### Must Have (MVP)
1. New navigation structure
2. Strategy Overview landing
3. Route protection
4. Basic search (page titles)
5. Mobile responsive

### Should Have
1. Full search indexing
2. Breadcrumbs
3. Quick Access widget
4. Persistent user preferences

### Nice to Have
1. Command palette
2. Keyboard navigation
3. Advanced filtering
4. Analytics tracking

## Success Metrics
- Navigation time reduced by 50%
- Search usage > 40% of sessions
- Mobile experience rating > 4.5/5
- Page load time < 2s
- User satisfaction > 90%

## Risks & Mitigations
1. **Risk**: Breaking existing workflows
   - **Mitigation**: Implement redirects from old URLs

2. **Risk**: Search performance issues
   - **Mitigation**: Implement progressive search with debouncing

3. **Risk**: Mobile complexity
   - **Mitigation**: Start with simplified mobile navigation

4. **Risk**: User adoption
   - **Mitigation**: Include onboarding tour for new structure

## Next Steps
1. Review and approve plan
2. Set up new navigation config
3. Create TopBar and enhanced Sidebar
4. Implement Strategy Overview page
5. Begin content migration