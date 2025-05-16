import AboutHero from "@/components/about/about-hero"
import AboutStory from "@/components/about/about-story"
import AboutValues from "@/components/about/about-values"
import AboutTeam from "@/components/about/about-team"
import AboutCTA from "@/components/about/about-cta"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </main>
  )
}
