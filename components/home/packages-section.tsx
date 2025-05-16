import Image from "next/image"
import { MapPin, Calendar, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { packageData } from "@/data/package-data"

export default function PackagesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Explore</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-6">Our Popular Packages</h2>
          <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
            Discover our carefully curated selection of nature tours, each designed to showcase the unique beauty of
            Bangladesh's landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packageData.map((pkg, index) => (
            <PackageCard key={index} package={pkg} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
            View All Packages <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from "lucide-react"

function PackageCard({ package: pkg }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64">
        <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-green-600 hover:bg-green-700">{pkg.type}</Badge>
        </div>
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
