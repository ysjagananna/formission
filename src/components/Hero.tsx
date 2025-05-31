import React from 'react';
import { Play } from 'lucide-react';
import ReactPlayer from 'react-player';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-green-500 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-bold text-white mb-8">
            Are you Ready ?<br />
            To be a<br />
            Part of Jagananna mission
          </h2>
          <a 
            href="#join-the-mission" 
            className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            JOIN THE MISSION
          </a>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-200">
            {/* <img 
              src="https://assets.thehansindia.com/h-upload/2024/02/03/1420425-siddham.webp" 
              alt="Mission video thumbnail" 
              className="w-full h-full object-cover"
            /> */}
            <ReactPlayer url='https://www.youtube.com/watch?v=ofGgeXu1FCQ'/>
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                <Play size={28} className="text-blue-600 ml-1" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;