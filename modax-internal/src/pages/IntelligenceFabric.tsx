import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from 'react'
import { 
  PageContainer, 
  PageHeader 
} from '@/components/layout/PageLayout'
import { Code2, Network, Bot } from 'lucide-react'

export default function IntelligenceFabric() {
  const layers = [
    {
      layer: 'Layer 1',
      title: 'Semantic Applications',
      icon: Code2,
      points: [
        'Extract business context from code',
        'Applications that understand "why"',
        'Foundation for intelligence'
      ]
    },
    {
      layer: 'Layer 2',
      title: 'Enterprise Graph',
      icon: Network,
      points: [
        'Connect data, workflows, outcomes',
        'AI-addressable knowledge',
        'Organizational memory'
      ]
    },
    {
      layer: 'Layer 3',
      title: 'Autonomous Agents',
      icon: Bot,
      points: [
        'Monitor → Decide → Act',
        'Self-improving workflows',
        'Continuous optimization'
      ]
    }
  ]

  const evolutionPath = [
    'POC Resurrection',
    'Process Automation',
    'Intelligent Operations',
    'Autonomous Enterprise'
  ]

  return (
    <PageContainer className="py-6">
      <PageHeader
        title="The Intelligence Fabric Vision"
        description="Transform from traditional applications to autonomous intelligence"
      />

      <div className="space-y-12">
          {/* Core Concept */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl">Core Concept</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Traditional:</span> Apps → Data → Reports → Decisions
                </p>
                <p className="text-gray-900 text-lg font-medium">
                  <span className="font-semibold">AI-Native:</span> Apps + Data + AI Agents = Autonomous Intelligence
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Three Layers */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Three Layers</h2>
            <div className="space-y-6">
              {layers.map((layer, index) => {
                const Icon = layer.icon
                return (
                  <Card key={index} className="border-gray-200">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-100 rounded-lg">
                          <Icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{layer.layer}</p>
                          <CardTitle className="text-xl">{layer.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {layer.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-gray-700">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Evolution Path */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Evolution Path</h2>
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {evolutionPath.map((stage, index) => (
                    <React.Fragment key={index}>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mx-auto mb-3">
                          {index + 1}
                        </div>
                        <p className="text-gray-900 font-medium">{stage}</p>
                      </div>
                      {index < evolutionPath.length - 1 && (
                        <div className="hidden md:block flex-1 h-1 bg-gray-300" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
      </div>
    </PageContainer>
  )
}