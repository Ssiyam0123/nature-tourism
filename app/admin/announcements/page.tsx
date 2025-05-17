import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { BellIcon, CalendarIcon, PencilIcon, PlusIcon, TrashIcon } from "lucide-react"
import Image from "next/image"

export default function AdminAnnouncementsPage() {
  // Sample data for announcements
  const announcements = [
    {
      id: "1",
      title: "Summer Special: 20% Off on Beach Tours",
      content:
        "Enjoy a 20% discount on all beach tours booked between June 1 and June 15. Use code SUMMER20 at checkout.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-05-25",
      expiryDate: "2023-06-15",
      status: "active",
    },
    {
      id: "2",
      title: "Early Bird Discount for Sundarbans Tours",
      content: "Book your Sundarbans tour 30 days in advance and get a 15% discount. Limited slots available!",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-06-10",
      expiryDate: "2023-07-31",
      status: "active",
    },
    {
      id: "3",
      title: "Weekend Getaway Package",
      content: "Special weekend packages for Sylhet and Bandarban. Includes accommodation, meals, and guided tours.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-06-18",
      expiryDate: "2023-08-31",
      status: "inactive",
    },
    {
      id: "4",
      title: "Monsoon Season Discounts",
      content:
        "Special discounts for tours during the monsoon season. Experience the beauty of Bangladesh in the rain.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-07-01",
      expiryDate: "2023-09-30",
      status: "scheduled",
    },
  ]

  // Function to get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
      case "inactive":
        return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Inactive</span>
      case "scheduled":
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Scheduled</span>
      default:
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Unknown</span>
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Announcements</h1>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Create Announcement
        </Button>
      </div>

      {/* Create Announcement Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Create New Announcement</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Announcement Title</Label>
              <Input id="title" placeholder="e.g., Summer Special: 20% Off on Beach Tours" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Announcement Content</Label>
              <Textarea id="content" placeholder="Provide details about the offer or announcement..." rows={4} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="image">Announcement Image</Label>
                <Input id="image" type="file" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <div className="relative">
                  <Input id="start-date" type="date" />
                  <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry-date">Expiry Date</Label>
                <div className="relative">
                  <Input id="expiry-date" type="date" />
                  <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button>Create Announcement</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Announcements List */}
      <Card>
        <CardHeader>
          <CardTitle>All Announcements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id}>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="relative h-[150px] rounded-lg overflow-hidden">
                        <Image
                          src={announcement.image || "/placeholder.svg"}
                          alt={announcement.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">{announcement.title}</h3>
                          <div className="flex items-center mt-1">{getStatusBadge(announcement.status)}</div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <PencilIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="h-8 w-8 text-destructive">
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{announcement.content}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <BellIcon className="h-4 w-4 mr-1" />
                          <span>Posted: {new Date(announcement.date).toLocaleDateString()}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: {new Date(announcement.expiryDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of{" "}
              <span className="font-medium">4</span> results
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
