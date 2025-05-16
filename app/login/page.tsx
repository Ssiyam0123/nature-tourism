import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Facebook, Twitter } from "lucide-react"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-900">Welcome Back</h1>
          <p className="mt-2 text-sm text-green-700">Sign in to your account to continue</p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
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
                placeholder="Enter your email"
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
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember-me" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-green-800">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link href="/forgot-password" className="text-green-600 hover:text-green-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Sign in
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center"
            >
              <Facebook className="h-5 w-5 text-blue-600 mr-2" />
              Facebook
            </Button>
            <Button
              variant="outline"
              className="w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center"
            >
              <Twitter className="h-5 w-5 text-blue-400 mr-2" />
              Twitter
            </Button>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-green-700">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-green-600 hover:text-green-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
