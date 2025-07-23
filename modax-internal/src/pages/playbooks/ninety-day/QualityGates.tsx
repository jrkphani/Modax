import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Target, 
  Activity, 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ArrowLeft, 
  FileText, 
  Download 
} from 'lucide-react';

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
      const thresholdVal = parseFloat((/\d+/.exec(threshold))?.[0] || '0')
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
      <div className="space-y-6">
        {/* Header */}
        <div className="border-b pb-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/playbooks/ninety-day">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Overview
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quality Gates</h1>
          <p className="text-gray-600">
            Systematic validation checkpoints ensuring project success throughout the 90-day journey
          </p>
        </div>
        {/* Overview Card */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Quality Gate Process</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Each gate represents a critical validation point in the modernization journey. 
              Projects must meet all criteria before advancing to the next stage.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm text-gray-600">Passed</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <span className="text-sm text-gray-600">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <span className="text-sm text-gray-600">Failed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quality Stages */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Validation Stages</h2>
            {qualityStages.map((stage, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {getStatusIcon(stage.status)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{stage.stage}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">Gate {index + 1} of {qualityStages.length}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={
                        index === 0 ? 'bg-success/10 text-success-700' :
                        index === 1 ? 'bg-success/10 text-success-700' :
                        index === 2 ? 'bg-amber-100 text-amber-700' :
                        'bg-gray-100 text-gray-700'
                      }
                    >
                      {index < 2 ? 'Completed' : index === 2 ? 'In Progress' : 'Pending'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Metrics */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Key Metrics</h4>
                    <div className="space-y-2">
                      {stage.metrics.map((metric, mIndex) => {
                        const status = getMetricStatus(metric.current, metric.threshold)
                        return (
                          <div key={mIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              {getMetricIcon(status)}
                              <span className="text-sm font-medium text-gray-900">{metric.metric}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-xs text-gray-500">Target: {metric.threshold}</span>
                              <span className="text-sm font-medium">{metric.current}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Validation Criteria */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Validation Criteria</h4>
                    <ul className="space-y-2">
                      {stage.validationCriteria.map((criteria, cIndex) => (
                        <li key={cIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        {/* Summary Card */}
        <Card>
          <CardHeader>
            <CardTitle>Gate Progression Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Projects advance through gates sequentially. Failing to meet criteria at any gate triggers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Immediate remediation planning</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Root cause analysis</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Stakeholder notification</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Re-validation after corrections</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4">
          <Button variant="outline" className="flex-1">
            <FileText className="h-4 w-4 mr-2" />
            View Gate Templates
          </Button>
          <Button variant="outline" className="flex-1">
            <Download className="h-4 w-4 mr-2" />
            Export Gate Report
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}