import PackagesHero from "@/components/packages/packages-hero"
import PackagesFilter from "@/components/packages/packages-filter"
import PackagesGrid from "@/components/packages/packages-grid"
import PackagesPagination from "@/components/packages/packages-pagination"
import NewsletterSection from "@/components/shared/newsletter-section"

export default function PackagesPage() {
  return (
    <main className="min-h-screen">
      <PackagesHero />
      <PackagesFilter />
      <PackagesGrid />
      <PackagesPagination />
      <NewsletterSection />
    </main>
  )
}
