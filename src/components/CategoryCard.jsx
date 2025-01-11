import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, Utensils, Trophy } from 'lucide-react';

const levelStyles = {
  beginner: 'bg-gradient-to-br from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 border-10 border-green-400',
  intermediate: 'bg-gradient-to-tl from-purple-300 to-purple-900 hover:from-purple-400 hover:to-purple-800 border-10 border-purple-500',
  advanced: 'bg-gradient-to-tl from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 border-10 border-red-500',
};

const iconStyles = {
  beginner: 'text-cyan-600',
  intermediate: 'text-purple-500',
  advanced: 'text-red-600',
};

const IconComponent = {
  beginner: ChefHat,
  intermediate: Utensils,
  advanced: Trophy,
};

export default function CategoryCard({ title, subtitle, recipeCount, level }) {
  const navigate = useNavigate();
  const Icon = IconComponent[level];

  const handleClick = () => {
    navigate(`/recipes/${level}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="transform hover:scale-[1.02] transition-transform duration-300 h-full rounded-xl shadow-lg overflow-hidden cursor-pointer"
    >
      <div className={`p-[10px] rounded-xl ${levelStyles[level]}`}>
        <div className="p-14 bg-white h-full">
          <div className="flex items-center justify-between mb-8">
            <Icon size={36} className={iconStyles[level]} />
            <span className="text-gray-600 text-lg">{recipeCount} Recipes</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-xl text-gray-600 mb-6">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

