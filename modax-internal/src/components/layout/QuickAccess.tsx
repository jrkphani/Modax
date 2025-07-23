import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  Calculator, 
  Cloud, 
  Presentation,
  ChevronUp,
  ChevronDown,
  X,
  Zap
} from 'lucide-react'

interface QuickTool {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  path?: string
  action?: () => void
  color: string
}

export function QuickAccess() {
  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(true)
  const [isHidden, setIsHidden] = useState(false)

  const quickTools: QuickTool[] = [
    {
      id: 'roi-calculator',
      title: 'ROI Calculator',
      description: 'Calculate modernization ROI',
      icon: Calculator,
      path: '/sales-enablement/roi-calculators',
      color: 'text-success bg-success/5'
    },
    {
      id: 'aws-funding',
      title: 'AWS Funding',
      description: 'Access funding programs',
      icon: Cloud,
      action: () => {/* TODO: Open AWS Funding Guide */},
      color: 'text-blue-600 bg-blue-50'
    },
    {
      id: 'pitch-deck',
      title: 'Pitch Deck',
      description: 'Create presentations',
      icon: Presentation,
      path: '/sales-enablement/pitch-decks',
      color: 'text-primary bg-primary/5'
    }
  ]

  const handleToolClick = (tool: QuickTool) => {
    if (tool.path !== undefined) {
      void navigate(tool.path)
    } else if (tool.action) {
      tool.action()
    }
  }

  if (isHidden) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <Button
          onClick={() => { setIsHidden(false) }}
          className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
          size="icon"
        >
          <Zap className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Card className={`shadow-xl border-gray-200 transition-all duration-300 ${
        isExpanded ? 'w-80' : 'w-auto'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b bg-gray-50">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-gray-900">
              Quick Access
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => { setIsExpanded(!isExpanded) }}
            >
              {isExpanded ? (
                <ChevronDown className="h-3 w-3" />
              ) : (
                <ChevronUp className="h-3 w-3" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => { setIsHidden(true) }}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Content */}
        {isExpanded && (
          <div className="p-3 space-y-2">
            {quickTools.map((tool) => {
              const Icon = tool.icon
              return (
                <Button
                  key={tool.id}
                  variant="ghost"
                  className="w-full justify-start p-3 h-auto hover:bg-gray-50 group"
                  onClick={() => { handleToolClick(tool) }}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className={`p-2 rounded-lg ${tool.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-900">
                        {tool.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </Button>
              )
            })}
            
            <div className="pt-2 border-t">
              <p className="text-xs text-gray-500 text-center">
                Press <kbd className="px-1 py-0.5 bg-gray-100 rounded text-gray-600">⌘K</kbd> for more tools
              </p>
            </div>
          </div>
        )}

        {/* Collapsed state */}
        {!isExpanded && (
          <div className="p-2 space-y-1">
            {quickTools.map((tool) => {
              const Icon = tool.icon
              return (
                <Button
                  key={tool.id}
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 ${
                    tool.id === 'roi-calculator' ? 'hover:bg-success/5' :
                    tool.id === 'aws-funding' ? 'hover:bg-blue-50' :
                    'hover:bg-primary/5'
                  }`}
                  onClick={() => { handleToolClick(tool) }}
                  title={tool.title}
                >
                  <Icon className={`h-5 w-5 ${
                    tool.id === 'roi-calculator' ? 'text-success' :
                    tool.id === 'aws-funding' ? 'text-blue-600' :
                    'text-primary'
                  }`} />
                </Button>
              )
            })}
          </div>
        )}
      </Card>
    </div>
  )
}