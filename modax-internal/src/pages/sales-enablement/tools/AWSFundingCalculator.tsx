import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from 'react'
import { 
  PageLayout, 
  PageContainer, 
  PageHeader, 
  PageContent 
} from '@/components/layout/PageLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Cloud,
  DollarSign,
  TrendingUp,
  Info,
  Calculator,
  Download,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

interface FundingData {
  workloadType: string
  currentSpend: number
  migrationSize: number
  timelineMonths: number
  currentAWSSpend: number
  partnerLevel: string
}

export default function AWSFundingCalculator() {
  const [formData, setFormData] = useState<FundingData>({
    workloadType: '',
    currentSpend: 0,
    migrationSize: 0,
    timelineMonths: 6,
    currentAWSSpend: 0,
    partnerLevel: 'advanced'
  })

  const [calculatedFunding, setCalculatedFunding] = useState<{
    mapFunding: number
    migrationIncentive: number
    partnerIncentive: number
    totalFunding: number
    effectiveCost: number
    percentCovered: number
  } | null>(null)

  const workloadTypes = [
    { value: 'windows', label: 'Windows Workloads', multiplier: 1.5 },
    { value: 'sap', label: 'SAP', multiplier: 2.0 },
    { value: 'vmware', label: 'VMware', multiplier: 1.8 },
    { value: 'databases', label: 'Databases', multiplier: 1.6 },
    { value: 'general', label: 'General Compute', multiplier: 1.0 }
  ]

  const partnerLevels = [
    { value: 'select', label: 'Select Tier', rate: 0.10 },
    { value: 'advanced', label: 'Advanced Tier', rate: 0.15 },
    { value: 'premier', label: 'Premier Tier', rate: 0.20 }
  ]

  const handleInputChange = (field: keyof FundingData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: typeof value === 'string' && field !== 'workloadType' && field !== 'partnerLevel' 
        ? parseFloat(value) || 0 
        : value
    }))
  }

  const calculateFunding = () => {
    const workload = workloadTypes.find(w => w.value === formData.workloadType)
    const partner = partnerLevels.find(p => p.value === formData.partnerLevel)
    
    if (!workload || !partner) return

    // MAP 2.0 Funding Calculation
    const baseMapRate = 0.25 // 25% base rate
    const workloadMultiplier = workload.multiplier
    const mapFunding = formData.migrationSize * baseMapRate * workloadMultiplier

    // Migration Incentive (based on speed)
    const speedBonus = formData.timelineMonths <= 6 ? 0.10 : 
                      formData.timelineMonths <= 12 ? 0.05 : 0
    const migrationIncentive = formData.migrationSize * speedBonus

    // Partner Incentive
    const partnerIncentive = formData.migrationSize * partner.rate

    // Total Funding
    const totalFunding = mapFunding + migrationIncentive + partnerIncentive

    // Effective cost after funding
    const totalProjectCost = formData.migrationSize
    const effectiveCost = Math.max(0, totalProjectCost - totalFunding)
    const percentCovered = (totalFunding / totalProjectCost) * 100

    setCalculatedFunding({
      mapFunding,
      migrationIncentive,
      partnerIncentive,
      totalFunding,
      effectiveCost,
      percentCovered
    })
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <PageLayout>
      <PageContainer>
        <PageHeader
          title="AWS Funding Calculator"
          description="Calculate available MAP 2.0 funding and migration incentives"
        />

        <PageContent className="space-y-8 max-w-6xl">
          <Alert className="border-blue-200 bg-blue-50">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              AWS Migration Acceleration Program (MAP) 2.0 provides funding to offset migration costs. 
              This calculator estimates available funding based on workload type, migration timeline, and partner tier.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Enter migration project information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="workloadType">Workload Type</Label>
                  <Select
                    value={formData.workloadType}
                    onValueChange={(value) => { handleInputChange('workloadType', value); }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select workload type" />
                    </SelectTrigger>
                    <SelectContent>
                      {workloadTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                          <span className="text-xs text-gray-500 ml-2">
                            ({type.multiplier}x multiplier)
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500">
                    Different workloads qualify for different funding levels
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="migrationSize">Total Migration Cost ($)</Label>
                  <Input
                    id="migrationSize"
                    type="number"
                    placeholder="e.g., 500000"
                    value={formData.migrationSize || ''}
                    onChange={(e) => { handleInputChange('migrationSize', e.target.value); }}
                  />
                  <p className="text-xs text-gray-500">
                    Total cost of the migration project
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timelineMonths">Migration Timeline (months)</Label>
                  <Input
                    id="timelineMonths"
                    type="number"
                    placeholder="e.g., 6"
                    value={formData.timelineMonths || ''}
                    onChange={(e) => { handleInputChange('timelineMonths', e.target.value); }}
                  />
                  <p className="text-xs text-gray-500">
                    Faster migrations qualify for speed bonuses
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentSpend">Current Infrastructure Spend ($/month)</Label>
                  <Input
                    id="currentSpend"
                    type="number"
                    placeholder="e.g., 50000"
                    value={formData.currentSpend || ''}
                    onChange={(e) => { handleInputChange('currentSpend', e.target.value); }}
                  />
                  <p className="text-xs text-gray-500">
                    Monthly spend on current infrastructure
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentAWSSpend">Current AWS Spend ($/month)</Label>
                  <Input
                    id="currentAWSSpend"
                    type="number"
                    placeholder="e.g., 10000"
                    value={formData.currentAWSSpend || ''}
                    onChange={(e) => { handleInputChange('currentAWSSpend', e.target.value); }}
                  />
                  <p className="text-xs text-gray-500">
                    Existing AWS spend (if any)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="partnerLevel">ModAx Partner Tier</Label>
                  <Select
                    value={formData.partnerLevel}
                    onValueChange={(value) => { handleInputChange('partnerLevel', value); }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {partnerLevels.map(level => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                          <span className="text-xs text-gray-500 ml-2">
                            ({(level.rate * 100).toFixed(0)}% incentive)
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calculateFunding} 
                  className="w-full"
                  disabled={!formData.workloadType || !formData.migrationSize}
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Funding
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle>Funding Breakdown</CardTitle>
                <CardDescription>
                  Estimated AWS funding for your migration
                </CardDescription>
              </CardHeader>
              <CardContent>
                {calculatedFunding ? (
                  <div className="space-y-6">
                    {/* Total Funding */}
                    <div className="text-center p-6 bg-success/5 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Total Available Funding</p>
                      <p className="text-4xl font-bold text-success">
                        {formatCurrency(calculatedFunding.totalFunding)}
                      </p>
                      <Badge className="mt-2" variant="default">
                        {calculatedFunding.percentCovered.toFixed(0)}% of project covered
                      </Badge>
                    </div>

                    {/* Funding Sources */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b">
                        <div className="flex items-center gap-2">
                          <Cloud className="h-4 w-4 text-blue-600" />
                          <span className="font-medium">MAP 2.0 Base Funding</span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(calculatedFunding.mapFunding)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="font-medium">Speed Bonus</span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(calculatedFunding.migrationIncentive)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-success" />
                          <span className="font-medium">Partner Incentive</span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(calculatedFunding.partnerIncentive)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-3 bg-gray-50 px-3 rounded">
                        <span className="font-medium text-gray-700">Your Effective Cost</span>
                        <span className="font-bold text-xl text-gray-900">
                          {formatCurrency(calculatedFunding.effectiveCost)}
                        </span>
                      </div>
                    </div>

                    {/* Savings Summary */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Migration Economics</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-blue-700">Monthly savings post-migration:</span>
                          <span className="font-medium text-blue-900">
                            {formatCurrency((formData.currentSpend - formData.currentAWSSpend) * 0.3)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-700">Payback period:</span>
                          <span className="font-medium text-blue-900">
                            {((calculatedFunding.effectiveCost / ((formData.currentSpend - formData.currentAWSSpend) * 0.3)) || 0).toFixed(1)} months
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-700">3-year TCO reduction:</span>
                          <span className="font-medium text-blue-900">
                            {formatCurrency(((formData.currentSpend - formData.currentAWSSpend) * 0.3 * 36) - calculatedFunding.effectiveCost)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Export Funding Report
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Cloud className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Enter project details to calculate available funding</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Funding Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Minimum $300K annual AWS commitment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Net-new workloads to AWS</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Completed Migration Readiness Assessment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Approved migration plan and timeline</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How ModAx Maximizes Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Advanced AWS Partner status = higher incentives</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>90-day delivery qualifies for speed bonuses</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Workload optimization increases funding eligibility</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>End-to-end migration reduces approval friction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Note:</strong> This calculator provides estimates based on current AWS MAP 2.0 guidelines. 
              Actual funding requires AWS approval and may vary based on specific project details. 
              ModAx will work with you to maximize available funding and navigate the approval process.
            </AlertDescription>
          </Alert>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}