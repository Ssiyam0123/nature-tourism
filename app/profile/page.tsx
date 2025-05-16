import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Calendar, Edit, Camera, LogOut } from "lucide-react"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="relative h-48 bg-green-600">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white"
              >
                <Edit className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative px-6 py-8 flex flex-col md:flex-row items-center md:items-end">
              <div className="absolute -top-16 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white">
                    <Image src="/images/author-1.jpg" alt="Profile" fill className="object-cover" />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute bottom-0 right-0 bg-white rounded-full shadow-md hover:bg-gray-100"
                  >
                    <Camera className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>
              </div>
              <div className="mt-16 md:mt-0 md:ml-36 text-center md:text-left flex-1">
                <h1 className="text-2xl font-bold text-gray-900">Sarah Johnson</h1>
                <p className="text-gray-600">Nature enthusiast and avid traveler</p>
                <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">5 Tours Completed</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Member since 2022</Badge>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex gap-3">
                <Button className="bg-green-600 hover:bg-green-700">Edit Profile</Button>
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                  <LogOut className="mr-2 h-4 w-4" /> Log Out
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="reviews">My Reviews</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="text-gray-900">New York, USA</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="text-gray-900">sarah@example.com</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="text-gray-900">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Member Since</p>
                          <p className="text-gray-900">January 15, 2022</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Travel Preferences</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Favorite Destinations</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Sundarbans</Badge>
                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Bandarban</Badge>
                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Cox's Bazar</Badge>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Interests</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Wildlife</Badge>
                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Hiking</Badge>
                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Photography</Badge>
                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Cultural</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:col-span-2 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>About Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        I'm a passionate traveler and nature enthusiast who loves exploring new places and experiencing
                        different cultures. I have a particular interest in wildlife conservation and sustainable
                        tourism. The Sundarbans mangrove forest has been my favorite destination so far, where I was
                        lucky enough to spot a Bengal tiger in the wild!
                      </p>
                      <p className="text-gray-700 mt-4">
                        When I'm not traveling, I enjoy photography, hiking, and learning about environmental
                        conservation. I'm always planning my next adventure and looking forward to discovering more of
                        Bangladesh's natural wonders.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex">
                          <div className="mr-4 flex-shrink-0">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                              <Calendar className="h-6 w-6 text-green-600" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">Booked a new tour</h4>
                            <p className="text-gray-600">Sylhet Tea Gardens - 2 Days, 1 Night</p>
                            <p className="text-sm text-gray-500 mt-1">May 10, 2023</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mr-4 flex-shrink-0">
                            <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-yellow-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">Wrote a review</h4>
                            <p className="text-gray-600">Sundarbans Mangrove Forest - 5 stars</p>
                            <p className="text-sm text-gray-500 mt-1">April 22, 2023</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mr-4 flex-shrink-0">
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">Completed a tour</h4>
                            <p className="text-gray-600">Bandarban Hill Treks - 5 Days, 4 Nights</p>
                            <p className="text-sm text-gray-500 mt-1">March 15, 2023</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>My Bookings</CardTitle>
                  <CardDescription>View and manage your tour bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-200">Upcoming</Badge>
                            <h3 className="text-xl font-bold text-gray-900">Sylhet Tea Gardens</h3>
                            <div className="flex items-center text-gray-600 mt-1">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>June 15-16, 2023</span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Confirmed</Badge>
                            <p className="text-gray-600 mt-1">Booking ID: B-1236</p>
                          </div>
                        </div>
                        <div className="mt-6 border-t border-gray-100 pt-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Package</p>
                              <p className="font-medium text-gray-900">2 Days, 1 Night</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Guests</p>
                              <p className="font-medium text-gray-900">2 Adults</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Total Amount</p>
                              <p className="font-medium text-gray-900">$398</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                          <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                            Cancel Booking
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <Badge className="mb-2 bg-gray-100 text-gray-800 hover:bg-gray-200">Completed</Badge>
                            <h3 className="text-xl font-bold text-gray-900">Sundarbans Mangrove Forest</h3>
                            <div className="flex items-center text-gray-600 mt-1">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>April 10-12, 2023</span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completed</Badge>
                            <p className="text-gray-600 mt-1">Booking ID: B-1234</p>
                          </div>
                        </div>
                        <div className="mt-6 border-t border-gray-100 pt-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Package</p>
                              <p className="font-medium text-gray-900">3 Days, 2 Nights</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Guests</p>
                              <p className="font-medium text-gray-900">2 Adults</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Total Amount</p>
                              <p className="font-medium text-gray-900">$598</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                          <Button variant="outline">Write a Review</Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <Badge className="mb-2 bg-gray-100 text-gray-800 hover:bg-gray-200">Completed</Badge>
                            <h3 className="text-xl font-bold text-gray-900">Bandarban Hill Treks</h3>
                            <div className="flex items-center text-gray-600 mt-1">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>March 5-9, 2023</span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completed</Badge>
                            <p className="text-gray-600 mt-1">Booking ID: B-1230</p>
                          </div>
                        </div>
                        <div className="mt-6 border-t border-gray-100 pt-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Package</p>
                              <p className="font-medium text-gray-900">5 Days, 4 Nights</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Guests</p>
                              <p className="font-medium text-gray-900">2 Adults</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Total Amount</p>
                              <p className="font-medium text-gray-900">$798</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                          <Button variant="outline">Write a Review</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>My Reviews</CardTitle>
                  <CardDescription>Reviews you've written for your tours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">Sundarbans Mangrove Forest</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-yellow-400 fill-yellow-400"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        This tour exceeded all my expectations! Our guide Rahul was incredibly knowledgeable about the
                        Sundarbans ecosystem and wildlife. We were lucky enough to spot a Bengal tiger from our boat,
                        which was an absolutely magical experience. The accommodations on the boat were comfortable, and
                        the food was delicious. I highly recommend this tour to anyone interested in wildlife and
                        nature.
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>April 22, 2023</span>
                        <div className="flex gap-4">
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-700">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-red-600">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">Bandarban Hill Treks</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-yellow-400 fill-yellow-400"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        The Bandarban Hill Treks tour was an incredible adventure! Our guide Nadia was extremely
                        knowledgeable about the local terrain and culture. The views from the mountain peaks were
                        breathtaking, and the overnight stays in local villages provided a unique cultural experience.
                        The trek was challenging but very rewarding. Highly recommended for adventure seekers!
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>March 15, 2023</span>
                        <div className="flex gap-4">
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-700">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-red-600">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist">
              <Card>
                <CardHeader>
                  <CardTitle>My Wishlist</CardTitle>
                  <CardDescription>Tours you've saved for later</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="relative h-48">
                        <Image src="/images/package-4.jpg" alt="Cox's Bazar Beach" fill className="object-cover" />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500 rounded-full"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Cox's Bazar Beach Retreat</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">Cox's Bazar, Bangladesh</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">4 Days, 3 Nights</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-gray-900 font-bold">
                            $349 <span className="text-sm font-normal text-gray-600">/person</span>
                          </div>
                          <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="relative h-48">
                        <Image src="/images/package-6.jpg" alt="Saint Martin Island" fill className="object-cover" />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500 rounded-full"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Saint Martin Island Getaway</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">Saint Martin, Bangladesh</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">3 Days, 2 Nights</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-gray-900 font-bold">
                            $329 <span className="text-sm font-normal text-gray-600">/person</span>
                          </div>
                          <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="relative h-48">
                        <Image src="/images/package-5.jpg" alt="Rangamati Lake" fill className="object-cover" />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500 rounded-full"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Rangamati Lake Adventure</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">Rangamati, Bangladesh</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">3 Days, 2 Nights</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-gray-900 font-bold">
                            $279 <span className="text-sm font-normal text-gray-600">/person</span>
                          </div>
                          <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Update your account information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                            First Name
                          </label>
                          <Input id="first-name" defaultValue="Sarah" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                            Last Name
                          </label>
                          <Input id="last-name" defaultValue="Johnson" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <Input id="email" type="email" defaultValue="sarah@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-medium text-gray-700">
                          Location
                        </label>
                        <Input id="location" defaultValue="New York, USA" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="bio" className="text-sm font-medium text-gray-700">
                          Bio
                        </label>
                        <Textarea
                          id="bio"
                          rows={4}
                          defaultValue="I'm a passionate traveler and nature enthusiast who loves exploring new places and experiencing different cultures. I have a particular interest in wildlife conservation and sustainable tourism."
                        />
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Save Changes</Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>Update your password</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="current-password" className="text-sm font-medium text-gray-700">
                            Current Password
                          </label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="new-password" className="text-sm font-medium text-gray-700">
                            New Password
                          </label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
                            Confirm New Password
                          </label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700">Update Password</Button>
                      </form>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Settings</CardTitle>
                      <CardDescription>Manage your notification preferences</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                            <p className="text-sm text-gray-500">Receive emails about your account activity</p>
                          </div>
                          <div className="flex items-center h-6">
                            <input
                              id="email-notifications"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Tour Updates</h4>
                            <p className="text-sm text-gray-500">Receive updates about your booked tours</p>
                          </div>
                          <div className="flex items-center h-6">
                            <input
                              id="tour-updates"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Promotional Emails</h4>
                            <p className="text-sm text-gray-500">Receive emails about special offers and discounts</p>
                          </div>
                          <div className="flex items-center h-6">
                            <input
                              id="promotional-emails"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Newsletter</h4>
                            <p className="text-sm text-gray-500">Receive our monthly newsletter</p>
                          </div>
                          <div className="flex items-center h-6">
                            <input
                              id="newsletter"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700">Save Preferences</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
