import { useState, useEffect, useCallback } from 'react';
import type { DashboardMetrics } from '@/types';
import { mockApi } from '@/lib/mock-data';
import { DEFAULT_VALUES } from '@/lib/constants';

interface UseDashboardReturn {
  metrics: DashboardMetrics | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  lastFetchTime: Date | null;
}

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

// Simple in-memory cache
const cache = new Map<string, CacheEntry<unknown>>();

function setCache(key: string, data: unknown): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
}

function getCache(key: string, maxAge: number = DEFAULT_VALUES.CACHE_TIME): unknown | null {
  const entry = cache.get(key) as CacheEntry<unknown> | undefined;
  
  if (!entry) return null;
  
  const isExpired = Date.now() - entry.timestamp > maxAge;
  if (isExpired) {
    cache.delete(key);
    return null;
  }
  
  return entry.data;
}

export function useDashboard(): UseDashboardReturn {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [lastFetchTime, setLastFetchTime] = useState<Date | null>(null);

  const fetchDashboardMetrics = useCallback(async () => {
    const cacheKey = 'dashboard-metrics';
    
    try {
      setIsLoading(true);
      setError(null);

      // Check cache first
      const cachedData = getCache<DashboardMetrics>(cacheKey);
      if (cachedData) {
        setMetrics(cachedData);
        setIsLoading(false);
        return;
      }

      // Simulate API call
      const data = await mockApi.getDashboardMetrics();
      
      // Update cache
      setCache(cacheKey, data);
      
      // Update state
      setMetrics(data);
      setLastFetchTime(new Date());
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch dashboard metrics'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    void fetchDashboardMetrics();
  }, [fetchDashboardMetrics]);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      void fetchDashboardMetrics();
    }, DEFAULT_VALUES.CACHE_TIME);

    return () => { clearInterval(interval); };
  }, [fetchDashboardMetrics]);

  return {
    metrics,
    isLoading,
    error,
    refetch: fetchDashboardMetrics,
    lastFetchTime,
  };
}

// Additional hooks for specific dashboard data

interface UseRevenueMetricsReturn {
  revenue: DashboardMetrics['revenue'] | null;
  isLoading: boolean;
  error: Error | null;
}

export function useRevenueMetrics(): UseRevenueMetricsReturn {
  const { metrics, isLoading, error } = useDashboard();
  
  return {
    revenue: metrics?.revenue || null,
    isLoading,
    error,
  };
}

interface UseProjectStatusReturn {
  projectStatus: DashboardMetrics['projectStatus'] | null;
  totalProjects: number;
  isLoading: boolean;
  error: Error | null;
}

export function useProjectStatus(): UseProjectStatusReturn {
  const { metrics, isLoading, error } = useDashboard();
  
  const totalProjects = metrics 
    ? metrics.projectStatus.completed + metrics.projectStatus.inProgress + metrics.projectStatus.pending
    : 0;
  
  return {
    projectStatus: metrics?.projectStatus || null,
    totalProjects,
    isLoading,
    error,
  };
}

interface UseClientGrowthReturn {
  clientGrowth: DashboardMetrics['clientGrowth'] | null;
  growthRate: number;
  isLoading: boolean;
  error: Error | null;
}

export function useClientGrowth(): UseClientGrowthReturn {
  const { metrics, isLoading, error } = useDashboard();
  
  const growthRate = metrics?.clientGrowth 
    ? ((metrics.clientGrowth.data[metrics.clientGrowth.data.length - 1] - metrics.clientGrowth.data[0]) / 
       metrics.clientGrowth.data[0]) * 100
    : 0;
  
  return {
    clientGrowth: metrics?.clientGrowth || null,
    growthRate,
    isLoading,
    error,
  };
}

// Hook for dashboard summary cards
interface DashboardSummary {
  totalClients: number;
  activeProjects: number;
  completedTrainings: number;
  pendingTasks: number;
  revenueGrowth: number;
}

export function useDashboardSummary(): {
  summary: DashboardSummary | null;
  isLoading: boolean;
  error: Error | null;
} {
  const { metrics, isLoading, error } = useDashboard();
  
  const summary: DashboardSummary | null = metrics ? {
    totalClients: metrics.totalClients,
    activeProjects: metrics.activeProjects,
    completedTrainings: metrics.completedTrainings,
    pendingTasks: metrics.pendingTasks,
    revenueGrowth: metrics.revenue.growth,
  } : null;
  
  return {
    summary,
    isLoading,
    error,
  };
}