import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, PageContainer, PageHeader, PageContent } from '@/components/layout/PageLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  ArrowLeft, 
  ArrowRight,
  Shield, 
  Target, 
  DollarSign,
  Zap,
  Building,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  Users,
  Brain,
  Rocket,
  ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ThreeActJourney() {
  const navigate = useNavigate()
  const [activeAct, setActiveAct] = useState('act1')

  const acts = {
    act1: {
      title: 'The Graveyard',
      subtitle: 'Where Every Enterprise Stands',
      icon: Shield,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      stat: '73%',
      statLabel: 'of GenAI POCs never reach production',
      overview: 'Every enterprise has a graveyard of failed GenAI experiments. $2.1 billion worth in ASEAN alone. Another $3.2 billion in India.',
      problems: [
        {
          title: 'The IT Security Wall',
          description: 'Impressive demos can\'t pass enterprise security reviews. What works in a sandbox dies in production.',
          impact: '45% of POCs fail here',
          icon: Shield
        },
        {
          title: 'The Data Desert', 
          description: 'POCs built on sample data crumble when they meet real-world complexity. Clean CSV files don\'t exist in enterprises.',
          impact: '32% struggle with data',
          icon: Target
        },
        {
          title: 'The ROI Fog',
          description: '"It could save millions" doesn\'t get budget approval. CFOs need proven returns, not potential value.',
          impact: '68% lack clear ROI',
          icon: DollarSign
        },
        {
          title: 'The Integration Impossibility',
          description: 'Standalone experiments can\'t talk to legacy systems. Without integration, there\'s no transformation.',
          impact: '51% can\'t integrate',
          icon: Building
        }
      ],
      opportunity: {
        title: 'The Hidden Truth',
        description: 'These "failures" are actually validated experiments waiting for the right approach. Every dead POC proves demand. Every frustrated stakeholder wants success. Every sunk cost is a future investment.',
        cta: 'Position yourself as the resurrector, not another experimenter.'
      }
    },
    act2: {
      title: 'The Trojan Horse',
      subtitle: 'Our Strategic Entry Method',
      icon: Zap,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      stat: '90',
      statLabel: 'days to production sprint',
      overview: 'While competitors pitch big transformations that scare enterprises, we slip in through a side door they\'ve already opened.',
      phases: [
        {
          phase: 'Week 1-2',
          title: 'The Experiment Autopsy',
          tasks: [
            'Examine their POC graveyard with forensic precision',
            'Identify which experiment had the most promise',
            'Understand exactly where and why it failed',
            'Position yourself as the expert who understands their pain'
          ],
          deliverable: 'Resurrection Report',
          icon: Brain
        },
        {
          phase: 'Week 3-8',
          title: 'The Resurrection',
          tasks: [
            'Enterprise security baked in from day one',
            'Real data connections, not sample sets',
            'Measured ROI, not projected value',
            'Full integration with existing systems'
          ],
          deliverable: 'Production-Ready System',
          icon: Rocket
        },
        {
          phase: 'Week 9-12',
          title: 'The Production Launch',
          tasks: [
            'Handle real volume at enterprise scale',
            'Pass IT audit and security review',
            'Deliver measurable value from day one',
            'Create internal champions for expansion'
          ],
          deliverable: 'Live System + Expansion Plan',
          icon: TrendingUp
        }
      ],
      methodology: {
        title: 'Why This Works',
        points: [
          'Low risk entry point - fixing what they already tried',
          'Fixed scope and timeline - no endless discovery',
          'Proven value before expansion - build trust first',
          'Creates urgency - resurrect before competitors arrive'
        ]
      }
    },
    act3: {
      title: 'The Empire',
      subtitle: 'From Beachhead to Victory',
      icon: Building,
      color: 'text-primary',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary/20',
      stat: '10x',
      statLabel: 'One success becomes ten',
      overview: 'One resurrected POC becomes a production system. But more importantly, we\'re now inside their environment, understanding their data, earning their trust.',
      phases: [
        {
          phase: 'Phase 1',
          timeline: 'Months 1-3',
          title: 'The First Victory',
          description: 'One resurrected POC becomes a production system. Internal champions emerge. Success stories spread.',
          metrics: ['1 live system', '$150K initial', '3-5 champions'],
          icon: CheckCircle
        },
        {
          phase: 'Phase 2',
          timeline: 'Months 4-6',
          title: 'The Expansion',
          description: 'Success breeds appetite. New use cases emerge. Budget increases. Team grows.',
          metrics: ['3-5 systems', '$500K+ revenue', '10+ stakeholders'],
          icon: TrendingUp
        },
        {
          phase: 'Phase 3',
          timeline: 'Months 7-12',
          title: 'The Platform',
          description: 'Individual successes connect. Intelligence fabric emerges. Enterprise transformation begins.',
          metrics: ['10+ systems', '$1.5M+ revenue', 'C-suite sponsor'],
          icon: Brain
        },
        {
          phase: 'Phase 4',
          timeline: 'Year 2+',
          title: 'The Empire',
          description: 'Enterprise-wide transformation. Competitive advantage locked in. Continuous innovation.',
          metrics: ['30+ systems', '$3M+ annually', 'Strategic partner'],
          icon: Building
        }
      ],
      caseStudy: {
        company: 'Valuemax',
        journey: [
          { phase: 'Start', detail: 'Failed customer service chatbot' },
          { phase: '90 days', detail: 'Working support system' },
          { phase: '6 months', detail: '5 AI applications' },
          { phase: '12 months', detail: 'Intelligence platform' },
          { phase: 'Today', detail: '$12M+ contract, 300% ROI' }
        ]
      }
    }
  }

  const currentAct = acts[activeAct as keyof typeof acts]

  return (
    <PageLayout>
      <PageContent>
        <PageContainer size="xl">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/strategy')}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Strategy Overview
            </Button>
            
            <PageHeader
              title="The Three-Act Transformation"
              description="Our proven methodology for turning failed experiments into AI empires"
            />
          </div>

          {/* Act Navigation Tabs */}
          <Tabs value={activeAct} onValueChange={setActiveAct} className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="act1" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Act 1: The Graveyard</span>
              </TabsTrigger>
              <TabsTrigger value="act2" className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Act 2: The Trojan Horse</span>
              </TabsTrigger>
              <TabsTrigger value="act3" className="flex items-center space-x-2">
                <Building className="h-4 w-4" />
                <span>Act 3: The Empire</span>
              </TabsTrigger>
            </TabsList>

            {/* Act 1 Content */}
            <TabsContent value="act1" className="mt-6">
              <div className="space-y-8">
                {/* Overview Card */}
                <Card className={cn(currentAct.borderColor)}>
                  <CardHeader className={currentAct.bgColor}>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl flex items-center space-x-2">
                          <currentAct.icon className={cn("h-6 w-6", currentAct.color)} />
                          <span>{currentAct.title}</span>
                        </CardTitle>
                        <CardDescription className="text-base">{currentAct.subtitle}</CardDescription>
                      </div>
                      <div className="text-center">
                        <div className={cn("text-4xl font-bold", currentAct.color)}>{currentAct.stat}</div>
                        <p className="text-sm text-gray-600">{currentAct.statLabel}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 leading-relaxed">{currentAct.overview}</p>
                  </CardContent>
                </Card>

                {/* Problems Grid */}
                <div>
                  <h3 className="text-xl font-bold mb-4">The Four Horsemen of POC Death</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {acts.act1.problems.map((problem, idx) => (
                      <Card key={idx} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start space-x-3">
                            <problem.icon className="h-8 w-8 text-red-500 mt-1" />
                            <div>
                              <CardTitle className="text-lg">{problem.title}</CardTitle>
                              <Badge variant="outline" className="mt-2">
                                {problem.impact}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{problem.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Opportunity */}
                <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <span>{acts.act1.opportunity.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{acts.act1.opportunity.description}</p>
                    <p className="font-semibold text-red-600">{acts.act1.opportunity.cta}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Act 2 Content */}
            <TabsContent value="act2" className="mt-6">
              <div className="space-y-8">
                {/* Overview Card */}
                <Card className={cn(currentAct.borderColor)}>
                  <CardHeader className={currentAct.bgColor}>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl flex items-center space-x-2">
                          <currentAct.icon className={cn("h-6 w-6", currentAct.color)} />
                          <span>{currentAct.title}</span>
                        </CardTitle>
                        <CardDescription className="text-base">{currentAct.subtitle}</CardDescription>
                      </div>
                      <div className="text-center">
                        <div className={cn("text-4xl font-bold", currentAct.color)}>{currentAct.stat}</div>
                        <p className="text-sm text-gray-600">{currentAct.statLabel}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 leading-relaxed">{currentAct.overview}</p>
                  </CardContent>
                </Card>

                {/* Sprint Phases */}
                <div>
                  <h3 className="text-xl font-bold mb-4">The 90-Day Production Sprint</h3>
                  <div className="space-y-6">
                    {acts.act2.phases.map((phase, idx) => (
                      <Card key={idx} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <phase.icon className="h-8 w-8 text-emerald-500" />
                              <div>
                                <Badge variant="secondary" className="mb-1">{phase.phase}</Badge>
                                <CardTitle className="text-lg">{phase.title}</CardTitle>
                              </div>
                            </div>
                            <Badge className="bg-emerald-100 text-emerald-700">
                              {phase.deliverable}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {phase.tasks.map((task, taskIdx) => (
                              <li key={taskIdx} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span className="text-sm text-gray-600">{task}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Why This Works */}
                <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
                  <CardHeader>
                    <CardTitle>{acts.act2.methodology.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {acts.act2.methodology.points.map((point, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Zap className="h-5 w-5 text-emerald-500 mt-0.5" />
                          <p className="text-gray-700">{point}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Act 3 Content */}
            <TabsContent value="act3" className="mt-6">
              <div className="space-y-8">
                {/* Overview Card */}
                <Card className={cn(currentAct.borderColor)}>
                  <CardHeader className={currentAct.bgColor}>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl flex items-center space-x-2">
                          <currentAct.icon className={cn("h-6 w-6", currentAct.color)} />
                          <span>{currentAct.title}</span>
                        </CardTitle>
                        <CardDescription className="text-base">{currentAct.subtitle}</CardDescription>
                      </div>
                      <div className="text-center">
                        <div className={cn("text-4xl font-bold", currentAct.color)}>{currentAct.stat}</div>
                        <p className="text-sm text-gray-600">{currentAct.statLabel}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 leading-relaxed">{currentAct.overview}</p>
                  </CardContent>
                </Card>

                {/* Evolution Phases */}
                <div>
                  <h3 className="text-xl font-bold mb-4">The Intelligence Evolution</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {acts.act3.phases.map((phase, idx) => (
                      <Card key={idx} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <Badge variant="outline" className="mb-2">{phase.timeline}</Badge>
                              <CardTitle className="text-lg flex items-center space-x-2">
                                <phase.icon className="h-5 w-5 text-primary" />
                                <span>{phase.title}</span>
                              </CardTitle>
                            </div>
                            <span className="text-sm font-medium text-gray-500">{phase.phase}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{phase.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {phase.metrics.map((metric, metricIdx) => (
                              <Badge key={metricIdx} variant="secondary">
                                {metric}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle>Real-World Example: {acts.act3.caseStudy.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                      <div className="space-y-6">
                        {acts.act3.caseStudy.journey.map((step, idx) => (
                          <div key={idx} className="flex items-start space-x-4">
                            <div className="relative">
                              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {idx + 1}
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{step.phase}</p>
                              <p className="text-gray-600">{step.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Navigation Footer */}
          <Card className="mt-8 bg-gray-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Ready to start your journey?</h3>
                  <p className="text-gray-600">Access our proven playbooks and tools</p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/90-day-playbook')}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    90-Day Playbook
                  </Button>
                  <Button 
                    onClick={() => navigate('/sales-enablement/battle-cards')}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Battle Cards
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </PageContainer>
      </PageContent>
    </PageLayout>
  )
}