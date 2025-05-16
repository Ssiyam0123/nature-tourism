import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Our Story</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-6">
              Connecting People with Nature Since 2010
            </h2>
            <p className="text-lg text-green-800/80 mb-6">
              Tourist Guide was founded with a simple yet powerful vision: to help people experience the incredible
              natural beauty of Bangladesh while promoting sustainable tourism practices.
            </p>
            <p className="text-lg text-green-800/80 mb-6">
              What started as a small team of passionate nature enthusiasts has grown into a leading tour operator
              specializing in immersive nature experiences. Over the years, we've helped thousands of travelers create
              unforgettable memories while fostering a deeper appreciation for our natural environment.
            </p>
            <p className="text-lg text-green-800/80 mb-8">
              Today, we continue to expand our offerings while staying true to our core values of sustainability,
              authenticity, and exceptional service.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <p className="text-green-800">
                  Expert local guides with deep knowledge of Bangladesh's natural wonders
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <p className="text-green-800">
                  Carefully curated experiences that showcase the best of each destination
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <p className="text-green-800">Commitment to responsible tourism and environmental conservation</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-1.jpg"
                    alt="Our team in action"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-2.jpg"
                    alt="Beautiful destination"
                    width={400}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-3.jpg"
                    alt="Tourists enjoying nature"
                    width={400}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-4.jpg"
                    alt="Wildlife encounter"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-xl hidden md:block">
              <p className="text-3xl font-bold">13+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
