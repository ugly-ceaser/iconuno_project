'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md text-gray-800' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 sm:px-6 md:px-8 flex justify-between items-center">
        <Link
          href="/#Hero"
          className={`text-2xl font-bold transition-colors ${
            isScrolled ? 'text-gray-800' : 'text-white'
          } hover:text-gray-600`}
        >
          Icon Uno
        </Link>

        <nav>
          <ul className="flex space-x-6 justify-center">
            {['About', 'Portfolio', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  } hover:text-gray-600`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
