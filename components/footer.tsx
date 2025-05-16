import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10 bg-white rounded-full p-1">
                <Image src="/images/logo.png" alt="Tourist Guide Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl">Tourist Guide</span>
            </div>
            <p className="text-green-100 mb-6">
              Your trusted companion for exploring the natural wonders of Bangladesh. We provide immersive experiences
              that connect you with nature.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="bg-green-800 hover:bg-green-700 p-2 rounded-full">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="bg-green-800 hover:bg-green-700 p-2 rounded-full">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="bg-green-800 hover:bg-green-700 p-2 rounded-full">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="bg-green-800 hover:bg-green-700 p-2 rounded-full">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-green-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-green-100 hover:text-white">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-green-100 hover:text-white">
                  Tour Guides
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-green-100 hover:text-white">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-6">Popular Destinations</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Sundarbans Mangrove Forest
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Bandarban Hill Tracts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Sylhet Tea Gardens
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Cox's Bazar Beach
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Rangamati Lake
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Saint Martin Island
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-green-300" />
                <span className="text-green-100">123 Nature Street, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-green-300" />
                <span className="text-green-100">+880 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-green-300" />
                <span className="text-green-100">info@touristguide.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Working Hours</h4>
              <p className="text-green-100">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 text-center">
          <p className="text-green-100">&copy; {new Date().getFullYear()} Tourist Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
