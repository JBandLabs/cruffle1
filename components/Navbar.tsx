
import React from 'react';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-offwhite/80 backdrop-blur-md border-b border-bubblegum/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <Logo className="w-12 h-12 transition-transform duration-300 group-hover:rotate-6" />
          <span className="text-2xl font-bold tracking-tight text-bubblegum">Cruffle Queen</span>
        </div>
        
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

        <button className="bg-bubblegum/10 p-2 rounded-full md:hidden text-bubblegum">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
