import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { Skeleton } from "./skeleton"

const loadingStateVariants = cva(
  "flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "py-8",
        md: "py-12",
        lg: "py-16",
        full: "min-h-[400px]",
        page: "min-h-screen",
      },
      variant: {
        spinner: "",
        skeleton: "w-full",
        dots: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "spinner",
    },
  }
)

const spinnerSizeMap = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  full: "h-10 w-10",
  page: "h-12 w-12",
}

export interface LoadingStateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingStateVariants> {
  text?: string
  count?: number // For skeleton variant
}

export function LoadingState({
  className,
  size,
  variant,
  text,
  count = 3,
  ...props
}: LoadingStateProps) {
  if (variant === "skeleton") {
    return (
      <div className={cn("space-y-3 w-full", className)} {...props}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div className={cn(loadingStateVariants({ size, variant, className }), "flex-col gap-2")} {...props}>
        <div className="flex space-x-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
        </div>
        {text && (
          <p className="text-sm text-muted-foreground mt-2">{text}</p>
        )}
      </div>
    )
  }

  // Default spinner variant
  return (
    <div
      className={cn(loadingStateVariants({ size, variant, className }), "flex-col gap-3")}
      {...props}
    >
      <Loader2 className={cn("animate-spin text-muted-foreground", spinnerSizeMap[size ?? "md"])} />
      {text && (
        <p className="text-sm text-muted-foreground">{text}</p>
      )}
    </div>
  )
}

// Convenience components for common loading patterns
export function PageLoader({ text = "Loading..." }: { text?: string }) {
  return <LoadingState size="page" text={text} />
}

export function SectionLoader({ text }: { text?: string }) {
  return <LoadingState size="full" text={text} />
}

export function InlineLoader({ text }: { text?: string }) {
  return <LoadingState size="sm" text={text} />
}

export function SkeletonList({ count = 3 }: { count?: number }) {
  return <LoadingState variant="skeleton" count={count} />
}