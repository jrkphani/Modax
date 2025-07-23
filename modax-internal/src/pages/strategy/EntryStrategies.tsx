import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { H1, H2, H3, P, Lead } from '@/components/ui/typography';
import { ArrowRight } from 'lucide-react';

const EntryStrategies = () => {
  const stages = [
    {
      phase: 'Start Here',
      title: 'Initial Assessment',
      description: 'Evaluate your current system landscape and readiness',
      criteria: [
        'Technical debt level',
        'Business criticality',
        'Resource availability',
        'Risk tolerance',
      ],
      approaches: [
        {
          name: 'Quick Win',
          when: 'Low risk, high impact opportunities exist',
          duration: '4-8 weeks',
        },
        {
          name: 'Pilot Program',
          when: 'Need to prove value before full commitment',
          duration: '3-6 months',
        },
      ],
    },
    {
      phase: 'Assess',
      title: 'Detailed Analysis',
      description: 'Deep dive into technical and business requirements',
      criteria: [
        'System complexity',
        'Integration points',
        'Data dependencies',
        'User impact',
      ],
      approaches: [
        {
          name: 'Component-First',
          when: 'Clear boundaries between system modules',
          duration: '2-4 weeks per component',
        },
        {
          name: 'Process-First',
          when: 'Business processes drive system design',
          duration: '4-6 weeks per process',
        },
      ],
    },
    {
      phase: 'Execute',
      title: 'Implementation Strategy',
      description: 'Choose the right approach for your transformation',
      criteria: [
        'Team capabilities',
        'Timeline constraints',
        'Budget parameters',
        'Business continuity',
      ],
      approaches: [
        {
          name: 'Parallel Run',
          when: 'Zero downtime is critical',
          duration: '6-12 months',
        },
        {
          name: 'Phased Migration',
          when: 'Can modernize incrementally',
          duration: '3-6 months per phase',
        },
      ],
    },
    {
      phase: 'Scale',
      title: 'Enterprise Rollout',
      description: 'Expand successful patterns across the organization',
      criteria: [
        'Success metrics',
        'Adoption rates',
        'Performance gains',
        'Cost optimization',
      ],
      approaches: [
        {
          name: 'Template Replication',
          when: 'Similar systems across divisions',
          duration: '2-3 months per instance',
        },
        {
          name: 'Center of Excellence',
          when: 'Building internal capabilities',
          duration: '6-12 months setup',
        },
      ],
    },
  ];

  return (
    <div className="container py-8 max-w-6xl">
      <div className="mb-12">
        <H1>Entry Strategies</H1>
        <Lead className="mt-4">
          Choose the right modernization approach based on your unique context
        </Lead>
      </div>

      <div className="mb-12">
        <H2>Decision Framework</H2>
        <P>
          Every modernization journey is unique. Our entry strategy framework helps you
          identify the optimal starting point and progression path based on your
          technical landscape, business constraints, and strategic goals.
        </P>
      </div>

      <div className="grid gap-8">
        {stages.map((stage, index) => (
          <div key={stage.phase} className="relative">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {stage.phase}
                  </span>
                  {index < stages.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <CardTitle>{stage.title}</CardTitle>
                <CardDescription>{stage.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <H3 className="text-lg mb-3">Key Criteria</H3>
                    <ul className="space-y-2">
                      {stage.criteria.map((criterion) => (
                        <li key={criterion} className="flex items-start gap-2">
                          <span className="text-muted-foreground mt-1">•</span>
                          <P className="text-sm !mt-0">{criterion}</P>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <H3 className="text-lg mb-3">Recommended Approaches</H3>
                    <div className="space-y-4">
                      {stage.approaches.map((approach) => (
                        <div key={approach.name} className="space-y-1">
                          <div className="font-medium">{approach.name}</div>
                          <P className="text-sm text-muted-foreground !mt-0">
                            {approach.when}
                          </P>
                          <P className="text-sm !mt-0">
                            Duration: {approach.duration}
                          </P>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-8">
        <div>
          <H2>Common Entry Patterns</H2>
          <P>
            Based on hundreds of successful modernizations, we've identified three
            primary entry patterns that deliver consistent results.
          </P>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Proof of Concept</CardTitle>
              <CardDescription>
                Start with a low-risk, high-visibility component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <P className="text-sm !mt-0">
                Ideal for organizations that need to demonstrate value quickly.
                Focus on a single workflow or module that can showcase AI
                capabilities without disrupting core operations.
              </P>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Strategic Initiative</CardTitle>
              <CardDescription>
                Align with major business transformation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <P className="text-sm !mt-0">
                Perfect when modernization is part of a larger digital
                transformation. Leverage existing momentum and resources to
                accelerate adoption.
              </P>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Response</CardTitle>
              <CardDescription>
                Address critical system failures or risks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <P className="text-sm !mt-0">
                When legacy systems pose immediate business risks. Fast-track
                modernization of critical components while maintaining system
                stability.
              </P>
            </CardContent>
          </Card>
        </div>

        <div>
          <H2>Success Factors</H2>
          <P>
            Regardless of your chosen entry strategy, these factors consistently
            predict successful outcomes:
          </P>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <P className="!mt-0">
                <strong>Executive sponsorship</strong> - Active support from
                leadership ensures resources and removes obstacles
              </P>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <P className="!mt-0">
                <strong>Clear success metrics</strong> - Define measurable
                outcomes before starting the journey
              </P>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <P className="!mt-0">
                <strong>Dedicated team</strong> - Allocate resources specifically
                for modernization efforts
              </P>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <P className="!mt-0">
                <strong>Iterative approach</strong> - Build momentum through
                incremental wins rather than big-bang transformations
              </P>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EntryStrategies;