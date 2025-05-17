import { PackageCard } from "@/components/package-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TripsPage() {
  // Sample data for packages
  const packages = [
    {
      id: "1",
      title: "Cox's Bazar Beach Getaway",
      type: "Beach",
      price: 15000,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "2",
      title: "Sundarbans Mangrove Adventure",
      type: "Wildlife",
      price: 25000,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "3",
      title: "Sylhet Tea Garden Tour",
      type: "Nature",
      price: 12000,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "4",
      title: "Saint Martin Island Escape",
      type: "Beach",
      price: 18000,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "5",
      title: "Rangamati Lake Cruise",
      type: "Nature",
      price: 14000,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "6",
      title: "Bandarban Hill Trekking",
      type: "Adventure",
      price: 16000,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "7",
      title: "Paharpur Buddhist Monastery Tour",
      type: "Historical",
      price: 10000,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "8",
      title: "Kuakata Beach Weekend",
      type: "Beach",
      price: 13000,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "9",
      title: "Dhaka City Tour",
      type: "Cultural",
      price: 8000,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Our Tour Packages</h1>

      {/* Filter Section */}
      <div className="bg-card p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Filter Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Search</label>
            <Input placeholder="Search packages..." />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tour Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select tour type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="beach">Beach</SelectItem>
                <SelectItem value="wildlife">Wildlife</SelectItem>
                <SelectItem value="nature">Nature</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="historical">Historical</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price Range</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under ৳10,000</SelectItem>
                <SelectItem value="medium">৳10,000 - ৳15,000</SelectItem>
                <SelectItem value="high">Above ৳15,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button>Apply Filters</Button>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} package={pkg} />
        ))}
      </div>
    </div>
  )
}
