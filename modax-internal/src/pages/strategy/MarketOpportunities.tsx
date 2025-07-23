import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { H2, H3, P, Lead } from '@/components/ui/typography'

export default function MarketOpportunities() {
  const opportunities = [
    {
      id: 'failed-poc',
      value: '$2.1B',
      title: 'Failed POC Recovery',
      description: '73% of GenAI experiments never reach production',
      details: [
        'Abandoned proof-of-concepts represent sunk costs',
        'Teams lack pathway from experimentation to production',
        'Existing investments can be salvaged and scaled'
      ],
      metrics: {
        'Average POC Investment': '$150K-$500K',
        'Success Rate': '27%',
        'Recovery Potential': '85%'
      }
    },
    {
      id: 'legacy-modernization',
      value: '$3.2B',
      title: 'Legacy Modernization',
      description: '20-year-old systems blocking innovation',
      details: [
        'Critical business logic trapped in outdated systems',
        'High maintenance costs and security risks',
        'Inability to integrate with modern AI capabilities'
      ],
      metrics: {
        'Average System Age': '18 years',
        'Maintenance Cost': '78% of IT budget',
        'Modernization ROI': '312%'
      }
    },
    {
      id: 'process-reinvention',
      value: '$5.4B',
      title: 'Process Reinvention',
      description: 'Manual workflows wasting human potential',
      details: [
        'Knowledge workers spend 60% time on repetitive tasks',
        'Institutional knowledge not captured or leveraged',
        'AI can automate and enhance decision-making'
      ],
      metrics: {
        'Automation Potential': '65%',
        'Productivity Gain': '40%',
        'Error Reduction': '89%'
      }
    }
  ]

  const totalMarket = opportunities.reduce((sum, opp) => {
    const value = parseFloat(opp.value.replace('$', '').replace('B', ''))
    return sum + value
  }, 0)

  return (
    <PageLayout>
      <PageContainer size="lg">
        <PageHeader
          title="Market Opportunities"
          description="Three pathways to enterprise transformation"
        />

        <PageContent className="space-y-16">
          {/* Total Market Size */}
          <div className="text-center space-y-4 py-8">
            <H2 className="border-0">Total Addressable Market</H2>
            <div className="text-5xl font-bold">${totalMarket.toFixed(1)}B</div>
            <Lead>Mid-market enterprises ready for AI transformation</Lead>
          </div>

          {/* Market Segments */}
          <div className="space-y-8">
            {opportunities.map((opportunity) => (
              <Card key={opportunity.id} className="border-gray-200">
                <CardHeader className="space-y-4">
                  <div className="flex items-baseline justify-between">
                    <H3>{opportunity.title}</H3>
                    <div className="text-3xl font-bold">{opportunity.value}</div>
                  </div>
                  <Lead>{opportunity.description}</Lead>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Points */}
                  <div className="space-y-2">
                    {opportunity.details.map((detail, index) => (
                      <P key={index} className="mt-2">• {detail}</P>
                    ))}
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    {Object.entries(opportunity.metrics).map(([metric, value]) => (
                      <div key={metric} className="space-y-1">
                        <P className="text-sm text-muted-foreground mt-0">{metric}</P>
                        <div className="text-xl font-semibold">{value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Market Dynamics */}
          <div className="space-y-6 pt-8">
            <H2>Market Dynamics</H2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <H3>Demand Drivers</H3>
                <P>• AI adoption urgency increasing</P>
                <P>• Competitive pressure from digital natives</P>
                <P>• Cost reduction mandates</P>
                <P>• Talent retention challenges</P>
              </div>

              <div className="space-y-4">
                <H3>Success Factors</H3>
                <P>• Proven 90-day delivery model</P>
                <P>• Intelligence Fabric methodology</P>
                <P>• Domain expertise capture</P>
                <P>• Progressive transformation approach</P>
              </div>
            </div>
          </div>

          {/* Target Segments */}
          <div className="space-y-6">
            <H2>Target Market Segments</H2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <H3>Industries</H3>
                </CardHeader>
                <CardContent className="space-y-2">
                  <P className="mt-0">• Financial Services (28%)</P>
                  <P className="mt-0">• Healthcare (24%)</P>
                  <P className="mt-0">• Manufacturing (22%)</P>
                  <P className="mt-0">• Retail & E-commerce (16%)</P>
                  <P className="mt-0">• Other (10%)</P>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <H3>Company Profile</H3>
                </CardHeader>
                <CardContent className="space-y-2">
                  <P className="mt-0">• $100M - $1B revenue</P>
                  <P className="mt-0">• 500-5,000 employees</P>
                  <P className="mt-0">• Legacy systems 10+ years</P>
                  <P className="mt-0">• Failed AI initiatives</P>
                  <P className="mt-0">• IT modernization mandate</P>
                </CardContent>
              </Card>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}