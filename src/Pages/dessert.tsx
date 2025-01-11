import React from 'react';

interface RecipeCardProps {
  title: string;
  time: string;
  servings: number;
  difficulty: 'Easy' | 'Intermediate' | 'Advanced';
  description: string;
  image: string;
}

function RecipeCard({ title, time, servings, difficulty, description, image }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
          {time}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex space-x-4 mb-3">
          <span className="text-sm text-gray-600">
            <span className="font-medium">Servings:</span> {servings}
          </span>
          <span className="text-sm text-gray-600">
            <span className="font-medium">Difficulty:</span>{' '}
            <span className={`
              ${difficulty === 'Easy' ? 'text-green-600' : ''}
              ${difficulty === 'Intermediate' ? 'text-yellow-600' : ''}
              ${difficulty === 'Advanced' ? 'text-red-600' : ''}
            `}>
              {difficulty}
            </span>
          </span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

export default RecipeCard;