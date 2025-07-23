import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { H1, H2, P, Lead } from '@/components/ui/typography'
import { PageContainer } from '@/components/layout/PageLayout'
import { FileText, FileCheck, AlertTriangle, ArrowRight, Clock, Target, Shield } from 'lucide-react'

export default function OperationsCenter() {
  const operationTools = [
    {
      id: '90-day-playbook',
      title: '90-Day Playbook',
      description: 'Transform POCs into production systems with our proven execution framework',
      icon: FileText,
      path: '/90-day-playbook',
      metrics: {
        label: 'Success Rate',
        value: '89%'
      }
    },
    {
      id: 'quality-gates',
      title: 'Quality Gates',
      description: 'Ensure delivery excellence with structured checkpoints and validation',
      icon: FileCheck,
      path: '/operations/quality-gates',
      metrics: {
        label: 'Gates Passed',
        value: '156'
      }
    },
    {
      id: 'risk-management',
      title: 'Risk Management',
      description: 'Proactive identification and mitigation of project risks',
      icon: AlertTriangle,
      path: '/operations/risk-management',
      metrics: {
        label: 'Risks Mitigated',
        value: '94%'
      }
    }
  ]

  const keyMetrics = [
    { label: 'Active Projects', value: '12', icon: Clock },
    { label: 'On-Time Delivery', value: '96%', icon: Target },
    { label: 'Quality Score', value: '9.2/10', icon: Shield }
  ]

  return (
    <PageContainer className="py-6">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <H1>Operations Center</H1>
          <Lead className="mt-4 max-w-3xl">
            Execute with precision. Our operational frameworks transform experiments into 
            enterprise-ready systems through proven methodologies and rigorous quality controls.
          </Lead>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyMetrics.map((metric) => (
            <Card key={metric.label} className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-3xl font-semibold mt-1">{metric.value}</p>
                  </div>
                  <metric.icon className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Operation Tools */}
        <div>
          <H2 className="mb-6">Operational Excellence Tools</H2>
          <div className="grid gap-6">
            {operationTools.map((tool) => (
              <Card key={tool.id} className="group hover:border-gray-300 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <tool.icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-xl">{tool.title}</CardTitle>
                        <CardDescription className="text-base">
                          {tool.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{tool.metrics.label}</p>
                      <p className="text-2xl font-semibold">{tool.metrics.value}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link to={tool.path}>
                    <Button 
                      variant="ghost" 
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      Access Tool
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Execution Philosophy */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle>Our Execution Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Speed with Quality</h3>
                <P className="text-sm text-muted-foreground">
                  90-day sprints with built-in quality gates ensure rapid delivery 
                  without compromising excellence.
                </P>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Risk-First Approach</h3>
                <P className="text-sm text-muted-foreground">
                  Identify and mitigate risks early. Every project starts with a 
                  comprehensive risk assessment.
                </P>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Continuous Validation</h3>
                <P className="text-sm text-muted-foreground">
                  Regular checkpoints and stakeholder reviews ensure alignment 
                  and early course correction.
                </P>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}