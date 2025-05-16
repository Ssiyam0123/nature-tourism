import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PackagesTable } from "@/components/admin/packages-table"

export default function PackagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Packages</h1>
          <p className="text-muted-foreground">Manage your tour packages</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Package
        </Button>
      </div>

      <PackagesTable />
    </div>
  )
}
