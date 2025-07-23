import React from 'react'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { H1, H2, P, Lead, Muted } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Download, FileText, ExternalLink } from 'lucide-react'

interface PitchDeck {
  title: string
  description: string
  audience: string
  duration: string
  lastUpdated: string
  downloadUrl: string
}

export default function PitchDecks() {
  const executiveDecks: PitchDeck[] = [
    {
      title: "Executive Overview",
      description: "High-level transformation vision focusing on business outcomes and strategic value. Ideal for C-suite initial meetings.",
      audience: "CEO, CTO, CFO",
      duration: "15 minutes",
      lastUpdated: "January 2025",
      downloadUrl: "/decks/executive-overview.pdf"
    },
    {
      title: "Board Presentation",
      description: "Comprehensive business case with financial projections, risk mitigation, and strategic alignment.",
      audience: "Board of Directors",
      duration: "30 minutes",
      lastUpdated: "January 2025",
      downloadUrl: "/decks/board-presentation.pdf"
    }
  ]

  const technicalDecks: PitchDeck[] = [
    {
      title: "Technical Architecture",
      description: "Deep dive into our AI-native approach, including the Intelligence Fabric architecture and integration patterns.",
      audience: "CTO, Engineering Leaders",
      duration: "45 minutes",
      lastUpdated: "January 2025",
      downloadUrl: "/decks/technical-architecture.pdf"
    },
    {
      title: "Security & Compliance",
      description: "Detailed security model, compliance frameworks, and data governance approach for regulated industries.",
      audience: "CISO, Compliance Officers",
      duration: "30 minutes",
      lastUpdated: "January 2025",
      downloadUrl: "/decks/security-compliance.pdf"
    },
    {
      title: "Integration Roadmap",
      description: "Step-by-step integration approach with existing systems, APIs, and data sources.",
      audience: "IT Directors, Architects",
      duration: "25 minutes",
      lastUpdated: "January 2025",
      downloadUrl: "/decks/integration-roadmap.pdf"
    }
  ]

  const financialDecks: PitchDeck[] = [
    {
      title: "ROI Analysis",
      description: "Detailed financial model showing cost savings, efficiency gains, and revenue impact over 3-5 years.",
      audience: "CFO, Finance Teams",
      duration: "20 minutes",
      lastUpdated: "January 2025",
      downloadUrl: "/decks/roi-analysis.pdf"
    },
    {
      title: "Funding Options",
      description: "AWS funding programs, partnership benefits, and flexible engagement models.",
      audience: "Procurement, Finance",
      duration: "15 minutes",
      lastUpdated: "January 2025",
      downloadUrl: "/decks/funding-options.pdf"
    }
  ]

  const renderDeckSection = (title: string, decks: PitchDeck[]) => (
    <div className="space-y-6">
      <H2>{title}</H2>
      <div className="space-y-4">
        {decks.map((deck, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">{deck.title}</h3>
                </div>
                <P className="text-gray-600 !mt-2">{deck.description}</P>
                <div className="flex flex-wrap gap-4 !mt-3">
                  <Muted className="!mt-0">
                    <span className="font-medium">Audience:</span> {deck.audience}
                  </Muted>
                  <Muted className="!mt-0">
                    <span className="font-medium">Duration:</span> {deck.duration}
                  </Muted>
                  <Muted className="!mt-0">
                    <span className="font-medium">Updated:</span> {deck.lastUpdated}
                  </Muted>
                </div>
              </div>
              <Button variant="outline" size="sm" className="flex-shrink-0">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader>
          <H1>Pitch Decks</H1>
          <Lead className="mt-4">
            Presentation materials tailored for different audiences and use cases. 
            Each deck is designed to communicate ModAx's value proposition clearly and effectively.
          </Lead>
        </PageHeader>

        <PageContent className="space-y-12">
          {/* Quick Start */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Start Guide</h3>
                <P className="text-gray-600 !mt-2">
                  Not sure which deck to use? Start with our Executive Overview for initial meetings, 
                  then dive deeper with technical or financial decks based on stakeholder interests.
                </P>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4" />
                View Guide
              </Button>
            </div>
          </div>

          {/* Executive Decks */}
          {renderDeckSection("Executive Presentations", executiveDecks)}

          {/* Technical Decks */}
          {renderDeckSection("Technical Deep Dives", technicalDecks)}

          {/* Financial Decks */}
          {renderDeckSection("Financial & Business Case", financialDecks)}

          {/* Customization Note */}
          <div className="border-t pt-8 mt-12">
            <Muted>
              <strong>Need a custom presentation?</strong> Contact your account manager to request 
              industry-specific or client-tailored pitch decks. We can customize any deck to match 
              your specific use case and audience requirements.
            </Muted>
          </div>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}