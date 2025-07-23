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
import { 
  Clock,
  Target,
  Copy,
  CheckCircle,
  Users,
  Building,
  Cpu,
  TrendingUp,
  Play
} from 'lucide-react'

export default function ElevatorPitches() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (text: string, index: number) => {
    void navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => { setCopiedIndex(null); }, 2000)
  }

  const pitches = {
    '30-second': {
      executive: {
        title: 'Executive Decision Maker',
        context: 'C-suite, focused on business outcomes',
        pitch: 'We transform legacy applications into AI-native systems in 90 days. Unlike traditional consultants who deliver POCs, we build production systems that capture your operational intelligence. Our enterprise-proven team has modernized systems for 50+ Fortune 500 companies. We start with one critical application that proves the model and funds the transformation.',
        keyPoints: ['90-day production delivery', 'Self-funding model', 'Enterprise-proven team', 'Intelligence capture'],
        followUp: 'Which of your legacy applications is costing you the most right now?'
      },
      technical: {
        title: 'Technical Leader',
        context: 'CTO, VP Engineering, focused on implementation',
        pitch: 'We specialize in modernizing legacy enterprise applications without the typical rip-and-replace approach. Our team embeds with yours to transform applications into cloud-native, AI-ready systems while capturing decades of embedded business logic. We\'ve done this for 50+ Fortune 500 companies, and now we\'re bringing that expertise to mid-market leaders.',
        keyPoints: ['Not rip-and-replace', 'Knowledge transfer', 'Cloud-native transformation', 'Proven methodology'],
        followUp: 'What\'s your biggest technical debt challenge right now?'
      },
      financial: {
        title: 'Financial Decision Maker',
        context: 'CFO, Finance leaders, focused on ROI',
        pitch: 'We deliver application modernization that\'s self-funding - the first application pays for the second. Our fixed-price, outcome-based model means your risk is capped while capturing 20-40% efficiency gains. Clients typically see 300% ROI within 18 months, with payback starting in month 4.',
        keyPoints: ['Self-funding model', 'Fixed-price delivery', '300% typical ROI', 'Month 4 payback'],
        followUp: 'What would a 30% reduction in IT operational costs mean for your budget?'
      }
    },
    '90-second': {
      standard: {
        title: 'Standard 90-Second Pitch',
        context: 'General audience, balanced technical and business',
        pitch: `ModAx transforms legacy enterprise applications into AI-native systems that capture and leverage your operational intelligence.

Here's the problem: You have 20+ years of business knowledge trapped in legacy systems. Traditional approaches either ignore this intelligence with rip-and-replace, or preserve the problems with lift-and-shift.

We're different. Our enterprise-proven team embeds with yours to modernize applications in 90-day sprints. We don't build POCs - we build production systems from day one.

Our Intelligence Fabric captures your operational knowledge as we modernize, turning institutional memory into competitive advantage. This isn't just about making old systems new - it's about making your entire operation smarter.

We've done this for 50+ Fortune 500 companies. Now we're bringing enterprise-grade expertise to mid-market leaders who move faster and value results over process.

The model is self-funding - the efficiency gains from the first application pay for the next. Most clients see 300% ROI within 18 months.`,
        keyPoints: ['Intelligence capture focus', '90-day production sprints', 'Self-funding model', 'Enterprise expertise for mid-market'],
        followUp: 'Tell me about your most critical legacy application - what would happen if it was modern and intelligent tomorrow?'
      }
    },
    '3-minute': {
      comprehensive: {
        title: 'Comprehensive Value Proposition',
        context: 'Deeper dive for engaged prospects',
        pitch: `Let me share how ModAx is revolutionizing application modernization for mid-market enterprises.

THE CHALLENGE:
Every established company faces the same dilemma - critical applications built decades ago that now constrain growth. These systems contain irreplaceable business logic but run on outdated technology. Traditional solutions fail: Rip-and-replace destroys institutional knowledge. Lift-and-shift just moves problems to the cloud. POCs waste time without production results.

OUR APPROACH:
ModAx takes a fundamentally different approach. We see legacy applications not as technical debt, but as intelligence assets. Our methodology has three pillars:

1. PRODUCTION-FIRST DELIVERY
We don't do POCs. Every engagement delivers production-ready systems in 90-day sprints. This creates immediate value and builds momentum.

2. INTELLIGENCE FABRIC
As we modernize, we capture and encode your operational knowledge. Business rules, edge cases, tribal knowledge - it all becomes part of an intelligent layer that makes your entire operation smarter.

3. EMBEDDED TEAM MODEL
Our experts work alongside your team, ensuring knowledge transfer and building internal capabilities. You're stronger after we leave, not dependent.

THE RESULTS:
- 90 days to first production deployment
- 20-40% operational efficiency gains
- 300% average ROI within 18 months
- Zero critical knowledge loss
- AI-ready architecture from day one

WHO WE SERVE:
Mid-market enterprises ($100M-$1B revenue) in regulated industries who need enterprise-grade solutions but move with startup speed. Companies where application downtime is measured in millions and transformation failure isn't an option.

WHY NOW:
Every day you wait, competitors get smarter while you fall further behind. But more importantly, the people who understand your legacy systems are retiring. Their knowledge walks out the door unless you capture it now.

We've proven this approach with 50+ Fortune 500 companies. Names you'd recognize in financial services, healthcare, and manufacturing. Now we're bringing this expertise to mid-market leaders who are ready to transform.`,
        keyPoints: ['Complete problem/solution fit', 'Three-pillar methodology', 'Specific target market', 'Urgency drivers', 'Social proof'],
        followUp: 'Based on what I\'ve shared, what resonates most with your current challenges?'
      }
    }
  }

  const industryVariations = [
    {
      industry: 'Financial Services',
      icon: Building,
      pitch: 'We help banks and financial institutions modernize core systems while maintaining compliance. Our Intelligence Fabric captures decades of risk models and regulatory logic, ensuring nothing is lost in transformation.',
      emphasis: 'Compliance preservation, risk intelligence, regulatory expertise'
    },
    {
      industry: 'Healthcare',
      icon: Users,
      pitch: 'We transform healthcare applications while preserving critical patient safety logic and clinical workflows. Our approach ensures HIPAA compliance while enabling AI-driven insights from your operational data.',
      emphasis: 'Patient safety, HIPAA compliance, clinical workflow preservation'
    },
    {
      industry: 'Manufacturing',
      icon: Cpu,
      pitch: 'We modernize manufacturing systems that run your production lines and supply chains. Our Intelligence Fabric captures equipment knowledge and operational patterns that took decades to optimize.',
      emphasis: 'Production continuity, supply chain intelligence, equipment expertise'
    }
  ]

  const practiceScenarios = [
    {
      scenario: 'Cold Outreach Call',
      setup: 'You have 30 seconds before they say "not interested"',
      tips: ['Lead with the pain point', 'Use specific numbers (90 days, 300% ROI)', 'End with a question']
    },
    {
      scenario: 'Conference Networking',
      setup: 'Met at the coffee station, they asked "what do you do?"',
      tips: ['Start conversational', 'Use an analogy they relate to', 'Invite to continue over coffee']
    },
    {
      scenario: 'Executive Introduction',
      setup: 'Your champion is introducing you to their CEO',
      tips: ['Acknowledge the introduction', 'Focus on business outcomes', 'Reference their specific industry']
    },
    {
      scenario: 'Investor/Board Meeting',
      setup: 'Asked to explain ModAx in one minute',
      tips: ['Start with market opportunity', 'Emphasize differentiation', 'Include growth metrics']
    }
  ]

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Elevator Pitches"
          description="Compelling pitches for every audience and timeframe"
        />

        <PageContent className="space-y-8">
          {/* Time-based Pitches */}
          <Tabs defaultValue="30-second" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="30-second" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                30 Second
              </TabsTrigger>
              <TabsTrigger value="90-second" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                90 Second
              </TabsTrigger>
              <TabsTrigger value="3-minute" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                3 Minute
              </TabsTrigger>
            </TabsList>

            <TabsContent value="30-second" className="space-y-6">
              {Object.entries(pitches['30-second']).map(([key, pitch], index) => (
                <Card key={key} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{pitch.title}</CardTitle>
                        <CardDescription>{pitch.context}</CardDescription>
                      </div>
                      <Badge variant="outline">30 seconds</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg relative">
                      <p className="text-sm leading-relaxed">{pitch.pitch}</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() => { handleCopy(pitch.pitch, index); }}
                      >
                        {copiedIndex === index ? (
                          <CheckCircle className="h-4 w-4 text-success" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Key Points to Emphasize:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pitch.keyPoints.map((point, i) => (
                          <Badge key={i} variant="secondary">{point}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Follow-up Question:</h4>
                      <p className="text-sm italic text-gray-600">"{pitch.followUp}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="90-second" className="space-y-6">
              {Object.entries(pitches['90-second']).map(([key, pitch], index) => (
                <Card key={key} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{pitch.title}</CardTitle>
                        <CardDescription>{pitch.context}</CardDescription>
                      </div>
                      <Badge variant="outline">90 seconds</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg relative">
                      <p className="text-sm leading-relaxed whitespace-pre-line">{pitch.pitch}</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() => { handleCopy(pitch.pitch, index + 10); }}
                      >
                        {copiedIndex === index + 10 ? (
                          <CheckCircle className="h-4 w-4 text-success" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Key Points to Emphasize:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pitch.keyPoints.map((point, i) => (
                          <Badge key={i} variant="secondary">{point}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Follow-up Question:</h4>
                      <p className="text-sm italic text-gray-600">"{pitch.followUp}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="3-minute" className="space-y-6">
              {Object.entries(pitches['3-minute']).map(([key, pitch], index) => (
                <Card key={key} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{pitch.title}</CardTitle>
                        <CardDescription>{pitch.context}</CardDescription>
                      </div>
                      <Badge variant="outline">3 minutes</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg relative">
                      <p className="text-sm leading-relaxed whitespace-pre-line">{pitch.pitch}</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() => { handleCopy(pitch.pitch, index + 20); }}
                      >
                        {copiedIndex === index + 20 ? (
                          <CheckCircle className="h-4 w-4 text-success" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Key Points Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pitch.keyPoints.map((point, i) => (
                          <Badge key={i} variant="secondary">{point}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Transition Question:</h4>
                      <p className="text-sm italic text-gray-600">"{pitch.followUp}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* Industry Variations */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Industry-Specific Variations</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {industryVariations.map((variation, index) => {
                const Icon = variation.icon
                return (
                  <Card key={index} className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        {variation.industry}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-gray-600">{variation.pitch}</p>
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Emphasize:</p>
                        <p className="text-xs text-gray-600">{variation.emphasis}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Practice Scenarios */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Practice Scenarios
              </CardTitle>
              <CardDescription>
                Common situations where you'll need these pitches
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {practiceScenarios.map((scenario, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{scenario.scenario}</h4>
                    <p className="text-sm text-gray-600 mb-3">{scenario.setup}</p>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-gray-500">Tips:</p>
                      {scenario.tips.map((tip, i) => (
                        <p key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-primary">•</span> {tip}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pro Tips */}
          <Card className="border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Delivery Best Practices
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Voice & Pace</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Speak 10% slower than feels natural</li>
                    <li>• Pause after key numbers (90 days, 300% ROI)</li>
                    <li>• Lower tone for authority, raise for enthusiasm</li>
                    <li>• End strong - don't trail off</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Customization</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Always use their industry terminology</li>
                    <li>• Reference their specific pain if known</li>
                    <li>• Adjust technical depth to audience</li>
                    <li>• Have a shorter version ready to interrupt</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Ready to practice?</p>
              <p className="text-sm text-gray-600">Record yourself or practice with the team</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Watch Examples
              </Button>
              <Button>
                <Users className="mr-2 h-4 w-4" />
                Book Practice Session
              </Button>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}