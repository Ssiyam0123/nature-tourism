import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-bg.jpg" alt="Beautiful forest landscape" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 to-green-950/70" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Discover the Beauty of <span className="text-green-300">Nature</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
          Explore breathtaking landscapes, ancient forests, and natural wonders with our guided tours
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            Explore Packages <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
            Meet Our Guides
          </Button>
        </div>
      </div>
    </section>
  )
}
