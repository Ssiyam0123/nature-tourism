"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  BarChart3Icon,
  BellIcon,
  DollarSignIcon,
  HomeIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  MenuIcon,
  PackageIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function AdminSidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const sidebarItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboardIcon className="h-5 w-5" />,
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: <UsersIcon className="h-5 w-5" />,
    },
    {
      title: "Tour Guides",
      href: "/admin/guide-applications",
      icon: <UsersIcon className="h-5 w-5" />,
    },
    {
      title: "Packages",
      href: "/admin/packages",
      icon: <PackageIcon className="h-5 w-5" />,
    },
    {
      title: "Bookings",
      href: "/admin/bookings",
      icon: <DollarSignIcon className="h-5 w-5" />,
    },
    {
      title: "Payments",
      href: "/admin/payments",
      icon: <DollarSignIcon className="h-5 w-5" />,
    },
    {
      title: "Reports",
      href: "/admin/reports",
      icon: <BarChart3Icon className="h-5 w-5" />,
    },
    {
      title: "Announcements",
      href: "/admin/announcements",
      icon: <BellIcon className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: <SettingsIcon className="h-5 w-5" />,
    },
    {
      title: "Main Site",
      href: "/",
      icon: <HomeIcon className="h-5 w-5" />,
    },
  ]

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Sidebar Header */}
      <div className="p-4 border-b">
        <Link href="/admin" className="flex items-center gap-2">
          <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold">Admin Panel</span>
        </Link>
      </div>

      {/* Admin Profile */}
      <div className="p-4 border-b">
        <div className="flex items-center">
          <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
            <Image src="/placeholder.svg?height=40&width=40" alt="Admin" fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@example.com</p>
          </div>
        </div>
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
        <Button variant="ghost" className="w-full justify-start">
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
