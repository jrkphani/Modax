import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { 
  Search, 
  Circle,
  PlayCircle,
  BookOpen,
  Clock,
  AlertTriangle,
  Info,
  FileText,
  ChevronRight,
  Download,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react'

interface ImplementationGuide {
  id: string
  title: string
  description: string
  category: string
  steps: number
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  status?: 'new' | 'popular' | 'updated'
}

interface BestPractice {
  id: string
  title: string
  description: string
  category: string
  icon: React.ComponentType<{ className?: string }>
}

interface TroubleshootingItem {
  id: string
  issue: string
  solution: string
  category: string
  severity: 'low' | 'medium' | 'high'
}

export default function ImplementationGuides() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const guides: ImplementationGuide[] = [
    {
      id: '1',
      title: 'Failed POC Resurrection Guide',
      description: 'Step-by-step process to analyze and revive failed proof of concepts',
      category: '90-Day Playbook',
      steps: 8,
      duration: '2-3 hours',
      difficulty: 'Intermediate',
      status: 'popular'
    },
    {
      id: '2',
      title: 'Setting Up Intelligence Fabric',
      description: 'Complete guide to implementing the three-layer architecture',
      category: 'Architecture',
      steps: 12,
      duration: '1-2 days',
      difficulty: 'Advanced',
      status: 'new'
    },
    {
      id: '3',
      title: 'AWS Funding Application Process',
      description: 'Navigate AWS funding programs and maximize your benefits',
      category: 'Funding',
      steps: 6,
      duration: '3-4 hours',
      difficulty: 'Beginner',
      status: 'updated'
    },
    {
      id: '4',
      title: 'Client Onboarding Workflow',
      description: 'Standardized process for smooth client onboarding',
      category: 'Operations',
      steps: 10,
      duration: '1 week',
      difficulty: 'Intermediate'
    },
    {
      id: '5',
      title: 'ROI Calculator Configuration',
      description: 'Set up and customize ROI calculations for your clients',
      category: 'Sales Tools',
      steps: 5,
      duration: '1-2 hours',
      difficulty: 'Beginner'
    },
    {
      id: '6',
      title: 'Enterprise Security Implementation',
      description: 'Implement enterprise-grade security measures',
      category: 'Security',
      steps: 15,
      duration: '3-5 days',
      difficulty: 'Advanced'
    }
  ]

  const bestPractices: BestPractice[] = [
    {
      id: '1',
      title: 'Start with Quick Wins',
      description: 'Identify and implement high-impact, low-effort improvements first',
      category: 'Strategy',
      icon: Zap
    },
    {
      id: '2',
      title: 'Document Everything',
      description: 'Maintain comprehensive documentation throughout the transformation',
      category: 'Process',
      icon: FileText
    },
    {
      id: '3',
      title: 'Regular Stakeholder Updates',
      description: 'Keep all stakeholders informed with weekly progress reports',
      category: 'Communication',
      icon: Target
    },
    {
      id: '4',
      title: 'Iterative Deployment',
      description: 'Deploy in small, manageable increments to reduce risk',
      category: 'Deployment',
      icon: PlayCircle
    }
  ]

  const troubleshootingItems: TroubleshootingItem[] = [
    {
      id: '1',
      issue: 'API authentication failing',
      solution: 'Check API key expiration and ensure proper header formatting',
      category: 'Authentication',
      severity: 'high'
    },
    {
      id: '2',
      issue: 'Slow transformation performance',
      solution: 'Optimize batch sizes and enable parallel processing',
      category: 'Performance',
      severity: 'medium'
    },
    {
      id: '3',
      issue: 'Data sync delays',
      solution: 'Verify webhook configuration and network connectivity',
      category: 'Integration',
      severity: 'medium'
    },
    {
      id: '4',
      issue: 'Missing dependencies error',
      solution: 'Run npm install and verify package.json integrity',
      category: 'Setup',
      severity: 'low'
    }
  ]

  const categories = ['all', '90-Day Playbook', 'Architecture', 'Funding', 'Operations', 'Sales Tools', 'Security']

  // Filter guides based on search and category
  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Filter troubleshooting items
  const filteredTroubleshooting = troubleshootingItems.filter(item =>
    item.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.solution.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Implementation Guides"
          description="Step-by-step guides, best practices, and troubleshooting resources"
        />

        <PageContent>
          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search guides, best practices, issues..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); }}
                className="pl-12 pr-4 h-12 text-base"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => { setSelectedCategory(category); }}
                  className={selectedCategory === category ? 'bg-purple-600 hover:bg-purple-700' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Implementation Guides */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredGuides.map((guide) => (
                <Card key={guide.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {guide.title}
                          {guide.status && (
                            <Badge 
                              variant="secondary"
                              className={
                                guide.status === 'new' ? 'bg-success/5 text-success-700 border-success/20' :
                                guide.status === 'popular' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                'bg-orange-50 text-orange-700 border-orange-200'
                              }
                            >
                              {guide.status}
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {guide.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{guide.steps} steps</span>
                        <Badge variant="outline">{guide.category}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{guide.duration}</span>
                        </div>
                        <Badge 
                          variant="secondary"
                          className={
                            guide.difficulty === 'Beginner' ? 'bg-success/5 text-success-700 border-success/20' :
                            guide.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                            'bg-red-50 text-red-700 border-red-200'
                          }
                        >
                          {guide.difficulty}
                        </Badge>
                      </div>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        Start Guide
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bestPractices.map((practice) => {
                const Icon = practice.icon
                return (
                  <Card key={practice.id} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{practice.title}</h3>
                          <p className="text-sm text-gray-600">{practice.description}</p>
                          <Badge variant="outline" className="mt-2">{practice.category}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Troubleshooting */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Troubleshooting</h2>
            
            <Alert className="mb-6">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Can't find a solution? Contact our support team for personalized assistance.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              {filteredTroubleshooting.map((item) => (
                <Card key={item.id} className="hover:shadow-sm transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                        item.severity === 'high' ? 'text-red-500' :
                        item.severity === 'medium' ? 'text-yellow-500' :
                        'text-blue-500'
                      }`} />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.issue}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.solution}</p>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{item.category}</Badge>
                          <Badge 
                            variant="secondary"
                            className={
                              item.severity === 'high' ? 'bg-red-50 text-red-700 border-red-200' :
                              item.severity === 'medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                              'bg-blue-50 text-blue-700 border-blue-200'
                            }
                          >
                            {item.severity} priority
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Resources */}
          <Card className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="h-6 w-6 text-primary mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Additional Resources
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Download our comprehensive implementation checklist and project templates
                    to ensure successful deployments.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" className="bg-white">
                      <Download className="h-4 w-4 mr-2" />
                      Implementation Checklist
                    </Button>
                    <Button variant="outline" className="bg-white">
                      <Download className="h-4 w-4 mr-2" />
                      Project Templates
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}