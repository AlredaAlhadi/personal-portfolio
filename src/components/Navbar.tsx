// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold text-blue-600">Alreda</Link>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#education" className="text-gray-700 hover:text-blue-600">Education</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <a href="#about" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#projects" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#education" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Education</a>
          <a href="#contact" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
}
