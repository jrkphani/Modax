import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  label: string
  value: string | number
  icon: LucideIcon
  iconColor?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

const iconColors = {
  default: 'text-muted-foreground',
  primary: 'text-primary',
  success: 'text-green-500',
  warning: 'text-yellow-500',
  danger: 'text-red-500'
}

export const StatsCard: React.FC<StatsCardProps> = ({
  label,
  value,
  icon: Icon,
  iconColor = 'default',
  trend,
  className
}) => {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{label}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">{value}</p>
              {trend && (
                <span className={cn(
                  "text-sm font-medium",
                  trend.isPositive ? "text-success" : "text-red-600"
                )}>
                  {trend.isPositive ? '+' : ''}{trend.value}%
                </span>
              )}
            </div>
          </div>
          <Icon className={cn("h-8 w-8", iconColors[iconColor])} />
        </div>
      </CardContent>
    </Card>
  )
}