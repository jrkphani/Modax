import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

/**
 * Example component showing how to use Sonner toast notifications
 */
export function ToastExample() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl font-bold">Toast Notification Examples</h2>
      
      <div className="flex flex-wrap gap-2">
        <Button 
          onClick={() => toast('This is a default toast notification')}
        >
          Default Toast
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => toast.success('Operation completed successfully!')}
        >
          Success Toast
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => toast.error('Something went wrong!')}
        >
          Error Toast
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => toast.warning('Please check your input')}
        >
          Warning Toast
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => toast.info('Here is some useful information')}
        >
          Info Toast
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => {
            const promise = new Promise((resolve) => {
              setTimeout(() => { resolve({ name: 'Data loaded' }); }, 2000)
            })
            
            toast.promise(promise, {
              loading: 'Loading data...',
              success: 'Data loaded successfully!',
              error: 'Failed to load data',
            })
          }}
        >
          Promise Toast
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => {
            toast('Custom toast with action', {
              action: {
                label: 'Undo',
                onClick: () => toast('Action clicked!'),
              },
            })
          }}
        >
          Toast with Action
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => {
            toast.success('Toast with description', {
              description: 'This is a more detailed description of what happened.',
            })
          }}
        >
          Toast with Description
        </Button>
      </div>
      
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Usage Instructions:</h3>
        <pre className="text-sm">
{`import { toast } from 'sonner'

// Basic toast
toast('Hello world')

// Success toast
toast.success('Success!')

// Error toast
toast.error('Error!')

// Promise toast
toast.promise(myPromise, {
  loading: 'Loading...',
  success: 'Success!',
  error: 'Error!',
})

// Toast with action
toast('Message', {
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo')
  },
})`}
        </pre>
      </div>
    </div>
  )
}