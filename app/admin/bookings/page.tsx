import { BookingsTable } from "@/components/admin/bookings-table"

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
        <p className="text-muted-foreground">Manage tour bookings and reservations</p>
      </div>

      <BookingsTable />
    </div>
  )
}
