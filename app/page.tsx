import HeroSection from "@/components/home/hero-section"
import OverviewSection from "@/components/home/overview-section"
import PackagesSection from "@/components/home/packages-section"
import TourGuidesSection from "@/components/home/tour-guides-section"
import StoriesSection from "@/components/home/stories-section"
import NewsletterSection from "@/components/shared/newsletter-section"
import ContactSection from "@/components/home/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OverviewSection />
      <PackagesSection />
      <TourGuidesSection />
      <StoriesSection />
      <NewsletterSection />
      <ContactSection />
    </main>
  )
}
