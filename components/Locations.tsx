import React from 'react';

const Locations: React.FC = () => {
    const locations = [
        {
            name: "The Royal Bakery",
            address: "123 Sweet Treat Lane, Sugarland",
            status: "Poppin' Daily",
            time: "10:00 AM - 8:00 PM"
        },
        {
            name: "Downtown Pop-Up",
            address: "Central Square Market",
            status: "Saturdays Only",
            time: "9:00 AM - 2:00 PM"
        }
    ];

    return (
        <section id="locations" className="py-24 bg-white overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-honey/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-bubblegum/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Where We're Poppin'</h2>
                    <p className="text-bubblegum text-lg uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-bubblegum rounded-full animate-ping"></span>
                        Live Locations
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {locations.map((loc, index) => (
                        <div
                            key={index}
                            className="group bg-offwhite p-8 rounded-3xl border-2 border-transparent hover:border-bubblegum/20 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{loc.name}</h3>
                                    <p className="text-gray-500 font-medium">{loc.address}</p>
                                </div>
                                <span className="inline-flex items-center px-4 py-2 rounded-full bg-mint text-darkpink text-sm font-bold uppercase tracking-tight">
                                    {loc.status}
                                </span>
                            </div>

                            <div className="flex items-center text-gray-600 gap-2 mb-8">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bubblegum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-semibold">{loc.time}</span>
                            </div>

                            <button className="flex items-center gap-2 text-bubblegum font-bold hover:gap-4 transition-all duration-300 group-hover:text-darkpink">
                                Get Directions
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-bubblegum p-1 rounded-3xl shadow-2xl overflow-hidden rotate-1">
                    <div className="bg-white rounded-[1.4rem] p-4 h-64 flex items-center justify-center relative group cursor-pointer">
                        <div className="absolute inset-0 bg-gray-100 opacity-50 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative z-10 text-center">
                            <div className="w-16 h-16 bg-bubblegum/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bubblegum" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m6 13l5.447-2.724a1 1 0 00.553-.894V5.618a1 1 0 00-1.447-.894L15 7m-6 13V7m6 10V7" />
                                </svg>
                            </div>
                            <p className="text-gray-900 font-bold text-xl mb-1">Interactive Map Coming Soon!</p>
                            <p className="text-gray-500 font-medium">We're expanding the Cruffle Kingdom.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
