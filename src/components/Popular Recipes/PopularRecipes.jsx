import React from 'react';
import { RecipeCard } from './RecipeCard';

const recipes = [
  {
    name: "Classic Margherita Pizza",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    difficulty: "Easy",
    timeInMinutes: 45,
    servings: 4
  },
  {
    name: "Thai Green Curry",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
    difficulty: "Medium",
    timeInMinutes: 60,
    servings: 6
  },
  {
    name: "Chocolate Soufflé",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc",
    difficulty: "Hard",
    timeInMinutes: 75,
    servings: 2
  },
  {
    name: "Mediterranean Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    difficulty: "Easy",
    timeInMinutes: 20,
    servings: 4
  },
  {
    name: "Beef Wellington",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    difficulty: "Hard",
    timeInMinutes: 120,
    servings: 6
  },
  {
    name: "Sushi Roll Platter",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    difficulty: "Medium",
    timeInMinutes: 90,
    servings: 8
  }
];

export function PopularRecipes() {
  return (
<section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4 bg-gray-50 mt-16">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Popular Recipes
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Discover our most loved recipes, from quick weekday meals to impressive dinner party showstoppers.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.name} {...recipe} />
      ))}
    </div>
  </div>
</section>

  );
}