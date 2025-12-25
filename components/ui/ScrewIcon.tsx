import React from 'react';

interface ScrewIconProps {
  className?: string;
}

const ScrewIcon: React.FC<ScrewIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 2h10v4H7z" className="opacity-70" />
      <path d="M8 3h8v2H8z" className="opacity-80" />
      <path d="M9 6h6v14l-3 2-3-2V6z" /> 
      <path d="M9 8h6v1H9z" />
      <path d="M9 10h6v1H9z" />
      <path d="M9 12h6v1H9z" />
      <path d="M9 14h6v1H9z" />
      <path d="M9 16h6v1H9z" />
    </svg>
  );
};

export default ScrewIcon;