import React from 'react';
import { Users, UtensilsCrossed, Trophy, ArrowRight } from 'lucide-react';
import BenefitsList from './BenefitsList';
import SignUpForm from './SignUpForm';
import SocialProof from './SocialProof';

function JoinCommunity() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <img
                src="https://www.frugalandthriving.com.au/wp-content/uploads/2017/08/simmering.jpg"
                alt="Young chef cooking"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Join The InstaBite Community
              </h2>
              
              <div className="space-y-8">
                <BenefitsList />
                <SignUpForm />
                <SocialProof />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinCommunity;

