"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { PackageCard } from "@/components/package-card";
import { TourGuideCard } from "@/components/tour-guide-card";
import { StoryCard } from "@/components/story-card";
import { motion } from "framer-motion";

export default function Home() {
  // Sample data for packages
  const packages = [
    {
      id: "1",
      title: "Cox's Bazar Beach Getaway",
      type: "Beach",
      price: 15000,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "2",
      title: "Sundarbans Mangrove Adventure",
      type: "Wildlife",
      price: 25000,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "3",
      title: "Sylhet Tea Garden Tour",
      type: "Nature",
      price: 12000,
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  // Sample data for tour guides
  const tourGuides = [
    {
      id: "1",
      name: "Rahim Ahmed",
      experience: "5 years",
      speciality: "Beach Tours",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "2",
      name: "Fatima Khan",
      experience: "7 years",
      speciality: "Wildlife Tours",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "3",
      name: "Kamal Hossain",
      experience: "4 years",
      speciality: "Mountain Tours",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "4",
      name: "Nusrat Jahan",
      experience: "6 years",
      speciality: "Cultural Tours",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "5",
      name: "Imran Ali",
      experience: "3 years",
      speciality: "Adventure Tours",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "6",
      name: "Sadia Rahman",
      experience: "8 years",
      speciality: "Historical Tours",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  // Sample data for stories
  const stories = [
    {
      id: "1",
      title: "My Amazing Trip to Cox's Bazar",
      content:
        "It was an unforgettable experience with beautiful beaches and sunsets...",
      author: "Arif Khan",
      date: "2023-05-15",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "2",
      title: "Exploring the Sundarbans",
      content:
        "Seeing Royal Bengal Tigers in their natural habitat was breathtaking...",
      author: "Mina Rahman",
      date: "2023-06-22",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "3",
      title: "Tea Gardens of Sylhet",
      content:
        "The lush green tea gardens and the misty mountains were a sight to behold...",
      author: "Kabir Ahmed",
      date: "2023-07-10",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "4",
      title: "Historical Tour of Old Dhaka",
      content:
        "The rich history and architecture of Old Dhaka left me in awe...",
      author: "Laila Begum",
      date: "2023-08-05",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner Section */}
      <section className="relative h-[500px] rounded-xl overflow-hidden mb-16">
        import Image from 'next/image';
        <Image
          src="/banner.jpg" // Note: Remove "/public" from the path
          alt="Banner image"
          fill
          style={{ objectFit: "cover" }} // or "contain" based on your needs
          sizes="100vw" // important for responsive images
          quality={100} // optional
          priority // optional if this is above the fold
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Bangladesh
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-center max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience the beauty, culture, and hospitality of Bangladesh
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg">
              <Link href="/trips">Explore Packages</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Welcome to Bangladesh Tourism
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Bangladesh, a land of natural beauty, rich culture, and warm
              hospitality, offers a diverse range of experiences for travelers.
              From the world's longest natural sea beach in Cox's Bazar to the
              majestic Sundarbans mangrove forest, home to the Royal Bengal
              Tiger, Bangladesh has something for everyone.
            </p>
            <p className="text-lg mb-4">
              Our tourism platform connects you with the best tour guides and
              packages to explore this beautiful country. Whether you're
              interested in beach getaways, wildlife adventures, cultural
              experiences, or historical tours, we've got you covered.
            </p>
            <Button asChild>
              <Link href="/about-us">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dqr0L_aZ3JU"
              title="Bangladesh Tourism Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Tourism and Travel Guide Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Tourism and Travel Guide
        </h2>
        <Tabs defaultValue="packages" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="packages">Our Packages</TabsTrigger>
            <TabsTrigger value="guides">Meet Our Tour Guides</TabsTrigger>
          </TabsList>
          <TabsContent value="packages" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link href="/trips">View All Packages</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="guides" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tourGuides.map((guide) => (
                <TourGuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Tourist Story Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Tourist Stories</h2>
          <Button asChild variant="outline">
            <Link href="/community">All Stories</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      {/* Popular Destinations Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-[200px] rounded-xl overflow-hidden group">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Cox's Bazar"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <h3 className="text-white font-bold text-xl">Cox's Bazar</h3>
            </div>
          </div>
          <div className="relative h-[200px] rounded-xl overflow-hidden group">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Sundarbans"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <h3 className="text-white font-bold text-xl">Sundarbans</h3>
            </div>
          </div>
          <div className="relative h-[200px] rounded-xl overflow-hidden group">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Sylhet"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <h3 className="text-white font-bold text-xl">Sylhet</h3>
            </div>
          </div>
          <div className="relative h-[200px] rounded-xl overflow-hidden group">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Saint Martin"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <h3 className="text-white font-bold text-xl">Saint Martin</h3>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          What Our Tourists Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl shadow">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Tourist"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Rahima Begum</h4>
                <p className="text-muted-foreground">Dhaka, Bangladesh</p>
              </div>
            </div>
            <p className="italic">
              "The tour guide was extremely knowledgeable and made our trip to
              Cox's Bazar unforgettable. Highly recommended!"
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Tourist"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Karim Ahmed</h4>
                <p className="text-muted-foreground">Chittagong, Bangladesh</p>
              </div>
            </div>
            <p className="italic">
              "The Sundarbans tour was well-organized and exceeded all our
              expectations. We even spotted a Royal Bengal Tiger!"
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Tourist"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Nusrat Jahan</h4>
                <p className="text-muted-foreground">Sylhet, Bangladesh</p>
              </div>
            </div>
            <p className="italic">
              "The tea garden tour in Sylhet was breathtaking. Our guide was
              friendly and shared fascinating insights about tea production."
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
