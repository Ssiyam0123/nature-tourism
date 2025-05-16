import { Button } from "@/components/ui/button"

export default function AboutCTA() {
  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Bangladesh's Natural Wonders?</h2>
        <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
          Join us on an unforgettable journey through the breathtaking landscapes of Bangladesh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-green-900 hover:bg-green-100">
            Browse Our Packages
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-800">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
