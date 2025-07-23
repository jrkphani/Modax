# ModAx Internal Site Design System & Page Layouts
## Complete Design Brief for Internal Strategy Portal

---

## 1. Introduction

### 1.1 Brand Personality & Design Ethos
**ModAx Internal Portal** embodies innovation, transparency, and operational excellence. The design reflects our "AI-Native" philosophy through modern, clean interfaces that prioritize clarity and actionability.

**Core Design Principles:**
- **Minimalist Excellence**: Clean, uncluttered interfaces that highlight key information
- **Focus-First**: Every element serves a purpose, no decorative distractions
- **Sophisticated Simplicity**: Modern, chic aesthetic with generous white space
- **Content Hierarchy**: Clear visual hierarchy guides attention to what matters
- **Professional Polish**: Refined details that convey premium quality

### 1.2 Goals of This Style Guide
This guide serves:
- **Developers**: Technical implementation specifications
- **Designers**: Visual consistency guidelines
- **Content Teams**: Layout and typography standards
- **Leadership**: Brand alignment verification

### 1.3 Website Architecture Overview

```
Landing Page (Public)
└── CTA → Internal Portal (Authenticated)
    ├── Dashboard
    ├── Strategy Hub
    │   ├── Market Opportunities
    │   ├── Entry Strategies
    │   └── Intelligence Fabric
    ├── Operations Center
    │   ├── 90-Day Playbook
    │   ├── Quality Gates
    │   └── Risk Management
    ├── Sales Enablement
    │   ├── Battle Cards
    │   ├── Pitch Decks
    │   └── ROI Calculators
    └── Knowledge Base
        ├── Documentation
        ├── Case Studies
        └── Best Practices
```

---

## 2. Layout & Grid System

### 2.1 Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Wide**: > 1440px

### 2.2 Grid System
- **Columns**: 12-column flexible grid
- **Gutters**: 24px (desktop), 16px (mobile)
- **Max Width**: 1440px for content areas
- **Container Padding**: 32px (desktop), 16px (mobile)

### 2.3 Layout Patterns

#### Landing Hero Layout
```
┌─────────────────────────────────────────┐
│  Navigation Bar (Transparent)           │
├─────────────────────────────────────────┤
│                                         │
│         Hero Content (60vh)             │
│     Headline + Subheadline + CTA       │
│         Animated Background             │
│                                         │
├─────────────────────────────────────────┤
│     Three Value Props (Cards)           │
├─────────────────────────────────────────┤
│          Trust Indicators               │
└─────────────────────────────────────────┘
```

#### Portal Layout (Post-Authentication)
```
┌────────┬────────────────────────────────┐
│        │  Top Bar (Search + Profile)    │
│  Side  ├────────────────────────────────┤
│  Nav   │                                 │
│ (240px)│      Main Content Area          │
│        │                                 │
│        │                                 │
└────────┴────────────────────────────────┘
```

---

## 3. Color System

### 3.1 Primary Brand Colors
- **Primary Purple**: `#667eea` (ModAx Intelligence)
- **Primary Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### 3.2 Secondary Colors
- **Success Green**: `#10b981` (Positive actions)
- **Warning Amber**: `#f59e0b` (Attention needed)
- **Error Red**: `#ef4444` (Critical alerts)
- **Info Blue**: `#3b82f6` (Informational)

### 3.3 Neutral Palette
```
- Black: #000000 (High-impact text)
- Gray 900: #111827 (Primary text)
- Gray 800: #1f2937 (Secondary text)
- Gray 700: #374151 (Subtle text)
- Gray 600: #4b5563 (Muted elements)
- Gray 500: #6b7280 (Borders)
- Gray 400: #9ca3af (Light borders)
- Gray 300: #d1d5db (Subtle backgrounds)
- Gray 200: #e5e7eb (Hover states)
- Gray 100: #f3f4f6 (Light backgrounds)
- Gray 50: #f9fafb (Page background)
- White: #ffffff
```

### 3.4 Semantic Usage
- **Interactive**: Primary Purple for CTAs, links
- **Hover States**: Darken by 10%
- **Focus States**: 3px outline with transparency
- **Disabled**: Gray 600 with 0.5 opacity

---

## 4. Typography

### 4.1 Font Families
- **Headings**: Inter (700, 600)
- **Body**: Inter (400, 500)
- **Monospace**: JetBrains Mono (code snippets)

### 4.2 Type Scale
```
H1: 48px/56px (Landing hero)
H2: 36px/44px (Page titles)
H3: 28px/36px (Section headers)
H4: 24px/32px (Card titles)
H5: 20px/28px (Subsections)
H6: 18px/24px (Small headers)

Body Large: 18px/28px
Body: 16px/24px
Body Small: 14px/20px
Caption: 12px/16px
```

### 4.3 Responsive Adjustments
- Mobile: Reduce heading sizes by 20%
- Maintain readability with min 16px body text

---

## 5. Page-Specific Layouts

### 5.1 Landing Hero Page

**Structure:**
```markdown
┌─────────────────────────────────────────┐
│  ModAx             Enter Portal →       │ <- Minimal nav
├─────────────────────────────────────────┤
│                                         │
│                                         │
│         From Experiments                │
│            to Empire                    │ <- Bold statement
│                                         │
│    We don't do pilots. We build        │
│    bridges from experiments to         │ <- Key differentiator
│    enterprise intelligence.            │
│                                         │
│         [Enter Portal →]                │ <- Single CTA
│                                         │
│                                         │
├─────────────────────────────────────────┤
│  The          The           The        │
│  Graveyard    Trojan Horse  Empire     │ <- Three-act story
│  73% die      90 days       Intelligence│
│  We resurrect Small entry   Your future │
└─────────────────────────────────────────┘
```

**Visual Treatment:**
- Typography-only hero (no images or animations)
- Three-column narrative at bottom
- Subtle hover states on cards
- Maximum white space

### 5.2 Dashboard (Post-Login)

**Layout:**
```markdown
┌─────────────────────────────────────────┐
│                             Search ⌘K 🔍│ <- Minimal header
├─────────────────────────────────────────┤
│                                         │
│  Active Opportunities                   │
│                                         │
│  12     →    4      →    89%          │
│  POCs       Live        Success        │ <- Clean metrics
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Priority Actions                       │
│                                         │
│  • Valuemax expansion ready            │
│  • TechCorp proposal due Thursday      │ <- Focused list
│  • Q2 pipeline review tomorrow         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Quick Access                          │
│                                         │
│  [90-Day Playbook] [ROI Calculator]    │ <- Essential tools
│                                         │
└─────────────────────────────────────────┘
```

### 5.3 Strategy Hub

**Layout:**
```markdown
┌─────────────────────────────────────────┐
│ Strategy Overview                       │
├─────────────────────────────────────────┤
│                                         │
│  Market Opportunities                   │
│                                         │
│  $2.1B          $3.2B          $5.4B   │
│  Failed POC     Legacy         Process  │ <- Clean data viz
│  Recovery       Modernize      Reinvent │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Entry Strategy Decision Tree           │
│                                         │
│  Start Here → Assess → Execute → Scale │ <- Simplified flow
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  [View Intelligence Fabric →]           │
│                                         │
└─────────────────────────────────────────┘
```

### 5.4 90-Day Playbook

**Layout:**
```markdown
┌─────────────────────────────────────────┐
│ 90-Day Execution Framework              │
├─────────────────────────────────────────┤
│                                         │
│  Discovery → Build → Deploy             │
│  Week 1-2    Week 3-8   Week 9-12     │ <- Clean timeline
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Prerequisites                          │
│                                         │
│  ✓ Executive sponsor (4-6 hrs/week)    │
│  ✓ Data access confirmed               │ <- Simple checklist
│  ✓ Environment provisioned             │
│  ✓ Team allocated                      │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  [Download Full Playbook]               │
│                                         │
└─────────────────────────────────────────┘
```

### 5.5 Sales Enablement

**Layout:**
```markdown
┌─────────────────────────────────────────┐
│ Sales Enablement                        │
├─────────────────────────────────────────┤
│                                         │
│  Essential Tools                        │
│                                         │
│  Pitch Decks                           │
│  Latest deck for executive meetings     │ <- Text-based links
│                                         │
│  Battle Cards                          │
│  Competitive positioning guides         │
│                                         │
│  ROI Calculator                        │
│  Interactive value demonstration        │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Top Objections                        │
│                                         │
│  "Too expensive" → 80% AWS funded      │
│  "Too fast" → Fixed scope delivery     │ <- Clean Q&A
│  "Too risky" → Success guarantee       │
│                                         │
└─────────────────────────────────────────┘
```

---

## 6. Global Navigation System

### 6.1 Top Navigation Bar (Landing Page)
```
Logo | Solutions | Industries | Resources | About | [Login] [Get Started]
```

### 6.2 Portal Navigation (Authenticated)

**Sidebar Navigation (Minimal)**
```
ModAx

Dashboard
Strategy
Operations  
Sales Tools
Knowledge

[User]
```

### 6.3 Global Search Implementation

**Search Bar Design:**
```
┌─────────────────────────────────────┐
│ 🔍 Search (Cmd+K)                   │
└─────────────────────────────────────┘
```

**Search Results Layout:**
```
┌─────────────────────────────────────┐
│ Search: "90 day"                    │
├─────────────────────────────────────┤
│ Pages                               │
│ • 90-Day Playbook                   │
│ • Execution Framework               │
│                                     │
│ Documents                           │
│ • 90-Day Success Checklist.pdf      │
│ • Client Commitment Guide           │
│                                     │
│ Training                            │
│ • Module: 90-Day Methodology        │
└─────────────────────────────────────┘
```

---

## 7. Component Specifications

### 7.1 CTA Buttons
**Primary CTA (Hero):**
- Background: Primary gradient
- Padding: 16px 32px
- Border-radius: 8px
- Font: 18px/24px, weight 600
- Hover: Scale(1.05) + shadow

**Secondary CTA:**
- Background: Transparent
- Border: 2px solid primary
- Same padding/typography

### 7.2 Cards
**Minimal Card:**
```
┌─────────────────────────┐
│                         │
│ Card Title              │
│                         │
│ Essential information   │
│ presented clearly       │
│                         │
└─────────────────────────┘
```
- Background: White
- Border: 1px solid gray-200
- Border-radius: 4px
- Padding: 32px
- No shadow unless hovered

### 7.3 Navigation States
- **Default**: Gray-700 text
- **Hover**: Primary color + background tint
- **Active**: Primary color + left border (4px)
- **Disabled**: Gray-500 + cursor disabled

### 7.4 Search Component
- **Trigger**: Cmd/Ctrl + K
- **Modal**: Centered, 600px wide
- **Results**: Grouped by type
- **Keyboard nav**: Arrow keys + Enter

---

## 8. Motion & Interaction

### 8.1 Page Transitions
- **Fade in**: 200ms ease-out (subtle)
- **No slide animations**: Direct transitions
- **No stagger**: All elements appear together

### 8.2 Hover Effects
- **Cards**: Subtle border color change
- **Buttons**: Slight background shift
- **Links**: Simple underline

### 8.3 Loading States
- **Minimal spinners**: Small, unobtrusive
- **No skeleton screens**: Use fade in
- **Progress bars**: Thin, top of page

### 8.4 Scroll Behavior
- **No parallax effects**
- **No reveal animations**
- **Fixed elements**: Navigation only
- **Smooth scroll**: Native behavior

---

## 9. Accessibility Standards

### 9.1 Color Contrast
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

### 9.2 Keyboard Navigation
- All interactive elements accessible
- Visible focus indicators
- Skip to main content link
- Logical tab order

### 9.3 Screen Reader Support
- Semantic HTML structure
- ARIA labels where needed
- Alt text for images
- Form labels and errors

### 9.4 Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable animations */
}
```

---

## 10. Developer Specifications

### 10.1 CSS Architecture
- **Methodology**: CSS Modules + Tailwind utilities
- **Naming**: BEM for components
- **Variables**: CSS custom properties

### 10.2 Component Structure
```jsx
// Example Card Component
<Card variant="elevated" size="medium">
  <CardIcon name="rocket" />
  <CardTitle>90-Day Delivery</CardTitle>
  <CardDescription>
    Transform POCs into production
  </CardDescription>
  <CardAction href="/playbook">
    Learn More →
  </CardAction>
</Card>
```

### 10.3 Breakpoint Variables
```css
--mobile: 640px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1440px;
```

### 10.4 Spacing Tokens
```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 0.75rem;  /* 12px */
--space-md: 1rem;     /* 16px */
--space-lg: 1.5rem;   /* 24px */
--space-xl: 2rem;     /* 32px */
--space-2xl: 3rem;    /* 48px */
--space-3xl: 4rem;    /* 64px */
```

---

## 11. Implementation Priorities

### Phase 1: Foundation
1. Landing hero page with CTA
2. Basic portal layout with navigation
3. Dashboard implementation
4. Global search functionality

### Phase 2: Core Features
1. Strategy Hub pages
2. 90-Day Playbook interactive
3. Sales enablement tools
4. Basic training modules

### Phase 3: Enhancement
1. Advanced animations
2. Interactive visualizations
3. Collaboration features
4. Analytics integration

---

## 12. Design Philosophy for Focus

### Narrative-Driven Design
1. **Three-Act Visual Structure**: Graveyard → Trojan Horse → Empire
2. **Progressive Disclosure**: Reveal complexity only when needed
3. **Story Over Features**: Lead with transformation narrative
4. **Journey Visualization**: Show progression, not just states

### Minimalist Principles
1. **Content First**: Let the message breathe with ample white space
2. **Reduce Cognitive Load**: One primary action per screen
3. **Typography as Design**: Use font weight and size for hierarchy, not colors
4. **Monochromatic Palette**: Black, white, and grays with minimal accent color
5. **No Decorative Elements**: Every pixel has a purpose

### What We Remove
- ❌ Icons (unless absolutely necessary)
- ❌ Animations and transitions (except subtle fades)
- ❌ Multiple CTAs competing for attention
- ❌ Colorful badges and tags
- ❌ Card shadows and heavy borders
- ❌ Background patterns or gradients

### What We Emphasize
- ✓ Clear information hierarchy
- ✓ Generous spacing between elements
- ✓ High contrast for readability
- ✓ Single focal point per view
- ✓ Consistent, predictable layouts
- ✓ Fast, distraction-free navigation
- ✓ Story progression through layout

---

This design system provides a sophisticated, minimal foundation for the ModAx internal portal that reinforces the "Experiments to Empire" narrative while helping sales and leadership teams focus on what matters most—the transformational journey that drives business forward.