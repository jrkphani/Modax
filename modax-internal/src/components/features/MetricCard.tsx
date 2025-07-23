import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeLabel,
  icon,
  trend,
  className,
}) => {
  const getTrendIcon = () => {
    if (trend === 'up' || (change && change > 0)) {
      return <TrendingUp className="h-4 w-4 text-success" />;
    } else if (trend === 'down' || (change && change < 0)) {
      return <TrendingDown className="h-4 w-4 text-red-600" />;
    }
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  const getTrendColor = () => {
    if (trend === 'up' || (change && change > 0)) {
      return 'text-success';
    } else if (trend === 'down' || (change && change < 0)) {
      return 'text-red-600';
    }
    return 'text-gray-500';
  };

  return (
    <Card className={cn('hover:shadow-lg transition-shadow', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        {icon && <div className="text-gray-400">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        {(change !== undefined || changeLabel) && (
          <div className="flex items-center gap-1 mt-1">
            {getTrendIcon()}
            <span className={cn('text-sm', getTrendColor())}>
              {change !== undefined && `${change > 0 ? '+' : ''}${change}%`}
              {changeLabel && ` ${changeLabel}`}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};