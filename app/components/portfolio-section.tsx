'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Button } from './ui/button';

// Define the Project type
interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Set the state to be either a Project or null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { id: 1, title: 'Global Tech Summit', image: '/images/project1.jpg', description: 'Comprehensive media coverage for a major tech event.' },
    { id: 2, title: 'Nature Documentary', image: '/images/project2.jpg', description: 'Award-winning documentary showcasing wildlife conservation efforts.' },
    { id: 3, title: 'Fashion Week', image: '/images/project3.jpg', description: 'High-end photography and video production for a prestigious fashion event.' },
    { id: 4, title: 'Corporate Rebranding', image: '/images/project4.jpg', description: 'Complete visual identity overhaul for a Fortune 500 company.' },
  ];

  return (
    <section id="portfolio" className="py-20 text-gray-800">
      <div className="container mx-auto px-4 text-white">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          Our Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
              aria-label={`View details for ${project.title}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
                priority={index < 2} // Load first two images with priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold text-center">{project.title}</h3>
                <Button 
                  className="mt-4 md:hidden" 
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <motion.div
            className="bg-white p-8 rounded-lg max-w-3xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h3 id="modal-title" className="text-2xl font-bold mb-4">
              {selectedProject.title}
            </h3>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={800}
              height={600}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <p id="modal-description" className="text-gray-600 mb-4">
              {selectedProject.description}
            </p>
            <Button variant="secondary" onClick={() => setSelectedProject(null)}>
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
