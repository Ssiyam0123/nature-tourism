import { Button } from "@/components/ui/button"

export default function PackagesPagination() {
  return (
    <div className="flex justify-center mt-12 mb-16">
      <nav className="flex items-center space-x-2">
        <Button variant="outline" size="icon" className="border-green-200 text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Button>
        <Button variant="outline" className="border-green-200 bg-green-50 text-green-700">
          1
        </Button>
        <Button variant="outline" className="border-green-200 text-green-700">
          2
        </Button>
        <Button variant="outline" className="border-green-200 text-green-700">
          3
        </Button>
        <span className="text-green-700">...</span>
        <Button variant="outline" className="border-green-200 text-green-700">
          8
        </Button>
        <Button variant="outline" size="icon" className="border-green-200 text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </nav>
    </div>
  )
}
