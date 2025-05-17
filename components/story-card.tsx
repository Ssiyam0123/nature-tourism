import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShareIcon } from "lucide-react"
import Image from "next/image"

interface StoryCardProps {
  story: {
    id: string
    title: string
    content: string
    author: string
    date: string
    image: string
  }
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px]">
        <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{story.title}</h3>
        <p className="text-muted-foreground text-sm mb-2">
          By {story.author} • {new Date(story.date).toLocaleDateString()}
        </p>
        <p className="line-clamp-3 text-sm">{story.content}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" size="sm" className="w-full">
          <ShareIcon className="h-4 w-4 mr-2" />
          Share Story
        </Button>
      </CardFooter>
    </Card>
  )
}
