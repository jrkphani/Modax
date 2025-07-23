import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Badge variant utilities
export const getBadgeVariant = (status: string): 'default' | 'secondary' | 'destructive' | 'outline' => {
  switch (status.toLowerCase()) {
    case 'active':
    case 'completed':
    case 'success':
      return 'default'
    case 'pending':
    case 'in-progress':
    case 'warning':
      return 'secondary'
    case 'inactive':
    case 'failed':
    case 'error':
      return 'destructive'
    default:
      return 'outline'
  }
}

// Maturity score color utilities
export const getMaturityScoreColor = (score: number): string => {
  if (score >= 80) return 'text-success'
  if (score >= 60) return 'text-yellow-600'
  if (score >= 40) return 'text-orange-600'
  return 'text-red-600'
}

export const getMaturityScoreBgColor = (score: number): string => {
  if (score >= 80) return 'bg-success/10'
  if (score >= 60) return 'bg-yellow-100'
  if (score >= 40) return 'bg-orange-100'
  return 'bg-red-100'
}

// Level badge utilities
export const getLevelBadgeVariant = (level: string): 'default' | 'secondary' | 'outline' => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'outline'
    case 'intermediate':
      return 'secondary'
    case 'advanced':
      return 'default'
    default:
      return 'outline'
  }
}

// Icon color utilities based on semantic meaning
export const getIconColorClass = (type: 'success' | 'warning' | 'danger' | 'info' | 'default'): string => {
  switch (type) {
    case 'success':
      return 'text-green-500'
    case 'warning':
      return 'text-yellow-500'
    case 'danger':
      return 'text-red-500'
    case 'info':
      return 'text-blue-500'
    default:
      return 'text-muted-foreground'
  }
}