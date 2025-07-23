import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  PageContainer, 
  PageHeader 
} from '@/components/layout/PageLayout'
import { 
  Search, 
  FileText, 
  Book, 
  Users, 
  Settings,
  ArrowRight,
  Clock,
  TrendingUp,
  BookOpen,
  Code,
  HelpCircle,
  Lightbulb
} from 'lucide-react'

interface KnowledgeCategory {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  path: string
  articleCount: number
  lastUpdated: string
  color: string
}

interface Article {
  id: string
  title: string
  category: string
  views: number
  lastUpdated: string
  trending?: boolean
}

export default function KnowledgeBaseIndex() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const categories: KnowledgeCategory[] = [
    {
      id: 'documentation',
      title: 'Product Documentation',
      description: 'Comprehensive guides and references for ModAx platform',
      icon: Book,
      path: '/knowledge-base/documentation',
      articleCount: 24,
      lastUpdated: '2 days ago',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'specifications',
      title: 'Technical Specifications',
      description: 'API docs, architecture diagrams, and integration guides',
      icon: Code,
      path: '/knowledge-base/specifications',
      articleCount: 18,
      lastUpdated: '1 week ago',
      color: 'bg-primary/5 text-primary border-primary/20'
    },
    {
      id: 'implementation',
      title: 'Implementation Guides',
      description: 'Step-by-step guides and best practices for deployment',
      icon: Settings,
      path: '/knowledge-base/implementation',
      articleCount: 32,
      lastUpdated: '3 days ago',
      color: 'bg-success/5 text-success-700 border-success/20'
    },
    {
      id: 'faqs',
      title: 'FAQs',
      description: 'Frequently asked questions and quick answers',
      icon: HelpCircle,
      path: '/knowledge-base/faqs',
      articleCount: 45,
      lastUpdated: '1 day ago',
      color: 'bg-orange-50 text-orange-700 border-orange-200'
    }
  ]

  const recentArticles: Article[] = [
    {
      id: '1',
      title: 'Getting Started with Intelligence Fabric',
      category: 'Implementation',
      views: 1234,
      lastUpdated: '2 hours ago'
    },
    {
      id: '2',
      title: 'AWS Funding Program Integration',
      category: 'Documentation',
      views: 890,
      lastUpdated: '5 hours ago'
    },
    {
      id: '3',
      title: 'API Authentication Best Practices',
      category: 'Technical',
      views: 756,
      lastUpdated: '1 day ago'
    },
    {
      id: '4',
      title: 'Troubleshooting Common Issues',
      category: 'FAQs',
      views: 2345,
      lastUpdated: '2 days ago'
    }
  ]

  const trendingTopics: Article[] = [
    {
      id: '5',
      title: '90-Day Playbook Implementation',
      category: 'Implementation',
      views: 3456,
      lastUpdated: '1 day ago',
      trending: true
    },
    {
      id: '6',
      title: 'ROI Calculator Configuration',
      category: 'Documentation',
      views: 2890,
      lastUpdated: '3 days ago',
      trending: true
    },
    {
      id: '7',
      title: 'Enterprise Integration Patterns',
      category: 'Technical',
      views: 2156,
      lastUpdated: '1 week ago',
      trending: true
    }
  ]

  // Filter categories based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories
    
    return categories.filter(category =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  // Filter articles based on search
  const filteredRecentArticles = useMemo(() => {
    if (!searchQuery) return recentArticles
    
    return recentArticles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <PageContainer className="py-6">
      <PageHeader
        title="Knowledge Base"
        description="Find answers, documentation, and resources to help you succeed with ModAx"
      />

      <div>
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search documentation, guides, FAQs..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); }}
                className="pl-12 pr-4 h-12 text-base"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCategories.map((category) => {
                const Icon = category.icon
                return (
                  <Card
                    key={category.id}
                    className={`border hover:shadow-lg transition-all cursor-pointer ${category.color}`}
                    onClick={() => navigate(category.path)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-white/50">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{category.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {category.description}
                            </CardDescription>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 mt-1" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <span>{category.articleCount} articles</span>
                        <span className="text-gray-600">Updated {category.lastUpdated}</span>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Recently Updated */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Clock className="h-5 w-5 text-gray-600" />
                <h2 className="text-xl font-bold text-gray-900">Recently Updated</h2>
              </div>
              <div className="space-y-4">
                {filteredRecentArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="border-gray-200 hover:border-gray-300 transition-colors cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{article.category}</span>
                            <span>{article.views} views</span>
                            <span>{article.lastUpdated}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Popular Topics */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-5 w-5 text-gray-600" />
                <h2 className="text-xl font-bold text-gray-900">Popular Topics</h2>
              </div>
              <div className="space-y-4">
                {trendingTopics.map((article) => (
                  <Card
                    key={article.id}
                    className="border-gray-200 hover:border-gray-300 transition-colors cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900">
                              {article.title}
                            </h3>
                            {article.trending && (
                              <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-200">
                                Trending
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{article.category}</span>
                            <span>{article.views} views</span>
                            <span>{article.lastUpdated}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <Card className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Pro Tip: Use Global Search
                  </h3>
                  <p className="text-gray-700">
                    Press <kbd className="px-2 py-1 bg-white rounded border text-xs font-mono">⌘K</kbd> anywhere
                    in the portal to quickly search across all documentation, pages, and resources.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>
    </PageContainer>
  )
}