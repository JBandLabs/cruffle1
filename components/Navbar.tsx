import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-offwhite/80 backdrop-blur-md border-b border-bubblegum/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo className="w-12 h-12 transition-transform duration-300 group-hover:rotate-6" />
          <span className="text-2xl font-bold tracking-tight text-bubblegum">Cruffle Queen</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-semibold text-gray-600 hover:text-bubblegum transition-colors uppercase text-sm tracking-widest"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="bg-bubblegum/10 p-2 rounded-full md:hidden text-bubblegum transition-colors hover:bg-bubblegum/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`
        md:hidden fixed inset-x-0 bg-white border-b border-bubblegum/10 transition-all duration-300 ease-in-out shadow-xl
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}>
        <div className="px-6 py-8 flex flex-col space-y-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-bold text-gray-800 hover:text-bubblegum transition-colors uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            className="w-full bg-bubblegum text-white font-bold py-4 rounded-2xl shadow-lg bouncy-hover mt-4"
            onClick={() => setIsOpen(false)}
          >
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
