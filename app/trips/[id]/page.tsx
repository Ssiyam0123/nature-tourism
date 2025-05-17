import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon } from "lucide-react"
import Image from "next/image"
import { TourGuideCard } from "@/components/tour-guide-card"

export default function PackageDetailsPage({ params }: { params: { id: string } }) {
  // Sample data for tour guides
  const tourGuides = [
    {
      id: "1",
      name: "Rahim Ahmed",
      experience: "5 years",
      speciality: "Beach Tours",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "2",
      name: "Fatima Khan",
      experience: "7 years",
      speciality: "Wildlife Tours",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "3",
      name: "Kamal Hossain",
      experience: "4 years",
      speciality: "Mountain Tours",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  // Sample package data
  const packageData = {
    id: params.id,
    title: "Cox's Bazar Beach Getaway",
    type: "Beach",
    price: 15000,
    duration: "3 days, 2 nights",
    location: "Cox's Bazar, Bangladesh",
    description:
      "Experience the world's longest natural sea beach in Cox's Bazar. Enjoy the beautiful sunrise and sunset, relax on the sandy beaches, and explore the local culture and cuisine.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tourPlan: [
      {
        day: "Day 1",
        title: "Arrival and Beach Exploration",
        description:
          "Arrive at Cox's Bazar and check into your hotel. After lunch, visit the main beach and enjoy the sunset. Dinner at a local seafood restaurant.",
      },
      {
        day: "Day 2",
        title: "Inani Beach and Marine Drive",
        description:
          "After breakfast, drive along the Marine Drive to Inani Beach. Explore the coral rocks and enjoy swimming. Lunch at a beachside restaurant. Evening free for shopping at local markets.",
      },
      {
        day: "Day 3",
        title: "Himchari and Departure",
        description:
          "Visit Himchari National Park in the morning. Enjoy the waterfall and panoramic view of the Bay of Bengal. After lunch, depart for your next destination.",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Gallery Section */}
      <section className="mb-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 md:col-span-2 relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src={packageData.images[0] || "/placeholder.svg"}
              alt={packageData.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-3 md:col-span-1 grid grid-cols-2 gap-4">
            {packageData.images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative h-[190px] rounded-xl overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${packageData.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Info Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{packageData.title}</h1>
          <div className="flex items-center mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mr-3">
              {packageData.type}
            </span>
            <span className="text-muted-foreground">
              {packageData.duration} | {packageData.location}
            </span>
          </div>

          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="about">About The Tour</TabsTrigger>
              <TabsTrigger value="plan">Tour Plan</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6">
              <p className="text-lg mb-6">{packageData.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Included</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Accommodation</li>
                    <li>Transportation</li>
                    <li>Breakfast and Dinner</li>
                    <li>Tour Guide</li>
                    <li>Entry Tickets</li>
                  </ul>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Not Included</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Lunch</li>
                    <li>Personal Expenses</li>
                    <li>Optional Activities</li>
                    <li>Travel Insurance</li>
                    <li>Tips</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="plan" className="mt-6">
              <div className="space-y-6">
                {packageData.tourPlan.map((day, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-lg">
                      {day.day}: {day.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{day.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Book This Tour</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="package">Package Name</Label>
                  <Input id="package" value={packageData.title} readOnly />
                </div>
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" value="John Doe" readOnly />
                </div>
                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" value="john.doe@example.com" readOnly />
                </div>
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" value={`৳${packageData.price}`} readOnly />
                </div>
                <div>
                  <Label>Tour Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label htmlFor="guide">Tour Guide</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a tour guide" />
                    </SelectTrigger>
                    <SelectContent>
                      {tourGuides.map((guide) => (
                        <SelectItem key={guide.id} value={guide.id}>
                          {guide.name} - {guide.speciality}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">Book Now</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tour Guides Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Available Tour Guides</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tourGuides.map((guide) => (
            <TourGuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </section>
    </div>
  )
}
