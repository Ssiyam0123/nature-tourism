"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathName = usePathname()

  // Navbar links data
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/admin", label: "Admin" }
  ]

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-green-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Image 
                src="/images/logo.png" 
                alt="Tourist Guide Logo" 
                fill 
                className="object-contain" 
              />
            </div>
            <span className="font-bold text-xl text-green-900">Tourist Guide</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-green-800 hover:text-green-600 font-medium ${
                  pathName === link.href ? "text-red-300 font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
              Login
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Register</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-green-800" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-green-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-green-800 hover:text-green-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50">
                Login
              </Button>
              <Button className="w-full bg-green-600 hover:bg-green-700">Register</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}