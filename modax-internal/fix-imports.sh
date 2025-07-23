#!/bin/bash

# Fix type imports in hooks/useDashboard.ts
sed -i '' "s/import { DashboardMetrics } from '@\/types'/import type { DashboardMetrics } from '@\/types'/" src/hooks/useDashboard.ts

# Fix type imports in setupTests.tsx
sed -i '' "s/import { cleanup, render, RenderOptions } from '@testing-library\/react'/import { cleanup, render } from '@testing-library\/react'/" src/setupTests.tsx
sed -i '' "s/import { ReactNode } from 'react'/import type { ReactNode } from 'react'/" src/setupTests.tsx
sed -i '' "s/import type { ReactNode } from 'react'/import type { ReactNode, ReactElement } from 'react'/" src/setupTests.tsx
echo "import type { RenderOptions } from '@testing-library/react'" >> src/setupTests.tsx.tmp
cat src/setupTests.tsx >> src/setupTests.tsx.tmp
mv src/setupTests.tsx.tmp src/setupTests.tsx

# Fix casing issues
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/\.\.\/ui\/card/\.\.\/ui\/Card/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/\.\.\/ui\/button/\.\.\/ui\/Button/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/\.\.\/components\/ui\/card/\.\.\/components\/ui\/Card/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/\.\.\/components\/ui\/button/\.\.\/components\/ui\/Button/g'

echo "Import fixes applied!"