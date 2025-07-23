import React, { useState } from 'react'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Target,
  TrendingUp,
  Users,
  Building,
  Cpu,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  MessageCircle,
  Calendar,
  BarChart3,
  Zap,
  Shield,
  DollarSign
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LandExpandModel() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null)

  const referenceArchitecture = {
    presentationLayer: [
      'Executive Dashboard',
      'Operational Command Center',
      'Employee Portal', 
      'External APIs'
    ],
    intelligenceLayer: [
      'Prediction Engine',
      'Optimization Engine',
      'Automation Engine',
      'Learning Engine'
    ],
    agentOrchestration: [
      'Customer Agent',
      'Operations Agent',
      'Finance Agent',
      'HR Agent',
      'Supply Chain Agent'
    ],
    dataIntegration: [
      'Real-time Streams',
      'Batch ETL',
      'API Gateway',
      'Event Bus',
      'File Transfer'
    ],
    securityGovernance: [
      'Identity Management',
      'Access Control',
      'Audit Logging',
      'Data Privacy',
      'Model Governance'
    ]
  }

  const expansionTriggers = [
    {
      trigger: 'User Requests',
      description: 'End users asking for more automation',
      timing: '2-4 weeks post-deployment',
      strength: 'High',
      examples: [
        '"Can this chatbot help with invoicing too?"',
        '"Other departments want this same capability"',
        '"What else can we automate like this?"'
      ],
      response: 'Document all requests, prioritize by impact and complexity'
    },
    {
      trigger: 'Executive Attention',
      description: 'Leadership notices success and asks about scaling',
      timing: '1-2 months post-deployment',
      strength: 'Very High',
      examples: [
        '"Board is asking about enterprise rollout"',
        '"CEO wants to know our automation roadmap"',
        '"CFO interested in company-wide ROI potential"'
      ],
      response: 'Prepare enterprise vision presentation and roadmap'
    },
    {
      trigger: 'Competitive Pressure',
      description: 'Market dynamics creating urgency for innovation',
      timing: 'Ongoing',
      strength: 'Medium',
      examples: [
        '"Competitors are getting ahead with AI"',
        '"Industry is moving faster than us"',
        '"We need to differentiate ourselves"'
      ],
      response: 'Position as competitive advantage and market leadership'
    },
    {
      trigger: 'Adjacent Opportunities',
      description: 'Related processes begging for similar treatment',
      timing: '1-3 months post-deployment',
      strength: 'High',
      examples: [
        'Similar data patterns in other departments',
        'Downstream processes needing automation',
        'Integration opportunities with existing systems'
      ],
      response: 'Map connected processes and present holistic approach'
    },
    {
      trigger: 'ROI Achievement',
      description: 'Strong financial results create appetite for more',
      timing: '2-6 months post-deployment',
      strength: 'Very High',
      examples: [
        'Payback period achieved ahead of schedule',
        'Cost savings exceeding projections',
        'Productivity gains clearly measurable'
      ],
      response: 'Use success metrics to justify larger investment'
    }
  ]

  const expansionObstacles = [
    {
      obstacle: '"We need to see more results first"',
      category: 'Risk Aversion',
      response: {
        acknowledge: 'Absolutely, let\'s review the metrics',
        quantify: 'Show 3-month, 6-month trends',
        project: '"At this rate, by month 6..."',
        compromise: '"How about a small pilot in parallel?"'
      }
    },
    {
      obstacle: '"Budget is tight this year"',
      category: 'Financial',
      response: {
        acknowledge: 'We understand budget pressures',
        quantify: 'Current savings can fund expansion',
        project: 'Let\'s design a self-funding approach',
        compromise: 'Success-based pricing available'
      }
    },
    {
      obstacle: '"IT is overwhelmed"',
      category: 'Resource',
      response: {
        acknowledge: 'That\'s why our platform approach helps',
        quantify: 'No new infrastructure required',
        project: 'We handle the heavy lifting',
        compromise: 'Focus on highest impact first'
      }
    },
    {
      obstacle: '"Change fatigue in organization"',
      category: 'Cultural',
      response: {
        acknowledge: 'Change management is critical',
        quantify: 'Our phased approach minimizes disruption',
        project: 'Building on existing wins',
        compromise: 'Users are asking for more'
      }
    },
    {
      obstacle: '"New leadership/strategy"',
      category: 'Political',
      response: {
        acknowledge: 'Let\'s understand new priorities',
        quantify: 'Our platform supports new direction',
        project: 'Current success validates approach',
        compromise: 'We evolve with your strategy'
      }
    }
  ]

  const valueMultiplier = [
    {
      phase: 'Phase 1: Linear Value',
      processes: '1 Process',
      value: '1X Value',
      characteristics: [
        'Isolated improvement',
        'Limited scope',
        'Single stakeholder'
      ]
    },
    {
      phase: 'Phase 2: Network Effects',
      processes: '5 Processes',
      value: '10X Value',
      characteristics: [
        'Process connections',
        'Data insights',
        'Team transformation'
      ]
    },
    {
      phase: 'Phase 3: Exponential Growth',
      processes: '15 Processes',
      value: '50X Value',
      characteristics: [
        'Predictive capabilities',
        'Autonomous decisions',
        'Cultural shift'
      ]
    },
    {
      phase: 'Phase 4: Transformation',
      processes: '50 Processes',
      value: '200X Value',
      characteristics: [
        'Competitive advantage',
        'Market leadership',
        'Innovation platform'
      ]
    }
  ]

  const executiveBusinessReview = {
    agenda: [
      {
        section: 'Success Metrics Review',
        duration: '15 min',
        focus: [
          'Value delivered this quarter',
          'ROI achievement',
          'User adoption metrics',
          'System performance'
        ]
      },
      {
        section: 'Platform Demonstration',
        duration: '20 min',
        focus: [
          'New capabilities deployed',
          'Success story showcase',
          'Live dashboard review',
          'User testimonials'
        ]
      },
      {
        section: 'Strategic Alignment',
        duration: '20 min',
        focus: [
          'Business priority changes',
          'Market dynamics',
          'Competitive landscape',
          'Technology trends'
        ]
      },
      {
        section: 'Roadmap Discussion',
        duration: '25 min',
        focus: [
          'Next quarter priorities',
          'Expansion opportunities',
          'Investment requirements',
          'Risk mitigation'
        ]
      },
      {
        section: 'Partnership Evolution',
        duration: '10 min',
        focus: [
          'Relationship assessment',
          'Co-innovation opportunities',
          'Reference activities',
          'Strategic initiatives'
        ]
      }
    ],
    preparation: [
      'Value dashboard updated',
      'Success stories documented',
      'Expansion proposals ready',
      'Executive summary distributed'
    ]
  }

  const opportunityTracker = [
    {
      department: 'Finance',
      process: 'Invoice Processing',
      painLevel: 8,
      complexity: 'Medium',
      value: '$75K/month',
      stakeholder: 'CFO (Champion)',
      readiness: 'High',
      timeline: 'Q2 2024',
      priority: 1
    },
    {
      department: 'Supply Chain',
      process: 'Inventory Optimization', 
      painLevel: 9,
      complexity: 'High',
      value: '$150K/month',
      stakeholder: 'COO (Interested)',
      readiness: 'Medium',
      timeline: 'Q3 2024',
      priority: 2
    },
    {
      department: 'HR',
      process: 'Recruitment Automation',
      painLevel: 7,
      complexity: 'Low',
      value: '$50K/month',
      stakeholder: 'CHRO (Evaluating)',
      readiness: 'Low',
      timeline: 'Q4 2024',
      priority: 3
    }
  ]

  const successStoryTemplate = {
    journey: [
      {
        milestone: 'Starting Point (Month 0)',
        details: [
          'Single chatbot POC',
          '$150K investment',
          '1 department, 1 process',
          'Skeptical stakeholders'
        ]
      },
      {
        milestone: 'Phase 1 Success (Month 3)',
        details: [
          '70% efficiency gain',
          '$50K monthly savings',
          'Users requesting more',
          'Executive attention gained'
        ]
      },
      {
        milestone: 'Expansion Decision (Month 4)',
        details: [
          'CFO saw the results',
          'Board asked about scaling',
          'Competitors falling behind',
          '"What else can you automate?"'
        ]
      },
      {
        milestone: 'Department Transformation (Month 9)',
        details: [
          '5 processes automated',
          '$200K monthly impact',
          'Department fully transformed',
          'Other departments wanting in'
        ]
      },
      {
        milestone: 'Enterprise Platform (Month 18)',
        details: [
          '47 processes automated',
          '$2.4M monthly savings',
          'Competitive advantage achieved',
          'Industry recognition earned'
        ]
      }
    ],
    keySuccessFactors: [
      'Started small, proved value',
      'Executive sponsor championed',
      'Quick wins built momentum',
      'Each phase multiplied value'
    ],
    clientQuote: '"We started with a simple chatbot. 18 months later, we have an AI-native enterprise. ModAx didn\'t just deliver technology—they transformed our business."'
  }

  const expansionPsychology = [
    {
      principle: 'Create Pull, Not Push',
      wrongApproach: '"Now that we\'ve finished Phase 1, let\'s talk about what else we can sell you..."',
      rightApproach: '"While implementing this, your team asked if we could also help with X. We noticed it has similar patterns..."'
    },
    {
      principle: 'Building Expansion Desire',
      steps: [
        {
          step: 'Plant Seeds Early',
          actions: [
            'Document adjacent opportunities',
            'Note user requests',
            'Identify pain patterns'
          ]
        },
        {
          step: 'Let Success Speak',
          actions: [
            'Metrics do the selling',
            'Users become advocates', 
            'Results create demand'
          ]
        },
        {
          step: 'Create FOMO',
          actions: [
            'Show what\'s possible',
            'Share industry trends',
            'Highlight competition'
          ]
        },
        {
          step: 'Make it Their Idea',
          actions: [
            'Ask "what if" questions',
            'Present data, not pitches',
            'Let them connect dots'
          ]
        }
      ]
    }
  ]

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Land & Expand Model"
          description="Strategic framework for systematic account growth from initial project to enterprise transformation"
        />

        <PageContent className="space-y-8">
          {/* Reference Architecture */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Building className="h-6 w-6 text-primary" />
                Enterprise Intelligence Platform Architecture
              </CardTitle>
              <CardDescription>
                The target architecture that guides expansion conversations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(referenceArchitecture).map(([layer, components]) => (
                  <div key={layer} className="space-y-3">
                    <h3 className="font-semibold text-gray-900 capitalize">
                      {layer.replace(/([A-Z])/g, ' $1').trim()} Layer
                    </h3>
                    <div className="space-y-2">
                      {components.map((component, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-900">{component}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Alert className="border-primary/20 bg-primary/5">
                <Lightbulb className="h-4 w-4 text-primary" />
                <AlertDescription className="text-primary">
                  Use this architecture to show clients the full vision while positioning each expansion as building toward this intelligent enterprise.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Expansion Triggers */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-600" />
              Expansion Triggers
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {expansionTriggers.map((trigger, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{trigger.trigger}</CardTitle>
                        <CardDescription className="mt-1">{trigger.description}</CardDescription>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <Badge variant={trigger.strength === 'Very High' ? 'default' : trigger.strength === 'High' ? 'secondary' : 'outline'}>
                          {trigger.strength}
                        </Badge>
                        <p className="mt-1">{trigger.timing}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Typical Examples:</h4>
                      <ul className="space-y-1">
                        {trigger.examples.map((example, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-1">
                            <MessageCircle className="h-3 w-3 text-blue-600 mt-0.5 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <h4 className="font-medium text-sm text-gray-700 mb-1">Response Strategy:</h4>
                      <p className="text-sm text-primary">{trigger.response}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Value Multiplier Effect */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-success" />
                The Value Multiplication Model
              </CardTitle>
              <CardDescription>
                How value compounds exponentially with each expansion phase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {valueMultiplier.map((phase, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{phase.phase}</h3>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{phase.processes}</p>
                        <p className="text-lg font-bold text-success-700">{phase.value}</p>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {phase.characteristics.map((char, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-1">
                          <span className="text-success mt-0.5">•</span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-success/5 rounded-lg border border-success/20">
                <h4 className="font-semibold text-success-900 mb-2">The Multiplier Factors:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-success-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Data compounds insights
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Users drive adoption
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Success breeds success
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Platform enables innovation
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Scale reduces unit cost
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Overcoming Expansion Obstacles */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-600" />
              Overcoming Expansion Obstacles
            </h2>
            <div className="space-y-4">
              {expansionObstacles.map((obstacle, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base text-gray-900">{obstacle.obstacle}</CardTitle>
                      <Badge variant="outline">{obstacle.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      {Object.entries(obstacle.response).map(([type, response]) => (
                        <div key={type}>
                          <h4 className="font-medium text-gray-700 mb-1 capitalize">{type}:</h4>
                          <p className="text-gray-600">{response}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Executive Business Review Template */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                Executive Business Review Template
              </CardTitle>
              <CardDescription>
                Quarterly review structure to maintain executive alignment and identify expansion opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {executiveBusinessReview.agenda.map((section, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{section.section}</h3>
                      <Badge variant="outline">{section.duration}</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.focus.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-success" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Pre-meeting Preparation:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {executiveBusinessReview.preparation.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-primary">
                      <CheckCircle className="h-3 w-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Opportunity Tracker */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Target className="h-6 w-6 text-orange-600" />
                Expansion Opportunity Tracker
              </CardTitle>
              <CardDescription>
                Active pipeline of expansion opportunities with assessment matrix
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {opportunityTracker.map((opp, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{opp.department}: {opp.process}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span>Pain Level: {opp.painLevel}/10</span>
                          <span>Complexity: {opp.complexity}</span>
                          <span className="font-medium text-success-700">{opp.value}</span>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary">
                        Priority {opp.priority}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Stakeholder:</span>
                        <p className="text-gray-600">{opp.stakeholder}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Readiness:</span>
                        <Badge variant={opp.readiness === 'High' ? 'default' : opp.readiness === 'Medium' ? 'secondary' : 'outline'}>
                          {opp.readiness}
                        </Badge>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Timeline:</span>
                        <p className="text-gray-600">{opp.timeline}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Success Story Template */}
          <Card className="border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-success" />
                Expansion Success Story Template
              </CardTitle>
              <CardDescription>
                Framework for documenting and sharing transformation journeys
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 mb-3">The Journey:</h3>
                {successStoryTemplate.journey.map((milestone, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-2">{milestone.milestone}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {milestone.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-success">•</span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Success Factors:</h4>
                  <ul className="space-y-2">
                    {successStoryTemplate.keySuccessFactors.map((factor, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-3">Client Quote:</h4>
                  <blockquote className="text-sm text-gray-600 italic">
                    "{successStoryTemplate.clientQuote}"
                    <footer className="mt-2 text-xs text-gray-500">
                      - CEO, [Client Name]
                    </footer>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expansion Psychology */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                The Psychology of Expansion
              </CardTitle>
              <CardDescription>
                Understanding the mindset and approach that drives successful account growth
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {expansionPsychology.map((principle, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-semibold text-gray-900">{principle.principle}</h3>
                  
                  {principle.wrongApproach && (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border-l-4 border-red-400 bg-red-50">
                        <h4 className="font-medium text-red-900 mb-2">Wrong Approach:</h4>
                        <p className="text-sm text-red-800 italic">"{principle.wrongApproach}"</p>
                      </div>
                      <div className="p-4 border-l-4 border-success bg-success/5">
                        <h4 className="font-medium text-success-900 mb-2">Right Approach:</h4>
                        <p className="text-sm text-success-800 italic">"{principle.rightApproach}"</p>
                      </div>
                    </div>
                  )}
                  
                  {principle.steps && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {principle.steps.map((step, i) => (
                        <div key={i} className="p-4 border rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-2">{i + 1}. {step.step}</h4>
                          <ul className="space-y-1">
                            {step.actions.map((action, j) => (
                              <li key={j} className="text-sm text-gray-600 flex items-start gap-1">
                                <ArrowRight className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Ready to implement the Land & Expand model?</p>
              <p className="text-sm text-gray-600">Access templates, track opportunities, and build your expansion strategy</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <DollarSign className="mr-2 h-4 w-4" />
                ROI Calculator
              </Button>
              <Link to="/playbooks/expansion/success-dashboard">
                <Button>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Success Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}