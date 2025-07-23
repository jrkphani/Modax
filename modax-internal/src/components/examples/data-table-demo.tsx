import * as React from "react"
import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Payment {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  createdAt: Date
}

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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
      return (
        <Badge
          variant={
            status === "success"
              ? "default"
              : status === "failed"
              ? "destructive"
              : "secondary"
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
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
      const date = row.getValue("createdAt")
      return (
        <div className="text-muted-foreground">
          {(date).toLocaleDateString()}
        </div>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
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

// Generate sample data
function generatePayments(count: number): Payment[] {
  const statuses: Payment["status"][] = ["pending", "processing", "success", "failed"]
  const domains = ["gmail.com", "outlook.com", "company.com", "example.com"]
  
  return Array.from({ length: count }, (_, i) => ({
    id: `PAY-${(i + 1).toString().padStart(4, "0")}`,
    amount: Math.floor(Math.random() * 10000) / 100,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    email: `user${String(i + 1)}@${domains[Math.floor(Math.random() * domains.length)] ?? 'example.com'}`,
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
  }))
}

export function DataTableDemo() {
  const data = React.useMemo(() => generatePayments(100), [])

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      <DataTable columns={columns} data={data} searchKey="email" />
    </div>
  )
}
// Import constants from separate file  
import { statuses } from './data-table-constants'
