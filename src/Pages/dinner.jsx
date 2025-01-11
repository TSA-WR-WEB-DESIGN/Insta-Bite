import React from 'react';
import RecipeCard from '../RecipeCard';

function Dinner() {
  const recipes = [
    {
      title: "Spaghetti Carbonara",
      time: "30 mins",
      servings: 4,
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper. Rich, creamy, and absolutely delicious."
    },
    {
      title: "Grilled Salmon",
      time: "25 mins",
      servings: 2,
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?w=400",
      description: "Fresh salmon fillets grilled to perfection with lemon and herbs. A healthy and flavorful dinner option."
    },
    {
      title: "Chicken Stir-Fry",
      time: "20 mins",
      servings: 3,
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400",
      description: "Quick and colorful stir-fried chicken with fresh vegetables in a savory sauce. Perfect for busy weeknights."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Delicious Dinner Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dinner;