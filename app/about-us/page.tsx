import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      {/* Mission Section */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              At Bangladesh Tourism, our mission is to showcase the beauty and cultural richness of Bangladesh to the
              world. We aim to provide authentic travel experiences that connect tourists with local communities,
              promote sustainable tourism, and contribute to the economic development of the country.
            </p>
            <p className="text-lg mb-4">
              We believe that tourism can be a force for good, creating opportunities for cultural exchange,
              environmental conservation, and economic growth. Our platform connects travelers with experienced local
              guides who are passionate about sharing their knowledge and love for Bangladesh.
            </p>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image src="/placeholder.svg?height=300&width=500" alt="Our Mission" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 relative h-[300px] rounded-xl overflow-hidden">
            <Image src="/placeholder.svg?height=300&width=500" alt="Our Story" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-lg mb-4">
              Bangladesh Tourism was founded in 2020 by a group of travel enthusiasts who saw the untapped potential of
              Bangladesh as a tourist destination. Despite its rich cultural heritage, stunning natural landscapes, and
              warm hospitality, Bangladesh remained relatively unknown in the global tourism market.
            </p>
            <p className="text-lg mb-4">
              We started with a simple website featuring a few destinations and a handful of tour guides. Over the
              years, we've grown into a comprehensive platform connecting thousands of travelers with hundreds of local
              guides across Bangladesh. Our commitment to quality, authenticity, and customer satisfaction has made us
              the leading tourism platform in the country.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Meet the Developer</h2>
        <div className="bg-card rounded-xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 relative h-[300px] md:h-auto">
              <Image src="/placeholder.svg?height=400&width=300" alt="Developer" fill className="object-cover" />
            </div>
            <div className="md:col-span-2 p-6">
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-muted-foreground mb-4">Full Stack Developer</p>
              <p className="mb-4">
                John is a passionate full-stack developer with expertise in React, Next.js, Node.js, and MongoDB. He has
                developed numerous web applications, focusing on creating intuitive user interfaces and robust backend
                systems.
              </p>
              <p className="mb-6">
                With a background in computer science and a love for travel, John combined his technical skills and
                passion for exploring Bangladesh to create this tourism platform. He believes in the power of technology
                to connect people and promote cultural exchange.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <GithubIcon className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <LinkedinIcon className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <TwitterIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="relative h-[200px]">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Project 1"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">E-commerce Platform</h3>
              <p className="text-muted-foreground mb-4">
                A full-featured e-commerce platform with product management, cart functionality, and payment
                integration.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="https://github.com" target="_blank">
                  View Project
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <div className="relative h-[200px]">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Project 2"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Task Management App</h3>
              <p className="text-muted-foreground mb-4">
                A collaborative task management application with real-time updates and team collaboration features.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="https://github.com" target="_blank">
                  View Project
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <div className="relative h-[200px]">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Project 3"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Weather Forecast App</h3>
              <p className="text-muted-foreground mb-4">
                A weather forecast application with location-based services and interactive maps.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="https://github.com" target="_blank">
                  View Project
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <div className="bg-card p-6 rounded-xl shadow">
          <p className="text-lg mb-6">
            Have questions or feedback? We'd love to hear from you! Reach out to us through any of the following
            channels:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">info@bangladeshtourism.com</p>
            </div>
            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground">+880 1234 567890</p>
            </div>
            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-muted-foreground">123 Tourism Road, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
