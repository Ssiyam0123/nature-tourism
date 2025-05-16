import Image from "next/image"
import { MapPin, Calendar, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { allPackagesData } from "@/data/all-packages-data"

export default function PackagesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPackagesData.map((pkg, index) => (
            <PackageCard key={index} package={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PackageCard({ package: pkg }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64">
        <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-green-600 hover:bg-green-700">{pkg.type}</Badge>
        </div>
        {pkg.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-amber-500 hover:bg-amber-600">Featured</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-green-900">{pkg.title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium ml-1">{pkg.rating}</span>
          </div>
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-green-700">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{pkg.location}</span>
          </div>
          <div className="flex items-center text-green-700">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{pkg.duration}</span>
          </div>
          <div className="flex items-center text-green-700">
            <Users className="h-4 w-4 mr-2" />
            <span className="text-sm">Max {pkg.groupSize} people</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-green-900 font-bold">
            ${pkg.price} <span className="text-sm font-normal text-green-700">/person</span>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
        </div>
      </CardContent>
    </Card>
  )
}
