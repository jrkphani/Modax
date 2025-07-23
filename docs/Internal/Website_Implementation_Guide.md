# ModAx Website Implementation Guide
## Combining Design System & Copy for Development

---

## Quick Start for Developers

This guide combines the design system and copy to provide a complete implementation reference for building the ModAx internal site.

### Document Structure
1. **Website_Design_System.md** - Complete design specifications, layouts, and component guidelines
2. **Website_Copy.md** - All website copy organized by page with messaging principles
3. **Website_Implementation_Guide.md** - This document, providing practical implementation guidance

---

## Implementation Order

### Phase 1: Foundation (Week 1)
1. **Landing Page**
   - Implement hero with "From Experiments to Empire" messaging
   - Three-act story cards (Graveyard, Trojan Horse, Empire)
   - Single CTA to portal entry
   - Use Typography-only design (no images/animations)

2. **Authentication Flow**
   - Simple login portal
   - Redirect to Dashboard after auth

3. **Global Navigation**
   - Minimal sidebar (Dashboard, Strategy, Operations, Sales Tools, Knowledge)
   - Global search with Cmd+K shortcut
   - User profile dropdown

### Phase 2: Core Pages (Week 2)
1. **Dashboard**
   - Active opportunities metrics
   - Priority actions list
   - Quick access buttons

2. **Strategy Hub**
   - Market opportunities ($2.1B, $3.2B, $5.4B)
   - Journey map visualization
   - Link to Intelligence Fabric

3. **90-Day Playbook**
   - Three-phase approach
   - Prerequisites checklist
   - Download CTA

### Phase 3: Sales & Knowledge (Week 3)
1. **Sales Enablement**
   - Tools section with download links
   - Objections & responses
   - Success metrics display

2. **Case Studies**
   - Valuemax three-act story
   - Transformation timeline
   - Results metrics

3. **Knowledge Base**
   - Document links
   - Resource organization
   - Search integration

---

## Key Design Patterns

### Typography Hierarchy
```css
/* Landing Hero */
h1 { 
  font-size: 48px; 
  line-height: 56px; 
  font-weight: 700;
}

/* Page Titles */
h2 { 
  font-size: 36px; 
  line-height: 44px; 
  font-weight: 700;
}

/* Body Text */
body { 
  font-size: 16px; 
  line-height: 24px; 
  font-weight: 400;
}
```

### Color Usage
- **Primary Text**: #111827 (Gray 900)
- **Secondary Text**: #1f2937 (Gray 800)
- **Accent (CTAs only)**: #667eea (Primary Purple)
- **Backgrounds**: #ffffff (White), #f9fafb (Gray 50)
- **Borders**: #e5e7eb (Gray 200)

### Spacing System
- Use 8px base unit
- Component padding: 32px
- Section spacing: 48px-64px
- Maximum content width: 1440px

### Minimal Interactions
- Fade transitions: 200ms ease-out
- Hover states: Subtle border/background changes
- No animations or parallax effects
- Single focus point per view

---

## Copy Integration Tips

### Narrative Consistency
Every page should reinforce the three-act structure:
1. **Problem** (Graveyard/Failed experiments)
2. **Solution** (Trojan Horse/90-day entry)
3. **Vision** (Empire/Intelligence transformation)

### Power Phrases to Use
- "We don't do pilots"
- "From experiments to empire"
- "Production-first"
- "Stop experimenting. Start evolving"
- "Small wins, big transformations"

### CTAs
- Primary: One per page, high contrast
- Text: Action-oriented ("Enter Portal →", "Start Your Journey →")
- No multiple competing CTAs

---

## Component Examples

### Minimal Card Component
```jsx
<Card>
  <CardTitle>The Graveyard</CardTitle>
  <CardDescription>
    73% of GenAI POCs die<br/>
    We resurrect them
  </CardDescription>
</Card>
```

### Search Implementation
```jsx
// Global keyboard shortcut
useEffect(() => {
  const handleKeyPress = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      openSearch();
    }
  };
  document.addEventListener('keydown', handleKeyPress);
}, []);
```

### Navigation State
```css
.nav-item {
  color: #374151; /* Gray 700 */
}

.nav-item:hover {
  color: #667eea; /* Primary */
  background: rgba(102, 126, 234, 0.05);
}

.nav-item.active {
  color: #667eea;
  border-left: 4px solid #667eea;
}
```

---

## Quality Checklist

### Before Launch
- [ ] All copy matches Website_Copy.md exactly
- [ ] Design follows minimal principles (no decorative elements)
- [ ] Single CTA per page implemented
- [ ] Search functionality works with Cmd+K
- [ ] Mobile responsive (breakpoints: 768px, 1024px, 1440px)
- [ ] Accessibility: 4.5:1 contrast ratios
- [ ] Page load time < 2 seconds
- [ ] No animations except subtle fades

### Testing Priorities
1. Landing page hero impact
2. Dashboard clarity and focus
3. Search functionality
4. Mobile navigation
5. Copy consistency across pages

---

## Support Resources

- **Design Questions**: Refer to Website_Design_System.md sections 1-12
- **Copy Questions**: Refer to Website_Copy.md for exact wording
- **Implementation**: Use this guide for practical patterns

Remember: The goal is sophisticated simplicity that helps sales and leadership teams focus on the transformation narrative, not the technology.