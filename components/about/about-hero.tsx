import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/about-hero.jpg" alt="About us" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 to-green-950/70" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">About Us</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
          Learn about our mission to connect travelers with the natural wonders of Bangladesh
        </p>
      </div>
    </section>
  )
}
