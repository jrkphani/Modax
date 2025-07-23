import { ChartConfig } from '@/components/ui/chart'
import { designTokens } from './design-tokens'

// Default chart colors using our design tokens
export const defaultChartColors = {
  primary: designTokens.colors.primary.DEFAULT,
  secondary: designTokens.colors.secondary.DEFAULT,
  accent: designTokens.colors.accent.DEFAULT,
  success: designTokens.colors.success.DEFAULT,
  warning: designTokens.colors.warning.DEFAULT,
  error: designTokens.colors.error.DEFAULT,
  info: designTokens.colors.info.DEFAULT,
}

// Sequential color palette for multi-series charts
export const chartColorPalette = [
  designTokens.colors.primary.DEFAULT,     // Purple
  designTokens.colors.secondary.DEFAULT,   // Emerald Green
  designTokens.colors.info.DEFAULT,        // Blue
  designTokens.colors.warning.DEFAULT,     // Amber
  designTokens.colors.accent.DEFAULT,      // Magenta (special emphasis)
  designTokens.colors.primary[700],        // Darker Purple
  designTokens.colors.secondary[700],      // Darker Emerald
  designTokens.colors.info[700],           // Darker Blue
]

// Standard chart configurations
export const chartConfigs = {
  // Revenue/Financial charts
  revenue: {
    label: 'Revenue',
    color: designTokens.colors.success.DEFAULT,
  } satisfies ChartConfig,
  
  // Performance/Metrics charts
  performance: {
    label: 'Performance',
    color: designTokens.colors.primary.DEFAULT,
  } satisfies ChartConfig,
  
  // Comparison charts (actual vs target)
  actual: {
    label: 'Actual',
    color: designTokens.colors.primary.DEFAULT,
  } satisfies ChartConfig,
  
  target: {
    label: 'Target',
    color: designTokens.colors.secondary.DEFAULT,
  } satisfies ChartConfig,
  
  // Status-based charts
  success: {
    label: 'Success',
    color: designTokens.colors.success.DEFAULT,
  } satisfies ChartConfig,
  
  warning: {
    label: 'Warning',
    color: designTokens.colors.warning.DEFAULT,
  } satisfies ChartConfig,
  
  error: {
    label: 'Error',
    color: designTokens.colors.error.DEFAULT,
  } satisfies ChartConfig,
}

// Helper function to generate chart config from data keys
export function generateChartConfig(dataKeys: string[]): ChartConfig {
  return dataKeys.reduce((config, key, index) => {
    config[key] = {
      label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
      color: chartColorPalette[index % chartColorPalette.length],
    }
    return config
  }, {} as ChartConfig)
}

// Metric-specific color mappings
export const metricColors = {
  revenue: designTokens.colors.success.DEFAULT,
  cost: designTokens.colors.error.DEFAULT,
  savings: designTokens.colors.success.DEFAULT,
  efficiency: designTokens.colors.primary.DEFAULT,
  adoption: designTokens.colors.secondary.DEFAULT,
  satisfaction: designTokens.colors.info.DEFAULT,
  risk: designTokens.colors.warning.DEFAULT,
  growth: designTokens.colors.success.DEFAULT,
  decline: designTokens.colors.error.DEFAULT,
}