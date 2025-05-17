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
import { fetchUserStatistics, fetchUsers, fetchUsersByRole } from "@/lib/data"
import {
  CheckCircleIcon,
  EditIcon,
  EyeIcon,
  FilterIcon,
  LockIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  ShieldIcon,
  UserIcon,
  UsersIcon,
  XCircleIcon,
} from "lucide-react"
import Image from "next/image"
import { Suspense } from "react"

// Loading component for user stats
function UserStatsLoading() {
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

// User stats component
async function UserStats() {
  const stats = await fetchUserStatistics()

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Users</p>
            <p className="text-2xl font-bold">{stats.total.toLocaleString()}</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <UsersIcon className="h-6 w-6 text-primary" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Tourists</p>
            <p className="text-2xl font-bold">{stats.tourists.toLocaleString()}</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
            <UserIcon className="h-6 w-6 text-green-500" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Tour Guides</p>
            <p className="text-2xl font-bold">{stats.guides.toLocaleString()}</p>
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
              <path d="M8 2h8" />
              <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
              <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
            </svg>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Admins</p>
            <p className="text-2xl font-bold">{stats.admins.toLocaleString()}</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
            <ShieldIcon className="h-6 w-6 text-purple-500" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Loading component for user table
function UserTableLoading() {
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

// User table component for all users
async function AllUsersTable() {
  const users = await fetchUsers()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Join Date</TableHead>
          <TableHead>Bookings</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 relative rounded-full overflow-hidden">
                  <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.role === "admin"
                    ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                    : user.role === "guide"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                }`}
              >
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </div>
            </TableCell>
            <TableCell>
              <div
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.status === "active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                }`}
              >
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </div>
            </TableCell>
            <TableCell>{user.joinDate}</TableCell>
            <TableCell>{user.bookings || 0}</TableCell>
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
                    View Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <EditIcon className="h-4 w-4 mr-2" />
                    Edit User
                  </DropdownMenuItem>
                  {user.status === "active" ? (
                    <DropdownMenuItem>
                      <LockIcon className="h-4 w-4 mr-2" />
                      Deactivate Account
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>
                      <CheckCircleIcon className="h-4 w-4 mr-2" />
                      Activate Account
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <XCircleIcon className="h-4 w-4 mr-2" />
                    Delete Account
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

// User table component for tourists
async function TouristsTable() {
  const tourists = await fetchUsersByRole("tourist")

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Join Date</TableHead>
          <TableHead>Bookings</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tourists.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 relative rounded-full overflow-hidden">
                  <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.status === "active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                }`}
              >
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </div>
            </TableCell>
            <TableCell>{user.joinDate}</TableCell>
            <TableCell>{user.bookings || 0}</TableCell>
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
                    View Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <EditIcon className="h-4 w-4 mr-2" />
                    Edit User
                  </DropdownMenuItem>
                  {user.status === "active" ? (
                    <DropdownMenuItem>
                      <LockIcon className="h-4 w-4 mr-2" />
                      Deactivate Account
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>
                      <CheckCircleIcon className="h-4 w-4 mr-2" />
                      Activate Account
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <XCircleIcon className="h-4 w-4 mr-2" />
                    Delete Account
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

// User table component for guides
async function GuidesTable() {
  const guides = await fetchUsersByRole("guide")

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Join Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {guides.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 relative rounded-full overflow-hidden">
                  <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.status === "active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                }`}
              >
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </div>
            </TableCell>
            <TableCell>{user.joinDate}</TableCell>
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
                    View Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <EditIcon className="h-4 w-4 mr-2" />
                    Edit User
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
                      <path d="M8 2h8" />
                      <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
                      <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
                    </svg>
                    View Assigned Tours
                  </DropdownMenuItem>
                  {user.status === "active" ? (
                    <DropdownMenuItem>
                      <LockIcon className="h-4 w-4 mr-2" />
                      Deactivate Account
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>
                      <CheckCircleIcon className="h-4 w-4 mr-2" />
                      Activate Account
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <XCircleIcon className="h-4 w-4 mr-2" />
                    Delete Account
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

// User table component for admins
async function AdminsTable() {
  const admins = await fetchUsersByRole("admin")

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Join Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {admins.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 relative rounded-full overflow-hidden">
                  <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.status === "active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                }`}
              >
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </div>
            </TableCell>
            <TableCell>{user.joinDate}</TableCell>
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
                    View Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <EditIcon className="h-4 w-4 mr-2" />
                    Edit User
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ShieldIcon className="h-4 w-4 mr-2" />
                    Manage Permissions
                  </DropdownMenuItem>
                  {user.status === "active" ? (
                    <DropdownMenuItem>
                      <LockIcon className="h-4 w-4 mr-2" />
                      Deactivate Account
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>
                      <CheckCircleIcon className="h-4 w-4 mr-2" />
                      Activate Account
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <XCircleIcon className="h-4 w-4 mr-2" />
                    Delete Account
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

export default function AdminUsersPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">User Management</h1>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button>
            <PlusIcon className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* User Stats */}
      <Suspense fallback={<UserStatsLoading />}>
        <UserStats />
      </Suspense>

      {/* User Filters */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Filters</CardTitle>
          <CardDescription>Filter users by various criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Search</label>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="text" placeholder="Search users..." className="pl-8" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Role</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="tourist">Tourist</SelectItem>
                  <SelectItem value="guide">Tour Guide</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
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
              <label className="text-sm font-medium mb-1 block">Join Date</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by join date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
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

      {/* User Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="all">All Users</TabsTrigger>
          <TabsTrigger value="tourists">Tourists</TabsTrigger>
          <TabsTrigger value="guides">Tour Guides</TabsTrigger>
          <TabsTrigger value="admins">Admins</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>All Users</CardTitle>
              <CardDescription>Manage all system users</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<UserTableLoading />}>
                <AllUsersTable />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tourists">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Tourists</CardTitle>
              <CardDescription>Manage tourist accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<UserTableLoading />}>
                <TouristsTable />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Tour Guides</CardTitle>
              <CardDescription>Manage tour guide accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<UserTableLoading />}>
                <GuidesTable />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admins">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Administrators</CardTitle>
              <CardDescription>Manage administrator accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<UserTableLoading />}>
                <AdminsTable />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
