import React from 'react';

function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stats Cards */}
        {[
          { label: 'Total Properties', value: '1,234' },
          { label: 'Avg Price', value: '$250K' },
          { label: 'Active Listings', value: '456' },
          { label: 'Market Growth', value: '+12.5%' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
