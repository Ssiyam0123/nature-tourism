import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Languages, Award, Calendar } from "lucide-react"

export default function GuidesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-green-800">
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 to-green-950/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Our Tour Guides</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Meet our experienced guides who will make your journey memorable
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Expert Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-6">
              Passionate Guides, Unforgettable Experiences
            </h2>
            <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
              Our guides are not just experts in their fields, but passionate storytellers who bring Bangladesh's
              natural wonders to life. With extensive knowledge of local ecosystems, wildlife, and cultural heritage,
              they ensure your journey is both educational and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative h-80">
                  <Image src={guide.image || "/placeholder.svg"} alt={guide.name} fill className="object-cover" />
                  {guide.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-amber-500 hover:bg-amber-600">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-green-900">{guide.name}</h3>
                      <p className="text-green-700">{guide.specialty}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{guide.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-green-700">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{guide.location}</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <Languages className="h-4 w-4 mr-2" />
                      <span className="text-sm">{guide.languages}</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{guide.experience} years experience</span>
                    </div>
                    {guide.certification && (
                      <div className="flex items-center text-green-700">
                        <Award className="h-4 w-4 mr-2" />
                        <span className="text-sm">{guide.certification}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-green-800/80 mb-6">{guide.bio}</p>

                  <Button className="w-full bg-green-600 hover:bg-green-700">View Profile</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Guide */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team of Guides</h2>
            <p className="text-xl text-green-100 mb-8">
              Are you passionate about Bangladesh's natural wonders and enjoy sharing your knowledge with others? Join
              our team of professional guides and help create unforgettable experiences for travelers.
            </p>
            <Button size="lg" className="bg-white text-green-900 hover:bg-green-100">
              Apply to Become a Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Guide Training */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Guide Training</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-6">How We Train Our Expert Guides</h2>
              <p className="text-lg text-green-800/80 mb-6">
                At Tourist Guide, we invest in comprehensive training programs to ensure our guides provide exceptional
                service. Our training covers local ecosystems, wildlife identification, cultural heritage, first aid,
                and sustainable tourism practices.
              </p>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Ecological Knowledge</h3>
                  <p className="text-green-800">
                    In-depth training on Bangladesh's diverse ecosystems, flora, and fauna to provide accurate
                    information to travelers.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Safety & First Aid</h3>
                  <p className="text-green-800">
                    Comprehensive safety training and first aid certification to ensure the wellbeing of all travelers.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Cultural Sensitivity</h3>
                  <p className="text-green-800">
                    Training on local customs, traditions, and cultural heritage to provide respectful and enriching
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=500&width=600" alt="Guide training" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-6">What Travelers Say About Our Guides</h2>
            <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
              Read what our customers have to say about their experiences with our expert guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-green-800 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">{testimonial.name}</h4>
                    <p className="text-sm text-green-700">{testimonial.tour}</p>
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
const guides = [
  {
    name: "Rahul Ahmed",
    specialty: "Wildlife Expert",
    image: "/images/guide-1.jpg",
    rating: 4.9,
    location: "Khulna, Bangladesh",
    languages: "Bengali, English, Hindi",
    experience: 10,
    certification: "Certified Wildlife Guide",
    bio: "With 10+ years of experience in the Sundarbans, Rahul knows every corner of the mangrove forest and can spot the most elusive wildlife.",
    featured: true,
  },
  {
    name: "Nadia Khan",
    specialty: "Mountain Guide",
    image: "/images/guide-2.jpg",
    rating: 4.8,
    location: "Bandarban, Bangladesh",
    languages: "Bengali, English",
    experience: 8,
    certification: "Certified Trekking Guide",
    bio: "An experienced trekker who has conquered all the major peaks in the Chittagong Hill Tracts. Nadia is passionate about mountain ecology.",
    featured: false,
  },
  {
    name: "Kamal Hossain",
    specialty: "Cultural Expert",
    image: "/images/guide-3.jpg",
    rating: 4.7,
    location: "Dhaka, Bangladesh",
    languages: "Bengali, English, Arabic",
    experience: 12,
    certification: "Cultural Heritage Specialist",
    bio: "Passionate about Bangladesh's rich cultural heritage and traditional village life. Kamal provides deep insights into local customs and traditions.",
    featured: true,
  },
  {
    name: "Fatima Begum",
    specialty: "Eco-Tourism Guide",
    image: "/images/team-4.jpg",
    rating: 4.9,
    location: "Sylhet, Bangladesh",
    languages: "Bengali, English",
    experience: 7,
    certification: "Eco-Tourism Certification",
    bio: "Specializing in sustainable tourism, Fatima is dedicated to showcasing Bangladesh's natural beauty while promoting conservation efforts.",
    featured: false,
  },
  {
    name: "Mohammed Ali",
    specialty: "Adventure Guide",
    image: "/images/team-1.jpg",
    rating: 4.8,
    location: "Cox's Bazar, Bangladesh",
    languages: "Bengali, English, Burmese",
    experience: 9,
    certification: "Adventure Sports Instructor",
    bio: "An adrenaline enthusiast who specializes in adventure activities including kayaking, rock climbing, and paragliding across Bangladesh.",
    featured: true,
  },
  {
    name: "Priya Sharma",
    specialty: "Birdwatching Expert",
    image: "/images/team-2.jpg",
    rating: 4.9,
    location: "Moulovibazar, Bangladesh",
    languages: "Bengali, English, Hindi",
    experience: 11,
    certification: "Ornithology Specialist",
    bio: "A passionate ornithologist who can identify over 500 bird species found in Bangladesh. Priya leads specialized birdwatching tours.",
    featured: false,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/images/author-1.jpg",
    rating: 5,
    tour: "Sundarbans Mangrove Forest",
    text: "Rahul was an exceptional guide! His knowledge of the Sundarbans ecosystem was impressive, and he spotted a Bengal tiger that we would have completely missed. A truly unforgettable experience.",
  },
  {
    name: "Michael Chen",
    avatar: "/images/author-2.jpg",
    rating: 5,
    tour: "Bandarban Hill Treks",
    text: "Nadia made our trekking experience in Bandarban incredible. She knew all the best viewpoints and shared fascinating stories about the local tribes. Her enthusiasm for the mountains was contagious!",
  },
  {
    name: "Emma Thompson",
    avatar: "/images/author-5.jpg",
    rating: 4,
    tour: "Cultural Tour of Bangladesh",
    text: "Kamal's deep knowledge of Bangladesh's cultural heritage transformed our trip. He introduced us to local artisans and explained traditions in a way that made us feel connected to the places we visited.",
  },
]
