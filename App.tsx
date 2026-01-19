
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductGrid from './components/ProductGrid';
import Locations from './components/Locations';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <ProductGrid />
        <Locations />

        {/* Newsletter / CTA Section */}
        <section className="py-24 bg-lavender/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay in the Royal Loop</h2>
            <p className="text-lg text-gray-600 mb-10">Subscribe to get notified about our limited-edition weekly flavor drops!</p>
            <form className="flex flex-col md:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full border-2 border-lavender/30 focus:border-lavender focus:outline-none w-full md:w-80 shadow-inner"
              />
              <button className="bg-bubblegum text-white font-bold px-8 py-4 rounded-full bouncy-hover shadow-lg">
                Join the Kingdom
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
