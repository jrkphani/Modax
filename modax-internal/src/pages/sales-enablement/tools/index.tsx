import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Calculator,
  DollarSign,
  Cloud,
  Settings,
  TrendingUp,
  ArrowRight,
  Sparkles,
  BarChart3,
  Clock,
  Users,
  Target,
  Zap
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ToolsIndex() {
  const tools = [
    {
      id: 'roi-calculator',
      title: 'ROI Calculator',
      description: 'Interactive tool to demonstrate modernization value and payback period',
      icon: Calculator,
      link: '/sales-enablement/tools/roi-calculator',
      features: [
        'Cost savings analysis',
        'Efficiency gain projections',
        'Payback period calculation',
        'PDF export capability'
      ],
      stats: {
        uses: '156 this month',
        avgDealSize: '$287K',
        conversionRate: '89%'
      },
      color: 'bg-primary/5 text-primary',
      popular: true
    },
    {
      id: 'aws-funding',
      title: 'AWS Funding Calculator',
      description: 'Calculate available AWS MAP funding and co-investment opportunities',
      icon: Cloud,
      link: '/sales-enablement/tools/aws-funding-calculator',
      features: [
        'MAP 2.0 calculations',
        'Migration funding estimates',
        'Co-investment scenarios',
        'Funding timeline'
      ],
      stats: {
        uses: '87 this month',
        avgFunding: '$125K',
        approvalRate: '94%'
      },
      color: 'bg-orange-50 text-orange-700',
      new: true
    },
    {
      id: 'pricing-configurator',
      title: 'Pricing Configurator',
      description: 'Build custom pricing proposals based on project scope and complexity',
      icon: DollarSign,
      link: '/sales-enablement/tools/pricing-configurator',
      features: [
        'Application complexity scoring',
        'Team size recommendations',
        'Timeline estimation',
        'Discount approval matrix'
      ],
      stats: {
        uses: '134 this month',
        avgAccuracy: '92%',
        dealVelocity: '+23%'
      },
      color: 'bg-success/5 text-success-700'
    },
    {
      id: 'assessment-wizard',
      title: 'Quick Assessment Wizard',
      description: 'Rapid application assessment to qualify opportunities',
      icon: Sparkles,
      link: '/sales-enablement/tools/assessment-wizard',
      features: [
        '10-minute assessment',
        'Complexity scoring',
        'Risk identification',
        'Opportunity sizing'
      ],
      stats: {
        uses: '98 this month',
        qualificationRate: '76%',
        timeToQualify: '8 min avg'
      },
      color: 'bg-blue-50 text-blue-700',
      comingSoon: true
    }
  ]

  const calculatorBestPractices = [
    {
      title: 'Always Customize',
      description: 'Use client-specific numbers, not generic examples',
      icon: Settings,
      tips: [
        'Get real cost data during discovery',
        'Use their terminology and metrics',
        'Include hidden costs they mentioned'
      ]
    },
    {
      title: 'Build Together',
      description: 'Make it collaborative, not a presentation',
      icon: Users,
      tips: [
        'Let them input the numbers',
        'Ask "does this look right?"',
        'Explore different scenarios together'
      ]
    },
    {
      title: 'Focus on Value',
      description: 'ROI is more than cost savings',
      icon: TrendingUp,
      tips: [
        'Include risk reduction value',
        'Quantify opportunity costs',
        'Show competitive advantages'
      ]
    },
    {
      title: 'Create Urgency',
      description: 'Show the cost of waiting',
      icon: Clock,
      tips: [
        'Calculate daily cost of inaction',
        'Project competitive gaps',
        'Highlight growing technical debt'
      ]
    }
  ]

  const toolMetrics = {
    overall: {
      totalUses: '475',
      conversionRate: '84%',
      avgDealIncrease: '+34%',
      timeToClose: '-12 days'
    },
    insights: [
      'Deals with ROI calculator close 2.3x faster',
      'AWS funding calculator increases deal size by avg $125K',
      'Live calculator sessions have 89% next-step rate',
      'Custom pricing builds trust and accelerates decisions'
    ]
  }

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Sales Tools & Calculators"
          description="Interactive tools to quantify value and accelerate deals"
        />

        <PageContent className="space-y-8">
          {/* Tool Performance Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-gray-200">
              <CardContent className="p-4 text-center">
                <BarChart3 className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{toolMetrics.overall.totalUses}</p>
                <p className="text-sm text-gray-600">Tool uses this month</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4 text-center">
                <Target className="h-6 w-6 text-success mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{toolMetrics.overall.conversionRate}</p>
                <p className="text-sm text-gray-600">Conversion rate</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{toolMetrics.overall.avgDealIncrease}</p>
                <p className="text-sm text-gray-600">Avg deal increase</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4 text-center">
                <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{toolMetrics.overall.timeToClose}</p>
                <p className="text-sm text-gray-600">Time to close</p>
              </CardContent>
            </Card>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <Card key={tool.id} className="border-gray-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${tool.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{tool.title}</CardTitle>
                          {tool.popular && <Badge className="mt-1">Most Popular</Badge>}
                          {tool.new && <Badge variant="secondary" className="mt-1">New</Badge>}
                          {tool.comingSoon && <Badge variant="outline" className="mt-1">Coming Soon</Badge>}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-2">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {tool.features.map((feature, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-1">
                            <span className="text-primary mt-0.5">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-xs text-gray-700 mb-2">Performance Stats:</h4>
                      <div className="space-y-1">
                        {Object.entries(tool.stats).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between text-xs">
                            <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                            <span className="font-medium text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {!tool.comingSoon ? (
                      <Link to={tool.link}>
                        <Button className="w-full">
                          Launch {tool.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button className="w-full" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Best Practices */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Calculator Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {calculatorBestPractices.map((practice, index) => {
                const Icon = practice.icon
                return (
                  <Card key={index} className="border-gray-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Icon className="h-5 w-5 text-primary" />
                        {practice.title}
                      </CardTitle>
                      <CardDescription className="text-sm">{practice.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {practice.tips.map((tip, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-1">
                            <Zap className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Tool Insights */}
          <Card className="border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Tool Usage Insights
              </CardTitle>
              <CardDescription>What top performers know about using calculators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {toolMetrics.insights.map((insight, index) => (
                  <Alert key={index} className="border-primary/20 bg-white">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <AlertDescription className="text-primary">
                      {insight}
                    </AlertDescription>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pro Tips */}
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Pro Tips from Top Performers</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-success/10 rounded-lg flex-shrink-0">
                    <DollarSign className="h-4 w-4 text-success-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">The "Shock and Awe" Move</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Calculate their daily cost of inaction. "Every day you wait costs $X,XXX" creates urgency better than any pitch.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Users className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">The "Let Them Drive" Technique</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Hand them the keyboard. When they input their own numbers, they own the results and trust the output.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">The "What If" Exploration</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Always run 3 scenarios: conservative, realistic, and optimistic. Let them see the range of possibilities.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Need help with calculators?</p>
              <p className="text-sm text-gray-600">Watch training videos or request new features</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                Request Feature
              </Button>
              <Button>
                Watch Calculator Training
              </Button>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}