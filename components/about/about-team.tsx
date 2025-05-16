import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { teamMembersData } from "@/data/team-members-data"

export default function AboutTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Our Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-6">Meet the People Behind Tourist Guide</h2>
          <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
            Our diverse team of travel enthusiasts, nature experts, and local guides work together to create exceptional
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembersData.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamMemberCard({ member }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-80">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold text-green-900 mb-1">{member.name}</h3>
        <p className="text-green-700 mb-4">{member.position}</p>
        <p className="text-green-800/80 mb-6">{member.bio}</p>
        <div className="flex justify-center space-x-4">
          {member.social.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              className="text-green-600 hover:text-green-800"
              aria-label={social.platform}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
