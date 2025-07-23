#!/bin/bash

echo "Fixing critical lint errors..."

# Fix parsing error in mock-data.ts - missing comma
echo "Fixing mock-data.ts parsing error..."
sed -i '' '7s/$/,/' src/lib/mock-data.ts

# Fix ErrorBoundary state check
echo "Fixing ErrorBoundary..."
sed -i '' 's/if (this.props.fallback !== undefined && this.props.fallback !== null)/if (this.props.fallback)/g' src/components/ErrorBoundary.tsx

# Fix breadcrumb strict boolean
echo "Fixing breadcrumb..."
sed -i '' 's/const Comp = (asChild)/const Comp = (asChild === true)/g' src/components/ui/breadcrumb.tsx

# Fix missing Card imports
echo "Adding missing Card imports..."
find src -name "*.tsx" -exec grep -l "Card>" {} \; | while read file; do
  if ! grep -q "import.*Card.*from.*card" "$file"; then
    sed -i '' '1s/^/import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@\/components\/ui\/card";\n/' "$file"
  fi
done

# Fix env.ts
echo "Fixing env.ts..."
cat > src/config/env.ts << 'EOF'
// Environment configuration

export const getEnvVar = (key: string, defaultValue: string): string => {
  const value = import.meta.env[key];
  if (value === undefined || value === null || value === '') {
    return defaultValue;
  }
  return String(value);
};

export const env = {
  API_BASE_URL: getEnvVar('VITE_API_BASE_URL', 'http://localhost:3000/api'),
  API_VERSION: getEnvVar('VITE_API_VERSION', 'v2'),
  AVATAR_API_URL: getEnvVar('VITE_AVATAR_API_URL', 'https://api.dicebear.com/7.x/avataaars/svg'),
  IS_PRODUCTION: import.meta.env.PROD === true,
  IS_DEVELOPMENT: import.meta.env.DEV === true,
} as const;
EOF

# Fix main.tsx non-null assertion
echo "Fixing main.tsx..."
sed -i '' 's/document.getElementById("root")!/document.getElementById("root") as HTMLElement/g' src/main.tsx

# Fix data table exports
echo "Fixing data table exports..."
cat >> src/components/examples/data-table-advanced-demo.tsx << 'EOF'

// Import constants from separate file
import { statuses, methods, categories } from './data-table-constants'
EOF

cat >> src/components/examples/data-table-demo.tsx << 'EOF'

// Import constants from separate file  
import { statuses } from './data-table-constants'
EOF

# Fix navigation menu style export
echo "Creating navigation menu variants..."
cat > src/components/ui/navigation-menu-variants.ts << 'EOF'
import { cn } from "@/lib/utils"

export const navigationMenuTriggerStyle = () =>
  cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  )
EOF

# Update navigation-menu.tsx to import from variants
sed -i '' 's/export const navigationMenuTriggerStyle/const navigationMenuTriggerStyle/g' src/components/ui/navigation-menu.tsx
sed -i '' '1s/^/import { navigationMenuTriggerStyle } from ".\/navigation-menu-variants"\n/' src/components/ui/navigation-menu.tsx

# Fix form useFormField export
echo "Creating form hooks file..."
cat > src/hooks/useFormField.ts << 'EOF'
import * as React from "react"
import { FormFieldContext, FormItemContext } from "@/components/ui/form"

export const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)

  if (!fieldContext) {
    throw new Error("useFormField must be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldContext,
  }
}
EOF

# Fix useAuth and useTheme hooks
echo "Creating auth and theme hooks..."
cat > src/hooks/useAuth.ts << 'EOF'
import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
EOF

cat > src/hooks/useTheme.ts << 'EOF'
import { useContext } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
EOF

# Update contexts to export only Provider
sed -i '' 's/export { useAuth }//' src/contexts/AuthContext.tsx
sed -i '' 's/export { useTheme }//' src/contexts/ThemeContext.tsx
sed -i '' '/^export const useAuth/,/^}/d' src/contexts/AuthContext.tsx
sed -i '' '/^export const useTheme/,/^}/d' src/contexts/ThemeContext.tsx

# Fix AppContext
echo "Fixing AppContext..."
sed -i '' '1s/^/import React, { createContext, useContext, useState, useEffect } from "react"\n/' src/contexts/AppContext.tsx
sed -i '' '/^import.*React.*from.*react/d' src/contexts/AppContext.tsx | head -1

# Fix sidebar useSidebar export
cat > src/hooks/useSidebar.ts << 'EOF'
import { useContext } from 'react'
import { SidebarContext } from '@/components/ui/sidebar'

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider')
  }
  return context
}
EOF

echo "Running final lint fix..."
npm run lint:fix

echo "Done!"