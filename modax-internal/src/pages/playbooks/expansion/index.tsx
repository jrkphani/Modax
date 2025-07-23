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
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Target,
  Users,
  DollarSign,
  ArrowRight,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Clock,
  Building,
  Zap,
  Eye,
  Download,
  Play,
  Settings
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ExpansionIndex() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null)

  const successMetrics = {
    account: {
      initialContract: '$150K',
      year1Total: '$650K',
      year1Multiplier: '4.3x',
      year2Total: '$1.5M',
      year2Multiplier: '10x',
      year3Total: '$3M+',
      year3Multiplier: '20x',
      recurringRevenue: '$150K/month'
    },
    velocity: {
      timeToPhase2: '3 months',
      timeToPhase3: '8 months',
      timeToPhase4: '14 months',
      timeToStrategicPartner: '18 months'
    },
    value: {
      processesAutomated: 47,
      ftesRedeployed: 125,
      costSavings: '$2.4M/month',
      revenueImpact: '$3.6M/month',
      roiDelivered: '2,400%'
    },
    relationship: {
      executiveEngagement: 'Monthly',
      npsScore: 87,
      referenceability: 'Active',
      caseStudyPublished: 'Yes',
      coInnovationProjects: 3
    }
  }

  const warningSignsToMonitor = [
    {
      sign: 'Stakeholder turnover',
      impact: 'High',
      action: 'Build relationships with new stakeholders quickly',
      prevention: 'Maintain relationship maps and succession planning'
    },
    {
      sign: 'Budget pressure',
      impact: 'High', 
      action: 'Demonstrate ROI and cost savings achieved',
      prevention: 'Establish value metrics and regular reporting'
    },
    {
      sign: 'Competing priorities',
      impact: 'Medium',
      action: 'Align with strategic initiatives',
      prevention: 'Stay connected to business strategy changes'
    },
    {
      sign: 'Technology shifts',
      impact: 'Medium',
      action: 'Adapt platform to new tech directions',
      prevention: 'Maintain technology roadmap alignment'
    },
    {
      sign: 'M&A activity',
      impact: 'High',
      action: 'Engage with new decision makers',
      prevention: 'Monitor company announcements and industry news'
    }
  ]

  const expansionPhases = [
    {
      phase: 'Phase 1: Initial Success',
      timeline: '0-3 months',
      investment: '$150K',
      focus: 'Single use case delivery',
      metrics: ['70% efficiency gain', '$50K monthly savings', 'User adoption'],
      nextTrigger: 'Users requesting more automation'
    },
    {
      phase: 'Phase 2: Department Scale',
      timeline: '3-8 months', 
      investment: '$300K',
      focus: 'Department transformation',
      metrics: ['5 processes automated', '$200K monthly impact', 'Executive attention'],
      nextTrigger: 'Other departments wanting similar results'
    },
    {
      phase: 'Phase 3: Multi-Department',
      timeline: '8-14 months',
      investment: '$750K', 
      focus: 'Cross-functional processes',
      metrics: ['15 processes automated', '$800K monthly impact', 'Platform approach'],
      nextTrigger: 'Strategic transformation initiative'
    },
    {
      phase: 'Phase 4: Enterprise Platform',
      timeline: '14-24 months',
      investment: '$1.5M+',
      focus: 'Enterprise intelligence platform',
      metrics: ['47 processes automated', '$2.4M monthly savings', 'Competitive advantage'],
      nextTrigger: 'Strategic partnership and co-innovation'
    }
  ]

  const expansionPlaybooks = [
    {
      title: 'Land & Expand Model',
      description: 'Strategic framework for systematic account growth',
      icon: Target,
      link: '/playbooks/expansion/land-expand-model',
      sections: [
        'Trojan Horse Strategy',
        'Value Demonstration Framework',
        'Expansion Trigger Points',
        'Success Story Templates'
      ],
      color: 'bg-primary/5 text-primary',
      popular: true
    },
    {
      title: 'Success Dashboard',
      description: 'Track and communicate value delivery metrics',
      icon: BarChart3,
      link: '/playbooks/expansion/success-dashboard',
      sections: [
        'KPI Framework',
        'Executive Reporting',
        'Value Visualization',
        'Benchmark Tracking'
      ],
      color: 'bg-success/5 text-success-700',
      new: true
    },
    {
      title: 'Relationship Mapping',
      description: 'Build and maintain executive relationships across the enterprise',
      icon: Users,
      link: '/playbooks/expansion/relationship-mapping',
      sections: [
        'Stakeholder Analysis',
        'Influence Networks',
        'Executive Engagement Plans',
        'Champion Development'
      ],
      color: 'bg-blue-50 text-blue-700'
    },
    {
      title: 'Expansion Psychology',
      description: 'Understanding the psychology of account growth and decision making',
      icon: Zap,
      link: '/playbooks/expansion/psychology',
      sections: [
        'Create Pull vs Push',
        'Building Expansion Desire',
        'Overcoming Resistance',
        'Multiplier Effect'
      ],
      color: 'bg-orange-50 text-orange-700'
    }
  ]

  const bestPractices = [
    {
      title: 'Start with the End in Mind',
      description: 'Every initial project is designed as a Trojan Horse for enterprise transformation',
      tips: [
        'Map expansion opportunities during initial discovery',
        'Build architecture that scales from day one',
        'Document adjacent pain points and use cases',
        'Establish relationships beyond initial stakeholders'
      ]
    },
    {
      title: 'Let Success Sell',
      description: 'Metrics and user advocacy are more powerful than sales pitches',
      tips: [
        'Create compelling value dashboards',
        'Document and share success stories',
        'Enable users to become internal champions',
        'Use data to drive expansion conversations'
      ]
    },
    {
      title: 'Think Platform, Not Projects',
      description: 'Position each expansion as building enterprise intelligence capability',
      tips: [
        'Show how new use cases leverage existing infrastructure',
        'Demonstrate network effects and compound value',
        'Position as strategic capability, not tactical solution',
        'Build towards autonomous enterprise vision'
      ]
    },
    {
      title: 'Relationship Before Revenue',
      description: 'Deep executive relationships enable sustainable growth',
      tips: [
        'Invest in relationship building across departments',
        'Understand individual and organizational motivations',
        'Become trusted advisors, not just vendors',
        'Think long-term partnership, not transaction'
      ]
    }
  ]

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Expansion Strategy Playbook"
          description="Grow accounts from initial project to enterprise transformation"
        />

        <PageContent className="space-y-8">
          {/* Expansion Success Dashboard */}
          <Card className="border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                Expansion Success Dashboard
              </CardTitle>
              <CardDescription>
                Track the journey from $150K initial contract to $3M+ enterprise platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Account Growth Metrics */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Account Growth Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-sm text-gray-600">Initial Contract</p>
                    <p className="text-2xl font-bold text-gray-900">{successMetrics.account.initialContract}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-sm text-gray-600">Year 1 Total</p>
                    <p className="text-2xl font-bold text-success-700">{successMetrics.account.year1Total}</p>
                    <p className="text-xs text-success">({successMetrics.account.year1Multiplier})</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-sm text-gray-600">Year 2 Total</p>
                    <p className="text-2xl font-bold text-success-700">{successMetrics.account.year2Total}</p>
                    <p className="text-xs text-success">({successMetrics.account.year2Multiplier})</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-sm text-gray-600">Year 3 Total</p>
                    <p className="text-2xl font-bold text-success-700">{successMetrics.account.year3Total}</p>
                    <p className="text-xs text-success">({successMetrics.account.year3Multiplier})</p>
                  </div>
                </div>
              </div>

              {/* Value Creation & Relationship Metrics */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-3">Value Creation Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processes automated:</span>
                      <span className="font-medium">{successMetrics.value.processesAutomated}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">FTEs redeployed:</span>
                      <span className="font-medium">{successMetrics.value.ftesRedeployed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost savings:</span>
                      <span className="font-medium text-success-700">{successMetrics.value.costSavings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue impact:</span>
                      <span className="font-medium text-success-700">{successMetrics.value.revenueImpact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ROI delivered:</span>
                      <span className="font-medium text-primary">{successMetrics.value.roiDelivered}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-3">Relationship Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Executive engagement:</span>
                      <span className="font-medium">{successMetrics.relationship.executiveEngagement}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">NPS score:</span>
                      <span className="font-medium text-success-700">{successMetrics.relationship.npsScore}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reference-ability:</span>
                      <Badge variant="secondary" className="text-xs">{successMetrics.relationship.referenceability}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Case study published:</span>
                      <Badge className="text-xs bg-success/10 text-success-800">{successMetrics.relationship.caseStudyPublished}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Co-innovation projects:</span>
                      <span className="font-medium">{successMetrics.relationship.coInnovationProjects}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warning Signs Monitor */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Warning Signs to Monitor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {warningSignsToMonitor.map((warning, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{warning.sign}</h3>
                      <Badge variant={warning.impact === 'High' ? 'destructive' : 'secondary'}>
                        {warning.impact} Impact
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Action:</span>
                        <p className="text-gray-600 mt-1">{warning.action}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Prevention:</span>
                        <p className="text-gray-600 mt-1">{warning.prevention}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expansion Phase Timeline */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Expansion Phase Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expansionPhases.map((phase, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{phase.phase}</CardTitle>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {phase.timeline}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {phase.investment}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">{`Phase ${index + 1}`}</Badge>
                    </div>
                    <CardDescription className="mt-2">{phase.focus}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Key Metrics:</h4>
                      <ul className="space-y-1">
                        {phase.metrics.map((metric, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-1">
                            <CheckCircle className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <h4 className="font-medium text-sm text-gray-700 mb-1">Next Phase Trigger:</h4>
                      <p className="text-sm text-primary font-medium">{phase.nextTrigger}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expansion Playbook Sections */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Expansion Playbooks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expansionPlaybooks.map((playbook, index) => {
                const Icon = playbook.icon
                return (
                  <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${playbook.color}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{playbook.title}</CardTitle>
                            {playbook.popular && <Badge className="mt-1">Popular</Badge>}
                            {playbook.new && <Badge variant="secondary" className="mt-1">New</Badge>}
                          </div>
                        </div>
                      </div>
                      <CardDescription className="mt-2">{playbook.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-gray-700 mb-2">Sections:</h4>
                        <ul className="space-y-1">
                          {playbook.sections.map((section, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-1">
                              <span className="text-primary mt-0.5">•</span>
                              {section}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link to={playbook.link}>
                        <Button className="w-full">
                          View Playbook
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Best Practices */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Expansion Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bestPractices.map((practice, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{practice.title}</CardTitle>
                    <CardDescription className="text-sm">{practice.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {practice.tips.map((tip, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <Zap className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* The Expansion Mindset */}
          <Card className="border-primary/20 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                The Expansion Mindset
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Remember:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      Every project is a Trojan Horse
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      Success is the best salesperson
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      Users pull harder than salespeople push
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      Value compounds exponentially
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      Partnerships outlast projects
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">The Ultimate Goal:</h3>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-white rounded-lg border">
                      <p className="font-medium text-gray-900">Transform ModAx clients from:</p>
                      <p className="text-gray-600">"AI experiment customers" → "AI-native enterprises"</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border">
                      <p className="font-medium text-gray-900">Transform ModAx from:</p>
                      <p className="text-gray-600">"Project vendor" → "Strategic transformation partner"</p>
                    </div>
                  </div>
                  <Alert className="mt-4 border-primary/20 bg-white">
                    <AlertDescription className="text-primary">
                      The path from $150K to $3M+ isn't about selling more—it's about delivering exponentially more value.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Ready to accelerate account expansion?</p>
              <p className="text-sm text-gray-600">Access templates, frameworks, and proven methodologies</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Templates
              </Button>
              <Button>
                <Play className="mr-2 h-4 w-4" />
                View Training
              </Button>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}