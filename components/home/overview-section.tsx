import { Badge } from "@/components/ui/badge"

export default function OverviewSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Our Mission</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-6">Connecting You With Nature</h2>
          <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
            The Tourist Guide is your gateway to experiencing the most beautiful natural destinations in Bangladesh. We
            provide comprehensive resources to help you plan the perfect nature retreat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <video className="w-full h-auto" autoPlay muted loop poster="/images/video-poster.jpg">
              <source src="/videos/nature-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Immersive Experiences</h3>
              <p className="text-green-700/80">
                Our tours are designed to provide deep connections with nature, allowing you to experience the sights,
                sounds, and sensations of Bangladesh's natural wonders.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Expert Local Guides</h3>
              <p className="text-green-700/80">
                Our knowledgeable guides share insights about local ecosystems, wildlife, and cultural significance of
                each destination.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Sustainable Tourism</h3>
              <p className="text-green-700/80">
                We're committed to preserving the natural beauty of Bangladesh through responsible tourism practices and
                environmental education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
