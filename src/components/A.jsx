import React from 'react';
import { ChefHat, Search, BookOpen } from 'lucide-react';
import { Hero, Button } from './S';

const A = () => {
  const handleFindRecipe = () => {
    console.log('Finding recipe...');
  };

  const handleBrowseRecipes = () => {
    console.log('Browsing recipes...');
  };

  return (
    <div style={{ backgroundColor: 'beige', minHeight: '100vh', padding: '20px' }}>
      <Hero>
        <Logo />
        <Title />
        <Subtitle />
        <ActionButtons
          onFindRecipe={handleFindRecipe}
          onBrowseRecipes={handleBrowseRecipes}
        />
      </Hero>
    </div>
  );
};

const Logo = () => (
  <div className="flex justify-center mb-8">
    <ChefHat className="h-32 w-32 text-orange-500" />
  </div>
);

const Title = () => (
  <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
    Start Your Cooking Adventure!
  </h1>
);

const Subtitle = () => (
  <p className="text-2xl md:text-3xl text-gray-600 max-w-2xl mx-auto mb-12">
    Easy recipes for young chefs to create amazing dishes
  </p>
);

const ActionButtons = ({ onFindRecipe, onBrowseRecipes }) => (
  <div className="flex justify-center space-x-6">
  </div>
);

export default A;
