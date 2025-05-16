import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Star, Clock, Check, Info, AlertTriangle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { allPackagesData } from "@/data/all-packages-data"

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the package data based on the ID
  // For this static version, we'll just use the first package from our data
  const packageData = allPackagesData[0]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={packageData.image || "/placeholder.svg"}
            alt={packageData.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 to-green-950/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <Link
            href="/packages"
            className="inline-flex items-center text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Packages
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">{packageData.type}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{packageData.title}</h1>
              <div className="flex items-center text-white/90">
                <MapPin className="mr-2 h-5 w-5" />
                <span className="text-lg">{packageData.location}</span>
              </div>
            </div>
            <div className="mt-6 md:mt-0 bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <div className="text-white text-3xl font-bold">${packageData.price}</div>
              <div className="text-white/80">per person</div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="includes">Includes</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-green-900 mb-4">About This Tour</h2>
                      <p className="text-green-800/80">
                        The Sundarbans is the largest mangrove forest in the world, spanning across Bangladesh and
                        India. This UNESCO World Heritage Site is home to the famous Bengal tiger, spotted deer,
                        crocodiles, and numerous bird species. Our 3-day tour takes you deep into this unique ecosystem,
                        where you'll experience the magic of the mangroves, spot wildlife, and learn about the delicate
                        balance of this extraordinary environment.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-3">Highlights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span className="text-green-800">Boat safari through narrow mangrove channels</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span className="text-green-800">Wildlife spotting including Bengal tigers (if lucky)</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span className="text-green-800">Visit to local fishing villages</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span className="text-green-800">Guided nature walks on forest trails</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span className="text-green-800">Stunning sunrise and sunset views</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span className="text-green-800">Overnight stay on a comfortable boat</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=500"
                          alt="Sundarbans wildlife"
                          width={500}
                          height={300}
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=500"
                          alt="Mangrove forest"
                          width={500}
                          height={300}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-3">Description</h3>
                      <p className="text-green-800/80 mb-4">
                        Embark on an unforgettable journey through the mysterious Sundarbans mangrove forest. Our expert
                        guides will lead you through this unique ecosystem, sharing insights about the delicate balance
                        of nature and the incredible adaptations of plants and animals that call this place home.
                      </p>
                      <p className="text-green-800/80 mb-4">
                        During your tour, you'll cruise through narrow channels flanked by dense mangroves, keeping an
                        eye out for the elusive Bengal tiger, saltwater crocodiles, spotted deer, and numerous bird
                        species. You'll also visit local fishing communities to learn about their traditional way of
                        life and their relationship with this challenging environment.
                      </p>
                      <p className="text-green-800/80">
                        Accommodation will be on a comfortable boat, allowing you to fully immerse yourself in the
                        Sundarbans experience. Fall asleep to the sounds of the forest and wake up to stunning sunrises
                        over the water. All meals are prepared fresh on board, featuring local specialties and fresh
                        seafood.
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <h3 className="text-lg font-semibold text-green-900 mb-2">Good to Know</h3>
                          <ul className="space-y-2 text-green-800">
                            <li>
                              This tour involves moderate physical activity, including walking on forest trails and
                              boarding small boats.
                            </li>
                            <li>
                              Wildlife sightings, especially of Bengal tigers, cannot be guaranteed as they are wild
                              animals.
                            </li>
                            <li>
                              The weather in the Sundarbans can be unpredictable, so pack accordingly with both sun
                              protection and rain gear.
                            </li>
                            <li>
                              Mobile network coverage is limited in the Sundarbans. Enjoy the opportunity to disconnect!
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="itinerary" className="mt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-green-900 mb-4">Tour Itinerary</h2>

                    <div className="space-y-8">
                      <div className="relative pl-8 pb-8 border-l-2 border-green-200">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-600"></div>
                        <div>
                          <h3 className="text-xl font-bold text-green-900 mb-2">Day 1: Departure and Forest Entry</h3>
                          <div className="flex items-center text-green-700 mb-3">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>7:00 AM - 5:00 PM</span>
                          </div>
                          <p className="text-green-800/80 mb-3">
                            Early morning departure from Khulna by boat. As we enter the Sundarbans, we'll stop at the
                            forest office to complete entry formalities. Continue cruising through the rivers and
                            channels, enjoying lunch on board. In the afternoon, we'll take a guided walk on a forest
                            trail to spot wildlife and learn about mangrove ecology. Return to the boat for dinner and
                            overnight stay.
                          </p>
                          <div className="grid grid-cols-3 gap-2 mt-4">
                            <div className="rounded-lg overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=100&width=150"
                                alt="Day 1 activity"
                                width={150}
                                height={100}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=100&width=150"
                                alt="Day 1 activity"
                                width={150}
                                height={100}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=100&width=150"
                                alt="Day 1 activity"
                                width={150}
                                height={100}
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-8 border-l-2 border-green-200">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-600"></div>
                        <div>
                          <h3 className="text-xl font-bold text-green-900 mb-2">
                            Day 2: Wildlife Watching and Village Visit
                          </h3>
                          <div className="flex items-center text-green-700 mb-3">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>6:00 AM - 8:00 PM</span>
                          </div>
                          <p className="text-green-800/80 mb-3">
                            Wake up early for a sunrise boat ride through narrow channels, the best time for wildlife
                            spotting. After breakfast, visit a local fishing village to learn about traditional
                            lifestyles. Enjoy lunch on board, followed by more exploration of different waterways. In
                            the late afternoon, visit a wildlife watching tower for panoramic views of the forest.
                            Return to the boat for dinner and overnight stay.
                          </p>
                          <div className="grid grid-cols-3 gap-2 mt-4">
                            <div className="rounded-lg overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=100&width=150"
                                alt="Day 2 activity"
                                width={150}
                                height={100}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=100&width=150"
                                alt="Day 2 activity"
                                width={150}
                                height={100}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=100&width=150"
                                alt="Day 2 activity"
                                width={150}
                                height={100}
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-600"></div>
                        <div>
                          <h3 className="text-xl font-bold text-green-900 mb-2">Day 3: Return Journey</h3>
                          <div className="flex items-center text-green-700 mb-3">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>7:00 AM - 4:00 PM</span>
                          </div>
                          <p className="text-green-800/80 mb-3">
                            Early morning nature walk to spot birds and other wildlife. After breakfast, begin the
                            return journey to Khulna, taking a different route to experience more of the Sundarbans.
                            Enjoy lunch on board and arrive in Khulna by late afternoon, where our tour concludes.
                          </p>
                          <div className="grid grid-cols-3 gap-2 mt-4">
                            <div className="rounded-lg overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=100&width=150"
                                alt="Day 3 activity"
                                width={150}
                                height={100}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=100&width=150"
                                alt="Day 3 activity"
                                width={150}
                                height={100}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=100&width=150"
                                alt="Day 3 activity"
                                width={150}
                                height={100}
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="includes" className="mt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-green-900 mb-4">What's Included</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-green-900 mb-4">Included in the Package</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span className="text-green-800">
                              Transportation by boat from Khulna to Sundarbans and back
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span className="text-green-800">2 nights accommodation on the boat</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span className="text-green-800">All meals (breakfast, lunch, dinner) during the tour</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span className="text-green-800">Experienced English-speaking guide</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span className="text-green-800">Forest entry permits and fees</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span className="text-green-800">Guided nature walks and village visits</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span className="text-green-800">Bottled water throughout the tour</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                            <span className="text-green-800">Life jackets and safety equipment</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-red-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-red-900 mb-4">Not Included in the Package</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                            <span className="text-red-800">Transportation to/from Khulna</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                            <span className="text-red-800">Travel insurance</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                            <span className="text-red-800">Personal expenses</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                            <span className="text-red-800">Tips for guides and boat crew</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                            <span className="text-red-800">Alcoholic beverages</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                            <span className="text-red-800">Camera fees (if applicable)</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                            <span className="text-red-800">Any items not specifically mentioned as included</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-green-900">Customer Reviews</h2>
                      <Button className="bg-green-600 hover:bg-green-700">Write a Review</Button>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="text-4xl font-bold text-green-900 mr-4">4.8</div>
                          <div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <div className="text-green-700 text-sm mt-1">Based on 24 reviews</div>
                          </div>
                        </div>
                        <div className="hidden md:block">
                          <div className="flex items-center space-x-2">
                            <div className="text-sm text-green-700 w-12">5 stars</div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-green-600 h-full rounded-full" style={{ width: "85%" }}></div>
                            </div>
                            <div className="text-sm text-green-700">85%</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="text-sm text-green-700 w-12">4 stars</div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-green-600 h-full rounded-full" style={{ width: "10%" }}></div>
                            </div>
                            <div className="text-sm text-green-700">10%</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="text-sm text-green-700 w-12">3 stars</div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-green-600 h-full rounded-full" style={{ width: "5%" }}></div>
                            </div>
                            <div className="text-sm text-green-700">5%</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="text-sm text-green-700 w-12">2 stars</div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-green-600 h-full rounded-full" style={{ width: "0%" }}></div>
                            </div>
                            <div className="text-sm text-green-700">0%</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="text-sm text-green-700 w-12">1 star</div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-green-600 h-full rounded-full" style={{ width: "0%" }}></div>
                            </div>
                            <div className="text-sm text-green-700">0%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {reviews.map((review, index) => (
                        <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                          <div className="flex items-start">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                              <Image
                                src={review.avatar || "/placeholder.svg"}
                                alt={review.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-green-900">{review.name}</h3>
                                <span className="text-sm text-green-700">{review.date}</span>
                              </div>
                              <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <p className="text-green-800 mb-3">{review.text}</p>
                              {review.response && (
                                <div className="bg-green-50 p-4 rounded-lg mt-4">
                                  <div className="font-semibold text-green-900 mb-2">Response from Tourist Guide</div>
                                  <p className="text-green-800">{review.response}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                        Load More Reviews
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold text-green-900 mb-6">Book This Tour</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between pb-4 border-b border-gray-100">
                    <div className="text-green-800">Price:</div>
                    <div className="font-semibold text-green-900">${packageData.price} per person</div>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-gray-100">
                    <div className="text-green-800">Duration:</div>
                    <div className="font-semibold text-green-900">{packageData.duration}</div>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-gray-100">
                    <div className="text-green-800">Group Size:</div>
                    <div className="font-semibold text-green-900">Max {packageData.groupSize} people</div>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-gray-100">
                    <div className="text-green-800">Tour Type:</div>
                    <div className="font-semibold text-green-900">{packageData.type}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-green-800">Languages:</div>
                    <div className="font-semibold text-green-900">English, Bengali</div>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-green-800 mb-1">
                      Select Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-green-800 mb-1">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6">6+ People</option>
                    </select>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 py-6 text-lg">Book Now</Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-green-700">
                    Not ready to book?{" "}
                    <Link href="#" className="text-green-600 hover:underline">
                      Contact us
                    </Link>{" "}
                    for inquiries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">You May Also Like</h2>
            <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
              Explore other popular tour packages that might interest you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allPackagesData.slice(1, 4).map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 hover:bg-green-700">{pkg.type}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-2">{pkg.title}</h3>
                  <div className="flex items-center text-green-700 mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <div className="flex items-center text-green-700 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-green-900 font-bold">
                      ${pkg.price} <span className="text-sm font-normal text-green-700">/person</span>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data
const reviews = [
  {
    name: "Sarah Johnson",
    avatar: "/images/author-1.jpg",
    date: "May 10, 2023",
    rating: 5,
    text: "This tour exceeded all my expectations! Our guide Rahul was incredibly knowledgeable about the Sundarbans ecosystem and wildlife. We were lucky enough to spot a Bengal tiger from our boat, which was an absolutely magical experience. The accommodations on the boat were comfortable, and the food was delicious. I highly recommend this tour to anyone interested in wildlife and nature.",
    response:
      "Thank you for your wonderful review, Sarah! We're thrilled that you enjoyed your Sundarbans experience and were lucky enough to spot a tiger. We hope to welcome you back for another adventure soon!",
  },
  {
    name: "Michael Chen",
    avatar: "/images/author-2.jpg",
    date: "April 22, 2023",
    rating: 5,
    text: "An unforgettable experience in the Sundarbans! The mangrove forests are truly magical, and our guide made sure we learned about all the unique plants and animals. The boat was clean and comfortable, and the crew prepared amazing meals. We saw crocodiles, spotted deer, and many bird species. No tigers for us, but that's nature - you can't guarantee wildlife sightings. Would definitely recommend this tour!",
  },
  {
    name: "Emma Thompson",
    avatar: "/images/author-5.jpg",
    date: "March 15, 2023",
    rating: 4,
    text: "Great tour overall! The Sundarbans is a beautiful place, and our guide was very knowledgeable and friendly. The boat accommodations were comfortable, though a bit basic. We saw lots of wildlife including monkeys, crocodiles, and beautiful birds. The only reason I'm giving 4 stars instead of 5 is that the food options were somewhat limited for vegetarians like me. Otherwise, it was an amazing experience!",
  },
  {
    name: "David Wilson",
    avatar: "/images/author-4.jpg",
    date: "February 28, 2023",
    rating: 5,
    text: "This was my second visit to the Sundarbans, but my first with Tourist Guide, and the difference was remarkable! The guides were extremely professional and passionate about conservation. They took us to less crowded areas where we could truly appreciate the tranquility of the mangroves. The sunset views from the boat were absolutely stunning. Highly recommended for nature lovers!",
  },
]
