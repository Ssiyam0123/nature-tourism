import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { storyData } from "@/data/story-data"

export default function StoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Experiences</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-6">Tourist Stories</h2>
          <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
            Read about the amazing experiences of travelers who have explored Bangladesh's natural wonders with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {storyData.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            View All Stories
          </Button>
        </div>
      </div>
    </section>
  )
}

function StoryCard({ story }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-2/5 h-64 md:h-auto">
          <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
        </div>
        <CardContent className="p-6 w-full md:w-3/5">
          <div className="flex items-center mb-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
              <Image src={story.authorImage || "/placeholder.svg"} alt={story.author} fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-medium text-green-900">{story.author}</h4>
              <p className="text-sm text-green-700">{story.date}</p>
            </div>
          </div>
          <h3 className="text-xl font-bold text-green-900 mb-3">{story.title}</h3>
          <p className="text-green-800/80 mb-4 line-clamp-3">{story.excerpt}</p>
          <div className="flex justify-between items-center">
            <Button variant="link" className="p-0 text-green-600 hover:text-green-700">
              Read More
            </Button>
            <Button variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50">
              Share
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
