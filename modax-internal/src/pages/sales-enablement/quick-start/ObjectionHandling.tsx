import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from 'react'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Shield,
  Search,
  Clock,
  DollarSign,
  Users,
  Building,
  Target,
  MessageSquare,
  Lightbulb
} from 'lucide-react'

export default function ObjectionHandling() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const objectionCategories = {
    timing: {
      title: 'Timing & Urgency',
      icon: Clock,
      color: 'bg-blue-50 text-blue-700'
    },
    cost: {
      title: 'Cost & Budget',
      icon: DollarSign,
      color: 'bg-success/5 text-success-700'
    },
    risk: {
      title: 'Risk & Trust',
      icon: Shield,
      color: 'bg-red-50 text-red-700'
    },
    technical: {
      title: 'Technical Concerns',
      icon: Building,
      color: 'bg-primary/5 text-primary'
    },
    competitive: {
      title: 'Competitive',
      icon: Target,
      color: 'bg-orange-50 text-orange-700'
    }
  }

  const objections = [
    // Timing & Urgency
    {
      category: 'timing',
      objection: 'We\'re not ready for modernization yet',
      responses: {
        primary: 'I understand. When do you think you will be ready? What needs to happen first?',
        reframe: 'Interestingly, the companies who say they\'re "not ready" often need modernization the most. What specifically makes you feel unprepared?',
        evidence: 'Our most successful clients started feeling the same way. [Client] thought they needed 2 years to prepare. We helped them start small and be production-ready in 90 days.',
        close: 'What if we could show you a path that doesn\'t require you to be "ready" - just willing to start with one application?'
      },
      tips: ['Don\'t push too hard', 'Explore what "ready" means to them', 'Focus on small starts']
    },
    {
      category: 'timing',
      objection: 'We just finished a transformation project',
      responses: {
        primary: 'Congratulations on completing that. What outcomes did you achieve? What\'s still left to accomplish?',
        reframe: 'Great! You\'ve built the foundation. Now it\'s time to modernize the applications that run on it. Infrastructure without modern apps is like highways without cars.',
        evidence: 'Many of our clients come to us after infrastructure transformations. They realize they still have 20-year-old applications holding them back.',
        close: 'Would you be interested in seeing how we can build on your transformation with actual application modernization?'
      },
      tips: ['Acknowledge their investment', 'Position as complementary, not competitive', 'Focus on applications vs infrastructure']
    },
    {
      category: 'timing',
      objection: 'We have other priorities right now',
      responses: {
        primary: 'I appreciate that. What are your top priorities this quarter? How do they relate to your legacy applications?',
        reframe: 'Often legacy applications are the bottleneck preventing progress on other priorities. How much faster could you move on [their priority] with modern systems?',
        evidence: 'When [Client] modernized their order management system, it accelerated their entire digital transformation by removing the legacy bottleneck.',
        close: 'What if modernization actually accelerated your other priorities instead of competing with them?'
      },
      tips: ['Connect to their stated priorities', 'Show how modernization enables other initiatives', 'Use their language']
    },

    // Cost & Budget
    {
      category: 'cost',
      objection: 'It\'s too expensive',
      responses: {
        primary: 'I understand cost is a concern. Help me understand - too expensive compared to what? What\'s your frame of reference?',
        reframe: 'Let\'s talk about cost differently. What\'s the daily cost of keeping these legacy systems? What\'s the opportunity cost of not modernizing?',
        evidence: 'Our model is self-funding. The efficiency gains from the first application typically pay for the second. Most clients see ROI within 6 months.',
        close: 'Would it change your perspective if I could show you how modernization pays for itself?'
      },
      tips: ['Shift from cost to investment', 'Quantify the cost of inaction', 'Emphasize self-funding model']
    },
    {
      category: 'cost',
      objection: 'We don\'t have budget allocated',
      responses: {
        primary: 'I appreciate your transparency. When does your budget cycle reset? What would need to happen to get budget allocated?',
        reframe: 'Interesting. Do you have budget for keeping the current systems running? We often fund modernization from operational savings.',
        evidence: '[Client] started without new budget. They reallocated 20% of their maintenance spend and the savings covered the rest.',
        close: 'If we could show you how to fund this from existing budgets and operational savings, would that change things?'
      },
      tips: ['Understand their budget cycle', 'Focus on reallocation not new spend', 'Provide creative funding options']
    },
    {
      category: 'cost',
      objection: 'We can do it cheaper in-house',
      responses: {
        primary: 'You might be right. What\'s prevented you from doing it already? What resources would you need?',
        reframe: 'True cost isn\'t just development - it\'s time, risk, and opportunity cost. How long would it take your team? What else wouldn\'t get done?',
        evidence: 'We\'ve seen many companies try. The successful ones took 3+ years and spent 5x our price. Most never finish.',
        close: 'What if you could have it done in 90 days for less than the fully-loaded cost of doing it yourself?'
      },
      tips: ['Acknowledge their capability', 'Focus on opportunity cost', 'Emphasize speed and certainty']
    },

    // Risk & Trust
    {
      category: 'risk',
      objection: 'How do we know you can deliver?',
      responses: {
        primary: 'That\'s a fair question. What specific concerns do you have? What evidence would you need to feel confident?',
        reframe: 'I appreciate your diligence. The real question is - how do you know anyone can deliver? We prove it by starting small and showing results in 90 days.',
        evidence: 'Our team has 200+ years of combined experience modernizing systems for 50+ Fortune 500 companies. But more importantly, we structure engagements to prove value quickly.',
        close: 'Would starting with a single, fixed-price application give you the confidence you need?'
      },
      tips: ['Welcome their skepticism', 'Provide specific proof points', 'Suggest risk mitigation strategies']
    },
    {
      category: 'risk',
      objection: 'We\'ve been burned by consultants before',
      responses: {
        primary: 'I\'m sorry to hear that. What specifically went wrong? What would need to be different this time?',
        reframe: 'We hear this often. That\'s exactly why we don\'t do POCs or lengthy assessments. We build production systems from day one.',
        evidence: 'Many of our clients came to us after failed consulting projects. The difference? We\'re builders, not advisors. We only succeed when your applications are in production.',
        close: 'What if you could see working software in 30 days instead of PowerPoints?'
      },
      tips: ['Empathize with their experience', 'Clearly differentiate your approach', 'Focus on outcomes not activities']
    },
    {
      category: 'risk',
      objection: 'What happens after you leave?',
      responses: {
        primary: 'Great question. Our goal is to make your team stronger, not dependent. How important is knowledge transfer to you?',
        reframe: 'Unlike traditional consultants, we embed with your team and transfer knowledge throughout. You\'re more capable after we leave, not less.',
        evidence: 'We measure success by your independence. [Client]\'s team now modernizes applications themselves using our methodology.',
        close: 'Would you like to see our knowledge transfer approach and how we ensure your long-term success?'
      },
      tips: ['Emphasize knowledge transfer', 'Provide specific examples', 'Show ongoing support options']
    },

    // Technical Concerns
    {
      category: 'technical',
      objection: 'Our systems are too complex to modernize',
      responses: {
        primary: 'Complex systems are our specialty. What specifically makes them complex? The business logic, integrations, or something else?',
        reframe: 'Complexity is exactly why you need modernization. The question isn\'t whether to modernize, but how to do it without losing that complexity that runs your business.',
        evidence: 'We\'ve modernized trading systems, clinical platforms, and manufacturing controls. Complexity is an asset when captured correctly.',
        close: 'What if we could preserve all that complexity while making it manageable and extensible?'
      },
      tips: ['Show expertise with complex systems', 'Reframe complexity as valuable IP', 'Provide relevant examples']
    },
    {
      category: 'technical',
      objection: 'We need to maintain specific technologies/platforms',
      responses: {
        primary: 'Understood. Which technologies are non-negotiable and why? Is it skills, integration, or compliance driven?',
        reframe: 'We\'re not religious about technology. We work with what makes sense for your business. Modern architecture can incorporate legacy requirements.',
        evidence: 'For [Client], we modernized their COBOL system while keeping critical calculations in COBOL, wrapped in modern APIs.',
        close: 'Would you be interested in seeing how we can modernize while respecting your technology constraints?'
      },
      tips: ['Be flexible on technology choices', 'Focus on outcomes not tools', 'Show hybrid approaches']
    },
    {
      category: 'technical',
      objection: 'What about our data and integrations?',
      responses: {
        primary: 'Critical question. Walk me through your current data flows and key integrations. What absolutely cannot break?',
        reframe: 'Data and integrations are often the most valuable part of legacy systems. Our approach preserves and enhances these connections.',
        evidence: 'We use strangler fig patterns and API facades to modernize without breaking integrations. [Client] didn\'t lose a single connection.',
        close: 'Would you like to see our integration preservation methodology and how we ensure zero disruption?'
      },
      tips: ['Show technical competence', 'Emphasize preservation over replacement', 'Provide architectural patterns']
    },

    // Competitive
    {
      category: 'competitive',
      objection: 'We\'re already working with [Competitor]',
      responses: {
        primary: 'I respect that relationship. How\'s it going? What outcomes have you achieved so far?',
        reframe: 'Many of our clients work with multiple partners. We often come in where others focus on infrastructure or consulting, and we focus on applications.',
        evidence: '[Client] works with [Big Firm] for strategy and us for execution. The combination works well because we have different strengths.',
        close: 'Would you be open to exploring how we might complement what [Competitor] is doing?'
      },
      tips: ['Respect existing relationships', 'Find complementary angles', 'Focus on different strengths']
    },
    {
      category: 'competitive',
      objection: 'How are you different from [Big Consulting Firm]?',
      responses: {
        primary: 'Great question. The biggest difference is that we build, they advise. What\'s been your experience with consulting-led transformations?',
        reframe: 'Think of us as builders, not consultants. We measure success in working software, not PowerPoints. 90 days to production, not 18-month roadmaps.',
        evidence: 'Our founders came from those firms. We started ModAx because we were tired of POCs that never became production.',
        close: 'Would you prefer another assessment and roadmap, or actual working software in 90 days?'
      },
      tips: ['Be respectful but clear about differences', 'Focus on speed and outcomes', 'Use founder story if appropriate']
    },
    {
      category: 'competitive',
      objection: 'Why not just go with AWS/Azure/Google directly?',
      responses: {
        primary: 'Cloud providers are great at infrastructure. But who\'s going to modernize your applications to run on it? That\'s where we come in.',
        reframe: 'We\'re partners with all major clouds. They provide the platform, we transform your applications to leverage it fully.',
        evidence: 'Cloud migrations often fail because they\'re lift-and-shift. We modernize AND migrate, capturing intelligence along the way.',
        close: 'Would you rather have modern infrastructure running legacy apps, or modern apps that fully leverage the cloud?'
      },
      tips: ['Position as complementary', 'Emphasize application expertise', 'Show cloud partnerships']
    }
  ]

  const handleObjectionFramework = {
    listen: {
      title: 'Listen & Acknowledge',
      description: 'Never argue. Show you understand their concern.',
      examples: [
        '"I understand your concern about..."',
        '"That\'s a valid point. Tell me more about..."',
        '"I appreciate you sharing that. Help me understand..."'
      ]
    },
    align: {
      title: 'Align & Empathize',
      description: 'Show you\'re on their side. You want the same outcome.',
      examples: [
        '"You\'re absolutely right to be cautious about..."',
        '"Many of our successful clients felt the same way initially..."',
        '"I would have the same concern in your position..."'
      ]
    },
    reframe: {
      title: 'Reframe the Perspective',
      description: 'Help them see the situation differently.',
      examples: [
        '"Let me offer a different perspective..."',
        '"What if we looked at it this way..."',
        '"Consider this angle..."'
      ]
    },
    evidence: {
      title: 'Provide Evidence',
      description: 'Back up your reframe with proof.',
      examples: [
        '"When [similar client] faced this, they found..."',
        '"Our data shows that companies who..."',
        '"In our experience with 50+ enterprises..."'
      ]
    },
    advance: {
      title: 'Advance the Conversation',
      description: 'Move toward a specific next step.',
      examples: [
        '"Would it make sense to..."',
        '"What would need to be true for you to..."',
        '"Would you be open to exploring..."'
      ]
    }
  }

  // Filter objections based on search and category
  const filteredObjections = objections.filter(obj => {
    const matchesSearch = searchQuery === '' || 
      obj.objection.toLowerCase().includes(searchQuery.toLowerCase()) ||
      Object.values(obj.responses).some(r => r.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || obj.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="Objection Handling Playbook"
          description="Turn resistance into momentum with proven responses"
        />

        <PageContent className="space-y-8">
          {/* Framework Overview */}
          <Alert className="border-primary/20 bg-primary/5">
            <Lightbulb className="h-4 w-4 text-primary" />
            <AlertDescription className="text-primary">
              <strong>Remember:</strong> Objections are buying signals. They show engagement. Use the ALREA framework: Acknowledge, Listen, Reframe, Evidence, Advance.
            </AlertDescription>
          </Alert>

          {/* ALREA Framework */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>The ALREA Framework</CardTitle>
              <CardDescription>A systematic approach to handling any objection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                {Object.entries(handleObjectionFramework).map(([key, step], index) => (
                  <div key={key} className="text-center">
                    <div className="mx-auto w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-semibold mb-2">
                      {index + 1}
                    </div>
                    <h4 className="font-medium text-sm text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-xs text-gray-600 mb-2">{step.description}</p>
                    <div className="text-left space-y-1">
                      {step.examples.map((example, i) => (
                        <p key={i} className="text-xs text-gray-500 italic">
                          {example}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Search and Filter */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search objections or responses..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); }}
                className="pl-10"
              />
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid grid-cols-3 md:grid-cols-6">
                <TabsTrigger value="all">All</TabsTrigger>
                {Object.entries(objectionCategories).map(([key, category]) => (
                  <TabsTrigger key={key} value={key}>
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Objections List */}
          <div className="space-y-6">
            {Object.entries(objectionCategories).map(([categoryKey, category]) => {
              const categoryObjections = filteredObjections.filter(obj => obj.category === categoryKey)
              
              if (categoryObjections.length === 0) return null
              
              const Icon = category.icon
              
              return (
                <div key={categoryKey}>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <div className={`p-1 rounded ${category.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    {category.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {categoryObjections.map((objection, index) => (
                      <Card key={index} className="border-gray-200">
                        <CardHeader>
                          <CardTitle className="text-lg">"{objection.objection}"</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {/* Response Options */}
                          <div className="space-y-3">
                            <div className="border-l-4 border-primary/20 pl-4">
                              <h4 className="font-medium text-sm text-gray-700 mb-1">Primary Response</h4>
                              <p className="text-sm text-gray-600 italic">"{objection.responses.primary}"</p>
                            </div>
                            
                            <div className="border-l-4 border-blue-200 pl-4">
                              <h4 className="font-medium text-sm text-gray-700 mb-1">Reframe</h4>
                              <p className="text-sm text-gray-600 italic">"{objection.responses.reframe}"</p>
                            </div>
                            
                            <div className="border-l-4 border-success/20 pl-4">
                              <h4 className="font-medium text-sm text-gray-700 mb-1">Evidence</h4>
                              <p className="text-sm text-gray-600 italic">"{objection.responses.evidence}"</p>
                            </div>
                            
                            <div className="border-l-4 border-orange-200 pl-4">
                              <h4 className="font-medium text-sm text-gray-700 mb-1">Close</h4>
                              <p className="text-sm text-gray-600 italic">"{objection.responses.close}"</p>
                            </div>
                          </div>

                          {/* Tips */}
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <h4 className="font-medium text-xs text-gray-700 mb-1">Remember:</h4>
                            <div className="flex flex-wrap gap-2">
                              {objection.tips.map((tip, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {tip}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Common Patterns */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>Objection Handling Patterns</CardTitle>
              <CardDescription>Advanced techniques from top performers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">The Aikido Move</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Use their objection as proof of your value. "You're absolutely right - that's exactly why you need us."
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm italic">
                    "Big transformations do fail. That's why we start small and prove value in 90 days."
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">The Perspective Shift</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Change the comparison point. "Expensive compared to what? Doing nothing?"
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm italic">
                    "What's the cost of your best developer spending 6 months on this instead of innovation?"
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">The Feel-Felt-Found</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Classic but effective. "I understand how you feel. Others felt the same. They found..."
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm italic">
                    "I get it. [Client] felt the same way. They found starting small removed all their concerns."
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">The Question Flip</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Answer their question with a better question that reframes the discussion.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm italic">
                    "Instead of 'can you do it?', the question is 'what happens if you don't modernize?'"
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practice Scenarios */}
          <Card className="border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Common Objection Chains
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">The Price Ladder</h4>
                  <p className="text-sm text-gray-600">
                    "Too expensive" → "No budget" → "We'll do it ourselves" → "Maybe next year"
                  </p>
                  <p className="text-sm text-primary mt-1">
                    Strategy: Focus on cost of inaction and self-funding model early
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">The Trust Spiral</h4>
                  <p className="text-sm text-gray-600">
                    "How do we know?" → "We've been burned" → "What about support?" → "Too risky"
                  </p>
                  <p className="text-sm text-primary mt-1">
                    Strategy: Offer proof points and suggest starting small to build trust
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">The Technical Maze</h4>
                  <p className="text-sm text-gray-600">
                    "Too complex" → "Special requirements" → "Integration concerns" → "Compliance issues"
                  </p>
                  <p className="text-sm text-primary mt-1">
                    Strategy: Show similar complex projects and emphasize preservation approach
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Master these responses</p>
              <p className="text-sm text-gray-600">Practice with real scenarios and get feedback</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Target className="mr-2 h-4 w-4" />
                Take Objection Quiz
              </Button>
              <Button>
                <Users className="mr-2 h-4 w-4" />
                Role-Play Session
              </Button>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}