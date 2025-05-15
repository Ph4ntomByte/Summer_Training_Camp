'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#2E7D32] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/lotus-logo.png"
                alt="EYP Logo"
                width={40}
                height={40}
                className="mr-2"
                priority
              />
              <span className="text-white font-semibold text-lg">EYP Azerbaijan</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/program" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Program
              </Link>
              <Link href="/facilitators" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Facilitators
              </Link>
              <Link href="/venue" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Venue
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#2E7D32]">
            <Link href="/" className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              About
            </Link>
            <Link href="/program" className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Program
            </Link>
            <Link href="/facilitators" className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Facilitators
            </Link>
            <Link href="/venue" className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Venue
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 