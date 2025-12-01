import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyExist from './components/WhyExist';
import WhatWeDo from './components/WhatWeDo';
import WhyChooseUs from './components/WhyChooseUs';
import Approach from './components/Approach';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhyExist />
        <WhatWeDo />
        <WhyChooseUs />
        <Approach />
        <WhoWeWorkWith />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;