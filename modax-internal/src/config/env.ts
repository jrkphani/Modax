// Environment configuration
// This file centralizes all environment-specific values

const getEnvVar = (key: string, defaultValue: string): string => {
  return import.meta.env[key] || defaultValue;
};

export const env = {
  // API Configuration
  API_BASE_URL: getEnvVar('VITE_API_BASE_URL', 'http://localhost:3000/api'),
  API_VERSION: getEnvVar('VITE_API_VERSION', 'v2'),
  
  // External APIs
  AVATAR_API_URL: getEnvVar('VITE_AVATAR_API_URL', 'https://api.dicebear.com/7.x/avataaars/svg'),
  
  // App Configuration
  APP_NAME: getEnvVar('VITE_APP_NAME', 'ModAx'),
  APP_VERSION: getEnvVar('VITE_APP_VERSION', '2.0'),
  
  // Feature Flags
  ENABLE_MSW: getEnvVar('VITE_ENABLE_MSW', 'true') === 'true',
  ENABLE_ANALYTICS: getEnvVar('VITE_ENABLE_ANALYTICS', 'false') === 'true',
  
  // Timeouts (in milliseconds)
  DEFAULT_TIMEOUT: parseInt(getEnvVar('VITE_DEFAULT_TIMEOUT', '2000')),
  ANIMATION_DELAY: parseInt(getEnvVar('VITE_ANIMATION_DELAY', '1000')),
  COPY_FEEDBACK_DELAY: parseInt(getEnvVar('VITE_COPY_FEEDBACK_DELAY', '2000')),
  
  // Environment
  NODE_ENV: import.meta.env.MODE,
  IS_DEVELOPMENT: import.meta.env.DEV,
  IS_PRODUCTION: import.meta.env.PROD,
} as const;

// Helper function to construct full API URLs
export const getApiUrl = (endpoint: string): string => {
  const base = env.API_BASE_URL.replace(/\/$/, ''); // Remove trailing slash
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${base}${path}`;
};

// Helper function to construct versioned API URLs
export const getVersionedApiUrl = (endpoint: string): string => {
  const base = env.API_BASE_URL.replace(/\/$/, '');
  const version = env.API_VERSION;
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${base}/${version}${path}`;
};

// Helper function for avatar URLs
export const getAvatarUrl = (seed: string): string => {
  return `${env.AVATAR_API_URL}?seed=${seed}`;
};