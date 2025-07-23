import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from '@/components/ui/progress'
import { ProgressEnhanced } from '@/components/ui/progress-enhanced'

export function ProgressExample() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Progress</CardTitle>
          <CardDescription>Using the standard shadcn Progress component</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={33} />
          <Progress value={66} />
          <Progress value={100} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Enhanced Progress</CardTitle>
          <CardDescription>Progress with labels, percentages, and variants</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ProgressEnhanced
            value={25}
            label="Project Setup"
            variant="default"
          />
          
          <ProgressEnhanced
            value={75}
            label="Development Phase"
            variant="success"
            size="lg"
          />
          
          <ProgressEnhanced
            value={50}
            label="Testing"
            variant="warning"
            showPercentage={true}
          />
          
          <ProgressEnhanced
            value={90}
            label="Critical Issues"
            variant="danger"
            size="sm"
          />

          <ProgressEnhanced
            value={40}
            max={200}
            label="Custom Max Value (40/200)"
            variant="default"
          />
        </CardContent>
      </Card>
    </div>
  )
}