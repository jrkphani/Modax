// Environment configuration

export const getEnvVar = (key: string, defaultValue: string): string => {
  const envValue = import.meta.env[key] as string | undefined;
  if (envValue === undefined || envValue === null || envValue === '') {
    return defaultValue;
  }
  return String(envValue);
};

export const env = {
  API_BASE_URL: getEnvVar('VITE_API_BASE_URL', 'http://localhost:3000/api'),
  API_VERSION: getEnvVar('VITE_API_VERSION', 'v2'),
  AVATAR_API_URL: getEnvVar('VITE_AVATAR_API_URL', 'https://api.dicebear.com/7.x/avataaars/svg'),
  IS_PRODUCTION: import.meta.env.PROD,
  IS_DEVELOPMENT: import.meta.env.DEV,
} as const;

export const getAvatarUrl = (seed: string): string => {
  return `${env.AVATAR_API_URL}?seed=${encodeURIComponent(seed)}`;
};
