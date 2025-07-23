import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from 'react';
import { Progress } from '@/components/ui/progress-enhanced';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageLayout';

interface Playbook {
  id: string;
  title: string;
  description: string;
  icon: typeof Calendar | typeof Search | typeof TrendingUp;
  path: string;
  progress: number;
  status: string;
  sections: { name: string; path: string }[];
  highlights: string[];
}

const playbooks: Playbook[] = [
  {
    id: 'ninety-day',
    title: '90-Day Execution Playbook',
    description: 'Comprehensive guide for first 90 days of engagement',
    icon: Calendar,
    path: '/playbooks/ninety-day',
    progress: 75,
    status: 'in-progress',
    sections: [
      { name: 'Week by Week Guide', path: '/playbooks/ninety-day/week-by-week' },
      { name: 'Prerequisites', path: '/playbooks/ninety-day/prerequisites' },
      { name: 'Quality Gates', path: '/playbooks/ninety-day/quality-gates' }
    ],
    highlights: [
      'Day 1-30: Discovery & Assessment',
      'Day 31-60: Solution Design',
      'Day 61-90: Initial Implementation'
    ]
  },
  {
    id: 'discovery',
    title: 'Discovery Process',
    description: 'Systematic approach to understanding client needs',
    icon: Search,
    path: '/playbooks/discovery',
    progress: 60,
    status: 'in-progress',
    sections: [
      { name: 'Qualification Framework', path: '/playbooks/discovery/qualification-framework' },
      { name: 'Question Bank', path: '/playbooks/discovery/question-bank' },
      { name: 'Assessment Templates', path: '/playbooks/discovery/assessment-templates' }
    ],
    highlights: [
      'Technical debt assessment',
      'Business process mapping',
      'Stakeholder analysis'
    ]
  },
  {
    id: 'expansion',
    title: 'Expansion Strategy',
    description: 'Grow accounts from initial project to enterprise transformation',
    icon: TrendingUp,
    path: '/playbooks/expansion',
    progress: 85,
    status: 'in-progress',
    sections: [
      { name: 'Land & Expand Model', path: '/playbooks/expansion/land-expand-model' },
      { name: 'Success Dashboard', path: '/playbooks/expansion/success-dashboard' },
      { name: 'Expansion Psychology', path: '/playbooks/expansion/psychology' }
    ],
    highlights: [
      'Identify expansion opportunities',
      'Build executive relationships',
      'Scale transformation efforts'
    ]
  }
];

const executionMetrics = [
  { label: 'Average Time to Value', value: '45 days', trend: '+15%' },
  { label: 'Client Satisfaction', value: '94%', trend: '+5%' },
  { label: 'Expansion Rate', value: '78%', trend: '+12%' },
  { label: 'Project Success Rate', value: '92%', trend: '+8%' }
];

export default function Playbooks() {
  return (
    <PageContainer className="py-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="border-b pb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Execution Playbooks</h1>
          <p className="text-gray-600">
            Proven methodologies and processes for successful enterprise modernization
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {executionMetrics.map((metric) => (
            <Card key={metric.label}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                    <p className="text-2xl font-bold mt-1">{metric.value}</p>
                  </div>
                  <Badge variant="secondary" className="bg-success/10 text-success-700">
                    {metric.trend}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Playbooks Grid */}
        <div className="grid gap-6">
          {playbooks.map((playbook) => {
            const Icon = playbook.icon;
            return (
              <Card key={playbook.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{playbook.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {playbook.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge 
                      variant={playbook.status === 'in-progress' ? 'default' : 'secondary'}
                      className={playbook.status === 'in-progress' ? 'bg-purple-600' : ''}
                    >
                      {playbook.status === 'in-progress' ? 'In Progress' : 'Planned'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Completion Progress</span>
                      <span className="font-medium">{playbook.progress}%</span>
                    </div>
                    <Progress value={playbook.progress} className="h-2" />
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Key Components</h4>
                    <div className="space-y-2">
                      {playbook.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sections */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Sections</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {playbook.sections.map((section) => (
                        <Link 
                          key={section.path} 
                          to={section.path}
                          className="group"
                        >
                          <div className="p-3 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-700 group-hover:text-primary">
                                {section.name}
                              </span>
                              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Link to={playbook.path}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        View Full Playbook
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Tips */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-primary" />
              <span>Playbook Best Practices</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">For New Engagements</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Start with the 90-Day Playbook from day one</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Complete discovery assessment within first 2 weeks</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Set up weekly check-ins with stakeholders</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">For Account Growth</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Review expansion triggers monthly</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Document all wins and success stories</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Build relationships across departments</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}