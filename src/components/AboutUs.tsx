import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div id="about-us" className="bg-white py-16 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">ABOUT US</h2>
        </div>
        
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision & Team</h3>
          <p className="text-gray-700 leading-relaxed">
            Empowering grassroots movements to drive positive change under the guidance of Jagananna.
            Powered by a dedicated team committed to community upliftment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;