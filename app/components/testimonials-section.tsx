'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { ParallaxBanner } from 'react-scroll-parallax'  // This uses createContext
import Image from 'next/image'

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'John Doe',
      company: 'Tech Innovators Inc.',
      image: '/testimonial1.jpg',
      quote: "Icon Uno's media coverage of our product launch was exceptional.",
    },
    {
      name: 'Jane Smith',
      company: 'Creative Solutions LLC',
      image: '/testimonial2.jpg',
      quote: "The team at Icon Uno exceeded our expectations.",
    },
    {
      name: 'Alice Johnson',
      company: 'Innovatech',
      image: '/testimonial3.jpg',
      quote: "Their attention to detail made all the difference.",
    },
    {
      name: 'Bob Brown',
      company: 'Future Tech',
      image: '/testimonial4.jpg',
      quote: "We saw a significant increase in engagement after the campaign.",
    },
    {
      name: 'Charlie Davis',
      company: 'NextGen Media',
      image: '/testimonial5.jpg',
      quote: "Icon Uno's creativity is unmatched in the industry.",
    },
    {
      name: 'Diana Prince',
      company: 'Global Enterprises',
      image: '/testimonial6.jpg',
      quote: "A fantastic experience from start to finish.",
    },
    // more testimonials...
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          Client Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold  text-white-800">{testimonial.name}</h3>
                  <p className="text-sm text-white-800">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-white-800 italic">&quot;{testimonial.quote}&quot;</p> {/* Escape double quotes */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
