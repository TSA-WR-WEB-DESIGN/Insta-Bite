import React from 'react';
import { Heart } from 'lucide-react';

export default function Mission() {
  return (
    <div className="bg-gradient-to-t from-orange-50 to-white py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We're passionate about creating simple and eye-widening recipies for everyone.
            Our platform makes learning to cook fun, safe, and accessible for all
           skill levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <img
            src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Kids cooking together"
            className="rounded-lg shadow-lg object-cover h-96 w-full"
          />
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Learning Environment</h3>
              <p className="text-gray-600">Every recipe includes safety tips and adult supervision guidelines.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Step-by-Step Guidance</h3>
              <p className="text-gray-600">Clear instructions and visual guides make cooking easy to follow.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Building Confidence</h3>
              <p className="text-gray-600">Progressive difficulty levels help budding chefs grow their skills.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}