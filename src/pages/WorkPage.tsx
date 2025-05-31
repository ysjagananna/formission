import React from 'react';
import Navbar from '../components/Navbar';
import OurWork from '../components/OurWork';
import Footer from '../components/Footer';

const WorkPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-8">
        <OurWork />
      </div>
      <Footer />
    </div>
  );
};

export default WorkPage;