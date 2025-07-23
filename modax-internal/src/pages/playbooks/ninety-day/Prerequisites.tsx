import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress-enhanced';
import { Checkbox } from '@/components/ui/checkbox';
import PageLayout from '@/components/layout/PageLayout';
import { 
  ArrowLeft,
  CheckCircle, 
  XCircle,
  AlertCircle,
  Users, 
  Database, 
  Shield, 
  Server,
  FileText,
  Clock,
  Download,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';

const prerequisiteCategories = [
  {
    category: 'Stakeholder Commitment',
    icon: Users,
    progress: 75,
    status: 'in-progress',
    items: [
      {
        requirement: 'Executive sponsor identified',
        description: 'C-level or VP-level sponsor with budget authority',
        timeCommitment: '4-6 hours/week',
        status: 'completed',
        critical: true
      },
      {
        requirement: 'Technical lead assigned',
        description: 'Senior architect or engineering manager',
        timeCommitment: '20+ hours/week',
        status: 'completed',
        critical: true
      },
      {
        requirement: 'Business owner engaged',
        description: 'Product owner or business unit leader',
        timeCommitment: '8-10 hours/week',
        status: 'in-progress',
        critical: true
      },
      {
        requirement: 'Security team representative',
        description: 'Security architect or compliance officer',
        timeCommitment: '5-8 hours/week',
        status: 'pending',
        critical: false
      }
    ]
  },
  {
    category: 'Technical Requirements',
    icon: Server,
    progress: 60,
    status: 'in-progress',
    items: [
      {
        requirement: 'Development environment access',
        description: 'Dedicated dev/test environment with appropriate permissions',
        details: 'Kubernetes cluster or cloud environment',
        status: 'completed',
        critical: true
      },
      {
        requirement: 'Source code repository access',
        description: 'Git repositories for relevant applications',
        details: 'Read/write access to create branches',
        status: 'completed',
        critical: true
      },
      {
        requirement: 'CI/CD pipeline access',
        description: 'Ability to create and modify deployment pipelines',
        details: 'Jenkins, GitLab CI, or equivalent',
        status: 'in-progress',
        critical: false
      },
      {
        requirement: 'Production-like test environment',
        description: 'Environment matching production specifications',
        details: 'Data, integrations, and security controls',
        status: 'pending',
        critical: false
      }
    ]
  },
  {
    category: 'Data & Integration',
    icon: Database,
    progress: 50,
    status: 'pending',
    items: [
      {
        requirement: 'Sample data access',
        description: 'Representative data sets for testing',
        details: 'Anonymized production data preferred',
        status: 'completed',
        critical: true
      },
      {
        requirement: 'API documentation',
        description: 'Complete API specs for all integrations',
        details: 'OpenAPI/Swagger specifications',
        status: 'in-progress',
        critical: true
      },
      {
        requirement: 'Integration credentials',
        description: 'Test credentials for third-party services',
        details: 'Non-production environments only',
        status: 'pending',
        critical: false
      },
      {
        requirement: 'Data governance approval',
        description: 'Approval for data usage and storage',
        details: 'Privacy and compliance clearance',
        status: 'pending',
        critical: true
      }
    ]
  },
  {
    category: 'Security & Compliance',
    icon: Shield,
    progress: 40,
    status: 'pending',
    items: [
      {
        requirement: 'Security assessment completed',
        description: 'Initial security review and risk assessment',
        deliverable: 'Risk assessment document',
        status: 'in-progress',
        critical: true
      },
      {
        requirement: 'Compliance requirements documented',
        description: 'Regulatory and internal compliance needs',
        deliverable: 'Compliance matrix',
        status: 'pending',
        critical: true
      },
      {
        requirement: 'Access control matrix',
        description: 'Defined roles and permissions',
        deliverable: 'RBAC specification',
        status: 'pending',
        critical: false
      },
      {
        requirement: 'Incident response plan',
        description: 'Procedures for security incidents',
        deliverable: 'Response playbook',
        status: 'pending',
        critical: false
      }
    ]
  },
  {
    category: 'Documentation & Knowledge',
    icon: FileText,
    progress: 85,
    status: 'near-complete',
    items: [
      {
        requirement: 'Existing system documentation',
        description: 'Architecture diagrams and technical specs',
        status: 'completed',
        critical: true
      },
      {
        requirement: 'Business process documentation',
        description: 'Current workflows and procedures',
        status: 'completed',
        critical: true
      },
      {
        requirement: 'Previous POC/experiment results',
        description: 'Learnings from past GenAI attempts',
        status: 'completed',
        critical: false
      },
      {
        requirement: 'Success criteria defined',
        description: 'Clear metrics and KPIs for the engagement',
        status: 'in-progress',
        critical: true
      }
    ]
  }
];

export default function Prerequisites() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const totalItems = prerequisiteCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedItems = prerequisiteCategories.reduce((acc, cat) => 
    acc + cat.items.filter(item => item.status === 'completed').length, 0
  );
  const overallProgress = Math.round((completedItems / totalItems) * 100);

  const handleCheckItem = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(key)) {
      newCheckedItems.delete(key);
    } else {
      newCheckedItems.add(key);
    }
    setCheckedItems(newCheckedItems);
  };

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">90-Day Prerequisites</h1>
          <p className="text-gray-600">
            Essential requirements for a successful 90-day transformation engagement
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Overall Readiness</CardTitle>
              <Badge 
                variant={overallProgress >= 80 ? 'secondary' : 'default'}
                className={overallProgress >= 80 ? 'bg-success/10 text-success-700' : 'bg-amber-100 text-amber-700'}
              >
                {overallProgress >= 80 ? 'Ready to Start' : 'Preparation Needed'}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Prerequisites Complete</span>
                  <span className="font-medium">{completedItems} of {totalItems} items</span>
                </div>
                <Progress value={overallProgress} className="h-3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="text-center">
                  <p className="text-2xl font-bold text-success">{completedItems}</p>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-600">
                    {prerequisiteCategories.reduce((acc, cat) => 
                      acc + cat.items.filter(item => item.status === 'in-progress').length, 0
                    )}
                  </p>
                  <p className="text-sm text-gray-600">In Progress</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-600">
                    {prerequisiteCategories.reduce((acc, cat) => 
                      acc + cat.items.filter(item => item.status === 'pending').length, 0
                    )}
                  </p>
                  <p className="text-sm text-gray-600">Pending</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Critical Items Alert */}
        {prerequisiteCategories.some(cat => 
          cat.items.some(item => item.critical && item.status !== 'completed')
        ) && (
          <Alert className="border-amber-200 bg-amber-50">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              <strong>Critical items pending:</strong> Some critical prerequisites are not yet complete. 
              These must be addressed before starting the 90-day engagement.
            </AlertDescription>
          </Alert>
        )}

        {/* Category Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {prerequisiteCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Button
                key={index}
                variant={selectedCategory === index ? 'default' : 'outline'}
                className={selectedCategory === index ? 'bg-purple-600 hover:bg-purple-700' : ''}
                onClick={() => setSelectedCategory(index)}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.category}
                <Badge 
                  variant="secondary" 
                  className={`ml-2 ${
                    category.status === 'near-complete' ? 'bg-success/10 text-success-700' :
                    category.status === 'in-progress' ? 'bg-amber-100 text-amber-700' :
                    'bg-gray-100 text-gray-700'
                  }`}
                >
                  {category.progress}%
                </Badge>
              </Button>
            );
          })}
        </div>

        {/* Category Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Requirements List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{prerequisiteCategories[selectedCategory].category}</CardTitle>
                <CardDescription>
                  Track and verify all requirements in this category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prerequisiteCategories[selectedCategory].items.map((item, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border ${
                        item.status === 'completed' ? 'bg-success/5 border-success/20' :
                        item.status === 'in-progress' ? 'bg-amber-50 border-amber-200' :
                        'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          checked={item.status === 'completed' || checkedItems.has(`${selectedCategory}-${index}`)}
                          onCheckedChange={() => handleCheckItem(selectedCategory, index)}
                          disabled={item.status === 'completed'}
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900 flex items-center">
                                {item.requirement}
                                {item.critical && (
                                  <Badge variant="destructive" className="ml-2 text-xs">
                                    Critical
                                  </Badge>
                                )}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                              {(item.timeCommitment || item.details || item.deliverable) && (
                                <div className="mt-2 space-y-1">
                                  {item.timeCommitment && (
                                    <p className="text-xs text-gray-500 flex items-center">
                                      <Clock className="h-3 w-3 mr-1" />
                                      Time commitment: {item.timeCommitment}
                                    </p>
                                  )}
                                  {item.details && (
                                    <p className="text-xs text-gray-500 flex items-center">
                                      <Info className="h-3 w-3 mr-1" />
                                      {item.details}
                                    </p>
                                  )}
                                  {item.deliverable && (
                                    <p className="text-xs text-gray-500 flex items-center">
                                      <FileText className="h-3 w-3 mr-1" />
                                      Deliverable: {item.deliverable}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                            <div className="flex items-center ml-4">
                              {item.status === 'completed' && (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              )}
                              {item.status === 'in-progress' && (
                                <Clock className="h-5 w-5 text-amber-500" />
                              )}
                              {item.status === 'pending' && (
                                <XCircle className="h-5 w-5 text-gray-400" />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Category Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Category Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prerequisiteCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Icon className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">{category.category}</span>
                          </div>
                          <span className="text-sm text-gray-600">{category.progress}%</span>
                        </div>
                        <Progress value={category.progress} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Critical Items</span>
                    <span className="text-sm font-medium">
                      {prerequisiteCategories.reduce((acc, cat) => 
                        acc + cat.items.filter(item => item.critical && item.status === 'completed').length, 0
                      )} / {prerequisiteCategories.reduce((acc, cat) => 
                        acc + cat.items.filter(item => item.critical).length, 0
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Time to Ready</span>
                    <span className="text-sm font-medium">~2 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Risk Level</span>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                      Medium
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download Checklist
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Schedule Review Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}