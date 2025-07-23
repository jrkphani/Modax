import { 
  LayoutDashboard, 
  Lightbulb, 
  Cog, 
  TrendingUp, 
  BookOpen,
  Calculator,
  FileText,
  Users,
  Shield,
  Presentation,
  DollarSign,
  Cloud
} from 'lucide-react'

export interface SearchableItem {
  id: string
  title: string
  description: string
  path?: string
  category: 'page' | 'document' | 'tool' | 'action'
  keywords: string[]
  icon?: React.ComponentType<{ className?: string }>
  action?: () => void
}

export interface QuickAction {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  action: () => void
  shortcut?: string
}

// Searchable content index
export const searchableContent: SearchableItem[] = [
  // Pages
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'View key metrics and project overview',
    path: '/dashboard',
    category: 'page',
    keywords: ['dashboard', 'overview', 'metrics', 'stats', 'home'],
    icon: LayoutDashboard
  },
  {
    id: 'strategy-hub',
    title: 'Strategy Hub',
    description: 'Market opportunities and entry strategies',
    path: '/strategy',
    category: 'page',
    keywords: ['strategy', 'market', 'opportunities', 'planning'],
    icon: Lightbulb
  },
  {
    id: 'intelligence-fabric',
    title: 'Intelligence Fabric',
    description: 'Three-layer architecture for autonomous intelligence',
    path: '/intelligence-fabric',
    category: 'page',
    keywords: ['intelligence', 'fabric', 'ai', 'architecture', 'layers'],
    icon: Shield
  },
  {
    id: '90-day-playbook',
    title: '90-Day Playbook',
    description: 'Transform POCs into production in 90 days',
    path: '/90-day-playbook',
    category: 'page',
    keywords: ['90 day', 'playbook', 'poc', 'production', 'transformation'],
    icon: FileText
  },
  {
    id: 'operations-center',
    title: 'Operations Center',
    description: 'Manage quality gates and risk assessment',
    path: '/operations',
    category: 'page',
    keywords: ['operations', 'quality', 'risk', 'management'],
    icon: Cog
  },
  {
    id: 'sales-enablement',
    title: 'Sales Enablement',
    description: 'Tools and resources for sales teams',
    path: '/sales-enablement',
    category: 'page',
    keywords: ['sales', 'enablement', 'tools', 'resources'],
    icon: TrendingUp
  },
  {
    id: 'knowledge-base',
    title: 'Knowledge Base',
    description: 'Documentation, guides, and FAQs',
    path: '/knowledge-base',
    category: 'page',
    keywords: ['knowledge', 'documentation', 'guides', 'help', 'faq'],
    icon: BookOpen
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    description: 'Success stories and client transformations',
    path: '/case-studies',
    category: 'page',
    keywords: ['case studies', 'success', 'clients', 'stories', 'results'],
    icon: Users
  },

  // Tools
  {
    id: 'roi-calculator',
    title: 'ROI Calculator',
    description: 'Calculate return on investment for modernization',
    path: '/sales-enablement/roi-calculators',
    category: 'tool',
    keywords: ['roi', 'calculator', 'return', 'investment', 'calculate'],
    icon: Calculator
  },
  {
    id: 'aws-funding',
    title: 'AWS Funding Guide',
    description: 'Navigate AWS funding programs',
    category: 'tool',
    keywords: ['aws', 'funding', 'grants', 'credits', 'map'],
    icon: Cloud
  },
  {
    id: 'pitch-deck',
    title: 'Pitch Deck Builder',
    description: 'Create customized pitch presentations',
    path: '/sales-enablement/pitch-decks',
    category: 'tool',
    keywords: ['pitch', 'deck', 'presentation', 'slides'],
    icon: Presentation
  },

  // Documents
  {
    id: 'failed-poc-assessment',
    title: 'Failed POC Assessment Template',
    description: 'Evaluate and prioritize POC resurrection candidates',
    category: 'document',
    keywords: ['poc', 'assessment', 'template', 'failed', 'evaluation'],
    icon: FileText
  },
  {
    id: 'implementation-checklist',
    title: 'Implementation Checklist',
    description: 'Step-by-step guide for successful implementation',
    category: 'document',
    keywords: ['implementation', 'checklist', 'guide', 'steps'],
    icon: FileText
  },
  {
    id: 'security-guidelines',
    title: 'Security Best Practices',
    description: 'Enterprise security implementation guide',
    category: 'document',
    keywords: ['security', 'best practices', 'guidelines', 'enterprise'],
    icon: Shield
  }
]

// Quick actions for command palette
export const quickActions: QuickAction[] = [
  {
    id: 'new-project',
    title: 'Create New Project',
    description: 'Start a new transformation project',
    icon: FileText,
    action: () => {/* TODO: Create new project */},
    shortcut: '⌘N'
  },
  {
    id: 'calculate-roi',
    title: 'Open ROI Calculator',
    description: 'Calculate modernization ROI',
    icon: Calculator,
    action: () => window.location.href = '/sales-enablement/roi-calculators',
    shortcut: '⌘R'
  },
  {
    id: 'view-funding',
    title: 'View AWS Funding Options',
    description: 'Explore available funding programs',
    icon: DollarSign,
    action: () => {/* TODO: View AWS funding */},
    shortcut: '⌘F'
  },
  {
    id: 'contact-support',
    title: 'Contact Support',
    description: 'Get help from our team',
    icon: Users,
    action: () => {/* TODO: Contact support */},
    shortcut: '⌘H'
  }
]

// Search function
export function searchItems(query: string, items: SearchableItem[] = searchableContent): SearchableItem[] {
  if (!query) return []
  
  const lowerQuery = query.toLowerCase()
  
  return items.filter(item => {
    // Check title
    if (item.title.toLowerCase().includes(lowerQuery)) return true
    
    // Check description
    if (item.description.toLowerCase().includes(lowerQuery)) return true
    
    // Check keywords
    if (item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))) return true
    
    return false
  }).sort((a, b) => {
    // Prioritize exact matches in title
    const aExact = a.title.toLowerCase() === lowerQuery
    const bExact = b.title.toLowerCase() === lowerQuery
    if (aExact && !bExact) return -1
    if (!aExact && bExact) return 1
    
    // Then prioritize title matches
    const aTitle = a.title.toLowerCase().includes(lowerQuery)
    const bTitle = b.title.toLowerCase().includes(lowerQuery)
    if (aTitle && !bTitle) return -1
    if (!aTitle && bTitle) return 1
    
    return 0
  })
}

// Get search suggestions
export function getSearchSuggestions(query: string): string[] {
  if (!query || query.length < 2) return []
  
  const suggestions = new Set<string>()
  const lowerQuery = query.toLowerCase()
  
  searchableContent.forEach(item => {
    // Add matching keywords
    item.keywords.forEach(keyword => {
      if (keyword.toLowerCase().startsWith(lowerQuery)) {
        suggestions.add(keyword)
      }
    })
    
    // Add matching words from titles
    const titleWords = item.title.toLowerCase().split(' ')
    titleWords.forEach(word => {
      if (word.startsWith(lowerQuery) && word.length > 3) {
        suggestions.add(word)
      }
    })
  })
  
  return Array.from(suggestions).slice(0, 5)
}