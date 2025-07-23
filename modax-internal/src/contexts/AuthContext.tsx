import { createContext, useContext, useState, type ReactNode } from 'react'

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string) => {
    // Mock authentication - replace with actual API call
    if (email && password) {
      setUser({
        id: '1',
        email,
        name: email.split('@')[0] || 'User',
      })
    } else {
      throw new Error('Invalid credentials')
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        logout, 
        isAuthenticated: !!user 
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}