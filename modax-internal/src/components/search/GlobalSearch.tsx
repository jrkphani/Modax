import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { SearchResults } from './SearchResults'
import { quickActions } from '@/config/search-config'
import type { SearchableItem, QuickAction } from '@/config/search-config'

export function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  // Handle keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        setOpen(true)
      }
      
      // ESC to close
      if (event.key === 'Escape' && open) {
        event.preventDefault()
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  // Focus input when dialog opens
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 0)
    }
  }, [open])

  // Handle result selection
  const handleSelectResult = useCallback((result: SearchableItem | QuickAction) => {
    setOpen(false)
    setSearchQuery('')
  }, [])

  // Debounced search
  const [debouncedQuery, setDebouncedQuery] = useState('')
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 150)

    return () => clearTimeout(timer)
  }, [searchQuery])

  return (
    <>
      {/* Search Trigger Button */}
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      {/* Search Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0 gap-0">
          <DialogHeader className="px-4 pt-4 pb-0">
            <DialogTitle className="sr-only">Search</DialogTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                ref={inputRef}
                placeholder="Search pages, documents, tools, or type a command..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-12 text-base border-0 focus-visible:ring-0"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 px-2 text-gray-400 hover:text-gray-600"
                >
                  Clear
                </Button>
              )}
            </div>
          </DialogHeader>

          <div className="border-t mt-4">
            <SearchResults
              query={debouncedQuery}
              onSelectResult={handleSelectResult}
              quickActions={quickActions}
            />
          </div>

          {/* Footer with tips */}
          <div className="border-t px-4 py-3 bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border rounded text-gray-600">↑↓</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border rounded text-gray-600">↵</kbd>
                Select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border rounded text-gray-600">esc</kbd>
                Close
              </span>
            </div>
            <span>
              Powered by ModAx Intelligence
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}