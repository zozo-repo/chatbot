"use client"

import { useRef } from "react"
import Button from "../common/Button"

const HeroSection = () => {
  const coursesRef = useRef(null)

  // Function to scroll to courses section
  const scrollToCourses = () => {
    const coursesSection = document.querySelector("#courses-section")
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Function to scroll down to the next section
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0 opacity-20"
        style={{ backgroundImage: "url('/block.png?height=1080&width=1920')" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-gray-900 z-0"></div>

      {/* Animated particles or glow effect could be added here */}
      <div className="absolute inset-0 z-0">
        {/* Abstract shapes or SVG patterns */}
        <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-high-contrast">
              <span className="gradient-text">Shape Your Future</span>
              <br />
              <span className="text-white">at Lyallpur Khalsa</span>
            </h1>
            <p className="text-medium-contrast text-lg mb-8 max-w-xl">
              Punjab's premier technical institution offering cutting-edge engineering education with state-of-the-art
              facilities and industry connections for a successful career.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button gradient={true} size="lg" glow={true} onClick={scrollToCourses}>
                Explore Programs
              </Button>
              <Button variant="outline" size="lg" onClick={scrollDown}>
                Virtual Tour
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Main image with glassmorphic effect */}
              <div className="rounded-xl overflow-hidden blue-glow">
                <img
                  src="/col-logo.png"
                  alt="LKCTC Campus"
                  className="w-full h-auto rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Floating stats cards */}
              <div className="absolute -bottom-10 -left-10 p-4 rounded-lg blue-glow w-40">
                <div className="text-center">
                  <h3 className="text-3xl font-bold gradient-text">85%</h3>
                  <p className="text-xs text-medium-contrast">Placement Rate</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 p-4 rounded-lg blue-glow w-40">
                <div className="text-center">
                  <h3 className="text-3xl font-bold gradient-text">30+</h3>
                  <p className="text-xs text-medium-contrast">Years of Excellence</p>
                </div>
              </div>

              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 p-4 rounded-lg blue-glow w-40">
                <div className="text-center">
                  <h3 className="text-3xl font-bold gradient-text">100+</h3>
                  <p className="text-xs text-medium-contrast">Industry Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
          onClick={scrollDown}
        >
          <span className="text-blue-300 text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
