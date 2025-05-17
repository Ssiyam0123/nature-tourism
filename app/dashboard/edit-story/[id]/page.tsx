import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, TrashIcon, UploadIcon } from "lucide-react"
import Image from "next/image"

export default function EditStoryPage({ params }: { params: { id: string } }) {
  // Sample story data
  const story = {
    id: params.id,
    title: "My Amazing Trip to Cox's Bazar",
    content:
      "It was an unforgettable experience with beautiful beaches and sunsets. The local seafood was delicious and the people were very friendly. I highly recommend visiting during the winter season when the weather is perfect.",
    author: "John Doe",
    date: "2023-05-15",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Story</h1>

      <Card>
        <CardHeader>
          <CardTitle>Edit Your Travel Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Story Title</Label>
              <Input id="title" defaultValue={story.title} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Story Content</Label>
              <Textarea id="content" defaultValue={story.content} rows={8} />
            </div>

            <div className="space-y-2">
              <Label>Current Images</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {story.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Story image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Add More Images</Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <div className="flex flex-col items-center">
                  <UploadIcon className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground mb-2">Drag and drop images here, or click to browse</p>
                  <p className="text-xs text-muted-foreground mb-4">Supports: JPG, PNG, WEBP (Max 5MB each)</p>
                  <Input id="images" type="file" multiple className="hidden" />
                  <Button type="button" variant="outline">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Select Images
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button>Update Story</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
