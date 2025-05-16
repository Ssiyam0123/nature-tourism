import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { guideData } from "@/data/guide-data"

export default function TourGuidesSection() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Our Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-6">Meet Our Tour Guides</h2>
          <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
            Our experienced guides are passionate about nature and committed to providing you with an unforgettable
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guideData.map((guide, index) => (
            <GuideCard key={index} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GuideCard({ guide }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-80">
        <Image src={guide.image || "/placeholder.svg"} alt={guide.name} fill className="object-cover" />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold text-green-900 mb-1">{guide.name}</h3>
        <p className="text-green-700 mb-4">{guide.specialty}</p>
        <p className="text-green-800/80 mb-6">{guide.bio}</p>
        <Button className="bg-green-600 hover:bg-green-700">View Profile</Button>
      </CardContent>
    </Card>
  )
}
