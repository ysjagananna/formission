import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Play } from 'lucide-react';

const MediaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">MEDIA</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Video Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative aspect-video">
              <img 
                src="https://www.sakshi.com/styles/webp/s3/article_images/2024/03/10/siddham1.jpg.webp?itok=ZibZr567" 
                alt="Mission video thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                  <Play size={24} className="text-blue-600 ml-1" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mission Overview</h3>
              <p className="text-gray-600">Learn about our mission and vision for community development.</p>
            </div>
          </div>

          {/* Video Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative aspect-video">
              <img 
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201806/maxresdefault_0.jpeg?size=690:388" 
                alt="Campaign video thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                  <Play size={24} className="text-blue-600 ml-1" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Latest Campaign</h3>
              <p className="text-gray-600">Watch our recent community outreach initiatives.</p>
            </div>
          </div>

          {/* Video Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative aspect-video">
              <img 
                src="https://source.boomplaymusic.com/group10/M00/04/11/af304a48ef61446c8d9371cb72d5e208_464_464.jpg" 
                alt="Success stories thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                  <Play size={24} className="text-blue-600 ml-1" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Success Stories</h3>
              <p className="text-gray-600">Inspiring stories from our community members.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MediaPage;