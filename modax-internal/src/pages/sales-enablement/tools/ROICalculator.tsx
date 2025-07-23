import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from 'react'
import { H1, H3, P, Lead, Muted } from '@/components/ui/typography'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { PageContainer } from '@/components/layout/PageLayout'

interface ROIFormData {
  currentCost: number
  currentTime: number
  employeeCount: number
  averageHourlyRate: number
  expectedEfficiencyGain: number
  implementationCost: number
  timeToImplement: number
}

export default function ROICalculators() {
  const [calculatedROI, setCalculatedROI] = useState<{
    annualSavings: number
    paybackPeriod: number
    threeYearROI: number
    costReduction: number
  } | null>(null)

  const [formData, setFormData] = useState<ROIFormData>({
    currentCost: 0,
    currentTime: 0,
    employeeCount: 0,
    averageHourlyRate: 0,
    expectedEfficiencyGain: 25,
    implementationCost: 0,
    timeToImplement: 6,
  })

  const handleInputChange = (field: keyof ROIFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    calculateROI(formData)
  }

  const calculateROI = (data: ROIFormData) => {
    // Current annual cost
    const currentAnnualCost = data.currentCost * 12
    
    // Current time cost (hours per year * employee count * hourly rate)
    const currentTimeCost = data.currentTime * 52 * data.employeeCount * data.averageHourlyRate
    
    // Total current cost
    const totalCurrentCost = currentAnnualCost + currentTimeCost
    
    // Expected savings from efficiency gain
    const efficiencySavings = totalCurrentCost * (data.expectedEfficiencyGain / 100)
    
    // Annual savings after implementation
    const annualSavings = efficiencySavings
    
    // Payback period in months
    const paybackPeriod = data.implementationCost / (annualSavings / 12)
    
    // Three year ROI
    const totalSavings = annualSavings * 3
    const netBenefit = totalSavings - data.implementationCost
    const threeYearROI = (netBenefit / data.implementationCost) * 100
    
    // Cost reduction percentage
    const costReduction = (efficiencySavings / totalCurrentCost) * 100

    setCalculatedROI({
      annualSavings,
      paybackPeriod,
      threeYearROI,
      costReduction,
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
    <PageContainer className="py-6">
      <div className="max-w-6xl mx-auto">
        <H1>ROI Calculators</H1>
        <Lead className="mb-8">
          Demonstrate the value of modernization with clear financial projections
        </Lead>

        <form onSubmit={(e) => { handleSubmit(e) }}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Input Parameters */}
            <Card>
              <CardHeader>
                <CardTitle>Input Parameters</CardTitle>
                <CardDescription>
                  Enter your current state and expected improvements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <H3>Current State</H3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currentCost">Monthly Legacy System Cost ($)</Label>
                    <Input
                      id="currentCost"
                      type="number"
                      placeholder="e.g., 50000"
                      value={formData.currentCost || ''}
                      onChange={(e) => { handleInputChange('currentCost', e.target.value); }}
                    />
                    <Muted>Include licensing, maintenance, and infrastructure</Muted>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentTime">Weekly Manual Task Hours</Label>
                    <Input
                      id="currentTime"
                      type="number"
                      placeholder="e.g., 120"
                      value={formData.currentTime || ''}
                      onChange={(e) => { handleInputChange('currentTime', e.target.value); }}
                    />
                    <Muted>Total hours spent on repetitive manual tasks</Muted>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employeeCount">Number of Employees Affected</Label>
                    <Input
                      id="employeeCount"
                      type="number"
                      placeholder="e.g., 25"
                      value={formData.employeeCount || ''}
                      onChange={(e) => { handleInputChange('employeeCount', e.target.value); }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="averageHourlyRate">Average Hourly Rate ($)</Label>
                    <Input
                      id="averageHourlyRate"
                      type="number"
                      placeholder="e.g., 75"
                      value={formData.averageHourlyRate || ''}
                      onChange={(e) => { handleInputChange('averageHourlyRate', e.target.value); }}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <H3>Expected Improvements</H3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="expectedEfficiencyGain">Efficiency Gain (%)</Label>
                    <Input
                      id="expectedEfficiencyGain"
                      type="number"
                      placeholder="e.g., 25"
                      value={formData.expectedEfficiencyGain || ''}
                      onChange={(e) => { handleInputChange('expectedEfficiencyGain', e.target.value); }}
                    />
                    <Muted>Typical range: 20-40% for AI modernization</Muted>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="implementationCost">Implementation Cost ($)</Label>
                    <Input
                      id="implementationCost"
                      type="number"
                      placeholder="e.g., 250000"
                      value={formData.implementationCost || ''}
                      onChange={(e) => { handleInputChange('implementationCost', e.target.value); }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeToImplement">Time to Implement (months)</Label>
                    <Input
                      id="timeToImplement"
                      type="number"
                      placeholder="e.g., 6"
                      value={formData.timeToImplement || ''}
                      onChange={(e) => { handleInputChange('timeToImplement', e.target.value); }}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Calculate ROI
                </Button>
              </CardContent>
            </Card>

            {/* ROI Results */}
            <Card>
              <CardHeader>
                <CardTitle>ROI Results</CardTitle>
                <CardDescription>
                  Projected financial impact over 3 years
                </CardDescription>
              </CardHeader>
              <CardContent>
                {calculatedROI ? (
                  <div className="space-y-6">
                    <div>
                      <P className="text-sm text-muted-foreground mb-1">Annual Savings</P>
                      <P className="text-3xl font-semibold text-success">
                        {formatCurrency(calculatedROI.annualSavings)}
                      </P>
                    </div>

                    <div>
                      <P className="text-sm text-muted-foreground mb-1">Payback Period</P>
                      <P className="text-2xl font-semibold">
                        {calculatedROI.paybackPeriod.toFixed(1)} months
                      </P>
                    </div>

                    <div>
                      <P className="text-sm text-muted-foreground mb-1">3-Year ROI</P>
                      <P className="text-2xl font-semibold">
                        {calculatedROI.threeYearROI.toFixed(0)}%
                      </P>
                    </div>

                    <div>
                      <P className="text-sm text-muted-foreground mb-1">Cost Reduction</P>
                      <P className="text-2xl font-semibold">
                        {calculatedROI.costReduction.toFixed(0)}%
                      </P>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <P>Enter your parameters and click Calculate to see ROI projections</P>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </form>

        {/* Methodology */}
        <Card>
          <CardHeader>
            <CardTitle>ROI Calculation Methodology</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <H3>Annual Savings Calculation</H3>
                <P className="text-sm text-muted-foreground">
                  Total Current Cost × Efficiency Gain % = Annual Savings
                </P>
                <P className="text-sm text-muted-foreground mt-2">
                  Includes both direct cost reduction and time savings converted to monetary value.
                </P>
              </div>
              <div>
                <H3>ROI Formula</H3>
                <P className="text-sm text-muted-foreground">
                  ((Total Savings - Implementation Cost) / Implementation Cost) × 100
                </P>
                <P className="text-sm text-muted-foreground mt-2">
                  Calculated over a 3-year period to show long-term value.
                </P>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}