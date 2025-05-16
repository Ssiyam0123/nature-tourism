import { Button } from "@/components/ui/button"

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Nature's Wonders</h2>
          <p className="text-lg text-green-100 mb-8">
            Subscribe to our newsletter to receive the latest updates on new tour packages, seasonal offers, and travel
            tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md flex-grow text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <Button className="bg-green-500 hover:bg-green-400 text-green-950 font-medium">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
