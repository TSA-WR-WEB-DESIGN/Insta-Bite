import React from 'react';

export default function NewsletterForm() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
      <p className="text-orange-700 mb-4">Get weekly recipes and cooking tips!</p>
      <form className="space-y-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded bg-white text-orange-900 placeholder-orange-400 border border-orange-200 focus:outline-none focus:border-orange-500"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}