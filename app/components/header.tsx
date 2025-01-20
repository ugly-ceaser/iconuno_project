'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled && !isMenuOpen ? 'bg-white/80 backdrop-blur-md text-gray-800' : 'bg-transparent text-white'
      } ${isMenuOpen ? 'bg-white/70' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 sm:px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/#Hero"
          className={`text-2xl font-bold transition-colors ${
            isScrolled ? 'text-gray-800' : 'text-white'
          } hover:text-gray-600`}
        >
          Icon Uno
        </Link>

        {/* Mobile Hamburger Menu Button */}
        <div className="ml-auto">
          <button
            className="md:hidden flex flex-col justify-center items-center space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <>
           
              </>
            ) : (
              <>
                <span className="block w-6 h-0.5 bg-[#fff]"></span>
                <span className="block w-6 h-0.5 bg-[#fff] my-1"></span>
                <span className="block w-6 h-0.5 bg-[#fff]"></span>
              </>
            )}
          </button>
        </div>

        {/* Navigation Menu (Mobile & Desktop) */}
        <nav>
          {/* Mobile Menu */}
          <ul
            className={`md:hidden absolute top-0 right-0 w-full bg-white/70 transition-all ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <div className="flex justify-between items-center p-4">
              <h2 className="text-lg font-bold"></h2>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="block w-6 h-0.5 bg-gray-800 transform rotate-45"></span>
                <span className="block w-6 h-0.5 bg-gray-800 transform -rotate-45"></span>
              </button>
            </div>
            <ul className="flex flex-col items-center space-y-4">
              {['About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`transition-colors ${
                      isMenuOpen ? 'text-black' : 'text-white'
                    } hover:text-gray-600`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </ul>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
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
