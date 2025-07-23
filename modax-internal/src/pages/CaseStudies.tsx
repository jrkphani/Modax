import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from 'react'
import { Button } from '@/components/ui/button'
import { 
  PageContainer, 
  PageHeader 
} from '@/components/layout/PageLayout'

export default function CaseStudies() {
  const valuemaxStory = [
    {
      act: 'Act 1',
      title: 'The Graveyard',
      content: [
        'Failed customer service chatbot',
        '20-year-old legacy system',
        'Manual everything'
      ]
    },
    {
      act: 'Act 2',
      title: 'The Trojan Horse',
      content: [
        '90-day POC resurrection',
        'Working chatbot in production',
        '$30K investment (AWS funded 80%)'
      ]
    },
    {
      act: 'Act 3',
      title: 'The Empire',
      content: [
        'Month 1-3: One process automated',
        'Month 4-6: Department transformed',
        'Month 7-12: Enterprise intelligence'
      ]
    }
  ]

  const transformationArc = [
    'Failed Experiment',
    'First Success',
    'Department Win',
    'Enterprise Platform',
    'Regional Innovation Leader'
  ]

  const otherCaseStudies = [
    {
      company: 'ProcureHere',
      industry: 'Procurement',
      challenge: 'Manual vendor onboarding',
      outcome: '75% reduction in processing time',
      timeline: '8 weeks'
    },
    {
      company: 'TechCorp',
      industry: 'Technology',
      challenge: 'Siloed data systems',
      outcome: 'Unified intelligence platform',
      timeline: '12 weeks'
    }
  ]

  return (
    <PageContainer className="py-6">
      <PageHeader
        title="From Experiments to Empire"
        description="Real stories of transformation"
      />

      <div className="space-y-12">
          {/* Valuemax Story */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Valuemax Story</h2>
            
            {/* Three Acts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {valuemaxStory.map((act, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <p className="text-sm text-gray-600">{act.act}</p>
                    <CardTitle className="text-xl">{act.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {act.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Transformation Arc */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>The Transformation Arc</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
                  {transformationArc.map((stage, index) => (
                    <React.Fragment key={index}>
                      <div className="text-center">
                        <div className="text-gray-900 font-medium">{stage}</div>
                      </div>
                      {index < transformationArc.length - 1 && (
                        <ArrowRight className="hidden md:block h-5 w-5 text-gray-400" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="flex justify-center mt-6">
              <Button variant="outline">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Other Case Studies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherCaseStudies.map((study, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{study.company}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{study.industry}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {study.timeline}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Challenge</p>
                      <p className="text-gray-900">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Outcome</p>
                      <p className="text-gray-900">{study.outcome}</p>
                    </div>
                    <Button variant="ghost" className="w-full">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      </div>
    </PageContainer>
  )
}