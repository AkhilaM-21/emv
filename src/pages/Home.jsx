import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import WhyEmvive from '../components/WhyEmvive';
import Features from '../components/Features';
import GlobeSection from '../components/GlobeSection';
import Clients from '../components/Clients';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <WhyEmvive />
      <Clients />
      <Features />
      <GlobeSection />
      <FAQ />
    </>
  );
};

export default Home;
