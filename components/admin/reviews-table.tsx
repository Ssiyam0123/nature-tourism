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
import { ArrowUpDown, MoreHorizontal, Eye, CheckCircle, XCircle, Flag } from "lucide-react"
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
    id: "REV001",
    customer: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: "/images/author-1.jpg",
    },
    package: "Sundarbans Mangrove Forest",
    rating: 5,
    date: "2023-05-10",
    status: "published",
    comment:
      "This tour exceeded all my expectations! Our guide Rahul was incredibly knowledgeable about the Sundarbans ecosystem and wildlife. We were lucky enough to spot a Bengal tiger from our boat, which was an absolutely magical experience.",
  },
  {
    id: "REV002",
    customer: {
      name: "Michael Chen",
      email: "michael@example.com",
      avatar: "/images/author-2.jpg",
    },
    package: "Bandarban Hill Treks",
    rating: 5,
    date: "2023-04-22",
    status: "published",
    comment:
      "An unforgettable experience in the Bandarban hills! The views were breathtaking and our guide was excellent. The trek was challenging but very rewarding.",
  },
  {
    id: "REV003",
    customer: {
      name: "Emma Thompson",
      email: "emma@example.com",
      avatar: "/images/author-5.jpg",
    },
    package: "Sylhet Tea Gardens",
    rating: 4,
    date: "2023-03-15",
    status: "published",
    comment:
      "Great tour overall! The Sylhet tea gardens are beautiful, and our guide was very knowledgeable. The only reason I'm giving 4 stars instead of 5 is that the food options were somewhat limited for vegetarians.",
  },
  {
    id: "REV004",
    customer: {
      name: "David Wilson",
      email: "david@example.com",
      avatar: "/images/author-4.jpg",
    },
    package: "Cox's Bazar Beach Retreat",
    rating: 3,
    date: "2023-02-28",
    status: "pending",
    comment:
      "The beach was beautiful but the accommodations didn't quite match what was advertised. The staff was friendly though and tried their best to make our stay comfortable.",
  },
  {
    id: "REV005",
    customer: {
      name: "Priya Sharma",
      email: "priya@example.com",
      avatar: "/images/author-3.jpg",
    },
    package: "Saint Martin Island Getaway",
    rating: 5,
    date: "2023-01-17",
    status: "published",
    comment:
      "Saint Martin Island is a paradise! Crystal clear waters, pristine beaches, and amazing seafood. Our guide was fantastic and showed us all the best spots on the island.",
  },
  {
    id: "REV006",
    customer: {
      name: "Carlos Rodriguez",
      email: "carlos@example.com",
      avatar: "/images/author-6.jpg",
    },
    package: "Rangamati Lake Adventure",
    rating: 2,
    date: "2022-12-05",
    status: "rejected",
    comment:
      "Disappointing experience. The boat was overcrowded and the guide didn't seem very knowledgeable. The scenery was nice but not worth the price we paid.",
  },
  {
    id: "REV007",
    customer: {
      name: "Lisa Wang",
      email: "lisa@example.com",
      avatar: "/placeholder.svg",
    },
    package: "Lawachara Rainforest Trail",
    rating: 5,
    date: "2023-05-05",
    status: "pending",
    comment:
      "The rainforest was magical! We saw so many different birds and even spotted a few monkeys. The trails were well-maintained and our guide was excellent.",
  },
  {
    id: "REV008",
    customer: {
      name: "John Smith",
      email: "john@example.com",
      avatar: "/placeholder.svg",
    },
    package: "Sajek Valley Expedition",
    rating: 4,
    date: "2023-04-18",
    status: "published",
    comment:
      "Sajek Valley offers some of the most breathtaking views I've ever seen. The journey was a bit rough but absolutely worth it. Our guide was very helpful throughout the trip.",
  },
  {
    id: "REV009",
    customer: {
      name: "Fatima Ahmed",
      email: "fatima@example.com",
      avatar: "/placeholder.svg",
    },
    package: "Ratargul Swamp Forest",
    rating: 5,
    date: "2023-03-22",
    status: "published",
    comment:
      "The swamp forest was unlike anything I've seen before! The boat ride through the flooded forest was magical, especially in the early morning light. Highly recommended!",
  },
  {
    id: "REV010",
    customer: {
      name: "Robert Johnson",
      email: "robert@example.com",
      avatar: "/placeholder.svg",
    },
    package: "Jaflong and Sreemangal Tour",
    rating: 4,
    date: "2023-02-14",
    status: "pending",
    comment:
      "A great combination tour! Jaflong's stone collection area was interesting to see, and the tea gardens of Sreemangal were beautiful. The accommodations were comfortable and the food was excellent.",
  },
]

// Column definitions
const columns: ColumnDef<(typeof data)[0]>[] = [
  {
    accessorKey: "id",
    header: "Review ID",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => {
      const customer = row.getValue("customer") as (typeof data)[0]["customer"]
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
            <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{customer.name}</div>
            <div className="text-sm text-muted-foreground">{customer.email}</div>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "package",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Package
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("package")}</div>,
  },
  {
    accessorKey: "rating",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Rating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const rating = row.getValue("rating") as number
      return (
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )
    },
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={status === "published" ? "default" : status === "pending" ? "outline" : "destructive"}
          className={
            status === "published"
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
      const review = row.original

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
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-green-600">
              <CheckCircle className="mr-2 h-4 w-4" />
              Approve
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-red-600">
              <XCircle className="mr-2 h-4 w-4" />
              Reject
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-amber-600">
              <Flag className="mr-2 h-4 w-4" />
              Flag
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function ReviewsTable() {
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
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter reviews..."
          value={(table.getColumn("package")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("package")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
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
        <div className="flex-1 text-sm text-muted-foreground">{table.getFilteredRowModel().rows.length} review(s)</div>
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
