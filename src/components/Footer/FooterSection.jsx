import React from 'react';
import { ChefHat } from 'lucide-react';
import NewsletterForm from './NewsletterForm'; // Update this path as needed
import QuickLinks from './QuickLinks'; // Ensure this path is correct

export default function FooterSection() {
  return (
    <footer className="bg-orange-50 text-orange-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">InstaBite</span>
            </div>
            <p className="text-orange-700 mb-4">
              Inspiring the next generation of young chefs with fun and safe cooking adventures.
            </p>
          </div>

          {/* Quick Links */}
          <QuickLinks />

          {/* Newsletter */}
          <NewsletterForm />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-orange-600">
            <p>© {new Date().getFullYear()} Young Chefs Hub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-900 transition">Terms</a>
              <a href="#" className="hover:text-orange-900 transition">Privacy</a>
              <a href="#" className="hover:text-orange-900 transition">Safety</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
