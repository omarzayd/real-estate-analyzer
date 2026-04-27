import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBarChart3, FiTrendingUp, FiBriefcase } from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
}

function Sidebar({ isOpen }: SidebarProps) {
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: FiHome },
    { name: 'Properties', path: '/properties', icon: FiBriefcase },
    { name: 'Analytics', path: '/analytics', icon: FiBarChart3 },
    { name: 'Predictions', path: '/predictions', icon: FiTrendingUp },
  ];

  return (
    <aside
      className={`bg-gray-900 text-white p-4 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="mb-8">
        <h1 className={`text-2xl font-bold ${!isOpen && 'text-center'}`}>
          {isOpen ? 'RE Analyzer' : 'REA'}
        </h1>
      </div>
      <nav className="space-y-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition"
              title={item.name}
            >
              <Icon size={24} />
              {isOpen && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
