import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface TourGuideCardProps {
  guide: {
    id: string
    name: string
    experience: string
    speciality: string
    image: string
  }
}

export function TourGuideCard({ guide }: TourGuideCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px]">
        <Image src={guide.image || "/placeholder.svg"} alt={guide.name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">{guide.name}</h3>
        <p className="text-muted-foreground mb-2">Experience: {guide.experience}</p>
        <p className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full inline-block">{guide.speciality}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/tour-guides/${guide.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
