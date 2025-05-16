import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  MessageSquare,
  Share2,
  ThumbsUp,
  Bookmark,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function StoryDetailPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the story data based on the ID
  // For this static version, we'll just use sample data
  const story = {
    id: "1",
    title: "My Unforgettable Journey Through the Sundarbans",
    author: "Sarah Johnson",
    authorImage: "/images/author-1.jpg",
    authorBio: "Travel enthusiast and wildlife photographer with a passion for exploring natural wonders.",
    date: "May 10, 2023",
    readTime: "8 min read",
    image: "/images/story-1.jpg",
    category: "Wildlife",
    tags: ["Sundarbans", "Wildlife", "Tiger", "Mangrove", "Boat Trip"],
    likes: 243,
    comments: 24,
    shares: 56,
    bookmarks: 32,
    content: [
      {
        type: "paragraph",
        content:
          "The moment our boat entered the narrow channels of the Sundarbans, I knew this would be a journey like no other. The dense mangrove forests on either side seemed to whisper ancient secrets, and the air was thick with anticipation. As a nature enthusiast, I had dreamed of visiting the Sundarbans for years, and finally, that dream was becoming a reality.",
      },
      {
        type: "paragraph",
        content:
          "Our guide, Rahul, was a wealth of knowledge about the local ecosystem. He explained how the mangroves act as a natural barrier against cyclones and how they support an incredible diversity of wildlife. His passion for conservation was evident in every word he spoke, and it was contagious.",
      },
      {
        type: "image",
        url: "/images/story-detail-1.jpg",
        caption: "The dense mangrove forests of the Sundarbans",
      },
      {
        type: "heading",
        content: "The Thrill of Wildlife Spotting",
      },
      {
        type: "paragraph",
        content:
          "On our second day, we woke up before dawn to increase our chances of spotting wildlife. As the first rays of sunlight filtered through the trees, we saw spotted deer grazing by the water's edge. Their graceful movements and alert eyes captivated us as we silently observed from our boat.",
      },
      {
        type: "paragraph",
        content:
          "But the real highlight came later that afternoon. As we were cruising through a particularly narrow channel, Rahul suddenly signaled for the boat to stop. He pointed to some fresh paw prints on the muddy bank – Bengal tiger tracks! We waited in hushed anticipation, and after about twenty minutes, we were rewarded with a sight few are privileged to see: a magnificent Bengal tiger emerging from the undergrowth to drink from the river.",
      },
      {
        type: "image",
        url: "/images/story-detail-2.jpg",
        caption: "A rare sighting of a Bengal tiger in its natural habitat",
      },
      {
        type: "paragraph",
        content:
          "The tiger seemed unbothered by our presence, perhaps accustomed to the occasional boat passing by. It drank leisurely, its powerful muscles rippling under its striped coat. After quenching its thirst, it gave us one last majestic look before disappearing back into the forest. The entire encounter lasted maybe five minutes, but it felt like time had stood still.",
      },
      {
        type: "heading",
        content: "Life in the Mangroves",
      },
      {
        type: "paragraph",
        content:
          "Beyond the thrill of wildlife spotting, what struck me most about the Sundarbans was the resilience of both nature and the people who call this challenging environment home. We visited a local fishing village where residents shared stories of living alongside tigers and navigating the ever-changing waterways.",
      },
      {
        type: "paragraph",
        content:
          "The villagers showed us traditional honey collection techniques – a dangerous profession in these parts due to the presence of tigers and venomous snakes. Their respect for the forest and its inhabitants was profound, a reminder of how humans can coexist with nature when they understand their place in the ecosystem.",
      },
      {
        type: "image",
        url: "/images/story-detail-3.jpg",
        caption: "Local fishermen navigating the waterways of the Sundarbans",
      },
      {
        type: "heading",
        content: "Conservation Challenges",
      },
      {
        type: "paragraph",
        content:
          "During our journey, Rahul also spoke candidly about the conservation challenges facing the Sundarbans. Climate change, rising sea levels, and pollution are threatening this delicate ecosystem. The Bengal tiger population, while stable, remains vulnerable.",
      },
      {
        type: "paragraph",
        content:
          "Yet there is hope. Various conservation initiatives are underway, and tourism, when conducted responsibly, can contribute to preservation efforts by raising awareness and providing economic alternatives to activities that harm the environment.",
      },
      {
        type: "heading",
        content: "Reflections on the Journey",
      },
      {
        type: "paragraph",
        content:
          "As our boat made its way back to civilization on the final day, I found myself already missing the mysterious allure of the Sundarbans. The experience had been more than just a wildlife adventure; it was a profound connection with one of the world's most unique ecosystems.",
      },
      {
        type: "paragraph",
        content:
          "I left with a camera full of photos, a heart full of memories, and a deeper appreciation for the importance of preserving these natural wonders for future generations. The Sundarbans had cast its spell on me, and I know I'll be back someday to answer its call once more.",
      },
      {
        type: "image",
        url: "/images/story-detail-4.jpg",
        caption: "Sunset over the Sundarbans – a perfect end to an unforgettable journey",
      },
    ],
    relatedStories: [
      {
        id: "2",
        title: "Trekking the Majestic Hills of Bandarban",
        author: "Michael Chen",
        authorImage: "/images/author-2.jpg",
        date: "April 22, 2023",
        image: "/images/story-2.jpg",
        excerpt:
          "Standing atop Keokradong, watching the sunrise paint the rolling hills in golden hues, I felt a profound connection with nature. The challenging trek was worth every drop of sweat...",
        category: "Adventure",
      },
      {
        id: "3",
        title: "Tea Gardens of Sylhet: A Sensory Experience",
        author: "Priya Sharma",
        authorImage: "/images/author-3.jpg",
        date: "March 15, 2023",
        image: "/images/story-3.jpg",
        excerpt:
          "The endless rows of tea bushes stretching across rolling hills, the fragrant aroma of fresh tea leaves, and the gentle mist that hangs in the air – Sylhet's tea gardens are a feast for the senses...",
        category: "Cultural",
      },
      {
        id: "4",
        title: "Discovering the Hidden Waterfalls of Rangamati",
        author: "David Wilson",
        authorImage: "/images/author-4.jpg",
        date: "February 28, 2023",
        image: "/images/story-4.jpg",
        excerpt:
          "After a three-hour hike through dense jungle, the sound of rushing water grew louder. Turning a corner, we were rewarded with the sight of a magnificent waterfall cascading down moss-covered rocks...",
        category: "Adventure",
      },
    ],
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={story.image || "/placeholder.svg"} alt={story.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 to-green-950/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Link
            href="/community"
            className="inline-flex items-center text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Community
          </Link>
          <Badge className="mb-4 bg-green-600 hover:bg-green-700">{story.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto drop-shadow-lg">
            {story.title}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/90">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3 border-2 border-white">
                <AvatarImage src={story.authorImage || "/placeholder.svg"} alt={story.author} />
                <AvatarFallback>{story.author[0]}</AvatarFallback>
              </Avatar>
              <span>{story.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{story.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{story.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-3">
              <article className="prose prose-lg max-w-none prose-green">
                {story.content.map((block, index) => {
                  if (block.type === "paragraph") {
                    return <p key={index}>{block.content}</p>
                  } else if (block.type === "heading") {
                    return <h2 key={index}>{block.content}</h2>
                  } else if (block.type === "image") {
                    return (
                      <figure key={index} className="my-8">
                        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                          <Image
                            src={block.url || "/placeholder.svg"}
                            alt={block.caption || "Story image"}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <figcaption className="text-center text-gray-600 mt-2">{block.caption}</figcaption>
                      </figure>
                    )
                  }
                  return null
                })}
              </article>

              {/* Tags */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <Badge key={tag} className="bg-green-100 text-green-800 hover:bg-green-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Engagement */}
              <div className="mt-8 flex flex-wrap justify-between items-center py-4 border-t border-b border-gray-200">
                <div className="flex space-x-6">
                  <button className="flex items-center text-gray-600 hover:text-green-600">
                    <ThumbsUp className="h-5 w-5 mr-2" />
                    <span>{story.likes}</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-green-600">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    <span>{story.comments}</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-green-600">
                    <Bookmark className="h-5 w-5 mr-2" />
                    <span>{story.bookmarks}</span>
                  </button>
                </div>
                <div className="flex space-x-3 mt-4 sm:mt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center border-blue-300 text-blue-600 hover:bg-blue-50"
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center border-blue-300 text-blue-400 hover:bg-blue-50"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Tweet
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center border-green-300 text-green-600 hover:bg-green-50"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-8 bg-green-50 p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <Avatar className="h-16 w-16 border-2 border-white">
                    <AvatarImage src={story.authorImage || "/placeholder.svg"} alt={story.author} />
                    <AvatarFallback>{story.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">About {story.author}</h3>
                    <p className="text-green-800 mb-4">{story.authorBio}</p>
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-800 bg-white p-2 rounded-full shadow-sm"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-800 bg-white p-2 rounded-full shadow-sm"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-800 bg-white p-2 rounded-full shadow-sm"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-green-900 mb-6">Comments ({story.comments})</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/images/author-2.jpg" alt="Michael Chen" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-green-900">Michael Chen</h4>
                          <span className="text-xs text-gray-500">2 days ago</span>
                        </div>
                        <p className="text-gray-700 mt-2">
                          What an amazing experience! I visited the Sundarbans last year and it was truly magical,
                          though I wasn't lucky enough to spot a tiger. Your photos are stunning!
                        </p>
                      </div>
                      <div className="flex gap-4 mt-2 text-sm">
                        <button className="text-gray-500 hover:text-green-600">Like</button>
                        <button className="text-gray-500 hover:text-green-600">Reply</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/images/author-3.jpg" alt="Priya Sharma" />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-green-900">Priya Sharma</h4>
                          <span className="text-xs text-gray-500">3 days ago</span>
                        </div>
                        <p className="text-gray-700 mt-2">
                          Your story captures the essence of the Sundarbans so beautifully! I'm planning a trip there
                          next month. Would you recommend the same guide you had?
                        </p>
                      </div>
                      <div className="flex gap-4 mt-2 text-sm">
                        <button className="text-gray-500 hover:text-green-600">Like</button>
                        <button className="text-gray-500 hover:text-green-600">Reply</button>
                      </div>

                      {/* Nested reply */}
                      <div className="mt-4 ml-8 flex gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/images/author-1.jpg" alt="Sarah Johnson" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between items-start">
                              <h4 className="font-semibold text-green-900">Sarah Johnson</h4>
                              <span className="text-xs text-gray-500">2 days ago</span>
                            </div>
                            <p className="text-gray-700 mt-2">
                              Rahul was fantastic. You can book through Tourist Guide - they'll connect you with him.
                              Hope you have an amazing trip!
                            </p>
                          </div>
                          <div className="flex gap-4 mt-2 text-sm">
                            <button className="text-gray-500 hover:text-green-600">Like</button>
                            <button className="text-gray-500 hover:text-green-600">Reply</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/images/author-4.jpg" alt="David Wilson" />
                      <AvatarFallback>DW</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-green-900">David Wilson</h4>
                          <span className="text-xs text-gray-500">4 days ago</span>
                        </div>
                        <p className="text-gray-700 mt-2">
                          The conservation challenges you mentioned are so important to highlight. I've been reading
                          about how climate change is affecting the Sundarbans. We need more awareness like this!
                        </p>
                      </div>
                      <div className="flex gap-4 mt-2 text-sm">
                        <button className="text-gray-500 hover:text-green-600">Like</button>
                        <button className="text-gray-500 hover:text-green-600">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment Form */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-green-900 mb-4">Leave a Comment</h4>
                  <form className="space-y-4">
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      rows={4}
                      placeholder="Share your thoughts..."
                    ></textarea>
                    <Button className="bg-green-600 hover:bg-green-700">Post Comment</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Stories */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">You May Also Like</h2>
            <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
              Explore other stories from our community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {story.relatedStories.map((relatedStory) => (
              <Card key={relatedStory.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative h-64">
                  <Image
                    src={relatedStory.image || "/placeholder.svg"}
                    alt={relatedStory.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 hover:bg-green-700">{relatedStory.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={relatedStory.authorImage || "/placeholder.svg"}
                        alt={relatedStory.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-green-900">{relatedStory.author}</h4>
                      <p className="text-sm text-green-700">{relatedStory.date}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">{relatedStory.title}</h3>
                  <p className="text-green-800/80 mb-4 line-clamp-3">{relatedStory.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="p-0 text-green-600 hover:text-green-700">
                      Read More
                    </Button>
                    <Button variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50">
                      <Share2 className="h-4 w-4 mr-1" /> Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function Clock(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
