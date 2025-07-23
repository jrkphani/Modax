# ModAx Internal Portal - Navigation Structure

## Overview

The navigation system is designed to provide intuitive access to all portal features while maintaining a clean, professional interface. The structure follows a hierarchical approach with clear categorization of features.

## Navigation Configuration

### Central Configuration File
Location: `/src/config/navigation.tsx`

### Structure
```typescript
interface NavigationItem {
  name: string;
  href?: string;
  icon: LucideIcon;
  description?: string;
  children?: NavigationItem[];
}
```

## Main Navigation Categories

### 1. Dashboard
- **Icon**: Home
- **Path**: `/`
- **Purpose**: Central hub for key metrics and quick actions
- **Access**: Available to all users

### 2. Learn & Onboard
Strategic importance: Foundation for team enablement

#### Training Center
- **Icon**: GraduationCap
- **Path**: `/learn/training-center`
- **Features**:
  - Role-based learning paths
  - Interactive modules
  - Progress tracking
  - Certification system

#### Internal Training
- **Icon**: Users
- **Path**: `/learn/internal-training`
- **Features**:
  - Team onboarding
  - Skill development
  - Best practices
  - Knowledge sharing

### 3. Strategy
Core strategic planning and execution tools

#### Strategy Overview
- **Icon**: Target
- **Path**: `/strategy/overview`
- **Purpose**: High-level view of ModAx approach
- **Content**: Journey visualization, phase details

#### Opportunities
- **Icon**: TrendingUp
- **Path**: `/strategy/opportunities`
- **Purpose**: Lane identification and prioritization
- **Features**: Opportunity scoring, ROI analysis

#### Value Delivery
- **Icon**: Package
- **Path**: `/strategy/value-delivery`
- **Purpose**: Value chain mapping and delivery
- **Features**: Process flows, impact metrics

#### Sales Playbook
- **Icon**: BookOpen
- **Path**: `/strategy/playbook`
- **Purpose**: Sales enablement resources
- **Content**: Talk tracks, objection handling

### 4. Client Engagement
Client-facing tools and resources

#### Client Assessment
- **Icon**: ClipboardCheck
- **Path**: `/clients/assessment`
- **Purpose**: Evaluate client maturity
- **Features**: Assessment wizard, scoring

#### Success Stories
- **Icon**: Award
- **Path**: `/clients/success-stories`
- **Purpose**: Case studies and testimonials
- **Content**: Client wins, ROI examples

### 5. Operations
Operational excellence and risk management

#### Delivery Framework
- **Icon**: GitBranch
- **Path**: `/operations/delivery-framework`
- **Purpose**: Methodology and processes
- **Features**: Phase details, templates

#### Trust & Transparency
- **Icon**: Shield
- **Path**: `/operations/trust-transparency`
- **Purpose**: Build client confidence
- **Tools**: Trust toolkit, communication guides

#### Risk Management
- **Icon**: AlertTriangle
- **Path**: `/operations/risk-management`
- **Purpose**: Identify and mitigate risks
- **Features**: Risk matrix, mitigation plans

### 6. Resources
Supporting materials and tools

#### Design System
- **Icon**: Palette
- **Path**: `/resources/design-system`
- **Purpose**: UI/UX guidelines
- **Content**: Components, patterns, tokens

## Navigation Behavior

### Desktop Experience
- **Sidebar**: Always visible, 280px width
- **Hover**: Subtle background change
- **Active**: Purple accent with background
- **Icons**: 20px size with consistent spacing
- **Typography**: Inter font, 14px base

### Mobile Experience
- **Hamburger Menu**: Top-left corner
- **Overlay**: Full-screen navigation
- **Touch Targets**: Minimum 44px height
- **Swipe**: Gesture to close menu
- **Animation**: Slide from left

### Tablet Experience
- **Collapsible Sidebar**: Icon-only mode
- **Tooltip**: Show labels on hover
- **Responsive**: Adapts to orientation

## User Experience Features

### 1. Search Integration
- **Shortcut**: Cmd/Ctrl + K
- **Scope**: All pages and content
- **Results**: Grouped by category
- **Navigation**: Direct to result

### 2. Breadcrumbs
- **Location**: Below header
- **Format**: Parent > Current Page
- **Clickable**: All parent levels
- **Mobile**: Truncated with ellipsis

### 3. Quick Actions
- **Position**: Top right
- **Actions**: Profile, settings, logout
- **Notifications**: Badge for updates
- **Dark Mode**: Toggle switch

### 4. Contextual Navigation
- **In-Page**: Section anchors
- **Related**: Suggested next steps
- **Progress**: Visual indicators
- **Help**: Contextual tooltips

## Accessibility Features

### Keyboard Navigation
- **Tab Order**: Logical flow
- **Focus Indicators**: Visible outline
- **Skip Links**: Jump to content
- **Shortcuts**: Document shortcuts

### Screen Reader Support
- **ARIA Labels**: All interactive elements
- **Landmarks**: Proper HTML5 sections
- **Announcements**: Route changes
- **Descriptions**: Icon meanings

### Color and Contrast
- **WCAG AA**: Minimum compliance
- **High Contrast**: Mode available
- **Color Blind**: Safe palette
- **Focus States**: Not color-dependent

## Performance Optimizations

### Code Splitting
- **Routes**: Lazy loaded
- **Components**: Dynamic imports
- **Prefetch**: Next likely route
- **Cache**: Navigation structure

### State Management
- **Active Route**: Zustand store
- **Expanded State**: Local storage
- **History**: Browser native
- **Animations**: GPU accelerated

## Future Enhancements

### Planned Features
1. **Personalization**: Role-based menu
2. **Favorites**: Pin frequent pages
3. **History**: Recent pages list
4. **Smart Suggestions**: AI-powered

### Technical Improvements
1. **Micro-animations**: Smoother transitions
2. **Gesture Support**: Mobile swipes
3. **Voice Navigation**: Accessibility
4. **Predictive Loading**: Faster navigation

## Implementation Guidelines

### Adding New Routes
1. Update `/src/config/navigation.tsx`
2. Add route to router configuration
3. Create page component
4. Update search index
5. Add to sitemap

### Icon Selection
- Use lucide-react icons
- Maintain consistent style
- Consider meaning clarity
- Test at small sizes

### Naming Conventions
- Clear, action-oriented labels
- Consistent terminology
- Avoid jargon
- Consider internationalization

### Testing Requirements
- Navigation flow tests
- Accessibility audit
- Performance metrics
- User testing feedback