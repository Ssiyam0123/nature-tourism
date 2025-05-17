import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function ManageUsersPage() {
  // Sample data for users
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "tourist",
      image: "/placeholder.svg?height=50&width=50",
      joinDate: "2023-01-15",
    },
    {
      id: "2",
      name: "Rahim Ahmed",
      email: "rahim.ahmed@example.com",
      role: "guide",
      image: "/placeholder.svg?height=50&width=50",
      joinDate: "2023-02-22",
    },
    {
      id: "3",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "tourist",
      image: "/placeholder.svg?height=50&width=50",
      joinDate: "2023-03-10",
    },
    {
      id: "4",
      name: "Fatima Khan",
      email: "fatima.khan@example.com",
      role: "guide",
      image: "/placeholder.svg?height=50&width=50",
      joinDate: "2023-04-05",
    },
    {
      id: "5",
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      role: "tourist",
      image: "/placeholder.svg?height=50&width=50",
      joinDate: "2023-05-18",
    },
    {
      id: "6",
      name: "Admin User",
      email: "admin@example.com",
      role: "admin",
      image: "/placeholder.svg?height=50&width=50",
      joinDate: "2023-01-01",
    },
    {
      id: "7",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      role: "tourist",
      image: "/placeholder.svg?height=50&width=50",
      joinDate: "2023-06-20",
    },
    {
      id: "8",
      name: "Kamal Hossain",
      email: "kamal.hossain@example.com",
      role: "guide",
      image: "/placeholder.svg?height=50&width=50",
      joinDate: "2023-07-12",
    },
    {
      id: "9",
      name: "David Brown",
      email: "david.brown@example.com",
      role: "tourist",
      image: "/placeholder.svg?height=50&width=50",
      joinDate: "2023-08-05",
    },
    {
      id: "10",
      name: "Nusrat Jahan",
      email: "nusrat.jahan@example.com",
      role: "guide",
      image: "/placeholder.svg?height=50&width=50",
      joinDate: "2023-09-15",
    },
  ]

  // Function to get role badge
  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Admin</span>
      case "guide":
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Tour Guide</span>
      case "tourist":
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Tourist</span>
      default:
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Unknown</span>
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

      {/* Filter Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filter Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Search by Name/Email</label>
              <Input placeholder="Search users..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Filter by Role</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="guide">Tour Guide</SelectItem>
                  <SelectItem value="tourist">Tourist</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Sort By</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select sort option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="date-desc">Join Date (Newest First)</SelectItem>
                  <SelectItem value="date-asc">Join Date (Oldest First)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button>Apply Filters</Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">User</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Role</th>
                  <th className="text-left py-3 px-4">Join Date</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                          <Image src={user.image || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                        </div>
                        <span>{user.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{getRoleBadge(user.role)}</td>
                    <td className="py-3 px-4">{new Date(user.joinDate).toLocaleDateString()}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        {user.role !== "admin" && (
                          <Select>
                            <SelectTrigger className="h-9 w-[130px]">
                              <SelectValue placeholder="Change Role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">Make Admin</SelectItem>
                              <SelectItem value="guide">Make Tour Guide</SelectItem>
                              <SelectItem value="tourist">Make Tourist</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
              <span className="font-medium">10</span> results
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
