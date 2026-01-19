import React from 'react';
import { FLAVORS } from '../constants';

const ProductGrid: React.FC = () => {
  return (
    <section id="lineup" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Cruffle Lineup</h2>
          <p className="text-gray-600 text-lg uppercase tracking-widest font-semibold">New Flavors Every Week</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FLAVORS.map((flavor) => (
            <div 
              key={flavor.id} 
              className="group cruffle-card bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-8 border border-gray-100"
            >
              <div className={`w-full aspect-square mb-8 rounded-2xl overflow-hidden ${flavor.color} flex items-center justify-center relative`}>
                <img 
                  src={flavor.image} 
                  alt={flavor.name} 
                  className="product-img w-full h-full object-cover transition-transform duration-500"
                />
                {flavor.name === 'Biscoff Magic' && (
                  <div className="absolute top-2 right-2 bg-white/90 text-bubblegum text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                    Fan Favorite
                  </div>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-bubblegum transition-colors text-center leading-tight">
                {flavor.name}
              </h3>
              <p className="text-gray-500 text-center mb-6 text-sm h-12 overflow-hidden line-clamp-2">
                {flavor.description}
              </p>
              <button className="w-full text-bubblegum font-bold border-2 border-bubblegum px-6 py-2 rounded-full hover:bg-bubblegum hover:text-white transition-all bouncy-hover">
                Add to Box
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;