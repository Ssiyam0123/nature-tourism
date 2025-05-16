import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const recentBookings = [
  {
    id: "B-1234",
    customer: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: "/images/author-1.jpg",
    },
    package: "Sundarbans Mangrove Forest",
    date: "2023-05-15",
    amount: "$598",
    status: "confirmed",
  },
  {
    id: "B-1235",
    customer: {
      name: "Michael Chen",
      email: "michael@example.com",
      avatar: "/images/author-2.jpg",
    },
    package: "Bandarban Hill Treks",
    date: "2023-05-14",
    amount: "$798",
    status: "pending",
  },
  {
    id: "B-1236",
    customer: {
      name: "Emma Thompson",
      email: "emma@example.com",
      avatar: "/images/author-5.jpg",
    },
    package: "Sylhet Tea Gardens",
    date: "2023-05-13",
    amount: "$398",
    status: "confirmed",
  },
  {
    id: "B-1237",
    customer: {
      name: "David Wilson",
      email: "david@example.com",
      avatar: "/images/author-4.jpg",
    },
    package: "Cox's Bazar Beach Retreat",
    date: "2023-05-12",
    amount: "$698",
    status: "cancelled",
  },
  {
    id: "B-1238",
    customer: {
      name: "Priya Sharma",
      email: "priya@example.com",
      avatar: "/images/author-3.jpg",
    },
    package: "Saint Martin Island Getaway",
    date: "2023-05-11",
    amount: "$658",
    status: "confirmed",
  },
]

export function RecentBookings() {
  return (
    <div className="space-y-4">
      {recentBookings.map((booking) => (
        <div key={booking.id} className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={booking.customer.avatar || "/placeholder.svg"} alt={booking.customer.name} />
              <AvatarFallback>{booking.customer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{booking.customer.name}</p>
              <p className="text-sm text-muted-foreground">{booking.package}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">{booking.amount}</p>
            <Badge
              variant={
                booking.status === "confirmed" ? "default" : booking.status === "pending" ? "outline" : "destructive"
              }
              className={
                booking.status === "confirmed"
                  ? "bg-green-100 text-green-800 hover:bg-green-200"
                  : booking.status === "pending"
                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                    : ""
              }
            >
              {booking.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
