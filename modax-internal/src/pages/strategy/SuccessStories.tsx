import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, PageContainer, PageHeader, PageContent } from '@/components/layout/PageLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  ArrowLeft, 
  Trophy,
  TrendingUp,
  Users,
  Building,
  DollarSign,
  Clock,
  CheckCircle,
  Zap,
  BarChart3,
  Target,
  Brain,
  Shield,
  ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SuccessStories() {
  const navigate = useNavigate()
  const [selectedStory, setSelectedStory] = useState('valuemax')

  const stories = {
    valuemax: {
      company: 'Valuemax',
      industry: 'Financial Services',
      region: 'Singapore',
      logo: 'V',
      revenue: '$12M+',
      roi: '300%',
      timeline: '12 months',
      challenge: {
        title: 'Failed Customer Service Chatbot',
        description: 'After 6 months and $500K invested, their GenAI chatbot POC couldn\'t handle real customer queries, failed security audits, and provided inconsistent responses.',
        stats: ['73% accuracy rate', '2-minute response time', 'No integration capability']
      },
      solution: {
        approach: 'We performed an experiment autopsy, rebuilt with enterprise security, connected to real customer data, and launched in 90 days.',
        milestones: [
          { week: 'Week 1-2', task: 'Analyzed failure points and data requirements' },
          { week: 'Week 3-8', task: 'Rebuilt with ModAx platform and security-first approach' },
          { week: 'Week 9-12', task: 'Launched production system handling 10K+ queries daily' }
        ]
      },
      results: {
        immediate: ['95% query resolution', '15-second response time', '60% cost reduction'],
        expansion: ['Document processing system', 'Fraud detection AI', 'Customer analytics platform', 'Predictive lending models', 'Compliance automation'],
        impact: 'What started as one failed chatbot became an enterprise-wide AI transformation'
      },
      quote: {
        text: 'ModAx didn\'t just fix our chatbot - they showed us how to build an AI empire. Every department now has AI capabilities.',
        author: 'CTO, Valuemax',
        role: 'Chief Technology Officer'
      }
    },
    techcorp: {
      company: 'TechCorp Asia',
      industry: 'Manufacturing',
      region: 'Malaysia',
      logo: 'T',
      revenue: '$8M+',
      roi: '280%',
      timeline: '10 months',
      challenge: {
        title: 'Abandoned Predictive Maintenance Experiment',
        description: 'Their IoT-based predictive maintenance POC couldn\'t scale beyond pilot factory, lacked real-time processing, and couldn\'t integrate with existing systems.',
        stats: ['Single factory pilot', '48-hour prediction lag', 'Manual data export']
      },
      solution: {
        approach: 'Resurrected the POC with real-time data pipelines, edge computing integration, and enterprise-grade scalability.',
        milestones: [
          { week: 'Week 1-2', task: 'Mapped integration points and data flows' },
          { week: 'Week 3-8', task: 'Built scalable architecture with edge processing' },
          { week: 'Week 9-12', task: 'Deployed across 3 factories with live monitoring' }
        ]
      },
      results: {
        immediate: ['45% reduction in downtime', 'Real-time anomaly detection', '$2M annual savings'],
        expansion: ['Quality control AI', 'Supply chain optimization', 'Energy efficiency system', 'Worker safety monitoring', 'Production planning AI'],
        impact: 'Transformed from reactive maintenance to intelligent manufacturing operations'
      },
      quote: {
        text: 'We thought our POC was dead money. ModAx turned it into our competitive advantage. Now we\'re the smartest factory in Asia.',
        author: 'COO, TechCorp Asia',
        role: 'Chief Operating Officer'
      }
    },
    healthfirst: {
      company: 'HealthFirst',
      industry: 'Healthcare',
      region: 'India',
      logo: 'H',
      revenue: '$15M+',
      roi: '350%',
      timeline: '14 months',
      challenge: {
        title: 'Stalled Patient Analytics Platform',
        description: 'Complex healthcare data, privacy concerns, and regulatory requirements killed their patient analytics POC after 8 months of development.',
        stats: ['HIPAA compliance issues', 'Siloed data sources', 'No clinical validation']
      },
      solution: {
        approach: 'Rebuilt with healthcare-specific security, unified data architecture, and clinician-in-the-loop validation.',
        milestones: [
          { week: 'Week 1-2', task: 'Compliance audit and data privacy framework' },
          { week: 'Week 3-8', task: 'HIPAA-compliant platform with encrypted pipelines' },
          { week: 'Week 9-12', task: 'Clinical validation and phased rollout' }
        ]
      },
      results: {
        immediate: ['60% faster diagnoses', 'HIPAA compliant', '40% reduction in readmissions'],
        expansion: ['Drug interaction AI', 'Clinical trial matching', 'Resource optimization', 'Telemedicine enhancement', 'Insurance automation'],
        impact: 'Became the leading AI-powered healthcare provider in the region'
      },
      quote: {
        text: 'Every hospital has failed AI experiments. ModAx showed us how to turn failure into a platform for saving lives.',
        author: 'CMO, HealthFirst',
        role: 'Chief Medical Officer'
      }
    }
  }

  const currentStory = stories[selectedStory as keyof typeof stories]

  const additionalStories = [
    {
      company: 'RetailMax',
      industry: 'Retail',
      challenge: 'Failed inventory prediction model',
      outcome: '35% reduction in stockouts',
      value: '$5M+ saved annually'
    },
    {
      company: 'LogiTech Solutions',
      industry: 'Logistics',
      challenge: 'Abandoned route optimization AI',
      outcome: '25% improvement in delivery times',
      value: '$7M+ contract'
    },
    {
      company: 'EduSmart',
      industry: 'Education',
      challenge: 'Stalled personalized learning platform',
      outcome: '40% better student outcomes',
      value: '$4M+ implementation'
    }
  ]

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
              title="Success Stories"
              description="Real enterprises. Real transformations. Real results."
              actions={
                <Badge variant="outline" className="text-lg px-3 py-1">
                  <Trophy className="mr-1 h-4 w-4" />
                  12+ Transformations
                </Badge>
              }
            />
          </div>

          {/* Featured Success Stories */}
          <Tabs value={selectedStory} onValueChange={setSelectedStory} className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              {Object.entries(stories).map(([key, story]) => (
                <TabsTrigger key={key} value={key} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {story.logo}
                    </div>
                    <span className="font-medium">{story.company}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {story.industry}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedStory} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Story Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Challenge */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-red-500" />
                        <span>The Challenge</span>
                      </CardTitle>
                      <CardDescription>{currentStory.challenge.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{currentStory.challenge.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {currentStory.challenge.stats.map((stat, idx) => (
                          <Badge key={idx} variant="outline" className="bg-red-50">
                            {stat}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Solution */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Zap className="h-5 w-5 text-emerald-500" />
                        <span>The Solution</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{currentStory.solution.approach}</p>
                      <div className="space-y-4">
                        {currentStory.solution.milestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Badge variant="secondary" className="mt-0.5">
                              {milestone.week}
                            </Badge>
                            <p className="text-gray-600">{milestone.task}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Results */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Trophy className="h-5 w-5 text-primary" />
                        <span>The Results</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-3">Immediate Impact</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {currentStory.results.immediate.map((result, idx) => (
                              <div key={idx} className="flex items-center space-x-2 bg-gray-50 p-3 rounded">
                                <CheckCircle className="h-4 w-4 text-emerald-500" />
                                <span className="text-sm">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-3">Expansion Journey</h4>
                          <div className="flex flex-wrap gap-2">
                            {currentStory.results.expansion.map((system, idx) => (
                              <Badge key={idx} variant="outline" className="bg-primary/5">
                                {system}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="text-gray-700 italic">{currentStory.results.impact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quote */}
                  <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                    <CardContent className="pt-6">
                      <blockquote className="space-y-3">
                        <p className="text-lg italic text-gray-700">"{currentStory.quote.text}"</p>
                        <footer className="text-sm">
                          <cite className="not-italic">
                            <span className="font-semibold">{currentStory.quote.author}</span>
                            <span className="text-gray-600"> • {currentStory.quote.role}</span>
                          </cite>
                        </footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>

                {/* Metrics Sidebar */}
                <div className="space-y-6">
                  {/* Company Overview */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Company Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600">Industry</p>
                        <p className="font-semibold">{currentStory.industry}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Region</p>
                        <p className="font-semibold">{currentStory.region}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Timeline</p>
                        <p className="font-semibold">{currentStory.timeline}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Key Metrics */}
                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">Key Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="text-2xl font-bold text-primary">{currentStory.revenue}</p>
                        <p className="text-sm text-gray-600">Contract Value</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <TrendingUp className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-emerald-500">{currentStory.roi}</p>
                        <p className="text-sm text-gray-600">Return on Investment</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
                        <p className="text-2xl font-bold text-secondary">{currentStory.timeline}</p>
                        <p className="text-sm text-gray-600">To Full Platform</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Similar Stories */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Similar Transformations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => navigate('/case-studies')}
                      >
                        View All Case Studies
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Additional Success Stories */}
          <section>
            <h2 className="text-2xl font-bold mb-6">More Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalStories.map((story, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{story.industry}</Badge>
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{story.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Challenge</p>
                        <p className="text-sm text-gray-600">{story.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Outcome</p>
                        <p className="text-sm text-gray-600">{story.outcome}</p>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="font-bold text-primary">{story.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Your Failed POC Could Be Next</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Every success story started with a failure. Let us show you how to turn your 
                  abandoned experiments into enterprise-wide transformation.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={() => navigate('/90-day-playbook')}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Start Your 90-Day Sprint
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('/sales-enablement/battle-cards')}
                  >
                    <Target className="mr-2 h-5 w-5" />
                    Access Battle Cards
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