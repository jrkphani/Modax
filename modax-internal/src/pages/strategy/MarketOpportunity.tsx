import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom'
import { PageLayout, PageContainer, PageHeader, PageContent } from '@/components/layout/PageLayout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  ArrowLeft, 
  TrendingUp, 
  Building, 
  Globe, 
  DollarSign,
  Users,
  Target,
  BarChart3,
  PieChart,
  Activity,
  AlertCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function MarketOpportunity() {
  const navigate = useNavigate()

  const marketSegments = [
    {
      segment: 'Failed POCs & Experiments',
      total: '$5.3B',
      breakdown: [
        { region: 'ASEAN', value: 2.1, color: 'bg-red-500' },
        { region: 'India', value: 3.2, color: 'bg-orange-500' }
      ],
      description: '73% of GenAI POCs never reach production',
      icon: AlertCircle,
      iconColor: 'text-red-500'
    },
    {
      segment: 'Legacy Modernization',
      total: '$3.2B',
      breakdown: [
        { sector: 'Financial Services', value: 1.2, color: 'bg-blue-500' },
        { sector: 'Healthcare', value: 0.8, color: 'bg-success/50' },
        { sector: 'Manufacturing', value: 0.7, color: 'bg-primary/50' },
        { sector: 'Retail', value: 0.5, color: 'bg-yellow-500' }
      ],
      description: 'Enterprise systems awaiting AI transformation',
      icon: Building,
      iconColor: 'text-blue-500'
    },
    {
      segment: 'Process Reinvention',
      total: '$2.2B',
      breakdown: [
        { process: 'Customer Service', value: 0.8, color: 'bg-emerald-500' },
        { process: 'Operations', value: 0.6, color: 'bg-teal-500' },
        { process: 'Analytics', value: 0.5, color: 'bg-cyan-500' },
        { process: 'Compliance', value: 0.3, color: 'bg-indigo-500' }
      ],
      description: 'AI-driven business process optimization',
      icon: Activity,
      iconColor: 'text-emerald-500'
    }
  ]

  const targetMarkets = [
    {
      region: 'Singapore',
      tam: '$1.8B',
      penetration: '12%',
      growth: '+28%',
      priority: 'Primary',
      opportunities: ['Financial Services', 'Healthcare', 'Government']
    },
    {
      region: 'Malaysia',
      tam: '$1.2B',
      penetration: '8%',
      growth: '+32%',
      priority: 'Primary',
      opportunities: ['Manufacturing', 'Retail', 'Banking']
    },
    {
      region: 'Thailand',
      tam: '$0.9B',
      penetration: '6%',
      growth: '+35%',
      priority: 'Secondary',
      opportunities: ['Tourism', 'Agriculture Tech', 'Finance']
    },
    {
      region: 'India',
      tam: '$3.2B',
      penetration: '5%',
      growth: '+42%',
      priority: 'Primary',
      opportunities: ['IT Services', 'Banking', 'Healthcare']
    },
    {
      region: 'Indonesia',
      tam: '$1.5B',
      penetration: '4%',
      growth: '+38%',
      priority: 'Secondary',
      opportunities: ['E-commerce', 'Fintech', 'Logistics']
    },
    {
      region: 'Philippines',
      tam: '$0.8B',
      penetration: '3%',
      growth: '+30%',
      priority: 'Tertiary',
      opportunities: ['BPO', 'Real Estate', 'Retail']
    }
  ]

  const competitiveLandscape = [
    {
      type: 'Big Consultancies',
      players: ['Accenture', 'Deloitte', 'PwC', 'McKinsey'],
      approach: '18-month transformations',
      avgDeal: '$5M-$50M',
      weakness: 'Slow, expensive, low success rate',
      ourAdvantage: '90-day sprints, proven ROI'
    },
    {
      type: 'Cloud Providers',
      players: ['AWS', 'Azure', 'GCP'],
      approach: 'Platform-first solutions',
      avgDeal: '$500K-$5M',
      weakness: 'Technical focus, no business transformation',
      ourAdvantage: 'Business-first, platform-agnostic'
    },
    {
      type: 'AI Startups',
      players: ['100+ regional players'],
      approach: 'Point solutions',
      avgDeal: '$50K-$500K',
      weakness: 'Narrow scope, integration challenges',
      ourAdvantage: 'Enterprise-ready, full stack'
    },
    {
      type: 'System Integrators',
      players: ['Infosys', 'TCS', 'Wipro'],
      approach: 'Staff augmentation',
      avgDeal: '$1M-$10M',
      weakness: 'Bodies not solutions',
      ourAdvantage: 'Outcome-based, IP-driven'
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
              title="Market Opportunity Analysis"
              description="$10.7B addressable market in ASEAN & India for AI transformation"
              actions={
                <Badge variant="outline" className="text-lg px-3 py-1">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  38% CAGR
                </Badge>
              }
            />
          </div>

          {/* Executive Summary */}
          <Card className="mb-8 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardTitle>Executive Summary</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">$10.7B</div>
                  <p className="text-sm text-gray-600">Total Addressable Market</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Target className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">$300M+</div>
                  <p className="text-sm text-gray-600">3-Year Revenue Target</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">2,400+</div>
                  <p className="text-sm text-gray-600">Target Enterprises</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                The enterprise AI transformation market in ASEAN and India represents a massive opportunity driven by 
                failed experiments, legacy modernization needs, and process reinvention demands. With 73% of GenAI POCs 
                failing to reach production, enterprises are desperate for a partner who can deliver real results.
              </p>
            </CardContent>
          </Card>

          {/* Market Segments */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Market Segments Breakdown</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {marketSegments.map((segment, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <segment.icon className={cn("h-6 w-6", segment.iconColor)} />
                      <span className="text-2xl font-bold">{segment.total}</span>
                    </div>
                    <CardTitle className="text-lg">{segment.segment}</CardTitle>
                    <CardDescription>{segment.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {segment.breakdown.map((item, itemIdx) => (
                        <div key={itemIdx}>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-600">
                              {'region' in item ? item.region : 'sector' in item ? item.sector : item.process}
                            </span>
                            <span className="font-medium">${String(item.value)}B</span>
                          </div>
                          <Progress 
                            value={(item.value / parseFloat(segment.total.replace('$', '').replace('B', ''))) * 100} 
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Total Market Visual */}
            <Card className="mt-6 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Combined Market Opportunity</p>
                    <p className="text-4xl font-bold">$10.7B</p>
                  </div>
                  <PieChart className="h-16 w-16 text-primary" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Geographic Markets */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Target Geographic Markets</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetMarkets.map((market, idx) => (
                <Card key={idx} className={cn(
                  "hover:shadow-lg transition-shadow",
                  market.priority === 'Primary' && "border-primary/30"
                )}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-5 w-5 text-gray-500" />
                        <CardTitle className="text-lg">{market.region}</CardTitle>
                      </div>
                      <Badge 
                        variant={market.priority === 'Primary' ? 'default' : 
                                market.priority === 'Secondary' ? 'secondary' : 'outline'}
                      >
                        {market.priority}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-xs text-gray-500">TAM</p>
                        <p className="font-bold">{market.tam}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Penetration</p>
                        <p className="font-bold text-primary">{market.penetration}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Growth</p>
                        <p className="font-bold text-emerald-500">{market.growth}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-gray-600 mb-2">Key Opportunities:</p>
                      <div className="flex flex-wrap gap-1">
                        {market.opportunities.map((opp, oppIdx) => (
                          <Badge key={oppIdx} variant="outline" className="text-xs">
                            {opp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Competitive Landscape */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Competitive Landscape</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {competitiveLandscape.map((competitor, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{competitor.type}</CardTitle>
                    <CardDescription>{competitor.approach}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">Key Players</p>
                        <div className="flex flex-wrap gap-1">
                          {competitor.players.map((player, playerIdx) => (
                            <Badge key={playerIdx} variant="secondary" className="text-xs">
                              {player}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Avg Deal Size</p>
                          <p className="font-bold">{competitor.avgDeal}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-red-600">Their Weakness</p>
                          <p className="text-sm">{competitor.weakness}</p>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t">
                        <p className="text-sm font-medium text-emerald-600 mb-1">Our Advantage</p>
                        <p className="text-sm font-semibold">{competitor.ourAdvantage}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Growth Projections */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>3-Year Growth Projections</CardTitle>
                <CardDescription>Path to $300M+ revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Year 1 (2024)</span>
                      <span className="text-lg font-bold">$45M</span>
                    </div>
                    <Progress value={15} className="h-3" />
                    <p className="text-sm text-gray-600 mt-1">150 enterprise clients, focus on failed POCs</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Year 2 (2025)</span>
                      <span className="text-lg font-bold">$120M</span>
                    </div>
                    <Progress value={40} className="h-3" />
                    <p className="text-sm text-gray-600 mt-1">400 clients, expansion into platform deals</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Year 3 (2026)</span>
                      <span className="text-lg font-bold">$320M</span>
                    </div>
                    <Progress value={100} className="h-3" />
                    <p className="text-sm text-gray-600 mt-1">800+ clients, intelligence fabric adoption</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Capture This Opportunity?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  The market is ready. The approach is proven. The tools are built. 
                  Now we need you to execute.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={() => navigate('/strategy/entry-strategies')}
                    className="bg-primary hover:bg-primary/90"
                  >
                    View Entry Strategies
                    <BarChart3 className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('/sales-enablement/battle-cards')}
                  >
                    Access Battle Cards
                    <Target className="ml-2 h-5 w-5" />
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