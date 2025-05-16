import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your application settings</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
              <CardDescription>Update your site's basic information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input id="site-name" defaultValue="Tourist Guide" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-url">Site URL</Label>
                  <Input id="site-url" defaultValue="https://touristguide.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  defaultValue="Your trusted companion for exploring the natural wonders of Bangladesh. We provide immersive experiences that connect you with nature."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input id="contact-email" type="email" defaultValue="info@touristguide.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Contact Phone</Label>
                <Input id="contact-phone" defaultValue="+880 123 456 7890" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="Tourist Guide Ltd." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-address">Address</Label>
                  <Input id="company-address" defaultValue="123 Nature Street, Dhaka" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-city">City</Label>
                  <Input id="company-city" defaultValue="Dhaka" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-state">State/Province</Label>
                  <Input id="company-state" defaultValue="Dhaka Division" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-zip">Postal/Zip Code</Label>
                  <Input id="company-zip" defaultValue="1000" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-country">Country</Label>
                <Input id="company-country" defaultValue="Bangladesh" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
              <CardDescription>Customize the look and feel of your site</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Color Scheme</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="theme-green"
                      name="theme"
                      className="w-4 h-4 text-green-600"
                      defaultChecked
                    />
                    <Label htmlFor="theme-green" className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-green-600 mr-2"></div>
                      Green (Default)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="theme-blue" name="theme" className="w-4 h-4 text-blue-600" />
                    <Label htmlFor="theme-blue" className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-blue-600 mr-2"></div>
                      Blue
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="theme-amber" name="theme" className="w-4 h-4 text-amber-600" />
                    <Label htmlFor="theme-amber" className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-amber-600 mr-2"></div>
                      Amber
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Font Size</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="font-small" name="font-size" className="w-4 h-4" />
                    <Label htmlFor="font-small">Small</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="font-medium" name="font-size" className="w-4 h-4" defaultChecked />
                    <Label htmlFor="font-medium">Medium (Default)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="font-large" name="font-size" className="w-4 h-4" />
                    <Label htmlFor="font-large">Large</Label>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="dark-mode" />
                <Label htmlFor="dark-mode">Enable Dark Mode</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="animations" defaultChecked />
                <Label htmlFor="animations">Enable Animations</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Logo & Favicon</CardTitle>
              <CardDescription>Update your site's logo and favicon</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Site Logo</Label>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-md bg-green-100 flex items-center justify-center">
                    <span className="text-green-700 font-bold text-xl">TG</span>
                  </div>
                  <Button variant="outline">Upload New Logo</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Favicon</Label>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-md bg-green-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">TG</span>
                  </div>
                  <Button variant="outline">Upload New Favicon</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Configure when and how you receive email notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label>New Booking Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive an email when a new booking is made</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label>Booking Cancellation Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive an email when a booking is cancelled</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label>New User Registration Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive an email when a new user registers</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label>New Review Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive an email when a new review is posted</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label>System Update Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive an email about system updates and maintenance</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure advanced system settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">Put the site in maintenance mode</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label>Debug Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable detailed error messages (not recommended for production)
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label>Cache System</Label>
                  <p className="text-sm text-muted-foreground">Enable system caching for better performance</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input id="session-timeout" type="number" defaultValue="60" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
                Clear Cache
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backup & Restore</CardTitle>
              <CardDescription>Manage system backups and restoration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Database Backup</Label>
                <p className="text-sm text-muted-foreground">Last backup: May 15, 2023, 10:30 AM</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">Create Backup</Button>
                <Button variant="outline">Restore from Backup</Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-600 hover:bg-green-700">Schedule Automatic Backups</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
