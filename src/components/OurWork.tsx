import React from 'react';
import { ChevronRight } from 'lucide-react';

const OurWork: React.FC = () => {
  return (
    <div id="our-work" className="bg-white py-16 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">OUR WORK</h2>
        
        <div className="space-y-6">
          <div className="border border-green-500 rounded-md p-4 flex justify-between items-center hover:bg-green-50 transition-colors">
            <div className="font-medium text-gray-800">DIGITAL CAMPAIGNS</div>
            <div className="flex items-center text-gray-600">
              <span>Crafting sites & campaigns</span>
              <ChevronRight size={20} className="ml-2 text-green-500" />
            </div>
          </div>
          
          <div className="border border-blue-500 rounded-md p-4 flex justify-between items-center hover:bg-blue-50 transition-colors">
            <div className="font-medium text-gray-800">VOLUNTEER DRIVES</div>
            <div className="flex items-center text-gray-600">
              <span>Finding out issues/problems faced by people locally</span>
              <ChevronRight size={20} className="ml-2 text-blue-500" />
            </div>
          </div>
          
          <div className="border border-green-500 rounded-md p-4 flex justify-between items-center hover:bg-green-50 transition-colors">
            <div className="font-medium text-gray-800">COUNTER NARRATIVES</div>
            <div className="flex items-center text-gray-600">
              <span>Running Tacticafreing campaigns</span>
              <ChevronRight size={20} className="ml-2 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;