import { env } from '@/config/env';

// API Configuration
export const API_BASE_URL = env.API_BASE_URL;

// API Endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
  },
  
  // User endpoints
  USERS: {
    BASE: '/users',
    BY_ID: (id: string) => `/users/${id}`,
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
  },
  
  // Dashboard endpoints
  DASHBOARD: {
    METRICS: '/dashboard/metrics',
    ANALYTICS: '/dashboard/analytics',
    REPORTS: '/dashboard/reports',
  },
  
  // Client endpoints
  CLIENTS: {
    BASE: '/clients',
    BY_ID: (id: string) => `/clients/${id}`,
    PROJECTS: (id: string) => `/clients/${id}/projects`,
  },
  
  // Project endpoints
  PROJECTS: {
    BASE: '/projects',
    BY_ID: (id: string) => `/projects/${id}`,
    TASKS: (id: string) => `/projects/${id}/tasks`,
  },
  
  // Training endpoints
  TRAINING: {
    COURSES: '/training/courses',
    COURSE_BY_ID: (id: string) => `/training/courses/${id}`,
    ENROLLMENTS: '/training/enrollments',
  },
  
  // Notification endpoints
  NOTIFICATIONS: {
    BASE: '/notifications',
    MARK_READ: (id: string) => `/notifications/${id}/read`,
    MARK_ALL_READ: '/notifications/read-all',
  },
} as const;

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'modax_auth_token',
  REFRESH_TOKEN: 'modax_refresh_token',
  USER_DATA: 'modax_user_data',
  APP_SETTINGS: 'modax_app_settings',
  THEME: 'modax_theme',
  SIDEBAR_STATE: 'modax_sidebar_state',
} as const;

// Default Values
export const DEFAULT_VALUES = {
  PAGE_SIZE: 10,
  DEBOUNCE_DELAY: 300,
  CACHE_TIME: 5 * 60 * 1000, // 5 minutes
  STALE_TIME: 2 * 60 * 1000, // 2 minutes
  SIDEBAR_WIDTH: 280,
  SIDEBAR_COLLAPSED_WIDTH: 80,
  NOTIFICATION_DURATION: 5000, // 5 seconds
} as const;


// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  EMPLOYEE: 'employee',
} as const;

// Project Status
export const PROJECT_STATUS = {
  PLANNING: 'planning',
  IN_PROGRESS: 'in-progress',
  REVIEW: 'review',
  COMPLETED: 'completed',
} as const;

// Client Status
export const CLIENT_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
} as const;

// Training Levels
export const TRAINING_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
} as const;

// Notification Types
export const NOTIFICATION_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  DISPLAY_WITH_TIME: 'MMM dd, yyyy HH:mm',
  API: 'yyyy-MM-dd',
  API_WITH_TIME: "yyyy-MM-dd'T'HH:mm:ss",
} as const;

// Regex Patterns
export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+?[\d\s-()]+$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
} as const;