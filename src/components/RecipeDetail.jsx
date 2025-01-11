// RecipeDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { recipeId } = useParams(); // Retrieve the recipeId from the URL
  const recipes = [
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

  // Find the recipe by recipeId
  const recipe = recipes.find((r) => r.id === parseInt(recipeId));

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full mt-4" />
      <p className="mt-4 text-gray-600"><strong>Time: </strong>{recipe.time}</p>
      <p className="text-gray-600"><strong>Servings: </strong>{recipe.servings}</p>
      <p className="text-gray-600"><strong>Difficulty: </strong>{recipe.difficulty}</p>
      <p className="mt-4 text-gray-600">{recipe.description}</p>
    </div>
  );
}

export default RecipeDetail;
