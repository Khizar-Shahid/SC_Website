'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  const isHomePage = pathname === '/'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-2xl md:text-3xl font-serif font-bold transition-colors duration-300 ${
                isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
              }`}
            >
              Sutherland
              <span className={isScrolled || !isHomePage ? 'text-primary-600' : 'text-gold-400'}>
                {' '}Event Studio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isScrolled || !isHomePage
                        ? isActive
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                        : isActive
                        ? 'text-gold-400 bg-white/20'
                        : 'text-white hover:text-gold-400 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-400 text-white text-sm font-semibold rounded-lg hover:from-primary-700 hover:to-primary-500 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Plan Your Event
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-400 rounded-lg hover:from-primary-700 hover:to-primary-500 transition-all duration-300 text-center mt-4"
            >
              Plan Your Event
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
