import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-40">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            The Queen of <span className="text-bubblegum font-script block mt-2 text-6xl md:text-8xl">Cruffles</span> has Arrived!
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 font-medium">
            Handmade treats by an 11-year-old visionary. Experience the magic of perfectly balanced sweetness.
          </p>
          <Button variant="accent">
            Shop Flavors
          </Button>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-mint rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-lavender rounded-full blur-3xl opacity-30"></div>

          <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
            {/* Updated with a high-res, reliable croffle image that captures the flaky texture and golden finish */}
            <img
              src="/assets/hero-cruffle.jpg"
              alt="Handmade Signature Biscoff Cruffle"
              className="rounded-2xl w-full h-[450px] object-cover shadow-inner"
            />
            <div className="absolute -bottom-6 -right-6 bg-bubblegum text-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
              <span className="font-bold text-lg italic text-white drop-shadow-sm">Freshly Pressed!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;