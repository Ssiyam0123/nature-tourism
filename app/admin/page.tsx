import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart3Icon,
  CalendarIcon,
  CreditCardIcon,
  DollarSignIcon,
  PackageIcon,
  PieChartIcon,
  UsersIcon,
} from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <CalendarIcon className="h-4 w-4 mr-2" />
            May 2025
          </Button>
          <Button>Refresh</Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">৳450,000</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <DollarSignIcon className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-xs text-green-500">
                <span className="font-medium">+12.5%</span>
                <span className="ml-1">from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
                <p className="text-2xl font-bold">86</p>
              </div>
              <div className="p-2 bg-blue-500/10 rounded-full">
                <CalendarIcon className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-xs text-green-500">
                <span className="font-medium">+15.3%</span>
                <span className="ml-1">from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">1,245</p>
              </div>
              <div className="p-2 bg-green-500/10 rounded-full">
                <UsersIcon className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-xs text-green-500">
                <span className="font-medium">+8.2%</span>
                <span className="ml-1">from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Packages</p>
                <p className="text-2xl font-bold">48</p>
              </div>
              <div className="p-2 bg-purple-500/10 rounded-full">
                <PackageIcon className="h-5 w-5 text-purple-500" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-xs text-green-500">
                <span className="font-medium">+4</span>
                <span className="ml-1">new this month</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Revenue Reports Card */}
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <DollarSignIcon className="h-5 w-5 text-primary" />
              Revenue Reports
            </CardTitle>
            <CardDescription>View detailed revenue reports</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-[160px] flex flex-col">
              <div className="flex-1 grid grid-cols-6 gap-1 items-end pb-4">
                {[65, 40, 75, 50, 85, 70, 90, 80, 60, 85, 95, 75].map((height, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-full bg-primary rounded-t-sm" style={{ height: `${height}%` }}></div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-6 gap-1 mt-1 text-[10px] text-center text-muted-foreground">
                {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((month, i) => (
                  <div key={i}>{month}</div>
                ))}
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Total Revenue</p>
                <p className="text-xl font-bold">৳450,000</p>
              </div>
              <div className="text-sm text-green-500">+12.5%</div>
            </div>
          </CardContent>
          <CardFooter className="pt-2">
            <Link href="/admin/reports" className="w-full">
              <Button variant="outline" className="w-full">
                <BarChart3Icon className="h-4 w-4 mr-2" />
                View Reports
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* User Analytics Card */}
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <UsersIcon className="h-5 w-5 text-green-500" />
              User Analytics
            </CardTitle>
            <CardDescription>View user growth and engagement analytics</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-[160px] flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-8 border-muted relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 rounded-full border-8 border-green-500"
                    style={{
                      clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)",
                    }}
                  ></div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">1,245</p>
                  <p className="text-xs text-muted-foreground">Total Users</p>
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-muted-foreground">Tourists</p>
                <p className="text-sm font-medium">1,120</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Guides</p>
                <p className="text-sm font-medium">100</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Admins</p>
                <p className="text-sm font-medium">25</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-2">
            <Link href="/admin/users" className="w-full">
              <Button variant="outline" className="w-full">
                <PieChartIcon className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Package Performance Card */}
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <PackageIcon className="h-5 w-5 text-purple-500" />
              Package Performance
            </CardTitle>
            <CardDescription>View package booking performance</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">Cox's Bazar Beach Getaway</span>
                  <span className="text-sm font-medium">28</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">Sundarbans Safari</span>
                  <span className="text-sm font-medium">22</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">Sajek Valley Trek</span>
                  <span className="text-sm font-medium">18</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">Bandarban Hills</span>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-2">
            <Link href="/admin/packages" className="w-full">
              <Button variant="outline" className="w-full">
                <BarChart3Icon className="h-4 w-4 mr-2" />
                View Performance
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest booking payments and refunds</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: "TX123456",
                customer: "Ahmed Khan",
                package: "Cox's Bazar Beach Getaway",
                amount: "৳18,500",
                status: "Completed",
                date: "May 16, 2025",
              },
              {
                id: "TX123455",
                customer: "Fatima Rahman",
                package: "Sundarbans Safari",
                amount: "৳22,000",
                status: "Pending",
                date: "May 15, 2025",
              },
              {
                id: "TX123454",
                customer: "Mohammad Ali",
                package: "Sajek Valley Trek",
                amount: "৳15,000",
                status: "Completed",
                date: "May 14, 2025",
              },
              {
                id: "TX123453",
                customer: "Nusrat Jahan",
                package: "Bandarban Hills",
                amount: "৳12,500",
                status: "Refunded",
                date: "May 13, 2025",
              },
              {
                id: "TX123452",
                customer: "Kamal Hossain",
                package: "Sylhet Tea Gardens",
                amount: "৳9,800",
                status: "Completed",
                date: "May 12, 2025",
              },
            ].map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <CreditCardIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.customer}</p>
                    <p className="text-sm text-muted-foreground">{transaction.package}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{transaction.amount}</p>
                  <p
                    className={`text-sm ${
                      transaction.status === "Completed"
                        ? "text-green-500"
                        : transaction.status === "Pending"
                          ? "text-yellow-500"
                          : "text-red-500"
                    }`}
                  >
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/admin/payments" className="w-full">
            <Button variant="outline" className="w-full">
              View All Transactions
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
