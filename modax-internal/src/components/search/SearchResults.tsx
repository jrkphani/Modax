import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  FileText, 
  Layers, 
  Users, 
  Zap,
  ChevronRight,
  Search
} from 'lucide-react'
import { searchItems } from '@/config/search-config'
import type { SearchableItem, QuickAction } from '@/config/search-config'

interface SearchResultsProps {
  query: string
  onSelectResult: (result: SearchableItem | QuickAction) => void
  quickActions?: QuickAction[]
}

export function SearchResults({ query, onSelectResult, quickActions = [] }: SearchResultsProps) {
  const navigate = useNavigate()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [results, setResults] = useState<SearchableItem[]>([])
  
  // Filter results based on query
  useEffect(() => {
    const searchResults = searchItems(query)
    setResults(searchResults)
    setSelectedIndex(0)
  }, [query])

  // Group results by category
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = []
    }
    acc[result.category].push(result)
    return acc
  }, {} as Record<string, SearchableItem[]>)

  // Filter quick actions based on query
  const filteredQuickActions = query 
    ? quickActions.filter(action =>
        action.title.toLowerCase().includes(query.toLowerCase()) ||
        action.description.toLowerCase().includes(query.toLowerCase())
      )
    : quickActions

  // Calculate total results for keyboard navigation
  const totalResults = results.length + filteredQuickActions.length

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % totalResults)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + totalResults) % totalResults)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        handleSelectByIndex(selectedIndex)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, totalResults])

  const handleSelectByIndex = useCallback((index: number) => {
    if (index < filteredQuickActions.length) {
      const action = filteredQuickActions[index]
      if (action.action) {
        action.action()
      }
      onSelectResult(action)
    } else {
      const resultIndex = index - filteredQuickActions.length
      const result = results[resultIndex]
      if (result) {
        if (result.path) {
          navigate(result.path)
        }
        onSelectResult(result)
      }
    }
  }, [filteredQuickActions, results, navigate, onSelectResult])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'page':
        return Layers
      case 'document':
        return FileText
      case 'tool':
        return Zap
      case 'action':
        return Zap
      default:
        return FileText
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'page':
        return 'Pages'
      case 'document':
        return 'Documents'
      case 'tool':
        return 'Tools'
      case 'action':
        return 'Quick Actions'
      default:
        return category
    }
  }

  if (!query) {
    return (
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-500 text-center py-8">
          Start typing to search...
        </p>
        {quickActions.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase px-2 mb-2">
              Quick Actions
            </h3>
            <div className="space-y-1">
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <Button
                    key={action.id}
                    onClick={() => {
                      action.action()
                      onSelectResult(action)
                    }}
                    variant="ghost"
                    className={`w-full justify-start gap-3 px-2 py-2 h-auto ${
                      selectedIndex === index ? 'bg-gray-100' : ''
                    }`}
                  >
                    <div className="flex-shrink-0 mt-0.5 text-gray-500">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-sm font-medium text-gray-900">
                        {action.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {action.description}
                      </p>
                    </div>
                    {action.shortcut && (
                      <kbd className="ml-auto text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">
                        {action.shortcut}
                      </kbd>
                    )}
                  </Button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }

  if (results.length === 0 && filteredQuickActions.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
        <p className="text-sm">No results found for "{query}"</p>
        <p className="text-xs mt-2">Try searching with different keywords</p>
      </div>
    )
  }

  let currentIndex = 0

  return (
    <ScrollArea className="max-h-[400px] px-2 pb-2">
      <div className="space-y-4">
        {/* Quick Actions */}
        {filteredQuickActions.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase px-2 mb-2">
              Quick Actions
            </h3>
            <div className="space-y-1">
              {filteredQuickActions.map((action) => {
                const Icon = action.icon
                const isSelected = selectedIndex === currentIndex
                currentIndex++
                
                return (
                  <Button
                    key={action.id}
                    onClick={() => {
                      action.action()
                      onSelectResult(action)
                    }}
                    variant="ghost"
                    className={`w-full justify-start gap-3 px-2 py-2 h-auto ${
                      isSelected ? 'bg-gray-100' : ''
                    }`}
                  >
                    <div className="flex-shrink-0 mt-0.5 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-sm font-medium text-gray-900">
                        {action.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {action.description}
                      </p>
                    </div>
                    {action.shortcut && (
                      <kbd className="ml-auto text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">
                        {action.shortcut}
                      </kbd>
                    )}
                  </Button>
                )
              })}
            </div>
          </div>
        )}

        {/* Grouped Results */}
        {Object.entries(groupedResults).map(([category, categoryResults]) => (
          <div key={category}>
            <h3 className="text-xs font-semibold text-gray-500 uppercase px-2 mb-2">
              {getCategoryLabel(category)}
            </h3>
            <div className="space-y-1">
              {categoryResults.map((result) => {
                const Icon = result.icon || getCategoryIcon(result.category)
                const isSelected = selectedIndex === currentIndex
                currentIndex++
                
                // Highlight matching text
                const highlightText = (text: string) => {
                  const regex = new RegExp(`(${query})`, 'gi')
                  const parts = text.split(regex)
                  return parts.map((part, i) => 
                    regex.test(part) ? (
                      <span key={i} className="font-semibold text-primary">
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )
                }
                
                return (
                  <Button
                    key={result.id}
                    onClick={() => {
                      if (result.path) {
                        navigate(result.path)
                      }
                      onSelectResult(result)
                    }}
                    variant="ghost"
                    className={`w-full justify-start gap-3 px-2 py-2 h-auto ${
                      isSelected ? 'bg-gray-100' : ''
                    }`}
                  >
                    <div className="flex-shrink-0 mt-0.5 text-gray-500">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-sm font-medium text-gray-900">
                        {highlightText(result.title)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {highlightText(result.description)}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}