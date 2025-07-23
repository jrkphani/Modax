import * as React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  ChevronRight,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { navigationItems } from "@/config/navigation"
import { designTokens } from "@/config/design-tokens"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/AuthContext"

export function AppSidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [openItems, setOpenItems] = React.useState<string[]>(["sales-enablement", "playbooks", "resources", "knowledge-base"])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    )
  }

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  const isActive = (path?: string) => {
    if (!path) return false
    return location.pathname === path
  }

  const hasActiveChild = (items?: typeof navigationItems[0]['children']) => {
    if (!items) return false
    return items.some((item) => location.pathname === item.path)
  }

  return (
    <Sidebar>
      <SidebarHeader className="p-0">
        <div className="flex items-center gap-3 px-6 h-16 border-b">
          <div className="text-sm font-medium text-gray-600">
            Knowledge Portal
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isItemActive = isActive(item.path) || hasActiveChild(item.children)
                const isOpen = openItems.includes(item.id)

                if (!item.children) {
                  return (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => handleNavigation(item.path)}
                        isActive={isActive(item.path)}
                        className={cn(
                          isActive(item.path) && "bg-primary/10 text-primary hover:bg-primary/20"
                        )}
                      >
                        <Icon 
                          className={cn(
                            "h-4 w-4",
                            isActive(item.path) && "text-primary"
                          )}
                        />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                }

                return (
                  <Collapsible
                    key={item.id}
                    open={isOpen}
                    onOpenChange={() => toggleItem(item.id)}
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={cn(
                            isItemActive && "bg-primary/10 text-primary hover:bg-primary/20"
                          )}
                        >
                          <Icon 
                            className={cn(
                              "h-4 w-4",
                              isItemActive && "text-primary"
                            )}
                          />
                          <span>{item.label}</span>
                          <ChevronRight
                            className={cn(
                              "ml-auto h-4 w-4 transition-transform duration-200",
                              isOpen && "rotate-90"
                            )}
                          />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.children.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.id}>
                              <SidebarMenuSubButton
                                onClick={() => handleNavigation(subItem.path)}
                                isActive={isActive(subItem.path)}
                                className={cn(
                                  isActive(subItem.path) && "bg-primary/10 text-primary hover:bg-primary/20"
                                )}
                              >
                                <span>{subItem.label}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <div className="p-2 text-xs text-gray-500 text-center">
          ModAx v2.0
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}