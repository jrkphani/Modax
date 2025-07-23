import React from 'react'
import { cn } from '@/lib/utils'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn('min-h-screen bg-background', className)}>
      {children}
    </div>
  )
}

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const containerSizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[90rem]',
  full: 'max-w-full'
}

export const PageContainer: React.FC<PageContainerProps> = ({ 
  children, 
  className,
  size = 'lg' 
}) => {
  return (
    <div className={cn(
      'mx-auto px-4 sm:px-6 lg:px-8',
      containerSizes[size],
      className
    )}>
      {children}
    </div>
  )
}

interface PageHeaderProps {
  title: string
  description?: string
  actions?: React.ReactNode
  className?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  actions,
  className 
}) => {
  return (
    <header className={cn('mb-8', className)}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-muted-foreground mt-2">{description}</p>
          )}
        </div>
        {actions && (
          <div className="flex items-center gap-2">
            {actions}
          </div>
        )}
      </div>
    </header>
  )
}

interface PageContentProps {
  children: React.ReactNode
  className?: string
}

export const PageContent: React.FC<PageContentProps> = ({ children, className }) => {
  return (
    <main className={cn('py-6', className)}>
      {children}
    </main>
  )
}

// Default export for backward compatibility
export default PageLayout