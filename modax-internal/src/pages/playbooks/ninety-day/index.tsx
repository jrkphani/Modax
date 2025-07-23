import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';
import { Check, Download, Calendar, Users, Database, Settings, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

export default function NinetyDayPlaybook() {
  const timeline = [
    {
      phase: 'Week 1-2',
      title: 'Experiment Autopsy',
      activities: [
        'Show us your GenAI graveyard',
        'We\'ll identify resurrection candidates'
      ]
    },
    {
      phase: 'Week 3-8',
      title: 'Trojan Horse Execution',
      activities: [
        'Build production-ready solution',
        'Include enterprise security from day one'
      ]
    },
    {
      phase: 'Week 9-12',
      title: 'Bridge to Tomorrow',
      activities: [
        'Deploy to production',
        'Map expansion opportunities'
      ]
    }
  ]

  const prerequisites = [
    {
      icon: Users,
      requirement: 'Executive sponsor (4-6 hrs/week)',
      status: 'required'
    },
    {
      icon: Database,
      requirement: 'Data access confirmed',
      status: 'required'
    },
    {
      icon: Settings,
      requirement: 'Environment provisioned',
      status: 'required'
    },
    {
      icon: Users,
      requirement: 'Team allocated',
      status: 'required'
    }
  ]

  const differences = [
    'We build for production, not demos',
    'We start with IT requirements, not end with them',
    'We know what comes after the first success',
    'We measure ROI, not potential'
  ]

  return (
    <PageLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="border-b pb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">90-Day Execution Playbook</h1>
            <Badge className="bg-purple-600">Active Playbook</Badge>
          </div>
          <p className="text-gray-600">
            Transform failed experiments into production-ready solutions in 90 days
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link to="/playbooks/ninety-day/week-by-week">
            <Card className="hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">Week by Week Guide</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/playbooks/ninety-day/prerequisites">
            <Card className="hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-medium">Prerequisites</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/playbooks/ninety-day/quality-gates">
            <Card className="hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-primary" />
                    <span className="font-medium">Quality Gates</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
        {/* Core Philosophy */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl">Core Philosophy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-gray-900">
              Stop experimenting. Start evolving.
            </p>
            <p className="text-gray-600 mt-2">
              We don't build another proof of concept. We build the bridge from your experiments to production reality.
            </p>
          </CardContent>
        </Card>

        {/* Timeline Overview */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">90-Day Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timeline.map((phase, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-purple-600" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-primary">{phase.phase}</p>
                      <Clock className="h-4 w-4 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        {/* Prerequisites Summary */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Prerequisites</h2>
          <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {prerequisites.map((prereq, index) => {
                    const Icon = prereq.icon
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                            <Check className="h-5 w-5 text-success" />
                          </div>
                        </div>
                        <div className="flex items-center gap-3 flex-1">
                          <Icon className="h-5 w-5 text-gray-600" />
                          <span className="text-gray-900">{prereq.requirement}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

        {/* The ModAx Difference */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The ModAx Difference</h2>
          <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {differences.map((difference, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span className="text-gray-900">{difference}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

        {/* Actions */}
        <div className="flex gap-4 pt-8">
          <Link to="/playbooks/ninety-day/week-by-week" className="flex-1">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Start Week-by-Week Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button 
            variant="outline"
            className="flex-1"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Playbook
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}