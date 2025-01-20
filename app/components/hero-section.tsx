'use client'

import { ParallaxBanner } from 'react-scroll-parallax'
import { Button } from './ui/button'
import Link from 'next/link'

// Hero Section Component
export default function HeroSection() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg.jpg-6pgtwb0ppIGH0jdqH8DYLVUMru6fov.jpeg",
          speed: -80,
          scale: [1, 1.2, "easeOutCubic"],
          shouldAlwaysCompleteAnimation: true,
        },
        {
          speed: -25,
          children: (
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
              {/* Semi-Transparent Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              <div className="text-center z-10 space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Elevating Brands, Crafting Impact
                </h1>
                <p className="text-xl text-white mb-8">
                  Empowering public relations with strategic innovation and storytelling.
                </p>
                <div>
                  <Link href="#contact">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="font-semibold bg-gray-900 text-white border-2 border-gray-900 hover:bg-white hover:text-gray-900 transition-all duration-300 
                        sm:text-2xl sm:px-8 sm:py-4 
                        md:text-xl md:px-6 md:py-3"
                    >
                      Let&apos;s Work Together
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ),
        },
      ]}
      className="h-screen"
    />
  );
}
