import React from 'react';
import { Users, UtensilsCrossed, Trophy } from 'lucide-react';

function BenefitsList() {
  const benefits = [
    {
      icon: UtensilsCrossed,
      text: 'Access to 1000+ kid-friendly recipes'
    },
    {
      icon: Users,
      text: 'Connect with other young chefs'
    },
    {
      icon: Trophy,
      text: 'Earn badges and rewards'
    }
  ];

  return (
    <div className="space-y-4">
      <p className="text-lg text-gray-600">
        Join thousands of young cooking enthusiasts and start your culinary journey today!
      </p>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <li key={index} className="flex items-center text-gray-700">
              <span className="bg-orange-100 p-1 rounded-full mr-3">
                <Icon className="h-5 w-5 text-orange-600" />
              </span>
              {benefit.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BenefitsList;