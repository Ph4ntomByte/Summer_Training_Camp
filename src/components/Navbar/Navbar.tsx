import Link from 'next/link'
import { Logo } from '@/components/Navbar/Logo'
export function Navbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between py-6">
      <Logo />
      <ul className="flex gap-6 text-campGray-dark">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/program">Program</Link></li>
        <li><Link href="/speakers">Speakers</Link></li>
        <li><Link href="/venue">Venue</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  )
}