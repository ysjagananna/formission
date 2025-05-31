import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import AboutUs from '../components/AboutUs';
import OurWork from '../components/OurWork';
import Analytics from '../components/Analytics';
import JoinForm from '../components/JoinForm';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <AboutUs />
      <OurWork />
      <Analytics />
      <JoinForm />
      <Footer />
    </div>
  );
};

export default HomePage;