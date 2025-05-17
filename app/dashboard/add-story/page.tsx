import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, UploadIcon } from "lucide-react"

export default function AddStoryPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Story</h1>

      <Card>
        <CardHeader>
          <CardTitle>Share Your Travel Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Story Title</Label>
              <Input id="title" placeholder="Enter a captivating title for your story" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Story Content</Label>
              <Textarea id="content" placeholder="Share your travel experience in detail..." rows={8} />
            </div>

            <div className="space-y-2">
              <Label>Upload Images</Label>
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

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative h-[100px] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <ImageIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="relative h-[100px] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <ImageIcon className="h-8 w-8 text-muted-foreground" />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button>Publish Story</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
