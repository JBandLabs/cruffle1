
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
          {[
            {
              name: 'instagram',
              path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            },
            {
              name: 'tiktok',
              path: "M12.525.02c1.31 0 2.591.353 3.708 1.018a7.025 7.025 0 0 1 1.637 1.412c.321.401.597.832.823 1.287.062.112.036.25-.062.336-.341.3-.654.628-.934.978a.22.22 0 0 1-.341.012 5.033 5.033 0 0 0-1.265-.898A4.9 4.9 0 0 0 14.15 3.5c-.201-.01-.403.011-.6.061-.502.1-.962.332-1.332.671a3.02 3.02 0 0 0-.749 1.155c-.149.444-.22 1.056-.22 1.3V19a5.006 5.006 0 0 1-5.025 4.98c-1.334 0-2.613-.53-3.555-1.472A5.045 5.045 0 0 1 1 18.95c.01-.1.025-.2.043-.3a5.03 5.03 0 0 1 4.962-4.66c.26 0 .524.02.775.058.4.061.79.18 1.15.353V6.69c0-1.31.353-2.592 1.018-3.708.665-1.116 1.616-2.025 2.744-2.617A5.013 5.013 0 0 1 12.525.02z"
            },
            {
              name: 'facebook',
              path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12.07h3.047V9.479c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.4h-2.796v8.457C19.612 23.027 24 18.062 24 12.073z"
            },
            {
              name: 'twitter',
              path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z"
            }
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              className="w-12 h-12 bg-bubblegum rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300 bouncy-hover"
            >
              <span className="sr-only">{social.name}</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={social.path} />
              </svg>
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
