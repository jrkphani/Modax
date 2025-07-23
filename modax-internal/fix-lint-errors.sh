#!/bin/bash

# Fix common lint errors in the codebase

echo "Fixing lint errors..."

# Fix onClick handlers that return void expressions
echo "Fixing onClick handlers..."
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/onClick={() => \([^}]*\)}/onClick={() => { \1 }}/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/onOpenChange={() => \([^}]*\)}/onOpenChange={() => { \1 }}/g'

# Fix promise-returning functions in onClick
echo "Fixing async onClick handlers..."
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/onClick={async () => {/onClick={() => { void (async () => {/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/onClick={handleCopy}/onClick={() => { void handleCopy() }}/g'

# Fix unused imports for types
echo "Fixing type imports..."
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/import { ColumnDef }/import type { ColumnDef }/g'

# Add void operator to floating promises
echo "Fixing floating promises..."
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/navigate(/void navigate(/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/router.push(/void router.push(/g'

# Fix strict boolean expressions
echo "Fixing boolean expressions..."
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/if (path)/if (path !== undefined)/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/if (value)/if (value !== null && value !== undefined)/g'

echo "Running eslint fix..."
npm run lint:fix

echo "Done!"