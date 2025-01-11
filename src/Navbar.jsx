import React, { useState } from 'react';
import { ChefHat, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">InstaBite</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className={`flex items-center text-gray-600 hover:text-orange-500 py-2 ${
                  isActive('/recipes') ? 'text-orange-500' : ''
                }`}
              >
                Recipes
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div 
                className={`absolute left-0 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transform transition-all duration-200 ${
                  isDropdownOpen 
                    ? 'opacity-100 translate-y-0 visible' 
                    : 'opacity-0 -translate-y-2 invisible'
                }`}
              >
                <div className="py-1">
                  <Link
                    to="/recipes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    All Recipes
                  </Link>
                  <Link
                    to="/breakfast"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Breakfast
                  </Link>
                  <Link
                    to="/lunch"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Lunch
                  </Link>
                  <Link
                    to="/dinner"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Dinner
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/documentation" className={`block px-3 py-2 text-gray-600 hover:text-orange-500 ${isActive('/documentation') ? 'text-orange-500' : ''}`} onClick={() => setIsMenuOpen(false)} > Documentation </Link>
            <Link 
              to="/about" 
              className={`text-gray-600 hover:text-orange-500 ${isActive('/about') ? 'text-orange-500' : ''}`}
            >
              About
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <div className="space-y-1">
              <button
                className={`flex items-center w-full px-3 py-2 text-gray-600 hover:text-orange-500 ${
                  isActive('/recipes') ? 'text-orange-500' : ''
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Recipes
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/recipes"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-500"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    All Recipes
                  </Link>
                  <Link
                    to="/recipes/breakfast"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-500"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Breakfast
                  </Link>
                  <Link
                    to="/recipes/lunch"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-500"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Lunch
                  </Link>
                  <Link
                    to="/recipes/dinner"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-500"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Dinner
                  </Link>
                  <Link
                    to="/recipes/desserts"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-500"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Desserts
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/documentation" className={`text-gray-600 hover:text-orange-500 ${isActive('/documentation') ? 'text-orange-500' : ''}`} > Documentation </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-gray-600 hover:text-orange-500 ${isActive('/about') ? 'text-orange-500' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}