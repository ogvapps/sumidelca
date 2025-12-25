import React from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const bgClass = type === 'success' ? 'bg-green-800' : 'bg-red-800';
  
  return (
    <div className={`fixed z-50 left-1/2 bottom-[50px] -translate-x-1/2 min-w-[250px] text-white text-center rounded-lg p-4 shadow-lg text-[17px] animate-fade-in ${bgClass}`}>
      {message}
    </div>
  );
};

export default Toast;