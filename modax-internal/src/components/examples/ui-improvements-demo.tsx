import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Typography, 
  H1, H2, H3, H4, 
  P, Lead, Large, Small, Muted, 
  InlineCode, List, Blockquote 
} from '@/components/ui/typography'
import { EmptyState } from '@/components/ui/empty-state'
import { LoadingState, PageLoader, SectionLoader, InlineLoader, SkeletonList } from '@/components/ui/loading-state'
import { Search, FileX, Inbox, Database } from 'lucide-react'

export function UIImprovementsDemo() {
  return (
    <div className="space-y-8 p-8">
      <Card>
        <CardHeader>
          <CardTitle>UI Improvements Demo</CardTitle>
          <CardDescription>
            Showcasing the new Typography system, Empty states, and Loading states
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="typography" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="empty">Empty States</TabsTrigger>
              <TabsTrigger value="loading">Loading States</TabsTrigger>
            </TabsList>

            <TabsContent value="typography" className="space-y-6 mt-6">
              <div>
                <H2 className="mb-4">Typography System</H2>
                <div className="space-y-4">
                  <H1>Heading 1 - Page Title</H1>
                  <H2>Heading 2 - Section Title</H2>
                  <H3>Heading 3 - Subsection</H3>
                  <H4>Heading 4 - Card Title</H4>
                  
                  <Lead>
                    This is a lead paragraph. It stands out from regular paragraphs with larger text.
                  </Lead>
                  
                  <P>
                    This is a regular paragraph with <InlineCode>inline code</InlineCode> and 
                    standard text styling. It automatically handles spacing between paragraphs.
                  </P>
                  
                  <Large>Large text for emphasis</Large>
                  <Small>Small text for captions</Small>
                  <Muted>Muted text for secondary information</Muted>
                  
                  <Blockquote>
                    "This is a blockquote. It's perfect for highlighting important quotes or testimonials."
                  </Blockquote>
                  
                  <div>
                    <H4>Features List:</H4>
                    <List>
                      <li>Clean, consistent typography</li>
                      <li>Automatic spacing and sizing</li>
                      <li>Semantic HTML elements</li>
                      <li>Responsive text sizing</li>
                    </List>
                  </div>

                  <div className="mt-6">
                    <Typography variant="h3" align="center">
                      Centered Heading with Custom Alignment
                    </Typography>
                    <Typography variant="p" align="center" className="mt-2">
                      Typography component also supports custom alignment
                    </Typography>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="empty" className="space-y-6 mt-6">
              <H2 className="mb-4">Empty State Components</H2>
              
              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-0">
                    <EmptyState
                      icon={Search}
                      title="No results found"
                      description="Try adjusting your search or filters to find what you're looking for."
                      action={{
                        label: "Clear filters",
                        onClick: () => {/* Demo action */},
                        variant: "outline"
                      }}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                    <EmptyState
                      icon={FileX}
                      title="No documents yet"
                      description="Upload your first document to get started with document processing."
                      action={{
                        label: "Upload document",
                        onClick: () => {/* Demo action */},
                      }}
                      size="lg"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                    <EmptyState
                      icon={Inbox}
                      title="Inbox is empty"
                      description="You're all caught up!"
                      size="sm"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                    <EmptyState
                      icon={Database}
                      title="No data available"
                      size="full"
                    >
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>Possible reasons:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>No data has been imported yet</li>
                          <li>Filters are too restrictive</li>
                          <li>Connection issues</li>
                        </ul>
                      </div>
                    </EmptyState>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="loading" className="space-y-6 mt-6">
              <H2 className="mb-4">Loading State Components</H2>
              
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Spinner Variants</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-8">
                      <LoadingState size="sm" text="Small" />
                      <LoadingState size="md" text="Medium" />
                      <LoadingState size="lg" text="Large" />
                    </div>
                    
                    <LoadingState size="full" text="Loading dashboard..." />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Dots Animation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LoadingState variant="dots" text="Processing..." />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skeleton Loading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SkeletonList count={3} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Convenience Components</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Inline Loader:</p>
                      <div className="flex items-center gap-2">
                        <span>Saving changes</span>
                        <InlineLoader />
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Section Loader:</p>
                      <Card>
                        <CardContent className="p-0">
                          <SectionLoader text="Loading content..." />
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}