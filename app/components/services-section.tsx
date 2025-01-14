'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Megaphone, Briefcase, Globe, Edit, Camera, Video } from 'lucide-react'

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Megaphone,
      title: 'Strategic Communication',
      description: 'Crafting impactful communication strategies to elevate your brand.',
    },
    {
      icon: Briefcase,
      title: 'Media Relations',
      description: 'Building strong relationships with media outlets to amplify your message.',
    },
    {
      icon: Globe,
      title: 'Brand Management',
      description: 'Ensuring your brand stays consistent, relevant, and trusted in the market.',
    },
    {
      icon: Camera,
      title: 'Event Management',
      description: 'Organizing and executing events to create lasting impressions.',
    },
    {
      icon: Edit,
      title: 'Content Creation',
      description: 'Delivering compelling written, visual, and video content to engage your audience.',
    },
    {
      icon: Video,
      title: 'Crisis Management',
      description: 'Proactive and reactive strategies to protect your reputation in challenging times.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-gray-800">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <service.icon className="w-16 h-16 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
