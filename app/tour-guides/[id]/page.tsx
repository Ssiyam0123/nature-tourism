import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StoryCard } from "@/components/story-card"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import Image from "next/image"

export default function TourGuideProfilePage({ params }: { params: { id: string } }) {
  // Sample tour guide data
  const guide = {
    id: params.id,
    name: "Rahim Ahmed",
    experience: "5 years",
    speciality: "Beach Tours",
    bio: "I am a passionate tour guide with 5 years of experience specializing in beach tours. I have extensive knowledge of Cox's Bazar, Saint Martin, and other coastal areas of Bangladesh. I am fluent in Bengali, English, and Hindi, and I love sharing the beauty and culture of Bangladesh with tourists from around the world.",
    languages: ["Bengali", "English", "Hindi"],
    location: "Cox's Bazar, Bangladesh",
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
  }

  // Sample stories data
  const stories = [
    {
      id: "1",
      title: "A Magical Sunset at Cox's Bazar",
      content:
        "Yesterday, I guided a group of tourists to witness the breathtaking sunset at Cox's Bazar. The colors in the sky were absolutely magical...",
      author: guide.name,
      date: "2023-05-15",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "2",
      title: "Hidden Gems of Saint Martin Island",
      content:
        "During our recent tour to Saint Martin Island, we discovered some hidden spots that are not frequented by regular tourists...",
      author: guide.name,
      date: "2023-06-22",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "3",
      title: "Local Cuisine of Coastal Bangladesh",
      content:
        "One of the highlights of our coastal tours is the amazing seafood. Today, I'm sharing some of the must-try dishes when you visit...",
      author: guide.name,
      date: "2023-07-10",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cover Image */}
      <div className="relative h-[300px] rounded-xl overflow-hidden mb-8">
        <Image src={guide.coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" />
      </div>

      {/* Profile Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image src={guide.image || "/placeholder.svg"} alt={guide.name} fill className="object-cover" />
                </div>
                <h1 className="text-2xl font-bold mb-1">{guide.name}</h1>
                <p className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">{guide.speciality}</p>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(guide.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {guide.rating} ({guide.reviews} reviews)
                  </span>
                </div>
                <div className="w-full space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Experience</h3>
                    <p className="text-muted-foreground">{guide.experience}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {guide.languages.map((language) => (
                        <span
                          key={language}
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">{guide.location}</p>
                  </div>
                  <div className="flex justify-center space-x-4 pt-4">
                    <Button variant="outline" size="icon">
                      <FacebookIcon className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <TwitterIcon className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <InstagramIcon className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <LinkedinIcon className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground mb-6">{guide.bio}</p>

              <h2 className="text-2xl font-bold mb-4">My Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-card border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Beach Tours</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert knowledge of all beach destinations in Bangladesh, including Cox's Bazar, Saint Martin, and
                    Kuakata.
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Local Culture</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep understanding of local customs, traditions, and cultural practices of coastal communities.
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Photography Spots</h3>
                  <p className="text-sm text-muted-foreground">
                    Knowledge of the best photography spots and timing for capturing stunning beach landscapes and
                    sunsets.
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Local Cuisine</h3>
                  <p className="text-sm text-muted-foreground">
                    Expertise in local seafood and traditional coastal cuisine, with connections to the best local
                    restaurants.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button className="w-full md:w-auto">Book a Tour with Me</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Stories Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Stories by {guide.name}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  )
}
