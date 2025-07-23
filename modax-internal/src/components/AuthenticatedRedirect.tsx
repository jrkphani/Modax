import { Navigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

export function AuthenticatedRedirect() {
  const { isAuthenticated } = useAuth()
  
  if (isAuthenticated) {
    return <Navigate to="/strategy" replace />
  }
  
  return <Navigate to="/" replace />
}