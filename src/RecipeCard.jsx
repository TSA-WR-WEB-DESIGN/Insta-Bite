import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';

const RecipeCard = ({ title, image, time, servings, difficulty, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{servings} servings</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat size={16} />
            <span>{difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;