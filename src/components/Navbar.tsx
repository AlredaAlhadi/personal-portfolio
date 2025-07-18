// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>

    {/* Early Work in Progress Banner */}
    <div className="text-yellow-200 text-center text-sm py-4 px-2 sm:px-4 z-10 relative">
        🚧 This website is still an <strong>early work in progress</strong>. Updates to design and functionality are coming soon!
    </div>

    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold text-blue-600">Alreda.dev</Link>

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
          <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 bg-white shadow-md z-50">
          <a href="#about" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#projects" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#education" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Education</a>
          <a href="#skills" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Skills</a>
          <a href="#contact" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>

    </>
  );
}
