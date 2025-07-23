import { API_BASE_URL, STORAGE_KEYS } from './constants';
import type { ApiResponse } from '@/types';

interface RequestConfig extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

class ApiClient {
  private baseURL: string;
  private defaultHeaders: HeadersInit;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  // Request interceptor
  private prepareRequest(config: RequestConfig): RequestConfig {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    
    const headers: HeadersInit = {
      ...this.defaultHeaders,
      ...config.headers,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return {
      ...config,
      headers,
    };
  }

  // Response interceptor
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      // Handle 401 Unauthorized
      if (response.status === 401) {
        // Clear auth data
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.USER_DATA);
        
        // Redirect to login
        window.location.href = '/login';
      }

      const error = await response.json().catch(() => ({
        message: response.statusText,
      }));

      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  // Build URL with query params
  private buildURL(endpoint: string, params?: Record<string, string | number | boolean>): string {
    const url = new URL(`${this.baseURL}${endpoint}`);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    return url.toString();
  }

  // Generic request method
  private async request<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    try {
      const { params, ...requestConfig } = config;
      const url = this.buildURL(endpoint, params);
      const preparedConfig = this.prepareRequest(requestConfig);
      
      const response = await fetch(url, preparedConfig);
      const data = await this.handleResponse<ApiResponse<T>>(response);
      
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // GET request
  async get<T>(endpoint: string, params?: Record<string, string | number | boolean>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'GET',
      params,
    });
  }

  // POST request
  async post<T>(endpoint: string, data?: unknown, config: RequestConfig = {}): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  async put<T>(endpoint: string, data?: unknown, config: RequestConfig = {}): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PATCH request
  async patch<T>(endpoint: string, data?: unknown, config: RequestConfig = {}): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE request
  async delete<T>(endpoint: string, config: RequestConfig = {}): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'DELETE',
    });
  }

  // File upload
  async upload<T>(endpoint: string, formData: FormData, config: RequestConfig = {}): Promise<ApiResponse<T>> {
    const headers = { ...config.headers };
    // Remove Content-Type to let browser set it with boundary for multipart
    delete headers['Content-Type'];

    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      headers,
      body: formData,
    });
  }

  // Set auth token
  setAuthToken(token: string): void {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  }

  // Clear auth token
  clearAuthToken(): void {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  }
}

// Create and export a singleton instance
const apiClient = new ApiClient();

export default apiClient;
export { ApiClient };