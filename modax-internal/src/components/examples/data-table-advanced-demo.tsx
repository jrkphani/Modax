import * as React from "react"
import type { ColumnDef } from "@tanstack/react-table"
import { 
  MoreHorizontal, 
  Circle,
  CircleCheck,
  CircleX,
  Clock
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTable } from "@/components/ui/data-table"
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header"

// Enhanced payment type with more fields
export interface Payment {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  method: "card" | "bank" | "paypal" | "crypto"
  category: "subscription" | "one-time" | "refund"
  createdAt: Date
}

// Status options for filtering
const statuses = [
  {
    value: "pending",
    label: "Pending",
    icon: Clock,
  },
  {
    value: "processing",
    label: "Processing",
    icon: Circle,
  },
  {
    value: "success",
    label: "Success",
    icon: CircleCheck,
  },
  {
    value: "failed",
    label: "Failed",
    icon: CircleX,
  },
]

// Payment method options
const methods = [
  {
    value: "card",
    label: "Card",
  },
  {
    value: "bank",
    label: "Bank Transfer",
  },
  {
    value: "paypal",
    label: "PayPal",
  },
  {
    value: "crypto",
    label: "Crypto",
  },
]

// Category options
const categories = [
  {
    value: "subscription",
    label: "Subscription",
  },
  {
    value: "one-time",
    label: "One-time",
  },
  {
    value: "refund",
    label: "Refund",
  },
]

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() ? "indeterminate" : false)
        }
        onCheckedChange={(value) => { table.toggleAllPageRowsSelected(Boolean(value)) }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => { row.toggleSelected(Boolean(value)) }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon != null && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return (value as string[]).includes(row.getValue(id))
    },
  },
  {
    accessorKey: "method",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Method" />
    ),
    cell: ({ row }) => {
      const method = methods.find(
        (method) => method.value === row.getValue("method")
      )

      if (!method) {
        return null
      }

      return (
        <Badge variant="outline">
          {method.label}
        </Badge>
      )
    },
    filterFn: (row, id, value) => {
      return (value as string[]).includes(row.getValue(id))
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      const category = categories.find(
        (category) => category.value === row.getValue("category")
      )

      if (!category) {
        return null
      }

      return <span>{category.label}</span>
    },
    filterFn: (row, id, value) => {
      return (value as string[]).includes(row.getValue(id))
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created" />
    ),
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date
      return (
        <div className="text-muted-foreground">
          {date.toLocaleDateString()}
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => { void navigator.clipboard.writeText(payment.id) }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

// Generate enhanced sample data
function generatePayments(count: number): Payment[] {
  const statusOptions: Payment["status"][] = ["pending", "processing", "success", "failed"]
  const methodOptions: Payment["method"][] = ["card", "bank", "paypal", "crypto"]
  const categoryOptions: Payment["category"][] = ["subscription", "one-time", "refund"]
  const domains = ["gmail.com", "outlook.com", "company.com", "example.com", "business.net"]
  
  return Array.from({ length: count }, (_, i) => ({
    id: `PAY-${(i + 1).toString().padStart(4, "0")}`,
    amount: Math.floor(Math.random() * 10000) / 100,
    status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
    method: methodOptions[Math.floor(Math.random() * methodOptions.length)],
    category: categoryOptions[Math.floor(Math.random() * categoryOptions.length)],
    email: `user${String(i + 1)}@${domains[Math.floor(Math.random() * domains.length)] ?? 'example.com'}`,
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
  }))
}

export function DataTableAdvancedDemo() {
  const data = React.useMemo(() => generatePayments(200), [])

  const filterableColumns = [
    {
      id: "status",
      title: "Status",
      options: statuses,
    },
    {
      id: "method",
      title: "Method",
      options: methods,
    },
    {
      id: "category",
      title: "Category",
      options: categories,
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Payment History</h2>
        <p className="text-muted-foreground">
          A comprehensive data table with sorting, filtering, pagination, and row selection.
        </p>
      </div>
      <DataTable 
        columns={columns} 
        data={data} 
        searchKey="email"
        filterableColumns={filterableColumns}
      />
    </div>
  )
}
// Import constants from separate file
import { statuses, methods, categories } from './data-table-constants'
