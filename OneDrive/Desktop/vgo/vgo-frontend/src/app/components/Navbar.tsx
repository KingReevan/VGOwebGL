'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

{/* Navbar */}
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur bg-gradient-to-br from-black to-red-500/60 supports-[backdrop-filter]:bg-black/60 border-b border-red-500 shadow-[0_2px_10px_0_rgba(255,0,0,0.4)]">
        <div className="container flex h-16 items-center justify-start">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-lg text-white">
            <span className="text-2xl">🏎️</span>
            <span>VGO Racing</span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center space-x-10 ml-160 text-white">
            <Link href="/book" className="text-sm font-medium hover:text-primary">
              Book Now
            </Link>
            <Link href="/competition" className="text-sm font-medium hover:text-primary">
              Competition
            </Link>
            <Link href="/vgospace" className="text-sm font-medium hover:text-primary">
              VGO-Space
            </Link>
            <Link href="/shop" className="text-sm font-medium hover:text-primary">
              Shop
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <div className="flex space-x-2">
              <Button asChild variant="default">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild variant="default">
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
  )
}





      