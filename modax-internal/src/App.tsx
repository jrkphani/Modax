import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import { LoadingSpinner } from './components/ui/LoadingSpinner'
import { PortalLayout } from './components/layout/PortalLayout'
import { ProtectedRoute } from './components/layout/ProtectedRoute'
import { Toaster } from './components/ui/sonner'
import './App.css'

// Lazy load pages for better performance
const Landing = lazy(() => import('./pages/Landing'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Strategy Hub pages
const StrategyHub = lazy(() => import('./pages/StrategyHub'))
const StrategyOverview = lazy(() => import('./pages/strategy/StrategyOverview'))
const MarketOpportunities = lazy(() => import('./pages/strategy/MarketOpportunity'))
const ThreeActJourney = lazy(() => import('./pages/strategy/ThreeActJourney'))
const SuccessStories = lazy(() => import('./pages/strategy/SuccessStories'))
const EntryStrategies = lazy(() => import('./pages/strategy/EntryStrategies'))
const IntelligenceFabric = lazy(() => import('./pages/IntelligenceFabric'))

// Operations Center pages
const OperationsCenter = lazy(() => import('./pages/OperationsCenter'))
const QualityGates = lazy(() => import('./pages/operations/QualityGates'))
const RiskManagement = lazy(() => import('./pages/operations/RiskManagement'))

// Playbooks pages
const PlaybooksIndex = lazy(() => import('./pages/playbooks/index'))
const PlaybookNinety = lazy(() => import('./pages/playbooks/ninety-day/index'))
const DiscoveryProcess = lazy(() => import('./pages/playbooks/discovery/index'))
const ExpansionPlaybook = lazy(() => import('./pages/playbooks/expansion/index'))
const LandExpandModel = lazy(() => import('./pages/playbooks/expansion/land-expand-model'))
const SuccessDashboard = lazy(() => import('./pages/playbooks/expansion/success-dashboard'))
const ExpansionPsychology = lazy(() => import('./pages/playbooks/expansion/psychology'))

// Sales Enablement pages
const SalesEnablement = lazy(() => import('./pages/sales-enablement/index'))
const QuickStart = lazy(() => import('./pages/sales-enablement/quick-start/index'))
const BattleCards = lazy(() => import('./pages/sales-enablement/battle-cards/index'))
const PitchDecks = lazy(() => import('./pages/sales-enablement/pitch-decks/index'))
const SalesTools = lazy(() => import('./pages/sales-enablement/tools/index'))
const ROICalculators = lazy(() => import('./pages/sales-enablement/tools/ROICalculator'))

// Knowledge Base pages
const KnowledgeBaseIndex = lazy(() => import('./pages/knowledge-base/index'))
const ProductDocumentation = lazy(() => import('./pages/knowledge-base/documentation/index'))
const TechnicalSpecifications = lazy(() => import('./pages/knowledge-base/specifications/index'))
const ImplementationGuides = lazy(() => import('./pages/knowledge-base/implementation/index'))
const FAQs = lazy(() => import('./pages/knowledge-base/faqs/index'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const BestPractices = lazy(() => import('./pages/knowledge/BestPractices'))

// Loading fallback component
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <LoadingSpinner size="large" />
  </div>
)

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route element={<PortalLayout />}>
                  <Route path="/" element={<Landing />} />
                  <Route path="/login" element={<Login />} />
                  
                  {/* Strategy Hub routes */}
                  <Route path="/strategy" element={<ProtectedRoute><StrategyOverview /></ProtectedRoute>} />
                  <Route path="/strategy/hub" element={<ProtectedRoute><StrategyHub /></ProtectedRoute>} />
                  <Route path="/strategy/market-opportunity" element={<ProtectedRoute><MarketOpportunities /></ProtectedRoute>} />
                  <Route path="/strategy/three-act-journey" element={<ProtectedRoute><ThreeActJourney /></ProtectedRoute>} />
                  <Route path="/strategy/success-stories" element={<ProtectedRoute><SuccessStories /></ProtectedRoute>} />
                  <Route path="/strategy/market-opportunities" element={<ProtectedRoute><MarketOpportunities /></ProtectedRoute>} />
                  <Route path="/strategy/entry-strategies" element={<ProtectedRoute><EntryStrategies /></ProtectedRoute>} />
                  <Route path="/intelligence-fabric" element={<ProtectedRoute><IntelligenceFabric /></ProtectedRoute>} />
                  
                  {/* Operations Center routes */}
                  <Route path="/operations" element={<ProtectedRoute><OperationsCenter /></ProtectedRoute>} />
                  <Route path="/operations/quality-gates" element={<ProtectedRoute><QualityGates /></ProtectedRoute>} />
                  <Route path="/operations/risk-management" element={<ProtectedRoute><RiskManagement /></ProtectedRoute>} />
                  
                  {/* Playbooks routes */}
                  <Route path="/playbooks" element={<ProtectedRoute><PlaybooksIndex /></ProtectedRoute>} />
                  <Route path="/playbooks/90-day" element={<ProtectedRoute><PlaybookNinety /></ProtectedRoute>} />
                  <Route path="/playbooks/90-day-execution" element={<Navigate to="/playbooks/90-day" replace />} />
                  <Route path="/playbooks/discovery" element={<ProtectedRoute><DiscoveryProcess /></ProtectedRoute>} />
                  <Route path="/playbooks/discovery-process" element={<Navigate to="/playbooks/discovery" replace />} />
                  <Route path="/playbooks/expansion" element={<ProtectedRoute><ExpansionPlaybook /></ProtectedRoute>} />
                  <Route path="/playbooks/expansion-strategy" element={<Navigate to="/playbooks/expansion" replace />} />
                  <Route path="/playbooks/expansion/land-expand-model" element={<ProtectedRoute><LandExpandModel /></ProtectedRoute>} />
                  <Route path="/playbooks/expansion/success-dashboard" element={<ProtectedRoute><SuccessDashboard /></ProtectedRoute>} />
                  <Route path="/playbooks/expansion/psychology" element={<ProtectedRoute><ExpansionPsychology /></ProtectedRoute>} />
                  <Route path="/90-day-playbook" element={<Navigate to="/playbooks/90-day" replace />} />
                  
                  {/* Sales Enablement routes */}
                  <Route path="/sales-enablement" element={<ProtectedRoute><SalesEnablement /></ProtectedRoute>} />
                  <Route path="/sales-enablement/quick-start" element={<ProtectedRoute><QuickStart /></ProtectedRoute>} />
                  <Route path="/sales-enablement/battle-cards" element={<ProtectedRoute><BattleCards /></ProtectedRoute>} />
                  <Route path="/sales-enablement/pitch-decks" element={<ProtectedRoute><PitchDecks /></ProtectedRoute>} />
                  <Route path="/sales-enablement/tools" element={<ProtectedRoute><SalesTools /></ProtectedRoute>} />
                  <Route path="/sales-enablement/roi-calculators" element={<ProtectedRoute><ROICalculators /></ProtectedRoute>} />
                  
                  {/* Knowledge Base routes */}
                  <Route path="/knowledge-base" element={<ProtectedRoute><KnowledgeBaseIndex /></ProtectedRoute>} />
                  <Route path="/knowledge-base/documentation" element={<ProtectedRoute><ProductDocumentation /></ProtectedRoute>} />
                  <Route path="/knowledge-base/specifications" element={<ProtectedRoute><TechnicalSpecifications /></ProtectedRoute>} />
                  <Route path="/knowledge-base/implementation" element={<ProtectedRoute><ImplementationGuides /></ProtectedRoute>} />
                  <Route path="/knowledge-base/faqs" element={<ProtectedRoute><FAQs /></ProtectedRoute>} />
                  <Route path="/case-studies" element={<ProtectedRoute><CaseStudies /></ProtectedRoute>} />
                  <Route path="/knowledge-base/best-practices" element={<ProtectedRoute><BestPractices /></ProtectedRoute>} />
                  
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
        <Toaster position="bottom-right" richColors />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App