# ModAx External Website Technical Implementation
## Modern Marketing Site with React, Vite, and Performance Focus

---

## Tech Stack Overview

### Core Framework & Build Tools
- **React 18.x** - Component-based UI with SSG capabilities
- **Vite** - Fast build tool with excellent DX
- **TypeScript** - Type safety across the codebase

### Styling & UI
- **Tailwind CSS 4** - Latest utility-first CSS
- **tailwind-merge** - Smart class merging
- **class-variance-authority (cva)** - Component variants
- **shadcn/ui** - Marketing-ready components
- **reactbits** - Additional UI primitives

### Content & SEO
- **@vitejs/plugin-react-pages** - File-based routing
- **react-helmet-async** - SEO meta tags
- **sitemap** - Dynamic sitemap generation

### Performance & Analytics
- **@vercel/analytics** - Web analytics
- **web-vitals** - Performance monitoring

### Forms & Conversion
- **react-hook-form** - Form handling
- **zod** - Schema validation

### Development
- **MSW** - Mock API for development
- **Vitest** - Testing framework
- **Playwright** - E2E testing

---

## Project Structure

```
/ModAx-External
├── /src
│   ├── /pages               # File-based routes
│   │   ├── index.tsx        # Homepage
│   │   ├── solutions/       # Solution pages
│   │   ├── industries/      # Industry pages
│   │   ├── resources/       # Resources/blog
│   │   └── [...]            # Dynamic routes
│   ├── /components
│   │   ├── /ui              # shadcn/ui components
│   │   ├── /marketing       # Marketing components
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTA.tsx
│   │   ├── /forms           # Form components
│   │   └── /layout          # Layout components
│   ├── /hooks               # Custom hooks
│   ├── /lib
│   │   ├── /utils           # Utilities
│   │   ├── /seo             # SEO utilities
│   │   └── /analytics       # Analytics helpers
│   ├── /content             # MDX content
│   │   ├── /case-studies
│   │   ├── /blog
│   │   └── /resources
│   ├── /styles
│   │   └── globals.css      # Global styles
│   ├── /public
│   │   ├── /images
│   │   ├── /fonts
│   │   └── robots.txt
│   └── /mocks               # MSW handlers
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Implementation Guide

### 1. Initial Setup

```bash
# Create Vite project
npm create vite@latest modax-external -- --template react-ts

# Core dependencies
npm install react-router-dom
npm install react-helmet-async
npm install react-hook-form zod

# UI & Styling
npm install tailwindcss@next @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
npm install tailwind-merge class-variance-authority
npm install @radix-ui/react-* # For shadcn/ui
npm install reactbits framer-motion

# Performance & Analytics
npm install @vercel/analytics web-vitals
npm install @sentry/react # Error tracking

# Development
npm install -D msw vitest @testing-library/react playwright
npm install -D @vitejs/plugin-react-pages
npm install -D vite-plugin-pwa # PWA support
```

### 2. Vite Configuration for Marketing Site

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from '@vitejs/plugin-react-pages'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    pages({
      pagesDir: 'src/pages',
      extensions: ['tsx', 'mdx'],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'sitemap.xml'],
      manifest: {
        name: 'ModAx - AI-Native Transformation',
        short_name: 'ModAx',
        theme_color: '#667eea',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimize for production
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', '@radix-ui/react-dialog'],
        },
      },
    },
  },
})
```

### 3. Marketing-Optimized Tailwind Config

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#667eea', // Brand primary
          700: '#5a67d8',
          800: '#4c51bf',
          900: '#3c366b',
        },
        secondary: {
          DEFAULT: '#764ba2',
          dark: '#5f3a84',
          light: '#9b6fc7',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter var', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

### 4. Marketing Components

```typescript
// src/components/marketing/Hero.tsx
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="font-display text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Your GenAI Experiments Failed.
            <span className="text-primary-600"> We'll Fix That.</span>
          </h1>
          
          <p className="mt-6 text-xl leading-8 text-gray-600 sm:text-2xl">
            Transform failed POCs into production systems in 90 days. 
            Then evolve to enterprise intelligence.
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="group">
              Get 80% AWS Funding
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-4 w-4" />
              Watch Valuemax Story
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600">73%</div>
              <div className="mt-2 text-sm text-gray-600">POCs Never Reach Production</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">$10.7B</div>
              <div className="mt-2 text-sm text-gray-600">Market Opportunity</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">90 Days</div>
              <div className="mt-2 text-sm text-gray-600">To Production</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(226, 232, 240)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  )
}
```

### 5. SEO Component

```typescript
// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  article?: boolean
}

export function SEO({ 
  title = 'ModAx - Transform Failed GenAI POCs to Production', 
  description = 'Transform failed POCs into production systems in 90 days with 80% AWS funding. From experiments to enterprise intelligence.',
  image = '/og-image.png',
  article = false 
}: SEOProps) {
  const siteUrl = 'https://modax.ai'
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  )
}
```

### 6. Lead Capture Form

```typescript
// src/components/forms/LeadCaptureForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  company: z.string().min(2, 'Company is required'),
  failedPOCs: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export function LeadCaptureForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        toast.success('Thanks! We\'ll be in touch within 24 hours.')
        // Track conversion
        if (window.gtag) {
          window.gtag('event', 'generate_lead', {
            value: 1,
            currency: 'USD',
          })
        }
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register('name')}
          placeholder="Your Name"
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <Input
          {...register('email')}
          type="email"
          placeholder="Work Email"
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <Input
          {...register('company')}
          placeholder="Company"
          className={errors.company ? 'border-red-500' : ''}
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
        )}
      </div>
      
      <div>
        <Input
          {...register('failedPOCs')}
          placeholder="How many failed GenAI POCs? (Optional)"
        />
      </div>
      
      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Get Your Free Assessment'}
      </Button>
    </form>
  )
}
```

### 7. Performance Monitoring

```typescript
// src/lib/analytics.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

export function initWebVitals() {
  getCLS(sendToAnalytics)
  getFID(sendToAnalytics)
  getFCP(sendToAnalytics)
  getLCP(sendToAnalytics)
  getTTFB(sendToAnalytics)
}

function sendToAnalytics(metric: any) {
  // Send to your analytics endpoint
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    id: metric.id,
    label: metric.label,
  })

  // Use sendBeacon for reliability
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics', body)
  }
}

// Initialize in main.tsx
import { initWebVitals } from '@/lib/analytics'

if (import.meta.env.PROD) {
  initWebVitals()
}
```

### 8. Static Site Generation

```typescript
// vite.config.ts addition for SSG
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  // ... other config
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Add other pages for pre-rendering
        solutions: resolve(__dirname, 'solutions.html'),
        pricing: resolve(__dirname, 'pricing.html'),
      },
    },
  },
  plugins: [
    // ... other plugins
    viteStaticCopy({
      targets: [
        {
          src: 'src/content/case-studies/*.mdx',
          dest: 'case-studies',
        },
      ],
    }),
  ],
})
```

---

## Performance Optimizations

### 1. Image Optimization
```typescript
// Use next-gen formats with fallbacks
<picture>
  <source srcSet="/hero.webp" type="image/webp" />
  <source srcSet="/hero.jpg" type="image/jpeg" />
  <img 
    src="/hero.jpg" 
    alt="Hero" 
    loading="lazy"
    decoding="async"
  />
</picture>
```

### 2. Critical CSS
```html
<!-- In index.html -->
<style>
  /* Inline critical CSS for above-the-fold content */
  .hero { /* ... */ }
</style>
```

### 3. Font Loading
```css
/* Preload critical fonts */
@font-face {
  font-family: 'Inter var';
  src: url('/fonts/Inter.var.woff2') format('woff2');
  font-display: swap;
}
```

---

## SEO Checklist

- [ ] Sitemap generation
- [ ] Robots.txt configuration
- [ ] Schema.org markup
- [ ] Open Graph tags
- [ ] Twitter cards
- [ ] Canonical URLs
- [ ] Meta descriptions
- [ ] Alt text for images
- [ ] Proper heading hierarchy
- [ ] Fast loading times (<3s)

---

## Deployment

### Build for Production
```bash
npm run build
# Generates static files in dist/
```

### Preview Production Build
```bash
npm run preview
```

### Deployment Options
1. **Vercel** (Recommended)
   - Automatic deployments
   - Edge functions
   - Analytics included

2. **Netlify**
   - Form handling
   - Split testing
   - Edge handlers

3. **AWS CloudFront + S3**
   - Maximum control
   - Global CDN
   - Cost effective

---

This modern stack ensures the marketing website is fast, SEO-friendly, and optimized for conversions while maintaining excellent developer experience.