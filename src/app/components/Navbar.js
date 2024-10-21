"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Page', href: '/page' },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white mb-1">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">
              aktive
            </a>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mx-3 text-gray-800 hover:text-gray-600 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
              <Search className="w-5 h-5 text-gray-800" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 ml-2">
              <User className="w-5 h-5 text-gray-800" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 ml-2 relative">
              <ShoppingCart className="w-5 h-5 text-gray-800" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
     
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <div className="flex justify-around mt-4">
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
              <Search className="w-5 h-5 text-gray-800" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
              <User className="w-5 h-5 text-gray-800" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 relative">
              <ShoppingCart className="w-5 h-5 text-gray-800" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      
   </>
  );
}

export default Navbar;