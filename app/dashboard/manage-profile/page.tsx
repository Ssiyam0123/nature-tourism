import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { BarChart3, Camera } from "lucide-react"
import Image from "next/image"

export default function ManageProfilePage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Manage Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="John Doe" />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="john.doe@example.com" readOnly />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+880 1712 345678" />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Main St, Dhaka, Bangladesh" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  defaultValue="I'm an avid traveler who loves exploring new places and cultures. I've visited over 20 countries and counting!"
                  rows={4}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="language">Preferred Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="bn">Bengali</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="currency">Preferred Currency</Label>
                  <Select defaultValue="bdt">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bdt">BDT (৳)</SelectItem>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Profile Picture */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
            <CardDescription>Update your profile picture</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6">
              <Image src="/placeholder.svg?height=128&width=128" alt="Profile" fill className="object-cover" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Camera className="h-4 w-4 mr-2" />
                Upload
              </Button>
              <Button variant="destructive" size="sm">
                Remove
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Chart */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Activity Statistics</CardTitle>
          <CardDescription>Your travel activity over the past 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            {/* Fake Bar Chart */}
            <div className="flex h-[250px] items-end justify-around gap-2 px-4">
              <div className="flex flex-col items-center">
                <div className="w-16 bg-primary rounded-t-md" style={{ height: "180px" }}></div>
                <span className="text-xs mt-2">January</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 bg-primary rounded-t-md" style={{ height: "120px" }}></div>
                <span className="text-xs mt-2">February</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 bg-primary rounded-t-md" style={{ height: "200px" }}></div>
                <span className="text-xs mt-2">March</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 bg-primary rounded-t-md" style={{ height: "90px" }}></div>
                <span className="text-xs mt-2">April</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 bg-primary rounded-t-md" style={{ height: "150px" }}></div>
                <span className="text-xs mt-2">May</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 bg-primary/70 rounded-t-md" style={{ height: "70px" }}></div>
                <span className="text-xs mt-2">June</span>
              </div>
            </div>

            {/* Chart Legend */}
            <div className="flex justify-center mt-4 gap-6">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-sm mr-2"></div>
                <span className="text-sm">Tours Booked</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary/70 rounded-sm mr-2"></div>
                <span className="text-sm">Current Month</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Travel Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Tours Completed</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
            <div className="p-2 bg-primary/10 rounded-full text-primary">
              <BarChart3 className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Countries Visited</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
            <div className="p-2 bg-primary/10 rounded-full text-primary">
              <BarChart3 className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Spent</p>
              <h3 className="text-2xl font-bold">৳120,500</h3>
            </div>
            <div className="p-2 bg-primary/10 rounded-full text-primary">
              <BarChart3 className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
