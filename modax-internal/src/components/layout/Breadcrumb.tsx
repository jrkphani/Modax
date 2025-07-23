import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { navigationItems, getNavItemByPath } from '@/config/navigation';
import { designTokens } from '@/config/design-tokens';
import { cn } from '@/lib/utils';
import {
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export function Breadcrumb() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Generate breadcrumb items from current path
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [];
    
    // Find the current navigation item
    const currentNavItem = getNavItemByPath(currentPath);
    
    if (!currentNavItem) {
      return [];
    }

    // If it's a top-level item
    if (!currentPath.includes('/') || currentPath.split('/').length === 2) {
      items.push({
        label: currentNavItem.label,
        path: currentNavItem.path,
      });
    } else {
      // Find parent item if it's a nested route
      // const pathSegments = currentPath.split('/').filter(Boolean);
      
      // Find parent navigation item
      for (const navItem of navigationItems) {
        if (navItem.children) {
          const childItem = navItem.children.find(child => child.path === currentPath);
          if (childItem) {
            // Add parent
            items.push({
              label: navItem.label,
              path: navItem.path,
            });
            // Add current
            items.push({
              label: childItem.label,
              path: childItem.path,
            });
            break;
          }
        }
      }

      // If not found in nested items, just use the current item
      if (items.length === 0) {
        items.push({
          label: currentNavItem.label,
          path: currentNavItem.path,
        });
      }
    }

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  if (breadcrumbItems.length === 0) {
    return null;
  }

  return (
    <BreadcrumbRoot className="mb-4">
      <BreadcrumbList>
        {/* Always show Strategy Overview as home */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link 
              to="/strategy-overview"
              className={cn(
                "text-gray-500 hover:text-gray-700 transition-colors",
                currentPath === "/strategy-overview" && "text-gray-900 font-medium"
              )}
            >
              Strategy Overview
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Show other breadcrumb items if not on strategy overview */}
        {currentPath !== "/strategy-overview" && breadcrumbItems.length > 0 && breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.path ?? index}>
            <BreadcrumbSeparator className="[&>svg]:size-3.5">
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              {index === breadcrumbItems.length - 1 ? (
                <BreadcrumbPage
                  style={{ color: designTokens.colors.primary.DEFAULT }}
                  className="font-medium"
                >
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link 
                    to={item.path ?? '#'}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </BreadcrumbRoot>
  );
}