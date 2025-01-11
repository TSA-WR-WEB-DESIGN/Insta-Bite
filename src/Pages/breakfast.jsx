import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../RecipeCard';

function Breakfast() {
  const breakfastItems = [
    {
      id: 1,
      title: "Classic Eggs Benedict",
      time: "25 mins",
      servings: 2,
      difficulty: "Intermediate",
      description: "Perfectly poached eggs on toasted English muffins with Canadian bacon and creamy hollandaise sauce.",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Blueberry Pancake Stack",
      time: "20 mins",
      servings: 4,
      difficulty: "Easy",
      description: "Fluffy buttermilk pancakes studded with fresh blueberries, served with maple syrup and butter.",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Avocado Toast",
      time: "10 mins",
      servings: 2,
      difficulty: "Easy",
      description: "Toasted bread topped with smashed avocado, chili flakes, and a poached egg",
      image: "https://thesaltypot.com/wp-content/uploads/2019/02/Avocado-Toast09-735x1110.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white mt-16">
      {/* Header Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Breakfast Recipes</h1>
          <p className="mt-4 text-gray-600">
            Start your day with these easy and delightful breakfast ideas. From quick fixes to gourmet dishes, we've got you covered!
          </p>
        </div>
      </div>

      {/* Recipes Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breakfastItems.map((item) => (
            <Link to={`/recipe/${item.id}`} key={item.id}>
              <RecipeCard {...item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Breakfast;
