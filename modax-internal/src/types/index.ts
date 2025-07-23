// User related types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'manager' | 'employee';
  department: string;
  avatar?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Dashboard metrics types
export interface DashboardMetrics {
  totalClients: number;
  activeProjects: number;
  completedTrainings: number;
  pendingTasks: number;
  revenue: {
    current: number;
    previous: number;
    growth: number;
  };
  clientGrowth: {
    labels: string[];
    data: number[];
  };
  projectStatus: {
    completed: number;
    inProgress: number;
    pending: number;
  };
}

// Client types
export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive' | 'pending';
  projects: number;
  revenue: number;
  joinedAt: Date;
}

// Training course types
export interface TrainingCourse {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  instructor: string;
  enrolledCount: number;
  completedCount: number;
  rating: number;
  price: number;
  tags: string[];
}

// Project types
export interface Project {
  id: string;
  name: string;
  clientId: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed';
  startDate: Date;
  endDate: Date;
  budget: number;
  team: string[];
  progress: number;
}

// Notification types
export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// App settings types
export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  language: 'en' | 'es' | 'fr';
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  sidebar: {
    collapsed: boolean;
    width: number;
  };
}

// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

// Form types
export interface FormError {
  field: string;
  message: string;
}