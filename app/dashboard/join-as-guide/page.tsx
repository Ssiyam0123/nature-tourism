import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileIcon } from "lucide-react"

export default function JoinAsGuidePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Join as Tour Guide</h1>

      <Card>
        <CardHeader>
          <CardTitle>Tour Guide Application</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Application Title</Label>
              <Input id="title" placeholder="e.g., Experienced Beach Tour Guide" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Why do you want to be a Tour Guide?</Label>
              <Textarea id="reason" placeholder="Explain your motivation, experience, and qualifications..." rows={6} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input id="experience" type="number" min="0" placeholder="e.g., 3" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="speciality">Area of Speciality</Label>
              <Input id="speciality" placeholder="e.g., Beach Tours, Wildlife Tours, Cultural Tours" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="languages">Languages Spoken</Label>
              <Input id="languages" placeholder="e.g., English, Bengali, Hindi" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cv">CV/Resume Link</Label>
              <div className="flex">
                <Input id="cv" placeholder="Paste your CV/Resume link here" className="rounded-r-none" />
                <Button type="button" variant="outline" className="rounded-l-none border-l-0">
                  <FileIcon className="h-4 w-4 mr-2" />
                  Browse
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Upload your CV to a cloud storage service (Google Drive, Dropbox, etc.) and paste the link here
              </p>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button>Submit Application</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
