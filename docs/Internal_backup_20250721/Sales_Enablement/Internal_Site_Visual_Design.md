# ModAx Internal Site Design System
## Complete Visual Design Specifications & Developer Guidelines

---

## 1. Introduction

### 1.1 Design Ethos & Purpose
The ModAx Internal Strategy Portal is a **mission-critical tool** designed to empower our teams with instant access to strategy, tools, and insights. Unlike our external marketing site, this portal prioritizes **information density, interactive learning, and operational efficiency** over pure aesthetics.

**Core Design Principles:**
- **Clarity Over Beauty**: Information architecture trumps visual flair
- **Interactive Learning**: Every element teaches or enables action
- **Progressive Disclosure**: Complex information revealed as needed
- **Mobile-Ready**: Sales teams need access anywhere, anytime
- **Performance First**: Instant load times for field use

### 1.2 Target Users
- **Primary**: Sales representatives (60% of usage)
- **Secondary**: Leadership team, solution architects
- **Tertiary**: Partner teams, new hires in training

### 1.3 Site Architecture Overview
```
Dashboard (Personalized landing)
├── Strategy Center (Visual frameworks)
├── Sales Playbooks (Interactive guides)
├── Tools Suite (Calculators, simulators)
├── Training Hub (Progressive learning)
└── Resources (Templates, case studies)
```

---

## 2. Layout & Grid System

### 2.1 Responsive Breakpoints
```css
/* Mobile First Approach */
--breakpoint-mobile: 0px;      /* Base */
--breakpoint-tablet: 768px;    /* iPad portrait */
--breakpoint-desktop: 1024px;  /* Laptop */
--breakpoint-wide: 1440px;     /* Large monitors */
--breakpoint-ultra: 1920px;    /* 4K displays */
```

### 2.2 Grid System
```css
/* 12-column flexible grid with smart gutters */
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-lg);
}

/* Responsive columns */
@media (max-width: 768px) {
  .col-md-6 { grid-column: span 12; }
}
@media (min-width: 769px) {
  .col-md-6 { grid-column: span 6; }
  .col-md-4 { grid-column: span 4; }
  .col-md-8 { grid-column: span 8; }
}
```

### 2.3 Section Padding Standards
```css
--section-padding-mobile: 32px 16px;
--section-padding-tablet: 48px 24px;
--section-padding-desktop: 64px 32px;
--content-max-width: 1200px;
--readable-max-width: 720px; /* For text-heavy content */
```

### 2.4 Common Layout Patterns

**Dashboard Cards Grid**
```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Metric  │ │ Metric  │ │ Metric  │
└─────────┘ └─────────┘ └─────────┘
┌───────────────────────────────────┐
│     Interactive Canvas            │
└───────────────────────────────────┘
```

**Strategy Framework Layout**
```
┌─────────────┐ ┌─────────────────┐
│  Visual     │ │   Explanation   │
│  Diagram    │ │   & Details     │
│  (40%)      │ │   (60%)         │
└─────────────┘ └─────────────────┘
```

---

## 3. Color System

### 3.1 Brand Colors
```css
/* Primary Palette - Aligned with external brand */
--color-primary: #667eea;      /* ModAx Purple */
--color-primary-dark: #5a67d8;
--color-primary-light: #7c8ff0;

/* Secondary Palette */
--color-secondary: #764ba2;    /* Deep Purple */
--color-accent: #10b981;       /* Success Green */
--color-warning: #f59e0b;      /* Alert Orange */
--color-error: #ef4444;        /* Error Red */
```

### 3.2 Functional Colors
```css
/* UI States */
--color-interactive: #667eea;
--color-interactive-hover: #5a67d8;
--color-interactive-active: #4c51bf;
--color-disabled: #cbd5e1;

/* Backgrounds */
--bg-primary: #ffffff;
--bg-secondary: #f8fafc;
--bg-tertiary: #f1f5f9;
--bg-dark: #1e293b;
--bg-card: #ffffff;
--bg-card-hover: #f8fafc;
```

### 3.3 Text Colors
```css
--text-primary: #1e293b;
--text-secondary: #64748b;
--text-tertiary: #94a3b8;
--text-inverse: #ffffff;
--text-link: #667eea;
--text-link-hover: #5a67d8;
```

### 3.4 Semantic Colors
```css
/* Status Indicators */
--status-success: #10b981;
--status-warning: #f59e0b;
--status-error: #ef4444;
--status-info: #3b82f6;
--status-neutral: #64748b;

/* Priority Indicators */
--priority-critical: #ef4444;
--priority-high: #f59e0b;
--priority-medium: #10b981;
--priority-low: #64748b;
```

### 3.5 Dark Mode (Optional Future Enhancement)
```css
/* Dark mode tokens */
--dark-bg-primary: #0f172a;
--dark-bg-secondary: #1e293b;
--dark-text-primary: #f1f5f9;
--dark-text-secondary: #cbd5e1;
```

---

## 4. Typography

### 4.1 Font Stack
```css
/* Headings - Modern, authoritative */
--font-heading: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Body - Readable, professional */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Code/Data - Monospace for clarity */
--font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
```

### 4.2 Type Scale (Mobile → Desktop)
```css
/* Display - For hero sections */
--text-display: clamp(2.5rem, 5vw, 4rem);
--text-display-weight: 800;

/* Headings */
--text-h1: clamp(2rem, 4vw, 3rem);
--text-h2: clamp(1.5rem, 3vw, 2.25rem);
--text-h3: clamp(1.25rem, 2.5vw, 1.75rem);
--text-h4: clamp(1.125rem, 2vw, 1.5rem);
--text-h5: clamp(1rem, 1.5vw, 1.25rem);
--text-h6: 1rem;

/* Body */
--text-body-lg: 1.125rem;
--text-body: 1rem;
--text-body-sm: 0.875rem;
--text-caption: 0.75rem;

/* Line Heights */
--line-height-tight: 1.2;
--line-height-normal: 1.6;
--line-height-relaxed: 1.8;
```

### 4.3 Font Weights
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### 4.4 Typography Components
```css
/* Section Headers */
.section-header {
  font-size: var(--text-h2);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

/* Card Titles */
.card-title {
  font-size: var(--text-h4);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}

/* Data Labels */
.data-label {
  font-size: var(--text-caption);
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## 5. Spacing System

### 5.1 Base Unit
```css
--space-unit: 8px; /* Base 8px grid */
```

### 5.2 Spacing Scale
```css
--space-xs: 4px;    /* 0.5x */
--space-sm: 8px;    /* 1x */
--space-md: 16px;   /* 2x */
--space-lg: 24px;   /* 3x */
--space-xl: 32px;   /* 4x */
--space-2xl: 48px;  /* 6x */
--space-3xl: 64px;  /* 8x */
--space-4xl: 96px;  /* 12x */
```

### 5.3 Component Spacing Guidelines
```css
/* Card Internal Spacing */
.card {
  padding: var(--space-lg);
}

/* Section Spacing */
.section + .section {
  margin-top: var(--space-3xl);
}

/* Form Elements */
.form-group + .form-group {
  margin-top: var(--space-lg);
}
```

---

## 6. Components Library

### 6.1 Interactive Cards
```jsx
/* Strategy Card Component */
<Card 
  variant="interactive"
  onClick={handleExpand}
  className="hover-lift"
>
  <CardIcon>{icon}</CardIcon>
  <CardTitle>{title}</CardTitle>
  <CardMetric>{metric}</CardMetric>
  <CardAction>Explore →</CardAction>
</Card>

/* CSS */
.card {
  background: var(--bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: var(--space-lg);
  transition: all 0.3s ease;
  cursor: pointer;
}

.card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
  transform: translateY(-4px);
}
```

### 6.2 Navigation Components
```jsx
/* Sidebar Navigation */
<Sidebar>
  <SidebarSection>
    <SidebarTitle>Strategy</SidebarTitle>
    <SidebarLink active>Overview</SidebarLink>
    <SidebarLink>Playbooks</SidebarLink>
  </SidebarSection>
</Sidebar>

/* Top Navigation */
<TopNav>
  <NavBrand>ModAx Internal</NavBrand>
  <NavSearch />
  <NavUser />
</TopNav>
```

### 6.3 Data Visualization Components
```jsx
/* Journey Visualization */
<JourneyCanvas>
  <JourneyNode status="complete" />
  <JourneyPath animated />
  <JourneyNode status="current" />
  <JourneyPath />
  <JourneyNode status="future" />
</JourneyCanvas>

/* Metric Cards */
<MetricCard>
  <MetricValue>$10.7B</MetricValue>
  <MetricLabel>Total Market</MetricLabel>
  <MetricTrend direction="up">+23%</MetricTrend>
</MetricCard>
```

### 6.4 Interactive Tools
```jsx
/* Scenario Simulator */
<SimulatorForm>
  <Select label="Industry" options={industries} />
  <Select label="Company Size" options={sizes} />
  <Slider label="Budget" min={100000} max={5000000} />
  <Button variant="primary" size="large">
    Generate Recommendation
  </Button>
</SimulatorForm>

/* ROI Calculator */
<Calculator>
  <CalculatorInputs />
  <CalculatorResults />
  <CalculatorChart />
</Calculator>
```

### 6.5 Content Components
```jsx
/* Expandable Sections */
<Accordion>
  <AccordionItem title="Failed POC Recovery">
    <ProcessDiagram />
    <ContentBlock />
  </AccordionItem>
</Accordion>

/* Tab Navigation */
<Tabs>
  <Tab label="Strategy">Content</Tab>
  <Tab label="Tactics">Content</Tab>
  <Tab label="Examples">Content</Tab>
</Tabs>
```

---

## 7. Interactive Elements & Animations

### 7.1 Micro-interactions
```css
/* Hover States */
.interactive-element {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.interactive-element:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Click Feedback */
.button:active {
  transform: scale(0.98);
}
```

### 7.2 Loading States
```jsx
/* Skeleton Screens */
<CardSkeleton>
  <SkeletonLine width="60%" />
  <SkeletonLine width="100%" />
  <SkeletonLine width="80%" />
</CardSkeleton>

/* Progress Indicators */
<ProgressBar value={progress} max={100} />
<Spinner size="small" />
```

### 7.3 Scroll Animations
```css
/* Fade In on Scroll */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 7.4 Interactive Canvas Animations
```javascript
/* D3.js Journey Animation */
const animateJourney = () => {
  d3.select('.journey-path')
    .transition()
    .duration(2000)
    .ease(d3.easeCubicInOut)
    .attrTween('stroke-dasharray', function() {
      const length = this.getTotalLength();
      return d3.interpolate('0,' + length, length + ',' + length);
    });
};
```

---

## 8. Accessibility Standards

### 8.1 Color Contrast
- All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Interactive elements have distinct focus states
- Error states use patterns + color (not color alone)

### 8.2 Keyboard Navigation
```css
/* Focus Styles */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Skip Links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: var(--space-sm);
  text-decoration: none;
}

.skip-link:focus {
  top: 0;
}
```

### 8.3 Screen Reader Support
```jsx
/* Semantic HTML */
<main role="main" aria-label="Strategy Dashboard">
  <section aria-labelledby="metrics-heading">
    <h2 id="metrics-heading">Key Metrics</h2>
  </section>
</main>

/* Live Regions */
<div aria-live="polite" aria-atomic="true">
  {calculatorResults}
</div>
```

### 8.4 Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Developer Implementation Guide

### 9.1 CSS Architecture
```scss
/* BEM Naming Convention */
.card { /* Block */
  &__header { /* Element */
    &--highlighted { /* Modifier */
    }
  }
}

/* Utility Classes */
.u-text-center { text-align: center; }
.u-mt-lg { margin-top: var(--space-lg); }
.u-hidden-mobile { 
  @media (max-width: 768px) { display: none; }
}
```

### 9.2 Component Structure
```jsx
/* React Component Template */
interface CardProps {
  title: string;
  metric?: string;
  variant?: 'default' | 'interactive' | 'highlight';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  metric, 
  variant = 'default',
  onClick 
}) => {
  return (
    <div 
      className={`card card--${variant}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <h3 className="card__title">{title}</h3>
      {metric && <div className="card__metric">{metric}</div>}
    </div>
  );
};
```

### 9.3 Design Tokens
```javascript
// tokens.js
export const tokens = {
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
    // ... all color tokens
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    // ... all spacing tokens
  },
  typography: {
    fontFamily: {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif',
      mono: 'JetBrains Mono, monospace'
    },
    // ... all typography tokens
  }
};
```

### 9.4 Responsive Utilities
```jsx
/* Responsive Hook */
const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('desktop');
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setBreakpoint('mobile');
      else if (window.innerWidth < 1024) setBreakpoint('tablet');
      else setBreakpoint('desktop');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return breakpoint;
};
```

---

## 10. Performance Guidelines

### 10.1 Asset Optimization
- Use WebP for images with PNG fallback
- Implement lazy loading for below-fold content
- SVG icons instead of icon fonts
- Code split by route

### 10.2 CSS Performance
```css
/* Critical CSS inline */
/* Non-critical CSS async load */
/* Minimize CSS-in-JS runtime */
```

### 10.3 Animation Performance
- Use CSS transforms over position changes
- Leverage GPU acceleration with `will-change`
- Debounce scroll handlers
- Use Intersection Observer for scroll animations

---

## 11. Quality Checklist

### Pre-Launch
- [ ] All components documented in Storybook
- [ ] Accessibility audit passed
- [ ] Performance metrics met (<2s load time)
- [ ] Cross-browser testing complete
- [ ] Mobile experience validated
- [ ] Dark mode ready (future)

### Post-Launch
- [ ] Analytics tracking verified
- [ ] User feedback incorporated
- [ ] Performance monitoring active
- [ ] A/B tests configured
- [ ] Documentation updated

---

This design system ensures the ModAx Internal Portal delivers a premium, efficient experience that empowers our teams to sell, learn, and succeed. Every design decision supports our core mission: making complex strategy simple and actionable.