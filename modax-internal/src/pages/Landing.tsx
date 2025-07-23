import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Aurora from '@/components/ui/aurora'
import StarBorder from '@/components/ui/star-border'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, TrendingUp, Target, Shield, DollarSign, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/config/design-tokens'

export default function Landing() {
  const navigate = useNavigate()
  const [expandedAct, setExpandedAct] = useState<number | null>(null)

  const handleEnterPortal = () => {
    navigate('/login')
  }

  const toggleAct = (actNumber: number) => {
    setExpandedAct(expandedAct === actNumber ? null : actNumber)
  }

  return (
    <>
      {/* Full viewport Aurora Background */}
      <div className="fixed inset-0 bg-black">
        <Aurora 
          colorStops={[designTokens.colors.primary.DEFAULT, designTokens.colors.emerald.DEFAULT, designTokens.colors.secondary.DEFAULT]}
          blend={0.4}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="p-6 md:p-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-white">ModAx</div>
            <Button 
              variant="ghost" 
              onClick={handleEnterPortal}
              className="text-white/80 hover:text-white hover:bg-white/10 border-white/20"
            >
              Enter Sales Portal
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-8 py-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              From Experiments to Empire
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We don't do pilots. We build bridges from<br className="hidden sm:block" />
              experiments to enterprise intelligence.
            </p>
            
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-12 max-w-2xl mx-auto" />
            
            <p className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every enterprise has a graveyard of failed GenAI experiments. 
              <span className="text-emerald-400 font-semibold"> $2.1 billion</span> worth in ASEAN alone. 
              Another <span className="text-emerald-400 font-semibold">$3.2 billion</span> in India. 
              While consultancies sell 18-month transformations and startups peddle more tools, 
              we've discovered the secret: resurrect what's dead, prove value fast, then expand strategically. 
              <span className="text-white font-semibold"> This is how empires are built.</span>
            </p>
            
            <StarBorder
              as="button"
              onClick={handleEnterPortal}
              color={designTokens.colors.primary.DEFAULT}
              speed="4s"
              thickness={2}
              className="hover:scale-105 transition-transform duration-300"
            >
              <span className="flex items-center justify-center text-lg font-medium">
                Enter Sales Portal
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </StarBorder>
          </div>
        </section>

        {/* Three-Act Transformation */}
        <section className="py-24 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              The Three-Act Transformation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Act 1: The Graveyard */}
              <Card className="bg-gray-900/50 backdrop-blur border-gray-800 text-white">
                <CardHeader className="pb-4">
                  <div className="text-sm text-gray-500 font-medium mb-2">Act 1</div>
                  <CardTitle className="text-2xl font-bold mb-2">The Graveyard</CardTitle>
                  <CardDescription className="text-gray-400">
                    Where Every Enterprise Stands
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-4xl font-bold text-red-400">73%</div>
                    <p className="text-gray-300">
                      of GenAI POCs never reach production.
                    </p>
                    
                    <div className="space-y-3 pt-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <p className="font-medium">IT Security Wall</p>
                          <p className="text-sm text-gray-500">Demos can't pass enterprise security</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Target className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Data Desert</p>
                          <p className="text-sm text-gray-500">Sample data ≠ real-world complexity</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <DollarSign className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <p className="font-medium">ROI Fog</p>
                          <p className="text-sm text-gray-500">Potential value ≠ proven returns</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full mt-6 text-gray-400 hover:text-white hover:bg-white/10"
                      onClick={() => toggleAct(1)}
                    >
                      Read More 
                      {expandedAct === 1 ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Act 2: The Trojan Horse */}
              <Card className="bg-gray-900/50 backdrop-blur border-gray-800 text-white">
                <CardHeader className="pb-4">
                  <div className="text-sm text-gray-500 font-medium mb-2">Act 2</div>
                  <CardTitle className="text-2xl font-bold mb-2">The Trojan Horse</CardTitle>
                  <CardDescription className="text-gray-400">
                    Our Strategic Entry Method
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-4xl font-bold text-emerald-400">90</div>
                    <p className="text-gray-300">
                      days to production sprint that slips past IT gates.
                    </p>
                    
                    <div className="space-y-3 pt-4">
                      <div className="border-l-2 border-gray-700 pl-4">
                        <p className="font-medium">Week 1-2</p>
                        <p className="text-sm text-gray-500">Experiment Autopsy</p>
                      </div>
                      <div className="border-l-2 border-gray-700 pl-4">
                        <p className="font-medium">Week 3-8</p>
                        <p className="text-sm text-gray-500">Resurrection & Build</p>
                      </div>
                      <div className="border-l-2 border-gray-700 pl-4">
                        <p className="font-medium">Week 9-12</p>
                        <p className="text-sm text-gray-500">Production Launch</p>
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full mt-6 text-gray-400 hover:text-white hover:bg-white/10"
                      onClick={() => toggleAct(2)}
                    >
                      Read More 
                      {expandedAct === 2 ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Act 3: The Empire */}
              <Card className="bg-gray-900/50 backdrop-blur border-gray-800 text-white">
                <CardHeader className="pb-4">
                  <div className="text-sm text-gray-500 font-medium mb-2">Act 3</div>
                  <CardTitle className="text-2xl font-bold mb-2">The Empire</CardTitle>
                  <CardDescription className="text-gray-400">
                    From Beachhead to Victory
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-4xl font-bold text-primary">10x</div>
                    <p className="text-gray-300">
                      One success becomes ten. Ten become an empire.
                    </p>
                    
                    <div className="space-y-3 pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <div>
                          <p className="text-sm"><span className="font-medium">Phase 1:</span> First Victory</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <div>
                          <p className="text-sm"><span className="font-medium">Phase 2:</span> Expansion</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <div>
                          <p className="text-sm"><span className="font-medium">Phase 3:</span> Platform</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <div>
                          <p className="text-sm"><span className="font-medium">Phase 4:</span> Empire</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full mt-6 text-gray-400 hover:text-white hover:bg-white/10"
                      onClick={() => toggleAct(3)}
                    >
                      Read More 
                      {expandedAct === 3 ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Expanded Content */}
            {expandedAct && (
              <div className="mt-8 max-w-4xl mx-auto">
                <Card className="bg-gray-900/50 backdrop-blur border-gray-800 text-white">
                  <CardContent className="pt-8">
                    {expandedAct === 1 && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-6">The Four Horsemen of POC Death</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold mb-2">1. The IT Security Wall</h4>
                            <p className="text-gray-400">
                              Impressive demos can't pass enterprise security reviews. What works in a sandbox dies in production.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-2">2. The Data Desert</h4>
                            <p className="text-gray-400">
                              POCs built on sample data crumble when they meet real-world complexity. Clean CSV files don't exist in enterprises.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-2">3. The ROI Fog</h4>
                            <p className="text-gray-400">
                              "It could save millions" doesn't get budget approval. CFOs need proven returns, not potential value.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-2">4. The Integration Impossibility</h4>
                            <p className="text-gray-400">
                              Standalone experiments can't talk to legacy systems. Without integration, there's no transformation.
                            </p>
                          </div>
                        </div>
                        
                        <div className="h-px bg-gray-800 my-8" />
                        
                        <div className="bg-gray-800/50 p-6 rounded-lg">
                          <p className="text-gray-300 mb-4">
                            <span className="font-semibold text-white">The Hidden Truth:</span> These "failures" are actually validated 
                            experiments waiting for the right approach. Every dead POC proves demand. Every frustrated stakeholder 
                            wants success. Every sunk cost is a future investment.
                          </p>
                          <p className="text-emerald-400 font-semibold">
                            Your Opportunity: Position yourself as the resurrector, not another experimenter.
                          </p>
                        </div>
                      </div>
                    )}

                    {expandedAct === 2 && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-6">The 90-Day Production Sprint</h3>
                        
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-emerald-400">Week 1-2: The Experiment Autopsy</h4>
                            <ul className="space-y-2 text-gray-400">
                              <li>• Examine their POC graveyard with forensic precision</li>
                              <li>• Identify which experiment had the most promise</li>
                              <li>• Understand exactly where and why it failed</li>
                              <li>• Position yourself as the expert who understands their pain</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-emerald-400">Week 3-8: The Resurrection</h4>
                            <p className="text-gray-400 mb-3">Using our ModAx platform, we rebuild with:</p>
                            <ul className="space-y-2 text-gray-400">
                              <li>• Enterprise security baked in from day one</li>
                              <li>• Real data connections, not sample sets</li>
                              <li>• Measured ROI, not projected value</li>
                              <li>• Full integration with existing systems</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-emerald-400">Week 9-12: The Production Launch</h4>
                            <p className="text-gray-400 mb-3">We deliver a working system that:</p>
                            <ul className="space-y-2 text-gray-400">
                              <li>• Handles real volume</li>
                              <li>• Passes IT audit</li>
                              <li>• Delivers measurable value</li>
                              <li>• Creates internal champions</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="h-px bg-gray-800 my-8" />
                        
                        <div className="bg-gray-800/50 p-6 rounded-lg">
                          <p className="text-gray-300">
                            <span className="font-semibold text-white">The Strategic Genius:</span> While competitors pitch big 
                            transformations that scare enterprises, we slip in through a side door they've already opened. 
                            Low risk. High reward. Proven approach.
                          </p>
                        </div>
                      </div>
                    )}

                    {expandedAct === 3 && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-6">The Intelligence Evolution</h3>
                        
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-primary">Phase 1: The First Victory (Months 1-3)</h4>
                            <p className="text-gray-400">
                              One resurrected POC becomes a production system. But more importantly, we're now inside their 
                              environment, understanding their data, earning their trust.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-primary">Phase 2: The Expansion (Months 4-6)</h4>
                            <p className="text-gray-400 mb-3">Success breeds appetite. That working chatbot reveals:</p>
                            <ul className="space-y-2 text-gray-400">
                              <li>• Automated document processing opportunities</li>
                              <li>• Predictive customer analytics potential</li>
                              <li>• Intelligent workflow routing possibilities</li>
                              <li>• Real-time decision support needs</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-primary">Phase 3: The Platform (Months 7-12)</h4>
                            <p className="text-gray-400 mb-3">Individual successes connect into an intelligence fabric:</p>
                            <ul className="space-y-2 text-gray-400">
                              <li>• Applications start sharing context</li>
                              <li>• Data becomes truly intelligent</li>
                              <li>• AI agents collaborate autonomously</li>
                              <li>• The enterprise thinks, learns, adapts</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-primary">Phase 4: The Empire (Year 2+)</h4>
                            <p className="text-gray-400 mb-3">What started as one failed experiment becomes:</p>
                            <ul className="space-y-2 text-gray-400">
                              <li>• Enterprise-wide AI transformation</li>
                              <li>• Competitive advantage through intelligence</li>
                              <li>• Self-improving business processes</li>
                              <li>• Continuous innovation platform</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="h-px bg-gray-800 my-8" />
                        
                        <div className="bg-gray-800/50 p-6 rounded-lg">
                          <p className="text-gray-300">
                            <span className="font-semibold text-white">The Multiplier Effect:</span> Valuemax started with one failed 
                            chatbot. Today, they're an AI-powered financial services innovator with 300% ROI. One success funded 
                            ten more transformations.
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>

        {/* Why This Model Wins */}
        <section className="py-24 px-6 md:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Why This Model Wins
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">For You (Sales Team)</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Easier Entry</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li>• $150K vs $5M initial investment</li>
                      <li>• 90 days vs 18 months decision cycle</li>
                      <li>• Less threatening to stakeholders</li>
                      <li>• Proven value before expansion</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Higher Success Rate</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li>• De-risked approach</li>
                      <li>• Fixed scope engagements</li>
                      <li>• Clear success metrics</li>
                      <li>• Reference-able wins</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Bigger Long-term Value</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li>• Land and expand model</li>
                      <li>• Trusted advisor position</li>
                      <li>• Recurring revenue streams</li>
                      <li>• $3M+ lifetime value</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">For Your Clients</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Immediate Value</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li>• Failed investment recovered</li>
                      <li>• Quick wins build momentum</li>
                      <li>• Internal champions created</li>
                      <li>• Board confidence restored</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Managed Risk</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li>• Start small, scale smart</li>
                      <li>• Prove value before commitment</li>
                      <li>• Learn and adjust approach</li>
                      <li>• Evolution, not revolution</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Competitive Advantage</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li>• First mover in their industry</li>
                      <li>• Compound intelligence benefits</li>
                      <li>• Continuous improvement</li>
                      <li>• Future-ready architecture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-24 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              The Market Opportunity
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-400 mb-2">$2.1B</div>
                <p className="text-xl font-semibold text-white mb-1">Failed POCs</p>
                <p className="text-gray-400">ASEAN & India</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">$3.2B</div>
                <p className="text-xl font-semibold text-white mb-1">Legacy Modernization</p>
                <p className="text-gray-400">Enterprise transformation</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-400 mb-2">$5.4B</div>
                <p className="text-xl font-semibold text-white mb-1">Process Reinvention</p>
                <p className="text-gray-400">AI-driven innovation</p>
              </div>
            </div>
            
            <div className="text-center py-8 border-t border-b border-gray-800">
              <p className="text-2xl text-gray-400 mb-2">Total Addressable Market</p>
              <p className="text-6xl font-bold text-white mb-4">$10.7B</p>
              <p className="text-xl text-primary">Our Target (3 years): $300M+</p>
            </div>
          </div>
        </section>

        {/* Quick Reference Stats */}
        <section className="py-24 px-6 md:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Quick Reference Stats
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">73%</div>
                <p className="text-gray-400">POCs fail</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">90</div>
                <p className="text-gray-400">Days to production</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <p className="text-gray-400">AWS funded</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">300%</div>
                <p className="text-gray-400">Average ROI</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <p className="text-gray-400">Expand in 6 months</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">95%</div>
                <p className="text-gray-400">On-time delivery</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$3M+</div>
                <p className="text-gray-400">Lifetime value</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">12</div>
                <p className="text-gray-400">Success stories</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Build Your Empire */}
        <section className="py-24 px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Ready to Build Your Empire?
            </h2>
            
            <div className="space-y-4 text-lg text-gray-300 mb-12">
              <p>You're not selling technology. You're selling transformation.</p>
              <p>You're not selling pilots. You're selling production.</p>
              <p>You're not selling promises. You're selling proven paths.</p>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-12 max-w-2xl mx-auto" />
            
            <div className="space-y-2 text-gray-400 mb-12">
              <p>Every conversation starts with their graveyard.</p>
              <p>Every engagement enters through our Trojan Horse.</p>
              <p>Every success builds toward their empire.</p>
            </div>
            
            <div className="space-y-4">
              <StarBorder
                as="button"
                onClick={handleEnterPortal}
                color={designTokens.colors.primary.DEFAULT}
                speed="4s"
                thickness={2}
                className="hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center justify-center text-lg font-medium px-8">
                  Access Sales Portal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </StarBorder>
              
              <p className="text-gray-500 mt-4">
                Already logged in? 
                <Button 
                  variant="link" 
                  onClick={() => navigate('/strategy')}
                  className="text-primary hover:text-primary/80 pl-1"
                >
                  Go to Strategy Hub →
                </Button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}