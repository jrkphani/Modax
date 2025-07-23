import { http, HttpResponse } from 'msw'
import { mockUsers, mockClients, mockProjects, mockTrainingCourses, mockDashboardMetrics } from '../mock-data'
import { API_ENDPOINTS } from '../constants'
import { env } from '@/config/env'

const BASE_URL = env.API_BASE_URL.replace('/api', '') // Remove /api suffix for base URL

export const handlers = [
  // Auth endpoints
  http.post(`${BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`, async ({ request }) => {
    const { email, password } = await request.json() as { email: string; password: string }
    const user = mockUsers.find(u => u.email === email)
    
    if (user && password === 'password123') {
      return HttpResponse.json({
        success: true,
        data: {
          user,
          token: 'mock-jwt-token',
          refreshToken: 'mock-refresh-token'
        }
      })
    }
    
    return HttpResponse.json({
      success: false,
      error: { message: 'Invalid credentials' }
    }, { status: 401 })
  }),

  // Dashboard endpoints
  http.get(`${BASE_URL}${API_ENDPOINTS.DASHBOARD.METRICS}`, () => {
    return HttpResponse.json({
      success: true,
      data: mockDashboardMetrics
    })
  }),

  // Clients endpoints
  http.get(`${BASE_URL}${API_ENDPOINTS.CLIENTS.LIST}`, ({ request }) => {
    const url = new URL(request.url)
    const page = parseInt(url.searchParams.get('page') || '1')
    const limit = parseInt(url.searchParams.get('limit') || '10')
    
    const start = (page - 1) * limit
    const end = start + limit
    const paginatedClients = mockClients.slice(start, end)
    
    return HttpResponse.json({
      success: true,
      data: paginatedClients,
      metadata: {
        page,
        limit,
        total: mockClients.length,
        totalPages: Math.ceil(mockClients.length / limit)
      }
    })
  }),

  http.get(`${BASE_URL}${API_ENDPOINTS.CLIENTS.GET(':id')}`, ({ params }) => {
    const client = mockClients.find(c => c.id === params.id)
    
    if (client) {
      return HttpResponse.json({ success: true, data: client })
    }
    
    return HttpResponse.json({
      success: false,
      error: { message: 'Client not found' }
    }, { status: 404 })
  }),

  // Projects endpoints
  http.get(`${BASE_URL}${API_ENDPOINTS.PROJECTS.LIST}`, () => {
    return HttpResponse.json({
      success: true,
      data: mockProjects
    })
  }),

  // Training endpoints
  http.get(`${BASE_URL}${API_ENDPOINTS.TRAINING.COURSES}`, () => {
    return HttpResponse.json({
      success: true,
      data: mockTrainingCourses
    })
  }),

  http.get(`${BASE_URL}${API_ENDPOINTS.TRAINING.PROGRESS}`, () => {
    const progress = mockTrainingCourses.map(course => ({
      courseId: course.id,
      progress: Math.floor(Math.random() * 100),
      completedLessons: Math.floor(Math.random() * course.lessonsCount),
      lastAccessed: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
    }))
    
    return HttpResponse.json({
      success: true,
      data: progress
    })
  })
]