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
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertTriangle,
  Target,
  Zap,
  Download,
  Eye,
  Calendar,
  Building,
  Cpu,
  Shield
} from 'lucide-react'

export default function SuccessDashboard() {
  const [_selectedMetric, setSelectedMetric] = useState<string | null>(null)

  const dashboardMetrics = {
    accountGrowth: {
      title: 'Account Growth Metrics',
      icon: TrendingUp,
      metrics: [
        { label: 'Initial contract', value: '$150K', type: 'currency' },
        { label: 'Year 1 total', value: '$650K', multiplier: '4.3x', type: 'currency', trend: 'positive' },
        { label: 'Year 2 total', value: '$1.5M', multiplier: '10x', type: 'currency', trend: 'positive' },
        { label: 'Year 3 total', value: '$3M+', multiplier: '20x', type: 'currency', trend: 'positive' },
        { label: 'Recurring revenue', value: '$150K/month', type: 'currency' }
      ]
    },
    expansionVelocity: {
      title: 'Expansion Velocity',
      icon: Clock,
      metrics: [
        { label: 'Time to Phase 2', value: '3 months', type: 'time' },
        { label: 'Time to Phase 3', value: '8 months', type: 'time' },
        { label: 'Time to Phase 4', value: '14 months', type: 'time' },
        { label: 'Time to Strategic Partner', value: '18 months', type: 'time' }
      ]
    },
    valueCreation: {
      title: 'Value Creation Metrics',
      icon: DollarSign,
      metrics: [
        { label: 'Process automated', value: '47', type: 'number' },
        { label: 'FTEs redeployed', value: '125', type: 'number' },
        { label: 'Cost savings', value: '$2.4M/month', type: 'currency', trend: 'positive' },
        { label: 'Revenue impact', value: '$3.6M/month', type: 'currency', trend: 'positive' },
        { label: 'ROI delivered', value: '2,400%', type: 'percentage', trend: 'positive' }
      ]
    },
    relationship: {
      title: 'Relationship Metrics',
      icon: Users,
      metrics: [
        { label: 'Executive engagement', value: 'Monthly', type: 'text' },
        { label: 'NPS score', value: '87', type: 'score', trend: 'positive' },
        { label: 'Reference-ability', value: 'Active', type: 'status', status: 'active' },
        { label: 'Case study published', value: 'Yes', type: 'status', status: 'completed' },
        { label: 'Co-innovation projects', value: '3', type: 'number' }
      ]
    }
  }

  const kpiFramework = [
    {
      category: 'Financial Impact',
      kpis: [
        { name: 'Monthly Cost Savings', target: '$2M+', current: '$2.4M', status: 'exceeding' },
        { name: 'Revenue Enhancement', target: '$3M+', current: '$3.6M', status: 'exceeding' },
        { name: 'ROI Achievement', target: '1000%+', current: '2400%', status: 'exceeding' },
        { name: 'Payback Period', target: '< 12 months', current: '8 months', status: 'exceeding' }
      ]
    },
    {
      category: 'Operational Excellence',
      kpis: [
        { name: 'Process Automation', target: '40+', current: '47', status: 'exceeding' },
        { name: 'User Adoption', target: '85%+', current: '92%', status: 'exceeding' },
        { name: 'System Uptime', target: '99.5%+', current: '99.8%', status: 'exceeding' },
        { name: 'Error Reduction', target: '90%+', current: '94%', status: 'exceeding' }
      ]
    },
    {
      category: 'Strategic Alignment',
      kpis: [
        { name: 'Executive Engagement', target: 'Monthly', current: 'Monthly', status: 'meeting' },
        { name: 'Department Coverage', target: '5+', current: '7', status: 'exceeding' },
        { name: 'Innovation Projects', target: '2+', current: '3', status: 'exceeding' },
        { name: 'Market Positioning', target: 'Leader', current: 'Leader', status: 'meeting' }
      ]
    },
    {
      category: 'Relationship Health',
      kpis: [
        { name: 'NPS Score', target: '70+', current: '87', status: 'exceeding' },
        { name: 'Stakeholder Satisfaction', target: '4.5+', current: '4.8', status: 'exceeding' },
        { name: 'Reference Willingness', target: 'Yes', current: 'Active', status: 'exceeding' },
        { name: 'Contract Renewal', target: '95%+', current: '100%', status: 'exceeding' }
      ]
    }
  ]

  const executiveReporting = {
    executiveSummary: {
      title: 'Executive Summary Template',
      sections: [
        {
          section: 'Value Delivered',
          content: [
            'Automated 47 business processes',
            'Generated $2.4M monthly cost savings',
            'Achieved 2,400% ROI in 18 months',
            'Redeployed 125 FTEs to higher-value work'
          ]
        },
        {
          section: 'Strategic Impact',
          content: [
            'Established competitive advantage in market',
            'Enabled new revenue streams worth $3.6M/month',
            'Built enterprise intelligence platform',
            'Created foundation for AI-native operations'
          ]
        },
        {
          section: 'Next Quarter Focus',
          content: [
            'Expand to Supply Chain operations',
            'Launch customer-facing AI agents',
            'Implement predictive maintenance',
            'Develop industry-specific solutions'
          ]
        }
      ]
    },
    dashboardViews: [
      {
        audience: 'CEO/Board',
        focus: 'Strategic value and competitive positioning',
        keyMetrics: ['ROI', 'Market position', 'Innovation pipeline', 'Risk reduction']
      },
      {
        audience: 'CFO',
        focus: 'Financial impact and cost optimization',
        keyMetrics: ['Cost savings', 'Revenue impact', 'Budget utilization', 'Payback period']
      },
      {
        audience: 'COO', 
        focus: 'Operational efficiency and process improvement',
        keyMetrics: ['Process automation', 'Efficiency gains', 'Quality metrics', 'User adoption']
      },
      {
        audience: 'CTO',
        focus: 'Technical architecture and platform evolution',
        keyMetrics: ['System performance', 'Integration success', 'Platform scalability', 'Security posture']
      }
    ]
  }

  const valueVisualization = [
    {
      chart: 'ROI Trajectory',
      description: 'Shows cumulative ROI achievement over time',
      purpose: 'Demonstrate value acceleration and compound benefits',
      bestPractice: 'Update monthly with actual vs projected values'
    },
    {
      chart: 'Process Automation Heatmap',
      description: 'Visual map of automated processes across departments',
      purpose: 'Show coverage and identify expansion opportunities',
      bestPractice: 'Color-code by value impact and complexity'
    },
    {
      chart: 'Value Creation Waterfall',
      description: 'Breakdown of how savings and revenue gains are generated',
      purpose: 'Provide detailed view of value sources',
      bestPractice: 'Link each component to specific use cases'
    },
    {
      chart: 'Stakeholder Satisfaction Trends',
      description: 'NPS and satisfaction scores across user groups',
      purpose: 'Track relationship health and identify issues early',
      bestPractice: 'Segment by department and role level'
    }
  ]

  const benchmarkTracking = {
    industryBenchmarks: [
      { metric: 'AI Implementation Success Rate', industry: '23%', modax: '94%', advantage: '+71%' },
      { metric: 'Time to Production', industry: '18 months', modax: '3 months', advantage: '-15 months' },
      { metric: 'ROI Achievement', industry: '300%', modax: '2400%', advantage: '+2100%' },
      { metric: 'User Adoption Rate', industry: '45%', modax: '92%', advantage: '+47%' }
    ],
    competitorComparison: [
      { competitor: 'Accenture', differentiator: 'Speed to Value', advantage: '6x faster deployment' },
      { competitor: 'IBM', differentiator: 'Production Focus', advantage: '94% vs 23% success rate' },
      { competitor: 'Deloitte', differentiator: 'Cost Efficiency', advantage: '50% lower total cost' },
      { competitor: 'PWC', differentiator: 'Knowledge Retention', advantage: 'Intelligence Fabric approach' }
    ]
  }

  const warningSignsMonitor = [
    {
      category: 'Financial',
      signs: [
        { indicator: 'Budget pressure increasing', severity: 'High', action: 'Demonstrate ROI and cost savings' },
        { indicator: 'Procurement involvement', severity: 'Medium', action: 'Engage economic buyer directly' },
        { indicator: 'Cost reduction mandates', severity: 'High', action: 'Position as cost reduction solution' }
      ]
    },
    {
      category: 'Political',
      signs: [
        { indicator: 'Stakeholder turnover', severity: 'High', action: 'Build relationships with new stakeholders' },
        { indicator: 'Competing priorities', severity: 'Medium', action: 'Align with strategic initiatives' },
        { indicator: 'M&A activity', severity: 'High', action: 'Engage with new decision makers' }
      ]
    },
    {
      category: 'Technical', 
      signs: [
        { indicator: 'IT resource constraints', severity: 'Medium', action: 'Emphasize low-touch deployment' },
        { indicator: 'Security concerns', severity: 'Medium', action: 'Provide security documentation' },
        { indicator: 'Integration challenges', severity: 'Low', action: 'Demonstrate platform flexibility' }
      ]
    },
    {
      category: 'Market',
      signs: [
        { indicator: 'Technology shifts', severity: 'Medium', action: 'Adapt platform to new directions' },
        { indicator: 'Competitive threats', severity: 'Medium', action: 'Highlight unique advantages' },
        { indicator: 'Regulatory changes', severity: 'Low', action: 'Ensure compliance alignment' }
      ]
    }
  ]

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Success Dashboard"
          description="Track and communicate value delivery metrics for sustainable expansion"
        />

        <PageContent className="space-y-8">
          {/* Live Dashboard Metrics */}
          <Card className="border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                Live Success Dashboard
              </CardTitle>
              <CardDescription>
                Real-time view of account health and expansion opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(dashboardMetrics).map(([key, section]) => {
                const Icon = section.icon
                return (
                  <div key={key} className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {section.title}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {section.metrics.map((metric, index) => (
                        <div key={index} className="text-center">
                          <p className="text-xs text-gray-600 mb-1">{metric.label}</p>
                          <div className="space-y-1">
                            <p className={`text-lg font-bold ${
                              metric.trend === 'positive' ? 'text-success-700' : 
                              metric.status === 'active' ? 'text-blue-700' :
                              metric.status === 'completed' ? 'text-success-700' :
                              'text-gray-900'
                            }`}>
                              {metric.value}
                            </p>
                            {metric.multiplier && (
                              <p className="text-xs text-success">({metric.multiplier})</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* KPI Framework */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-success" />
              KPI Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kpiFramework.map((category, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {category.kpis.map((kpi, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm text-gray-900">{kpi.name}</p>
                          <p className="text-xs text-gray-600">Target: {kpi.target}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-sm text-gray-900">{kpi.current}</p>
                          <Badge variant={
                            kpi.status === 'exceeding' ? 'default' :
                            kpi.status === 'meeting' ? 'secondary' : 'outline'
                          } className="text-xs">
                            {kpi.status === 'exceeding' ? 'Exceeding' :
                             kpi.status === 'meeting' ? 'Meeting' : 'Below'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Executive Reporting */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Building className="h-6 w-6 text-blue-600" />
                Executive Reporting Framework
              </CardTitle>
              <CardDescription>
                Tailored reports for different executive audiences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Executive Summary Template */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">{executiveReporting.executiveSummary.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {executiveReporting.executiveSummary.sections.map((section, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-3">{section.section}</h4>
                      <ul className="space-y-2">
                        {section.content.map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Views by Audience */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Audience-Specific Dashboard Views</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {executiveReporting.dashboardViews.map((view, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">{view.audience}</h4>
                      <p className="text-sm text-gray-600 mb-3">{view.focus}</p>
                      <div className="flex flex-wrap gap-1">
                        {view.keyMetrics.map((metric, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Value Visualization */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Value Visualization Best Practices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {valueVisualization.map((chart, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{chart.chart}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">{chart.description}</p>
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium text-gray-700">Purpose:</span>
                        <p className="text-xs text-gray-600">{chart.purpose}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-700">Best Practice:</span>
                        <p className="text-xs text-primary">{chart.bestPractice}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benchmark Tracking */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-success" />
                Benchmark Tracking
              </CardTitle>
              <CardDescription>
                Industry comparisons and competitive advantages
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Industry Benchmarks</h3>
                <div className="space-y-3">
                  {benchmarkTracking.industryBenchmarks.map((benchmark, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">{benchmark.metric}</h4>
                        <Badge className="bg-success/10 text-success-800">{benchmark.advantage}</Badge>
                      </div>
                      <div className="flex items-center justify-between mt-2 text-sm">
                        <span className="text-gray-600">Industry: {benchmark.industry}</span>
                        <span className="font-medium text-success-700">ModAx: {benchmark.modax}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Competitive Differentiation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benchmarkTracking.competitorComparison.map((comp, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">vs {comp.competitor}</h4>
                        <Badge variant="outline" className="text-xs">{comp.differentiator}</Badge>
                      </div>
                      <p className="text-sm text-primary font-medium">{comp.advantage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warning Signs Monitor */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Warning Signs Monitor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {warningSignsMonitor.map((category, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {category.category === 'Financial' && <DollarSign className="h-5 w-5 text-red-600" />}
                      {category.category === 'Political' && <Users className="h-5 w-5 text-orange-600" />}
                      {category.category === 'Technical' && <Cpu className="h-5 w-5 text-blue-600" />}
                      {category.category === 'Market' && <TrendingUp className="h-5 w-5 text-primary" />}
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {category.signs.map((sign, i) => (
                      <div key={i} className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <p className="font-medium text-sm text-gray-900">{sign.indicator}</p>
                          <Badge variant={
                            sign.severity === 'High' ? 'destructive' :
                            sign.severity === 'Medium' ? 'default' : 'secondary'
                          } className="text-xs">
                            {sign.severity}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">
                          <span className="font-medium">Action:</span> {sign.action}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dashboard Implementation Guide */}
          <Card className="border-primary/20 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Dashboard Implementation Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Setup Checklist:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Define KPIs with stakeholders
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Establish baseline measurements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Configure automated data collection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Create executive reporting cadence
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Train team on dashboard usage
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Success Tips:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Zap className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      Update metrics weekly, report monthly
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      Use visuals to tell the value story
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      Celebrate wins and milestones
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      Address warning signs proactively
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      Link metrics to expansion opportunities
                    </li>
                  </ul>
                </div>
              </div>
              
              <Alert className="border-primary/20 bg-white">
                <Target className="h-4 w-4 text-primary" />
                <AlertDescription className="text-primary">
                  <strong>Remember:</strong> The dashboard isn't just for reporting—it's a strategic tool for identifying expansion opportunities and maintaining executive alignment.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Ready to implement your success dashboard?</p>
              <p className="text-sm text-gray-600">Access templates, frameworks, and automated reporting tools</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Templates
              </Button>
              <Button>
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Review
              </Button>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}