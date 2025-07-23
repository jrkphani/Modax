import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { 
  Search, 
  Book, 
  FileText,
  Code,
  ExternalLink,
  Download,
  ChevronRight,
  Package,
  Zap,
  Shield,
  Cloud,
  Database,
  Settings
} from 'lucide-react'

interface DocumentSection {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  articles: DocumentArticle[]
  version?: string
}

interface DocumentArticle {
  id: string
  title: string
  description: string
  readTime: string
  lastUpdated: string
  hasCode?: boolean
  downloadable?: boolean
}

export default function ProductDocumentation() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedVersion, setSelectedVersion] = useState('v2.0')

  const versions = ['v2.0', 'v1.9', 'v1.8']

  const documentSections: DocumentSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Everything you need to begin with ModAx',
      icon: Zap,
      articles: [
        {
          id: '1',
          title: 'Quick Start Guide',
          description: 'Get up and running with ModAx in under 30 minutes',
          readTime: '10 min read',
          lastUpdated: '2 days ago',
          hasCode: true
        },
        {
          id: '2',
          title: 'Installation & Setup',
          description: 'System requirements and installation procedures',
          readTime: '15 min read',
          lastUpdated: '1 week ago',
          hasCode: true
        },
        {
          id: '3',
          title: 'First Project Walkthrough',
          description: 'Create your first ModAx transformation project',
          readTime: '20 min read',
          lastUpdated: '3 days ago',
          hasCode: true
        }
      ]
    },
    {
      id: 'platform-overview',
      title: 'Platform Overview',
      description: 'Core concepts and architecture',
      icon: Package,
      articles: [
        {
          id: '4',
          title: 'ModAx Architecture',
          description: 'Understanding the three-layer intelligence fabric',
          readTime: '25 min read',
          lastUpdated: '1 week ago'
        },
        {
          id: '5',
          title: 'Core Components',
          description: 'Key components and their interactions',
          readTime: '30 min read',
          lastUpdated: '2 weeks ago'
        },
        {
          id: '6',
          title: 'Security Model',
          description: 'Security features and best practices',
          readTime: '20 min read',
          lastUpdated: '5 days ago'
        }
      ]
    },
    {
      id: 'intelligence-fabric',
      title: 'Intelligence Fabric',
      description: 'AI-native architecture documentation',
      icon: Database,
      articles: [
        {
          id: '7',
          title: 'Foundation Layer',
          description: 'Building blocks for autonomous intelligence',
          readTime: '35 min read',
          lastUpdated: '1 week ago',
          hasCode: true
        },
        {
          id: '8',
          title: 'Integration Layer',
          description: 'Connecting systems and data sources',
          readTime: '40 min read',
          lastUpdated: '4 days ago',
          hasCode: true
        },
        {
          id: '9',
          title: 'Intelligence Layer',
          description: 'AI models and decision engines',
          readTime: '45 min read',
          lastUpdated: '6 days ago',
          hasCode: true
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment & Operations',
      description: 'Production deployment guides',
      icon: Cloud,
      articles: [
        {
          id: '10',
          title: 'Deployment Strategies',
          description: 'Blue-green, canary, and rolling deployments',
          readTime: '30 min read',
          lastUpdated: '1 week ago',
          downloadable: true
        },
        {
          id: '11',
          title: 'Monitoring & Observability',
          description: 'Setting up monitoring and alerting',
          readTime: '25 min read',
          lastUpdated: '3 days ago',
          hasCode: true
        },
        {
          id: '12',
          title: 'Performance Optimization',
          description: 'Tuning for optimal performance',
          readTime: '35 min read',
          lastUpdated: '5 days ago'
        }
      ]
    }
  ]

  // Filter sections and articles based on search
  const filteredSections = documentSections.map(section => ({
    ...section,
    articles: section.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => 
    section.articles.length > 0 || 
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Product Documentation"
          description="Comprehensive guides and references for the ModAx platform"
        />

        <PageContent>
          {/* Search and Version Selection */}
          <div className="mb-8 space-y-4">
            <div className="flex gap-4">
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-12 text-base"
                />
              </div>
              <Tabs value={selectedVersion} onValueChange={setSelectedVersion}>
                <TabsList>
                  {versions.map(version => (
                    <TabsTrigger key={version} value={version}>
                      {version}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold mb-4">Popular Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="justify-start bg-white hover:bg-gray-50"
                onClick={() => {/* TODO: Navigate to API Reference */}}
              >
                <Code className="h-4 w-4 mr-2" />
                API Reference
                <ExternalLink className="h-3 w-3 ml-auto" />
              </Button>
              <Button
                variant="outline"
                className="justify-start bg-white hover:bg-gray-50"
                onClick={() => {/* TODO: Navigate to Code Examples */}}
              >
                <FileText className="h-4 w-4 mr-2" />
                Code Examples
                <ExternalLink className="h-3 w-3 ml-auto" />
              </Button>
              <Button
                variant="outline"
                className="justify-start bg-white hover:bg-gray-50"
                onClick={() => {/* TODO: Download SDK */}}
              >
                <Download className="h-4 w-4 mr-2" />
                Download SDK
                <ExternalLink className="h-3 w-3 ml-auto" />
              </Button>
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="space-y-8">
            {filteredSections.map((section) => {
              const Icon = section.icon
              return (
                <div key={section.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <Icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {section.articles.map((article) => (
                      <Card
                        key={article.id}
                        className="hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => {/* TODO: Navigate to article */}}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {article.title}
                              </h3>
                              <p className="text-gray-600 mb-3">{article.description}</p>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>{article.readTime}</span>
                                <span>Updated {article.lastUpdated}</span>
                                {article.hasCode && (
                                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                                    <Code className="h-3 w-3 mr-1" />
                                    Code samples
                                  </Badge>
                                )}
                                {article.downloadable && (
                                  <Badge variant="secondary" className="bg-success/5 text-success-700 border-success/20">
                                    <Download className="h-3 w-3 mr-1" />
                                    Downloadable
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400 mt-1" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Help Section */}
          <Card className="mt-12 bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Settings className="h-6 w-6 text-gray-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Need help with implementation?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our support team is here to help you succeed with ModAx. Get expert guidance
                    on architecture, deployment, and optimization.
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Contact Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}