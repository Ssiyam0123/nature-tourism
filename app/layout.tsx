"use client";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Tourist Guide - Explore Nature's Beauty",
//   description: "Discover the natural wonders of Bangladesh with our guided tours and travel packages.",
//     generator: 'v0.dev'
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const isAdminRoute = pathName?.startsWith("/admin");
  console.log(isAdminRoute);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {!isAdminRoute && <Navbar />}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
