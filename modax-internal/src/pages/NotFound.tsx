import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-full bg-gray-50 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-4">
          <div className="mx-auto text-6xl font-bold text-primary">404</div>
        </CardHeader>
        <CardContent className="space-y-2">
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button asChild variant="default">
            <Link to="/strategy">
              <Home className="mr-2 h-4 w-4" />
              Go to Strategy Overview
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}