import React from 'react';
import { ChefHat, Search, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="relative">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjQ0LCA2MywgOTQsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-40"></div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <ChefHat className="h-20 w-20 text-orange-500" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Start Your Cooking Adventure!
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
              Easy recipes for young chefs to create amazing dishes
            </p>

            {/* Background image */}
            <div className="absolute inset-0 -z-10">
              <img
                src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=2400&q=80"
                alt="Cooking background"
                className="object-cover w-full h-full opacity-10"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 rounded-full text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl">
                <Search className="w-5 h-5 mr-2" />
                Find Perfect Recipe
              </button>
              
              <button className="inline-flex items-center px-8 py-4 rounded-full text-orange-600 bg-white hover:bg-orange-50 transition-colors border-2 border-orange-500 shadow-lg hover:shadow-xl">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse All Recipes
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
}

export default App;