import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      list: "my-6 ml-6 list-disc [&>li]:mt-2",
      inlineCode: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    align: "left",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, align, as, ...props }, ref) => {
    const Comp = as != null ? as : getDefaultElement(variant)
    
    return (
      <Comp
        className={cn(typographyVariants({ variant, align, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

function getDefaultElement(variant: TypographyProps["variant"]): React.ElementType {
  switch (variant) {
    case "h1":
      return "h1"
    case "h2":
      return "h2"
    case "h3":
      return "h3"
    case "h4":
      return "h4"
    case "h5":
      return "h5"
    case "h6":
      return "h6"
    case "blockquote":
      return "blockquote"
    case "list":
      return "ul"
    case "code":
    case "inlineCode":
      return "code"
    default:
      return "p"
  }
}

// Convenience components
export const H1 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant">
>((props, ref) => <Typography variant="h1" as="h1" ref={ref} {...props} />)
H1.displayName = "H1"

export const H2 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant">
>((props, ref) => <Typography variant="h2" as="h2" ref={ref} {...props} />)
H2.displayName = "H2"

export const H3 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant">
>((props, ref) => <Typography variant="h3" as="h3" ref={ref} {...props} />)
H3.displayName = "H3"

export const H4 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant">
>((props, ref) => <Typography variant="h4" as="h4" ref={ref} {...props} />)
H4.displayName = "H4"

export const P = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, "variant">
>((props, ref) => <Typography variant="p" as="p" ref={ref} {...props} />)
P.displayName = "P"

export const Lead = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, "variant">
>((props, ref) => <Typography variant="lead" as="p" ref={ref} {...props} />)
Lead.displayName = "Lead"

export const Large = React.forwardRef<
  HTMLDivElement,
  Omit<TypographyProps, "variant">
>((props, ref) => <Typography variant="large" as="div" ref={ref} {...props} />)
Large.displayName = "Large"

export const Small = React.forwardRef<
  HTMLElement,
  Omit<TypographyProps, "variant">
>((props, ref) => <Typography variant="small" as="small" ref={ref} {...props} />)
Small.displayName = "Small"

export const Muted = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, "variant">
>((props, ref) => <Typography variant="muted" as="p" ref={ref} {...props} />)
Muted.displayName = "Muted"

export const InlineCode = React.forwardRef<
  HTMLElement,
  Omit<TypographyProps, "variant">
>((props, ref) => <Typography variant="inlineCode" as="code" ref={ref} {...props} />)
InlineCode.displayName = "InlineCode"

export const List = React.forwardRef<
  HTMLUListElement,
  Omit<TypographyProps, "variant">
>((props, ref) => <Typography variant="list" as="ul" ref={ref} {...props} />)
List.displayName = "List"

export const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  Omit<TypographyProps, "variant">
>((props, ref) => <Typography variant="blockquote" as="blockquote" ref={ref} {...props} />)
Blockquote.displayName = "Blockquote"

export { Typography, typographyVariants }