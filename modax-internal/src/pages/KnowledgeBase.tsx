import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from 'react'
import { Button } from '@/components/ui/button'
import { 
  PageContainer, 
  PageHeader 
} from '@/components/layout/PageLayout'
import { Book, Users, CheckCircle, BarChart3, FileText, Settings, ArrowRight, Download } from 'lucide-react'

export default function KnowledgeBase() {
  const documentation = [
    {
      category: 'Implementation Guides',
      items: [
        'Technical specifications',
        'Architecture patterns',
        'Best practices'
      ],
      icon: Book
    },
    {
      category: 'Client Resources',
      items: [
        'Project templates',
        'Communication guides',
        'Success checklists'
      ],
      icon: Users
    }
  ]

  const quickLinks = [
    {
      title: 'Failed POC Assessment Template',
      icon: CheckCircle,
      description: 'Evaluate and prioritize POC resurrection candidates'
    },
    {
      title: 'AWS Funding Guide',
      icon: BarChart3,
      description: 'Navigate AWS funding programs and maximize benefits'
    },
    {
      title: '90-Day Success Checklist',
      icon: CheckCircle,
      description: 'Track your progress through the 90-day journey'
    },
    {
      title: 'Executive Briefing Template',
      icon: FileText,
      description: 'Present ModAx value to executive stakeholders'
    },
    {
      title: 'Change Management Toolkit',
      icon: Settings,
      description: 'Drive adoption and manage organizational change'
    }
  ]

  return (
    <PageContainer className="py-6">
      <PageHeader
        title="Knowledge Base"
        description="Resources and documentation to support your journey"
      />

      <div className="space-y-12">
          {/* Documentation */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documentation.map((doc, index) => {
                const Icon = doc.icon
                return (
                  <Card key={index} className="border-gray-200">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-gray-700" />
                        <CardTitle className="text-xl">{doc.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {doc.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full">
                        View All
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
            <div className="grid grid-cols-1 gap-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <Card key={index} className="border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {link.title}
                          </h3>
                          <p className="text-gray-600">{link.description}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
      </div>
    </PageContainer>
  )
}