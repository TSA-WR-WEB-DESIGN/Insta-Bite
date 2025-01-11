import React from 'react';

function SocialProof() {
  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '1000+', label: 'Recipes' },
    { number: '100K+', label: 'Successful Cooks' }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold text-orange-600">{stat.number}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default SocialProof;