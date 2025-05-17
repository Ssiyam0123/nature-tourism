import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fetchPackages, fetchPackagesByStatus, fetchPackageStatistics } from "@/lib/data"
import { EditIcon, EyeIcon, FilterIcon, MoreHorizontalIcon, PlusIcon, SearchIcon, TrashIcon } from "lucide-react"
import Image from "next/image"
import { Suspense } from "react"

// Loading component for package stats
function PackageStatsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {[...Array(4)].map((_, i) => (
        <Card key={i}>
          <CardContent className="p-4">
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-8 w-16" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Package stats component
async function PackageStats() {
  const stats = await fetchPackageStatistics()

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Packages</p>
            <p className="text-2xl font-bold">{stats.total}</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Active Packages</p>
            <p className="text-2xl font-bold">{stats.active}</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-green-500"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Bookings</p>
            <p className="text-2xl font-bold">352</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-blue-500"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Revenue</p>
            <p className="text-2xl font-bold">৳450,000</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-yellow-500"
            >
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Loading component for package table
function PackageTableLoading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
    </div>
  )
}

// Package table component for all packages
async function AllPackagesTable() {
  const packages = await fetchPackages()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Package</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Bookings</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {packages.map((pkg) => (
          <TableRow key={pkg.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="h-20 w-28 relative rounded-md overflow-hidden">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">{pkg.name}</div>
                  <div className="text-sm text-muted-foreground">ID: {pkg.id}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{pkg.category}</TableCell>
            <TableCell>{pkg.formattedPrice}</TableCell>
            <TableCell>{pkg.duration}</TableCell>
            <TableCell>{pkg.location}</TableCell>
            <TableCell>
              <div
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  pkg.status === "active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                }`}
              >
                {pkg.status.charAt(0).toUpperCase() + pkg.status.slice(1)}
              </div>
            </TableCell>
            <TableCell>{pkg.bookings}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <EyeIcon className="h-4 w-4 mr-2" />
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <EditIcon className="h-4 w-4 mr-2" />
                    Edit Package
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <TrashIcon className="h-4 w-4 mr-2" />
                    Delete Package
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

// Package table component for active packages
async function ActivePackagesTable() {
  const packages = await fetchPackagesByStatus("active")

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Package</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Bookings</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {packages.map((pkg) => (
          <TableRow key={pkg.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="h-20 w-28 relative rounded-md overflow-hidden">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">{pkg.name}</div>
                  <div className="text-sm text-muted-foreground">ID: {pkg.id}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{pkg.category}</TableCell>
            <TableCell>{pkg.formattedPrice}</TableCell>
            <TableCell>{pkg.duration}</TableCell>
            <TableCell>{pkg.location}</TableCell>
            <TableCell>{pkg.bookings}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <EyeIcon className="h-4 w-4 mr-2" />
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <EditIcon className="h-4 w-4 mr-2" />
                    Edit Package
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <TrashIcon className="h-4 w-4 mr-2" />
                    Delete Package
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

// Package table component for inactive packages
async function InactivePackagesTable() {
  const packages = await fetchPackagesByStatus("inactive")

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Package</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Bookings</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {packages.map((pkg) => (
          <TableRow key={pkg.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="h-20 w-28 relative rounded-md overflow-hidden">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">{pkg.name}</div>
                  <div className="text-sm text-muted-foreground">ID: {pkg.id}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{pkg.category}</TableCell>
            <TableCell>{pkg.formattedPrice}</TableCell>
            <TableCell>{pkg.duration}</TableCell>
            <TableCell>{pkg.location}</TableCell>
            <TableCell>{pkg.bookings}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <EyeIcon className="h-4 w-4 mr-2" />
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <EditIcon className="h-4 w-4 mr-2" />
                    Edit Package
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 mr-2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Activate Package
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <TrashIcon className="h-4 w-4 mr-2" />
                    Delete Package
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default function AdminPackagesPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Package Management</h1>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button>
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Package
          </Button>
        </div>
      </div>

      {/* Package Stats */}
      <Suspense fallback={<PackageStatsLoading />}>
        <PackageStats />
      </Suspense>

      {/* Package Filters */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Filters</CardTitle>
          <CardDescription>Filter packages by various criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Search</label>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="text" placeholder="Search packages..." className="pl-8" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Category</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="beach">Beach</SelectItem>
                  <SelectItem value="wildlife">Wildlife</SelectItem>
                  <SelectItem value="nature">Nature</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="historical">Historical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Status</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Price Range</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under ৳15,000</SelectItem>
                  <SelectItem value="medium">৳15,000 - ৳20,000</SelectItem>
                  <SelectItem value="high">Above ৳20,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="outline" size="sm" className="mr-2">
              Reset Filters
            </Button>
            <Button size="sm">
              <FilterIcon className="h-4 w-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Package Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="all">All Packages</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>All Packages</CardTitle>
              <CardDescription>Manage all tour packages</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<PackageTableLoading />}>
                <AllPackagesTable />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Active Packages</CardTitle>
              <CardDescription>All currently active tour packages</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<PackageTableLoading />}>
                <ActivePackagesTable />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inactive">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Inactive Packages</CardTitle>
              <CardDescription>All currently inactive tour packages</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<PackageTableLoading />}>
                <InactivePackagesTable />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
