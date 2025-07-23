import React, { useState } from 'react'
import { PageContainer, PageHeader } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Zap, 
  Target, 
  MessageSquare, 
  Clock, 
  Users, 
  DollarSign,
  ArrowRight,
  Copy,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Play
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function QuickStartIndex() {
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const [expandedObjection, setExpandedObjection] = useState<number | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(id)
    setTimeout(() => setCopiedText(null), 2000)
  }

  const mainPitch = `We resurrect failed GenAI experiments and turn them into production systems in 90 days. While consultancies sell 18-month transformations and vendors sell more tools, we deliver working systems that evolve into enterprise intelligence platforms. AWS funds 80% of it.`

  const discoveryQuestions = {
    opening: "Tell me about your GenAI initiatives over the last year.",
    probing: [
      "What happened to those POCs after the demo?",
      "What stopped them from reaching production?", 
      "How much have you invested in experiments so far?"
    ],
    identifying: [
      "Which experiment showed the most promise?",
      "What would the impact be if it actually worked?",
      "Who was the champion for that initiative?"
    ],
    positioning: "What if we could take that failed experiment and make it production-ready in 90 days, with AWS funding 80% of it?"
  }

  const elevatorPitches = [
    {
      audience: "CEOs",
      concern: "We're falling behind on AI",
      response: "Your competitors aren't ahead because they have better AI. They're ahead because they ship AI to production. We take your failed experiments and make them real in 90 days. Valuemax went from failed chatbot to AI leader in 12 months. You could be next."
    },
    {
      audience: "CFOs", 
      concern: "We've wasted millions on AI with no ROI",
      response: "Those aren't wasted investments—they're validated experiments waiting for production. We resurrect your best failed POC for $150K (AWS funds 80%), deliver in 90 days, and guarantee ROI. Turn sunk costs into strategic assets."
    },
    {
      audience: "CDOs/CTOs",
      concern: "Our POCs can't pass IT requirements",
      response: "We build for production from day one. Enterprise security, real data integration, scalable architecture—all included. We don't build demos, we build systems. 90 days to go-live, not another POC."
    },
    {
      audience: "Innovation Leaders",
      concern: "I need a win to maintain credibility",
      response: "Pick your most promising failed experiment. We'll make it work in 90 days. You become the hero who finally delivered on AI's promise. Then we help you build on that success."
    }
  ]

  const objections = [
    {
      objection: "We don't want another POC",
      response: "Neither do we. We only build production systems. The 'P' in POC stands for 'proof'—you've already proved the concept. Now it's time for production.",
      usage: "Very Common"
    },
    {
      objection: "90 days seems too fast", 
      response: "It's fast because we're not experimenting. We're taking your validated concept and our proven patterns to deliver one focused use case. We're not boiling the ocean.",
      usage: "Common"
    },
    {
      objection: "How is this different from what we tried?",
      response: "Your experiment was built for demos. We build for production. That means enterprise security, real data, IT compliance, and measured ROI from day one.",
      usage: "Very Common"
    },
    {
      objection: "We need enterprise-wide transformation",
      response: "Every empire started with one stronghold. Valuemax began with one chatbot. Now they have AI across 70 locations. Big transformations fail. Evolution succeeds.",
      usage: "Common"
    },
    {
      objection: "What about our legacy systems?",
      response: "We work with what you have. Our platform integrates with legacy systems—we don't require rip and replace. Evolution, not revolution.",
      usage: "Occasional"
    }
  ]

  const qualifyingQuestions = [
    {
      category: "Failed POC Check",
      questions: [
        "How many GenAI pilots have you run in the last 18 months?",
        "Which one got the best initial reaction?",
        "What stopped it from going to production?"
      ]
    },
    {
      category: "Budget Reality",
      questions: [
        "What was the investment in that pilot?",
        "Is there budget allocated for AI initiatives this year?",
        "Are you familiar with AWS funding programs?"
      ]
    },
    {
      category: "Stakeholder Map",
      questions: [
        "Who championed that original POC?",
        "Who makes the decision on AI investments?",
        "What would success look like to them?"
      ]
    },
    {
      category: "Urgency Drivers",
      questions: [
        "What's driving the AI agenda in your organization?",
        "Are competitors moving faster on AI?",
        "When do you need to show results?"
      ]
    }
  ]

  const powerPhrases = {
    opening: [
      "Your experiments didn't fail. Your implementation did.",
      "We don't do pilots. We do production.", 
      "From experiments to empire, one resurrection at a time."
    ],
    value: [
      "AWS funds 80% of the first project",
      "90 days to production, not another POC",
      "We build bridges, not experiments"
    ],
    closing: [
      "Which failed experiment would create the most value if it worked?",
      "What would it mean to have that in production in 90 days?",
      "Should we discuss how to resurrect it?"
    ]
  }

  const storyArc = [
    {
      act: "Act 1: Acknowledge the Graveyard",
      message: "I'm guessing you have several GenAI experiments that never made it past the pilot phase. You're not alone—73% fail to reach production."
    },
    {
      act: "Act 2: Introduce the Trojan Horse",
      message: "We specialize in taking the most promising failed experiment and making it production-ready in 90 days. Small entry, big vision."
    },
    {
      act: "Act 3: Paint the Empire",
      message: "That first success becomes your foundation. Valuemax started with one failed chatbot. Today they're an AI-powered financial services leader. One success funded their entire transformation."
    }
  ]

  return (
    <PageContainer className="py-6">
      <PageHeader
        title="Sales Quick Start Guide"
        description="Master the ModAx Story in 15 Minutes"
        badge="Essential Tools"
      />

      <div className="space-y-8">
        {/* 30-Second Pitch */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  The 30-Second Pitch
                </CardTitle>
                <CardDescription className="mt-2">
                  For Anyone Who Asks "What Does ModAx Do?"
                </CardDescription>
              </div>
              <Badge variant="outline" className="border-primary text-primary">
                Memorize This
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
              <p className="text-lg leading-relaxed text-gray-700">
                "{mainPitch}"
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4"
                onClick={() => copyToClipboard(mainPitch, 'main-pitch')}
              >
                {copiedText === 'main-pitch' ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Pitch
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="discovery" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="discovery" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Discovery
            </TabsTrigger>
            <TabsTrigger value="pitches" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Pitches
            </TabsTrigger>
            <TabsTrigger value="objections" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Objections
            </TabsTrigger>
            <TabsTrigger value="qualifying" className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Qualifying
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discovery" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The 3-Minute Discovery Framework</CardTitle>
                <CardDescription>
                  Proven conversation structure for qualification
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Opening Question</h4>
                    <p className="text-blue-800">"{discoveryQuestions.opening}"</p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 mb-3">Probing for Pain</h4>
                    <ul className="space-y-2">
                      {discoveryQuestions.probing.map((question, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-orange-800">
                          <span className="text-orange-600 mt-1">•</span>
                          "{question}"
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-success/5 rounded-lg p-4">
                    <h4 className="font-semibold text-success-900 mb-3">Identifying the Opportunity</h4>
                    <ul className="space-y-2">
                      {discoveryQuestions.identifying.map((question, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-success-800">
                          <span className="text-success mt-1">•</span>
                          "{question}"
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">Positioning ModAx</h4>
                    <p className="text-primary">"{discoveryQuestions.positioning}"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The ModAx Story Arc */}
            <Card>
              <CardHeader>
                <CardTitle>The ModAx Story Arc</CardTitle>
                <CardDescription>Use this narrative structure in every conversation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {storyArc.map((arc, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{arc.act}</h4>
                      <p className="text-gray-700">"{arc.message}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pitches" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {elevatorPitches.map((pitch, idx) => (
                <Card key={idx} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">For {pitch.audience}</CardTitle>
                      <Badge variant="outline">{pitch.audience.split('/')[0]}</Badge>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3 mt-3">
                      <p className="text-sm font-medium text-red-800">Their Concern:</p>
                      <p className="text-red-700 mt-1">"{pitch.concern}"</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-success/5 rounded-lg p-4">
                      <p className="text-sm font-medium text-success-800 mb-2">Your Response:</p>
                      <p className="text-success-700 leading-relaxed">"{pitch.response}"</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-4"
                      onClick={() => copyToClipboard(pitch.response, `pitch-${idx}`)}
                    >
                      {copiedText === `pitch-${idx}` ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Response
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="objections" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Common Objections & Power Responses</CardTitle>
                <CardDescription>
                  Click to expand each objection for detailed handling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {objections.map((obj, idx) => (
                    <div key={idx} className="border rounded-lg">
                      <button
                        onClick={() => setExpandedObjection(expandedObjection === idx ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <AlertCircle className="h-5 w-5 text-orange-500" />
                          <span className="font-medium">"{obj.objection}"</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={obj.usage === 'Very Common' ? 'default' : obj.usage === 'Common' ? 'secondary' : 'outline'}>
                            {obj.usage}
                          </Badge>
                          {expandedObjection === idx ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </button>
                      {expandedObjection === idx && (
                        <div className="px-4 pb-4 border-t bg-gray-50">
                          <div className="bg-success/5 rounded-lg p-4 mt-3">
                            <p className="font-medium text-success-800 mb-2">Power Response:</p>
                            <p className="text-success-700 leading-relaxed">"{obj.response}"</p>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-3"
                            onClick={() => copyToClipboard(obj.response, `objection-${idx}`)}
                          >
                            {copiedText === `objection-${idx}` ? (
                              <>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="mr-2 h-4 w-4" />
                                Copy Response
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="qualifying" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualifyingQuestions.map((category, idx) => (
                <Card key={idx} className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                    <CardDescription>To Identify Real Opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.questions.map((question, qIdx) => (
                        <li key={qIdx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                          <span className="text-sm text-gray-700">"{question}"</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Power Phrases */}
        <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              Power Phrases to Remember
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-emerald-800 mb-3">Opening Hooks</h4>
                <ul className="space-y-2">
                  {powerPhrases.opening.map((phrase, idx) => (
                    <li key={idx} className="text-sm text-emerald-700">
                      • "{phrase}"
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Value Statements</h4>
                <ul className="space-y-2">
                  {powerPhrases.value.map((phrase, idx) => (
                    <li key={idx} className="text-sm text-blue-700">
                      • "{phrase}"
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Closing Questions</h4>
                <ul className="space-y-2">
                  {powerPhrases.closing.map((phrase, idx) => (
                    <li key={idx} className="text-sm text-primary">
                      • "{phrase}"
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Post-Call Action Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Within 24 Hours</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Send personalized follow-up with relevant case study</li>
                  <li>• Share ROI calculator pre-populated with their metrics</li>
                  <li>• Propose POC Assessment workshop date</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Within 48 Hours</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Connect them with relevant technical expert</li>
                  <li>• Send AWS funding eligibility checklist</li>
                  <li>• Share 90-day implementation timeline</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Within 1 Week</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Conduct POC Assessment workshop</li>
                  <li>• Deliver findings and recommendations</li>
                  <li>• Present fixed-scope proposal</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90">
            <Play className="mr-2 h-4 w-4" />
            Watch Role Play Videos
          </Button>
          <Button variant="outline">
            <Copy className="mr-2 h-4 w-4" />
            Download Cheat Sheet
          </Button>
          <Button variant="outline">
            <Target className="mr-2 h-4 w-4" />
            Practice with AI Coach
          </Button>
        </div>
      </div>
    </PageContainer>
  )
}