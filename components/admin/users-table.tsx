"use client"

import { useState } from "react"
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type SortingState,
  getSortedRowModel,
  type ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Pencil, Trash2, Eye, Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample data
const data = [
  {
    id: "USR001",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    avatar: "/images/author-1.jpg",
    role: "customer",
    status: "active",
    joinDate: "2023-01-15",
    bookings: 5,
  },
  {
    id: "USR002",
    name: "Michael Chen",
    email: "michael@example.com",
    avatar: "/images/author-2.jpg",
    role: "customer",
    status: "active",
    joinDate: "2023-02-20",
    bookings: 3,
  },
  {
    id: "USR003",
    name: "Emma Thompson",
    email: "emma@example.com",
    avatar: "/images/author-5.jpg",
    role: "customer",
    status: "inactive",
    joinDate: "2023-01-05",
    bookings: 2,
  },
  {
    id: "USR004",
    name: "David Wilson",
    email: "david@example.com",
    avatar: "/images/author-4.jpg",
    role: "customer",
    status: "active",
    joinDate: "2023-03-10",
    bookings: 1,
  },
  {
    id: "USR005",
    name: "Priya Sharma",
    email: "priya@example.com",
    avatar: "/images/author-3.jpg",
    role: "guide",
    status: "active",
    joinDate: "2022-11-15",
    bookings: 0,
  },
  {
    id: "USR006",
    name: "Carlos Rodriguez",
    email: "carlos@example.com",
    avatar: "/images/author-6.jpg",
    role: "customer",
    status: "active",
    joinDate: "2023-04-02",
    bookings: 1,
  },
  {
    id: "USR007",
    name: "Amir Rahman",
    email: "amir@example.com",
    avatar: "/images/team-1.jpg",
    role: "admin",
    status: "active",
    joinDate: "2022-01-10",
    bookings: 0,
  },
  {
    id: "USR008",
    name: "Nadia Khan",
    email: "nadia@example.com",
    avatar: "/images/team-2.jpg",
    role: "guide",
    status: "active",
    joinDate: "2022-05-20",
    bookings: 0,
  },
  {
    id: "USR009",
    name: "Kamal Hossain",
    email: "kamal@example.com",
    avatar: "/images/team-3.jpg",
    role: "guide",
    status: "active",
    joinDate: "2022-06-15",
    bookings: 0,
  },
  {
    id: "USR010",
    name: "Fatima Ahmed",
    email: "fatima@example.com",
    avatar: "/images/team-4.jpg",
    role: "admin",
    status: "active",
    joinDate: "2022-02-28",
    bookings: 0,
  },
]

// Column definitions
const columns: ColumnDef<(typeof data)[0]>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={row.original.avatar || "/placeholder.svg"} alt={row.getValue("name")} />
          <AvatarFallback>{row.getValue("name").charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{row.getValue("name")}</div>
          <div className="text-sm text-muted-foreground">{row.original.email}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role") as string
      return (
        <Badge
          variant="outline"
          className={
            role === "admin"
              ? "bg-purple-100 text-purple-800 hover:bg-purple-200"
              : role === "guide"
                ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }
        >
          {role}
        </Badge>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={status === "active" ? "default" : "outline"}
          className={
            status === "active"
              ? "bg-green-100 text-green-800 hover:bg-green-200"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "joinDate",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Join Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("joinDate")}</div>,
  },
  {
    accessorKey: "bookings",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Bookings
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("bookings")}</div>,
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
            <DropdownMenuItem className="cursor-pointer">
              <Eye className="mr-2 h-4 w-4" />
              View profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Pencil className="mr-2 h-4 w-4" />
              Edit user
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Mail className="mr-2 h-4 w-4" />
              Send email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-amber-600">
              <Lock className="mr-2 h-4 w-4" />
              Reset password
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-red-600">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete user
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function UsersTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Search users..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <Button className="bg-green-600 hover:bg-green-700">Add New User</Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing {table.getFilteredRowModel().rows.length} user(s)
        </div>
        <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div>
    </div>
  )
}
