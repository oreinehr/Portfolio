// components/ui/button.tsx

import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick} 
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};
