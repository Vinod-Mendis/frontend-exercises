"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const servicesItems = [
    { title: 'Web Development', href: '/services/web' },
    { title: 'Mobile App Development', href: '/services/mobile' },
    { title: 'Cloud Services', href: '/services/cloud' }
  ];

  const aboutItems = [
    { title: 'Our Team', href: '/about/team' },
    { title: 'Our History', href: '/about/history' },
    { title: 'Our Mission', href: '/about/mission' }
  ];

  return (
    <nav className="bg-white shadow-xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex space-x-4">
            <Link href="/" className="flex items-center py-4 px-2">
              <span className="font-bold text-xl text-gray-700">Logo</span>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-2">
            {/* Home */}
            <Link href="/" className="py-4 px-3 text-gray-700 transition-all-0.3s hover:bg-purple-400 hover:text-white hover:rounded-sm">
              Home
            </Link>

            {/* Blog */}
            <Link href="/blog" className="py-4 px-3 text-gray-700 transition-all hover:bg-purple-400 hover:text-white hover:rounded-sm">
              Blog
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="py-4 px-3 text-gray-700 transition-all hover:bg-purple-400 hover:text-white hover:rounded-sm">
                Services
              </button>
              
              {/* Invisible bridge to prevent gap */}
              <div className="absolute -bottom-2 left-0 w-full h-2" />
              
              {/* Services Dropdown Menu */}
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-400 "
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="py-4 px-3 text-gray-700 transition-all hover:bg-purple-400 hover:text-white hover:rounded-sm">
                About Us
              </button>
              
              {/* Invisible bridge to prevent gap */}
              <div className="absolute -bottom-2 left-0 w-full h-2" />
              
              {/* About Us Dropdown Menu */}
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-400"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Us */}
            <Link href="/contact" className="py-4 px-3 text-gray-700 transition-all hover:bg-purple-400 hover:text-white hover:rounded-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;