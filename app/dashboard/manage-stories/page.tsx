import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PencilIcon, TrashIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ManageStoriesPage() {
  // Sample data for stories
  const stories = [
    {
      id: "1",
      title: "My Amazing Trip to Cox's Bazar",
      content: "It was an unforgettable experience with beautiful beaches and sunsets...",
      date: "2023-05-15",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "2",
      title: "Exploring the Sundarbans",
      content: "Seeing Royal Bengal Tigers in their natural habitat was breathtaking...",
      date: "2023-06-22",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "3",
      title: "Tea Gardens of Sylhet",
      content: "The lush green tea gardens and the misty mountains were a sight to behold...",
      date: "2023-07-10",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "4",
      title: "Historical Tour of Old Dhaka",
      content: "The rich history and architecture of Old Dhaka left me in awe...",
      date: "2023-08-05",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Stories</h1>
        <Button asChild>
          <Link href="/dashboard/add-story">Add New Story</Link>
        </Button>
      </div>

      {/* Filter Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filter Stories</CardTitle>
        </CardHeader>
        <CardContent>
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
                  <SelectItem value="date-desc">Date (Newest First)</SelectItem>
                  <SelectItem value="date-asc">Date (Oldest First)</SelectItem>
                  <SelectItem value="title-asc">Title (A-Z)</SelectItem>
                  <SelectItem value="title-desc">Title (Z-A)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stories Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <Card key={story.id}>
            <div className="relative h-[200px]">
              <Image
                src={story.image || "/placeholder.svg"}
                alt={story.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{story.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Published on {new Date(story.date).toLocaleDateString()}</p>
              <p className="line-clamp-3">{story.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <Link href={`/dashboard/edit-story/${story.id}`}>
                  <PencilIcon className="h-4 w-4 mr-2" />
                  Edit
                </Link>
              </Button>
              <Button variant="destructive">
                <TrashIcon className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </CardFooter>
          </Card>
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
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
