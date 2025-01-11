import React from 'react';
import CategoryCard from './CategoryCard';

export function CategoryGrid() {
  const categories = [
    {
      title: 'Beginner',
      subtitle: 'Just Starting Out',
      recipeCount: 25,
      level: 'beginner',
    },
    {
      title: 'Intermediate',
      subtitle: 'Getting Better',
      recipeCount: 25,
      level: 'intermediate',
    },
    {
      title: 'Advanced',
      subtitle: 'Kitchen Pro',
      recipeCount: 25,
      level: 'advanced',
    },
  ];

  return (
    <section className="bg-gradient-to-t from-orange-50 to-white py-16 px-4 bg-gray-50 -mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Choose Your Level
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select your cooking expertise and discover recipes tailored to your skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 max-w-7xl mx-auto">
        {categories.map((category) => (
          <CategoryCard key={category.level} {...category} />
        ))}
      </div>
    </section>
  );
}


