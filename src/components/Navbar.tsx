'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50); // Increased threshold for better stability
    };

    // Add throttling to prevent too many state updates
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  useEffect(() => {
    // Navbar animation on load
    gsap.fromTo('.navbar', 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar fixed z-50 w-full transition-all duration-300 ease-in-out ${
      scrolled 
        ? 'md:top-4 md:px-4 top-0 px-0' 
        : 'top-0 px-0'
    }`}>
      <div className={`mx-auto max-w-7xl transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'md:bg-gradient-to-r md:from-purple-900/90 md:via-blue-900/85 md:to-indigo-900/90 md:dark:from-purple-950/95 md:dark:via-blue-950/90 md:dark:to-indigo-950/95 md:backdrop-blur-md md:shadow-lg md:shadow-purple-500/20 md:border md:border-purple-500/30 md:dark:border-purple-400/20 md:rounded-2xl md:px-6 md:py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-3 py-3' 
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none px-3 py-3 md:px-4 md:py-4 lg:px-8'
      }`}>
        <div className="flex items-center justify-between w-full min-h-[3rem]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              scrolled 
                ? 'md:text-white md:drop-shadow-lg text-gray-900 dark:text-white' 
                : 'text-gray-900 dark:text-white'
            }`}>
              I&apos;am
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                  scrolled 
                    ? 'text-white/90 hover:text-cyan-300' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                  scrolled 
                    ? 'bg-cyan-300' 
                    : 'bg-blue-600 dark:bg-blue-400'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button - Fixed size */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-300 dark:border-gray-600"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-5 w-5 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Consistent */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-200/30 dark:border-gray-700/30 shadow-lg mx-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 block px-3 py-2.5 rounded-md text-sm font-medium w-full text-left transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
