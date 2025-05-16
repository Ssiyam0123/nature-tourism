import Image from "next/image"

export default function PackagesHero() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/packages-hero.jpg" alt="Tour packages" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 to-green-950/70" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Our Tour Packages</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
          Explore our carefully curated selection of nature tours in Bangladesh
        </p>
      </div>
    </section>
  )
}
