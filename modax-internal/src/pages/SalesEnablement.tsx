import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SalesEnablement() {
  const navigate = useNavigate()
  
  useEffect(() => {
    // Redirect to the new sales enablement index
    void navigate('/sales-enablement', { replace: true })
  }, [navigate])
  
  return null
}