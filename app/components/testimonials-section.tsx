'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
      name: 'John Doe',
      company: 'Tech Innovators Inc.',
      image: '/testimonial1.jpg',
      quote: "Icon Uno's media coverage of our product launch was exceptional.",
    },

    {
      name: 'John Doe',
      company: 'Tech Innovators Inc.',
      image: '/testimonial1.jpg',
      quote: "Icon Uno's media coverage of our product launch was exceptional.",
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
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
