import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckIcon, EyeIcon, XIcon } from "lucide-react"
import Image from "next/image"

export default function GuideApplicationsPage() {
  // Sample data for guide applications
  const applications = [
    {
      id: "1",
      name: "Ahmed Khan",
      email: "ahmed.khan@example.com",
      title: "Experienced Beach Tour Guide",
      experience: "5 years",
      speciality: "Beach Tours",
      image: "/placeholder.svg?height=50&width=50",
      date: "2023-05-15",
      status: "pending",
    },
    {
      id: "2",
      name: "Nadia Rahman",
      email: "nadia.rahman@example.com",
      title: "Wildlife Photography Tour Guide",
      experience: "3 years",
      speciality: "Wildlife Tours",
      image: "/placeholder.svg?height=50&width=50",
      date: "2023-06-22",
      status: "pending",
    },
    {
      id: "3",
      name: "Karim Ali",
      email: "karim.ali@example.com",
      title: "Mountain Trekking Expert",
      experience: "7 years",
      speciality: "Adventure Tours",
      image: "/placeholder.svg?height=50&width=50",
      date: "2023-07-10",
      status: "approved",
    },
    {
      id: "4",
      name: "Sadia Islam",
      email: "sadia.islam@example.com",
      title: "Cultural Heritage Tour Guide",
      experience: "4 years",
      speciality: "Cultural Tours",
      image: "/placeholder.svg?height=50&width=50",
      date: "2023-08-05",
      status: "pending",
    },
    {
      id: "5",
      name: "Rafiq Hasan",
      email: "rafiq.hasan@example.com",
      title: "Historical Sites Specialist",
      experience: "6 years",
      speciality: "Historical Tours",
      image: "/placeholder.svg?height=50&width=50",
      date: "2023-09-12",
      status: "rejected",
    },
  ]

  // Function to get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Pending</span>
      case "approved":
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Approved</span>
      case "rejected":
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Rejected</span>
      default:
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Unknown</span>
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tour Guide Applications</h1>

      {/* Filter Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filter Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Search by Name/Email</label>
              <Input placeholder="Search applications..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Filter by Status</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Filter by Speciality</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select speciality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialities</SelectItem>
                  <SelectItem value="beach">Beach Tours</SelectItem>
                  <SelectItem value="wildlife">Wildlife Tours</SelectItem>
                  <SelectItem value="adventure">Adventure Tours</SelectItem>
                  <SelectItem value="cultural">Cultural Tours</SelectItem>
                  <SelectItem value="historical">Historical Tours</SelectItem>
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
                  <SelectItem value="experience-high">Experience (High to Low)</SelectItem>
                  <SelectItem value="experience-low">Experience (Low to High)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button>Apply Filters</Button>
          </div>
        </CardContent>
      </Card>

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Applicant</th>
                  <th className="text-left py-3 px-4">Application Title</th>
                  <th className="text-left py-3 px-4">Experience</th>
                  <th className="text-left py-3 px-4">Speciality</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application) => (
                  <tr key={application.id} className="border-b">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                          <Image
                            src={application.image || "/placeholder.svg"}
                            alt={application.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p>{application.name}</p>
                          <p className="text-xs text-muted-foreground">{application.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{application.title}</td>
                    <td className="py-3 px-4">{application.experience}</td>
                    <td className="py-3 px-4">{application.speciality}</td>
                    <td className="py-3 px-4">{new Date(application.date).toLocaleDateString()}</td>
                    <td className="py-3 px-4">{getStatusBadge(application.status)}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <EyeIcon className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        {application.status === "pending" && (
                          <>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <CheckIcon className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button variant="destructive" size="sm">
                              <XIcon className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </>
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
