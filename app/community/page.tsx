import Image from "next/image"
import { Calendar, User, MessageSquare, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function CommunityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/community-hero.jpg" alt="Community" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 to-green-950/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Community Stories</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Explore experiences shared by fellow travelers and connect with nature enthusiasts
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-green-800 mb-2">Search Stories</label>
                <Input
                  type="text"
                  placeholder="Search by keyword..."
                  className="border-green-200 focus:border-green-500"
                />
              </div>
              <div className="w-full md:w-1/4">
                <label className="block text-sm font-medium text-green-800 mb-2">Category</label>
                <select className="w-full px-4 py-2 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="">All Categories</option>
                  <option value="wildlife">Wildlife</option>
                  <option value="adventure">Adventure</option>
                  <option value="cultural">Cultural</option>
                  <option value="eco">Eco Tourism</option>
                </select>
              </div>
              <div className="w-full md:w-1/4">
                <label className="block text-sm font-medium text-green-800 mb-2">Sort By</label>
                <select className="w-full px-4 py-2 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="comments">Most Comments</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allStories.map((story, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                    <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                    {story.category && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-600 hover:bg-green-700">{story.category}</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 w-full md:w-3/5">
                    <div className="flex items-center mb-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={story.authorImage || "/placeholder.svg"}
                          alt={story.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-green-900">{story.author}</h4>
                        <div className="flex items-center text-sm text-green-700">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{story.date}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-3">{story.title}</h3>
                    <p className="text-green-800/80 mb-4 line-clamp-3">{story.excerpt}</p>
                    <div className="flex flex-wrap justify-between items-center">
                      <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <div className="flex items-center text-green-700 text-sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          <span>{story.comments} comments</span>
                        </div>
                        <div className="flex items-center text-green-700 text-sm">
                          <User className="h-4 w-4 mr-1" />
                          <span>{story.views} views</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-200 text-green-700 hover:bg-green-50"
                        >
                          <Share2 className="h-4 w-4 mr-1" /> Share
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="icon" className="border-green-200 text-green-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
              <Button variant="outline" className="border-green-200 bg-green-50 text-green-700">
                1
              </Button>
              <Button variant="outline" className="border-green-200 text-green-700">
                2
              </Button>
              <Button variant="outline" className="border-green-200 text-green-700">
                3
              </Button>
              <span className="text-green-700">...</span>
              <Button variant="outline" className="border-green-200 text-green-700">
                8
              </Button>
              <Button variant="outline" size="icon" className="border-green-200 text-green-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Join Our Community</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-6">Share Your Own Adventure</h2>
            <p className="text-lg text-green-800/80 mb-8">
              Have you recently explored Bangladesh's natural wonders? Share your experience with our community and
              inspire fellow travelers.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Share Your Story
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Contributors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Community Heroes</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-6">Featured Contributors</h2>
            <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
              Meet our most active community members who regularly share their amazing adventures and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={contributor.image || "/placeholder.svg"}
                    alt={contributor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-1">{contributor.name}</h3>
                <p className="text-green-700 mb-3">{contributor.contributions} contributions</p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${i < contributor.level ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Community Guidelines</h2>
            <p className="text-lg text-green-100 mb-8">
              Our community thrives on respect, authenticity, and a shared love for nature. Please review our guidelines
              before posting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-green-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Be Respectful</h3>
                <p className="text-green-100">
                  Treat fellow community members with kindness and respect. Constructive discussions are encouraged.
                </p>
              </div>
              <div className="bg-green-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Share Authentically</h3>
                <p className="text-green-100">
                  Share your genuine experiences. Authentic stories help others plan their own adventures.
                </p>
              </div>
              <div className="bg-green-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Promote Conservation</h3>
                <p className="text-green-100">
                  Help us promote responsible tourism and conservation of Bangladesh's natural treasures.
                </p>
              </div>
            </div>
            <Button variant="outline" className="mt-8 border-white text-white hover:bg-green-800">
              Read Full Guidelines
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data
const allStories = [
  {
    title: "My Unforgettable Journey Through the Sundarbans",
    author: "Sarah Johnson",
    authorImage: "/images/author-1.jpg",
    date: "May 10, 2023",
    image: "/images/story-1.jpg",
    excerpt:
      "The moment our boat entered the narrow channels of the Sundarbans, I knew this would be a journey like no other. The dense mangrove forests on either side seemed to whisper ancient secrets...",
    category: "Wildlife",
    comments: 24,
    views: 1243,
  },
  {
    title: "Trekking the Majestic Hills of Bandarban",
    author: "Michael Chen",
    authorImage: "/images/author-2.jpg",
    date: "April 22, 2023",
    image: "/images/story-2.jpg",
    excerpt:
      "Standing atop Keokradong, watching the sunrise paint the rolling hills in golden hues, I felt a profound connection with nature. The challenging trek was worth every drop of sweat...",
    category: "Adventure",
    comments: 18,
    views: 956,
  },
  {
    title: "Tea Gardens of Sylhet: A Sensory Experience",
    author: "Priya Sharma",
    authorImage: "/images/author-3.jpg",
    date: "March 15, 2023",
    image: "/images/story-3.jpg",
    excerpt:
      "The endless rows of tea bushes stretching across rolling hills, the fragrant aroma of fresh tea leaves, and the gentle mist that hangs in the air – Sylhet's tea gardens are a feast for the senses...",
    category: "Cultural",
    comments: 32,
    views: 1567,
  },
  {
    title: "Discovering the Hidden Waterfalls of Rangamati",
    author: "David Wilson",
    authorImage: "/images/author-4.jpg",
    date: "February 28, 2023",
    image: "/images/story-4.jpg",
    excerpt:
      "After a three-hour hike through dense jungle, the sound of rushing water grew louder. Turning a corner, we were rewarded with the sight of a magnificent waterfall cascading down moss-covered rocks...",
    category: "Adventure",
    comments: 15,
    views: 842,
  },
  {
    title: "Bird Watching in Lawachara National Park",
    author: "Emma Thompson",
    authorImage: "/images/author-5.jpg",
    date: "January 17, 2023",
    image: "/images/story-5.jpg",
    excerpt:
      "As dawn broke over Lawachara National Park, the forest came alive with the calls of hundreds of birds. With my binoculars ready, I spotted colorful kingfishers, hornbills, and even the elusive hooded pitta...",
    category: "Wildlife",
    comments: 27,
    views: 1105,
  },
  {
    title: "A Week in Saint Martin: Island Paradise",
    author: "Carlos Rodriguez",
    authorImage: "/images/author-6.jpg",
    date: "December 5, 2022",
    image: "/images/story-6.jpg",
    excerpt:
      "Crystal clear waters, pristine beaches, and vibrant coral reefs – Saint Martin Island is Bangladesh's best-kept secret. My week exploring this tropical paradise was filled with snorkeling, fresh seafood, and stunning sunsets...",
    category: "Eco",
    comments: 41,
    views: 1876,
  },
]

const contributors = [
  {
    name: "Sarah Johnson",
    image: "/images/author-1.jpg",
    contributions: 28,
    level: 5,
  },
  {
    name: "Michael Chen",
    image: "/images/author-2.jpg",
    contributions: 22,
    level: 4,
  },
  {
    name: "Priya Sharma",
    image: "/images/author-3.jpg",
    contributions: 19,
    level: 4,
  },
  {
    name: "David Wilson",
    image: "/images/author-4.jpg",
    contributions: 15,
    level: 3,
  },
]
