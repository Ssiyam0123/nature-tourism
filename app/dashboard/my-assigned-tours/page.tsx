import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MyAssignedToursPage() {
  // Sample data for assigned tours
  const assignedTours = [
    {
      id: "1",
      package: "Cox's Bazar Beach Getaway",
      tourist: "John Doe",
      touristEmail: "john.doe@example.com",
      date: "May 15, 2023",
      price: 15000,
      status: "pending",
    },
    {
      id: "2",
      package: "Sundarbans Mangrove Adventure",
      tourist: "Jane Smith",
      touristEmail: "jane.smith@example.com",
      date: "June 22, 2023",
      price: 25000,
      status: "in-review",
    },
    {
      id: "3",
      package: "Sylhet Tea Garden Tour",
      tourist: "Mike Johnson",
      touristEmail: "mike.johnson@example.com",
      date: "July 10, 2023",
      price: 12000,
      status: "accepted",
    },
    {
      id: "4",
      package: "Saint Martin Island Escape",
      tourist: "Sarah Williams",
      touristEmail: "sarah.williams@example.com",
      date: "August 5, 2023",
      price: 18000,
      status: "rejected",
    },
    {
      id: "5",
      package: "Bandarban Hill Trekking",
      tourist: "David Brown",
      touristEmail: "david.brown@example.com",
      date: "September 12, 2023",
      price: 16000,
      status: "pending",
    },
  ]

  // Function to get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Pending</span>
      case "in-review":
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">In Review</span>
      case "accepted":
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Accepted</span>
      case "rejected":
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Rejected</span>
      default:
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Unknown</span>
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Assigned Tours</h1>

      {/* Filter Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filter Tours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Search</label>
              <Input placeholder="Search tours..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-review">In Review</SelectItem>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
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
                  <SelectItem value="date-desc">Date (Newest First)</SelectItem>
                  <SelectItem value="date-asc">Date (Oldest First)</SelectItem>
                  <SelectItem value="price-high">Price (High to Low)</SelectItem>
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button>Apply Filters</Button>
          </div>
        </CardContent>
      </Card>

      {/* Assigned Tours Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Assigned Tours</CardTitle>
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
                {assignedTours.map((tour) => (
                  <tr key={tour.id} className="border-b">
                    <td className="py-3 px-4">{tour.package}</td>
                    <td className="py-3 px-4">
                      <div>
                        <p>{tour.tourist}</p>
                        <p className="text-xs text-muted-foreground">{tour.touristEmail}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">{tour.date}</td>
                    <td className="py-3 px-4">৳{tour.price.toLocaleString()}</td>
                    <td className="py-3 px-4">{getStatusBadge(tour.status)}</td>
                    <td className="py-3 px-4">
                      {tour.status === "pending" && (
                        <Button variant="destructive" size="sm">
                          Reject
                        </Button>
                      )}
                      {tour.status === "in-review" && (
                        <>
                          <Button size="sm" className="mr-2">
                            Accept
                          </Button>
                          <Button variant="destructive" size="sm">
                            Reject
                          </Button>
                        </>
                      )}
                      {tour.status === "accepted" && (
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      )}
                      {tour.status === "rejected" && (
                        <Button variant="outline" size="sm" disabled>
                          Rejected
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
              <span className="font-medium">5</span> results
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
