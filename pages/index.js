import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Trip Tracker Beta</h1>
      <Link href="/login" className="text-blue-500 underline mb-2">Login</Link>
      <Link href="/new-trip" className="text-blue-500 underline mb-2">Add a Trip</Link>
      <Link href="/trips" className="text-blue-500 underline">View Trips</Link>
    </div>
  )
}
