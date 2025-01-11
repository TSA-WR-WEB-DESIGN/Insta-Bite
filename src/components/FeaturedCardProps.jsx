import React from 'react';
import { ChefHat, Clock, Leaf, Users } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
        <Icon className="w-6 h-6 text-orange-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeaturedCardProps() {
  const features = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "Learn from professional chefs with years of culinary experience in top restaurants worldwide."
    },
    {
      icon: Clock,
      title: "Time-Saving Recipes",
      description: "Master efficient cooking techniques and quick recipes that don't compromise on taste."
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We emphasize using fresh, seasonal ingredients to create healthy and delicious meals."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a vibrant community of home cooks sharing tips, tricks, and culinary inspiration."
    }
  ];

  return (
    <div className="h-auto bg-gray-50"> {/* Changed from min-h-screen to h-auto */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Cook With Us?
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCardProps;
