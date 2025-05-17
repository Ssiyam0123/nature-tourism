"use client";

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer({ minimal = false }: { minimal?: boolean }) {
  const router = useRouter();
  const pathName = usePathname();

  if (minimal) {
    return (
      <footer className="border-t py-4">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image
              src="/logo-removebg-preview.png"
              alt="Logo"
              width={24}
              height={24}
            />
            <span className="text-sm font-semibold">Bangladesh Tourism</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Bangladesh Tourism. All rights
            reserved.
          </p>
        </div>
      </footer>
    );
  }

  return (
    <div>
      {pathName.includes("/admin") || !pathName.includes("/dashboard")  && (
        <footer className="border-t py-12 bg-muted/40">
          <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo-removebg-preview.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
                <span className="text-xl font-bold">Bangladesh Tourism</span>
              </div>
              <p className="text-muted-foreground">
                Discover the beauty and culture of Bangladesh with our expert
                tour guides and carefully curated packages.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <FacebookIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <InstagramIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <GithubIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trips"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Trips
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Login / Register
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">
                Popular Destinations
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/trips"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cox's Bazar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trips"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Sundarbans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trips"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Sylhet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trips"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Saint Martin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trips"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Bandarban
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  123 Tourism Road, Dhaka, Bangladesh
                </li>
                <li className="text-muted-foreground">
                  info@bangladeshtourism.com
                </li>
                <li className="text-muted-foreground">+880 1234 567890</li>
              </ul>
            </div>
          </div>

          <div className="container mt-8 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Bangladesh Tourism. All rights
                reserved.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
