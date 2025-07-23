import * as React from "react"
import { Progress } from "./progress"
import { cn } from "@/lib/utils"

export interface ProgressEnhancedProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  label?: string
  showPercentage?: boolean
  variant?: 'default' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

// Re-export the basic Progress component
export { Progress } from "./progress"

export function ProgressEnhanced({
  value,
  max = 100,
  label,
  showPercentage = true,
  variant = 'default',
  size = 'md',
  className,
  ...props
}: ProgressEnhancedProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const variantClasses = {
    default: '[&>[data-slot=progress-indicator]]:bg-primary',
    success: '[&>[data-slot=progress-indicator]]:bg-green-600',
    warning: '[&>[data-slot=progress-indicator]]:bg-yellow-600',
    danger: '[&>[data-slot=progress-indicator]]:bg-red-600',
  }

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  }

  const backgroundClasses = {
    default: 'bg-primary/20',
    success: 'bg-green-600/20',
    warning: 'bg-yellow-600/20',
    danger: 'bg-red-600/20',
  }

  return (
    <div className={cn('w-full', className)} {...props}>
      {((label != null && label !== '') || showPercentage === true) && (
        <div className="flex justify-between items-center mb-1">
          {(label != null && label !== '') && <span className="text-sm font-medium">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <Progress
        value={percentage}
        className={cn(
          sizeClasses[size],
          variantClasses[variant],
          backgroundClasses[variant]
        )}
        aria-label={label}
      />
    </div>
  )
}