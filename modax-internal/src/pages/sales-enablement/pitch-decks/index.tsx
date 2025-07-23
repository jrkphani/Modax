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
  FileText,
  Download,
  Eye,
  Clock,
  Users,
  TrendingUp,
  DollarSign,
  Cpu,
  Play,
  Edit,
  BookOpen,
  Building
} from 'lucide-react'

export default function PitchDecksIndex() {
  const [selectedDeck, setSelectedDeck] = useState<string | null>(null)

  const pitchDecks = [
    {
      id: 'executive',
      title: 'Executive Deck',
      description: 'C-suite focused on business outcomes and ROI',
      icon: TrendingUp,
      slides: 12,
      duration: '15-20 min',
      lastUpdated: '3 days ago',
      uses: 234,
      winRate: '82%',
      keyMessages: [
        '90-day transformation reality',
        'Self-funding model',
        'Intelligence Fabric vision',
        'Proven enterprise success'
      ],
      audience: ['CEO', 'CFO', 'COO', 'Board Members'],
      color: 'bg-primary/5 text-primary',
      popular: true
    },
    {
      id: 'technical',
      title: 'Technical Deep Dive',
      description: 'Architecture and implementation details for technical buyers',
      icon: Cpu,
      slides: 24,
      duration: '30-45 min',
      lastUpdated: '1 week ago',
      uses: 156,
      winRate: '78%',
      keyMessages: [
        'Modernization methodology',
        'Architecture patterns',
        'Integration approaches',
        'Security & compliance'
      ],
      audience: ['CTO', 'VP Engineering', 'Enterprise Architects', 'Tech Leads'],
      color: 'bg-blue-50 text-blue-700'
    },
    {
      id: 'roi-focused',
      title: 'ROI-Focused Deck',
      description: 'Financial analysis and business case for economic buyers',
      icon: DollarSign,
      slides: 18,
      duration: '20-25 min',
      lastUpdated: '5 days ago',
      uses: 189,
      winRate: '89%',
      keyMessages: [
        'Cost reduction analysis',
        'ROI calculations',
        'Self-funding timeline',
        'Risk mitigation'
      ],
      audience: ['CFO', 'VP Finance', 'Procurement', 'Business Analysts'],
      color: 'bg-success/5 text-success-700',
      recent: true
    },
    {
      id: 'industry-specific',
      title: 'Industry Solutions',
      description: 'Vertical-specific decks for targeted messaging',
      icon: Building,
      slides: 15,
      duration: '20 min',
      lastUpdated: '2 weeks ago',
      uses: 98,
      winRate: '75%',
      keyMessages: [
        'Industry challenges',
        'Compliance expertise',
        'Vertical case studies',
        'Domain knowledge'
      ],
      audience: ['Industry executives', 'LOB leaders', 'Domain experts'],
      color: 'bg-orange-50 text-orange-700',
      hasVariants: true
    }
  ]

  const deckVariants = {
    'industry-specific': [
      { name: 'Financial Services', slides: 16, focus: 'Compliance, risk, real-time processing' },
      { name: 'Healthcare', slides: 15, focus: 'HIPAA, interoperability, patient safety' },
      { name: 'Manufacturing', slides: 14, focus: 'IoT integration, supply chain, quality' },
      { name: 'Retail', slides: 15, focus: 'Omnichannel, inventory, customer experience' }
    ]
  }

  const presentationTips = [
    {
      title: 'Know Your Audience',
      description: 'Tailor the deck based on who\'s in the room',
      tips: [
        'Start with their biggest pain point',
        'Use their industry terminology',
        'Reference similar companies they respect',
        'Adjust technical depth accordingly'
      ]
    },
    {
      title: 'Tell a Story',
      description: 'Don\'t just present slides, craft a narrative',
      tips: [
        'Start with the problem they feel',
        'Build tension around the cost of inaction',
        'Present ModAx as the resolution',
        'End with a clear vision of success'
      ]
    },
    {
      title: 'Interactive Engagement',
      description: 'Make it a conversation, not a monologue',
      tips: [
        'Pause for questions every 3-4 slides',
        'Ask confirming questions',
        'Use their examples when possible',
        'Be ready to skip slides based on interest'
      ]
    },
    {
      title: 'Strong Close',
      description: 'End with clear next steps',
      tips: [
        'Summarize key points',
        'Confirm alignment on challenges',
        'Propose specific next steps',
        'Set a follow-up date before leaving'
      ]
    }
  ]

  const customizationOptions = [
    {
      option: 'Logo & Branding',
      description: 'Add client logo and adjust color scheme',
      time: '5 min'
    },
    {
      option: 'Industry Examples',
      description: 'Swap generic examples for industry-specific ones',
      time: '10 min'
    },
    {
      option: 'Case Studies',
      description: 'Include relevant client success stories',
      time: '15 min'
    },
    {
      option: 'Custom ROI',
      description: 'Add client-specific ROI calculations',
      time: '20 min'
    }
  ]

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Pitch Decks"
          description="Professional presentations for every audience and situation"
        />

        <PageContent className="space-y-8">
          {/* Deck Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pitchDecks.map((deck) => {
              const Icon = deck.icon
              return (
                <Card 
                  key={deck.id} 
                  className={`border-gray-200 hover:shadow-lg transition-all cursor-pointer ${
                    selectedDeck === deck.id ? 'ring-2 ring-purple-500' : ''
                  }`}
                  onClick={() => { setSelectedDeck(deck.id); }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${deck.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{deck.title}</CardTitle>
                          {deck.popular && <Badge className="mt-1">Most Used</Badge>}
                          {deck.recent && <Badge variant="secondary" className="mt-1">Recently Updated</Badge>}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {deck.winRate} win rate
                      </Badge>
                    </div>
                    <CardDescription className="mt-2">{deck.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {deck.slides} slides
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {deck.duration}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {deck.uses} uses this month
                      </span>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Key Messages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {deck.keyMessages.map((message, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-primary mt-0.5">•</span>
                            {message}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Target Audience:</h4>
                      <div className="flex flex-wrap gap-1">
                        {deck.audience.map((person, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {person}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {deck.hasVariants && (
                      <div className="pt-2 border-t">
                        <p className="text-sm font-medium text-gray-700 mb-2">Industry Variants:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {deckVariants[deck.id]?.map((variant, i) => (
                            <div key={i} className="text-xs text-gray-600">
                              <span className="font-medium">{variant.name}</span>
                              <span className="text-gray-500"> ({variant.slides})</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Eye className="mr-1 h-3 w-3" />
                        Preview
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download className="mr-1 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Presentation Tips */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Presentation Best Practices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {presentationTips.map((tip, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{tip.title}</CardTitle>
                    <CardDescription className="text-sm">{tip.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {tip.tips.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-1">
                          <span className="text-primary mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Customization Guide */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit className="h-5 w-5" />
                Deck Customization Guide
              </CardTitle>
              <CardDescription>
                Make each presentation unique to your prospect
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Quick Customizations</h4>
                  <div className="space-y-3">
                    {customizationOptions.map((option, index) => (
                      <div key={index} className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-sm text-gray-900">{option.option}</p>
                          <p className="text-xs text-gray-600">{option.description}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {option.time}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Customization Checklist</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-0.5" />
                        <span>Update client name and logo throughout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-0.5" />
                        <span>Add industry-specific pain points</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-0.5" />
                        <span>Include relevant case studies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-0.5" />
                        <span>Customize ROI calculations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-0.5" />
                        <span>Update competitor comparisons</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-0.5" />
                        <span>Add specific next steps</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Analytics */}
          <Card className="border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Deck Performance Insights
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">15 min</p>
                  <p className="text-sm text-gray-600">Avg. attention span</p>
                  <p className="text-xs text-gray-500 mt-1">Keep it concise</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Slide 7</p>
                  <p className="text-sm text-gray-600">Most questions</p>
                  <p className="text-xs text-gray-500 mt-1">ROI calculation</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">89%</p>
                  <p className="text-sm text-gray-600">Skip technical</p>
                  <p className="text-xs text-gray-500 mt-1">In exec meetings</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">2.3x</p>
                  <p className="text-sm text-gray-600">Better with demo</p>
                  <p className="text-xs text-gray-500 mt-1">Include visuals</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Need help presenting?</p>
              <p className="text-sm text-gray-600">Practice with our presentation coaches or watch recorded examples</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Watch Examples
              </Button>
              <Button>
                <Users className="mr-2 h-4 w-4" />
                Book Coaching Session
              </Button>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}