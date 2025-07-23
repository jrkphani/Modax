# ModAx Internal Portal Documentation
## Technical Architecture, Features, and Development Guide

Last Updated: January 2025 | Version: 2.0 | Status: Active

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Feature Catalog](#2-feature-catalog)
3. [Component Library](#3-component-library)
4. [Development Guide](#4-development-guide)
5. [Deployment Process](#5-deployment-process)
6. [Maintenance & Updates](#6-maintenance--updates)

---

## 1. Architecture Overview

### Technology Stack

#### Frontend
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 7.0.5
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **State Management**: Zustand
- **Routing**: React Router v7
- **Animation**: Framer Motion
- **Charts**: Nivo

#### Backend (Planned)
- **API**: Node.js + Express / FastAPI
- **Database**: PostgreSQL + Redis
- **Authentication**: Auth0 / AWS Cognito
- **File Storage**: AWS S3
- **Message Queue**: AWS SQS / RabbitMQ

#### Infrastructure
- **Hosting**: AWS ECS / Vercel
- **CDN**: CloudFront
- **Monitoring**: CloudWatch + Sentry
- **CI/CD**: GitHub Actions
- **IaC**: AWS CDK (TypeScript)

### System Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Frontend (React)                   │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐      │
│  │   Pages    │ │ Components │ │  Contexts  │      │
│  └────────────┘ └────────────┘ └────────────┘      │
├─────────────────────────────────────────────────────┤
│                    API Gateway                       │
├─────────────────────────────────────────────────────┤
│                   Microservices                      │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐      │
│  │    Auth    │ │    Core    │ │ Analytics  │      │
│  └────────────┘ └────────────┘ └────────────┘      │
├─────────────────────────────────────────────────────┤
│                   Data Layer                         │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐      │
│  │ PostgreSQL │ │   Redis    │ │     S3     │      │
│  └────────────┘ └────────────┘ └────────────┘      │
└─────────────────────────────────────────────────────┘
```

### Project Structure

```
modax-internal/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components
│   │   ├── features/        # Feature components
│   │   └── ui/             # Base UI components
│   ├── pages/              # Page components
│   ├── contexts/           # React contexts
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilities
│   ├── config/             # Configuration
│   └── types/              # TypeScript types
├── public/                 # Static assets
├── docs/                   # Documentation
└── tests/                  # Test files
```

---

## 2. Feature Catalog

### Core Features

#### 1. Navigation System
- **Hierarchical Menu**: Multi-level navigation with icons
- **Search Integration**: Global search with Cmd+K
- **Responsive**: Mobile-optimized sidebar
- **Active States**: Visual indicators for current page

#### 2. Authentication & Authorization
- **SSO Integration**: Auth0/Okta ready
- **Role-Based Access**: Granular permissions
- **Session Management**: Secure token handling
- **MFA Support**: Two-factor authentication

#### 3. Dashboard & Analytics
- **Real-time Metrics**: Live data updates
- **Interactive Charts**: Drill-down capabilities
- **Custom Widgets**: Configurable layout
- **Export Functions**: PDF/Excel reports

#### 4. Training Center
- **Learning Paths**: Role-based curricula
- **Progress Tracking**: Visual progress indicators
- **Gamification**: Points, badges, leaderboards
- **Video Integration**: Embedded training videos
- **Assessments**: Quiz and certification system

#### 5. Client Management
- **Assessment Wizard**: Multi-step evaluation
- **Maturity Scoring**: Visual maturity models
- **Report Generation**: Automated PDF reports
- **CRM Integration**: Salesforce/HubSpot ready

#### 6. Content Management
- **Rich Text Editor**: WYSIWYG editing
- **Version Control**: Document history
- **Collaboration**: Comments and mentions
- **Search**: Full-text search capability

#### 7. Offline Capabilities
- **Service Worker**: Asset caching
- **Offline Detection**: Status indicators
- **Queue System**: Offline form submissions
- **Sync**: Automatic data synchronization

### Feature Implementation Status

| Feature | Status | Priority | Target Date |
|---------|--------|----------|-------------|
| Navigation | ✅ Complete | High | Done |
| Search | ✅ Complete | High | Done |
| Dashboard | ✅ Complete | High | Done |
| Training Center | ✅ Complete | High | Done |
| Client Assessment | ✅ Complete | High | Done |
| Authentication | 🚧 In Progress | High | Feb 2025 |
| Analytics API | 📋 Planned | Medium | Mar 2025 |
| Real-time Updates | 📋 Planned | Medium | Apr 2025 |
| Mobile App | 📋 Planned | Low | Q3 2025 |

---

## 3. Component Library

### Design System

#### Colors
```scss
// Primary Palette
--primary: #667eea;
--primary-foreground: #ffffff;

// Secondary Palette  
--secondary: #764ba2;
--secondary-foreground: #ffffff;

// Neutral Palette
--background: #ffffff;
--foreground: #1a202c;
--muted: #718096;
--muted-foreground: #4a5568;

// Semantic Colors
--success: #48bb78;
--warning: #ed8936;
--error: #f56565;
--info: #4299e1;
```

#### Typography
```scss
// Font Families
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;

// Font Sizes
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
```

### Core Components

#### Layout Components
```typescript
// Layout wrapper with sidebar
<Layout>
  <PageContent />
</Layout>

// Page header with breadcrumbs
<PageHeader 
  title="Page Title"
  breadcrumbs={[...]}
  actions={[...]}
/>

// Content container
<Container size="lg">
  <Content />
</Container>
```

#### UI Components
```typescript
// Buttons
<Button variant="primary" size="md" onClick={...}>
  Click Me
</Button>

// Cards
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>

// Forms
<Form onSubmit={...}>
  <FormField
    label="Email"
    name="email"
    type="email"
    required
  />
  <Button type="submit">Submit</Button>
</Form>
```

#### Data Display
```typescript
// Tables
<DataTable
  columns={columns}
  data={data}
  pagination
  sorting
  filtering
/>

// Charts
<BarChart
  data={data}
  xAxis="category"
  yAxis="value"
  height={300}
/>

// Metrics
<MetricCard
  title="Total Revenue"
  value="$1.2M"
  change="+12%"
  trend="up"
/>
```

### Component Guidelines

#### Accessibility
- All interactive elements have ARIA labels
- Keyboard navigation supported
- Focus indicators visible
- Color contrast WCAG AA compliant

#### Performance
- Components lazy loaded where appropriate
- Memoization for expensive renders
- Virtual scrolling for long lists
- Image optimization built-in

#### Responsive Design
- Mobile-first approach
- Breakpoint system:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- Touch-optimized interactions

---

## 4. Development Guide

### Setup Instructions

```bash
# Clone repository
git clone https://github.com/modax/internal-portal.git
cd internal-portal

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Development Standards

#### Code Style
- **TypeScript**: Strict mode, no `any` types
- **React**: Functional components with hooks
- **Naming**: PascalCase for components, camelCase for functions
- **Files**: One component per file
- **Exports**: Named exports preferred

#### Git Workflow
```bash
# Feature branch
git checkout -b feature/JIRA-123-description

# Commit with conventional commits
git commit -m "feat: add new dashboard widget"

# Push and create PR
git push -u origin feature/JIRA-123-description
```

#### Testing Requirements
- Unit tests for utilities
- Component tests for UI
- Integration tests for features
- E2E tests for critical paths
- Minimum 80% coverage

### Common Tasks

#### Adding a New Page
```typescript
// 1. Create page component
// src/pages/NewPage.tsx
export const NewPage: React.FC = () => {
  return (
    <PageLayout>
      <PageHeader title="New Page" />
      <PageContent>
        {/* Your content */}
      </PageContent>
    </PageLayout>
  );
};

// 2. Add route
// src/App.tsx
<Route path="/new-page" element={<NewPage />} />

// 3. Update navigation
// src/config/navigation.tsx
{
  name: 'New Page',
  href: '/new-page',
  icon: IconComponent
}
```

#### Adding a New Component
```typescript
// 1. Create component
// src/components/features/NewComponent.tsx
interface NewComponentProps {
  title: string;
  onAction?: () => void;
}

export const NewComponent: React.FC<NewComponentProps> = ({
  title,
  onAction
}) => {
  return (
    <div className="new-component">
      <h3>{title}</h3>
      <Button onClick={onAction}>Action</Button>
    </div>
  );
};

// 2. Add tests
// src/components/features/NewComponent.test.tsx
describe('NewComponent', () => {
  it('renders title', () => {
    render(<NewComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

// 3. Document usage
// Add to Component Library documentation
```

---

## 5. Deployment Process

### Build Process

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        run: npm run deploy
```

### Environment Configuration

#### Development
```env
VITE_API_URL=http://localhost:3000
VITE_AUTH_DOMAIN=dev-modax.auth0.com
VITE_ENVIRONMENT=development
```

#### Staging
```env
VITE_API_URL=https://api.staging.modax.com
VITE_AUTH_DOMAIN=staging-modax.auth0.com
VITE_ENVIRONMENT=staging
```

#### Production
```env
VITE_API_URL=https://api.modax.com
VITE_AUTH_DOMAIN=modax.auth0.com
VITE_ENVIRONMENT=production
```

### Deployment Checklist

- [ ] All tests passing
- [ ] Build successful
- [ ] Environment variables set
- [ ] Database migrations run
- [ ] SSL certificates valid
- [ ] CDN cache cleared
- [ ] Monitoring alerts configured
- [ ] Rollback plan ready

---

## 6. Maintenance & Updates

### Regular Maintenance

#### Daily
- Monitor error logs
- Check performance metrics
- Review security alerts

#### Weekly
- Update dependencies
- Review and merge PRs
- Performance optimization

#### Monthly
- Security audit
- Dependency audit
- Architecture review
- Documentation update

### Update Procedures

#### Minor Updates
```bash
# Update dependencies
npm update

# Run tests
npm test

# Deploy to staging
npm run deploy:staging

# Test in staging
# Deploy to production
npm run deploy:production
```

#### Major Updates
1. Create feature branch
2. Update dependencies
3. Fix breaking changes
4. Comprehensive testing
5. Staged rollout
6. Monitor metrics
7. Document changes

### Troubleshooting

#### Common Issues

**Build Failures**
```bash
# Clear cache
rm -rf node_modules/.vite
npm install
npm run build
```

**WebSocket Errors**
```typescript
// vite.config.ts
server: {
  host: '127.0.0.1',
  port: 5173,
  strictPort: true
}
```

**Performance Issues**
```bash
# Analyze bundle
npm run build -- --report

# Check for large dependencies
npm list --depth=0
```

### Support Resources

- **Documentation**: This document
- **Team Chat**: #modax-portal Slack
- **Issue Tracker**: GitHub Issues
- **Monitoring**: CloudWatch Dashboard
- **Logs**: CloudWatch Logs

---

## Appendices

### A. API Reference
- Endpoint documentation
- Authentication flow
- Error codes
- Rate limits

### B. Security Guidelines
- OWASP compliance
- Security headers
- Input validation
- XSS prevention

### C. Performance Guidelines
- Bundle size limits
- Loading time targets
- Optimization techniques
- Caching strategies

### D. Accessibility Standards
- WCAG 2.1 compliance
- Screen reader support
- Keyboard navigation
- Color contrast

---

*"Building great software is a journey, not a destination."* - ModAx Engineering Philosophy

---

## Update Log

| Date | Section | Changes | Updated By |
|------|---------|---------|------------|
| 2025-01-21 | All | Consolidated from 4 technical docs | System |
| 2025-01-21 | Architecture | Updated to latest stack | System |
| 2025-01-21 | Components | Added component library | System |