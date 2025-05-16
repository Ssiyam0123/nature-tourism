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
import { ArrowUpDown, MoreHorizontal, Pencil, Eye, CheckCircle, XCircle } from "lucide-react"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data
const data = [
  {
    id: "B-1234",
    customer: "Sarah Johnson",
    email: "sarah@example.com",
    package: "Sundarbans Mangrove Forest",
    date: "2023-05-15",
    people: 2,
    amount: 598,
    status: "confirmed",
  },
  {
    id: "B-1235",
    customer: "Michael Chen",
    email: "michael@example.com",
    package: "Bandarban Hill Treks",
    date: "2023-05-14",
    people: 4,
    amount: 1596,
    status: "pending",
  },
  {
    id: "B-1236",
    customer: "Emma Thompson",
    email: "emma@example.com",
    package: "Sylhet Tea Gardens",
    date: "2023-05-13",
    people: 2,
    amount: 398,
    status: "confirmed",
  },
  {
    id: "B-1237",
    customer: "David Wilson",
    email: "david@example.com",
    package: "Cox's Bazar Beach Retreat",
    date: "2023-05-12",
    people: 3,
    amount: 1047,
    status: "cancelled",
  },
  {
    id: "B-1238",
    customer: "Priya Sharma",
    email: "priya@example.com",
    package: "Saint Martin Island Getaway",
    date: "2023-05-11",
    people: 2,
    amount: 658,
    status: "confirmed",
  },
  {
    id: "B-1239",
    customer: "Carlos Rodriguez",
    email: "carlos@example.com",
    package: "Sajek Valley Expedition",
    date: "2023-05-10",
    people: 5,
    amount: 1895,
    status: "pending",
  },
  {
    id: "B-1240",
    customer: "Lisa Wang",
    email: "lisa@example.com",
    package: "Rangamati Lake Adventure",
    date: "2023-05-09",
    people: 2,
    amount: 558,
    status: "confirmed",
  },
  {
    id: "B-1241",
    customer: "John Smith",
    email: "john@example.com",
    package: "Lawachara Rainforest Trail",
    date: "2023-05-08",
    people: 1,
    amount: 189,
    status: "confirmed",
  },
  {
    id: "B-1242",
    customer: "Fatima Ahmed",
    email: "fatima@example.com",
    package: "Ratargul Swamp Forest",
    date: "2023-05-07",
    people: 3,
    amount: 657,
    status: "cancelled",
  },
  {
    id: "B-1243",
    customer: "Robert Johnson",
    email: "robert@example.com",
    package: "Jaflong and Sreemangal Tour",
    date: "2023-05-06",
    people: 2,
    amount: 518,
    status: "confirmed",
  },
]

// Column definitions
const columns: ColumnDef<(typeof data)[0]>[] = [
  {
    accessorKey: "id",
    header: "Booking ID",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "customer",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Customer
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("customer")}</div>,
  },
  {
    accessorKey: "package",
    header: "Package",
    cell: ({ row }) => <div>{row.getValue("package")}</div>,
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("date")}</div>,
  },
  {
    accessorKey: "people",
    header: "People",
    cell: ({ row }) => <div>{row.getValue("people")}</div>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>${row.getValue("amount")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={status === "confirmed" ? "default" : status === "pending" ? "outline" : "destructive"}
          className={
            status === "confirmed"
              ? "bg-green-100 text-green-800 hover:bg-green-200"
              : status === "pending"
                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                : ""
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const booking = row.original

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
              View details
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Pencil className="mr-2 h-4 w-4" />
              Edit booking
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-green-600">
              <CheckCircle className="mr-2 h-4 w-4" />
              Confirm booking
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-red-600">
              <XCircle className="mr-2 h-4 w-4" />
              Cancel booking
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function BookingsTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [statusFilter, setStatusFilter] = useState("all")

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

  // Apply status filter
  React.useEffect(() => {
    if (statusFilter !== "all") {
      table.getColumn("status")?.setFilterValue(statusFilter)
    } else {
      table.getColumn("status")?.setFilterValue("")
    }
  }, [statusFilter, table])

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Search bookings..."
          value={(table.getColumn("customer")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("customer")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <div className="flex items-center gap-2">
          <span className="text-sm">Status:</span>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
          Showing {table.getFilteredRowModel().rows.length} booking(s)
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

import React from "react"
