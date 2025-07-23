# Quality Check Command

Run comprehensive quality validation for ModAx codebase:

1. **Code Quality**
   ```bash
   # Linting with ESLint
   npm run lint
   
   # Check for circular dependencies
   npm run lint:circular
   
   # Format check with Prettier
   npm run format:check
   
   # Type checking
   npm run type-check
   ```

2. **Testing**
   ```bash
   # Run all tests
   npm test
   
   # Run tests with coverage
   npm run test:coverage
   
   # Run tests in watch mode
   npm run test:watch
   
   # Integration tests with MSW
   npm run test:integration
   ```

3. **Security Audit**
   ```bash
   # Check for vulnerabilities
   npm audit
   
   # Fix automatically where possible
   npm audit fix
   
   # Check for secrets in code
   npx secretlint "**/*"
   
   # License compliance check
   npx license-checker --onlyAllow "MIT;Apache-2.0;BSD-3-Clause;ISC"
   ```

4. **Bundle Analysis**
   ```bash
   # Analyze bundle size
   npm run build -- --analyze
   
   # Check for unused dependencies
   npx depcheck
   
   # Tree-shake analysis
   npm run analyze:treeshake
   ```

5. **Performance Audit**
   ```bash
   # Build for production
   npm run build
   
   # Check bundle sizes
   ls -lh dist/assets/*.js
   
   # Lighthouse CI (if configured)
   npm run lighthouse
   ```

6. **Tailwind CSS Optimization**
   ```bash
   # Check for unused styles
   npm run build
   grep -r "unused" dist/
   
   # Verify PurgeCSS is working
   # Check that dist CSS is < 50KB
   ```

7. **Component Quality**
   - Verify all components have TypeScript interfaces
   - Check for proper prop validation
   - Ensure accessibility attributes
   - Validate CVA variant definitions

8. **ModAx Module Checks**
   - Verify semantic extraction in ModAx:Intel
   - Check business rule capture in ModAx:SpecGen
   - Validate UI metadata in ModAx:UXForge
   - Test agent interfaces in ModAx:Smartify

9. **Documentation Checks**
   - Ensure all public APIs are documented
   - Verify README is up to date
   - Check for outdated examples
   - Validate command documentation

10. **Pre-commit Validation**
    ```bash
    # Run all checks that would fail CI
    npm run pre-commit
    ```

## Error Resolution Guide

### Common Issues and Fixes:

**ESLint Errors**
- Circular dependencies: Refactor to use dependency injection
- Import order: Run `npm run lint:fix`
- Unused variables: Remove or prefix with underscore

**TypeScript Errors**
- Missing types: Add to types/ directory or install @types package
- Strict mode issues: Fix nullability or use non-null assertion carefully

**Test Failures**
- MSW handler issues: Check mock data matches expected shape
- Async issues: Use waitFor or findBy queries
- State pollution: Reset stores in beforeEach

**Build Issues**
- Vite errors: Clear .vite cache
- Tailwind issues: Check content paths in config
- Path alias errors: Verify tsconfig.json and vite.config.ts match

## Quality Gates

All checks must pass before:
- Committing to main branch
- Creating pull requests
- Deploying to any environment
- Releasing new versions

Report any issues found with severity levels:
- 🔴 **Critical**: Blocks deployment
- 🟡 **Warning**: Should be fixed soon
- 🟢 **Info**: Nice to have improvements

Usage: `/quality-check [--fix] [--verbose]`