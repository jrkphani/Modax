import React, { useState } from 'react'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  MessageSquare,
  Target,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Users,
  DollarSign,
  Zap,
  Building,
  Clock,
  FileText,
  ChevronRight
} from 'lucide-react'

export default function DiscoveryScripts() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const discoveryFramework = {
    opening: {
      title: 'Opening & Rapport Building',
      duration: '5 minutes',
      objectives: ['Build rapport', 'Set expectations', 'Confirm agenda'],
      script: `"Thanks for taking the time today. I've reviewed [company] and I'm impressed by [specific achievement/news]. 

Before we dive in, I'd love to understand your role in [specific area] and what success looks like for you this year.

I've prepared some questions about your current application landscape and modernization priorities. We'll spend about 30 minutes exploring your challenges, and I'll share how we've helped similar companies. Does that work for you?"`,
      tips: [
        'Research a recent company achievement to reference',
        'Let them talk first - people buy from those who listen',
        'Confirm time allocation upfront'
      ]
    },
    currentState: {
      title: 'Current State Assessment',
      duration: '10 minutes',
      objectives: ['Identify pain points', 'Quantify impact', 'Understand constraints'],
      questions: [
        {
          question: 'Walk me through your current application landscape. Which systems are most critical to operations?',
          purpose: 'Identify modernization candidates',
          followUps: ['How old are these systems?', 'Who maintains them?', 'What happens when they go down?']
        },
        {
          question: 'What\'s the biggest challenge with your legacy applications today?',
          purpose: 'Uncover primary pain point',
          followUps: ['How long has this been an issue?', 'What have you tried to solve it?', 'What\'s the impact on the business?']
        },
        {
          question: 'If these systems went down tomorrow, what would be the hourly cost to the business?',
          purpose: 'Quantify risk and urgency',
          followUps: ['Has this happened before?', 'How long can you operate without them?', 'What\'s your disaster recovery plan?']
        },
        {
          question: 'How much are you spending annually on maintaining these legacy systems?',
          purpose: 'Establish cost baseline',
          followUps: ['Include licensing, infrastructure, and personnel', 'Is this growing year over year?', 'What could you do with that budget instead?']
        },
        {
          question: 'Tell me about your team. Who owns these systems and what keeps them up at night?',
          purpose: 'Identify stakeholders and concerns',
          followUps: ['Who has P&L responsibility?', 'Who would champion modernization?', 'Who might resist change?']
        }
      ]
    },
    futureState: {
      title: 'Future State Vision',
      duration: '10 minutes',
      objectives: ['Understand goals', 'Identify success criteria', 'Build vision'],
      questions: [
        {
          question: 'Fast forward 12 months - what needs to be different about your application landscape?',
          purpose: 'Understand desired outcomes',
          followUps: ['What\'s driving this timeline?', 'What happens if nothing changes?', 'How will you measure success?']
        },
        {
          question: 'What would the ideal modern system look like for your team?',
          purpose: 'Define solution requirements',
          followUps: ['What features are must-haves?', 'What could you live without?', 'Who needs to be involved?']
        },
        {
          question: 'How important is preserving your existing business logic and operational knowledge?',
          purpose: 'Validate our approach',
          followUps: ['What would be lost in a rip-and-replace?', 'How is this knowledge currently documented?', 'Who holds this knowledge?']
        },
        {
          question: 'What\'s your experience with modernization initiatives? What worked and what didn\'t?',
          purpose: 'Learn from past attempts',
          followUps: ['Why did previous efforts fail?', 'What would you do differently?', 'What concerns do you have?']
        },
        {
          question: 'How does AI and intelligent automation fit into your vision?',
          purpose: 'Gauge AI readiness',
          followUps: ['Where could AI add the most value?', 'What are your concerns about AI?', 'How are competitors using AI?']
        }
      ]
    },
    qualification: {
      title: 'Qualification & Next Steps',
      duration: '5 minutes',
      objectives: ['Qualify opportunity', 'Identify process', 'Secure next steps'],
      questions: [
        {
          question: 'What\'s your typical process for evaluating solutions like this?',
          purpose: 'Understand buying process',
          followUps: ['Who else needs to be involved?', 'What are the decision criteria?', 'What\'s the timeline?']
        },
        {
          question: 'What would need to be true for you to move forward with a modernization project this year?',
          purpose: 'Identify blockers',
          followUps: ['Is budget allocated?', 'Do you have executive support?', 'What are the competing priorities?']
        },
        {
          question: 'Based on what you\'ve shared, I believe we can help. What questions do you have for me?',
          purpose: 'Address concerns',
          followUps: ['Let them guide the conversation', 'Be honest about capabilities', 'Build trust through transparency']
        }
      ]
    }
  }

  const qualificationCriteria = {
    mustHave: [
      'Legacy application 10+ years old',
      'Critical to business operations',
      'Budget authority or direct influence',
      'Executive mandate for modernization',
      'Pain measured in millions'
    ],
    niceToHave: [
      'Failed modernization attempt',
      'Retiring SMEs / knowledge risk',
      'Compliance or regulatory pressure',
      'Competitive pressure',
      'M&A integration needs'
    ],
    redFlags: [
      'No budget allocated',
      'Expecting free POC',
      'Recent failed transformation (<6 months)',
      'No executive sponsor',
      'Technology-first thinking'
    ]
  }

  const discoveryTalk = [
    {
      scenario: 'The Skeptic',
      profile: 'Has been burned by consultants, highly skeptical of promises',
      approach: 'Acknowledge past failures, focus on our differences',
      keyQuestions: [
        '"What went wrong with previous modernization attempts?"',
        '"What would need to be different this time?"',
        '"How can we prove we\'re different before you commit?"'
      ],
      sample: '"I understand your skepticism - you\'ve probably seen more POCs than production systems. That\'s exactly why we don\'t do POCs. Would it be helpful to see how we delivered production systems for [similar company] in 90 days?"'
    },
    {
      scenario: 'The Technical Gatekeeper',
      profile: 'Wants to dive deep into technical architecture immediately',
      approach: 'Respect their expertise, but ladder up to business value',
      keyQuestions: [
        '"What technical constraints are non-negotiable?"',
        '"How does the current architecture limit business goals?"',
        '"What would the perfect architecture enable for the business?"'
      ],
      sample: '"I appreciate your technical depth. You\'re right that the architecture matters. Help me understand - what business outcomes would the ideal architecture enable that you can\'t achieve today?"'
    },
    {
      scenario: 'The Budget Conscious',
      profile: 'Focused on cost, comparing to offshore or DIY options',
      approach: 'Shift from cost to value and risk',
      keyQuestions: [
        '"What\'s the cost of staying where you are?"',
        '"What happened to companies that chose the cheapest option?"',
        '"How do you value risk reduction and knowledge preservation?"'
      ],
      sample: '"I understand cost is critical. Let me ask - what\'s the daily cost when these systems are down? Our model is self-funding - the first application pays for the second through efficiency gains."'
    },
    {
      scenario: 'The Innovator',
      profile: 'Excited about AI, wants cutting-edge everything',
      approach: 'Channel enthusiasm into practical first steps',
      keyQuestions: [
        '"Where would AI have the most immediate impact?"',
        '"What needs to be in place before AI can deliver value?"',
        '"How do we ensure AI augments rather than replaces your expertise?"'
      ],
      sample: '"Your vision for AI is spot-on. The key is building the foundation that makes AI valuable. Let\'s identify where intelligent automation could deliver immediate ROI while preparing for broader AI adoption."'
    }
  ]

  const scriptTemplates = {
    voicemail: {
      title: 'Voicemail Script',
      duration: '30 seconds',
      script: `"Hi [Name], this is [Your Name] from ModAx. I'm reaching out because I noticed [specific trigger - acquisition, new CTO, digital transformation announcement].

We help companies like yours modernize legacy applications in 90 days without the typical rip-and-replace risks. 

I'd love to share how we helped [similar company] reduce operational costs by 30% while preserving their critical business logic.

I'll try you again [specific day/time], or feel free to call me back at [number]. Have a great day."`
    },
    email: {
      title: 'Follow-up Email Template',
      duration: '2 minute read',
      script: `Subject: [Company] + ModAx: 90-day path to modern applications

Hi [Name],

Thanks for our conversation today. As promised, I'm following up with key points from our discussion:

Your Challenges:
• [Specific challenge 1 they mentioned]
• [Specific challenge 2 they mentioned]
• [Impact/cost they shared]

How ModAx Can Help:
• 90-day production deployment (not another POC)
• Preserve your 20+ years of operational intelligence
• Self-funding model - first app pays for the second

Next Steps:
1. I'll send the [specific resource they requested]
2. Let's schedule a technical deep-dive with your team
3. I'll introduce you to [client name] who faced similar challenges

Are you available [two specific time options] for a 30-minute technical discussion?

Best regards,
[Your name]`
    }
  }

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Discovery Scripts & Qualification"
          description="Proven frameworks to uncover pain and qualify opportunities"
        />

        <PageContent className="space-y-8">
          {/* Qualification Criteria */}
          <Alert className="border-primary/20 bg-primary/5">
            <AlertCircle className="h-4 w-4 text-primary" />
            <AlertDescription className="text-primary">
              <strong>Remember:</strong> Discovery is about them, not us. Listen 80%, talk 20%. Every question should help them realize they need to change.
            </AlertDescription>
          </Alert>

          {/* Discovery Flow */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Discovery Call Flow</h2>
            <div className="space-y-4">
              {Object.entries(discoveryFramework).map(([key, section]) => (
                <Card key={key} className="border-gray-200">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => setExpandedSection(expandedSection === key ? null : key)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 text-primary rounded-lg">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{section.title}</CardTitle>
                          <CardDescription>Duration: {section.duration}</CardDescription>
                        </div>
                      </div>
                      <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${expandedSection === key ? 'rotate-90' : ''}`} />
                    </div>
                  </CardHeader>
                  
                  {expandedSection === key && (
                    <CardContent className="space-y-4">
                      {/* Objectives */}
                      <div>
                        <h4 className="font-medium text-sm text-gray-700 mb-2">Objectives:</h4>
                        <div className="flex flex-wrap gap-2">
                          {section.objectives.map((objective, i) => (
                            <Badge key={i} variant="secondary">{objective}</Badge>
                          ))}
                        </div>
                      </div>

                      {/* Script or Questions */}
                      {section.script ? (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm italic leading-relaxed">{section.script}</p>
                        </div>
                      ) : section.questions && (
                        <div className="space-y-4">
                          {section.questions.map((q, i) => (
                            <div key={i} className="border rounded-lg p-4">
                              <p className="font-medium text-gray-900 mb-2">"{q.question}"</p>
                              <p className="text-sm text-gray-600 mb-3">Purpose: {q.purpose}</p>
                              <div>
                                <p className="text-xs font-medium text-gray-500 mb-1">Follow-up questions:</p>
                                <ul className="space-y-1">
                                  {q.followUps.map((followUp, j) => (
                                    <li key={j} className="text-xs text-gray-600 flex items-start gap-1">
                                      <span className="text-primary mt-0.5">•</span>
                                      {followUp}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tips */}
                      {section.tips && (
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium text-sm text-blue-900 mb-2">Pro Tips:</h4>
                          <ul className="space-y-1">
                            {section.tips.map((tip, i) => (
                              <li key={i} className="text-sm text-blue-800 flex items-start gap-2">
                                <Zap className="h-3 w-3 mt-0.5 flex-shrink-0" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Qualification Checklist */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-success-700">
                  <CheckCircle2 className="h-5 w-5" />
                  Must Have
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {qualificationCriteria.mustHave.map((criteria, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                      {criteria}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-blue-700">
                  <TrendingUp className="h-5 w-5" />
                  Nice to Have
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {qualificationCriteria.niceToHave.map((criteria, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <TrendingUp className="h-3 w-3 text-blue-600 mt-0.5 flex-shrink-0" />
                      {criteria}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  Red Flags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {qualificationCriteria.redFlags.map((criteria, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <AlertCircle className="h-3 w-3 text-red-600 mt-0.5 flex-shrink-0" />
                      {criteria}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Discovery Talk Tracks */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Handling Different Personas</h2>
            <Tabs defaultValue="0" className="space-y-4">
              <TabsList className="grid grid-cols-2 md:grid-cols-4">
                {discoveryTalk.map((track, index) => (
                  <TabsTrigger key={index} value={index.toString()}>
                    {track.scenario}
                  </TabsTrigger>
                ))}
              </TabsList>

              {discoveryTalk.map((track, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle>{track.scenario}</CardTitle>
                      <CardDescription>{track.profile}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-gray-700 mb-2">Approach:</h4>
                        <p className="text-sm text-gray-600">{track.approach}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm text-gray-700 mb-2">Key Questions:</h4>
                        <ul className="space-y-2">
                          {track.keyQuestions.map((question, i) => (
                            <li key={i} className="text-sm text-gray-600 italic">{question}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-medium text-sm text-primary mb-2">Sample Response:</h4>
                        <p className="text-sm text-primary italic">{track.sample}</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Script Templates */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Follow-up Templates</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(scriptTemplates).map(([key, template]) => (
                <Card key={key} className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {template.title}
                    </CardTitle>
                    <CardDescription>{template.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-mono whitespace-pre-line">{template.script}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <Card className="border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Discovery Best Practices
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Before the Call</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Research recent news, acquisitions, leadership changes</li>
                    <li>• Review their tech stack on BuiltWith/similar</li>
                    <li>• Check LinkedIn for common connections</li>
                    <li>• Prepare industry-specific examples</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">During the Call</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Take detailed notes - they'll guide your proposal</li>
                    <li>• Use their words, not yours</li>
                    <li>• Pause after questions - let them fill silence</li>
                    <li>• Always secure specific next steps</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Ready to practice?</p>
              <p className="text-sm text-gray-600">Role-play these scripts with experienced reps</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Clock className="mr-2 h-4 w-4" />
                Book Mock Discovery
              </Button>
              <Button>
                <Users className="mr-2 h-4 w-4" />
                Join Discovery Workshop
              </Button>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}