import React, { useState, useMemo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { 
  Search, 
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  ChevronRight,
  FileQuestion,
  Lightbulb,
  Users,
  DollarSign,
  Settings,
  Shield,
  Zap
} from 'lucide-react'

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  helpful?: number
  related?: string[]
}

interface Category {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  count: number
}

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, boolean>>({})

  const categories: Category[] = [
    { id: 'getting-started', name: 'Getting Started', icon: Zap, count: 12 },
    { id: 'pricing', name: 'Pricing & Billing', icon: DollarSign, count: 8 },
    { id: 'technical', name: 'Technical', icon: Settings, count: 15 },
    { id: 'security', name: 'Security', icon: Shield, count: 10 },
    { id: 'account', name: 'Account', icon: Users, count: 7 },
  ]

  const faqs: FAQ[] = [
    // Getting Started
    {
      id: '1',
      question: 'What is ModAx and how does it work?',
      answer: 'ModAx is an enterprise application modernization platform that transforms legacy systems into AI-native architectures. It uses a three-layer Intelligence Fabric to analyze, optimize, and modernize your applications while preserving business logic and operational knowledge.',
      category: 'getting-started',
      helpful: 234,
      related: ['2', '3']
    },
    {
      id: '2',
      question: 'How long does the 90-day transformation process take?',
      answer: 'The 90-day playbook is designed to take POCs to production in exactly 90 days. This includes: Days 1-30 for assessment and planning, Days 31-60 for implementation and testing, and Days 61-90 for deployment and optimization. However, timeline can vary based on system complexity.',
      category: 'getting-started',
      helpful: 189
    },
    {
      id: '3',
      question: 'What types of legacy systems can ModAx transform?',
      answer: 'ModAx can transform a wide range of legacy systems including mainframe applications, monolithic architectures, outdated databases, and traditional enterprise software. We support COBOL, Java, .NET, and many other legacy technologies.',
      category: 'getting-started',
      helpful: 156
    },
    {
      id: '4',
      question: 'Do I need technical expertise to use ModAx?',
      answer: 'While technical knowledge is helpful, ModAx is designed with user-friendly interfaces and comprehensive documentation. We provide training, support, and professional services to ensure success regardless of your technical background.',
      category: 'getting-started',
      helpful: 142
    },

    // Pricing & Billing
    {
      id: '5',
      question: 'How is ModAx priced?',
      answer: 'ModAx offers flexible pricing based on your needs: Platform licensing (annual or monthly), usage-based pricing for transformations, and professional services for implementation support. Contact our sales team for a customized quote.',
      category: 'pricing',
      helpful: 178
    },
    {
      id: '6',
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 30-day free trial that includes access to all platform features, sample transformation projects, and technical support. No credit card required to start.',
      category: 'pricing',
      helpful: 167
    },
    {
      id: '7',
      question: 'Can I access AWS funding through ModAx?',
      answer: 'Yes! As an AWS partner, we help clients access various AWS funding programs including Migration Acceleration Program (MAP), AWS Credits, and ISV Workload Migration Program. We guide you through the entire application process.',
      category: 'pricing',
      helpful: 195,
      related: ['8']
    },
    {
      id: '8',
      question: 'What ROI can I expect from modernization?',
      answer: 'Typical clients see 40-60% reduction in operational costs, 3-5x improvement in system performance, and 70% faster time-to-market for new features. Use our ROI calculator for a personalized estimate.',
      category: 'pricing',
      helpful: 203
    },

    // Technical
    {
      id: '9',
      question: 'What is the Intelligence Fabric architecture?',
      answer: 'The Intelligence Fabric is ModAx\'s three-layer architecture: Foundation Layer (infrastructure and data collection), Integration Layer (system connections and orchestration), and Intelligence Layer (AI models and decision-making). This creates a comprehensive modernization framework.',
      category: 'technical',
      helpful: 176
    },
    {
      id: '10',
      question: 'How does ModAx handle data migration?',
      answer: 'ModAx uses intelligent data mapping and transformation tools to migrate data while preserving integrity. We support incremental migration, data validation, rollback capabilities, and zero-downtime migration strategies.',
      category: 'technical',
      helpful: 164
    },
    {
      id: '11',
      question: 'Can ModAx integrate with my existing CI/CD pipeline?',
      answer: 'Yes, ModAx provides native integrations with popular CI/CD tools including Jenkins, GitLab CI, GitHub Actions, and Azure DevOps. We also offer webhook and API support for custom integrations.',
      category: 'technical',
      helpful: 152
    },
    {
      id: '12',
      question: 'What cloud platforms does ModAx support?',
      answer: 'ModAx supports deployment to all major cloud platforms including AWS, Azure, Google Cloud, and hybrid/multi-cloud environments. We provide cloud-specific optimizations and best practices for each platform.',
      category: 'technical',
      helpful: 148
    },

    // Security
    {
      id: '13',
      question: 'How does ModAx ensure data security during transformation?',
      answer: 'ModAx implements enterprise-grade security including end-to-end encryption, role-based access control, audit logging, and compliance with SOC 2, HIPAA, and GDPR. All data remains within your control throughout the process.',
      category: 'security',
      helpful: 186
    },
    {
      id: '14',
      question: 'Where is my data stored during transformation?',
      answer: 'Your data can be stored in your preferred location - on-premises, in your cloud account, or in ModAx\'s secure cloud infrastructure. We never store sensitive data without explicit permission and encryption.',
      category: 'security',
      helpful: 172
    },
    {
      id: '15',
      question: 'What compliance certifications does ModAx have?',
      answer: 'ModAx is SOC 2 Type II certified, HIPAA compliant, and GDPR compliant. We also support industry-specific compliance requirements for financial services, healthcare, and government sectors.',
      category: 'security',
      helpful: 159
    },

    // Account
    {
      id: '16',
      question: 'How do I add team members to my ModAx account?',
      answer: 'Navigate to Settings > Team Management to invite team members. You can assign different roles (Admin, Developer, Viewer) with specific permissions. Team members receive email invitations to join.',
      category: 'account',
      helpful: 143
    },
    {
      id: '17',
      question: 'Can I have multiple projects under one account?',
      answer: 'Yes, ModAx supports unlimited projects under a single account. You can organize projects by department, application, or any structure that fits your needs. Project-level permissions ensure proper access control.',
      category: 'account',
      helpful: 138
    }
  ]

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory, faqs])

  // Group FAQs by category
  const groupedFAQs = useMemo(() => {
    return filteredFAQs.reduce((acc, faq) => {
      if (!acc[faq.category]) {
        acc[faq.category] = []
      }
      acc[faq.category].push(faq)
      return acc
    }, {} as Record<string, FAQ[]>)
  }, [filteredFAQs])

  const handleHelpful = (faqId: string) => {
    setHelpfulVotes(prev => ({ ...prev, [faqId]: true }))
  }

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about ModAx"
        />

        <PageContent>
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-12 text-base"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-purple-600 hover:bg-purple-700' : ''}
            >
              All Questions
              <Badge variant="secondary" className="ml-2 bg-gray-100">
                {faqs.length}
              </Badge>
            </Button>
            {categories.map(category => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? 'bg-purple-600 hover:bg-purple-700' : ''}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                  <Badge variant="secondary" className="ml-2 bg-gray-100">
                    {category.count}
                  </Badge>
                </Button>
              )
            })}
          </div>

          {/* FAQ Accordion */}
          {filteredFAQs.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              {Object.entries(groupedFAQs).map(([category, categoryFaqs]) => {
                const categoryInfo = categories.find(c => c.id === category)
                const Icon = categoryInfo?.icon || HelpCircle
                
                return (
                  <div key={category} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {categoryInfo?.name || 'Other'}
                      </h2>
                    </div>
                    
                    <Accordion type="single" collapsible className="space-y-4">
                      {categoryFaqs.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-6">
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="font-medium text-gray-900 pr-4">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 pt-2">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                              
                              {faq.related && faq.related.length > 0 && (
                                <div className="pt-4 border-t">
                                  <p className="text-sm font-medium text-gray-700 mb-2">
                                    Related questions:
                                  </p>
                                  <div className="space-y-1">
                                    {faq.related.map(relatedId => {
                                      const relatedFaq = faqs.find(f => f.id === relatedId)
                                      if (!relatedFaq) return null
                                      return (
                                        <Button
                                          key={relatedId}
                                          variant="ghost"
                                          size="sm"
                                          className="text-primary hover:text-primary p-0 h-auto font-normal justify-start"
                                        >
                                          <ChevronRight className="h-3 w-3 mr-1" />
                                          {relatedFaq.question}
                                        </Button>
                                      )
                                    })}
                                  </div>
                                </div>
                              )}
                              
                              <div className="flex items-center gap-4 pt-4 border-t">
                                <span className="text-sm text-gray-500">
                                  Was this helpful?
                                </span>
                                {helpfulVotes[faq.id] ? (
                                  <span className="text-sm text-success font-medium">
                                    Thanks for your feedback!
                                  </span>
                                ) : (
                                  <div className="flex gap-2">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => handleHelpful(faq.id)}
                                    >
                                      Yes
                                    </Button>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => handleHelpful(faq.id)}
                                    >
                                      No
                                    </Button>
                                  </div>
                                )}
                                {faq.helpful && (
                                  <span className="text-sm text-gray-500 ml-auto">
                                    {faq.helpful + (helpfulVotes[faq.id] ? 1 : 0)} found this helpful
                                  </span>
                                )}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )
              })}
            </div>
          ) : (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <FileQuestion className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No questions found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try searching with different keywords or browse all categories
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                >
                  View all FAQs
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Contact Support */}
          <Card className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Our support team is here to help. Reach out through any of these channels
                  for personalized assistance.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="outline" className="bg-white">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Live Chat
                  </Button>
                  <Button variant="outline" className="bg-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                  <Button variant="outline" className="bg-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}