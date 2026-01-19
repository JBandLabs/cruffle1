
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'accent' }) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold text-lg bouncy-hover shadow-lg transition-all duration-200";
  
  const variants = {
    primary: "bg-bubblegum text-white hover:bg-darkpink",
    secondary: "bg-mint text-gray-700 hover:bg-opacity-80",
    accent: "bg-honey text-gray-800 hover:shadow-xl"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
