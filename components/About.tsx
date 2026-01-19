
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-mint/30 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-bubblegum rounded-full p-2 border-4 border-white shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" 
                alt="The Young Founder" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet the Queen</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our founder isn't your typical baker. At just 11 years old, she combined her love for croissants and waffles to create the first "Cruffle." What started in a small home kitchen in 2024 has grown into a local sensation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic font-medium">
              "I wanted to make something that was both crunchy and fluffy, and most importantly, super fun to eat. Every Cruffle is a little piece of my imagination!" — The Queen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
