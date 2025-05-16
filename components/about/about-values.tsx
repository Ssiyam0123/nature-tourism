import { Heart, Users, Award, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutValues() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Our Values</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-6">What Drives Us</h2>
          <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
            Our core values shape everything we do, from how we design our tours to how we interact with our guests and
            the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">Passion for Nature</h3>
              <p className="text-green-700">
                We're deeply passionate about Bangladesh's natural beauty and committed to sharing it with the world.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">Community Focus</h3>
              <p className="text-green-700">
                We support local communities and ensure they benefit from tourism in their regions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">Excellence</h3>
              <p className="text-green-700">
                We strive for excellence in every aspect of our service, from planning to execution.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">Sustainability</h3>
              <p className="text-green-700">
                We're committed to sustainable practices that preserve natural environments for future generations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
