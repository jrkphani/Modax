import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/layout/PageLayout';
import { 
  ArrowLeft,
  ArrowRight,
  Search, 
  ClipboardList, 
  FileText, 
  Users,
  Target,
  Clock,
  CheckCircle,
  TrendingUp,
  XCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const discoveryPhases = [
  {
    phase: 'Initial Assessment',
    duration: '3-5 days',
    status: 'completed',
    activities: [
      'Stakeholder interviews',
      'Technical landscape review',
      'Business process mapping',
      'Pain point identification'
    ]
  },
  {
    phase: 'Deep Dive Analysis',
    duration: '5-7 days',
    status: 'in-progress',
    activities: [
      'Code quality assessment',
      'Architecture evaluation',
      'Data flow analysis',
      'Security audit'
    ]
  },
  {
    phase: 'Opportunity Mapping',
    duration: '2-3 days',
    status: 'pending',
    activities: [
      'Quick win identification',
      'Transformation roadmap',
      'Risk assessment',
      'ROI projections'
    ]
  }
];

const discoveryTools = [
  {
    title: 'Qualification Framework',
    description: 'Systematic approach to qualify opportunities and assess client readiness',
    icon: Target,
    path: '/playbooks/discovery/qualification-framework',
    metrics: {
      usage: '95%',
      satisfaction: '4.8/5'
    }
  },
  {
    title: 'Question Bank',
    description: 'Comprehensive repository of discovery questions organized by domain',
    icon: ClipboardList,
    path: '/playbooks/discovery/question-bank',
    metrics: {
      questions: '250+',
      categories: '12'
    }
  },
  {
    title: 'Assessment Templates',
    description: 'Ready-to-use templates for technical and business assessments',
    icon: FileText,
    path: '/playbooks/discovery/assessment-templates',
    metrics: {
      templates: '15',
      downloads: '1.2k'
    }
  }
];

export default function DiscoveryProcess() {
  return (
    <PageLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="border-b pb-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/playbooks">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Playbooks
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Discovery Process</h1>
              <p className="text-gray-600">
                Systematic approach to understanding client needs and identifying transformation opportunities
              </p>
            </div>
            <Badge className="bg-purple-600">Active Process</Badge>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Discovery Time</p>
                  <p className="text-2xl font-bold mt-1">12 days</p>
                </div>
                <Clock className="h-8 w-8 text-purple-100" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold mt-1">94%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success-100" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Deal Size</p>
                  <p className="text-2xl font-bold mt-1">$450K</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-100" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                  <p className="text-2xl font-bold mt-1">4.9/5</p>
                </div>
                <Users className="h-8 w-8 text-purple-100" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Discovery Phases */}
        <Card>
          <CardHeader>
            <CardTitle>Discovery Timeline</CardTitle>
            <CardDescription>
              Typical progression through discovery phases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {discoveryPhases.map((phase, index) => (
                <div key={index} className="relative">
                  {index < discoveryPhases.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gray-200" />
                  )}
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      phase.status === 'completed' ? 'bg-success/10' :
                      phase.status === 'in-progress' ? 'bg-primary/10' :
                      'bg-gray-100'
                    }`}>
                      {phase.status === 'completed' ? (
                        <CheckCircle className="h-5 w-5 text-success" />
                      ) : phase.status === 'in-progress' ? (
                        <div className="w-3 h-3 bg-purple-600 rounded-full" />
                      ) : (
                        <div className="w-3 h-3 bg-gray-400 rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-medium text-gray-900">{phase.phase}</h3>
                          <p className="text-sm text-gray-600">{phase.duration}</p>
                        </div>
                        <Badge 
                          variant={
                            phase.status === 'completed' ? 'secondary' :
                            phase.status === 'in-progress' ? 'default' :
                            'outline'
                          }
                          className={
                            phase.status === 'completed' ? 'bg-success/10 text-success-700' :
                            phase.status === 'in-progress' ? 'bg-purple-600' :
                            ''
                          }
                        >
                          {phase.status === 'completed' ? 'Completed' :
                           phase.status === 'in-progress' ? 'In Progress' :
                           'Pending'}
                        </Badge>
                      </div>
                      <ul className="space-y-1">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center space-x-2">
                            <span className="text-primary">•</span>
                            <span className="text-sm text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Discovery Tools */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Discovery Tools & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {discoveryTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card key={tool.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <CardTitle className="mt-4">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      {Object.entries(tool.metrics).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-gray-600 capitalize">{key}</p>
                          <p className="font-medium text-gray-900">{value}</p>
                        </div>
                      ))}
                    </div>
                    <Link to={tool.path}>
                      <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                        Explore Tool
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Best Practices */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="h-5 w-5 mr-2 text-primary" />
              Discovery Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Do's</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Start with business objectives, not technical requirements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Involve stakeholders from multiple departments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Document everything, including informal conversations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Validate findings with multiple sources</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Don'ts</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Don't skip the business context for technical deep dives</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Don't make assumptions without validation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Don't overlook organizational readiness</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Don't present solutions before understanding problems</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}