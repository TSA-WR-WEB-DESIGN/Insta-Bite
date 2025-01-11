import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';

export function RecipeCard({ name, image, difficulty, timeInMinutes, servings }) {
  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  }[difficulty];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-1 rounded-full text-sm font-medium ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{timeInMinutes} mins</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span>Serves {servings}</span>
          </div>
        </div>

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          <ChefHat className="w-4 h-4" />
          View Recipe
        </button>
      </div>
    </div>
  );
}