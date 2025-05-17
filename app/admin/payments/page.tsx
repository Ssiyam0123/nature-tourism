import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DownloadIcon, EyeIcon } from "lucide-react"
import Image from "next/image"

export default function AdminPaymentsPage() {
  // Sample data for payments
  const payments = [
    {
      id: "1",
      transactionId: "TXN123456789",
      package: "Cox's Bazar Beach Getaway",
      tourist: {
        name: "John Doe",
        email: "john.doe@example.com",
        image: "/placeholder.svg?height=50&width=50",
      },
      date: "2023-05-15",
      amount: 15000,
      method: "Credit Card",
      status: "completed",
    },
    {
      id: "2",
      transactionId: "TXN987654321",
      package: "Sundarbans Mangrove Adventure",
      tourist: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        image: "/placeholder.svg?height=50&width=50",
      },
      date: "2023-06-22",
      amount: 25000,
      method: "Bank Transfer",
      status: "completed",
    },
    {
      id: "3",
      transactionId: "TXN456789123",
      package: "Sylhet Tea Garden Tour",
      tourist: {
        name: "Mike Johnson",
        email: "mike.johnson@example.com",
        image: "/placeholder.svg?height=50&width=50",
      },
      date: "2023-07-10",
      amount: 12000,
      method: "Mobile Banking",
      status: "pending",
    },
    {
      id: "4",
      transactionId: "TXN789123456",
      package: "Saint Martin Island Escape",
      tourist: {
        name: "Sarah Williams",
        email: "sarah.williams@example.com",
        image: "/placeholder.svg?height=50&width=50",
      },
      date: "2023-08-05",
      amount: 18000,
      method: "Credit Card",
      status: "failed",
    },
    {
      id: "5",
      transactionId: "TXN321654987",
      package: "Bandarban Hill Trekking",
      tourist: {
        name: "David Brown",
        email: "david.brown@example.com",
        image: "/placeholder.svg?height=50&width=50",
      },
      date: "2023-09-12",
      amount: 16000,
      method: "Mobile Banking",
      status: "refunded",
    },
  ]

  // Function to get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Completed</span>
      case "pending":
        return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Pending</span>
      case "failed":
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Failed</span>
      case "refunded":
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Refunded</span>
      default:
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Unknown</span>
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Payment Management</h1>
        <Button>
          <DownloadIcon className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Filter Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filter Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Search by Transaction ID</label>
              <Input placeholder="Search payments..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Filter by Status</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                  <SelectItem value="refunded">Refunded</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Filter by Method</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Methods</SelectItem>
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  <SelectItem value="mobile-banking">Mobile Banking</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date Range</label>
              <Input type="date" />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button>Apply Filters</Button>
          </div>
        </CardContent>
      </Card>

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Transaction ID</th>
                  <th className="text-left py-3 px-4">Tourist</th>
                  <th className="text-left py-3 px-4">Package</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Method</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b">
                    <td className="py-3 px-4">{payment.transactionId}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                          <Image
                            src={payment.tourist.image || "/placeholder.svg"}
                            alt={payment.tourist.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{payment.tourist.name}</p>
                          <p className="text-xs text-muted-foreground">{payment.tourist.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{payment.package}</td>
                    <td className="py-3 px-4">{new Date(payment.date).toLocaleDateString()}</td>
                    <td className="py-3 px-4">৳{payment.amount.toLocaleString()}</td>
                    <td className="py-3 px-4">{payment.method}</td>
                    <td className="py-3 px-4">{getStatusBadge(payment.status)}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <EyeIcon className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <DownloadIcon className="h-4 w-4 mr-1" />
                          Receipt
                        </Button>
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
