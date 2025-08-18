'use client';

import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme');
    console.log('Saved theme:', savedTheme);
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      console.log('Setting to dark mode');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Setting to light mode');
    }
  }, []);

  const handleToggle = () => {
    if (!mounted) return;
    
    console.log('Toggle clicked, current isDark:', isDark);
    
    const newTheme = !isDark;
    console.log('Setting new theme:', newTheme ? 'dark' : 'light');
    
    // Update state
    setIsDark(newTheme);
    
    // Apply to document immediately
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Applied dark class to document');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Removed dark class from document');
    }
  };

  if (!mounted) {
    return (
      <button className="w-12 h-12 rounded-full border-2 border-gray-300 bg-gray-100" disabled>
        <div className="w-5 h-5 mx-auto opacity-0"></div>
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="relative w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:scale-105 bg-gray-100 dark:bg-gray-700"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Sun Icon */}
      {!isDark && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute inset-0 m-auto text-yellow-600 transition-opacity duration-300"
        >
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2"/>
          <path d="M12 21v2"/>
          <path d="M4.22 4.22l1.42 1.42"/>
          <path d="M18.36 18.36l1.42 1.42"/>
          <path d="M1 12h2"/>
          <path d="M21 12h2"/>
          <path d="M4.22 19.78l1.42-1.42"/>
          <path d="M18.36 5.64l1.42-1.42"/>
        </svg>
      )}
      
      {/* Moon Icon */}
      {isDark && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute inset-0 m-auto text-blue-300 transition-opacity duration-300"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
