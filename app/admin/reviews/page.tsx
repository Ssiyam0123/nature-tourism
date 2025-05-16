import { ReviewsTable } from "@/components/admin/reviews-table"

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reviews</h1>
        <p className="text-muted-foreground">Manage customer reviews and ratings</p>
      </div>

      <ReviewsTable />
    </div>
  )
}
