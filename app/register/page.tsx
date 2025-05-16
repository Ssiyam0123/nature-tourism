import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-900">Create an Account</h1>
          <p className="mt-2 text-sm text-green-700">Join our community of nature enthusiasts</p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-green-800 mb-1">
                  First Name
                </label>
                <Input
                  id="first-name"
                  name="first-name"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-green-800 mb-1">
                  Last Name
                </label>
                <Input
                  id="last-name"
                  name="last-name"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-green-800 mb-1">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-green-800 mb-1">
                Confirm Password
              </label>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex items-center">
            <Checkbox id="terms" required />
            <label htmlFor="terms" className="ml-2 block text-sm text-green-800">
              I agree to the{" "}
              <Link href="/terms" className="text-green-600 hover:text-green-500">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-green-600 hover:text-green-500">
                Privacy Policy
              </Link>
            </label>
          </div>

          <div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Create Account
            </Button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-green-700">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-green-600 hover:text-green-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
