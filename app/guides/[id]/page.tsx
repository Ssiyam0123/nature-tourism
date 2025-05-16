import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  MapPin,
  Languages,
  Calendar,
  Award,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function GuideDetailPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the guide data based on the ID
  // For this static version, we'll just use sample data
  const guide = {
    id: "1",
    name: "Rahul Ahmed",
    specialty: "Wildlife Expert",
    image: "/images/guide-1.jpg",
    rating: 4.9,
    location: "Khulna, Bangladesh",
    languages: "Bengali, English, Hindi",
    experience: 10,
    certification: "Certified Wildlife Guide",
    bio: "With over 10 years of experience in the Sundarbans, Rahul knows every corner of the mangrove forest and can spot the most elusive wildlife. His passion for conservation and deep knowledge of the local ecosystem make him an exceptional guide for wildlife enthusiasts.",
    featured: true,
    expertise: [
      "Wildlife identification and tracking",
      "Mangrove ecosystem knowledge",
      "Bird watching",
      "Wildlife photography guidance",
      "Survival skills in wilderness",
      "Local folklore and cultural history",
    ],
    education: [
      {
        degree: "Bachelor of Science in Zoology",
        institution: "University of Dhaka",
        year: "2008-2012",
      },
      {
        degree: "Wildlife Conservation Certificate",
        institution: "Wildlife Institute of Bangladesh",
        year: "2013",
      },
    ],
    contact: {
      email: "rahul.ahmed@touristguide.com",
      phone: "+880 123 456 7890",
    },
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
    tours: [
      {
        id: "tour1",
        title: "Sundarbans Mangrove Forest",
        image: "/images/package-1.jpg",
        duration: "3 Days, 2 Nights",
        price: 299,
      },
      {
        id: "tour2",
        title: "Wildlife Photography Tour",
        image: "/images/package-7.jpg",
        duration: "4 Days, 3 Nights",
        price: 399,
      },
      {
        id: "tour3",
        title: "Sundarbans Tiger Trail",
        image: "/images/package-3.jpg",
        duration: "5 Days, 4 Nights",
        price: 499,
      },
    ],
    reviews: [
      {
        id: "rev1",
        customer: "Sarah Johnson",
        avatar: "/images/author-1.jpg",
        rating: 5,
        date: "May 10, 2023",
        text: "Rahul was an exceptional guide! His knowledge of the Sundarbans ecosystem was impressive, and he spotted a Bengal tiger that we would have completely missed. A truly unforgettable experience.",
      },
      {
        id: "rev2",
        customer: "Michael Chen",
        avatar: "/images/author-2.jpg",
        rating: 5,
        date: "April 22, 2023",
        text: "I can't recommend Rahul enough! His expertise in wildlife tracking led us to see so many different animals during our tour. He's also very patient with photography enthusiasts like me, suggesting the best spots and angles for shots.",
      },
      {
        id: "rev3",
        customer: "Emma Thompson",
        avatar: "/images/author-5.jpg",
        rating: 4,
        date: "March 15, 2023",
        text: "Rahul made our Sundarbans trip truly special. His knowledge of the local ecosystem is incredible, and he shared fascinating stories about the region's history and culture. He's also very safety-conscious, which was reassuring in the wilderness.",
      },
    ],
    gallery: [
      "/images/guide-gallery-1.jpg",
      "/images/guide-gallery-2.jpg",
      "/images/guide-gallery-3.jpg",
      "/images/guide-gallery-4.jpg",
      "/images/guide-gallery-5.jpg",
      "/images/guide-gallery-6.jpg",
    ],
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={guide.image || "/placeholder.svg"} alt={guide.name} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 to-green-950/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <Link
            href="/guides"
            className="inline-flex items-center text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Guides
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">{guide.specialty}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{guide.name}</h1>
              <div className="flex items-center text-white/90">
                <MapPin className="mr-2 h-5 w-5" />
                <span className="text-lg">{guide.location}</span>
              </div>
            </div>
            <div className="mt-6 md:mt-0 bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400 mr-2" />
                <div className="text-white text-3xl font-bold">{guide.rating}</div>
                <div className="text-white/80 ml-2">/ 5.0</div>
              </div>
              <div className="text-white/80">{guide.reviews.length} reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="tours">Tours</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-green-900 mb-4">About {guide.name}</h2>
                      <p className="text-green-800/80 mb-6">{guide.bio}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold text-green-900 mb-3">Expertise</h3>
                          <ul className="space-y-2">
                            {guide.expertise.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-green-600 mr-2 mt-0.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span className="text-green-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-green-900 mb-3">Education & Certifications</h3>
                          <div className="space-y-4">
                            {guide.education.map((edu, index) => (
                              <div key={index}>
                                <h4 className="font-semibold text-green-800">{edu.degree}</h4>
                                <p className="text-green-700">{edu.institution}</p>
                                <p className="text-sm text-green-600">{edu.year}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Guide Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <Languages className="h-5 w-5 text-green-600 mr-3" />
                          <div>
                            <p className="text-sm text-green-700">Languages</p>
                            <p className="font-medium text-green-900">{guide.languages}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-green-600 mr-3" />
                          <div>
                            <p className="text-sm text-green-700">Experience</p>
                            <p className="font-medium text-green-900">{guide.experience} years</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-green-600 mr-3" />
                          <div>
                            <p className="text-sm text-green-700">Certification</p>
                            <p className="font-medium text-green-900">{guide.certification}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-green-600 mr-3" />
                          <div>
                            <p className="text-sm text-green-700">Location</p>
                            <p className="font-medium text-green-900">{guide.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="tours" className="mt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-green-900 mb-4">Tours by {guide.name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {guide.tours.map((tour) => (
                        <Card key={tour.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                          <div className="relative h-48">
                            <Image
                              src={tour.image || "/placeholder.svg"}
                              alt={tour.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-green-900 mb-2">{tour.title}</h3>
                            <div className="flex items-center text-green-700 mb-4">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span className="text-sm">{tour.duration}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-green-900 font-bold">
                                ${tour.price} <span className="text-sm font-normal text-green-700">/person</span>
                              </div>
                              <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-green-900">Reviews for {guide.name}</h2>
                      <Button className="bg-green-600 hover:bg-green-700">Write a Review</Button>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="text-4xl font-bold text-green-900 mr-4">{guide.rating}</div>
                          <div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <div className="text-green-700 text-sm mt-1">Based on {guide.reviews.length} reviews</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {guide.reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-8 last:border-0">
                          <div className="flex items-start">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                              <Image
                                src={review.avatar || "/placeholder.svg"}
                                alt={review.customer}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-green-900">{review.customer}</h3>
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
                              <p className="text-green-800">{review.text}</p>
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

                <TabsContent value="gallery" className="mt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-green-900 mb-4">{guide.name}'s Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {guide.gallery.map((image, index) => (
                        <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold text-green-900 mb-6">Contact {guide.name}</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <p className="text-sm text-green-700">Email</p>
                      <p className="font-medium text-green-900">{guide.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <p className="text-sm text-green-700">Phone</p>
                      <p className="font-medium text-green-900">{guide.contact.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Follow {guide.name}</h4>
                  <div className="flex space-x-3">
                    <a
                      href={guide.social.facebook}
                      className="bg-green-100 hover:bg-green-200 p-3 rounded-full text-green-700 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href={guide.social.twitter}
                      className="bg-green-100 hover:bg-green-200 p-3 rounded-full text-green-700 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={guide.social.instagram}
                      className="bg-green-100 hover:bg-green-200 p-3 rounded-full text-green-700 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-green-800 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-green-800 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Guides */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Meet Our Other Guides</h2>
            <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
              Explore tours with our other expert guides specializing in different regions and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-64">
                <Image src="/images/guide-2.jpg" alt="Nadia Khan" fill className="object-cover" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-green-900 mb-1">Nadia Khan</h3>
                <p className="text-green-700 mb-4">Mountain Guide</p>
                <p className="text-green-800/80 mb-6">
                  An experienced trekker who has conquered all the major peaks in the Chittagong Hill Tracts.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">View Profile</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-64">
                <Image src="/images/guide-3.jpg" alt="Kamal Hossain" fill className="object-cover" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-green-900 mb-1">Kamal Hossain</h3>
                <p className="text-green-700 mb-4">Cultural Expert</p>
                <p className="text-green-800/80 mb-6">
                  Passionate about Bangladesh's rich cultural heritage and traditional village life.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">View Profile</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-64">
                <Image src="/images/team-4.jpg" alt="Fatima Begum" fill className="object-cover" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-green-900 mb-1">Fatima Begum</h3>
                <p className="text-green-700 mb-4">Eco-Tourism Guide</p>
                <p className="text-green-800/80 mb-6">
                  Specializing in sustainable tourism, Fatima is dedicated to showcasing Bangladesh's natural beauty.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">View Profile</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
