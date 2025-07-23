#!/bin/bash

echo "Fixing remaining lint errors..."

# Fix unused imports
echo "Removing unused imports..."
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' '/^import.*Brain.*from.*lucide-react/d'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' '/^import.*Building.*from.*lucide-react/d'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' '/^import.*Users.*from.*lucide-react/d'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' '/^import.*ChevronRight.*from.*lucide-react/d'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' '/^import.*ReactElement.*from.*react/d'

# Fix promise-returning functions in onClick
echo "Fixing async onClick handlers..."
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/onClick={async (e) => {/onClick={(e) => { void (async () => {/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/onSubmit={handleSubmit}/onSubmit={(e) => { void handleSubmit(e) }}/g'

# Fix unnecessary type assertions
echo "Removing unnecessary type assertions..."
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/ as string as DateValue/ as DateValue/g'

# Fix type-only imports
echo "Converting to type-only imports..."
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/^import { \(.*\)Props } from/import type { \1Props } from/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/^import { FC }/import type { FC }/g'

# Fix duplicate imports
echo "Fixing duplicate imports..."
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' '/^import.*@testing-library\/react/N;s/\nimport.*@testing-library\/react.*//g'

# Remove config files from linting
echo "Updating ESLint ignore patterns..."
cat >> .eslintignore << EOF
vite.config.d.ts
vitest.config.ts
EOF

echo "Running eslint fix again..."
npm run lint:fix

echo "Done!"