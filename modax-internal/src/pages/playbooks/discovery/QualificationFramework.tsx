import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress-enhanced';
import PageLayout from '@/components/layout/PageLayout';
import { 
  ArrowLeft,
  Target,
  CheckCircle,
  XCircle,
  AlertCircle,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';

const qualificationCriteria = [
  {
    category: 'Business Fit',
    weight: 30,
    icon: Target,
    criteria: [
      {
        question: 'Annual revenue range',
        options: [
          { label: '$1B+', score: 10 },
          { label: '$500M-$1B', score: 8 },
          { label: '$100M-$500M', score: 6 },
          { label: '<$100M', score: 3 }
        ]
      },
      {
        question: 'Industry vertical',
        options: [
          { label: 'Financial Services', score: 10 },
          { label: 'Healthcare', score: 9 },
          { label: 'Manufacturing', score: 8 },
          { label: 'Retail', score: 7 },
          { label: 'Other', score: 5 }
        ]
      },
      {
        question: 'Digital maturity',
        options: [
          { label: 'Legacy-heavy, seeking transformation', score: 10 },
          { label: 'Mixed legacy and modern', score: 8 },
          { label: 'Mostly modern, some legacy', score: 6 },
          { label: 'Greenfield/startup', score: 3 }
        ]
      }
    ]
  },
  {
    category: 'Technical Readiness',
    weight: 25,
    icon: Zap,
    criteria: [
      {
        question: 'Current tech stack complexity',
        options: [
          { label: 'Highly complex, multiple legacy systems', score: 10 },
          { label: 'Moderate complexity, some integration', score: 8 },
          { label: 'Simple architecture, few systems', score: 5 },
          { label: 'Single monolithic application', score: 7 }
        ]
      },
      {
        question: 'Previous modernization attempts',
        options: [
          { label: 'Multiple failed attempts', score: 10 },
          { label: 'Some partial successes', score: 8 },
          { label: 'First modernization effort', score: 7 },
          { label: 'No previous attempts', score: 5 }
        ]
      },
      {
        question: 'Technical team capability',
        options: [
          { label: 'Strong team, needs strategic direction', score: 9 },
          { label: 'Moderate skills, needs upskilling', score: 8 },
          { label: 'Limited skills, needs augmentation', score: 10 },
          { label: 'No internal technical team', score: 6 }
        ]
      }
    ]
  },
  {
    category: 'Business Impact',
    weight: 25,
    icon: TrendingUp,
    criteria: [
      {
        question: 'Urgency of transformation',
        options: [
          { label: 'Critical - business at risk', score: 10 },
          { label: 'High - competitive pressure', score: 9 },
          { label: 'Moderate - strategic initiative', score: 7 },
          { label: 'Low - exploratory', score: 4 }
        ]
      },
      {
        question: 'Expected ROI timeline',
        options: [
          { label: '6-12 months', score: 10 },
          { label: '12-18 months', score: 8 },
          { label: '18-24 months', score: 6 },
          { label: '24+ months', score: 4 }
        ]
      },
      {
        question: 'Budget allocation',
        options: [
          { label: '$5M+', score: 10 },
          { label: '$2M-$5M', score: 9 },
          { label: '$1M-$2M', score: 7 },
          { label: '<$1M', score: 5 }
        ]
      }
    ]
  },
  {
    category: 'Organizational Readiness',
    weight: 20,
    icon: Users,
    criteria: [
      {
        question: 'Executive sponsorship',
        options: [
          { label: 'CEO/CTO actively involved', score: 10 },
          { label: 'VP-level champion', score: 8 },
          { label: 'Director-level support', score: 6 },
          { label: 'No clear sponsor', score: 2 }
        ]
      },
      {
        question: 'Change management culture',
        options: [
          { label: 'Embraces change, agile culture', score: 10 },
          { label: 'Open to change with support', score: 8 },
          { label: 'Resistant but recognizes need', score: 6 },
          { label: 'Highly resistant to change', score: 3 }
        ]
      },
      {
        question: 'Decision-making speed',
        options: [
          { label: 'Fast - days', score: 10 },
          { label: 'Moderate - weeks', score: 8 },
          { label: 'Slow - months', score: 5 },
          { label: 'Very slow - quarters', score: 3 }
        ]
      }
    ]
  }
];

export default function QualificationFramework() {
  const [scores, setScores] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleScoreChange = (category, criteriaIndex, score) => {
    setScores(prev => ({
      ...prev,
      [`${String(category)}-${String(criteriaIndex)}`]: score
    }));
  };

  const calculateCategoryScore = (category) => {
    let totalScore = 0;
    let answeredQuestions = 0;
    
    category.criteria.forEach((_, index) => {
      const score = scores[`${String(category.category)}-${String(index)}`];
      if (score) {
        totalScore += parseInt(score);
        answeredQuestions++;
      }
    });
    
    if (answeredQuestions === 0) return 0;
    return (totalScore / (answeredQuestions * 10)) * 100;
  };

  const calculateTotalScore = () => {
    let weightedScore = 0;
    let totalWeight = 0;
    
    qualificationCriteria.forEach(category => {
      const categoryScore = calculateCategoryScore(category);
      weightedScore += (categoryScore * category.weight) / 100;
      totalWeight += category.weight;
    });
    
    return Math.round(weightedScore);
  };

  const getQualificationStatus = (score) => {
    if (score >= 80) return { status: 'Highly Qualified', color: 'bg-success/10 text-success-700' };
    if (score >= 60) return { status: 'Qualified', color: 'bg-primary/10 text-primary' };
    if (score >= 40) return { status: 'Potentially Qualified', color: 'bg-amber-100 text-amber-700' };
    return { status: 'Not Qualified', color: 'bg-red-100 text-red-700' };
  };

  const totalScore = calculateTotalScore();
  const qualificationStatus = getQualificationStatus(totalScore);

  return (
    <PageLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="border-b pb-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/playbooks/discovery">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Discovery
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Qualification Framework</h1>
          <p className="text-gray-600">
            Systematic scoring system to evaluate opportunity fit and client readiness
          </p>
        </div>

        {/* Instructions */}
        <Alert className="border-primary/20 bg-primary/5">
          <Target className="h-4 w-4 text-primary" />
          <AlertDescription>
            Complete all qualification criteria below to generate a comprehensive opportunity score. 
            Each category is weighted based on its importance to successful engagement outcomes.
          </AlertDescription>
        </Alert>

        {/* Score Summary (if showing results) */}
        {showResults && (
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle>Qualification Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-5xl font-bold text-gray-900">{totalScore}%</p>
                  <Badge className={`mt-2 ${qualificationStatus.color}`}>
                    {qualificationStatus.status}
                  </Badge>
                </div>
                <Progress value={totalScore} className="h-3" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {qualificationCriteria.map((category) => {
                    const Icon = category.icon;
                    const categoryScore = calculateCategoryScore(category);
                    return (
                      <div key={category.category} className="text-center">
                        <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm text-gray-600">{category.category}</p>
                        <p className="text-lg font-bold">{Math.round(categoryScore)}%</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Qualification Criteria */}
        <div className="space-y-6">
          {qualificationCriteria.map((category, categoryIndex) => {
            const Icon = category.icon;
            const categoryScore = calculateCategoryScore(category);
            
            return (
              <Card key={category.category}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{category.category}</CardTitle>
                        <CardDescription>Weight: {category.weight}%</CardDescription>
                      </div>
                    </div>
                    {categoryScore > 0 && (
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">{Math.round(categoryScore)}%</p>
                        <p className="text-sm text-gray-600">Category Score</p>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.criteria.map((criterion, criterionIndex) => (
                    <div key={criterionIndex} className="space-y-3">
                      <Label className="text-base font-medium">{criterion.question}</Label>
                      <RadioGroup
                        value={scores[`${String(category.category)}-${String(criterionIndex)}`] || ''}
                        onValueChange={(value) => { handleScoreChange(category.category, criterionIndex, value); }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {criterion.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center space-x-2">
                              <RadioGroupItem value={option.score.toString()} id={`${String(category.category)}-${String(criterionIndex)}-${String(optionIndex)}`} />
                              <Label 
                                htmlFor={`${String(category.category)}-${String(criterionIndex)}-${String(optionIndex)}`}
                                className="flex-1 cursor-pointer p-3 rounded-lg border hover:bg-gray-50"
                              >
                                <span className="flex items-center justify-between">
                                  <span>{option.label}</span>
                                  <Badge variant="outline" className="ml-2">
                                    {option.score}/10
                                  </Badge>
                                </span>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button 
            className="flex-1 bg-purple-600 hover:bg-purple-700"
            onClick={() => { setShowResults(true); }}
            disabled={Object.keys(scores).length === 0}
          >
            Calculate Qualification Score
          </Button>
          <Button variant="outline" className="flex-1">
            <Download className="h-4 w-4 mr-2" />
            Export Assessment
          </Button>
        </div>

        {/* Recommendations */}
        {showResults && (
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {totalScore >= 80 && (
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Proceed with Full Engagement</p>
                      <p className="text-sm text-gray-600">This opportunity shows strong alignment with our ideal client profile. Move forward with solution design.</p>
                    </div>
                  </div>
                )}
                {totalScore >= 60 && totalScore < 80 && (
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Proceed with Conditions</p>
                      <p className="text-sm text-gray-600">This opportunity is viable but requires addressing specific gaps before full commitment.</p>
                    </div>
                  </div>
                )}
                {totalScore >= 40 && totalScore < 60 && (
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Further Qualification Needed</p>
                      <p className="text-sm text-gray-600">Additional discovery required to determine if this opportunity can be developed.</p>
                    </div>
                  </div>
                )}
                {totalScore < 40 && (
                  <div className="flex items-start space-x-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Not Recommended</p>
                      <p className="text-sm text-gray-600">This opportunity does not align with our target profile. Consider alternative engagement models.</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </PageLayout>
  );
}