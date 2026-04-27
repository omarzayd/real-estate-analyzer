import React from 'react';
import { FiMenu } from 'react-icons/fi';

interface NavbarProps {
  onMenuClick: () => void;
}

function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-100 rounded-lg"
      >
        <FiMenu size={24} />
      </button>
      <div className="text-xl font-bold text-blue-600">Real Estate Analyzer</div>
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
    </nav>
  );
}

export default Navbar;
