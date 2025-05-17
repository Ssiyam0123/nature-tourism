"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Static user data - in real app this would come from auth state
  const isLoggedIn = true;
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "/placeholder.svg?height=50&width=50",
  };

  // Navigation links array
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/community", label: "Community" },
    { href: "/about-us", label: "About Us" },
    { href: "/trips", label: "Trips" },
    { href: "/admin", label: "Admin" },
  ];

  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      {pathName.includes("/admin") ? (
        ""
      ) : (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo-removebg-preview.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className=""
                />
                <span className="text-xl font-bold">Bangladesh Tourism</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    pathName == link.href
                      ? "text-sm font-medium text-primary"
                      : "text-sm font-medium hover:text-primary"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ModeToggle />
              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Image
                        src={user.image || "/placeholder.svg"}
                        alt="Profile"
                        className="rounded-full object-cover"
                        fill
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {user.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/offer-announcements">
                        Offer Announcements
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOutIcon className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button asChild>
                  <Link href="/login">
                    <UserIcon className="mr-2 h-4 w-4" />
                    Login / Register
                  </Link>
                </Button>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="md:hidden"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenuIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t">
              <div className="container py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-sm font-medium hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </header>
      )}
    </div>
  );
}
