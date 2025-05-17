import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, PlusIcon, TrashIcon, UploadIcon } from "lucide-react"

export default function AddPackagePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Package</h1>

      <Card>
        <CardHeader>
          <CardTitle>Package Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Package Title</Label>
                <Input id="title" placeholder="e.g., Cox's Bazar Beach Getaway" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Tour Type</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select tour type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beach">Beach</SelectItem>
                    <SelectItem value="wildlife">Wildlife</SelectItem>
                    <SelectItem value="nature">Nature</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="historical">Historical</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price (BDT)</Label>
                <Input id="price" type="number" placeholder="e.g., 15000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input id="duration" placeholder="e.g., 3 days, 2 nights" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="e.g., Cox's Bazar, Bangladesh" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Provide a detailed description of the package..." rows={4} />
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

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="relative h-[100px] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <ImageIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="relative h-[100px] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <ImageIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="relative h-[100px] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <ImageIcon className="h-8 w-8 text-muted-foreground" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <Label>Tour Plan</Label>
                <Button type="button" variant="outline" size="sm">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Add Day
                </Button>
              </div>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Day 1</h3>
                    <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <TrashIcon className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="day1-title">Title</Label>
                      <Input id="day1-title" placeholder="e.g., Arrival and Beach Exploration" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="day1-description">Description</Label>
                      <Textarea id="day1-description" placeholder="Describe the activities for this day..." rows={2} />
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Day 2</h3>
                    <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <TrashIcon className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="day2-title">Title</Label>
                      <Input id="day2-title" placeholder="e.g., Inani Beach and Marine Drive" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="day2-description">Description</Label>
                      <Textarea id="day2-description" placeholder="Describe the activities for this day..." rows={2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button>Add Package</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
