'use client'

import { motion } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Button } from './ui/button'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <ParallaxBanner
      layers={[
        { image: '/images/hero-bg.jpg', speed: -20 },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8" id='Hero'>
              <div className="text-center">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Elevating Brands, Crafting Impact
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-800 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Empowering public relations with strategic innovation and storytelling.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                <Link href="#contact">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="font-semibold bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800 transition-colors 
                      sm:text-2xl sm:px-8 sm:py-4 sm:border-4 sm:rounded-xl
                      md:text-xl md:px-6 md:py-3 md:border-2 md:rounded-lg"
                  >
                    Let’s Work Together
                  </Button>
                </Link>


                </motion.div>
              </div>

            </div>

          ),
        },
      ]}
      className="h-screen"
    />
  )
}

