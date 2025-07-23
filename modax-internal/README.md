# ModAx Internal Portal

A modern, feature-rich internal portal for ModAx built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Design System**: Complete design token system with ModAx branding
- 🔐 **Authentication Ready**: Pre-configured for Auth0/Okta integration
- 📊 **Dashboard**: Real-time metrics and analytics
- 🎓 **Training Center**: Learning management system with progress tracking
- 👥 **Client Management**: Assessment tools and maturity scoring
- 🌐 **API Mocking**: MSW for development without backend
- 🧪 **Testing**: Vitest + Testing Library setup
- 📱 **Responsive**: Mobile-first design approach

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4 + Design Tokens
- **State Management**: Zustand
- **Routing**: React Router v7
- **UI Components**: Custom component library
- **Testing**: Vitest, Testing Library
- **API Mocking**: MSW (Mock Service Worker)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Type check
npm run typecheck

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── layout/       # Layout components (Sidebar, Header)
│   ├── features/     # Feature-specific components
│   └── ui/          # Base UI components
├── pages/           # Page components
├── contexts/        # React contexts (App, Theme, Auth)
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
├── config/          # Configuration files
└── types/           # TypeScript type definitions
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm test` - Run tests
- `npm run test:ui` - Open Vitest UI
- `npm run test:coverage` - Generate coverage report
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run typecheck` - Check TypeScript types
- `npm run format` - Format code with Prettier

### Design Tokens

The project uses a comprehensive design token system located in `src/config/design-tokens.ts`. Key colors:

- Primary: `#667eea` (Purple)
- Secondary: `#764ba2`
- Font: Inter

### API Mocking

MSW is configured to intercept API calls during development. Mock handlers are in `src/lib/msw/handlers.ts`.

## Key Features Implementation

### Dashboard
- Metric cards with trend indicators
- Interactive charts (ready for Nivo integration)
- Real-time data updates
- Export functionality

### Training Center
- Course catalog with search
- Learning paths
- Progress tracking
- Gamification elements

### Client Management
- Client cards with status indicators
- Assessment tools
- Maturity scoring visualization
- Grid/List view toggle

## Contributing

1. Follow TypeScript strict mode
2. Use the established component patterns
3. Write tests for new features
4. Ensure all checks pass before committing

## License

Proprietary - ModAx Internal Use Only