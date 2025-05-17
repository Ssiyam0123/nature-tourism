import { StoryCard } from "@/components/story-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function CommunityPage() {
  // Sample data for stories
  const stories = [
    {
      id: "1",
      title: "My Amazing Trip to Cox's Bazar",
      content:
        "It was an unforgettable experience with beautiful beaches and sunsets. The local seafood was delicious and the people were very friendly. I highly recommend visiting during the winter season when the weather is perfect.",
      author: "Arif Khan",
      date: "2023-05-15",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "2",
      title: "Exploring the Sundarbans",
      content:
        "Seeing Royal Bengal Tigers in their natural habitat was breathtaking. The mangrove forest is truly a wonder of nature. Our guide was very knowledgeable and made sure we had a safe and enjoyable experience.",
      author: "Mina Rahman",
      date: "2023-06-22",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "3",
      title: "Tea Gardens of Sylhet",
      content:
        "The lush green tea gardens and the misty mountains were a sight to behold. We stayed at a resort overlooking the tea gardens and it was magical. Don't miss the seven-layer tea, a local specialty!",
      author: "Kabir Ahmed",
      date: "2023-07-10",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "4",
      title: "Historical Tour of Old Dhaka",
      content:
        "The rich history and architecture of Old Dhaka left me in awe. From Lalbagh Fort to Ahsan Manzil, every place has a story to tell. The street food, especially the biryani, was amazing!",
      author: "Laila Begum",
      date: "2023-08-05",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "5",
      title: "Bandarban Hill Trekking Adventure",
      content:
        "Trekking in the hills of Bandarban was challenging but rewarding. The views from the top were spectacular. We stayed with a local tribal family and learned about their culture and traditions.",
      author: "Rafiq Islam",
      date: "2023-09-12",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "6",
      title: "Saint Martin Island Paradise",
      content:
        "Saint Martin is truly a paradise with its crystal clear waters and coral reefs. We went snorkeling and saw colorful fish and marine life. The sunset view from the beach is something I'll never forget.",
      author: "Nusrat Jahan",
      date: "2023-10-20",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "7",
      title: "Rangamati Lake Cruise",
      content:
        "Cruising on Kaptai Lake in Rangamati was a serene experience. The surrounding hills and tribal villages added to the charm. We also visited the hanging bridge and enjoyed local tribal food.",
      author: "Imran Ali",
      date: "2023-11-08",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "8",
      title: "Kuakata: The Daughter of the Sea",
      content:
        "Kuakata is unique because you can see both sunrise and sunset from the same beach. The beach is less crowded than Cox's Bazar, making it perfect for those seeking tranquility.",
      author: "Sadia Rahman",
      date: "2023-12-15",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community Stories</h1>
          <p className="text-muted-foreground">Explore travel experiences shared by our community members</p>
        </div>
        <Button asChild className="mt-4 md:mt-0">
          <Link href="/dashboard/add-story">Share Your Story</Link>
        </Button>
      </div>

      {/* Filter Section */}
      <div className="bg-card p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Filter Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Search</label>
            <Input placeholder="Search stories..." />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Sort By</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select sort option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="coxs-bazar">Cox's Bazar</SelectItem>
                <SelectItem value="sundarbans">Sundarbans</SelectItem>
                <SelectItem value="sylhet">Sylhet</SelectItem>
                <SelectItem value="dhaka">Dhaka</SelectItem>
                <SelectItem value="bandarban">Bandarban</SelectItem>
                <SelectItem value="saint-martin">Saint Martin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button>Apply Filters</Button>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
