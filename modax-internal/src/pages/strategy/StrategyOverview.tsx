import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageContainer } from '@/components/layout/PageLayout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { businessMetrics, getFormattedDealSize } from '@/config/business-metrics'
import { cn } from '@/lib/utils'
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  ChevronRight,
  Zap,
  Building2,
  Users,
  Network,
  Rocket,
  Trophy,
  Clock,
  CheckCircle,
  Star,
  FileText,
  Briefcase
} from 'lucide-react'

export default function StrategyOverview() {
  const navigate = useNavigate()
  // const [activeSection, setActiveSection] = useState<string | null>(null)
  const [expandedInsight, setExpandedInsight] = useState<number | null>(null)

  const marketStats = [
    { value: `${String(businessMetrics.marketReality.genAIPocFailureRate)}%`, label: 'GenAI POCs That Die', color: 'text-red-500' },
    { value: `$${String(businessMetrics.marketReality.wastedInvestment)}B`, label: 'Wasted Investment', color: 'text-orange-500' },
    { value: businessMetrics.marketReality.typicalProjectTime, label: 'Months Typical Time', color: 'text-blue-500' }
  ]

  const threeActJourney = [
    {
      phase: 'Find & Fix',
      timeframe: 'Months 1-3',
      items: ['Resurrect 1 POC', 'Production ready', '90-day delivery', `${String(getFormattedDealSize(businessMetrics.revenueProjections.dealSizes.entry))} investment`],
      color: 'emerald'
    },
    {
      phase: 'Prove & Scale',
      timeframe: 'Months 4-9', 
      items: ['Expand to dept', '3-5 use cases', 'Proven ROI', `${String(getFormattedDealSize(businessMetrics.revenueProjections.dealSizes.expansion))} scope`],
      color: 'primary'
    },
    {
      phase: 'Transform & Lead',
      timeframe: 'Months 10+',
      items: ['Enterprise platform', 'AI-native ops', 'Market leader', `${String(getFormattedDealSize(businessMetrics.revenueProjections.dealSizes.transformation))}+ value`],
      color: 'secondary'
    }
  ]

  const competitorInsights = [
    {
      category: 'Big Consultancies',
      companies: 'Accenture, Deloitte, IBM',
      approach: '18-month transformation programs, armies of consultants, massive budgets',
      failure: 'Enterprises can\'t sustain that timeline, budgets get cut, stakeholders change, momentum dies',
      model: 'Billable hours incentivize longer projects, not faster results'
    },
    {
      category: 'AI Specialists', 
      companies: 'DataRobot, H2O.ai, Palantir',
      approach: 'Sophisticated platforms requiring data science teams',
      failure: 'Enterprises lack the talent, tools don\'t integrate with legacy systems, business users can\'t adopt',
      model: 'License fees whether you succeed or not'
    },
    {
      category: 'Regional SIs & Startups',
      companies: 'Various smaller firms',
      approach: 'Cheap pilots, quick demos, "move fast and break things"',
      failure: 'Can\'t pass enterprise security, no production experience, disappear after the sale',
      model: 'Land and vanish, no skin in the game'
    }
  ]

  const revenueProjection = businessMetrics.revenueProjections.yearlyProjections

  const competitiveMoats = [
    { title: 'The Experience Moat', desc: 'We\'ve resurrected 50+ failed POCs', icon: Trophy },
    { title: 'The AWS Relationship', desc: 'Preferred partner status', icon: Star },
    { title: 'The Platform Advantage', desc: 'Pre-built components for common use cases', icon: Building2 },
    { title: 'The Talent Network', desc: 'Certified delivery partners', icon: Users },
    { title: 'The Trust Factor', desc: 'Success stories they can verify', icon: Shield }
  ]

  const marketOpportunity = {
    asean: { failed: 820, legacy: 1400, process: 2000, total: 4200 },
    india: { failed: 1280, legacy: 1800, process: 3400, total: 6500 },
    totalTam: 10.7,
    targetShare: 69,
    marketShare: 0.64
  }

  return (
    <PageContainer size="xl" className="py-6">
          {/* Hero Section */}
          <section className="relative mb-16 py-16">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl" />
            <div className="relative text-center max-w-5xl mx-auto px-6">
              <Badge variant="outline" className="mb-6 border-primary/20 text-primary px-4 py-2">
                Strategic Overview
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent leading-tight">
                The ${String(businessMetrics.marketSize.totalTAM)}B Opportunity Hidden in Plain Sight
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                While consultancies sell transformation theater and startups peddle more tools, 
                enterprises are drowning in failed experiments. The solution isn't another POC. 
                It's resurrection, production, and evolution.
              </p>
            </div>
          </section>

          {/* Market Reality Check */}
          <section className="mb-16">
            <Card className="overflow-hidden">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl mb-4">The Market Reality Check</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {marketStats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={cn("text-6xl font-bold mb-2", stat.color)}>
                        {stat.value}
                      </div>
                      <div className="text-lg text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    While consultancies sell transformation theater and startups peddle more tools, 
                    enterprises are drowning in failed experiments. The solution isn't another POC. 
                    It's <strong>resurrection, production, and evolution</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Strategic Insight - Why Everyone Else is Wrong */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">The Strategic Insight</h2>
              <h3 className="text-2xl font-semibold text-primary mb-6">Why Everyone Else is Wrong</h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                The market is fundamentally misunderstanding enterprise AI adoption. Here's what they're missing:
              </p>
            </div>

            <div className="space-y-6">
              {competitorInsights.map((insight, idx) => (
                <Card 
                  key={idx} 
                  className="cursor-pointer transition-all hover:shadow-lg"
                  onClick={() => { setExpandedInsight(expandedInsight === idx ? null : idx); }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{insight.category}</CardTitle>
                        <CardDescription className="text-sm mt-1">{insight.companies}</CardDescription>
                      </div>
                      <ChevronRight className={cn(
                        "h-5 w-5 transition-transform",
                        expandedInsight === idx && "rotate-90"
                      )} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Their Approach</p>
                        <p className="text-sm text-gray-600">{insight.approach}</p>
                      </div>
                      {expandedInsight === idx && (
                        <>
                          <div>
                            <p className="text-sm font-medium text-red-600 mb-1">Why It Fails</p>
                            <p className="text-sm text-gray-600">{insight.failure}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-orange-600 mb-1">Their Revenue Model</p>
                            <p className="text-sm text-gray-600">{insight.model}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-to-r from-emerald-50 to-primary-50 border-emerald-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Why ModAx is Different</CardTitle>
                <CardDescription className="text-center">
                  We've identified the three fundamental truths everyone else ignores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Truth 1: Enterprises Have Already Validated Demand</h4>
                    <p className="text-sm text-gray-600">
                      Every failed POC proves need. They've already spent money, identified use cases, gotten stakeholder buy-in.
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Truth 2: Small Victories Create Large Transformations</h4>
                    <p className="text-sm text-gray-600">
                      Big bang transformations have a 70% failure rate. Small, successful implementations create momentum.
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <Rocket className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Truth 3: Production Beats Perfection</h4>
                    <p className="text-sm text-gray-600">
                      A working system that handles real volume beats a perfect pilot every time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* The ModAx Method - Three Act Transformation */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">The ModAx Method</h2>
              <h3 className="text-2xl font-semibold text-primary mb-6">The Three-Act Transformation</h3>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                  {threeActJourney.map((phase, idx) => (
                    <div key={idx} className="p-8 text-center">
                      <div className={cn(
                        "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl",
                        phase.color === 'emerald' && 'bg-emerald-500',
                        phase.color === 'primary' && 'bg-primary',
                        phase.color === 'secondary' && 'bg-secondary'
                      )}>
                        {idx + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                      <p className="text-sm text-gray-600 mb-6">({phase.timeframe})</p>
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-sm text-gray-700 flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="bg-emerald-50 border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-lg">Phase 1: The Trojan Horse Entry</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>Low Risk:</strong> Fixed scope, fixed price, fixed timeline</p>
                  <p><strong>High Trust:</strong> Working with their existing investment</p>
                  <p><strong>Fast Value:</strong> 90 days to production vs 18 months</p>
                  <p><strong>Easy Yes:</strong> {getFormattedDealSize(businessMetrics.revenueProjections.dealSizes.entry)} decision vs $5M program</p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Phase 2: The Expansion</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>Proven Success:</strong> First win creates internal champions</p>
                  <p><strong>Mapped Landscape:</strong> We understand their data and systems</p>
                  <p><strong>Trust Earned:</strong> Delivered on promises, no surprises</p>
                  <p><strong>Clear ROI:</strong> Metrics justify larger investment</p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Phase 3: The Transformation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>Foundation Built:</strong> Multiple successes, proven patterns</p>
                  <p><strong>Organization Ready:</strong> Cultural shift has happened</p>
                  <p><strong>Platform Approach:</strong> Not rebuilding, but connecting</p>
                  <p><strong>Competitive Advantage:</strong> First mover in their industry</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg"
                onClick={() => { void navigate('/strategy/three-act-journey') }}
                className="bg-primary hover:bg-primary/90"
              >
                Explore the Full Methodology
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>

          {/* Revenue Model */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">The Revenue Model</h2>
              <h3 className="text-2xl font-semibold text-primary mb-6">Revenue Growth Trajectory</h3>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {revenueProjection.map((year, idx) => (
                    <div key={idx} className="">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">{year.year}: {idx === 0 ? 'Foundation Building' : idx === 1 ? 'Scaling Success' : 'Market Leadership'}</h3>
                        <div className="text-2xl font-bold text-primary">${String(year.total)}M</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div className="bg-emerald-50 p-4 rounded-lg">
                          <div className="font-medium mb-1">{year.entries} New entries @ {getFormattedDealSize(businessMetrics.revenueProjections.dealSizes.entry)}</div>
                          <div className="text-emerald-600 font-bold">${String(year.entriesRevenue)}M</div>
                        </div>
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <div className="font-medium mb-1">{year.expansions} Expansions @ {getFormattedDealSize(businessMetrics.revenueProjections.dealSizes.expansion)}</div>
                          <div className="text-primary font-bold">${String(year.expansionsRevenue)}M</div>
                        </div>
                        <div className="bg-secondary/5 p-4 rounded-lg">
                          <div className="font-medium mb-1">{year.transformations} Transformations @ {getFormattedDealSize(businessMetrics.revenueProjections.dealSizes.transformation)}</div>
                          <div className="text-secondary font-bold">${String(year.transformationsRevenue)}M</div>
                        </div>
                        {idx === 2 && (
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <div className="font-medium mb-1">Platform licensing</div>
                            <div className="text-orange-600 font-bold">$15M</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t text-center">
                  <div className="text-lg mb-2">3-Year Revenue: <span className="font-bold text-2xl">$68.5M</span></div>
                  <div className="text-primary text-xl font-bold">3-Year Goal: $75M+ (with platform & recurring revenue)</div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Competitive Moats */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Competitive Moats</h2>
              <h3 className="text-2xl font-semibold text-primary mb-6">Why No One Can Copy This</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {competitiveMoats.slice(0, 3).map((moat, idx) => (
                <Card key={idx} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <moat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg mb-2">{moat.title}</CardTitle>
                  <CardDescription>{moat.desc}</CardDescription>
                </Card>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {competitiveMoats.slice(3).map((moat, idx) => (
                <Card key={idx + 3} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <moat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg mb-2">{moat.title}</CardTitle>
                  <CardDescription>{moat.desc}</CardDescription>
                </Card>
              ))}
            </div>
          </section>

          {/* Market Opportunity */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">The Market Opportunity</h2>
              <h3 className="text-2xl font-semibold text-primary mb-6">Total Addressable Market</h3>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">ASEAN Markets - $4.2B</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Failed POCs</span>
                        <span className="font-bold">${String(marketOpportunity.asean.failed)}M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Legacy Modernization</span>
                        <span className="font-bold">${String(marketOpportunity.asean.legacy)}M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Process Transformation</span>
                        <span className="font-bold">${String(marketOpportunity.asean.process)}M</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-secondary">India Market - $6.5B</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Failed POCs</span>
                        <span className="font-bold">${String(marketOpportunity.india.failed)}M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Legacy Modernization</span>
                        <span className="font-bold">${String(marketOpportunity.india.legacy)}M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Process Transformation</span>
                        <span className="font-bold">${String(marketOpportunity.india.process)}M</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-4">${String(marketOpportunity.totalTam)}B</div>
                  <div className="text-xl text-gray-700 mb-4">Total TAM</div>
                  <div className="flex items-center justify-center space-x-8">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">${String(marketOpportunity.targetShare)}M</div>
                      <div className="text-sm text-gray-600">Our 3-Year Target</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">{marketOpportunity.marketShare}%</div>
                      <div className="text-sm text-gray-600">Market Share</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    size="lg"
                    onClick={() => { void navigate('/strategy/market-opportunity') }}
                    className="bg-primary hover:bg-primary/90"
                  >
                    View Detailed Market Analysis
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Success Formula */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">The Success Formula</h2>
              <h3 className="text-2xl font-semibold text-primary mb-6">Why This Approach Wins</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">For Customers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>Immediate Value:</strong> Failed investment recovered</p>
                  <p><strong>Managed Risk:</strong> Small bets, proven approach</p>
                  <p><strong>Fast Results:</strong> 90 days vs 18 months</p>
                  <p><strong>Clear Path:</strong> From experiment to empire</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <Rocket className="h-8 w-8 text-emerald-500 mb-2" />
                  <CardTitle className="text-lg">For ModAx</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>Efficient Sales:</strong> Shorter cycles, clear value</p>
                  <p><strong>Scalable Delivery:</strong> Reusable components</p>
                  <p><strong>Expanding Accounts:</strong> Land and expand model</p>
                  <p><strong>Premium Positioning:</strong> Value-based pricing</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <Network className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="text-lg">For Partners</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>AWS:</strong> Drives consumption growth</p>
                  <p><strong>Technology Partners:</strong> Integration opportunities</p>
                  <p><strong>Delivery Partners:</strong> Certified revenue stream</p>
                  <p><strong>Industry Partners:</strong> Sector expertise</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <Clock className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle className="text-lg">Market Timing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>GenAI hype:</strong> Settling into reality</p>
                  <p><strong>Failed experiments:</strong> Enterprises ready</p>
                  <p><strong>Technology mature:</strong> Production-ready</p>
                  <p><strong>Competition slow:</strong> First to market</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-emerald-500/10 rounded-3xl border border-primary/20">
            <h2 className="text-4xl font-bold mb-6">Ready to Lead the Market?</h2>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl text-gray-700 mb-4">
                This isn't about building another consultancy.
              </p>
              <p className="text-xl text-gray-700 mb-4">
                It's about creating a new category and owning it.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 text-lg">
                <p className="text-gray-600">Every enterprise has a graveyard.</p>
                <p className="text-gray-600">Every graveyard has gold.</p>
                <p className="text-gray-600">Every resurrection builds an empire.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button 
                size="lg"
                onClick={() => { void navigate('/playbooks') }}
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
              >
                View Playbooks
                <FileText className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => { void navigate('/sales-enablement') }}
                className="text-lg px-8 py-4"
              >
                Explore Tools
                <Briefcase className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="mt-16 mb-8">
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Key Takeaways for Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">1. We're Not Competing, We're Creating</h4>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• New category: "Failed POC to Production"</li>
                        <li>• Blue ocean: No direct competitors</li>
                        <li>• First mover: 18-24 month advantage</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">2. The Model is Proven</h4>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• Valuemax: Failed chatbot to AI platform</li>
                        <li>• ProcureHere: Struggling ISV to acquisition</li>
                        <li>• 50+ successful resurrections</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">3. The Economics Work</h4>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• 60% gross margins on delivery</li>
                        <li>• 80% client expansion rate</li>
                        <li>• 3x revenue per client over 2 years</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">4. The Timing is Perfect</h4>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• Market ready for new approach</li>
                        <li>• Technology finally mature</li>
                        <li>• Competition still using old models</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">5. The Vision is Achievable</h4>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• $75M in 3 years = 0.7% market share</li>
                        <li>• Conservative given market dynamics</li>
                        <li>• International expansion opportunity</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-center text-primary font-bold">
                        This is how we transform experiments into empires.
                        <br />
                        One resurrection at a time.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
    </PageContainer>
  )
}