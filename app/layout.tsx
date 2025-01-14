'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Ensures client-only code
  }, [])

  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <title>IconUno | Elevate Your Digital Presence</title>
        <meta
          name="description"
          content="Welcome to IconUno – your ultimate destination for innovative digital solutions. Explore our services, designed to elevate your online presence."
        />
        <meta
          name="keywords"
          content="IconUno, digital solutions, web design, digital marketing, innovative online services"
        />
        <meta name="author" content="IconUno Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="IconUno | Elevate Your Digital Presence" />
        <meta
          property="og:description"
          content="Discover IconUno, where creativity meets technology. We offer exceptional digital services to help your business thrive online."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iconuno.com" />
        <meta property="og:image" content="https://iconuno.com/og-image.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IconUno | Elevate Your Digital Presence" />
        <meta
          name="twitter:description"
          content="Unleash the power of digital innovation with IconUno. Explore our expert services and achieve your business goals."
        />
        <meta
          name="twitter:image"
          content="https://iconuno.com/twitter-image.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {isClient ? (
          <ParallaxProvider>{children}</ParallaxProvider>
        ) : (
          children
        )}
      </body>
    </html>
  )
}
