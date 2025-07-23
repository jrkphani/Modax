# ModAx Tech Stack Summary
## Unified Modern Development Approach

---

## 🎯 Overview

Both the Internal Portal and External Website share a modern, consistent tech stack built on React 18, Vite, and Tailwind CSS 4. This ensures:
- Shared component libraries
- Consistent developer experience
- Unified design system
- Optimal performance

---

## 🛠️ Core Tech Stack

### Shared Foundation
```json
{
  "runtime": "React 18.x",
  "build": "Vite",
  "language": "TypeScript",
  "styling": "Tailwind CSS 4",
  "components": "shadcn/ui + reactbits",
  "state": "zustand",
  "routing": "react-router-dom",
  "testing": "Vitest + MSW",
  "linting": "ESLint (with import/no-cycle)"
}
```

### Internal Portal Additions
```json
{
  "charts": "@nivo/*",
  "auth": "Auth0/Okta integration",
  "analytics": "Custom tracking",
  "security": "Role-based access"
}
```

### External Website Additions
```json
{
  "seo": "react-helmet-async",
  "forms": "react-hook-form + zod",
  "animations": "framer-motion",
  "analytics": "@vercel/analytics"
}
```

---

## 📁 Repository Structure

### Monorepo Option
```
/modax-platform
├── /apps
│   ├── /internal    # Internal portal
│   └── /external    # Marketing website
├── /packages
│   ├── /ui          # Shared components
│   ├── /utils       # Shared utilities
│   └── /config      # Shared configs
└── package.json     # Workspace root
```

### Separate Repos Option (Recommended Initially)
```
/modax-internal      # Private repository
/modax-external      # Public repository
/modax-shared        # Shared component library (optional)
```

---

## 🎨 Design System Sharing

### Shared Design Tokens
```typescript
// @modax/design-tokens
export const colors = {
  primary: {
    DEFAULT: '#667eea',
    dark: '#5a67d8',
    light: '#7c8ff0'
  },
  secondary: {
    DEFAULT: '#764ba2'
  }
}

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem'
}
```

### Shared Components
```typescript
// @modax/ui
export { Button } from './button'
export { Card } from './card'
export { Input } from './input'
export { Select } from './select'
```

---

## 🚀 Development Workflow

### Initial Setup
```bash
# Clone repositories
git clone github.com/1cloudhub/modax-internal
git clone github.com/1cloudhub/modax-external

# Install dependencies
cd modax-internal && npm install
cd modax-external && npm install

# Start development (both use MSW for mocking)
npm run dev
```

### Shared Tooling
- **Prettier** with Tailwind plugin
- **ESLint** with consistent rules
- **Husky** for pre-commit hooks
- **Commitlint** for conventional commits

---

## 📊 Key Differentiators

### Internal Portal Focus
- Information density
- Interactive visualizations
- Real-time calculations
- Secure access
- Training modules

### External Website Focus
- Marketing copy
- SEO optimization
- Lead generation
- Performance (Core Web Vitals)
- Conversion tracking

---

## 🔄 CI/CD Pipeline

### Both Projects
```yaml
# GitHub Actions
- Lint and type check
- Run tests with Vitest
- Build for production
- Deploy to respective environments
```

### Internal Deployment
- AWS ECS with VPN
- Environment variables for API keys
- Role-based access control

### External Deployment
- Vercel/Netlify
- Edge functions for forms
- Global CDN distribution

---

## 📈 Performance Targets

### Shared Metrics
- Bundle size < 200KB (initial)
- Code coverage > 80%
- Lighthouse score > 90

### Internal Specific
- Load time < 2s
- Time to interactive < 3s
- 60fps animations

### External Specific
- FCP < 1.5s
- LCP < 2.5s
- CLS < 0.1

---

## 🔧 Development Tools

### VS Code Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "prisma.prisma",
    "ZixuanChen.vitest-explorer"
  ]
}
```

### Chrome Extensions
- React Developer Tools
- Redux DevTools (for zustand)
- Lighthouse
- WAVE (accessibility)

---

## 📚 Documentation Structure

```
/docs
├── /Internal
│   ├── Tech stack guide
│   ├── Component library
│   ├── API documentation
│   └── Deployment guide
│
├── /External
│   ├── Tech stack guide
│   ├── SEO guidelines
│   ├── Content management
│   └── Analytics setup
│
└── /Shared
    ├── Design system
    ├── Coding standards
    ├── Git workflow
    └── Testing strategy
```

---

## 🎯 Next Steps

1. **Week 1**: Set up repositories and base configuration
2. **Week 2**: Implement shared design system
3. **Week 3**: Build core features with MSW mocking
4. **Week 4**: Testing and optimization
5. **Week 5**: Deployment preparation
6. **Week 6**: Launch and monitoring

---

This unified tech stack ensures both projects benefit from modern tooling while maintaining their unique requirements and optimizations.