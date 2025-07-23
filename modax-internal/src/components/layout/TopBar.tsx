import { Link } from 'react-router-dom';
import { Bell, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlobalSearch } from '@/components/search/GlobalSearch';
import { useAuth } from '@/contexts/AuthContext';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { designTokens } from '@/config/design-tokens';
import { getAvatarUrl } from '@/config/env';

export function TopBar() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Sidebar Trigger and Logo */}
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <Link 
            to="/strategy" 
            className="flex items-center gap-2 text-2xl font-bold"
            style={{ color: designTokens.colors.primary.DEFAULT }}
          >
            ModAx
          </Link>
        </div>

        {/* Global Search */}
        <div className="flex-1 max-w-xl mx-auto px-8">
          <GlobalSearch />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center"
                  style={{ backgroundColor: designTokens.colors.secondary.DEFAULT }}
                >
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">New case study available</p>
                  <p className="text-xs text-muted-foreground">
                    ProcureHere success story is now live
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">90-Day Playbook updated</p>
                  <p className="text-xs text-muted-foreground">
                    New templates added for discovery phase
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">Training module completed</p>
                  <p className="text-xs text-muted-foreground">
                    Intelligence Fabric Architecture
                  </p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={getAvatarUrl(user?.email || 'default')} />
                  <AvatarFallback>
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{user?.name || 'User'}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="mr-2 h-4 w-4" />
                Notification Preferences
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout} className="text-red-600">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}