
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-bubblegum/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-8">
          <Logo className="w-10 h-10" />
          <span className="text-xl font-bold tracking-tight text-bubblegum">Cruffle Queen</span>
        </div>
        
        <div className="flex space-x-6 mb-8">
          {['instagram', 'tiktok', 'facebook', 'twitter'].map((social) => (
            <a key={social} href="#" className="w-10 h-10 bg-bubblegum/10 rounded-full flex items-center justify-center text-bubblegum hover:bg-bubblegum hover:text-white transition-all bouncy-hover">
              <span className="sr-only">{social}</span>
              <div className="w-5 h-5 bg-current rounded-sm"></div>
            </a>
          ))}
        </div>
        
        <p className="text-gray-400 font-medium">Handmade with love in 2026</p>
        <div className="mt-4 flex space-x-4 text-xs text-gray-400 uppercase tracking-widest">
          <a href="#" className="hover:text-bubblegum">Privacy</a>
          <a href="#" className="hover:text-bubblegum">Terms</a>
          <a href="#" className="hover:text-bubblegum">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
