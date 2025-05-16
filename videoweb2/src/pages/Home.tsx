import React from 'react';
import Hero from '../components/sections/Hero';
import ServiceSection from '../components/sections/ServiceSection';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import Testimonials from '../components/sections/Testimonials';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <PortfolioPreview />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Home;