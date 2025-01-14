'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const milestones = [
    { year: 2010, title: 'Founded' },
    { year: 2015, title: 'Expanded to 5 countries' },
    { year: 2018, title: 'Launched AI-powered image management' },
    { year: 2022, title: 'Reached 1000+ clients worldwide' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our mission is to capture and manage the essence of stories through cutting-edge media solutions.
        </motion.p>
        <div className="flex overflow-x-auto pb-8">
          {milestones.length > 0 ? (
            milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year} // Changed to year to avoid using index as key
                className="flex-shrink-0 w-64 mx-4 bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-2">{milestone.year}</h3>
                <p className="text-gray-600">{milestone.title}</p>
              </motion.div>
            ))
          ) : (
            <p>No milestones available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  )
}
