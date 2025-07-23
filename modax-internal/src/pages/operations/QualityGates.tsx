import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { H1, H2, H3, P, Lead, Muted, Large } from '@/components/ui/typography'
import { CheckCircle2, AlertCircle, XCircle, ArrowRight, Shield, Activity, Target, TrendingUp } from 'lucide-react'

export default function QualityGates() {
  const qualityStages = [
    {
      stage: 'Gate 1: Initial Assessment',
      status: 'entry',
      metrics: [
        { metric: 'Code Quality Score', threshold: '≥ 7.0/10', current: '8.2' },
        { metric: 'Test Coverage', threshold: '≥ 80%', current: '85%' },
        { metric: 'Technical Debt Ratio', threshold: '< 5%', current: '3.2%' }
      ],
      validationCriteria: [
        'Legacy system analysis complete',
        'Business rules documented',
        'Integration points identified',
        'Risk assessment approved'
      ]
    },
    {
      stage: 'Gate 2: Design Validation',
      status: 'design',
      metrics: [
        { metric: 'Architecture Review', threshold: 'Approved', current: 'Pending' },
        { metric: 'Security Assessment', threshold: 'Pass', current: 'Pass' },
        { metric: 'Performance Baseline', threshold: 'Established', current: 'Done' }
      ],
      validationCriteria: [
        'Target architecture approved',
        'Migration strategy defined',
        'Resource requirements verified',
        'Stakeholder sign-off obtained'
      ]
    },
    {
      stage: 'Gate 3: Implementation Review',
      status: 'implementation',
      metrics: [
        { metric: 'Sprint Velocity', threshold: '≥ 80%', current: '92%' },
        { metric: 'Defect Density', threshold: '< 0.5/KLOC', current: '0.3' },
        { metric: 'Code Review Coverage', threshold: '100%', current: '100%' }
      ],
      validationCriteria: [
        'Core functionality implemented',
        'Integration tests passing',
        'Performance targets met',
        'Security requirements satisfied'
      ]
    },
    {
      stage: 'Gate 4: Pre-Production',
      status: 'pre-production',
      metrics: [
        { metric: 'UAT Completion', threshold: '100%', current: '75%' },
        { metric: 'Performance Tests', threshold: 'Pass', current: 'In Progress' },
        { metric: 'Documentation', threshold: 'Complete', current: '90%' }
      ],
      validationCriteria: [
        'User acceptance testing complete',
        'Performance benchmarks achieved',
        'Deployment procedures tested',
        'Rollback plan validated'
      ]
    },
    {
      stage: 'Gate 5: Go-Live Readiness',
      status: 'go-live',
      metrics: [
        { metric: 'All Gates Passed', threshold: 'Yes', current: 'Pending' },
        { metric: 'Risk Score', threshold: '< 3.0', current: '2.1' },
        { metric: 'Team Readiness', threshold: '100%', current: '95%' }
      ],
      validationCriteria: [
        'Production environment ready',
        'Support team trained',
        'Monitoring systems active',
        'Executive approval received'
      ]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'entry':
        return <Shield className="h-5 w-5 text-blue-600" />
      case 'design':
        return <Target className="h-5 w-5 text-primary" />
      case 'implementation':
        return <Activity className="h-5 w-5 text-orange-600" />
      case 'pre-production':
        return <TrendingUp className="h-5 w-5 text-success" />
      case 'go-live':
        return <CheckCircle2 className="h-5 w-5 text-emerald-600" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />
    }
  }

  const getMetricStatus = (current: string, threshold: string) => {
    // Simple logic for demo - in real app would be more sophisticated
    if (current === 'Pass' || current === 'Done' || current === 'Approved') {
      return 'pass'
    } else if (current === 'Pending' || current === 'In Progress') {
      return 'pending'
    } else if (current.includes('%')) {
      const currentVal = parseFloat(current)
      const thresholdVal = parseFloat(threshold.match(/\d+/)?.[0] || '0')
      return currentVal >= thresholdVal ? 'pass' : 'fail'
    }
    return 'pending'
  }

  const getMetricIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle2 className="h-4 w-4 text-success" />
      case 'fail':
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
    }
  }

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Quality Gates"
          description="Systematic validation checkpoints ensuring project success"
        />

        <PageContent className="space-y-8">
          {/* Overview Card */}
          <Card>
            <CardHeader>
              <CardTitle>Quality Gate Process</CardTitle>
              <CardDescription>
                <Lead className="text-muted-foreground">
                  Each gate represents a critical validation point in the modernization journey. 
                  Projects must meet all criteria before advancing to the next stage.
                </Lead>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <P>
                  Our quality gate framework ensures consistent delivery standards across all modernization projects. 
                  Each gate includes specific metrics, validation criteria, and stakeholder approvals.
                </P>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <Muted>Passed</Muted>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <Muted>In Progress</Muted>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <Muted>Failed</Muted>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quality Stages */}
          <div className="space-y-6">
            <H2>Validation Stages</H2>
            {qualityStages.map((stage, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(stage.status)}
                      <CardTitle className="text-xl">{stage.stage}</CardTitle>
                    </div>
                    {index < qualityStages.length - 1 && (
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Metrics */}
                  <div>
                    <H3 className="text-base mb-3">Key Metrics</H3>
                    <div className="space-y-2">
                      {stage.metrics.map((metric, mIndex) => {
                        const status = getMetricStatus(metric.current, metric.threshold)
                        return (
                          <div key={mIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                            <div className="flex items-center gap-2">
                              {getMetricIcon(status)}
                              <P className="text-sm font-medium !mt-0">{metric.metric}</P>
                            </div>
                            <div className="flex items-center gap-4">
                              <Muted className="text-sm !mt-0">Target: {metric.threshold}</Muted>
                              <Large className="text-sm">Current: {metric.current}</Large>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Validation Criteria */}
                  <div>
                    <H3 className="text-base mb-3">Validation Criteria</H3>
                    <ul className="space-y-2">
                      {stage.validationCriteria.map((criteria, cIndex) => (
                        <li key={cIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <P className="text-sm !mt-0">{criteria}</P>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Card */}
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle>Gate Progression</CardTitle>
            </CardHeader>
            <CardContent>
              <P className="mb-4">
                Projects advance through gates sequentially. Failing to meet criteria at any gate triggers:
              </P>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <P className="!mt-0">Immediate remediation planning</P>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <P className="!mt-0">Root cause analysis</P>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <P className="!mt-0">Stakeholder notification</P>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <P className="!mt-0">Re-validation after corrections</P>
                </li>
              </ul>
            </CardContent>
          </Card>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}