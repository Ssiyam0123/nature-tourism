// Types
export type UserRole = "admin" | "guide" | "tourist"

export type UserStatus = "active" | "inactive" | "suspended"

export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled"

export type PaymentStatus = "pending" | "paid" | "refunded"

export type PackageStatus = "active" | "inactive"

export type PackageCategory = "Beach" | "Wildlife" | "Nature" | "Adventure" | "Historical" | "Cultural"

// User Interface
export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  status: UserStatus
  joinDate: string
  bookings?: number
  avatar: string
}

// Package Interface
export interface TourPackage {
  id: string
  name: string
  category: PackageCategory
  price: number
  formattedPrice: string
  duration: string
  location: string
  status: PackageStatus
  bookings: number
  description?: string
  image: string
}

// Booking Interface
export interface Booking {
  id: string
  customer: string
  customerEmail: string
  package: string
  packageId: string
  date: string
  amount: number
  formattedAmount: string
  status: BookingStatus
  paymentStatus: PaymentStatus
}

// Story Interface
export interface Story {
  id: string
  title: string
  content: string
  author: string
  authorId: string
  date: string
  image: string
  location?: string
}

// Guide Application Interface
export interface GuideApplication {
  id: string
  name: string
  email: string
  phone: string
  experience: number
  speciality: string
  status: "pending" | "approved" | "rejected"
  appliedDate: string
  resume: string
  avatar: string
}

// Payment Interface
export interface Payment {
  id: string
  bookingId: string
  customer: string
  amount: number
  formattedAmount: string
  date: string
  method: "credit_card" | "bank_transfer" | "paypal" | "mobile_banking"
  status: "completed" | "pending" | "failed" | "refunded"
}

// Mock Data
export const users: User[] = [
  {
    id: "USR-001",
    name: "Rahul Ahmed",
    email: "rahul@example.com",
    role: "tourist",
    status: "active",
    joinDate: "2023-01-15",
    bookings: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-002",
    name: "Priya Khan",
    email: "priya@example.com",
    role: "tourist",
    status: "active",
    joinDate: "2023-02-20",
    bookings: 3,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-003",
    name: "Kamal Hossain",
    email: "kamal@example.com",
    role: "guide",
    status: "active",
    joinDate: "2023-01-10",
    bookings: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-004",
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    role: "tourist",
    status: "inactive",
    joinDate: "2023-03-05",
    bookings: 1,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-005",
    name: "Farhan Ali",
    email: "farhan@example.com",
    role: "admin",
    status: "active",
    joinDate: "2022-12-01",
    bookings: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-006",
    name: "Sabina Yasmin",
    email: "sabina@example.com",
    role: "tourist",
    status: "active",
    joinDate: "2023-04-10",
    bookings: 2,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-007",
    name: "Imran Khan",
    email: "imran@example.com",
    role: "guide",
    status: "inactive",
    joinDate: "2023-02-15",
    bookings: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-008",
    name: "Tania Rahman",
    email: "tania@example.com",
    role: "tourist",
    status: "active",
    joinDate: "2023-05-01",
    bookings: 1,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-009",
    name: "Arif Hasan",
    email: "arif@example.com",
    role: "guide",
    status: "active",
    joinDate: "2023-03-20",
    bookings: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-010",
    name: "Sadia Islam",
    email: "sadia@example.com",
    role: "tourist",
    status: "active",
    joinDate: "2023-04-25",
    bookings: 4,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-011",
    name: "Rahim Uddin",
    email: "rahim@example.com",
    role: "admin",
    status: "active",
    joinDate: "2022-11-15",
    bookings: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-012",
    name: "Fatima Begum",
    email: "fatima@example.com",
    role: "guide",
    status: "active",
    joinDate: "2023-01-05",
    bookings: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export const packages: TourPackage[] = [
  {
    id: "PKG-001",
    name: "Cox's Bazar Beach Getaway",
    category: "Beach",
    price: 15000,
    formattedPrice: "৳15,000",
    duration: "3 days, 2 nights",
    location: "Cox's Bazar",
    status: "active",
    bookings: 28,
    description:
      "Experience the world's longest natural sea beach in Cox's Bazar. Enjoy the beautiful sunrise and sunset, relax on the sandy beaches, and explore the local culture and cuisine.",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: "PKG-002",
    name: "Sundarbans Mangrove Adventure",
    category: "Wildlife",
    price: 22500,
    formattedPrice: "৳22,500",
    duration: "4 days, 3 nights",
    location: "Sundarbans",
    status: "active",
    bookings: 15,
    description:
      "Explore the world's largest mangrove forest and home to the Royal Bengal Tiger. Cruise through the winding rivers, spot wildlife, and experience the unique ecosystem of the Sundarbans.",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: "PKG-003",
    name: "Sajek Valley Trek",
    category: "Nature",
    price: 18000,
    formattedPrice: "৳18,000",
    duration: "3 days, 2 nights",
    location: "Sajek Valley",
    status: "active",
    bookings: 22,
    description:
      "Visit the 'Queen of Hills' and enjoy breathtaking views of the mountains and clouds. Experience the local tribal culture and cuisine in this serene hill station.",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: "PKG-004",
    name: "Bandarban Hill Tour",
    category: "Adventure",
    price: 20000,
    formattedPrice: "৳20,000",
    duration: "4 days, 3 nights",
    location: "Bandarban",
    status: "active",
    bookings: 18,
    description:
      "Trek through the hills of Bandarban, visit the Golden Temple, and enjoy the panoramic views from Nilgiri. Experience the rich tribal culture and traditions of the region.",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: "PKG-005",
    name: "Sylhet Tea Garden Tour",
    category: "Nature",
    price: 12500,
    formattedPrice: "৳12,500",
    duration: "2 days, 1 night",
    location: "Sylhet",
    status: "active",
    bookings: 12,
    description:
      "Explore the lush green tea gardens of Sylhet, visit the Ratargul Swamp Forest, and enjoy the natural beauty of Jaflong. Experience the unique culture and cuisine of the region.",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: "PKG-006",
    name: "Rangamati Lake View",
    category: "Nature",
    price: 16000,
    formattedPrice: "৳16,000",
    duration: "3 days, 2 nights",
    location: "Rangamati",
    status: "inactive",
    bookings: 8,
    description:
      "Cruise on the Kaptai Lake, visit the Hanging Bridge, and explore the tribal villages. Experience the unique culture and traditions of the Chakma tribe.",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: "PKG-007",
    name: "St. Martin Island Package",
    category: "Beach",
    price: 25000,
    formattedPrice: "৳25,000",
    duration: "4 days, 3 nights",
    location: "St. Martin",
    status: "active",
    bookings: 30,
    description:
      "Visit the only coral island of Bangladesh, enjoy the crystal clear waters, and relax on the white sandy beaches. Experience the unique marine life and local cuisine.",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: "PKG-008",
    name: "Kuakata Sea Beach Tour",
    category: "Beach",
    price: 14500,
    formattedPrice: "৳14,500",
    duration: "3 days, 2 nights",
    location: "Kuakata",
    status: "inactive",
    bookings: 5,
    description:
      "Experience the unique beauty of Kuakata, where you can see both sunrise and sunset from the same beach. Visit the Buddhist temples and explore the local culture.",
    image: "/placeholder.svg?height=80&width=120",
  },
]

export const bookings: Booking[] = [
  {
    id: "BK-2023-001",
    customer: "Rahul Ahmed",
    customerEmail: "rahul@example.com",
    package: "Cox's Bazar Beach Getaway",
    packageId: "PKG-001",
    date: "2023-06-15",
    amount: 15000,
    formattedAmount: "৳15,000",
    status: "confirmed",
    paymentStatus: "paid",
  },
  {
    id: "BK-2023-002",
    customer: "Priya Khan",
    customerEmail: "priya@example.com",
    package: "Sundarbans Adventure",
    packageId: "PKG-002",
    date: "2023-06-18",
    amount: 22500,
    formattedAmount: "৳22,500",
    status: "pending",
    paymentStatus: "pending",
  },
  {
    id: "BK-2023-003",
    customer: "Kamal Hossain",
    customerEmail: "kamal@example.com",
    package: "Sajek Valley Trek",
    packageId: "PKG-003",
    date: "2023-06-20",
    amount: 18000,
    formattedAmount: "৳18,000",
    status: "confirmed",
    paymentStatus: "paid",
  },
  {
    id: "BK-2023-004",
    customer: "Nusrat Jahan",
    customerEmail: "nusrat@example.com",
    package: "Bandarban Hill Tour",
    packageId: "PKG-004",
    date: "2023-06-22",
    amount: 20000,
    formattedAmount: "৳20,000",
    status: "cancelled",
    paymentStatus: "refunded",
  },
  {
    id: "BK-2023-005",
    customer: "Farhan Ali",
    customerEmail: "farhan@example.com",
    package: "Sylhet Tea Garden Tour",
    packageId: "PKG-005",
    date: "2023-06-25",
    amount: 12500,
    formattedAmount: "৳12,500",
    status: "confirmed",
    paymentStatus: "paid",
  },
  {
    id: "BK-2023-006",
    customer: "Sabina Yasmin",
    customerEmail: "sabina@example.com",
    package: "Rangamati Lake View",
    packageId: "PKG-006",
    date: "2023-06-28",
    amount: 16000,
    formattedAmount: "৳16,000",
    status: "pending",
    paymentStatus: "pending",
  },
  {
    id: "BK-2023-007",
    customer: "Imran Khan",
    customerEmail: "imran@example.com",
    package: "St. Martin Island Package",
    packageId: "PKG-007",
    date: "2023-07-02",
    amount: 25000,
    formattedAmount: "৳25,000",
    status: "confirmed",
    paymentStatus: "paid",
  },
  {
    id: "BK-2023-008",
    customer: "Tania Rahman",
    customerEmail: "tania@example.com",
    package: "Kuakata Sea Beach Tour",
    packageId: "PKG-008",
    date: "2023-07-05",
    amount: 14500,
    formattedAmount: "৳14,500",
    status: "pending",
    paymentStatus: "pending",
  },
]

export const stories: Story[] = [
  {
    id: "STR-001",
    title: "My Amazing Trip to Cox's Bazar",
    content:
      "It was an unforgettable experience with beautiful beaches and sunsets. The local seafood was delicious and the people were very friendly. I highly recommend visiting during the winter season when the weather is perfect.",
    author: "Rahul Ahmed",
    authorId: "USR-001",
    date: "2023-05-15",
    image: "/placeholder.svg?height=300&width=400",
    location: "Cox's Bazar",
  },
  {
    id: "STR-002",
    title: "Exploring the Sundarbans",
    content:
      "Seeing Royal Bengal Tigers in their natural habitat was breathtaking. The mangrove forest is truly a wonder of nature. Our guide was very knowledgeable and made sure we had a safe and enjoyable experience.",
    author: "Priya Khan",
    authorId: "USR-002",
    date: "2023-06-22",
    image: "/placeholder.svg?height=300&width=400",
    location: "Sundarbans",
  },
  {
    id: "STR-003",
    title: "Tea Gardens of Sylhet",
    content:
      "The lush green tea gardens and the misty mountains were a sight to behold. We stayed at a resort overlooking the tea gardens and it was magical. Don't miss the seven-layer tea, a local specialty!",
    author: "Kamal Hossain",
    authorId: "USR-003",
    date: "2023-07-10",
    image: "/placeholder.svg?height=300&width=400",
    location: "Sylhet",
  },
  {
    id: "STR-004",
    title: "Historical Tour of Old Dhaka",
    content:
      "The rich history and architecture of Old Dhaka left me in awe. From Lalbagh Fort to Ahsan Manzil, every place has a story to tell. The street food, especially the biryani, was amazing!",
    author: "Nusrat Jahan",
    authorId: "USR-004",
    date: "2023-08-05",
    image: "/placeholder.svg?height=300&width=400",
    location: "Dhaka",
  },
  {
    id: "STR-005",
    title: "Bandarban Hill Trekking Adventure",
    content:
      "Trekking in the hills of Bandarban was challenging but rewarding. The views from the top were spectacular. We stayed with a local tribal family and learned about their culture and traditions.",
    author: "Farhan Ali",
    authorId: "USR-005",
    date: "2023-09-12",
    image: "/placeholder.svg?height=300&width=400",
    location: "Bandarban",
  },
  {
    id: "STR-006",
    title: "Saint Martin Island Paradise",
    content:
      "Saint Martin is truly a paradise with its crystal clear waters and coral reefs. We went snorkeling and saw colorful fish and marine life. The sunset view from the beach is something I'll never forget.",
    author: "Sabina Yasmin",
    authorId: "USR-006",
    date: "2023-10-20",
    image: "/placeholder.svg?height=300&width=400",
    location: "Saint Martin",
  },
  {
    id: "STR-007",
    title: "Rangamati Lake Cruise",
    content:
      "Cruising on Kaptai Lake in Rangamati was a serene experience. The surrounding hills and tribal villages added to the charm. We also visited the hanging bridge and enjoyed local tribal food.",
    author: "Imran Khan",
    authorId: "USR-007",
    date: "2023-11-08",
    image: "/placeholder.svg?height=300&width=400",
    location: "Rangamati",
  },
  {
    id: "STR-008",
    title: "Kuakata: The Daughter of the Sea",
    content:
      "Kuakata is unique because you can see both sunrise and sunset from the same beach. The beach is less crowded than Cox's Bazar, making it perfect for those seeking tranquility.",
    author: "Tania Rahman",
    authorId: "USR-008",
    date: "2023-12-15",
    image: "/placeholder.svg?height=300&width=400",
    location: "Kuakata",
  },
]

export const guideApplications: GuideApplication[] = [
  {
    id: "APP-001",
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    phone: "+880 1712 345678",
    experience: 5,
    speciality: "Beach Tours",
    status: "approved",
    appliedDate: "2023-01-10",
    resume: "/placeholder.svg?height=100&width=80",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "APP-002",
    name: "Fatima Khan",
    email: "fatima@example.com",
    phone: "+880 1812 345678",
    experience: 7,
    speciality: "Wildlife Tours",
    status: "approved",
    appliedDate: "2023-02-15",
    resume: "/placeholder.svg?height=100&width=80",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "APP-003",
    name: "Kamal Hossain",
    email: "kamal@example.com",
    phone: "+880 1912 345678",
    experience: 4,
    speciality: "Mountain Tours",
    status: "approved",
    appliedDate: "2023-03-20",
    resume: "/placeholder.svg?height=100&width=80",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "APP-004",
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    phone: "+880 1612 345678",
    experience: 3,
    speciality: "Cultural Tours",
    status: "pending",
    appliedDate: "2023-04-25",
    resume: "/placeholder.svg?height=100&width=80",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "APP-005",
    name: "Imran Ali",
    email: "imran@example.com",
    phone: "+880 1512 345678",
    experience: 6,
    speciality: "Adventure Tours",
    status: "pending",
    appliedDate: "2023-05-30",
    resume: "/placeholder.svg?height=100&width=80",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "APP-006",
    name: "Sabina Yasmin",
    email: "sabina@example.com",
    phone: "+880 1312 345678",
    experience: 2,
    speciality: "Historical Tours",
    status: "rejected",
    appliedDate: "2023-06-05",
    resume: "/placeholder.svg?height=100&width=80",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export const payments: Payment[] = [
  {
    id: "PAY-001",
    bookingId: "BK-2023-001",
    customer: "Rahul Ahmed",
    amount: 15000,
    formattedAmount: "৳15,000",
    date: "2023-06-15",
    method: "credit_card",
    status: "completed",
  },
  {
    id: "PAY-002",
    bookingId: "BK-2023-003",
    customer: "Kamal Hossain",
    amount: 18000,
    formattedAmount: "৳18,000",
    date: "2023-06-20",
    method: "mobile_banking",
    status: "completed",
  },
  {
    id: "PAY-003",
    bookingId: "BK-2023-004",
    customer: "Nusrat Jahan",
    amount: 20000,
    formattedAmount: "৳20,000",
    date: "2023-06-22",
    method: "bank_transfer",
    status: "refunded",
  },
  {
    id: "PAY-004",
    bookingId: "BK-2023-005",
    customer: "Farhan Ali",
    amount: 12500,
    formattedAmount: "৳12,500",
    date: "2023-06-25",
    method: "paypal",
    status: "completed",
  },
  {
    id: "PAY-005",
    bookingId: "BK-2023-007",
    customer: "Imran Khan",
    amount: 25000,
    formattedAmount: "৳25,000",
    date: "2023-07-02",
    method: "credit_card",
    status: "completed",
  },
  {
    id: "PAY-006",
    bookingId: "BK-2023-002",
    customer: "Priya Khan",
    amount: 22500,
    formattedAmount: "৳22,500",
    date: "2023-06-18",
    method: "mobile_banking",
    status: "pending",
  },
  {
    id: "PAY-007",
    bookingId: "BK-2023-006",
    customer: "Sabina Yasmin",
    amount: 16000,
    formattedAmount: "৳16,000",
    date: "2023-06-28",
    method: "bank_transfer",
    status: "pending",
  },
  {
    id: "PAY-008",
    bookingId: "BK-2023-008",
    customer: "Tania Rahman",
    amount: 14500,
    formattedAmount: "৳14,500",
    date: "2023-07-05",
    method: "mobile_banking",
    status: "pending",
  },
]

// Statistics
export const statistics = {
  users: {
    total: 1245,
    tourists: 1120,
    guides: 100,
    admins: 25,
    newThisMonth: 128,
    growthRate: 8.2,
  },
  packages: {
    total: 48,
    active: 42,
    inactive: 6,
    newThisMonth: 4,
    categories: {
      beach: 15,
      wildlife: 10,
      nature: 12,
      adventure: 8,
      historical: 3,
    },
  },
  bookings: {
    total: 86,
    confirmed: 43,
    pending: 26,
    completed: 13,
    cancelled: 4,
    conversionRate: 24.5,
    growthRate: 15.3,
  },
  revenue: {
    total: 450000,
    formattedTotal: "৳450,000",
    averageBookingValue: 18750,
    formattedAverageBookingValue: "৳18,750",
    growthRate: 12.5,
    byCategory: {
      beach: 180000,
      wildlife: 135000,
      nature: 90000,
      other: 45000,
    },
    monthly: [65000, 40000, 75000, 50000, 85000, 70000, 90000, 80000, 60000, 85000, 95000, 75000],
  },
}

// API simulation functions with artificial delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// User API
export async function fetchUsers(): Promise<User[]> {
  await delay(800)
  return users
}

export async function fetchUserById(id: string): Promise<User | undefined> {
  await delay(600)
  return users.find((user) => user.id === id)
}

export async function fetchUsersByRole(role: UserRole): Promise<User[]> {
  await delay(700)
  return users.filter((user) => user.role === role)
}

// Package API
export async function fetchPackages(): Promise<TourPackage[]> {
  await delay(900)
  return packages
}

export async function fetchPackageById(id: string): Promise<TourPackage | undefined> {
  await delay(600)
  return packages.find((pkg) => pkg.id === id)
}

export async function fetchPackagesByStatus(status: PackageStatus): Promise<TourPackage[]> {
  await delay(700)
  return packages.filter((pkg) => pkg.status === status)
}

export async function fetchPackagesByCategory(category: PackageCategory): Promise<TourPackage[]> {
  await delay(700)
  return packages.filter((pkg) => pkg.category === category)
}

// Booking API
export async function fetchBookings(): Promise<Booking[]> {
  await delay(800)
  return bookings
}

export async function fetchBookingById(id: string): Promise<Booking | undefined> {
  await delay(600)
  return bookings.find((booking) => booking.id === id)
}

export async function fetchBookingsByStatus(status: BookingStatus): Promise<Booking[]> {
  await delay(700)
  return bookings.filter((booking) => booking.status === status)
}

export async function fetchBookingsByUser(userId: string): Promise<Booking[]> {
  await delay(700)
  const user = users.find((u) => u.id === userId)
  if (!user) return []
  return bookings.filter((booking) => booking.customerEmail === user.email)
}

// Story API
export async function fetchStories(): Promise<Story[]> {
  await delay(800)
  return stories
}

export async function fetchStoryById(id: string): Promise<Story | undefined> {
  await delay(600)
  return stories.find((story) => story.id === id)
}

export async function fetchStoriesByUser(userId: string): Promise<Story[]> {
  await delay(700)
  return stories.filter((story) => story.authorId === userId)
}

// Guide Application API
export async function fetchGuideApplications(): Promise<GuideApplication[]> {
  await delay(800)
  return guideApplications
}

export async function fetchGuideApplicationById(id: string): Promise<GuideApplication | undefined> {
  await delay(600)
  return guideApplications.find((app) => app.id === id)
}

export async function fetchGuideApplicationsByStatus(
  status: "pending" | "approved" | "rejected",
): Promise<GuideApplication[]> {
  await delay(700)
  return guideApplications.filter((app) => app.status === status)
}

// Payment API
export async function fetchPayments(): Promise<Payment[]> {
  await delay(800)
  return payments
}

export async function fetchPaymentById(id: string): Promise<Payment | undefined> {
  await delay(600)
  return payments.find((payment) => payment.id === id)
}

export async function fetchPaymentsByStatus(
  status: "completed" | "pending" | "failed" | "refunded",
): Promise<Payment[]> {
  await delay(700)
  return payments.filter((payment) => payment.status === status)
}

export async function fetchPaymentsByBooking(bookingId: string): Promise<Payment[]> {
  await delay(700)
  return payments.filter((payment) => payment.bookingId === bookingId)
}

// Statistics API
export async function fetchStatistics() {
  await delay(1000)
  return statistics
}

export async function fetchUserStatistics() {
  await delay(1200)

  const total = 1245
  const growthRate = 8.2
  const newThisMonth = 128

  // User roles
  const tourists = 1120 // 90%
  const guides = 100 // 8%
  const admins = 25 // 2%

  const monthly = [
    50, // Jan
    70, // Feb
    90, // Mar
    120, // Apr
    150, // May
    170, // Jun
    190, // Jul
    180, // Aug
    160, // Sep
    170, // Oct
    190, // Nov
    200, // Dec
  ]

  return {
    total,
    growthRate,
    newThisMonth,
    tourists,
    guides,
    admins,
    monthly,
  }
}

export async function fetchPackageStatistics() {
  await delay(900)

  const total = 48
  const newThisMonth = 4

  // Package categories
  const categories = {
    beach: 15, // 31%
    wildlife: 10, // 21%
    nature: 12, // 25%
    adventure: 8, // 17%
    historical: 3, // 6%
  }

  // Most booked packages
  const mostBooked = [
    { name: "Cox's Bazar Beach Getaway", bookings: 28 },
    { name: "Sundarbans Safari", bookings: 22 },
    { name: "Sajek Valley Trek", bookings: 18 },
    { name: "Bandarban Hills", bookings: 12 },
    { name: "Sylhet Tea Gardens", bookings: 8 },
    { name: "Rangamati Lake Tour", bookings: 6 },
  ]

  return {
    total,
    newThisMonth,
    categories,
    mostBooked,
  }
}

export async function fetchBookingStatistics() {
  await delay(800)

  const total = 86
  const growthRate = 15.3
  const conversionRate = 24.5

  // Booking status counts
  const confirmed = 43 // 50%
  const pending = 26 // 30%
  const completed = 13 // 15%
  const cancelled = 4 // 5%

  const monthly = [
    5, // Jan
    7, // Feb
    6, // Mar
    8, // Apr
    10, // May
    9, // Jun
    12, // Jul
    14, // Aug
    12, // Sep
    10, // Oct
    13, // Nov
    15, // Dec
  ]

  return {
    total,
    growthRate,
    conversionRate,
    confirmed,
    pending,
    completed,
    cancelled,
    monthly,
  }
}

export async function fetchRevenueStatistics() {
  await delay(1000)

  const total = 450000
  const growthRate = 12.5
  const averageBookingValue = 18750

  const monthly = [
    35000, // Jan
    42000, // Feb
    38000, // Mar
    45000, // Apr
    52000, // May
    48000, // Jun
    55000, // Jul
    50000, // Aug
    40000, // Sep
    45000, // Oct
    60000, // Nov
    40000, // Dec
  ]

  const byCategory = {
    beach: 180000, // 40%
    wildlife: 135000, // 30%
    nature: 90000, // 20%
    other: 45000, // 10%
  }

  return {
    total,
    formattedTotal: `৳${total.toLocaleString()}`,
    growthRate,
    averageBookingValue,
    formattedAverageBookingValue: `৳${averageBookingValue.toLocaleString()}`,
    monthly,
    byCategory,
  }
}

// Fetch all dashboard data at once
export async function fetchDashboardData() {
  const [revenue, bookings, users, packages] = await Promise.all([
    fetchRevenueStatistics(),
    fetchBookingStatistics(),
    fetchUserStatistics(),
    fetchPackageStatistics(),
  ])

  return {
    revenue,
    bookings,
    users,
    packages,
  }
}
