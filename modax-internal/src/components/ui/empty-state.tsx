import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { Button } from "./button"

const emptyStateVariants = cva(
  "flex flex-col items-center justify-center text-center",
  {
    variants: {
      size: {
        sm: "py-8 px-4",
        md: "py-12 px-6",
        lg: "py-16 px-8",
        full: "min-h-[400px] p-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface EmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyStateVariants> {
  icon?: LucideIcon
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
    variant?: "default" | "secondary" | "outline" | "ghost"
  }
  children?: React.ReactNode
}

export function EmptyState({
  className,
  size,
  icon: Icon,
  title,
  description,
  action,
  children,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(emptyStateVariants({ size, className }))}
      {...props}
    >
      {Icon && (
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
          <Icon className="h-6 w-6 text-muted-foreground" />
        </div>
      )}
      
      {title && (
        <h3 className={cn(
          "font-semibold",
          Icon && "mt-4",
          size === "sm" ? "text-sm" : "text-base"
        )}>
          {title}
        </h3>
      )}
      
      {description && (
        <p className={cn(
          "text-muted-foreground",
          title && "mt-1",
          size === "sm" ? "text-xs max-w-xs" : "text-sm max-w-md"
        )}>
          {description}
        </p>
      )}
      
      {children && (
        <div className={cn(
          (title || description) && "mt-4",
          "w-full max-w-md"
        )}>
          {children}
        </div>
      )}
      
      {action && (
        <Button
          variant={action.variant || "default"}
          size={size === "sm" ? "sm" : "default"}
          onClick={action.onClick}
          className={cn((title || description || children) && "mt-4")}
        >
          {action.label}
        </Button>
      )}
    </div>
  )
}