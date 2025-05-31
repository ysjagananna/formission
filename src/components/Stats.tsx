import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="bg-white py-10 px-6 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-center gap-8">
        <div className="flex-1">
          <h3 className="text-4xl font-bold text-blue-600">50K+</h3>
          <p className="text-gray-700">WhatsApp Reach</p>
        </div>
        
        <div className="flex-1">
          <h3 className="text-4xl font-bold text-green-600">85k+</h3>
          <p className="text-gray-700">Social Media Reach</p>
        </div>
        
        <div className="flex-1">
          <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
          <p className="text-gray-700">Volunteers</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;