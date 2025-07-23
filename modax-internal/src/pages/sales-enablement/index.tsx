import React, { useState } from 'react'
import { 
  PageContainer, 
  PageHeader 
} from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Calculator, 
  Shield, 
  ArrowRight,
  Rocket,
  Target,
  DollarSign,
  Search,
  Clock,
  TrendingUp,
  Users,
  Download,
  Play,
  BookOpen,
  Zap
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SalesEnablementIndex() {
  const [searchQuery, setSearchQuery] = useState('')

  const sections = [
    {
      title: 'Quick Start',
      description: 'Essential tools to start selling immediately',
      icon: Rocket,
      link: '/sales-enablement/quick-start',
      items: [
        'Elevator Pitches',
        'Discovery Scripts',
        'Objection Handling'
      ],
      color: 'bg-primary/5 text-primary',
      recent: true
    },
    {
      title: 'Battle Cards',
      description: 'Competitive intelligence and positioning',
      icon: Shield,
      link: '/sales-enablement/battle-cards',
      items: [
        'Competitor Analysis',
        'Win/Loss Insights',
        'Positioning Guides'
      ],
      color: 'bg-blue-50 text-blue-700'
    },
    {
      title: 'Pitch Decks',
      description: 'Presentation materials for every audience',
      icon: FileText,
      link: '/sales-enablement/pitch-decks',
      items: [
        'Executive Deck',
        'Technical Deep Dive',
        'ROI-Focused Deck'
      ],
      color: 'bg-success/5 text-success-700'
    },
    {
      title: 'Tools & Calculators',
      description: 'Interactive tools to demonstrate value',
      icon: Calculator,
      link: '/sales-enablement/tools',
      items: [
        'ROI Calculator',
        'AWS Funding Calculator',
        'Pricing Configurator'
      ],
      color: 'bg-orange-50 text-orange-700',
      popular: true
    }
  ]

  const recentUpdates = [
    {
      title: 'New Objection Handler Added',
      description: 'Updated responses for "We need enterprise scale" objection',
      time: '2 hours ago',
      type: 'quick-start'
    },
    {
      title: 'AWS Funding Calculator Updated',
      description: 'Now includes MAP 2.0 funding scenarios',
      time: '1 day ago',
      type: 'tools'
    },
    {
      title: 'Competitor Analysis: Legacy Consultancies',
      description: 'Fresh insights from Q4 2024 wins',
      time: '3 days ago',
      type: 'battle-cards'
    },
    {
      title: 'Executive Deck Refresh',
      description: 'New case studies and success metrics added',
      time: '1 week ago',
      type: 'pitch-decks'
    }
  ]

  const popularResources = [
    {
      title: 'ROI Calculator',
      description: 'Most used tool - 89% close rate when used',
      icon: Calculator,
      link: '/sales-enablement/tools/roi-calculator',
      uses: '156 this month'
    },
    {
      title: '90-Second Elevator Pitch',
      description: 'Perfect for executive intros',
      icon: Zap,
      link: '/sales-enablement/quick-start/elevator-pitches',
      uses: '134 this month'
    },
    {
      title: 'Discovery Call Script',
      description: 'Proven framework for qualification',
      icon: Target,
      link: '/sales-enablement/quick-start/discovery-scripts',
      uses: '98 this month'
    },
    {
      title: 'Legacy Vendor Battle Card',
      description: 'Win against the big consultancies',
      icon: Shield,
      link: '/sales-enablement/battle-cards',
      uses: '87 this month'
    }
  ]

  const quickStats = [
    { label: 'Avg Deal Size', value: '$250K', trend: '+15%' },
    { label: 'Close Rate', value: '32%', trend: '+8%' },
    { label: 'Sales Cycle', value: '45 days', trend: '-12%' },
    { label: 'Pipeline Value', value: '$4.2M', trend: '+23%' }
  ]

  const filteredSections = sections.filter(section =>
    searchQuery === '' || 
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.items.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <PageContainer className="py-6">
      <PageHeader
        title="Sales Enablement Hub"
        description="Everything you need to accelerate deals and win more business"
      />

      <div className="space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <Badge variant={stat.trend.startsWith('+') ? 'default' : 'secondary'} className="text-xs">
                      {stat.trend}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search sales resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Main Sections Grid */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Sales Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSections.map((section, index) => {
                const Icon = section.icon
                return (
                  <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${section.color}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{section.title}</CardTitle>
                            {section.recent && <Badge variant="secondary" className="mt-1">Recently Updated</Badge>}
                            {section.popular && <Badge className="mt-1">Popular</Badge>}
                          </div>
                        </div>
                      </div>
                      <CardDescription className="mt-2">{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1 h-1 bg-gray-400 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link to={section.link}>
                        <Button variant="outline" className="w-full">
                          Explore {section.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Popular Resources */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Most Popular Resources
              </h2>
              <div className="space-y-3">
                {popularResources.map((resource, index) => {
                  const Icon = resource.icon
                  return (
                    <Link key={index} to={resource.link}>
                      <Card className="border-gray-200 hover:shadow-sm transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-gray-50 rounded-lg">
                              <Icon className="h-5 w-5 text-gray-700" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">{resource.title}</h3>
                              <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                              <p className="text-xs text-gray-500 mt-2">{resource.uses}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Recent Updates */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Updates
              </h2>
              <div className="space-y-3">
                {recentUpdates.map((update, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{update.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{update.description}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <Badge variant="outline" className="text-xs">{update.type}</Badge>
                            <p className="text-xs text-gray-500">{update.time}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <Card className="border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Need something specific?</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Can't find what you're looking for? Let us know what resources would help you close more deals.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Request Resource
                  </Button>
                  <Button>
                    <Play className="mr-2 h-4 w-4" />
                    Watch Training
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>
    </PageContainer>
  )
}