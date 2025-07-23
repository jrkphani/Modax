import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { H1, H2, H3, P, Muted, Small } from '@/components/ui/typography'
import { PageLayout } from '@/components/layout/PageLayout'
import { cn } from '@/lib/utils'

interface RiskItem {
  id: string
  category: string
  risk: string
  impact: 'low' | 'medium' | 'high' | 'critical'
  likelihood: 'rare' | 'unlikely' | 'possible' | 'likely' | 'certain'
  mitigation: string
  owner: string
  status: 'identified' | 'analyzing' | 'mitigating' | 'resolved'
}

export default function RiskManagement() {
  // Risk matrix data
  const riskMatrix = {
    impact: ['Low', 'Medium', 'High', 'Critical'],
    likelihood: ['Rare', 'Unlikely', 'Possible', 'Likely', 'Certain']
  }

  // Sample risks for demonstration
  const activeRisks: RiskItem[] = [
    {
      id: 'RISK-001',
      category: 'Technical',
      risk: 'Legacy system API instability during peak loads',
      impact: 'high',
      likelihood: 'likely',
      mitigation: 'Implement caching layer and rate limiting. Schedule migrations during off-peak hours.',
      owner: 'Tech Lead',
      status: 'mitigating'
    },
    {
      id: 'RISK-002',
      category: 'Resource',
      risk: 'Key technical expert availability during critical phase',
      impact: 'high',
      likelihood: 'possible',
      mitigation: 'Cross-train team members. Document critical knowledge. Establish backup resources.',
      owner: 'Project Manager',
      status: 'mitigating'
    },
    {
      id: 'RISK-003',
      category: 'Integration',
      risk: 'Third-party service compatibility issues',
      impact: 'medium',
      likelihood: 'possible',
      mitigation: 'Early integration testing. Maintain fallback options. Regular vendor communication.',
      owner: 'Integration Lead',
      status: 'analyzing'
    },
    {
      id: 'RISK-004',
      category: 'Compliance',
      risk: 'Data privacy regulation changes',
      impact: 'critical',
      likelihood: 'unlikely',
      mitigation: 'Regular compliance reviews. Flexible data handling architecture. Legal team engagement.',
      owner: 'Compliance Officer',
      status: 'identified'
    }
  ]

  const riskCategories = [
    {
      name: 'Technical',
      icon: Activity,
      description: 'Architecture, integration, and performance risks',
      count: activeRisks.filter(r => r.category === 'Technical').length
    },
    {
      name: 'Resource',
      icon: Shield,
      description: 'Team availability, skills, and capacity risks',
      count: activeRisks.filter(r => r.category === 'Resource').length
    },
    {
      name: 'Integration',
      icon: TrendingUp,
      description: 'Third-party dependencies and system integration risks',
      count: activeRisks.filter(r => r.category === 'Integration').length
    },
    {
      name: 'Compliance',
      icon: Target,
      description: 'Regulatory and security compliance risks',
      count: activeRisks.filter(r => r.category === 'Compliance').length
    }
  ]

  const getRiskScore = (impact: RiskItem['impact'], likelihood: RiskItem['likelihood']): number => {
    const impactScore = { low: 1, medium: 2, high: 3, critical: 4 }
    const likelihoodScore = { rare: 1, unlikely: 2, possible: 3, likely: 4, certain: 5 }
    return impactScore[impact] * likelihoodScore[likelihood]
  }

  const getRiskLevel = (score: number): { label: string; color: string } => {
    if (score >= 12) return { label: 'Critical', color: 'text-red-600 bg-red-50' }
    if (score >= 8) return { label: 'High', color: 'text-orange-600 bg-orange-50' }
    if (score >= 4) return { label: 'Medium', color: 'text-yellow-600 bg-yellow-50' }
    return { label: 'Low', color: 'text-success bg-success/5' }
  }

  const getStatusIcon = (status: RiskItem['status']) => {
    switch (status) {
      case 'identified':
        return <AlertTriangle className="h-4 w-4" />
      case 'analyzing':
        return <Activity className="h-4 w-4" />
      case 'mitigating':
        return <Shield className="h-4 w-4" />
      case 'resolved':
        return <CheckCircle2 className="h-4 w-4" />
    }
  }

  return (
    <PageLayout>
      <div className="space-y-12">
        {/* Header */}
        <div>
          <H1>Risk Management</H1>
          <Lead className="mt-4 max-w-3xl">
            Proactive risk identification and mitigation strategies to ensure project success. 
            Monitor, assess, and address potential challenges before they impact delivery.
          </Lead>
        </div>

        {/* Risk Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {riskCategories.map((category) => (
            <Card key={category.name} className="border-gray-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <category.icon className="h-5 w-5 text-gray-600" />
                  <span className="text-2xl font-semibold">{category.count}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-base">{category.name}</CardTitle>
                <CardDescription className="mt-1 text-sm">
                  {category.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Risk Matrix */}
        <div>
          <H2>Risk Assessment Matrix</H2>
          <Card className="border-gray-200 mt-6">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-8">
                  <div className="flex-1">
                    <H3 className="text-lg mb-4">Impact vs Likelihood</H3>
                    <div className="relative">
                      <div className="grid grid-cols-5 gap-1">
                        {riskMatrix.likelihood.map((_, lIndex) => (
                          <div key={lIndex} className="grid grid-rows-4 gap-1">
                            {riskMatrix.impact.map((_, iIndex) => {
                              const score = (iIndex + 1) * (lIndex + 1)
                              const level = getRiskLevel(score)
                              return (
                                <div
                                  key={`${String(lIndex)}-${String(iIndex)}`}
                                  className={cn(
                                    "h-12 rounded flex items-center justify-center text-xs font-medium",
                                    level.color
                                  )}
                                >
                                  {String(score)}
                                </div>
                              )
                            })}
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                        {riskMatrix.likelihood.map((label) => (
                          <span key={label} className="text-center flex-1">
                            {label}
                          </span>
                        ))}
                      </div>
                      <Small className="mt-1 text-center block">Likelihood →</Small>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <H3 className="text-lg mb-4">Risk Levels</H3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-red-50 border border-red-200" />
                        <Small>Critical (12-20): Immediate action required</Small>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-orange-50 border border-orange-200" />
                        <Small>High (8-11): Active mitigation needed</Small>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-yellow-50 border border-yellow-200" />
                        <Small>Medium (4-7): Monitor and plan</Small>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-success/5 border border-success/20" />
                        <Small>Low (1-3): Accept or monitor</Small>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90">
                  <Small>← Impact</Small>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Risks */}
        <div>
          <H2>Active Risk Register</H2>
          <div className="mt-6 space-y-4">
            {activeRisks.map((risk) => {
              const score = getRiskScore(risk.impact, risk.likelihood)
              const level = getRiskLevel(score)
              
              return (
                <Card key={risk.id} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <Small className="font-mono">{risk.id}</Small>
                          <span className={cn(
                            "px-2 py-0.5 rounded-full text-xs font-medium",
                            level.color
                          )}>
                            {level.label} Risk (Score: {String(score)})
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            {getStatusIcon(risk.status)}
                            <span className="capitalize">{risk.status}</span>
                          </span>
                        </div>
                        <CardTitle className="text-lg">{risk.risk}</CardTitle>
                        <CardDescription>
                          Category: {risk.category} • Owner: {risk.owner}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <Small className="font-medium">Mitigation Strategy</Small>
                        <P className="text-sm mt-1">{risk.mitigation}</P>
                      </div>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <Muted>Impact</Muted>
                          <p className="capitalize font-medium">{risk.impact}</p>
                        </div>
                        <div>
                          <Muted>Likelihood</Muted>
                          <p className="capitalize font-medium">{risk.likelihood}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Risk Management Process */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle>Risk Management Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <H3 className="text-base">Identify</H3>
                </div>
                <P className="text-sm text-muted-foreground">
                  Continuous risk identification through team input, stakeholder feedback, 
                  and systematic analysis.
                </P>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <H3 className="text-base">Assess</H3>
                </div>
                <P className="text-sm text-muted-foreground">
                  Evaluate impact and likelihood using our standardized matrix. 
                  Prioritize based on risk scores.
                </P>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <H3 className="text-base">Mitigate</H3>
                </div>
                <P className="text-sm text-muted-foreground">
                  Develop and implement mitigation strategies. Assign ownership 
                  and track progress.
                </P>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <H3 className="text-base">Monitor</H3>
                </div>
                <P className="text-sm text-muted-foreground">
                  Regular reviews and updates. Adjust strategies based on 
                  changing conditions.
                </P>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}