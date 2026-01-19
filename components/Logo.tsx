
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img
        src="/assets/logo.png"
        alt="Cruffle Queen Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
