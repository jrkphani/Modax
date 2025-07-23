import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { H1, H2, H3, P, Lead, Muted, Large } from '@/components/ui/typography'
import { CheckCircle2, Lightbulb, AlertTriangle, Target, Shield, Layers, Users, GitBranch, Zap } from 'lucide-react'

export default function BestPractices() {
  const bestPracticeCategories = [
    {
      category: 'Implementation Best Practices',
      icon: GitBranch,
      practices: [
        {
          title: 'Start with Core Business Logic',
          description: 'Begin modernization with the most critical business functions to demonstrate immediate value.',
          lessons: [
            'Map business processes before technical implementation',
            'Preserve domain knowledge in the Intelligence Fabric',
            'Validate understanding with stakeholders early and often'
          ]
        },
        {
          title: 'Incremental Migration Strategy',
          description: 'Break down the modernization into manageable phases with clear milestones.',
          lessons: [
            'Use the strangler fig pattern for gradual replacement',
            'Maintain parallel systems during transition',
            'Plan rollback strategies for each phase'
          ]
        },
        {
          title: 'Continuous Testing and Validation',
          description: 'Implement comprehensive testing at every stage of modernization.',
          lessons: [
            'Create test suites that capture business rules',
            'Use property-based testing for complex logic',
            'Maintain test parity between old and new systems'
          ]
        }
      ]
    },
    {
      category: 'Architecture Best Practices',
      icon: Layers,
      practices: [
        {
          title: 'Event-Driven Architecture',
          description: 'Design systems that react to business events for better scalability and flexibility.',
          lessons: [
            'Use event sourcing for audit trails',
            'Implement CQRS for complex domains',
            'Design for eventual consistency where appropriate'
          ]
        },
        {
          title: 'API-First Development',
          description: 'Build APIs before implementations to ensure clean interfaces.',
          lessons: [
            'Design contracts collaboratively with consumers',
            'Version APIs from day one',
            'Document thoroughly with OpenAPI specifications'
          ]
        },
        {
          title: 'Microservices Boundaries',
          description: 'Define service boundaries based on business capabilities, not technical layers.',
          lessons: [
            'Follow domain-driven design principles',
            'Keep services loosely coupled',
            'Avoid distributed monoliths'
          ]
        }
      ]
    },
    {
      category: 'Governance Best Practices',
      icon: Shield,
      practices: [
        {
          title: 'Stakeholder Engagement',
          description: 'Maintain continuous communication with all project stakeholders.',
          lessons: [
            'Schedule regular demos and updates',
            'Create clear communication channels',
            'Document decisions and rationale'
          ]
        },
        {
          title: 'Risk Management',
          description: 'Proactively identify and mitigate risks throughout the modernization.',
          lessons: [
            'Maintain a living risk register',
            'Conduct regular risk assessments',
            'Plan mitigation strategies in advance'
          ]
        },
        {
          title: 'Quality Gates',
          description: 'Implement checkpoints to ensure standards are met before progression.',
          lessons: [
            'Define clear acceptance criteria',
            'Automate quality checks where possible',
            'Enforce gates consistently across all projects'
          ]
        }
      ]
    }
  ]

  const provenPatterns = [
    {
      pattern: 'Strangler Fig Pattern',
      description: 'Gradually replace legacy systems by routing traffic through a facade',
      whenToUse: 'Large monolithic applications that cannot be replaced all at once',
      benefits: ['Reduced risk', 'Continuous delivery', 'Gradual learning curve']
    },
    {
      pattern: 'Database-First Modernization',
      description: 'Modernize the data layer before application logic',
      whenToUse: 'Systems with complex data models or multiple consuming applications',
      benefits: ['Data consistency', 'Improved performance', 'Better analytics capabilities']
    },
    {
      pattern: 'UI-First Transformation',
      description: 'Start with user interface modernization while keeping backend stable',
      whenToUse: 'Applications with outdated user experiences but stable backend logic',
      benefits: ['Quick wins', 'User satisfaction', 'Reduced training requirements']
    }
  ]

  const lessonsLearned = [
    {
      lesson: 'Technical debt compounds quickly',
      insight: 'Address architectural issues early in the modernization process to avoid exponential complexity growth.',
      icon: AlertTriangle
    },
    {
      lesson: 'User adoption is critical',
      insight: 'Invest heavily in change management and training to ensure successful adoption of modernized systems.',
      icon: Users
    },
    {
      lesson: 'Performance baselines matter',
      insight: 'Establish clear performance metrics before modernization to validate improvements.',
      icon: Zap
    },
    {
      lesson: 'Documentation is invaluable',
      insight: 'Comprehensive documentation reduces onboarding time and preserves institutional knowledge.',
      icon: Lightbulb
    }
  ]

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Best Practices"
          description="Proven approaches and lessons learned from successful modernizations"
        />

        <PageContent className="space-y-12">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle>Modernization Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <Lead className="text-muted-foreground mb-4">
                These best practices are distilled from hundreds of successful enterprise modernization projects. 
                Each recommendation is battle-tested and proven to deliver results.
              </Lead>
              <P>
                Success in modernization requires more than technical expertise. It demands a holistic approach 
                that balances technology, process, and people. These practices will guide you through the 
                complexities of transformation while minimizing risk and maximizing value.
              </P>
            </CardContent>
          </Card>

          {/* Best Practices by Category */}
          <div className="space-y-8">
            {bestPracticeCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-gray-700" />
                    <H2>{category.category}</H2>
                  </div>
                  
                  <div className="grid gap-4">
                    {category.practices.map((practice, pIndex) => (
                      <Card key={pIndex}>
                        <CardHeader>
                          <CardTitle className="text-lg">{practice.title}</CardTitle>
                          <CardDescription>{practice.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <H3 className="text-sm mb-3">Key Lessons</H3>
                          <ul className="space-y-2">
                            {practice.lessons.map((lesson, lIndex) => (
                              <li key={lIndex} className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                                <P className="text-sm !mt-0">{lesson}</P>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Proven Patterns */}
          <div className="space-y-6">
            <H2>Proven Modernization Patterns</H2>
            <div className="grid gap-4">
              {provenPatterns.map((pattern, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{pattern.pattern}</CardTitle>
                    <CardDescription>{pattern.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Large className="text-sm mb-2">When to Use</Large>
                      <P className="text-sm">{pattern.whenToUse}</P>
                    </div>
                    <div>
                      <Large className="text-sm mb-2">Benefits</Large>
                      <ul className="space-y-1">
                        {pattern.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-center gap-2">
                            <Target className="h-3 w-3 text-gray-500" />
                            <P className="text-sm !mt-0">{benefit}</P>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="space-y-6">
            <H2>Key Lessons Learned</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lessonsLearned.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Icon className="h-5 w-5 text-gray-600 mt-0.5" />
                        <div className="space-y-2">
                          <Large className="text-base">{item.lesson}</Large>
                          <P className="text-sm text-muted-foreground">{item.insight}</P>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Summary */}
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle>Applying Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <P>
                Remember that best practices are guidelines, not rigid rules. Each modernization project 
                has unique challenges and constraints that may require adaptation of these practices.
              </P>
              <P>
                The key to success is understanding the principles behind each practice and applying them 
                thoughtfully to your specific context. Regular retrospectives and continuous improvement 
                will help you refine these practices for your organization.
              </P>
              <div className="pt-4 border-t">
                <Muted>
                  For specific guidance on applying these practices to your project, consult with your 
                  ModAx technical architect or reach out to our Center of Excellence team.
                </Muted>
              </div>
            </CardContent>
          </Card>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}