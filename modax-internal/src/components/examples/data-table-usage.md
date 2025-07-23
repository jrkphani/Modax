# Data Table Usage Guide

This guide shows how to use the data table components in your ModAx project.

## Basic Usage

```tsx
import { DataTable } from "@/components/ui/data-table"
import { ColumnDef } from "@tanstack/react-table"

// Define your data type
type User = {
  id: string
  name: string
  email: string
  role: string
}

// Define your columns
const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
]

// Use in your component
export function UserTable({ data }: { data: User[] }) {
  return <DataTable columns={columns} data={data} searchKey="email" />
}
```

## Advanced Usage with Sorting, Filtering, and Actions

```tsx
import { DataTable } from "@/components/ui/data-table"
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header"
import { ColumnDef } from "@tanstack/react-table"
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
import { MoreHorizontal } from "lucide-react"

type User = {
  id: string
  name: string
  email: string
  role: "admin" | "user" | "guest"
  status: "active" | "inactive"
  createdAt: Date
}

const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => {
      const role = row.getValue("role") as string
      return (
        <Badge variant={role === "admin" ? "default" : "secondary"}>
          {role}
        </Badge>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge variant={status === "active" ? "default" : "secondary"}>
          {status}
        </Badge>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original

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
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View profile</DropdownMenuItem>
            <DropdownMenuItem>Edit user</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Delete user
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

// Define filterable columns
const filterableColumns = [
  {
    id: "role",
    title: "Role",
    options: [
      { value: "admin", label: "Admin" },
      { value: "user", label: "User" },
      { value: "guest", label: "Guest" },
    ],
  },
  {
    id: "status",
    title: "Status",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" },
    ],
  },
]

export function AdvancedUserTable({ data }: { data: User[] }) {
  return (
    <DataTable
      columns={columns}
      data={data}
      searchKey="email"
      filterableColumns={filterableColumns}
    />
  )
}
```

## Components Created

### Core Components
- `/src/components/ui/data-table.tsx` - Main data table component
- `/src/components/ui/data-table-column-header.tsx` - Sortable column headers
- `/src/components/ui/data-table-pagination.tsx` - Enhanced pagination controls
- `/src/components/ui/data-table-toolbar.tsx` - Search and filter toolbar
- `/src/components/ui/data-table-view-options.tsx` - Column visibility toggles
- `/src/components/ui/data-table-faceted-filter.tsx` - Multi-select filters

### Demo Components
- `/src/components/examples/data-table-demo.tsx` - Basic demo with payments data
- `/src/components/examples/data-table-advanced-demo.tsx` - Advanced demo with filtering

## Features

1. **Sorting** - Click column headers to sort data
2. **Filtering** - Global search and faceted filters
3. **Pagination** - Navigate through pages with customizable page size
4. **Row Selection** - Select individual or all rows
5. **Column Visibility** - Hide/show columns
6. **Responsive** - Works on mobile and desktop
7. **Accessible** - Keyboard navigation and screen reader support

## Dependencies Installed

- `@tanstack/react-table` - The core table library

All other required UI components (table, button, checkbox, etc.) were already available in your shadcn/ui setup.