'use client'
import Image from "next/image";
import Link from 'next/link'
import { Button } from '@/app/components/button'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('EN')

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
  }, [mobileMenuOpen]);

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen)
  }

  const selectLanguage = (lang: string) => {
    setCurrentLanguage(lang)
    setLanguageMenuOpen(false)
    // Here you would add logic to change the actual language of the site
  }

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur bg-gradient-to-br from-black to-red-500/60 supports-[backdrop-filter]:bg-black/60 border-b border-red-500 shadow-[0_2px_10px_0_rgba(255,0,0,0.4)] selection:bg-red-500">
      <div className="flex h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-50">
          <Image
            src="/vgoLogo.png"
            alt="VGO Racing Logo"
            width={140}
            height={140}
            className="object-contain w-auto h-10 md:h-12 min-w-[80px] sm:min-w-[100px]"
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
          
          {/* Language Selector - Desktop */}
          <div className="relative ml-2">
            <button 
              onClick={toggleLanguageMenu}
              className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Language selector"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{currentLanguage}</span>
              <ChevronDown size={16} className={`transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Language Dropdown */}
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-black/90 backdrop-blur-sm border border-red-500/30 rounded-md shadow-lg overflow-hidden z-50 animate-in fade-in zoom-in-95">
                <button 
                  onClick={() => selectLanguage('EN')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-red-900/50 transition-colors ${currentLanguage === 'EN' ? 'bg-red-900/30' : ''}`}
                >
                  English
                </button>
                <button 
                  onClick={() => selectLanguage('ES')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-red-900/50 transition-colors ${currentLanguage === 'ES' ? 'bg-red-900/30' : ''}`}
                >
                  Español
                </button>
                <button 
                  onClick={() => selectLanguage('FR')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-red-900/50 transition-colors ${currentLanguage === 'FR' ? 'bg-red-900/30' : ''}`}
                >
                  Français
                </button>
              </div>
            )}
          </div>

          <div className="flex space-x-2 ml-4">
            <Button asChild variant="default" className="text-xs sm:text-sm">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="default" className="text-xs sm:text-sm">
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Language Selector - Mobile (only icon) */}

          <button 
            className="text-white z-52 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Fixed positioning with proper height */}
        <div className={`md:hidden fixed inset-0 bg-gradient-to-b from-red-950 via-black to-red-950
           backdrop-blur-md z-51 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out pt-10 pb-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500
          ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
          style={{ height: '100vh', top: '0' }}
        >
          <div className="overflow-y-auto w-full flex flex-col items-center space-y-6">
            <Link 
              href="/book" 
              className="w-full max-w-xs text-center text-xl font-medium text-white hover:text-red-500 hover:bg-white/85 transition-colors py-4 px-10 shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500 rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
            <Link 
              href="/competition" 
              className="w-full max-w-xs text-center text-xl font-medium text-white hover:text-red-500 hover:bg-white/85 transition-colors py-4 px-10 shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500 rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Competition
            </Link>
            <Link 
              href="/vgospace" 
              className="w-full max-w-xs text-center text-xl font-medium text-white hover:text-red-500 hover:bg-white/85 transition-colors py-4 px-10 shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500 rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              VGO-Space
            </Link>
            <Link 
              href="/shop" 
              className="w-full max-w-xs text-center text-xl font-medium text-white hover:text-red-500 hover:bg-white/85 transition-colors py-4 px-10 shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500 rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/contact" 
              className="w-full max-w-xs text-center text-xl font-medium text-white hover:text-red-500 hover:bg-white/85 transition-colors py-4 px-10 shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500 rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Language Selector - Mobile Expanded */}
            <div className="w-full max-w-xs px-4 mt-4">
              <div className="relative">
                <button 
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-black/30 border border-red-500/50 rounded-lg text-white"
                >
                  <div className="flex items-center gap-2">
                    <Globe size={18} />
                    <span>Language ({currentLanguage})</span>
                  </div>
                  <ChevronDown size={18} className={`transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {languageMenuOpen && (
                  <div className="mt-1 w-full bg-black/70 backdrop-blur-sm border border-red-500/30 rounded-md overflow-hidden animate-in fade-in zoom-in-95">
                    <button 
                      onClick={() => {
                        selectLanguage('EN');
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-white text-left px-4 py-3 hover:bg-red-900/50 transition-colors ${currentLanguage === 'EN' ? 'bg-red-900/30' : ''}`}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => {
                        selectLanguage('ES');
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-white text-left px-4 py-3 hover:bg-red-900/50 transition-colors ${currentLanguage === 'ES' ? 'bg-red-900/30' : ''}`}
                    >
                      Español
                    </button>
                    <button 
                      onClick={() => {
                        selectLanguage('FR');
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-white text-left px-4 py-3 hover:bg-red-900/50 transition-colors ${currentLanguage === 'FR' ? 'bg-red-900/30' : ''}`}
                    >
                      Français
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-4 mt-4 w-full max-w-xs px-4">
              <Button 
                asChild 
                variant="secondary" 
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
          <div className="absolute bottom-16 flex items-center space-x-4 text-white opacity-50 text-sm">
            <span>+91 7022254378</span>
            <span>•</span>
            <Link href="mailto:info@vgoracing.com">info@vgoracing.com</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}