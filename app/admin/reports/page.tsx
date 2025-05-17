"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Area,
  Bar,
  CartesianGrid,
  Chart,
  ChartTooltip,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { BarChart3Icon, DownloadIcon, LineChartIcon, PieChartIcon } from "lucide-react"
import { fetchRevenueStatistics, fetchBookingStatistics, fetchUserStatistics, fetchPackageStatistics } from "@/lib/data"
import { Skeleton } from "@/components/ui/skeleton"
import { Cell } from "recharts"

export default function AdminReportsPage() {
  const [loading, setLoading] = useState(true)
  const [revenueData, setRevenueData] = useState<any>(null)
  const [bookingData, setBookingData] = useState<any>(null)
  const [userData, setUserData] = useState<any>(null)
  const [packageData, setPackageData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const revenue = await fetchRevenueStatistics()
        const bookings = await fetchBookingStatistics()
        const users = await fetchUserStatistics()
        const packages = await fetchPackageStatistics()

        setRevenueData(revenue)
        setBookingData(bookings)
        setUserData(users)
        setPackageData(packages)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Format revenue data for charts
  const monthlyRevenueData = revenueData?.monthly
    ? [
        { name: "Jan", revenue: revenueData.monthly[0] },
        { name: "Feb", revenue: revenueData.monthly[1] },
        { name: "Mar", revenue: revenueData.monthly[2] },
        { name: "Apr", revenue: revenueData.monthly[3] },
        { name: "May", revenue: revenueData.monthly[4] },
        { name: "Jun", revenue: revenueData.monthly[5] },
        { name: "Jul", revenue: revenueData.monthly[6] },
        { name: "Aug", revenue: revenueData.monthly[7] },
        { name: "Sep", revenue: revenueData.monthly[8] },
        { name: "Oct", revenue: revenueData.monthly[9] },
        { name: "Nov", revenue: revenueData.monthly[10] },
        { name: "Dec", revenue: revenueData.monthly[11] },
      ]
    : []

  // Format revenue by category data for pie chart
  const revenueByCategoryData = revenueData?.byCategory
    ? [
        { name: "Beach Tours", value: revenueData.byCategory.beach },
        { name: "Wildlife Tours", value: revenueData.byCategory.wildlife },
        { name: "Nature Tours", value: revenueData.byCategory.nature },
        { name: "Other Tours", value: revenueData.byCategory.other },
      ]
    : []

  // Colors for pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  const formatCurrency = (value: number) => {
    return `৳${value.toLocaleString()}`
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <Button>
          <DownloadIcon className="h-4 w-4 mr-2" />
          Export Reports
        </Button>
      </div>

      {/* Report Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Report Filters</CardTitle>
          <CardDescription>Customize your report view</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date Range</label>
              <Select defaultValue="this-month">
                <SelectTrigger>
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Report Type</label>
              <Select defaultValue="revenue">
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="bookings">Bookings</SelectItem>
                  <SelectItem value="users">Users</SelectItem>
                  <SelectItem value="packages">Packages</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Comparison</label>
              <Select defaultValue="previous-period">
                <SelectTrigger>
                  <SelectValue placeholder="Select comparison" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="previous-period">Previous Period</SelectItem>
                  <SelectItem value="previous-year">Previous Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button>Generate Report</Button>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Overview Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Monthly revenue trends for the current year</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <Skeleton className="h-[350px] w-full" />
          ) : (
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={monthlyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `৳${value / 1000}k`}
                  />
                  <Tooltip content={<ChartTooltip formatter={(value) => formatCurrency(value)} />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    fill="rgba(34, 197, 94, 0.2)"
                    stroke="#22c55e"
                    name="Revenue"
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2 }}
                    activeDot={{ r: 6, strokeWidth: 2 }}
                    name="Revenue"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </Chart>
          )}
        </CardContent>
      </Card>

      {/* Report Tabs */}
      <Tabs defaultValue="revenue" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="packages">Packages</TabsTrigger>
        </TabsList>

        {/* Revenue Tab */}
        <TabsContent value="revenue">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Total Revenue</h3>
                  <LineChartIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                {loading ? (
                  <Skeleton className="h-8 w-32" />
                ) : (
                  <>
                    <p className="text-3xl font-bold">{revenueData?.formattedTotal || "৳0"}</p>
                    <p className="text-sm text-green-500 mt-1">+{revenueData?.growthRate || 0}% from last month</p>
                  </>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Average Booking Value</h3>
                  <BarChart3Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                {loading ? (
                  <Skeleton className="h-8 w-32" />
                ) : (
                  <>
                    <p className="text-3xl font-bold">{revenueData?.formattedAverageBookingValue || "৳0"}</p>
                    <p className="text-sm text-green-500 mt-1">+5.2% from last month</p>
                  </>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Revenue by Package Type</h3>
                  <PieChartIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                {loading ? (
                  <Skeleton className="h-[150px] w-full" />
                ) : (
                  <Chart className="h-[150px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={revenueByCategoryData}
                          cx="50%"
                          cy="50%"
                          innerRadius={30}
                          outerRadius={60}
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {revenueByCategoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip content={<ChartTooltip formatter={(value) => formatCurrency(value)} />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </Chart>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>Monthly revenue for the current year</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton className="h-[300px] w-full" />
              ) : (
                <Chart>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={monthlyRevenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `৳${value / 1000}k`} />
                      <Tooltip content={<ChartTooltip formatter={(value) => formatCurrency(value)} />} />
                      <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </Chart>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Bookings Tab */}
        <TabsContent value="bookings">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Total Bookings</h3>
                  <BarChart3Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                {loading ? (
                  <Skeleton className="h-8 w-20" />
                ) : (
                  <>
                    <p className="text-3xl font-bold">{bookingData?.total || 0}</p>
                    <p className="text-sm text-green-500 mt-1">+{bookingData?.growthRate || 0}% from last month</p>
                  </>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Booking Conversion Rate</h3>
                  <LineChartIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                {loading ? (
                  <Skeleton className="h-8 w-20" />
                ) : (
                  <>
                    <p className="text-3xl font-bold">{bookingData?.conversionRate || 0}%</p>
                    <p className="text-sm text-green-500 mt-1">+3.2% from last month</p>
                  </>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Booking Status</h3>
                  <PieChartIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                {loading ? (
                  <Skeleton className="h-[150px] w-full" />
                ) : (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Confirmed</span>
                      <span className="font-medium">
                        {bookingData?.confirmed || 0} (
                        {Math.round((bookingData?.confirmed / bookingData?.total) * 100) || 0}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${Math.round((bookingData?.confirmed / bookingData?.total) * 100) || 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pending</span>
                      <span className="font-medium">
                        {bookingData?.pending || 0} (
                        {Math.round((bookingData?.pending / bookingData?.total) * 100) || 0}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-yellow-500 h-2.5 rounded-full"
                        style={{ width: `${Math.round((bookingData?.pending / bookingData?.total) * 100) || 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Completed</span>
                      <span className="font-medium">
                        {bookingData?.completed || 0} (
                        {Math.round((bookingData?.completed / bookingData?.total) * 100) || 0}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${Math.round((bookingData?.completed / bookingData?.total) * 100) || 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cancelled</span>
                      <span className="font-medium">
                        {bookingData?.cancelled || 0} (
                        {Math.round((bookingData?.cancelled / bookingData?.total) * 100) || 0}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-red-500 h-2.5 rounded-full"
                        style={{ width: `${Math.round((bookingData?.cancelled / bookingData?.total) * 100) || 0}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Booking Trend</CardTitle>
              <CardDescription>Monthly bookings for the current year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex flex-col">
                <div className="flex-1 grid grid-cols-12 gap-2 items-end pb-6 border-b">
                  {[30, 45, 35, 50, 65, 55, 70, 85, 75, 60, 80, 90].map((height, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className={`w-full bg-blue-500 rounded-t-sm ${i === 5 ? "opacity-70" : ""}`}
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-12 gap-2 mt-2 text-xs text-center text-muted-foreground">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                    (month, i) => (
                      <div key={i}>{month}</div>
                    ),
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Total Users</h3>
                  <BarChart3Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                {loading ? (
                  <Skeleton className="h-8 w-24" />
                ) : (
                  <>
                    <p className="text-3xl font-bold">{userData?.total.toLocaleString() || 0}</p>
                    <p className="text-sm text-green-500 mt-1">+{userData?.growthRate || 0}% from last month</p>
                  </>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">New Users</h3>
                  <LineChartIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                {loading ? (
                  <Skeleton className="h-8 w-20" />
                ) : (
                  <>
                    <p className="text-3xl font-bold">{userData?.newThisMonth || 0}</p>
                    <p className="text-sm text-green-500 mt-1">+12.8% from last month</p>
                  </>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">User Roles</h3>
                  <PieChartIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                {loading ? (
                  <Skeleton className="h-[150px] w-full" />
                ) : (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Tourists</span>
                      <span className="font-medium">
                        {userData?.tourists.toLocaleString() || 0} (
                        {Math.round((userData?.tourists / userData?.total) * 100) || 0}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${Math.round((userData?.tourists / userData?.total) * 100) || 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tour Guides</span>
                      <span className="font-medium">
                        {userData?.guides.toLocaleString() || 0} (
                        {Math.round((userData?.guides / userData?.total) * 100) || 0}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${Math.round((userData?.guides / userData?.total) * 100) || 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Admins</span>
                      <span className="font-medium">
                        {userData?.admins.toLocaleString() || 0} (
                        {Math.round((userData?.admins / userData?.total) * 100) || 0}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-purple-500 h-2.5 rounded-full"
                        style={{ width: `${Math.round((userData?.admins / userData?.total) * 100) || 0}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              <CardDescription>Monthly user registrations for the current year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex flex-col">
                <div className="flex-1 grid grid-cols-12 gap-2 items-end pb-6 border-b">
                  {[20, 35, 45, 60, 75, 85, 95, 90, 80, 85, 95, 100].map((height, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className={`w-full bg-green-500 rounded-t-sm ${i === 5 ? "opacity-70" : ""}`}
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-12 gap-2 mt-2 text-xs text-center text-muted-foreground">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                    (month, i) => (
                      <div key={i}>{month}</div>
                    ),
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Packages Tab */}
        <TabsContent value="packages">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Total Packages</h3>
                  <BarChart3Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                {loading ? (
                  <Skeleton className="h-8 w-16" />
                ) : (
                  <>
                    <p className="text-3xl font-bold">{packageData?.total || 0}</p>
                    <p className="text-sm text-green-500 mt-1">+{packageData?.newThisMonth || 0} new this month</p>
                  </>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Most Booked Package</h3>
                  <LineChartIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                {loading ? (
                  <>
                    <Skeleton className="h-6 w-48 mb-2" />
                    <Skeleton className="h-4 w-32" />
                  </>
                ) : (
                  <>
                    <p className="text-xl font-bold">Cox's Bazar Beach Getaway</p>
                    <p className="text-sm text-muted-foreground mt-1">28 bookings this month</p>
                  </>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Package Types</h3>
                  <PieChartIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                {loading ? (
                  <Skeleton className="h-[150px] w-full" />
                ) : (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Beach</span>
                      <span className="font-medium">
                        {packageData?.categories.beach || 0} (
                        {Math.round((packageData?.categories.beach / packageData?.total) * 100) || 0}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{
                          width: `${Math.round((packageData?.categories.beach / packageData?.total) * 100) || 0}%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Wildlife</span>
                      <span className="font-medium">
                        {packageData?.categories.wildlife || 0} (
                        {Math.round((packageData?.categories.wildlife / packageData?.total) * 100) || 0}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{
                          width: `${Math.round((packageData?.categories.wildlife / packageData?.total) * 100) || 0}%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Nature</span>
                      <span className="font-medium">
                        {packageData?.categories.nature || 0} (
                        {Math.round((packageData?.categories.nature / packageData?.total) * 100) || 0}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-yellow-500 h-2.5 rounded-full"
                        style={{
                          width: `${Math.round((packageData?.categories.nature / packageData?.total) * 100) || 0}%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Adventure</span>
                      <span className="font-medium">
                        {packageData?.categories.adventure || 0} (
                        {Math.round((packageData?.categories.adventure / packageData?.total) * 100) || 0}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-red-500 h-2.5 rounded-full"
                        style={{
                          width: `${Math.round((packageData?.categories.adventure / packageData?.total) * 100) || 0}%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Historical</span>
                      <span className="font-medium">
                        {packageData?.categories.historical || 0} (
                        {Math.round((packageData?.categories.historical / packageData?.total) * 100) || 0}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-purple-500 h-2.5 rounded-full"
                        style={{
                          width: `${Math.round((packageData?.categories.historical / packageData?.total) * 100) || 0}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Package Performance</CardTitle>
              <CardDescription>Booking performance by package</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex flex-col">
                <div className="flex-1 grid grid-cols-6 gap-4 items-end pb-6 border-b">
                  {[
                    { name: "Cox's Bazar", value: 85 },
                    { name: "Sundarbans", value: 70 },
                    { name: "Sajek Valley", value: 60 },
                    { name: "Bandarban", value: 75 },
                    { name: "Sylhet", value: 50 },
                    { name: "Rangamati", value: 40 },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-full bg-primary rounded-t-sm" style={{ height: `${item.value}%` }}></div>
                      <div className="mt-2 text-xs text-center text-muted-foreground w-full truncate">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
