'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/program', label: 'Program' },
    { href: '/venue', label: 'Venue' },
    // { href: '/past-camps', label: 'Past Camps' },
    { href: '/faq', label: 'FAQ' }
  ];
  useEffect(() => {
    setIsOpen(false)
  }, [path])

  return (
    <nav className="fixed w-full z-50 bg-[#2E7D32] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/camp_logo_no_background.png"
                alt="EYP Logo"
                width={60}
                height={60}
                className="mr-2"
                priority
              />
              <span className="text-white font-semibold text-lg">EYP Azerbaijan</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map(({ href, label }) => {
                const isActive = path === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors ' +
                      (isActive
                        ? 'border-b-2 border-white text-white font-bold'
                        : 'text-white hover:text-white/80')
                    }
                  >
                    {label}
                  </Link>
                );
              })}
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
                <svg className="block h-6 w-6" />
              ) : (
                <svg className="block h-6 w-6" />
              )}
              <span className="ml-2 text-sm font-medium">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2E7D32]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(({ href, label }) => {
              const isActive = path === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors ' +
                    (isActive
                      ? 'border-l-4 border-white text-white font-bold'
                      : 'text-white hover:text-white/80')
                  }
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}