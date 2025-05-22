import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops, page not found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-white/20 rounded-lg text-white font-medium hover:bg-white/30 transition"
      >
        Go Home
      </Link>
    </main>
  )
}