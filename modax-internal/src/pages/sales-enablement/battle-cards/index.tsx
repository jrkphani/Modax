import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from 'react'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Search,
  Building,
  Cloud,
  Cpu,
  Users,
  TrendingUp,
  AlertCircle,
  Target,
  ArrowRight,
  Download,
  Eye
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BattleCardsIndex() {
  const [searchQuery, setSearchQuery] = useState('')

  const competitors = [
    {
      name: 'Legacy Consultancies',
      category: 'Traditional SI',
      description: 'Big 4 and traditional system integrators',
      icon: Building,
      strengths: ['Brand recognition', 'Enterprise relationships', 'Large teams'],
      weaknesses: ['Slow delivery', 'High cost', 'POC fatigue'],
      keyDifferentiator: 'We build production systems in 90 days, not 18-month roadmaps',
      winRate: '76%',
      commonScenarios: ['Enterprise transformation RFPs', 'Digital modernization initiatives'],
      link: '/sales-enablement/battle-cards/legacy-consultancies',
      updated: '2 days ago'
    },
    {
      name: 'Cloud Migration Vendors',
      category: 'Cloud Native',
      description: 'AWS/Azure partners focused on lift-and-shift',
      icon: Cloud,
      strengths: ['Technical expertise', 'Cloud partnerships', 'Migration tools'],
      weaknesses: ['No business transformation', 'Technical debt migration'],
      keyDifferentiator: 'We modernize AND migrate, capturing intelligence',
      winRate: '82%',
      commonScenarios: ['Cloud migration projects', 'Infrastructure modernization'],
      link: '/sales-enablement/battle-cards/cloud-vendors',
      updated: '1 week ago'
    },
    {
      name: 'AI/ML Startups',
      category: 'Emerging Tech',
      description: 'VC-backed AI transformation companies',
      icon: Cpu,
      strengths: ['Modern technology', 'Innovation focus', 'Agility'],
      weaknesses: ['No enterprise experience', 'Unproven at scale'],
      keyDifferentiator: 'Enterprise-proven team building AI-native systems',
      winRate: '89%',
      commonScenarios: ['AI transformation initiatives', 'Innovation projects'],
      link: '/sales-enablement/battle-cards/ai-startups',
      updated: '3 days ago'
    },
    {
      name: 'Offshore Development',
      category: 'Cost Players',
      description: 'Low-cost offshore development firms',
      icon: Users,
      strengths: ['Low hourly rates', 'Large teams', 'Follow-the-sun model'],
      weaknesses: ['No domain expertise', 'Communication challenges', 'Quality issues'],
      keyDifferentiator: 'Onshore expertise, fixed-price delivery, knowledge transfer',
      winRate: '91%',
      commonScenarios: ['Cost-driven RFPs', 'Staff augmentation'],
      link: '/sales-enablement/battle-cards/offshore',
      updated: '1 month ago'
    }
  ]

  const competitiveInsights = [
    {
      insight: 'POC Fatigue is Real',
      description: '73% of enterprises have done 3+ POCs in the last 2 years with no production outcomes',
      action: 'Lead with "No POCs, only production"',
      impact: 'High'
    },
    {
      insight: 'Consultancy Frustration Growing',
      description: 'Average enterprise transformation takes 2.5 years and goes 300% over budget',
      action: 'Emphasize 90-day delivery and fixed pricing',
      impact: 'High'
    },
    {
      insight: 'AI Washing Backlash',
      description: 'Enterprises are skeptical of AI claims without proven delivery',
      action: 'Show specific AI use cases, not buzzwords',
      impact: 'Medium'
    },
    {
      insight: 'Knowledge Loss Crisis',
      description: '40% of IT workforce retiring in next 5 years, taking critical knowledge',
      action: 'Position Intelligence Fabric as knowledge preservation',
      impact: 'High'
    }
  ]

  const winLossAnalysis = {
    wins: [
      { reason: 'Production focus resonates', percentage: 34 },
      { reason: '90-day delivery commitment', percentage: 28 },
      { reason: 'Fixed-price model', percentage: 22 },
      { reason: 'Knowledge preservation approach', percentage: 16 }
    ],
    losses: [
      { reason: 'Price perception', percentage: 41 },
      { reason: 'Incumbent relationship', percentage: 29 },
      { reason: 'Preference for big brand', percentage: 18 },
      { reason: 'Timing not right', percentage: 12 }
    ]
  }

  const filteredCompetitors = competitors.filter(comp =>
    searchQuery === '' ||
    comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Battle Cards"
          description="Competitive intelligence to win more deals"
        />

        <PageContent className="space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-gray-200">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">84%</p>
                <p className="text-sm text-gray-600">Overall Win Rate</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">2.3x</p>
                <p className="text-sm text-gray-600">Faster than Competition</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">67%</p>
                <p className="text-sm text-gray-600">Win on Value, Not Price</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600">Competitive Wins This Quarter</p>
              </CardContent>
            </Card>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search competitors..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); }}
              className="pl-10"
            />
          </div>

          {/* Competitor Grid */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Competitor Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCompetitors.map((competitor, index) => {
                const Icon = competitor.icon
                return (
                  <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <Icon className="h-6 w-6 text-gray-700" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{competitor.name}</CardTitle>
                            <CardDescription>{competitor.description}</CardDescription>
                            <Badge variant="outline" className="mt-2">{competitor.category}</Badge>
                          </div>
                        </div>
                        <Badge className="bg-success/10 text-success-800">
                          {competitor.winRate} win rate
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-gray-700 mb-2">Key Differentiator</h4>
                        <p className="text-sm text-gray-600">{competitor.keyDifferentiator}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-sm text-gray-700 mb-1">Their Strengths</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {competitor.strengths.map((strength, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <span className="text-success mt-0.5">+</span>
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-gray-700 mb-1">Their Weaknesses</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {competitor.weaknesses.map((weakness, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <span className="text-red-600 mt-0.5">-</span>
                                {weakness}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <p className="text-xs text-gray-500">Updated {competitor.updated}</p>
                        <Link to={competitor.link}>
                          <Button size="sm" variant="outline">
                            View Full Analysis
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Competitive Insights */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Market Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competitiveInsights.map((insight, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{insight.insight}</h3>
                      <Badge variant={insight.impact === 'High' ? 'default' : 'secondary'}>
                        {insight.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                    <div className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-primary">{insight.action}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Win/Loss Analysis */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>Win/Loss Analysis</CardTitle>
              <CardDescription>Understanding why we win and lose helps us improve</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success/50 rounded-full" />
                    Why We Win
                  </h4>
                  <div className="space-y-3">
                    {winLossAnalysis.wins.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{item.reason}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-success/50 h-2 rounded-full" 
                              style={{ width: `${String(item.percentage)}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900 w-10 text-right">
                            {item.percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    Why We Lose
                  </h4>
                  <div className="space-y-3">
                    {winLossAnalysis.losses.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{item.reason}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-red-500 h-2 rounded-full" 
                              style={{ width: `${String(item.percentage)}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900 w-10 text-right">
                            {item.percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Complete Competitive Intelligence</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Access the full competitive analysis deck with positioning strategies and talk tracks
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link to="/sales-enablement/battle-cards/competitor-analysis">
                    <Button variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      View Full Analysis
                    </Button>
                  </Link>
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download All Battle Cards
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Competitive Wins */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Competitive Wins</h3>
            <div className="space-y-3">
              <Alert className="border-success/20 bg-success/5">
                <AlertCircle className="h-4 w-4 text-success" />
                <AlertDescription className="text-success-800">
                  <strong>Won against Accenture:</strong> Financial services client chose us for 90-day delivery vs 18-month roadmap. Key factor: Production focus.
                </AlertDescription>
              </Alert>
              <Alert className="border-success/20 bg-success/5">
                <AlertCircle className="h-4 w-4 text-success" />
                <AlertDescription className="text-success-800">
                  <strong>Beat AWS ProServe:</strong> Healthcare client valued our application expertise over infrastructure focus. Key factor: Intelligence Fabric.
                </AlertDescription>
              </Alert>
              <Alert className="border-success/20 bg-success/5">
                <AlertCircle className="h-4 w-4 text-success" />
                <AlertDescription className="text-success-800">
                  <strong>Displaced offshore vendor:</strong> Manufacturing client switched after quality issues. Key factor: Onshore expertise with knowledge transfer.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}