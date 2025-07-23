import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button'
import { 
  PageContainer, 
  PageHeader 
} from '@/components/layout/PageLayout'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function StrategyHub() {
  const navigate = useNavigate()

  const marketOpportunities = [
    {
      value: '$2.1B',
      title: 'Failed POC Recovery',
      description: '73% of GenAI experiments never reach production'
    },
    {
      value: '$3.2B',
      title: 'Legacy Modernization',
      description: '20-year-old systems blocking innovation'
    },
    {
      value: '$5.4B',
      title: 'Process Reinvention',
      description: 'Manual workflows wasting human potential'
    }
  ]

  const journeySteps = [
    {
      step: 'Act 1',
      title: 'Pick Your Best Dead POC',
      description: 'We\'ll resurrect it in 90 days'
    },
    {
      step: 'Act 2',
      title: 'Small Win, Big Impact',
      description: 'One success becomes your foundation'
    },
    {
      step: 'Act 3',
      title: 'Build Your Empire',
      description: 'Each victory funds the next transformation'
    }
  ]

  return (
    <PageContainer className="py-6">
      <PageHeader
        title="Strategy Overview"
        description="Navigate the path from experiments to enterprise intelligence"
      />

      <div className="space-y-12">
          {/* Market Opportunities */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketOpportunities.map((opportunity, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader className="pb-4">
                    <div className="text-3xl font-bold text-gray-900">{opportunity.value}</div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">{opportunity.title}</h3>
                    <p className="text-gray-600">{opportunity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Entry Strategy Decision Tree */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Entry Strategy Decision Tree</h2>
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">The Journey Map</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-lg text-gray-700 pb-4">
                  Failed POC → Production App → Department Solution →<br />
                  Enterprise Platform → Intelligence Fabric
                </div>
                
                <div className="space-y-6">
                  {journeySteps.map((step, index) => (
                    <div key={index} className="border-l-4 border-gray-300 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900">{step.step}: {step.title}</h4>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <Button 
              size="lg" 
              onClick={() => { void navigate('/intelligence-fabric') }}
              className="bg-gray-900 hover:bg-gray-800"
            >
              View Intelligence Fabric
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
      </div>
    </PageContainer>
  )
}