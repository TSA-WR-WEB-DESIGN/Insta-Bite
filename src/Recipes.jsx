import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import CategoryFilter from './CategoryFilter';
import SearchBar from './components/SearchBar';
import { recipes } from './data/recipes';

export default function Recipes() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [...new Set(recipes.map(recipe => recipe.category))];
  
  const filteredRecipes = recipes
    .filter(recipe => {
      const matchesCategory = activeCategory === 'all' || recipe.category === activeCategory;
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

  return (
    <div className="pt-16 bg-gradient-to-b from-orange-50 to-white"> {/* Added light orange background here */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Recipes</h1>
        
        {/* Search bar and filters moved down */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 mt-8">
          <div className="md:w-1/3">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
          <div className="md:w-2/3">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}
