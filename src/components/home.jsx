import React from 'react';
import { CategoryCard } from './components/CategoryCard';


export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simplified "Choose Your Level" section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Level</h1>
          <p className="text-lg text-gray-600">
            Select your cooking expertise and discover recipes tailored to your skills
          </p>
        </div>


        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <CategoryCard
            title="Beginner"
            subtitle="Just Starting Out"
            recipeCount={25}
            level="beginner"
          />
          <CategoryCard
            title="Intermediate"
            subtitle="Getting Better"
            recipeCount={50}
            level="intermediate"
          />
          <CategoryCard
            title="Advanced Pro"
            subtitle="Kitchen Pro"
            recipeCount={75}
            level="advanced"
          />
        </div>
      </div>
    </div>
  );
}



