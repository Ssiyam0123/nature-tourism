"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type { UserRole } from "@/lib/types"
import {
  FileTextIcon,
  ImageIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  MenuIcon,
  PackageIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Sidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // This is a static version, so we'll simulate a logged-in user with a specific role
  // In a real application, this would come from authentication state
  const userRole: UserRole = "admin" // Change this to "tourist" or "guide" to see different sidebar items

  // Common sidebar items for all roles
  const commonItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboardIcon className="h-5 w-5" />,
    },
    {
      title: "Manage Profile",
      href: "/dashboard/manage-profile",
      icon: <UserIcon className="h-5 w-5" />,
    },
    {
      title: "Add Story",
      href: "/dashboard/add-story",
      icon: <FileTextIcon className="h-5 w-5" />,
    },
    {
      title: "Manage Stories",
      href: "/dashboard/manage-stories",
      icon: <ImageIcon className="h-5 w-5" />,
    },
  ]

  // Role-specific sidebar items
  const roleSpecificItems = {
    admin: [
      {
        title: "Add Package",
        href: "/dashboard/add-package",
        icon: <PackageIcon className="h-5 w-5" />,
      },
      {
        title: "Manage Users",
        href: "/dashboard/manage-users",
        icon: <UsersIcon className="h-5 w-5" />,
      },
      {
        title: "Manage Candidates",
        href: "/dashboard/manage-candidates",
        icon: <UsersIcon className="h-5 w-5" />,
      },
    ],
    guide: [
      {
        title: "My Assigned Tours",
        href: "/dashboard/my-assigned-tours",
        icon: <PackageIcon className="h-5 w-5" />,
      },
    ],
    tourist: [
      {
        title: "My Bookings",
        href: "/dashboard/my-bookings",
        icon: <PackageIcon className="h-5 w-5" />,
      },
      {
        title: "Join as Tour Guide",
        href: "/dashboard/join-as-guide",
        icon: <UserIcon className="h-5 w-5" />,
      },
    ],
  }

  // Combine common and role-specific items
  const sidebarItems = [...commonItems, ...(roleSpecificItems[userRole] || [])]

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Sidebar Header */}
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold">Bangladesh Tourism</span>
        </Link>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t">
        <div className="flex items-center">
          <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
            <Image src="/placeholder.svg?height=40&width=40" alt="User" fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium">
              {userRole === "admin" ? "Admin User" : userRole === "guide" ? "Rahim Ahmed" : "John Doe"}
            </p>
            <p className="text-xs text-muted-foreground">
              {userRole === "admin" ? "Administrator" : userRole === "guide" ? "Tour Guide" : "Tourist"}
            </p>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-start mt-4">
          <LogOutIcon className="h-5 w-5 mr-2" />
          Log Out
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Trigger */}
      <div className="fixed top-4 left-4 z-40 md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[280px]">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-background border-r min-h-screen">
        <SidebarContent />
      </div>
    </>
  )
}
