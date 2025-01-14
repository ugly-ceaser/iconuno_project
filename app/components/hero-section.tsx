'use client'

import { motion } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <ParallaxBanner
      layers={[
        { image: '/images/hero-bg.jpg', speed: -20 },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
              <div className="text-center">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Your Vision, Our Lens
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-800 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Capturing stories through cutting-edge media solutions
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="font-semibold"
                  >
                    Explore Our Work
                  </Button>
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

