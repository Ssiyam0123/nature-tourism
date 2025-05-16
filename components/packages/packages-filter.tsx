import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PackagesFilter() {
  return (
    <section className="py-8 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="w-full md:w-1/4">
              <label className="block text-sm font-medium text-green-800 mb-2">Search</label>
              <Input type="text" placeholder="Search packages..." className="border-green-200 focus:border-green-500" />
            </div>
            <div className="w-full md:w-1/5">
              <label className="block text-sm font-medium text-green-800 mb-2">Tour Type</label>
              <Select>
                <SelectTrigger className="border-green-200">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="wildlife">Wildlife</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="eco">Eco Tourism</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-1/5">
              <label className="block text-sm font-medium text-green-800 mb-2">Duration</label>
              <Select>
                <SelectTrigger className="border-green-200">
                  <SelectValue placeholder="Any Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Duration</SelectItem>
                  <SelectItem value="1-3">1-3 Days</SelectItem>
                  <SelectItem value="4-7">4-7 Days</SelectItem>
                  <SelectItem value="8+">8+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-1/5">
              <label className="block text-sm font-medium text-green-800 mb-2">Price Range</label>
              <Select>
                <SelectTrigger className="border-green-200">
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Price</SelectItem>
                  <SelectItem value="budget">Budget ($0-$200)</SelectItem>
                  <SelectItem value="standard">Standard ($201-$500)</SelectItem>
                  <SelectItem value="luxury">Luxury ($501+)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-auto">
              <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
