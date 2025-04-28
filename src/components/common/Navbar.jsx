"use client"

import { useState, useEffect } from "react"
import GlassMorphicContainer from "./GlassMorphicContainer"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Placements", path: "/placements" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <GlassMorphicContainer
        className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6"
        glow={scrolled ? "dual" : "none"}
        borderGradient={scrolled}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img src="/placeholder.svg?height=40&width=40" alt="Lyallpur Khalsa College" className="h-10 w-auto" />
          </div>
          <div className="ml-4">
            <h1 className="text-lg sm:text-xl font-bold gradient-text">Lyallpur Khalsa College</h1>
            <p className="text-xs sm:text-sm text-gray-300">Technical Campus, Jalandhar</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-300 hover:text-white font-medium transition-colors px-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="glassmorphic p-2 rounded-lg hover:purple-glow transition-all duration-300 text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* Menu Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </GlassMorphicContainer>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <GlassMorphicContainer className="md:hidden absolute w-full mt-2 py-2 border-t border-gray-700/50">
          <nav className="flex flex-col space-y-4 px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-300 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </GlassMorphicContainer>
      )}
    </header>
  )
}

export default Navbar
