import React from 'react'
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
  Zap,
  Brain,
  Users,
  Target,
  MessageCircle,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Shield,
  DollarSign,
  Clock,
  Eye,
  Heart
} from 'lucide-react'

export default function ExpansionPsychology() {
  const psychologyPrinciples = [
    {
      principle: 'Create Pull, Not Push',
      description: 'Let demand emerge naturally from success rather than forcing it',
      icon: Target,
      wrongApproach: {
        title: 'Wrong Approach (Push)',
        example: '"Now that we\'ve finished Phase 1, let\'s talk about what else we can sell you..."',
        problems: [
          'Feels transactional and sales-driven',
          'Creates resistance and skepticism',
          'Positions you as vendor, not partner',
          'Forces decision before readiness'
        ]
      },
      rightApproach: {
        title: 'Right Approach (Pull)',
        example: '"While implementing this, your team asked if we could also help with X. We noticed it has similar patterns..."',
        benefits: [
          'Feels organic and needs-driven',
          'Creates genuine interest and curiosity',
          'Positions you as problem-solver',
          'Allows natural decision timing'
        ]
      },
      tactics: [
        'Document user requests for additional features',
        'Note pain points mentioned during implementation',
        'Identify patterns that suggest broader opportunities',
        'Let success stories create FOMO in other departments'
      ]
    },
    {
      principle: 'Success is the Best Salesperson',
      description: 'Metrics and results speak louder than any sales pitch',
      icon: TrendingUp,
      keyElements: [
        {
          element: 'Visible Metrics',
          description: 'Make success impossible to ignore',
          examples: ['Dashboard showing 70% efficiency gains', 'Monthly savings reports', 'User adoption statistics']
        },
        {
          element: 'User Advocacy',
          description: 'Enable users to become internal champions',
          examples: ['Testimonials from power users', 'Success stories shared in meetings', 'Word-of-mouth recommendations']
        },
        {
          element: 'Competitive Pressure',
          description: 'Create FOMO through external benchmarking',
          examples: ['Industry comparison reports', 'Competitor advancement alerts', 'Market leadership positioning']
        }
      ],
      implementation: [
        'Create compelling visual dashboards',
        'Collect and share user testimonials',
        'Generate monthly success reports',
        'Share industry benchmarking data',
        'Highlight competitive advantages gained'
      ]
    },
    {
      principle: 'Make It Their Idea',
      description: 'Guide discovery rather than presenting solutions',
      icon: Lightbulb,
      techniques: [
        {
          technique: 'Socratic Questioning',
          description: 'Ask questions that lead to insights',
          examples: [
            '"What would happen if we applied this same approach to your supply chain?"',
            '"How much time does your team spend on similar manual processes?"',
            '"What other areas face the same data integration challenges?"'
          ]
        },
        {
          technique: 'Pattern Recognition',
          description: 'Help them see connections and opportunities',
          examples: [
            '"The data patterns we see here are very similar to what causes delays in procurement..."',
            '"This same automation framework could eliminate the bottleneck in customer service..."',
            '"The ROI model suggests even greater impact in higher-volume processes..."'
          ]
        },
        {
          technique: 'Consultative Discovery',
          description: 'Present data and let them draw conclusions',
          examples: [
            'Show process inefficiency maps without suggesting solutions',
            'Present cost analysis and let them identify opportunities',
            'Share best practices from similar companies'
          ]
        }
      ]
    }
  ]

  const expansionDesireBuilder = {
    stages: [
      {
        stage: '1. Plant Seeds Early',
        timing: 'During initial implementation',
        activities: [
          'Document adjacent opportunities discovered',
          'Note stakeholder requests and pain points',
          'Identify process patterns and dependencies',
          'Map organizational influence networks'
        ],
        outcome: 'Foundation for future expansion conversations'
      },
      {
        stage: '2. Let Success Speak',
        timing: 'Post-initial success',
        activities: [
          'Create compelling success metrics',
          'Enable user testimonials and advocacy',
          'Generate visible proof of value',
          'Share success across the organization'
        ],
        outcome: 'Organic demand for similar solutions'
      },
      {
        stage: '3. Create FOMO',
        timing: 'Ongoing',
        activities: [
          'Share industry trends and benchmarks',
          'Highlight competitor movements',
          'Show what\'s possible with platform approach',
          'Demonstrate compound value effects'
        ],
        outcome: 'Urgency and appetite for expansion'
      },
      {
        stage: '4. Make It Their Idea',
        timing: 'During expansion conversations',
        activities: [
          'Ask insightful "what if" questions',
          'Present data without explicit conclusions',
          'Guide discovery of opportunities',
          'Let them connect the dots'
        ],
        outcome: 'Ownership and commitment to expansion'
      }
    ]
  }

  const resistancePatterns = [
    {
      resistance: 'Budget Constraints',
      psychology: 'Risk aversion due to financial pressure',
      wrongResponse: 'Discount pricing or extended payment terms',
      rightResponse: {
        approach: 'Reframe as investment in cost reduction',
        tactics: [
          'Show how current savings can fund expansion',
          'Present self-funding expansion model',
          'Calculate cost of inaction and delay',
          'Offer success-based pricing if appropriate'
        ]
      }
    },
    {
      resistance: 'Change Fatigue',
      psychology: 'Emotional exhaustion from previous initiatives',
      wrongResponse: 'Minimize the change or rush implementation',
      rightResponse: {
        approach: 'Position as evolution of existing success',
        tactics: [
          'Emphasize building on proven foundation',
          'Highlight user-driven demand for more',
          'Show incremental, manageable growth',
          'Leverage existing champions and advocates'
        ]
      }
    },
    {
      resistance: 'Resource Constraints',
      psychology: 'Overwhelm and capacity concerns',
      wrongResponse: 'Promise minimal resource requirements',
      rightResponse: {
        approach: 'Demonstrate resource optimization',
        tactics: [
          'Show how platform approach reduces overhead',
          'Highlight automation of resource-intensive tasks',
          'Present phased implementation timeline',
          'Offer additional support during transition'
        ]
      }
    },
    {
      resistance: 'Political Complexity',
      psychology: 'Fear of stakeholder conflict and decision paralysis',
      wrongResponse: 'Navigate politics or take sides',
      rightResponse: {
        approach: 'Create shared wins for all stakeholders',
        tactics: [
          'Identify value propositions for each stakeholder',
          'Design expansion to benefit multiple departments',
          'Use existing success to build coalition',
          'Position as strategic initiative from leadership'
        ]
      }
    }
  ]

  const conversationStarters = [
    {
      category: 'User-Driven',
      starters: [
        '"Your team mentioned they\'d love to have this capability for..."',
        '"During our last review, Sarah asked if we could help with..."',
        '"We\'ve had three different people ask about applying this to..."'
      ],
      psychology: 'Positions expansion as response to user needs'
    },
    {
      category: 'Data-Driven',
      starters: [
        '"The usage data shows an interesting pattern in..."',
        '"Our analysis identified similar inefficiencies in..."',
        '"The ROI model suggests even greater impact in..."'
      ],
      psychology: 'Uses objective evidence to guide discovery'
    },
    {
      category: 'Industry-Driven',
      starters: [
        '"Other clients typically expand to this area next because..."',
        '"Industry benchmarks show leaders focusing on..."',
        '"Your competitors are investing heavily in..."'
      ],
      psychology: 'Creates competitive urgency and social proof'
    },
    {
      category: 'Strategic-Driven',
      starters: [
        '"Given your strategic focus on customer experience..."',
        '"This aligns perfectly with your digital transformation goals..."',
        '"To achieve your 2024 efficiency targets, you might consider..."'
      ],
      psychology: 'Links expansion to organizational priorities'
    }
  ]

  const psychologyMistakes = [
    {
      mistake: 'Being Too Eager',
      description: 'Pushing for expansion before success is fully proven',
      consequences: ['Damages trust and credibility', 'Creates sales resistance', 'Undermines partnership positioning'],
      remedy: 'Wait for clear success metrics and user advocacy before expansion conversations'
    },
    {
      mistake: 'Making It About Revenue',
      description: 'Framing expansion in terms of more business for ModAx',
      consequences: ['Positions you as vendor vs partner', 'Creates skepticism about motives', 'Reduces willingness to engage'],
      remedy: 'Frame expansion as value creation and problem-solving for the client'
    },
    {
      mistake: 'Ignoring Emotional Factors',
      description: 'Focusing only on rational business case without addressing feelings',
      consequences: ['Missing hidden objections', 'Failing to build emotional buy-in', 'Creating unexpected resistance'],
      remedy: 'Acknowledge emotions, celebrate wins, and address fears directly'
    },
    {
      mistake: 'One-Size-Fits-All Approach',
      description: 'Using same expansion playbook regardless of client context',
      consequences: ['Missing unique opportunities', 'Misreading stakeholder dynamics', 'Ineffective messaging'],
      remedy: 'Customize approach based on company culture, industry, and individual personalities'
    }
  ]

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Expansion Psychology"
          description="Understanding the psychology of account growth and decision making"
        />

        <PageContent className="space-y-8">
          {/* Core Psychology Principles */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              Core Psychology Principles
            </h2>
            <div className="space-y-8">
              {psychologyPrinciples.map((principle, index) => {
                const Icon = principle.icon
                return (
                  <Card key={index} className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <Icon className="h-6 w-6 text-primary" />
                        {principle.principle}
                      </CardTitle>
                      <CardDescription className="text-base">{principle.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Wrong vs Right Approach */}
                      {principle.wrongApproach && principle.rightApproach && (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="p-4 border-l-4 border-red-400 bg-red-50 rounded-r-lg">
                            <h4 className="font-semibold text-red-900 mb-2">{principle.wrongApproach.title}</h4>
                            <blockquote className="text-sm text-red-800 italic mb-3">
                              "{principle.wrongApproach.example}"
                            </blockquote>
                            <div>
                              <p className="text-xs font-medium text-red-700 mb-2">Why this fails:</p>
                              <ul className="space-y-1">
                                {principle.wrongApproach.problems.map((problem, i) => (
                                  <li key={i} className="text-xs text-red-700 flex items-start gap-1">
                                    <span className="text-red-500 mt-0.5">×</span>
                                    {problem}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="p-4 border-l-4 border-success bg-success/5 rounded-r-lg">
                            <h4 className="font-semibold text-success-900 mb-2">{principle.rightApproach.title}</h4>
                            <blockquote className="text-sm text-success-800 italic mb-3">
                              "{principle.rightApproach.example}"
                            </blockquote>
                            <div>
                              <p className="text-xs font-medium text-success-700 mb-2">Why this works:</p>
                              <ul className="space-y-1">
                                {principle.rightApproach.benefits.map((benefit, i) => (
                                  <li key={i} className="text-xs text-success-700 flex items-start gap-1">
                                    <CheckCircle className="h-3 w-3 text-success mt-0.5" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Key Elements for Success Principle */}
                      {principle.keyElements && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Elements:</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            {principle.keyElements.map((element, i) => (
                              <div key={i} className="p-3 border rounded-lg">
                                <h5 className="font-medium text-gray-900 mb-2">{element.element}</h5>
                                <p className="text-sm text-gray-600 mb-2">{element.description}</p>
                                <div className="space-y-1">
                                  {element.examples.map((example, j) => (
                                    <p key={j} className="text-xs text-primary">• {example}</p>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Techniques for Make It Their Idea */}
                      {principle.techniques && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Techniques:</h4>
                          <div className="space-y-4">
                            {principle.techniques.map((technique, i) => (
                              <div key={i} className="p-3 border rounded-lg">
                                <h5 className="font-medium text-gray-900 mb-2">{technique.technique}</h5>
                                <p className="text-sm text-gray-600 mb-3">{technique.description}</p>
                                <div className="space-y-1">
                                  {technique.examples.map((example, j) => (
                                    <div key={j} className="text-sm text-primary italic">
                                      "{example}"
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Implementation Tactics */}
                      {(principle.tactics || principle.implementation) && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Implementation:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {(principle.tactics || principle.implementation).map((tactic, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <Zap className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                {tactic}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Building Expansion Desire */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-600" />
                Building Expansion Desire
              </CardTitle>
              <CardDescription>
                The four-stage process for creating organic demand for expansion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {expansionDesireBuilder.stages.map((stage, index) => (
                  <div key={index} className="relative">
                    {index < expansionDesireBuilder.stages.length - 1 && (
                      <div className="absolute left-4 top-12 w-0.5 h-16 bg-primary/20" />
                    )}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{stage.stage}</h3>
                          <Badge variant="outline">{stage.timing}</Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-sm text-gray-700 mb-2">Key Activities:</h4>
                            <ul className="space-y-1">
                              {stage.activities.map((activity, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-start gap-1">
                                  <ArrowRight className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-3 bg-primary/5 rounded-lg">
                            <h4 className="font-medium text-sm text-primary mb-1">Desired Outcome:</h4>
                            <p className="text-sm text-primary">{stage.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Overcoming Resistance */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-orange-600" />
              Overcoming Psychological Resistance
            </h2>
            <div className="space-y-4">
              {resistancePatterns.map((pattern, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{pattern.resistance}</CardTitle>
                        <CardDescription className="mt-1">{pattern.psychology}</CardDescription>
                      </div>
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="font-medium text-red-900 mb-1">Wrong Response:</h4>
                      <p className="text-sm text-red-800">{pattern.wrongResponse}</p>
                    </div>
                    <div className="p-3 bg-success/5 border border-success/20 rounded-lg">
                      <h4 className="font-medium text-success-900 mb-2">Right Response: {pattern.rightResponse.approach}</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {pattern.rightResponse.tactics.map((tactic, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-success-800">
                            <CheckCircle className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                            {tactic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Conversation Starters */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-blue-600" />
                Expansion Conversation Starters
              </CardTitle>
              <CardDescription>
                Psychologically effective ways to initiate expansion discussions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {conversationStarters.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{category.psychology}</p>
                    <div className="space-y-2">
                      {category.starters.map((starter, i) => (
                        <div key={i} className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-800 italic">"{starter}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Common Psychology Mistakes */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Common Psychology Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {psychologyMistakes.map((mistake, index) => (
                  <div key={index} className="p-4 bg-white border rounded-lg">
                    <h3 className="font-semibold text-red-900 mb-2">{mistake.mistake}</h3>
                    <p className="text-sm text-gray-700 mb-3">{mistake.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-red-800 mb-2">Consequences:</h4>
                        <ul className="space-y-1">
                          {mistake.consequences.map((consequence, i) => (
                            <li key={i} className="text-sm text-red-700 flex items-start gap-1">
                              <span className="text-red-500 mt-0.5">×</span>
                              {consequence}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-success-800 mb-2">Remedy:</h4>
                        <p className="text-sm text-success-700">{mistake.remedy}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* The Psychology Mindset */}
          <Card className="border-primary/20 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                The Psychology Mindset
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Core Beliefs:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Heart className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      People buy emotionally and justify logically
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      Success creates its own demand
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      User advocacy trumps sales persuasion
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      Timing matters more than technique
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Golden Rules:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Let them discover, don't tell them
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Address emotions, not just logic
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Build on wins, don't push through losses
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Create pull through demonstrated value
                    </li>
                  </ul>
                </div>
              </div>
              
              <Alert className="border-primary/20 bg-white">
                <Brain className="h-4 w-4 text-primary" />
                <AlertDescription className="text-primary">
                  <strong>Remember:</strong> Expansion psychology is about understanding human nature, not manipulating it. When you truly serve their best interests, psychological principles work naturally in your favor.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Ready to apply expansion psychology?</p>
              <p className="text-sm text-gray-600">Practice these techniques and frameworks in your current accounts</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <MessageCircle className="mr-2 h-4 w-4" />
                Practice Scripts
              </Button>
              <Button>
                <TrendingUp className="mr-2 h-4 w-4" />
                Track Success
              </Button>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}