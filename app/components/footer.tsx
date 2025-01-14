'use client';

import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const MotionLink = dynamic(() => import('framer-motion').then(mod => mod.motion.a), { ssr: false });

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(0);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear()); // Only runs on client-side
  }, []);

  const socialIcons = [
    { Icon: FacebookIcon, href: '#', ariaLabel: 'Facebook' },
    { Icon: TwitterIcon, href: '#', ariaLabel: 'Twitter' },
    { Icon: InstagramIcon, href: '#', ariaLabel: 'Instagram' },
    { Icon: LinkedinIcon, href: '#', ariaLabel: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Icon Uno
            </Link>
          </div>
          <nav className="w-full md:w-auto mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="w-full md:w-auto flex justify-center md:justify-end space-x-4">
            {socialIcons.map(({ Icon, href, ariaLabel }, index) => (
              <MotionLink
                key={index}
                href={href}
                aria-label={ariaLabel}
                className="text-gray-600 hover:text-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </MotionLink>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          &copy; {currentYear} Icon Uno. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
