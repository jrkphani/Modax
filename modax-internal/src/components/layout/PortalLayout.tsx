import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'
import { TopBar } from './TopBar'
import { Breadcrumb } from './Breadcrumb'
import { ProtectedRoute } from './ProtectedRoute'
import { QuickAccess } from './QuickAccess'

interface PortalLayoutProps {
  children?: React.ReactNode
}

export function PortalLayout({ children }: PortalLayoutProps) {
  const location = useLocation()

  // Don't show sidebar on landing or login pages
  const showSidebar = location.pathname !== '/' && location.pathname !== '/login'

  if (!showSidebar) {
    return <>{children ?? <Outlet />}</>
  }

  return (
    <ProtectedRoute>
      <div className="h-screen bg-background">
        <SidebarProvider defaultOpen={true}>
          <div className="h-full flex">
            <AppSidebar />
            <SidebarInset className="flex-1 flex flex-col">
              <div className="flex flex-col h-full">
                {/* Top Bar */}
                <TopBar />
                
                {/* Page Content with Breadcrumb */}
                <main className="flex-1 bg-gray-50 overflow-auto p-6">
                  <Breadcrumb />
                  {children ?? <Outlet />}
                </main>
              </div>
            </SidebarInset>
            
            {/* Quick Access Bar */}
            <QuickAccess />
          </div>
        </SidebarProvider>
      </div>
    </ProtectedRoute>
  )
}