import React from 'react';
import { Users, BookOpen, Award } from 'lucide-react';

const stats = [
  { label: 'Active Chefs', value: '10,000+', icon: Users },
  { label: 'Recipes Available', value: '500+', icon: BookOpen },
  { label: 'Success Stories', value: '25,000+', icon: Award },
];

export default function Stats() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
                <Icon className="w-8 h-8 text-orange-500 mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}