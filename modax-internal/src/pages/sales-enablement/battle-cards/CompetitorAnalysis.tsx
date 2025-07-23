import React from 'react'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { Card, CardContent } from '@/components/ui/card'
import { H2, H3, H4, P, Lead, Muted, List } from '@/components/ui/typography'
import { Separator } from '@/components/ui/separator'

export default function BattleCards() {
  const competitors = [
    {
      name: 'Legacy Consultancies',
      positioning: 'Traditional enterprise transformation',
      strengths: ['Brand recognition', 'Enterprise relationships', 'Large teams'],
      weaknesses: ['Slow delivery', 'High cost', 'Legacy mindset', 'POC fatigue'],
      differentiators: {
        approach: 'We build production systems from day one, not endless POCs',
        timeline: '90 days to production vs 18-month transformation roadmaps',
        cost: '10x more value at 1/10th the cost',
        focus: 'Application-first, not infrastructure-first'
      },
      talkingPoints: [
        'When did their last transformation actually finish?',
        'How many POCs turned into production systems?',
        'What happens after the consultants leave?'
      ]
    },
    {
      name: 'Cloud Migration Vendors',
      positioning: 'Lift-and-shift cloud services',
      strengths: ['Technical expertise', 'Cloud partnerships', 'Migration tools'],
      weaknesses: ['No business transformation', 'Technical debt migration', 'No intelligence capture'],
      differentiators: {
        approach: 'We modernize AND migrate, capturing intelligence along the way',
        timeline: 'Continuous evolution vs big-bang migration',
        cost: 'Self-funding through immediate value delivery',
        focus: 'Business outcomes, not just cloud bills'
      },
      talkingPoints: [
        'Moving technical debt to the cloud doesn\'t eliminate it',
        'Where\'s the business transformation in lift-and-shift?',
        'How do you capture 20 years of operational knowledge?'
      ]
    },
    {
      name: 'AI/ML Startups',
      positioning: 'AI-first transformation',
      strengths: ['Modern technology', 'Innovation focus', 'Agility'],
      weaknesses: ['No enterprise experience', 'Technology-first thinking', 'Unproven at scale'],
      differentiators: {
        approach: 'Enterprise-proven team building AI-native systems',
        timeline: 'Production systems, not experiments',
        cost: 'ROI-driven pricing, not VC-subsidized experiments',
        focus: 'Your business logic, augmented by AI'
      },
      talkingPoints: [
        'How many Fortune 500 implementations have they done?',
        'What happens when the VC money runs out?',
        'Can they handle your compliance requirements?'
      ]
    }
  ]

  const objectionHandlers = [
    {
      category: 'Timing & Urgency',
      objections: [
        {
          objection: 'We\'re not ready for AI transformation',
          response: 'Perfect. We start with modernization that prepares you for AI, not forces it.',
          followUp: 'Your competitors aren\'t waiting. Every day of delay is lost intelligence.'
        },
        {
          objection: 'We have other priorities right now',
          response: 'Modernization enables your priorities, it doesn\'t compete with them.',
          followUp: 'What if modernization made your other initiatives 10x more effective?'
        },
        {
          objection: 'We just finished a transformation',
          response: 'Great foundation. Now let\'s build on it with actual applications.',
          followUp: 'Infrastructure without modern applications is like roads without cars.'
        }
      ]
    },
    {
      category: 'Cost & Resources',
      objections: [
        {
          objection: 'Too expensive for our budget',
          response: 'We\'re self-funding. The first app pays for the second.',
          followUp: 'What\'s the cost of staying where you are?'
        },
        {
          objection: 'We don\'t have the internal resources',
          response: 'That\'s why we embed with your team and transfer knowledge.',
          followUp: 'We make your team stronger, not dependent on us.'
        },
        {
          objection: 'Hidden costs always emerge',
          response: 'Fixed-price, outcome-based contracts. Your risk is capped.',
          followUp: 'The only hidden cost is the opportunity cost of waiting.'
        }
      ]
    },
    {
      category: 'Risk & Trust',
      objections: [
        {
          objection: 'How do we know you can deliver?',
          response: 'Our team has 200+ years of combined enterprise experience.',
          followUp: 'Plus, we start small. You see results before scaling.'
        },
        {
          objection: 'What if it doesn\'t work?',
          response: 'Define "work". We guarantee production deployment in 90 days.',
          followUp: 'The question isn\'t if, it\'s how much value we create.'
        },
        {
          objection: 'We\'ve been burned before',
          response: 'By POCs and consultants. We\'re neither.',
          followUp: 'We only succeed when your applications are in production.'
        }
      ]
    }
  ]

  const keyMessages = {
    elevator: 'We transform legacy applications into AI-native systems in 90 days, starting with one critical app that proves the model and funds the transformation.',
    differentiator: 'Unlike consultants who build POCs or vendors who just migrate, we create production systems that capture your operational intelligence and deliver immediate value.',
    vision: 'Every enterprise has 20+ years of operational intelligence trapped in legacy systems. We don\'t just modernize apps - we build an intelligence fabric that turns that knowledge into competitive advantage.',
    proof: 'Our team has modernized systems for 50+ Fortune 500 companies. Now we\'re bringing that expertise to mid-market leaders who move faster and value results over process.'
  }

  const qualifyingQuestions = [
    'What\'s your most painful legacy application?',
    'How much does downtime cost you per hour?',
    'When did your last transformation project actually finish?',
    'What would you do if that system was modern tomorrow?',
    'How many POCs have you done in the last 2 years?',
    'Who owns P&L for application modernization?',
    'What\'s preventing you from starting today?'
  ]

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Battle Cards"
          description="Competitive intelligence and objection handling for the ModAx sales team"
        />

        <PageContent className="space-y-12 max-w-5xl">
          {/* Key Messages */}
          <section>
            <H2 className="mb-6">Key Messages</H2>
            <div className="space-y-6">
              <div>
                <H4 className="mb-2">Elevator Pitch</H4>
                <P className="text-lg">{keyMessages.elevator}</P>
              </div>
              <div>
                <H4 className="mb-2">Core Differentiator</H4>
                <P className="text-lg">{keyMessages.differentiator}</P>
              </div>
              <div>
                <H4 className="mb-2">Vision Statement</H4>
                <P className="text-lg">{keyMessages.vision}</P>
              </div>
              <div>
                <H4 className="mb-2">Proof Points</H4>
                <P className="text-lg">{keyMessages.proof}</P>
              </div>
            </div>
          </section>

          <Separator />

          {/* Competitive Positioning */}
          <section>
            <H2 className="mb-6">Competitive Positioning</H2>
            <div className="space-y-8">
              {competitors.map((competitor, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <H3 className="mb-1">{competitor.name}</H3>
                      <Muted>{competitor.positioning}</Muted>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <H4 className="mb-2">Their Strengths</H4>
                        <List className="text-sm">
                          {competitor.strengths.map((strength, i) => (
                            <li key={i}>{strength}</li>
                          ))}
                        </List>
                      </div>
                      <div>
                        <H4 className="mb-2">Their Weaknesses</H4>
                        <List className="text-sm">
                          {competitor.weaknesses.map((weakness, i) => (
                            <li key={i}>{weakness}</li>
                          ))}
                        </List>
                      </div>
                    </div>

                    <div>
                      <H4 className="mb-3">How We Win</H4>
                      <div className="space-y-2">
                        {Object.entries(competitor.differentiators).map(([key, value]) => (
                          <div key={key}>
                            <span className="font-semibold capitalize">{key}:</span>{' '}
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <H4 className="mb-2">Discovery Questions</H4>
                      <List className="text-sm">
                        {competitor.talkingPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </List>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* Objection Handling */}
          <section>
            <H2 className="mb-6">Objection Handling Playbook</H2>
            <div className="space-y-8">
              {objectionHandlers.map((category, index) => (
                <div key={index}>
                  <H3 className="mb-4">{category.category}</H3>
                  <div className="space-y-4">
                    {category.objections.map((item, i) => (
                      <Card key={i} className="border-gray-200">
                        <CardContent className="p-4 space-y-3">
                          <div>
                            <P className="font-semibold text-gray-700">
                              "{item.objection}"
                            </P>
                          </div>
                          <div>
                            <P className="text-lg">
                              {item.response}
                            </P>
                          </div>
                          <div>
                            <Muted className="italic">
                              Follow-up: {item.followUp}
                            </Muted>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Qualifying Questions */}
          <section>
            <H2 className="mb-6">Discovery & Qualifying Questions</H2>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <Lead className="mb-4">
                  Use these questions to uncover pain points and build urgency:
                </Lead>
                <List className="space-y-2">
                  {qualifyingQuestions.map((question, index) => (
                    <li key={index} className="text-lg">{question}</li>
                  ))}
                </List>
              </CardContent>
            </Card>
          </section>

          {/* Quick Reference */}
          <section>
            <H2 className="mb-6">Quick Reference</H2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <H4 className="mb-3">Our Sweet Spot</H4>
                  <List>
                    <li>Mid-market enterprises ($100M-$1B revenue)</li>
                    <li>15+ year old critical applications</li>
                    <li>High operational complexity</li>
                    <li>Regulatory/compliance requirements</li>
                    <li>Leadership mandate for modernization</li>
                  </List>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <H4 className="mb-3">Red Flags to Avoid</H4>
                  <List>
                    <li>No budget authority in the room</li>
                    <li>Recent failed transformation (&lt;6 months)</li>
                    <li>Expecting free POC or pilot</li>
                    <li>Technology-first thinking</li>
                    <li>No burning platform or urgency</li>
                  </List>
                </CardContent>
              </Card>
            </div>
          </section>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}