# Create ModAx Component Command

Generate a new component for ModAx with all necessary files: $ARGUMENTS

## Component Creation Workflow

1. **Parse Component Request**
   - Extract component name and type
   - Determine target directory (ui/charts/features)
   - Check for naming conflicts

2. **Component Types**

   ### UI Component (shadcn/ui style)
   ```typescript
   // src/components/ui/[component-name].tsx
   import * as React from "react"
   import { cva, type VariantProps } from "class-variance-authority"
   import { cn } from "@/lib/cn"
   
   const componentVariants = cva(
     "base-classes",
     {
       variants: {
         variant: {
           default: "default-classes",
           secondary: "secondary-classes",
         },
         size: {
           default: "default-size",
           sm: "small-size",
           lg: "large-size",
         },
       },
       defaultVariants: {
         variant: "default",
         size: "default",
       },
     }
   )
   
   export interface ComponentProps
     extends React.HTMLAttributes<HTMLDivElement>,
       VariantProps<typeof componentVariants> {
     // Additional props
   }
   
   const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
     ({ className, variant, size, ...props }, ref) => {
       return (
         <div
           ref={ref}
           className={cn(componentVariants({ variant, size, className }))}
           {...props}
         />
       )
     }
   )
   Component.displayName = "Component"
   
   export { Component, componentVariants }
   ```

   ### Feature Component
   ```typescript
   // src/features/[feature]/components/[component-name].tsx
   import { useState } from 'react'
   import { useStore } from '@/stores/[feature]Store'
   import { Button } from '@/components/ui/button'
   
   interface ComponentProps {
     // Props definition
   }
   
   export function Component({ ...props }: ComponentProps) {
     const [state, setState] = useState()
     const store = useStore()
     
     return (
       <div className="space-y-4">
         {/* Component implementation */}
       </div>
     )
   }
   ```

   ### Chart Component (Nivo)
   ```typescript
   // src/components/charts/[chart-name].tsx
   import { ResponsiveBar } from '@nivo/bar'
   import { useTheme } from '@/hooks/useTheme'
   
   interface ChartProps {
     data: Array<{
       id: string
       value: number
     }>
     // Other props
   }
   
   export function Chart({ data, ...props }: ChartProps) {
     const theme = useTheme()
     
     return (
       <div className="h-[400px] w-full">
         <ResponsiveBar
           data={data}
           margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
           colors={{ scheme: 'purple_blue' }}
           theme={{
             // Nivo theme customization
           }}
           {...props}
         />
       </div>
     )
   }
   ```

3. **Generate Test File**
   ```typescript
   // src/components/[type]/[component-name].test.tsx
   import { render, screen } from '@testing-library/react'
   import userEvent from '@testing-library/user-event'
   import { Component } from './[component-name]'
   
   describe('Component', () => {
     it('renders correctly', () => {
       render(<Component />)
       // Test assertions
     })
     
     it('handles user interactions', async () => {
       const user = userEvent.setup()
       render(<Component />)
       // Interaction tests
     })
   })
   ```

4. **Generate Story File (if applicable)**
   ```typescript
   // src/components/[type]/[component-name].stories.tsx
   import type { Meta, StoryObj } from '@storybook/react'
   import { Component } from './[component-name]'
   
   const meta = {
     title: 'Components/[Type]/[Component]',
     component: Component,
     parameters: {
       layout: 'centered',
     },
     tags: ['autodocs'],
   } satisfies Meta<typeof Component>
   
   export default meta
   type Story = StoryObj<typeof meta>
   
   export const Default: Story = {
     args: {
       // Default props
     },
   }
   ```

5. **Update Barrel Exports**
   ```typescript
   // src/components/[type]/index.ts
   export * from './[component-name]'
   ```

6. **Generate Usage Documentation**
   ```markdown
   # [Component Name]
   
   ## Usage
   \`\`\`tsx
   import { Component } from '@/components/[type]/[component-name]'
   
   function Example() {
     return <Component variant="default" size="md" />
   }
   \`\`\`
   
   ## Props
   - variant: 'default' | 'secondary'
   - size: 'sm' | 'default' | 'lg'
   - className: Additional CSS classes
   
   ## Examples
   [Add examples here]
   ```

## Component Templates by ModAx Module

### ModAx:Intel Components
- Code viewer with syntax highlighting
- Entity relationship visualizer
- Data flow diagram component

### ModAx:SpecGen Components
- Business rule editor
- Requirement card
- Intent model visualizer

### ModAx:UXForge Components
- Responsive preview container
- Component variant switcher
- Accessibility audit display

### ModAx:Smartify Components
- Agent status monitor
- Learning progress indicator
- Semantic query builder

Usage: `/create-component [name] [type:ui|feature|chart] [module:intel|specgen|uxforge|smartify]`

Examples:
- `/create-component Button ui`
- `/create-component ROICalculator feature tools`
- `/create-component MarketShareChart chart strategy`
- `/create-component EntityMapper feature intel`