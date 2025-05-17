import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { UserRole } from "@/lib/types"
import { BarChart3Icon, DollarSignIcon, PackageIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DashboardPage() {
  // This is a static version, so we'll simulate a logged-in user with a specific role
  // In a real application, this would come from authentication state
  const userRole: UserRole = "admin" // Change this to "tourist" or "guide" to see different dashboards

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Admin Dashboard */}
      {userRole === "admin" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Payment</p>
                  <h3 className="text-2xl font-bold">৳250,000</h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <DollarSignIcon className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Tour Guides</p>
                  <h3 className="text-2xl font-bold">24</h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <UsersIcon className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Packages</p>
                  <h3 className="text-2xl font-bold">36</h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <PackageIcon className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Clients</p>
                  <h3 className="text-2xl font-bold">128</h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <UsersIcon className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Booking Overview</CardTitle>
                <CardDescription>Monthly booking statistics for the current year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart3Icon className="h-16 w-16 text-muted" />
                  <p className="ml-4 text-muted-foreground">Chart visualization would appear here</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Admin Profile</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Admin" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Admin User</h3>
                <p className="text-muted-foreground mb-4">admin@example.com</p>
                <p className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mb-6">Administrator</p>
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Tourist Dashboard */}
      {userRole === "tourist" && (
        <div>
          <div className="bg-card p-6 rounded-xl shadow mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=100&width=100" alt="Tourist" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Welcome, John Doe!</h2>
                <p className="text-muted-foreground mb-2">john.doe@example.com</p>
                <p className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full inline-block">Tourist</p>
              </div>
              <div className="md:ml-auto flex gap-2">
                <Button variant="outline">Edit Profile</Button>
                <Button>
                  <Link href="/dashboard/join-as-guide">Apply For Tour Guide</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>My Bookings</CardTitle>
                <CardDescription>Manage your tour bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <p className="text-4xl font-bold text-primary mb-2">3</p>
                  <p className="text-muted-foreground">Active Bookings</p>
                </div>
              </CardContent>
              <div className="p-4 pt-0 flex justify-center">
                <Button asChild>
                  <Link href="/dashboard/my-bookings">View Bookings</Link>
                </Button>
              </div>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>My Stories</CardTitle>
                <CardDescription>Share your travel experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <p className="text-4xl font-bold text-primary mb-2">5</p>
                  <p className="text-muted-foreground">Published Stories</p>
                </div>
              </CardContent>
              <div className="p-4 pt-0 flex justify-center">
                <Button asChild>
                  <Link href="/dashboard/manage-stories">Manage Stories</Link>
                </Button>
              </div>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Add Story</CardTitle>
                <CardDescription>Share your latest adventure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <p className="text-muted-foreground mb-2">Create a new travel story</p>
                  <Button asChild>
                    <Link href="/dashboard/add-story">Add New Story</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Package</th>
                      <th className="text-left py-3 px-4">Tour Guide</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Price</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Cox's Bazar Beach Getaway</td>
                      <td className="py-3 px-4">Rahim Ahmed</td>
                      <td className="py-3 px-4">May 15, 2023</td>
                      <td className="py-3 px-4">৳15,000</td>
                      <td className="py-3 px-4">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Pending</span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Sundarbans Mangrove Adventure</td>
                      <td className="py-3 px-4">Fatima Khan</td>
                      <td className="py-3 px-4">June 22, 2023</td>
                      <td className="py-3 px-4">৳25,000</td>
                      <td className="py-3 px-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Accepted</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Sylhet Tea Garden Tour</td>
                      <td className="py-3 px-4">Kamal Hossain</td>
                      <td className="py-3 px-4">July 10, 2023</td>
                      <td className="py-3 px-4">৳12,000</td>
                      <td className="py-3 px-4">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">In Review</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tour Guide Dashboard */}
      {userRole === "guide" && (
        <div>
          <div className="bg-card p-6 rounded-xl shadow mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=100&width=100" alt="Tour Guide" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Welcome, Rahim Ahmed!</h2>
                <p className="text-muted-foreground mb-2">rahim.ahmed@example.com</p>
                <p className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full inline-block">Tour Guide</p>
              </div>
              <div className="md:ml-auto">
                <Button variant="outline">Edit Profile</Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Assigned Tours</CardTitle>
                <CardDescription>Manage your assigned tours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <p className="text-4xl font-bold text-primary mb-2">8</p>
                  <p className="text-muted-foreground">Active Tours</p>
                </div>
              </CardContent>
              <div className="p-4 pt-0 flex justify-center">
                <Button asChild>
                  <Link href="/dashboard/my-assigned-tours">View Tours</Link>
                </Button>
              </div>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>My Stories</CardTitle>
                <CardDescription>Share your tour experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <p className="text-4xl font-bold text-primary mb-2">12</p>
                  <p className="text-muted-foreground">Published Stories</p>
                </div>
              </CardContent>
              <div className="p-4 pt-0 flex justify-center">
                <Button asChild>
                  <Link href="/dashboard/manage-stories">Manage Stories</Link>
                </Button>
              </div>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Add Story</CardTitle>
                <CardDescription>Share your latest tour</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <p className="text-muted-foreground mb-2">Create a new tour story</p>
                  <Button asChild>
                    <Link href="/dashboard/add-story">Add New Story</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Assigned Tours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Package</th>
                      <th className="text-left py-3 px-4">Tourist</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Price</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Cox's Bazar Beach Getaway</td>
                      <td className="py-3 px-4">John Doe</td>
                      <td className="py-3 px-4">May 15, 2023</td>
                      <td className="py-3 px-4">৳15,000</td>
                      <td className="py-3 px-4">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Pending</span>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="outline" size="sm" className="mr-2" disabled>
                          Accept
                        </Button>
                        <Button variant="destructive" size="sm">
                          Reject
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Sundarbans Mangrove Adventure</td>
                      <td className="py-3 px-4">Jane Smith</td>
                      <td className="py-3 px-4">June 22, 2023</td>
                      <td className="py-3 px-4">৳25,000</td>
                      <td className="py-3 px-4">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">In Review</span>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="outline" size="sm" className="mr-2">
                          Accept
                        </Button>
                        <Button variant="destructive" size="sm">
                          Reject
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Sylhet Tea Garden Tour</td>
                      <td className="py-3 px-4">Mike Johnson</td>
                      <td className="py-3 px-4">July 10, 2023</td>
                      <td className="py-3 px-4">৳12,000</td>
                      <td className="py-3 px-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Accepted</span>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="outline" size="sm" disabled>
                          Completed
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
