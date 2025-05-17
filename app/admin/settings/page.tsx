import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { SaveIcon } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">System Settings</h1>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input id="site-name" defaultValue="Bangladesh Tourism" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="site-description">Site Description</Label>
                  <Textarea
                    id="site-description"
                    defaultValue="Discover the beauty and culture of Bangladesh with our expert tour guides and carefully curated packages."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input id="contact-email" type="email" defaultValue="info@bangladeshtourism.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Contact Phone</Label>
                    <Input id="contact-phone" defaultValue="+880 1234 567890" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Tourism Road, Dhaka, Bangladesh" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="asia-dhaka">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asia-dhaka">Asia/Dhaka</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="america-new_york">America/New_York</SelectItem>
                        <SelectItem value="europe-london">Europe/London</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date-format">Date Format</Label>
                    <Select defaultValue="dd-mm-yyyy">
                      <SelectTrigger id="date-format">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                        <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                        <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      When enabled, the site will show a maintenance page to visitors
                    </p>
                  </div>
                  <Switch id="maintenance-mode" />
                </div>

                <div className="flex justify-end">
                  <Button>
                    <SaveIcon className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="logo">Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center">
                      <span className="text-muted-foreground">Logo</span>
                    </div>
                    <Input id="logo" type="file" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="favicon">Favicon</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 bg-muted rounded-md flex items-center justify-center">
                      <span className="text-muted-foreground text-xs">Favicon</span>
                    </div>
                    <Input id="favicon" type="file" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <div className="flex">
                      <Input id="primary-color" defaultValue="#3B82F6" />
                      <div className="w-10 h-10 bg-primary ml-2 rounded-md"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondary-color">Secondary Color</Label>
                    <div className="flex">
                      <Input id="secondary-color" defaultValue="#10B981" />
                      <div className="w-10 h-10 bg-green-500 ml-2 rounded-md"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable dark mode option for users</p>
                  </div>
                  <Switch id="dark-mode" defaultChecked />
                </div>

                <div className="flex justify-end">
                  <Button>
                    <SaveIcon className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>Email Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="smtp-host">SMTP Host</Label>
                  <Input id="smtp-host" defaultValue="smtp.example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="smtp-port">SMTP Port</Label>
                    <Input id="smtp-port" defaultValue="587" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp-encryption">Encryption</Label>
                    <Select defaultValue="tls">
                      <SelectTrigger id="smtp-encryption">
                        <SelectValue placeholder="Select encryption" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tls">TLS</SelectItem>
                        <SelectItem value="ssl">SSL</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="smtp-username">SMTP Username</Label>
                    <Input id="smtp-username" defaultValue="info@bangladeshtourism.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp-password">SMTP Password</Label>
                    <Input id="smtp-password" type="password" defaultValue="********" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="from-email">From Email</Label>
                  <Input id="from-email" defaultValue="noreply@bangladeshtourism.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="from-name">From Name</Label>
                  <Input id="from-name" defaultValue="Bangladesh Tourism" />
                </div>

                <div className="flex justify-end">
                  <Button>
                    <SaveIcon className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select defaultValue="bdt">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bdt">BDT (৳)</SelectItem>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Payment Gateways</h3>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Switch id="stripe-enabled" defaultChecked />
                        <Label htmlFor="stripe-enabled" className="ml-2">
                          Stripe
                        </Label>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="stripe-key">API Key</Label>
                          <Input id="stripe-key" defaultValue="pk_test_***********************" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="stripe-secret">Secret Key</Label>
                          <Input id="stripe-secret" type="password" defaultValue="sk_test_***********************" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Switch id="paypal-enabled" />
                        <Label htmlFor="paypal-enabled" className="ml-2">
                          PayPal
                        </Label>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="paypal-client-id">Client ID</Label>
                          <Input id="paypal-client-id" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="paypal-secret">Secret</Label>
                          <Input id="paypal-secret" type="password" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Switch id="bkash-enabled" defaultChecked />
                        <Label htmlFor="bkash-enabled" className="ml-2">
                          bKash
                        </Label>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="bkash-username">Username</Label>
                          <Input id="bkash-username" defaultValue="bangladeshtourism" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bkash-password">Password</Label>
                          <Input id="bkash-password" type="password" defaultValue="********" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>
                    <SaveIcon className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Require administrators to use two-factor authentication
                    </p>
                  </div>
                  <Switch id="two-factor" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="force-ssl">Force SSL</Label>
                    <p className="text-sm text-muted-foreground">Force all connections to use HTTPS instead of HTTP</p>
                  </div>
                  <Switch id="force-ssl" defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password-policy">Password Policy</Label>
                  <Select defaultValue="strong">
                    <SelectTrigger id="password-policy">
                      <SelectValue placeholder="Select password policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic (minimum 8 characters)</SelectItem>
                      <SelectItem value="medium">Medium (minimum 8 characters, including numbers)</SelectItem>
                      <SelectItem value="strong">
                        Strong (minimum 8 characters, including numbers and special characters)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input id="session-timeout" type="number" defaultValue="30" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-attempts">Maximum Login Attempts</Label>
                  <Input id="login-attempts" type="number" defaultValue="5" />
                </div>

                <div className="flex justify-end">
                  <Button>
                    <SaveIcon className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
