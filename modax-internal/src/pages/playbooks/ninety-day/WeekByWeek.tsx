import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress-enhanced';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';
import { 
  Calendar, 
  CheckCircle, 
  Target, 
  Users, 
  FileText, 
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Clock,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Activity {
  time: string;
  task: string;
  type: string;
}

interface WeekPlan {
  week: string;
  phase: string;
  status: string;
  progress: number;
  objectives: string[];
  deliverables: { name: string; status: string }[];
  activities: Record<string, Activity[] | string[]>;
}

const weeklyPlan: WeekPlan[] = [
  {
    week: 'Week 1-2',
    phase: 'Discovery & Assessment',
    status: 'current',
    progress: 100,
    objectives: [
      'Complete stakeholder interviews',
      'Audit existing GenAI experiments',
      'Identify quick wins',
      'Map technical debt'
    ],
    deliverables: [
      { name: 'Experiment Autopsy Report', status: 'completed' },
      { name: 'Technical Assessment', status: 'completed' },
      { name: 'Quick Win Roadmap', status: 'in-progress' }
    ],
    activities: {
      monday: [
        { time: '9:00 AM', task: 'Kickoff meeting with executive sponsor', type: 'meeting' },
        { time: '2:00 PM', task: 'Review existing GenAI experiments', type: 'analysis' }
      ],
      tuesday: [
        { time: '10:00 AM', task: 'Technical stakeholder interviews', type: 'meeting' },
        { time: '2:00 PM', task: 'Security & compliance review', type: 'review' }
      ],
      wednesday: [
        { time: '9:00 AM', task: 'Data architecture assessment', type: 'analysis' },
        { time: '3:00 PM', task: 'Quick win identification workshop', type: 'workshop' }
      ],
      thursday: [
        { time: '10:00 AM', task: 'Business process mapping', type: 'analysis' },
        { time: '2:00 PM', task: 'Integration points review', type: 'review' }
      ],
      friday: [
        { time: '9:00 AM', task: 'Week 1 findings presentation', type: 'presentation' },
        { time: '2:00 PM', task: 'Planning for Week 2', type: 'planning' }
      ]
    }
  },
  {
    week: 'Week 3-4',
    phase: 'Solution Design',
    status: 'upcoming',
    progress: 0,
    objectives: [
      'Design production architecture',
      'Define security framework',
      'Create implementation plan',
      'Establish success metrics'
    ],
    deliverables: [
      { name: 'Solution Architecture', status: 'pending' },
      { name: 'Security Design Document', status: 'pending' },
      { name: 'Implementation Roadmap', status: 'pending' }
    ],
    activities: {
      monday: [
        { time: '9:00 AM', task: 'Architecture design session', type: 'workshop' },
        { time: '2:00 PM', task: 'Technology stack selection', type: 'planning' }
      ],
      tuesday: [
        { time: '10:00 AM', task: 'Security framework design', type: 'workshop' },
        { time: '3:00 PM', task: 'Compliance requirements mapping', type: 'analysis' }
      ],
      wednesday: [
        { time: '9:00 AM', task: 'Data pipeline design', type: 'workshop' },
        { time: '2:00 PM', task: 'Integration architecture review', type: 'review' }
      ],
      thursday: [
        { time: '10:00 AM', task: 'Performance requirements definition', type: 'planning' },
        { time: '2:00 PM', task: 'Monitoring strategy workshop', type: 'workshop' }
      ],
      friday: [
        { time: '9:00 AM', task: 'Design review with stakeholders', type: 'presentation' },
        { time: '2:00 PM', task: 'Implementation planning', type: 'planning' }
      ]
    }
  },
  {
    week: 'Week 5-8',
    phase: 'Build & Iterate',
    status: 'upcoming',
    progress: 0,
    objectives: [
      'Develop core functionality',
      'Implement security controls',
      'Create monitoring dashboards',
      'Conduct user testing'
    ],
    deliverables: [
      { name: 'MVP Application', status: 'pending' },
      { name: 'Security Implementation', status: 'pending' },
      { name: 'User Testing Results', status: 'pending' }
    ],
    activities: {
      sprint1: [
        'Core functionality development',
        'API integration implementation',
        'Security controls setup',
        'Initial testing framework'
      ],
      sprint2: [
        'User interface development',
        'Data pipeline implementation',
        'Performance optimization',
        'User acceptance testing'
      ]
    }
  },
  {
    week: 'Week 9-12',
    phase: 'Deploy & Scale',
    status: 'upcoming',
    progress: 0,
    objectives: [
      'Production deployment',
      'Knowledge transfer',
      'Establish monitoring',
      'Plan expansion roadmap'
    ],
    deliverables: [
      { name: 'Production System', status: 'pending' },
      { name: 'Operations Runbook', status: 'pending' },
      { name: 'Expansion Roadmap', status: 'pending' }
    ],
    activities: {
      deployment: [
        'Production environment setup',
        'Deployment automation',
        'Monitoring implementation',
        'Performance validation'
      ],
      transition: [
        'Team knowledge transfer',
        'Documentation completion',
        'Support model establishment',
        'Expansion planning workshop'
      ]
    }
  }
];

export default function WeekByWeek() {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const currentWeek = weeklyPlan[selectedWeek];

  return (
    <PageLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="border-b pb-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/playbooks/ninety-day">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Overview
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Week-by-Week Execution Guide</h1>
          <p className="text-gray-600">
            Detailed timeline and activities for the 90-day transformation journey
          </p>
        </div>

        {/* Week Selector */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {weeklyPlan.map((week, index) => (
            <Button
              key={index}
              variant={selectedWeek === index ? 'default' : 'outline'}
              className={selectedWeek === index ? 'bg-purple-600 hover:bg-purple-700' : ''}
              onClick={() => { setSelectedWeek(index); }}
            >
              <Calendar className="h-4 w-4 mr-2" />
              {week.week}
              {week.status === 'current' && (
                <Badge variant="secondary" className="ml-2 bg-success/10 text-success-700">
                  Current
                </Badge>
              )}
            </Button>
          ))}
        </div>

        {/* Week Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Phase Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{currentWeek.phase}</CardTitle>
                    <CardDescription>{currentWeek.week}</CardDescription>
                  </div>
                  <Badge 
                    variant={currentWeek.status === 'current' ? 'default' : 'secondary'}
                    className={currentWeek.status === 'current' ? 'bg-purple-600' : ''}
                  >
                    {currentWeek.status === 'current' ? 'In Progress' : 'Upcoming'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Phase Progress</span>
                    <span className="font-medium">{currentWeek.progress}%</span>
                  </div>
                  <Progress value={currentWeek.progress} className="h-2" />
                </div>

                {/* Objectives */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-primary" />
                    Key Objectives
                  </h4>
                  <ul className="space-y-2">
                    {currentWeek.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-primary" />
                    Deliverables
                  </h4>
                  <div className="space-y-2">
                    {currentWeek.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">{deliverable.name}</span>
                        <Badge 
                          variant={
                            deliverable.status === 'completed' ? 'secondary' :
                            deliverable.status === 'in-progress' ? 'default' : 'outline'
                          }
                          className={
                            deliverable.status === 'completed' ? 'bg-success/10 text-success-700' :
                            deliverable.status === 'in-progress' ? 'bg-purple-600' : ''
                          }
                        >
                          {deliverable.status === 'completed' ? 'Completed' :
                           deliverable.status === 'in-progress' ? 'In Progress' : 'Pending'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daily Activities */}
            {(currentWeek.week === 'Week 1-2' || currentWeek.week === 'Week 3-4') && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Daily Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="monday" className="w-full">
                    <TabsList className="grid grid-cols-5 w-full">
                      {Object.keys(currentWeek.activities).map((day) => (
                        <TabsTrigger key={day} value={day} className="capitalize">
                          {day.slice(0, 3)}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {Object.entries(currentWeek.activities).map(([day, activities]) => (
                      <TabsContent key={day} value={day} className="mt-4 space-y-3">
                        {Array.isArray(activities) && activities.length > 0 && typeof activities[0] === 'object' && 'time' in activities[0] ? (
                          (activities as Activity[]).map((activity, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                              <div className="flex-shrink-0">
                                <div className={`w-2 h-2 mt-2 rounded-full ${
                                  activity.type === 'meeting' ? 'bg-blue-500' :
                                  activity.type === 'workshop' ? 'bg-primary/50' :
                                  activity.type === 'presentation' ? 'bg-success/50' :
                                  'bg-gray-500'
                                }`} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-900">{activity.time}</span>
                                  <Badge variant="outline" className="text-xs">
                                    {activity.type}
                                  </Badge>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">{activity.task}</p>
                              </div>
                            </div>
                          ))
                        ) : null}
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            )}

            {/* Sprint Activities */}
            {currentWeek.week === 'Week 5-8' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                    Sprint Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(currentWeek.activities).map(([sprint, activities]) => (
                      <div key={sprint}>
                        <h4 className="font-medium text-gray-900 mb-3 capitalize">
                          {sprint.replace(/(\d)/, ' $1')}
                        </h4>
                        <ul className="space-y-2">
                          {activities.map((activity, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-sm text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Deployment Activities */}
            {currentWeek.week === 'Week 9-12' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                    Final Phase Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(currentWeek.activities).map(([phase, activities]) => (
                      <div key={phase}>
                        <h4 className="font-medium text-gray-900 mb-3 capitalize">
                          {phase} Phase
                        </h4>
                        <ul className="space-y-2">
                          {activities.map((activity, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Key Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Key Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Executive Sponsor</p>
                    <p className="text-sm text-gray-600">Weekly check-ins required</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Technical Lead</p>
                    <p className="text-sm text-gray-600">Daily standups</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Security Officer</p>
                    <p className="text-sm text-gray-600">Bi-weekly reviews</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-amber-600" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>All deliverables require stakeholder sign-off</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Security review must happen before Week 5</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Production access needed by Week 9</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Week Template
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Export to Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Schedule Meetings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-6 border-t">
          <Button 
            variant="outline" 
            onClick={() => { setSelectedWeek(Math.max(0, selectedWeek - 1)); }}
            disabled={selectedWeek === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous Week
          </Button>
          <Button 
            onClick={() => { setSelectedWeek(Math.min(weeklyPlan.length - 1, selectedWeek + 1)); }}
            disabled={selectedWeek === weeklyPlan.length - 1}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Next Week
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}