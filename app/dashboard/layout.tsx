import type React from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import Footer from "@/components/footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-4 md:p-6 md:ml-64">{children}</main>
        <Footer minimal />
      </div>
    </div>
  )
}
