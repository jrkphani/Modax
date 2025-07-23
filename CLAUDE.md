# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ModAx is currently a **documentation-only repository** for an enterprise application modernization company. The project contains comprehensive business and technical documentation but **no code implementation yet**.

## Repository Structure

```
ModAx/
└── docs/
    ├── External/          # External website documentation
    ├── Internal/          # Internal portal and business docs
    │   ├── Technical/     # Technical specifications
    │   ├── Templates/     # Business templates
    │   └── README.md      # Main documentation hub
    └── Tech_Stack_Summary.md
```

## Key Documentation

- **Strategic Vision**: `docs/Internal/MASTER_STRATEGY.md`
- **Operations**: `docs/Internal/OPERATIONS_PLAYBOOK.md`
- **Sales Resources**: `docs/Internal/SALES_ENABLEMENT.md`
- **Documentation Hub**: `docs/Internal/README.md`

## Planned Technology Stack

When implementation begins, the project will use:

### Frontend
- React 18.x with TypeScript
- Vite for build tooling
- Tailwind CSS 4 for styling
- shadcn/ui and reactbits for components
- zustand for state management

### Testing
- Vitest for unit tests
- MSW for API mocking
- Playwright for E2E tests

## Important Context

1. **Business Focus**: ModAx transforms legacy enterprise applications into AI-native systems while building an "intelligence fabric" that captures operational knowledge.

2. **Target Market**: Mid-market enterprises ($100M-$1B revenue) in financial services, healthcare, manufacturing, and retail.

3. **Current Status**: Documentation phase complete. Implementation has not started.

4. **Two Main Products**:
   - Internal Portal: For team collaboration and project management
   - External Website: Marketing and lead generation

## Common Tasks

Since this is a documentation repository, common tasks include:
- Reviewing and updating strategic documents
- Creating new templates or documentation
- Organizing content according to the established structure
- Preparing technical specifications for implementation

## Development Commands

No development commands exist yet. When implementation begins, expect standard React/Vite commands:
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Lint code