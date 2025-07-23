import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from 'react'
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
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  DollarSign,
  Settings,
  Users,
  Clock,
  AlertCircle,
  CheckCircle2,
  FileText,
  Zap,
  Shield
} from 'lucide-react'

interface PricingConfig {
  applicationName: string
  complexity: string
  linesOfCode: number
  integrations: number
  userCount: number
  dataVolume: string
  complianceReqs: string[]
  timeline: number
  teamSize: string
  includeSupport: boolean
  includeTraining: boolean
}

export default function PricingConfigurator() {
  const [config, setConfig] = useState<PricingConfig>({
    applicationName: '',
    complexity: 'medium',
    linesOfCode: 100000,
    integrations: 5,
    userCount: 100,
    dataVolume: 'medium',
    complianceReqs: [],
    timeline: 6,
    teamSize: 'standard',
    includeSupport: true,
    includeTraining: true
  })

  const [pricing, setPricing] = useState<{
    baseCost: number
    complexityMultiplier: number
    complianceAddOn: number
    supportCost: number
    trainingCost: number
    totalCost: number
    monthlyBurn: number
    teamComposition: any
    discountEligible: boolean
    discountAmount: number
  } | null>(null)

  const complexityLevels = [
    { value: 'simple', label: 'Simple', multiplier: 0.8, description: 'CRUD apps, minimal logic' },
    { value: 'medium', label: 'Medium', multiplier: 1.0, description: 'Business logic, workflows' },
    { value: 'complex', label: 'Complex', multiplier: 1.5, description: 'Advanced algorithms, real-time' },
    { value: 'critical', label: 'Mission Critical', multiplier: 2.0, description: 'Zero downtime, high stakes' }
  ]

  const dataVolumes = [
    { value: 'low', label: 'Low (<1TB)', multiplier: 1.0 },
    { value: 'medium', label: 'Medium (1-10TB)', multiplier: 1.2 },
    { value: 'high', label: 'High (10-100TB)', multiplier: 1.5 },
    { value: 'massive', label: 'Massive (100TB+)', multiplier: 2.0 }
  ]

  const complianceOptions = [
    { value: 'hipaa', label: 'HIPAA', cost: 50000 },
    { value: 'sox', label: 'SOX', cost: 40000 },
    { value: 'pci', label: 'PCI-DSS', cost: 45000 },
    { value: 'gdpr', label: 'GDPR', cost: 35000 },
    { value: 'fedramp', label: 'FedRAMP', cost: 75000 }
  ]

  const teamSizes = [
    { 
      value: 'small', 
      label: 'Small Team', 
      composition: { senior: 1, mid: 1, junior: 1 },
      rate: 850000 
    },
    { 
      value: 'standard', 
      label: 'Standard Team', 
      composition: { senior: 1, mid: 2, junior: 2 },
      rate: 1400000 
    },
    { 
      value: 'large', 
      label: 'Large Team', 
      composition: { senior: 2, mid: 3, junior: 3 },
      rate: 2200000 
    },
    { 
      value: 'enterprise', 
      label: 'Enterprise Team', 
      composition: { senior: 3, mid: 5, junior: 4 },
      rate: 3500000 
    }
  ]

  const calculatePricing = () => {
    // Base cost calculation
    const complexity = complexityLevels.find(c => c.value === config.complexity)!
    const dataVolume = dataVolumes.find(d => d.value === config.dataVolume)!
    const team = teamSizes.find(t => t.value === config.teamSize)!
    
    // Base cost = team rate * (timeline / 12)
    const baseCost = team.rate * (config.timeline / 12)
    
    // Complexity multiplier
    const complexityMultiplier = complexity.multiplier * dataVolume.multiplier
    
    // Compliance add-ons
    const complianceAddOn = config.complianceReqs.reduce((sum, req) => {
      const compliance = complianceOptions.find(c => c.value === req)
      return sum + (compliance?.cost || 0)
    }, 0)
    
    // Additional services
    const supportCost = config.includeSupport ? baseCost * 0.15 : 0 // 15% for support
    const trainingCost = config.includeTraining ? 25000 * Math.ceil(config.userCount / 20) : 0
    
    // Total calculation
    const subtotal = (baseCost * complexityMultiplier) + complianceAddOn + supportCost + trainingCost
    
    // Discount eligibility
    const discountEligible = subtotal > 500000 || config.timeline <= 3 || config.complianceReqs.length >= 2
    const discountAmount = discountEligible ? subtotal * 0.1 : 0
    
    const totalCost = subtotal - discountAmount
    const monthlyBurn = totalCost / config.timeline

    setPricing({
      baseCost,
      complexityMultiplier,
      complianceAddOn,
      supportCost,
      trainingCost,
      totalCost,
      monthlyBurn,
      teamComposition: team.composition,
      discountEligible,
      discountAmount
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
          title="Pricing Configurator"
          description="Build custom pricing proposals based on project scope"
        />

        <PageContent className="space-y-8 max-w-6xl">
          <Alert className="border-primary/20 bg-primary/5">
            <Settings className="h-4 w-4 text-primary" />
            <AlertDescription className="text-primary">
              This tool helps configure accurate pricing based on application complexity, compliance requirements, 
              and team composition. All pricing is fixed-fee with clear deliverables.
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configuration Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="applicationName">Application Name</Label>
                      <Input
                        id="applicationName"
                        placeholder="e.g., Order Management System"
                        value={config.applicationName}
                        onChange={(e) => { setConfig(prev => ({ ...prev, applicationName: e.target.value })); }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="complexity">Complexity Level</Label>
                      <Select
                        value={config.complexity}
                        onValueChange={(value) => { setConfig(prev => ({ ...prev, complexity: value })); }}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {complexityLevels.map(level => (
                            <SelectItem key={level.value} value={level.value}>
                              <div>
                                <div>{level.label}</div>
                                <div className="text-xs text-gray-500">{level.description}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Estimated Lines of Code: {config.linesOfCode.toLocaleString()}</Label>
                    <Slider
                      value={[config.linesOfCode]}
                      onValueChange={([value]: number[]) => { setConfig(prev => ({ ...prev, linesOfCode: value ?? 10000 })); }}
                      min={10000}
                      max={1000000}
                      step={10000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>10K</span>
                      <span>500K</span>
                      <span>1M+</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Number of Integrations: {config.integrations}</Label>
                      <Slider
                        value={[config.integrations]}
                        onValueChange={([value]: number[]) => { setConfig(prev => ({ ...prev, integrations: value ?? 0 })); }}
                        min={0}
                        max={50}
                        step={1}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>User Count: {config.userCount}</Label>
                      <Slider
                        value={[config.userCount]}
                        onValueChange={([value]: number[]) => { setConfig(prev => ({ ...prev, userCount: value ?? 10 })); }}
                        min={10}
                        max={10000}
                        step={10}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dataVolume">Data Volume</Label>
                    <Select
                      value={config.dataVolume}
                      onValueChange={(value) => { setConfig(prev => ({ ...prev, dataVolume: value })); }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {dataVolumes.map(volume => (
                          <SelectItem key={volume.value} value={volume.value}>
                            {volume.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance & Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Label>Compliance Requirements</Label>
                    {complianceOptions.map(option => (
                      <div key={option.value} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={option.value}
                            checked={config.complianceReqs.includes(option.value)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setConfig(prev => ({ 
                                  ...prev, 
                                  complianceReqs: [...prev.complianceReqs, option.value] 
                                }))
                              } else {
                                setConfig(prev => ({ 
                                  ...prev, 
                                  complianceReqs: prev.complianceReqs.filter(req => req !== option.value) 
                                }))
                              }
                            }}
                          />
                          <Label htmlFor={option.value} className="font-normal cursor-pointer">
                            {option.label}
                          </Label>
                        </div>
                        <span className="text-sm text-gray-500">
                          +{formatCurrency(option.cost)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delivery Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Timeline: {config.timeline} months</Label>
                    <Slider
                      value={[config.timeline]}
                      onValueChange={([value]: number[]) => { setConfig(prev => ({ ...prev, timeline: value ?? 6 })); }}
                      min={3}
                      max={18}
                      step={1}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>3 months (Fast)</span>
                      <span>9 months</span>
                      <span>18 months</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Select
                      value={config.teamSize}
                      onValueChange={(value) => { setConfig(prev => ({ ...prev, teamSize: value })); }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {teamSizes.map(team => (
                          <SelectItem key={team.value} value={team.value}>
                            <div>
                              <div>{team.label}</div>
                              <div className="text-xs text-gray-500">
                                {team.composition.senior}Sr + {team.composition.mid}Mid + {team.composition.junior}Jr
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Additional Services</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="support"
                          checked={config.includeSupport}
                          onCheckedChange={(checked) => { setConfig(prev => ({ ...prev, includeSupport: !!checked })); }}
                        />
                        <Label htmlFor="support" className="font-normal cursor-pointer">
                          24/7 Production Support (15% of project cost)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="training"
                          checked={config.includeTraining}
                          onCheckedChange={(checked) => { setConfig(prev => ({ ...prev, includeTraining: !!checked })); }}
                        />
                        <Label htmlFor="training" className="font-normal cursor-pointer">
                          Team Training & Knowledge Transfer
                        </Label>
                      </div>
                    </div>
                  </div>

                  <Button onClick={calculatePricing} className="w-full">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Generate Pricing
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Pricing Summary */}
            <div className="space-y-6">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Pricing Summary</CardTitle>
                  <CardDescription>
                    Fixed-fee project pricing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {pricing ? (
                    <div className="space-y-6">
                      {/* Total Price */}
                      <div className="text-center p-6 bg-primary/5 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">Total Project Cost</p>
                        <p className="text-4xl font-bold text-primary">
                          {formatCurrency(pricing.totalCost)}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          {formatCurrency(pricing.monthlyBurn)}/month
                        </p>
                        {pricing.discountEligible && (
                          <Badge className="mt-3" variant="default">
                            10% Discount Applied
                          </Badge>
                        )}
                      </div>

                      {/* Cost Breakdown */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900">Cost Breakdown</h4>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Base Development</span>
                            <span className="font-medium">{formatCurrency(pricing.baseCost)}</span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-gray-600">Complexity Factor</span>
                            <span className="font-medium">{pricing.complexityMultiplier}x</span>
                          </div>
                          
                          {pricing.complianceAddOn > 0 && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">Compliance Add-ons</span>
                              <span className="font-medium">{formatCurrency(pricing.complianceAddOn)}</span>
                            </div>
                          )}
                          
                          {pricing.supportCost > 0 && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">Production Support</span>
                              <span className="font-medium">{formatCurrency(pricing.supportCost)}</span>
                            </div>
                          )}
                          
                          {pricing.trainingCost > 0 && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">Training & KT</span>
                              <span className="font-medium">{formatCurrency(pricing.trainingCost)}</span>
                            </div>
                          )}
                          
                          {pricing.discountAmount > 0 && (
                            <div className="flex justify-between text-success">
                              <span>Discount</span>
                              <span className="font-medium">-{formatCurrency(pricing.discountAmount)}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Team Composition */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900">Team Composition</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">
                              {pricing.teamComposition.senior} Senior Engineers
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">
                              {pricing.teamComposition.mid} Mid-level Engineers
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">
                              {pricing.teamComposition.junior} Junior Engineers
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900">Included Deliverables</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                            <span>Production-ready application</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                            <span>Complete source code & documentation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                            <span>CI/CD pipeline setup</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                            <span>90-day warranty period</span>
                          </li>
                          {config.includeSupport && (
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                              <span>24/7 production support</span>
                            </li>
                          )}
                          {config.includeTraining && (
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                              <span>Team training program</span>
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full">
                          <FileText className="mr-2 h-4 w-4" />
                          Generate Proposal
                        </Button>
                        <Button variant="outline" className="w-full">
                          Request Approval
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <DollarSign className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Configure project details to see pricing</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Discount Rules */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Discount Eligibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Zap className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>10% off for projects over $500K</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>10% off for 3-month delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>10% off for 2+ compliance reqs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Note:</strong> This pricing is for budgetary purposes. Final pricing requires technical assessment 
              and executive approval. All projects include fixed-fee guarantee with no cost overruns.
            </AlertDescription>
          </Alert>
        </PageContent>
      </PageContainer>
    </PageLayout>
  )
}