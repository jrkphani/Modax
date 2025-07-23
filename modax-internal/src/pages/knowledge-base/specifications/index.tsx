import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { env } from '@/config/env'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { 
  Search, 
  Code, 
  GitBranch,
  Layers,
  Terminal,
  FileJson,
  Lock,
  Globe,
  Database,
  Cpu,
  Network,
  Shield,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react'

interface APIEndpoint {
  method: string
  path: string
  description: string
  auth: boolean
  rateLimit?: string
}

interface IntegrationGuide {
  id: string
  title: string
  description: string
  type: string
  difficulty: 'Easy' | 'Medium' | 'Advanced'
  icon: React.ComponentType<{ className?: string }>
}

export default function TechnicalSpecifications() {
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null)

  const apiVersion = `/${env.API_VERSION}`;
  const apiEndpoints: Record<string, APIEndpoint[]> = {
    'Authentication': [
      { method: 'POST', path: `/api${apiVersion}/auth/login`, description: 'Authenticate user and receive JWT token', auth: false },
      { method: 'POST', path: `/api${apiVersion}/auth/refresh`, description: 'Refresh access token', auth: true },
      { method: 'POST', path: `/api${apiVersion}/auth/logout`, description: 'Invalidate current session', auth: true },
    ],
    'Projects': [
      { method: 'GET', path: `/api${apiVersion}/projects`, description: 'List all projects', auth: true, rateLimit: '100/hour' },
      { method: 'POST', path: `/api${apiVersion}/projects`, description: 'Create new project', auth: true },
      { method: 'GET', path: `/api${apiVersion}/projects/{id}`, description: 'Get project details', auth: true },
      { method: 'PUT', path: `/api${apiVersion}/projects/{id}`, description: 'Update project', auth: true },
      { method: 'DELETE', path: `/api${apiVersion}/projects/{id}`, description: 'Delete project', auth: true },
    ],
    'Intelligence Fabric': [
      { method: 'POST', path: `/api${apiVersion}/fabric/analyze`, description: 'Analyze system for modernization', auth: true },
      { method: 'GET', path: `/api${apiVersion}/fabric/insights/{projectId}`, description: 'Get AI insights for project', auth: true },
      { method: 'POST', path: `/api${apiVersion}/fabric/train`, description: 'Train custom models', auth: true, rateLimit: '10/day' },
    ],
    'Transformations': [
      { method: 'POST', path: `/api${apiVersion}/transform/start`, description: 'Start transformation process', auth: true },
      { method: 'GET', path: `/api${apiVersion}/transform/status/{id}`, description: 'Get transformation status', auth: true },
      { method: 'GET', path: `/api${apiVersion}/transform/results/{id}`, description: 'Download transformation results', auth: true },
    ]
  }

  const integrationGuides: IntegrationGuide[] = [
    {
      id: '1',
      title: 'AWS Integration',
      description: 'Connect ModAx with AWS services including Lambda, S3, and RDS',
      type: 'Cloud Provider',
      difficulty: 'Medium',
      icon: Globe
    },
    {
      id: '2',
      title: 'GitHub Actions CI/CD',
      description: 'Automate deployments using GitHub Actions workflows',
      type: 'DevOps',
      difficulty: 'Easy',
      icon: GitBranch
    },
    {
      id: '3',
      title: 'Enterprise SSO',
      description: 'Configure SAML/OAuth for enterprise authentication',
      type: 'Security',
      difficulty: 'Advanced',
      icon: Lock
    },
    {
      id: '4',
      title: 'Database Migration',
      description: 'Migrate legacy databases to modern cloud architectures',
      type: 'Data',
      difficulty: 'Advanced',
      icon: Database
    },
    {
      id: '5',
      title: 'Webhook Configuration',
      description: 'Set up real-time event notifications',
      type: 'Integration',
      difficulty: 'Easy',
      icon: Network
    },
    {
      id: '6',
      title: 'Custom AI Models',
      description: 'Deploy and integrate custom ML models',
      type: 'AI/ML',
      difficulty: 'Advanced',
      icon: Cpu
    }
  ]

  const architectureDiagrams = [
    {
      title: 'System Architecture Overview',
      description: 'High-level view of ModAx platform components',
      lastUpdated: '1 week ago'
    },
    {
      title: 'Intelligence Fabric Layers',
      description: 'Detailed breakdown of the three-layer architecture',
      lastUpdated: '3 days ago'
    },
    {
      title: 'Data Flow Diagram',
      description: 'How data moves through the transformation pipeline',
      lastUpdated: '5 days ago'
    },
    {
      title: 'Security Architecture',
      description: 'Security layers and compliance boundaries',
      lastUpdated: '2 weeks ago'
    }
  ]

  const copyToClipboard = (text: string, endpoint: string) => {
    void navigator.clipboard.writeText(text)
    setCopiedEndpoint(endpoint)
    setTimeout(() => { setCopiedEndpoint(null); }, 2000)
  }

  const filteredEndpoints = Object.entries(apiEndpoints).reduce<Record<string, APIEndpoint[]>>((acc, [category, endpoints]) => {
    const filtered = endpoints.filter(endpoint =>
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    if (filtered.length > 0) {
      acc[category] = filtered
    }
    return acc
  }, {})

  const filteredGuides = integrationGuides.filter(guide =>
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Technical Specifications"
          description="API documentation, architecture diagrams, and integration guides"
        />

        <PageContent>
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search APIs, endpoints, integrations..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); }}
                className="pl-12 pr-4 h-12 text-base"
              />
            </div>
          </div>

          <Tabs defaultValue="api" className="space-y-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>

            {/* API Reference Tab */}
            <TabsContent value="api" className="space-y-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">REST API v2.0</h2>
                  <p className="text-gray-600 mt-1">Base URL: {env.IS_PRODUCTION ? 'https://api.modax.com' : env.API_BASE_URL}/{env.API_VERSION}</p>
                </div>
                <Button variant="outline">
                  <FileJson className="h-4 w-4 mr-2" />
                  Download OpenAPI Spec
                </Button>
              </div>

              {Object.entries(filteredEndpoints).map(([category, endpoints]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
                  <div className="space-y-3">
                    {endpoints.map((endpoint, index) => (
                      <Card key={index} className="hover:shadow-sm transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <Badge 
                              variant="outline" 
                              className={`font-mono ${
                                endpoint.method === 'GET' ? 'border-success/50 text-success-700' :
                                endpoint.method === 'POST' ? 'border-blue-500 text-blue-700' :
                                endpoint.method === 'PUT' ? 'border-yellow-500 text-yellow-700' :
                                'border-red-500 text-red-700'
                              }`}
                            >
                              {endpoint.method}
                            </Badge>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                                  {endpoint.path}
                                </code>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={() => { copyToClipboard(endpoint.path, endpoint.path); }}
                                >
                                  {copiedEndpoint === endpoint.path ? (
                                    <Check className="h-3 w-3 text-success" />
                                  ) : (
                                    <Copy className="h-3 w-3" />
                                  )}
                                </Button>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{endpoint.description}</p>
                              <div className="flex items-center gap-4 text-xs">
                                {endpoint.auth && (
                                  <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                    <Lock className="h-3 w-3 mr-1" />
                                    Auth Required
                                  </Badge>
                                )}
                                {endpoint.rateLimit && (
                                  <span className="text-gray-500">
                                    Rate limit: {endpoint.rateLimit}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Terminal className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Quick Start with cURL
                      </h3>
                      <pre className="bg-white rounded p-4 text-sm overflow-x-auto">
{`curl -X POST https://api.modax.com/v2/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com", "password": "your-password"}'`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Architecture Tab */}
            <TabsContent value="architecture" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Architecture Diagrams</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {architectureDiagrams.map((diagram, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Layers className="h-8 w-8 text-primary" />
                          <ExternalLink className="h-4 w-4 text-gray-400" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-semibold text-gray-900 mb-2">{diagram.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{diagram.description}</p>
                        <p className="text-xs text-gray-500">Updated {diagram.lastUpdated}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Three-Layer Intelligence Fabric
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Foundation Layer</h4>
                        <p className="text-sm text-gray-600">Core infrastructure and data collection</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Integration Layer</h4>
                        <p className="text-sm text-gray-600">System connections and data orchestration</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Intelligence Layer</h4>
                        <p className="text-sm text-gray-600">AI models and autonomous decision-making</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Integrations Tab */}
            <TabsContent value="integrations" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Integration Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredGuides.map((guide) => {
                    const Icon = guide.icon
                    return (
                      <Card key={guide.id} className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-gray-100">
                              <Icon className="h-6 w-6 text-gray-700" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 mb-1">{guide.title}</h3>
                              <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                              <div className="flex items-center gap-3">
                                <Badge variant="outline">{guide.type}</Badge>
                                <Badge 
                                  variant="secondary"
                                  className={
                                    guide.difficulty === 'Easy' ? 'bg-success/5 text-success-700 border-success/20' :
                                    guide.difficulty === 'Medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                    'bg-red-50 text-red-700 border-red-200'
                                  }
                                >
                                  {guide.difficulty}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-gray-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Security Best Practices
                      </h3>
                      <p className="text-gray-700 mb-4">
                        All integrations should follow our security guidelines including API key rotation,
                        encrypted connections, and least privilege access.
                      </p>
                      <Button variant="outline">
                        View Security Guidelines
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}