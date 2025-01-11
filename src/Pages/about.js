import React from 'react';
import Mission from '../mission';
import Stats from '../stats';
import FooterSection from '../components/Footer/FooterSection';

export default function About() {
  return (
    <div className="pt-16">
      <Mission />
      <Stats />
      <FooterSection />
    </div>
  );
}