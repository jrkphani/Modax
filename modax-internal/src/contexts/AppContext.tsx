'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User, AppSettings } from '@/types';
import { STORAGE_KEYS, DEFAULT_VALUES } from '@/lib/constants';

interface AppContextType {
  // User state
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  
  // App settings
  settings: AppSettings;
  updateSettings: (settings: Partial<AppSettings>) => void;
  
  // Theme
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  
  // Loading states
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const defaultSettings: AppSettings = {
  theme: 'system',
  language: 'en',
  notifications: {
    email: true,
    push: true,
    sms: false,
  },
  sidebar: {
    collapsed: false,
    width: DEFAULT_VALUES.SIDEBAR_WIDTH,
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [isLoading, setIsLoading] = useState(true);

  // Load user data from localStorage on mount
  useEffect(() => {
    const loadUserData = () => {
      try {
        const storedUser = localStorage.getItem(STORAGE_KEYS.USER_DATA);
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };

    const loadSettings = () => {
      try {
        const storedSettings = localStorage.getItem(STORAGE_KEYS.APP_SETTINGS);
        if (storedSettings) {
          setSettings(JSON.parse(storedSettings));
        }

        const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME) as 'light' | 'dark' | 'system';
        if (storedTheme) {
          setTheme(storedTheme);
        }
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    };

    loadUserData();
    loadSettings();
    setIsLoading(false);
  }, []);

  // Save user data to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    }
  }, [user]);

  // Save settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.APP_SETTINGS, JSON.stringify(settings));
  }, [settings]);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    
    // Apply theme to document
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', systemTheme === 'dark');
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const value: AppContextType = {
    user,
    setUser,
    isAuthenticated: !!user,
    settings,
    updateSettings,
    theme,
    setTheme,
    isLoading,
    setIsLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};