import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-green-800">
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 to-green-950/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Get in touch with our team for any inquiries or assistance
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-green-800/80 mb-8">
                Have questions about our tour packages or need assistance planning your trip? Our friendly team is here
                to help you create unforgettable experiences in Bangladesh's natural wonders.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900">Our Location</h3>
                    <p className="text-green-700">123 Nature Street, Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900">Phone Number</h3>
                    <p className="text-green-700">+880 123 456 7890</p>
                    <p className="text-green-700">+880 987 654 3210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900">Email Address</h3>
                    <p className="text-green-700">info@touristguide.com</p>
                    <p className="text-green-700">support@touristguide.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900">Working Hours</h3>
                    <p className="text-green-700">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-green-100 hover:bg-green-200 p-3 rounded-full text-green-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-green-100 hover:bg-green-200 p-3 rounded-full text-green-700 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-green-100 hover:bg-green-200 p-3 rounded-full text-green-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-green-800 mb-1">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-1">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-green-800 mb-1">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-800 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></Textarea>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Our Location</h2>
            <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
              Visit our office to meet our team and discuss your travel plans in person
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Interactive Map Would Be Displayed Here</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
              Find answers to common questions about our tours and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-2">How do I book a tour?</h3>
              <p className="text-green-800">
                You can book a tour through our website by selecting your desired package and following the booking
                process. Alternatively, you can contact our team via phone or email for assistance.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-2">What is your cancellation policy?</h3>
              <p className="text-green-800">
                Our standard cancellation policy allows for a full refund if cancelled 30 days before the tour date. For
                cancellations made 15-29 days before, a 50% refund is provided. Cancellations less than 15 days before
                the tour are non-refundable.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Do you offer customized tours?</h3>
              <p className="text-green-800">
                Yes, we offer customized tours tailored to your preferences and requirements. Please contact our team to
                discuss your specific needs and we'll create a personalized itinerary for you.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-2">What should I pack for the tours?</h3>
              <p className="text-green-800">
                Packing requirements vary depending on the destination and season. Once you book a tour, we'll provide a
                detailed packing list specific to your tour. Generally, comfortable clothing, walking shoes, and weather
                appropriate gear are recommended.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
