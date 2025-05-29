import ScavengerHunt from '@/components/ScavengerHunt'

export default function HuntPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">📦 Scavenger Hunt</h1>
        <ScavengerHunt />
      </div>
    </main>
  )
}