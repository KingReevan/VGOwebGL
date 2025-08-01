'use client'
import Image from "next/image";
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur bg-gradient-to-br from-black to-red-500/60 supports-[backdrop-filter]:bg-black/60 border-b border-red-500 shadow-[0_2px_10px_0_rgba(255,0,0,0.4)] selection:bg-red-500">
      <div className="container flex h-18 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-50">
          <Image
            src="/vgoLogo.png"
            alt="VGO Racing Logo"
            width={140}
            height={60}
            className="object-contain w-auto h-10 md:h-12"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10 ml-auto text-white">
          <Link href="/book" className="text-sm font-medium hover:text-primary transition-colors">
            Book Now
          </Link>
          <Link href="/competition" className="text-sm font-medium hover:text-primary transition-colors">
            Competition
          </Link>
          <Link href="/vgospace" className="text-sm font-medium hover:text-primary transition-colors">
            VGO-Space
          </Link>
          <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
            Shop
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <div className="flex space-x-2 ml-4">
            <Button asChild variant="default" size="sm">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="default" size="sm">
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-52 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu - Fixed positioning with proper height */}
        <div className={`fixed inset-0 bg-gradient-to-b from-black via-red-950 to-black
           backdrop-blur-md z-51 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out pt-20 pb-10
          ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
          style={{ height: '100vh', top: '0' }}
        >
          <div className="overflow-y-auto w-full flex flex-col items-center space-y-6">
            <Link 
              href="/book" 
              className="text-xl font-medium text-white hover:text-primary transition-colors py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
            <Link 
              href="/competition" 
              className="text-xl font-medium text-white hover:text-primary transition-colors py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Competition
            </Link>
            <Link 
              href="/vgospace" 
              className="text-xl font-medium text-white hover:text-primary transition-colors py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              VGO-Space
            </Link>
            <Link 
              href="/shop" 
              className="text-xl font-medium text-white hover:text-primary transition-colors py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/contact" 
              className="text-xl font-medium text-white hover:text-primary transition-colors py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-4 mt-8 w-full max-w-xs px-4">
              <Button 
                asChild 
                variant="default" 
                size="lg"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button 
                asChild 
                variant="default" 
                size="lg"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-6 flex items-center space-x-4 text-white opacity-50 text-sm">
            <span>+91 7022254378</span>
            <span>•</span>
            <Link href="mailto:info@vgoracing.com">info@vgoracing.com</Link>
          </div>
          <div className="absolute top-0 w-full h-1 bg-red-500 shadow-red-500 shadow-md" />

        </div>
      </div>
    </nav>
  )
}