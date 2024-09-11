import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">LMS</a>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-black hover:text-gray-500 transition duration-300">HOME</a>
          <a href="/books" className="text-black hover:text-gray-500 transition duration-300">BOOKS</a>
          <a href="/help" className="text-black hover:text-gray-500 transition duration-300">HELP</a>
          <a href="/contact" className="text-black hover:text-gray-500 transition duration-300">CONTACT US</a>
        </div>

        {/* Call-to-Action Button for Desktop */}
        <div className="hidden md:flex">
          <button className="bg-black text-white px-5 py-2 rounded-[18px] hover:scale-105 transition-all duration-300">
            Login
          </button>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <a href="/" className="text-gray-600 hover:text-gray-800 transition duration-300">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-800 transition duration-300">About</a>
            <a href="/services" className="text-gray-600 hover:text-gray-800 transition duration-300">Services</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800 transition duration-300">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}