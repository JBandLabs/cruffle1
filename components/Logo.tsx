
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Crown - Positioned slightly above the cruffle */}
      <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="absolute -top-[15%] w-[65%] h-[65%] text-honey drop-shadow-sm z-10"
      >
        <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" />
      </svg>
      
      {/* Cruffle (Waffle-Croissant base) */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-bubblegum drop-shadow-md"
      >
        <rect x="10" y="25" width="80" height="70" rx="18" fill="currentColor" />
        {/* Waffle Grid Pattern for the "Cruffle" texture */}
        <g stroke="rgba(255,255,255,0.6)" strokeWidth="4" strokeLinecap="round">
          <line x1="30" y1="25" x2="30" y2="95" />
          <line x1="50" y1="25" x2="50" y2="95" />
          <line x1="70" y1="25" x2="70" y2="95" />
          <line x1="10" y1="42" x2="90" y2="42" />
          <line x1="10" y1="60" x2="90" y2="60" />
          <line x1="10" y1="78" x2="90" y2="78" />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
