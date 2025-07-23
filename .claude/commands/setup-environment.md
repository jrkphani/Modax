# ModAx Initial Setup Command

Set up the ModAx development environment for: $ARGUMENTS

Steps:
1. **Runtime Validation**
   - Check Node.js >= 18.x: `node --version`
   - Verify npm installation: `npm --version`
   - Validate Git setup: `git --version`

2. **Repository Structure**
   ```bash
   # Option 1: Monorepo (Recommended for shared components)
   mkdir -p apps/internal apps/external packages/ui packages/utils packages/config
   
   # Option 2: Separate Repos (Current structure)
   # Already in /Users/jrkphani/Projects/ModAx
   ```

3. **Dependencies Installation**
   ```bash
   # Initialize package.json if not exists
   npm init -y
   
   # Core dependencies
   npm install react@^18 react-dom@^18 react-router-dom@^6 zustand
   
   # Development dependencies
   npm install -D vite @vitejs/plugin-react typescript @types/react @types/react-dom
   npm install -D tailwindcss@next postcss autoprefixer @tailwindcss/forms @tailwindcss/typography
   npm install -D eslint prettier prettier-plugin-tailwindcss
   npm install -D vitest @testing-library/react @testing-library/jest-dom msw
   npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
   npm install -D eslint-plugin-import eslint-import-resolver-typescript
   ```

4. **Configuration Files**
   - Create `vite.config.ts` with path aliases
   - Initialize `tailwind.config.js` with ModAx design tokens
   - Set up `tsconfig.json` with strict mode
   - Configure `.eslintrc.cjs` with import/no-cycle
   - Create `.prettierrc` with Tailwind plugin

5. **MSW Setup**
   ```bash
   # Initialize MSW
   npx msw init public/ --save
   
   # Create mock handlers structure
   mkdir -p src/mocks
   touch src/mocks/handlers.ts src/mocks/browser.ts
   ```

6. **Project Structure**
   ```bash
   # Create directory structure
   mkdir -p src/{app,features,components,hooks,lib,services,stores,styles,types,mocks}
   mkdir -p src/features/{dashboard,strategy,playbooks,tools,training}
   mkdir -p src/components/{ui,charts,shared}
   
   # Create essential files
   touch src/main.tsx src/App.tsx
   touch src/styles/globals.css
   touch src/lib/cn.ts
   ```

7. **Environment Setup**
   ```bash
   # Create environment files
   touch .env .env.local .env.production
   echo "VITE_API_URL=http://localhost:3000/api" >> .env.local
   echo "VITE_ENABLE_MSW=true" >> .env.local
   ```

8. **Git Configuration**
   ```bash
   # Initialize git if needed
   git init
   
   # Create .gitignore
   echo "node_modules/\ndist/\n.env.local\n.env.production\n*.log" > .gitignore
   
   # Set up conventional commits
   npm install -D @commitlint/cli @commitlint/config-conventional husky
   npx husky install
   ```

9. **VS Code Setup**
   ```bash
   # Create VS Code settings
   mkdir -p .vscode
   echo '{
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "tailwindCSS.experimental.classRegex": [
       ["cva\\\\(([^)]*)\\\\)", "[\\"\'`]([^\\"\'`]*)[\\"\'`]"],
       ["cx\\\\(([^)]*)\\\\)", "[\\"\'`]([^\\"\'`]*)[\\"\'`]"]
     ]
   }' > .vscode/settings.json
   ```

10. **Verification**
    ```bash
    # Start development server
    npm run dev
    
    # Run tests
    npm test
    
    # Check linting
    npm run lint
    ```

Usage: `/setup-environment [internal|external|shared]`

Next steps:
- Run `/create-component` to scaffold new components
- Use `/setup-module` to add new ModAx modules
- Execute `/quality-check` before commits