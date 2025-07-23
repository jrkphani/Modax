import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Notification } from '@/types';
import { STORAGE_KEYS } from '@/lib/constants';

// User slice
interface UserSlice {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}

// UI slice
interface UISlice {
  sidebarCollapsed: boolean;
  sidebarWidth: number;
  theme: 'light' | 'dark' | 'system';
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setSidebarWidth: (width: number) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

// Notification slice
interface NotificationSlice {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

// Combined store interface
interface StoreState extends UserSlice, UISlice, NotificationSlice {}

// Create the store
const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // User slice implementation
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      logout: () => {
        // Clear auth tokens
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        
        set({ user: null, isAuthenticated: false });
      },

      // UI slice implementation
      sidebarCollapsed: false,
      sidebarWidth: 280,
      theme: 'system',
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      setSidebarWidth: (width) => set({ sidebarWidth: width }),
      setTheme: (theme) => {
        set({ theme });
        
        // Apply theme to document
        if (theme === 'system') {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          document.documentElement.classList.toggle('dark', systemTheme === 'dark');
        } else {
          document.documentElement.classList.toggle('dark', theme === 'dark');
        }
      },

      // Notification slice implementation
      notifications: [],
      unreadCount: 0,
      addNotification: (notification) => {
        const newNotification: Notification = {
          ...notification,
          id: `notif-${Date.now()}`,
          read: false,
          createdAt: new Date(),
        };
        
        set((state) => ({
          notifications: [newNotification, ...state.notifications],
          unreadCount: state.unreadCount + 1,
        }));
      },
      markAsRead: (id) => {
        set((state) => {
          const notifications = state.notifications.map((notif) =>
            notif.id === id ? { ...notif, read: true } : notif
          );
          const unreadCount = notifications.filter(n => !n.read).length;
          
          return { notifications, unreadCount };
        });
      },
      markAllAsRead: () => {
        set((state) => ({
          notifications: state.notifications.map((notif) => ({ ...notif, read: true })),
          unreadCount: 0,
        }));
      },
      removeNotification: (id) => {
        set((state) => {
          const notifications = state.notifications.filter((notif) => notif.id !== id);
          const unreadCount = notifications.filter(n => !n.read).length;
          
          return { notifications, unreadCount };
        });
      },
      clearNotifications: () => {
        set({ notifications: [], unreadCount: 0 });
      },
    }),
    {
      name: 'modax-store',
      partialize: (state) => ({
        // Only persist these fields
        user: state.user,
        sidebarCollapsed: state.sidebarCollapsed,
        sidebarWidth: state.sidebarWidth,
        theme: state.theme,
      }),
    }
  )
);

// Selectors for better performance
export const useUser = () => useStore((state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }));
export const useUISettings = () => useStore((state) => ({
  sidebarCollapsed: state.sidebarCollapsed,
  sidebarWidth: state.sidebarWidth,
  theme: state.theme,
}));
export const useNotifications = () => useStore((state) => ({
  notifications: state.notifications,
  unreadCount: state.unreadCount,
}));

// Actions
export const useUserActions = () => useStore((state) => ({
  setUser: state.setUser,
  logout: state.logout,
}));

export const useUIActions = () => useStore((state) => ({
  toggleSidebar: state.toggleSidebar,
  setSidebarCollapsed: state.setSidebarCollapsed,
  setSidebarWidth: state.setSidebarWidth,
  setTheme: state.setTheme,
}));

export const useNotificationActions = () => useStore((state) => ({
  addNotification: state.addNotification,
  markAsRead: state.markAsRead,
  markAllAsRead: state.markAllAsRead,
  removeNotification: state.removeNotification,
  clearNotifications: state.clearNotifications,
}));

export default useStore;