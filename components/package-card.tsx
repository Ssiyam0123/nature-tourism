import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface PackageCardProps {
  package: {
    id: string
    title: string
    type: string
    price: number
    image: string
  }
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px]">
        <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{pkg.title}</h3>
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">{pkg.type}</span>
        </div>
        <p className="text-xl font-bold text-primary">৳{pkg.price.toLocaleString()}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/trips/${pkg.id}`}>View Package</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
