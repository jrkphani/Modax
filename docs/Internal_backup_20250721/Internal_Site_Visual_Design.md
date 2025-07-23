# ModAx Internal Design System with Modern Stack
## Updated for React 18, Tailwind CSS 4, shadcn/ui, and Nivo

---

## Design System Implementation

### 1. Component Architecture with shadcn/ui

The design system leverages **shadcn/ui** as the foundation, providing accessible, customizable components that work seamlessly with Tailwind CSS 4.

```typescript
// src/components/ui/card.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "border-border",
        interactive: "border-border hover:border-primary hover:shadow-md transition-all cursor-pointer",
        highlight: "border-primary bg-primary/5",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

export { Card, CardHeader, CardTitle, cardVariants }
```

### 2. Tailwind CSS 4 Configuration

```javascript
// tailwind.config.js
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [forms, typography, animate],
}
```

### 3. CSS Variables for Theming

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    
    --primary: 249 87% 75%;
    --primary-foreground: 210 40% 98%;
    
    --secondary: 272 51% 54%;
    --secondary-foreground: 210 40% 98%;
    
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 249 87% 75%;
    
    --radius: 0.5rem;
  }
  
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    
    --primary: 249 87% 75%;
    --primary-foreground: 222.2 47.4% 11.2%;
    
    --secondary: 272 51% 54%;
    --secondary-foreground: 210 40% 98%;
    
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 249 87% 75%;
  }
}
```

### 4. Nivo Chart Components

```typescript
// src/components/charts/theme.ts
export const chartTheme = {
  background: 'transparent',
  textColor: '#64748b',
  fontSize: 12,
  axis: {
    domain: {
      line: {
        stroke: '#e2e8f0',
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: '#e2e8f0',
        strokeWidth: 1,
      },
      text: {
        fill: '#64748b',
        fontSize: 11,
      },
    },
    legend: {
      text: {
        fill: '#1e293b',
        fontSize: 12,
        fontWeight: 600,
      },
    },
  },
  grid: {
    line: {
      stroke: '#f1f5f9',
      strokeWidth: 1,
    },
  },
  legends: {
    text: {
      fill: '#1e293b',
      fontSize: 12,
    },
  },
  labels: {
    text: {
      fill: '#1e293b',
      fontSize: 12,
      fontWeight: 500,
    },
  },
  tooltip: {
    container: {
      background: '#ffffff',
      color: '#1e293b',
      fontSize: 12,
      borderRadius: 4,
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    },
  },
}

// src/components/charts/MarketOpportunityChart.tsx
import { ResponsivePie } from '@nivo/pie'
import { chartTheme } from './theme'

export function MarketOpportunityChart({ data }) {
  return (
    <div className="h-[400px] w-full">
      <ResponsivePie
        data={data}
        theme={chartTheme}
        margin={{ top: 40, right: 120, bottom: 40, left: 120 }}
        innerRadius={0.5}
        padAngle={2}
        cornerRadius={4}
        activeOuterRadiusOffset={8}
        colors={['#667eea', '#764ba2', '#10b981', '#f59e0b']}
        borderWidth={2}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#64748b"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        defs={[
          {
            id: 'gradient',
            type: 'linearGradient',
            colors: [
              { offset: 0, color: '#667eea' },
              { offset: 100, color: '#764ba2' },
            ],
          },
        ]}
        fill={[
          { match: { id: 'process' }, id: 'gradient' },
        ]}
        motionConfig="gentle"
      />
    </div>
  )
}
```

### 5. Interactive Components with Framer Motion

```typescript
// src/components/interactive/JourneyCanvas.tsx
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 },
    },
  },
}

export function JourneyCanvas() {
  return (
    <Card className="relative h-[500px] overflow-hidden p-8">
      <svg
        viewBox="0 0 800 400"
        className="absolute inset-0 h-full w-full"
      >
        <motion.path
          d="M 100,200 Q 400,100 700,200"
          stroke="#667eea"
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
      
      <div className="relative z-10 flex h-full items-center justify-between">
        <JourneyNode
          title="Failed POC"
          status="complete"
          delay={0}
        />
        <JourneyNode
          title="Production System"
          status="current"
          delay={1}
        />
        <JourneyNode
          title="AI-Native Enterprise"
          status="future"
          delay={2}
        />
      </div>
    </Card>
  )
}

function JourneyNode({ title, status, delay }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div
        className={cn(
          "h-16 w-16 rounded-full border-4 flex items-center justify-center",
          {
            "border-primary bg-primary text-white": status === "complete",
            "border-primary bg-white": status === "current",
            "border-gray-300 bg-gray-100": status === "future",
          }
        )}
      >
        {status === "complete" && "✓"}
      </div>
      <span className="mt-2 text-sm font-medium">{title}</span>
    </motion.div>
  )
}
```

### 6. Responsive Utilities with CVA

```typescript
// src/lib/responsive.ts
import { cva } from "class-variance-authority"

export const container = cva("mx-auto px-4", {
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      full: "max-w-full",
    },
    padding: {
      none: "px-0",
      sm: "px-4 sm:px-6",
      md: "px-4 sm:px-6 lg:px-8",
      lg: "px-6 sm:px-8 lg:px-12",
    },
  },
  defaultVariants: {
    size: "lg",
    padding: "md",
  },
})

export const grid = cva("grid", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    },
    gap: {
      none: "gap-0",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
    },
  },
  defaultVariants: {
    cols: 3,
    gap: "md",
  },
})
```

### 7. Form Components with React Hook Form

```typescript
// src/components/forms/ScenarioSimulator.tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  industry: z.string().min(1, "Please select an industry"),
  companySize: z.string().min(1, "Please select company size"),
  challenge: z.string().min(1, "Please select primary challenge"),
  budget: z.number().min(100000).max(5000000),
  urgency: z.number().min(1).max(10),
})

export function ScenarioSimulator() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      budget: 500000,
      urgency: 5,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    const response = await fetch("/api/simulate", {
      method: "POST",
      body: JSON.stringify(values),
    })
    const data = await response.json()
    // Handle response
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industry</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="financial">Financial Services</SelectItem>
                  <SelectItem value="retail">Retail & E-commerce</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget Range: ${field.value.toLocaleString()}</FormLabel>
              <FormControl>
                <Slider
                  min={100000}
                  max={5000000}
                  step={50000}
                  value={[field.value]}
                  onValueChange={(value) => field.onChange(value[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full">
          Generate Recommendation
        </Button>
      </form>
    </Form>
  )
}
```

---

## Performance Considerations

### 1. Component Code Splitting
```typescript
// Lazy load heavy components
const StrategyCanvas = lazy(() => import('@/features/strategy/StrategyCanvas'))
const ROICalculator = lazy(() => import('@/features/tools/ROICalculator'))
const NivoCharts = lazy(() => import('@/components/charts'))
```

### 2. Tailwind CSS Optimization
```javascript
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    // Be specific to reduce CSS size
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
  ],
}
```

### 3. Image Optimization
```typescript
// Use modern image formats with lazy loading
<img
  src="/hero.webp"
  alt="Hero"
  loading="lazy"
  decoding="async"
  className="h-full w-full object-cover"
/>
```

---

This updated design system leverages the modern stack to create a performant, maintainable, and developer-friendly internal portal.