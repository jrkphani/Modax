import { PageContainer, PageHeader, PageContent } from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Lightbulb, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StrategyOverview() {
  const navigate = useNavigate();

  const strategies = [
    {
      icon: Target,
      title: '90-Day Execution',
      description: 'Transform POCs into production systems with our proven 90-day methodology',
      path: '/playbooks/90-day-execution',
      color: 'text-primary'
    },
    {
      icon: Lightbulb,
      title: 'Intelligence Fabric',
      description: 'Build an autonomous intelligence layer that captures institutional knowledge',
      path: '/knowledge-base/technical-specifications',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Market Opportunities',
      description: 'Identify and capitalize on legacy modernization opportunities',
      path: '/resources/case-studies',
      color: 'text-success'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Learn from successful transformations across industries',
      path: '/resources/case-studies',
      color: 'text-orange-600'
    }
  ];

  return (
    <PageContainer>
      <PageHeader
        title="Strategy Overview"
        description="Transform legacy applications into AI-native systems while building an intelligence fabric that captures decades of operational knowledge"
      />
      
      <PageContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {strategies.map((strategy) => {
            const Icon = strategy.icon;
            return (
              <Card 
                key={strategy.title} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(strategy.path)}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gray-50 ${strategy.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{strategy.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {strategy.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">The ModAx Approach</CardTitle>
            <CardDescription className="text-base">
              Our three-pillar strategy for successful enterprise modernization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <h3 className="font-semibold mb-2">Rapid POC to Production</h3>
                <p className="text-sm text-gray-600">
                  90-day transformation from proof of concept to enterprise-ready system
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <h3 className="font-semibold mb-2">Intelligence Fabric</h3>
                <p className="text-sm text-gray-600">
                  Capture and preserve institutional knowledge in an AI-native layer
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <h3 className="font-semibold mb-2">Continuous Evolution</h3>
                <p className="text-sm text-gray-600">
                  Build systems that learn and adapt to changing business needs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </PageContent>
    </PageContainer>
  );
}