import { 
  Lightbulb,
  TrendingUp,
  BookOpen,
  FileText,
  Users,
  Calculator,
  Map,
  FileCheck,
  Swords,
  Presentation,
  Library,
  Rocket,
  Target,
  Layers,
  GraduationCap,
  Package,
  HelpCircle,
  ClipboardList,
  Zap
} from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    id: 'strategy-overview',
    label: 'Strategy Overview',
    path: '/strategy',
    icon: Lightbulb,
  },
  {
    id: 'sales-enablement',
    label: 'Sales Enablement',
    path: '/sales-enablement',
    icon: TrendingUp,
    children: [
      {
        id: 'quick-start',
        label: 'Quick Start',
        path: '/sales-enablement/quick-start',
        icon: Rocket,
      },
      {
        id: 'battle-cards',
        label: 'Battle Cards',
        path: '/sales-enablement/battle-cards',
        icon: Swords,
      },
      {
        id: 'pitch-decks',
        label: 'Pitch Decks',
        path: '/sales-enablement/pitch-decks',
        icon: Presentation,
      },
      {
        id: 'tools-calculators',
        label: 'Tools & Calculators',
        path: '/sales-enablement/tools-calculators',
        icon: Calculator,
      },
    ],
  },
  {
    id: 'playbooks',
    label: 'Playbooks',
    path: '/playbooks',
    icon: BookOpen,
    children: [
      {
        id: '90-day-execution',
        label: '90-Day Execution',
        path: '/playbooks/90-day-execution',
        icon: Target,
      },
      {
        id: 'discovery-process',
        label: 'Discovery Process',
        path: '/playbooks/discovery-process',
        icon: Map,
      },
      {
        id: 'expansion-strategy',
        label: 'Expansion Strategy',
        path: '/playbooks/expansion-strategy',
        icon: Layers,
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    path: '/resources',
    icon: Package,
    children: [
      {
        id: 'case-studies',
        label: 'Case Studies',
        path: '/resources/case-studies',
        icon: Users,
      },
      {
        id: 'templates',
        label: 'Templates',
        path: '/resources/templates',
        icon: FileText,
      },
      {
        id: 'training-materials',
        label: 'Training Materials',
        path: '/resources/training-materials',
        icon: GraduationCap,
      },
      {
        id: 'marketing-assets',
        label: 'Marketing Assets',
        path: '/resources/marketing-assets',
        icon: Zap,
      },
    ],
  },
  {
    id: 'knowledge-base',
    label: 'Knowledge Base',
    path: '/knowledge-base',
    icon: Library,
    children: [
      {
        id: 'documentation',
        label: 'Product Documentation',
        path: '/knowledge-base/documentation',
        icon: FileText,
      },
      {
        id: 'specifications',
        label: 'Technical Specifications',
        path: '/knowledge-base/specifications',
        icon: FileCheck,
      },
      {
        id: 'implementation',
        label: 'Implementation Guides',
        path: '/knowledge-base/implementation',
        icon: ClipboardList,
      },
      {
        id: 'faqs',
        label: 'FAQs',
        path: '/knowledge-base/faqs',
        icon: HelpCircle,
      },
    ],
  },
];

export const getNavItemById = (id: string): NavItem | undefined => {
  const findItem = (items: NavItem[]): NavItem | undefined => {
    for (const item of items) {
      if (item.id === id) return item;
      if (item.children) {
        const found = findItem(item.children);
        if (found) return found;
      }
    }
    return undefined;
  };
  return findItem(navigationItems);
};

export const getNavItemByPath = (path: string): NavItem | undefined => {
  const findItem = (items: NavItem[]): NavItem | undefined => {
    for (const item of items) {
      if (item.path === path) return item;
      if (item.children) {
        const found = findItem(item.children);
        if (found) return found;
      }
    }
    return undefined;
  };
  return findItem(navigationItems);
};