import Link from "next/link"
import { ArrowLeft, Check, X, Flag, MessageSquare, Star, User, Calendar, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function ReviewDetailPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the review data based on the ID
  // For this static version, we'll just use sample data
  const review = {
    id: "REV001",
    customer: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: "/images/author-1.jpg",
      joinDate: "2023-01-15",
      totalBookings: 5,
      totalReviews: 4,
    },
    package: {
      id: "PKG001",
      title: "Sundarbans Mangrove Forest",
      type: "Wildlife",
      price: 299,
      duration: "3 Days, 2 Nights",
    },
    booking: {
      id: "B-1234",
      date: "2023-04-10",
      completedDate: "2023-04-12",
      people: 2,
      amount: 598,
    },
    rating: 5,
    date: "2023-05-10",
    status: "published",
    comment:
      "This tour exceeded all my expectations! Our guide Rahul was incredibly knowledgeable about the Sundarbans ecosystem and wildlife. We were lucky enough to spot a Bengal tiger from our boat, which was an absolutely magical experience. The accommodations on the boat were comfortable, and the food was delicious. I highly recommend this tour to anyone interested in wildlife and nature.",
    response:
      "Thank you for your wonderful review, Sarah! We're thrilled that you enjoyed your Sundarbans experience and were lucky enough to spot a tiger. We hope to welcome you back for another adventure soon!",
    flags: 0,
    helpfulCount: 12,
    photos: ["/images/review-photo-1.jpg", "/images/review-photo-2.jpg", "/images/review-photo-3.jpg"],
    history: [
      {
        action: "Review submitted",
        date: "2023-05-10 14:23",
        user: "Sarah Johnson",
      },
      {
        action: "Review approved",
        date: "2023-05-10 16:45",
        user: "Admin",
      },
      {
        action: "Response added",
        date: "2023-05-11 09:12",
        user: "Admin",
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/admin/reviews" className="mr-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Review Details</h1>
            <p className="text-muted-foreground">Review ID: {review.id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
            <Check className="mr-2 h-4 w-4" /> Approve
          </Button>
          <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
            <X className="mr-2 h-4 w-4" /> Reject
          </Button>
          <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50">
            <Flag className="mr-2 h-4 w-4" /> Flag
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Review Content */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Review Content</CardTitle>
              <CardDescription>Review submitted on {review.date}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <Badge
                  variant={
                    review.status === "published" ? "default" : review.status === "pending" ? "outline" : "destructive"
                  }
                  className={
                    review.status === "published"
                      ? "bg-green-100 text-green-800 hover:bg-green-200"
                      : review.status === "pending"
                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                        : ""
                  }
                >
                  {review.status}
                </Badge>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800">{review.comment}</p>
              </div>

              {review.photos && review.photos.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Photos</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {review.photos.map((photo, index) => (
                      <div key={index} className="relative h-24 rounded-md overflow-hidden bg-gray-100">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                          Photo {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {review.response && (
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Response</h3>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800">{review.response}</p>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Add or Edit Response</h3>
                <Textarea
                  placeholder="Enter your response to this review..."
                  defaultValue={review.response || ""}
                  rows={4}
                />
                <div className="flex justify-end mt-2">
                  <Button className="bg-green-600 hover:bg-green-700">Save Response</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Review History</CardTitle>
              <CardDescription>Timeline of actions taken on this review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {review.history.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.action}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{item.date}</span>
                        <span className="mx-2">•</span>
                        <span>{item.user}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={review.customer.avatar || "/placeholder.svg"} alt={review.customer.name} />
                  <AvatarFallback>{review.customer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-gray-900">{review.customer.name}</h3>
                  <p className="text-sm text-gray-500">{review.customer.email}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <div className="flex items-center text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    <span className="text-sm">Member Since</span>
                  </div>
                  <span className="text-sm font-medium">{review.customer.joinDate}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center text-gray-600">
                    <Package className="h-4 w-4 mr-2" />
                    <span className="text-sm">Total Bookings</span>
                  </div>
                  <span className="text-sm font-medium">{review.customer.totalBookings}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center text-gray-600">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    <span className="text-sm">Total Reviews</span>
                  </div>
                  <span className="text-sm font-medium">{review.customer.totalReviews}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <Button variant="outline" className="w-full">
                View Customer Profile
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Package Information</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-medium text-gray-900 mb-2">{review.package.title}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div className="flex items-center text-gray-600">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{review.package.type}</Badge>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Duration</span>
                  </div>
                  <span className="text-sm font-medium">{review.package.duration}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">Price</span>
                  </div>
                  <span className="text-sm font-medium">${review.package.price}/person</span>
                </div>
              </div>

              <Separator className="my-4" />

              <Button variant="outline" className="w-full">
                View Package Details
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Booking Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                      />
                    </svg>
                    <span className="text-sm">Booking ID</span>
                  </div>
                  <span className="text-sm font-medium">{review.booking.id}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Booking Date</span>
                  </div>
                  <span className="text-sm font-medium">{review.booking.date}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Completed Date</span>
                  </div>
                  <span className="text-sm font-medium">{review.booking.completedDate}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    <span className="text-sm">Group Size</span>
                  </div>
                  <span className="text-sm font-medium">{review.booking.people} people</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">Total Amount</span>
                  </div>
                  <span className="text-sm font-medium">${review.booking.amount}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <Button variant="outline" className="w-full">
                View Booking Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
