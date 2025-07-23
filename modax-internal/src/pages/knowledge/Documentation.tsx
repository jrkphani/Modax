import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from 'react'
import { H1, H2, H3, P, Lead, Muted } from '@/components/ui/typography'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, FileText, Book, GraduationCap, ExternalLink } from 'lucide-react'

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const documentationCategories = [
    {
      title: 'Technical Documentation',
      description: 'Architecture, APIs, integration guides, and technical specifications',
      icon: FileText,
      resources: [
        { name: 'API Reference', description: 'Complete API documentation with examples' },
        { name: 'Architecture Guide', description: 'System architecture and design patterns' },
        { name: 'Integration Manual', description: 'Step-by-step integration instructions' },
        { name: 'Security Guidelines', description: 'Security best practices and protocols' }
      ]
    },
    {
      title: 'Process Documentation',
      description: 'Business processes, workflows, and operational procedures',
      icon: Book,
      resources: [
        { name: 'Modernization Playbook', description: 'Complete guide to our modernization process' },
        { name: 'Project Templates', description: 'Standard templates for project documentation' },
        { name: 'Workflow Diagrams', description: 'Visual representations of key processes' },
        { name: 'Quality Standards', description: 'Quality assurance and review procedures' }
      ]
    },
    {
      title: 'Training Materials',
      description: 'Learning resources, tutorials, and certification guides',
      icon: GraduationCap,
      resources: [
        { name: 'Getting Started Guide', description: 'Introduction to ModAx platform and services' },
        { name: 'Video Tutorials', description: 'Step-by-step video walkthroughs' },
        { name: 'Best Practices', description: 'Industry best practices and recommendations' },
        { name: 'Certification Path', description: 'Professional certification programs' }
      ]
    }
  ]

  const quickLinks = [
    { name: 'Release Notes', path: '/docs/releases' },
    { name: 'FAQ', path: '/docs/faq' },
    { name: 'Glossary', path: '/docs/glossary' },
    { name: 'Support Articles', path: '/docs/support' }
  ]

  const filteredCategories = documentationCategories.map(category => ({
    ...category,
    resources: category.resources.filter(resource =>
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => 
    category.resources.length > 0 ||
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <H1>Documentation</H1>
        <Lead className="mt-4">
          Comprehensive guides, references, and resources to help you succeed with ModAx
        </Lead>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="search"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); }}
            className="pl-10"
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <H2>Quick Links</H2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              className="justify-start"
              asChild
            >
              <a href={link.path}>
                {link.name}
                <ExternalLink className="h-3 w-3 ml-auto" />
              </a>
            </Button>
          ))}
        </div>
      </div>

      {/* Documentation Categories */}
      <div className="space-y-12">
        {filteredCategories.map((category) => (
          <div key={category.title}>
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="h-6 w-6 text-muted-foreground" />
              <div>
                <H2 className="border-0 pb-0">{category.title}</H2>
                <Muted>{category.description}</Muted>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {category.resources.map((resource) => (
                <Card key={resource.name} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 h-auto">
                      View documentation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {searchQuery && filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <Muted>No documentation found matching "{searchQuery}"</Muted>
        </div>
      )}

      {/* Footer */}
      <div className="mt-16 pt-8 border-t">
        <div className="text-center">
          <H3>Need help finding something?</H3>
          <P className="mt-2">
            Contact our support team or browse our knowledge base for additional resources.
          </P>
          <div className="flex gap-4 justify-center mt-6">
            <Button variant="outline">Contact Support</Button>
            <Button>Browse Knowledge Base</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation