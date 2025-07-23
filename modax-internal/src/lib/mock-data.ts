import type { User, Client, TrainingCourse, Project, DashboardMetrics, Notification } from '@/types';
import { getAvatarUrl } from '@/config/env';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    email: 'john.doe@modax.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'admin',
    department: 'Engineering',
    avatar: getAvatarUrl('John'),
    isActive: true,
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: '2',
    email: 'jane.smith@modax.com',
    firstName: 'Jane',
    lastName: 'Smith',
    role: 'manager',
    department: 'Sales',
    avatar: getAvatarUrl('Jane'),
    isActive: true,
    createdAt: new Date('2023-03-20'),
    updatedAt: new Date('2024-01-18'),
  },
  {
    id: '3',
    email: 'mike.wilson@modax.com',
    firstName: 'Mike',
    lastName: 'Wilson',
    role: 'employee',
    department: 'Marketing',
    avatar: getAvatarUrl('Mike'),
    isActive: true,
    createdAt: new Date('2023-06-10'),
    updatedAt: new Date('2024-01-15'),
  },
];

// Mock Clients
export const mockClients: Client[] = [
  {
    id: '1',
    name: 'Acme Corporation',
    email: 'contact@acme.com',
    phone: '+1 (555) 123-4567',
    company: 'Acme Corp',
    status: 'active',
    projects: 5,
    revenue: 125000,
    joinedAt: new Date('2023-02-15'),
  },
  {
    id: '2',
    name: 'TechStart Inc',
    email: 'info@techstart.com',
    phone: '+1 (555) 234-5678',
    company: 'TechStart',
    status: 'active',
    projects: 3,
    revenue: 87500,
    joinedAt: new Date('2023-04-20'),
  },
  {
    id: '3',
    name: 'Global Solutions Ltd',
    email: 'hello@globalsolutions.com',
    phone: '+1 (555) 345-6789',
    company: 'Global Solutions',
    status: 'pending',
    projects: 0,
    revenue: 0,
    joinedAt: new Date('2024-01-10'),
  },
  {
    id: '4',
    name: 'Innovation Labs',
    email: 'contact@innovationlabs.com',
    phone: '+1 (555) 456-7890',
    company: 'Innovation Labs',
    status: 'active',
    projects: 7,
    revenue: 195000,
    joinedAt: new Date('2022-11-05'),
  },
  {
    id: '5',
    name: 'Digital Dynamics',
    email: 'info@digitaldynamics.com',
    phone: '+1 (555) 567-8901',
    company: 'Digital Dynamics',
    status: 'inactive',
    projects: 2,
    revenue: 45000,
    joinedAt: new Date('2023-07-15'),
  },
];

// Mock Training Courses
export const mockTrainingCourses: TrainingCourse[] = [
  {
    id: '1',
    title: 'Introduction to Cloud Architecture',
    description: 'Learn the fundamentals of cloud computing and architecture design patterns.',
    duration: '4 weeks',
    level: 'beginner',
    instructor: 'Dr. Sarah Johnson',
    enrolledCount: 145,
    completedCount: 98,
    rating: 4.7,
    price: 299,
    tags: ['cloud', 'aws', 'architecture'],
  },
  {
    id: '2',
    title: 'Advanced React Development',
    description: 'Master advanced React patterns, performance optimization, and state management.',
    duration: '6 weeks',
    level: 'advanced',
    instructor: 'Mark Thompson',
    enrolledCount: 89,
    completedCount: 52,
    rating: 4.9,
    price: 499,
    tags: ['react', 'javascript', 'frontend'],
  },
  {
    id: '3',
    title: 'DevOps Best Practices',
    description: 'Implement CI/CD pipelines and learn infrastructure as code principles.',
    duration: '5 weeks',
    level: 'intermediate',
    instructor: 'Alex Chen',
    enrolledCount: 112,
    completedCount: 78,
    rating: 4.6,
    price: 399,
    tags: ['devops', 'ci/cd', 'kubernetes'],
  },
  {
    id: '4',
    title: 'Data Science Fundamentals',
    description: 'Introduction to data analysis, machine learning, and statistical modeling.',
    duration: '8 weeks',
    level: 'beginner',
    instructor: 'Prof. Emily Davis',
    enrolledCount: 203,
    completedCount: 145,
    rating: 4.8,
    price: 599,
    tags: ['data science', 'python', 'machine learning'],
  },
];

// Mock Projects
export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform Redesign',
    clientId: '1',
    status: 'in-progress',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-03-31'),
    budget: 45000,
    team: ['1', '2', '3'],
    progress: 65,
  },
  {
    id: '2',
    name: 'Mobile App Development',
    clientId: '2',
    status: 'planning',
    startDate: new Date('2024-02-01'),
    endDate: new Date('2024-05-31'),
    budget: 75000,
    team: ['1', '3'],
    progress: 15,
  },
  {
    id: '3',
    name: 'Cloud Migration Project',
    clientId: '4',
    status: 'review',
    startDate: new Date('2023-11-01'),
    endDate: new Date('2024-01-31'),
    budget: 120000,
    team: ['1', '2'],
    progress: 90,
  },
  {
    id: '4',
    name: 'AI Integration Suite',
    clientId: '1',
    status: 'completed',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2023-12-31'),
    budget: 95000,
    team: ['2', '3'],
    progress: 100,
  },
];

// Mock Dashboard Metrics
export const mockDashboardMetrics: DashboardMetrics = {
  totalClients: 24,
  activeProjects: 8,
  completedTrainings: 373,
  pendingTasks: 15,
  revenue: {
    current: 547500,
    previous: 498200,
    growth: 9.9,
  },
  clientGrowth: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [12, 15, 18, 20, 22, 24],
  },
  projectStatus: {
    completed: 28,
    inProgress: 8,
    pending: 4,
  },
};

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'info',
    title: 'New Training Available',
    message: 'Check out our new Advanced TypeScript course!',
    read: false,
    createdAt: new Date('2024-01-20T10:30:00'),
  },
  {
    id: '2',
    type: 'success',
    title: 'Project Completed',
    message: 'The E-commerce Platform Redesign has been successfully completed.',
    read: false,
    createdAt: new Date('2024-01-19T15:45:00'),
  },
  {
    id: '3',
    type: 'warning',
    title: 'Deadline Approaching',
    message: 'Cloud Migration Project deadline is in 3 days.',
    read: true,
    createdAt: new Date('2024-01-18T09:00:00'),
  },
  {
    id: '4',
    type: 'error',
    title: 'Payment Failed',
    message: 'Failed to process payment for client Global Solutions Ltd.',
    read: true,
    createdAt: new Date('2024-01-17T14:20:00'),
  },
];

// Helper function to simulate API delay
export const _simulateApiDelay = (ms = 800): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Mock API functions
export const mockApi = {
  // Auth
  async login(email: string, password: string) {
    await _simulateApiDelay();
    const user = mockUsers.find(u => u.email === email);
    if (user && password === 'password123') {
      return {
        user,
        token: 'mock-jwt-token',
        refreshToken: 'mock-refresh-token',
      };
    }
    throw new Error('Invalid credentials');
  },

  // Dashboard
  async getDashboardMetrics() {
    await _simulateApiDelay();
    return mockDashboardMetrics;
  },

  // Clients
  async getClients(page = 1, pageSize = 10) {
    await _simulateApiDelay();
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
      data: mockClients.slice(start, end),
      total: mockClients.length,
      page,
      pageSize,
      totalPages: Math.ceil(mockClients.length / pageSize),
    };
  },

  // Training
  async getTrainingCourses() {
    await _simulateApiDelay();
    return mockTrainingCourses;
  },

  // Projects
  async getProjects() {
    await _simulateApiDelay();
    return mockProjects;
  },

  // Notifications
  async getNotifications() {
    await _simulateApiDelay();
    return mockNotifications;
  },
};