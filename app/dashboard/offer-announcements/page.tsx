import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BellIcon, CalendarIcon, TrashIcon } from "lucide-react"
import Image from "next/image"

export default function OfferAnnouncementsPage() {
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
    },
    {
      id: "2",
      title: "Early Bird Discount for Sundarbans Tours",
      content: "Book your Sundarbans tour 30 days in advance and get a 15% discount. Limited slots available!",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-06-10",
      expiryDate: "2023-07-31",
    },
    {
      id: "3",
      title: "Weekend Getaway Package",
      content: "Special weekend packages for Sylhet and Bandarban. Includes accommodation, meals, and guided tours.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-06-18",
      expiryDate: "2023-08-31",
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Offer Announcements</h1>

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
      <h2 className="text-2xl font-bold mb-4">Current Announcements</h2>
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
                    <h3 className="font-bold text-lg">{announcement.title}</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <TrashIcon className="h-4 w-4 text-destructive" />
                    </Button>
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
    </div>
  )
}
