import React from 'react';

const Analytics: React.FC = () => {
  return (
    <div className="bg-white py-16 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">ANALYTICS DASHBOARD</h2>
        </div>
        
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Whatsapp Dashboard</h3>
            <div className="h-32 bg-gray-100 rounded-md flex items-end">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, i) => (
                <div 
                  key={i}
                  className="h-full flex-1 flex items-end mx-px"
                >
                  <div 
                    className="w-full bg-blue-600" 
                    style={{ 
                      height: `${Math.max(20, Math.min(100, 20 + i * 8))}%`,
                      opacity: 0.7 + (i * 0.03)
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">WhatsApp Growth</h3>
            <div className="h-32 bg-gray-100 rounded-md relative overflow-hidden">
              <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                <path
                  d="M0,30 L0,25 C5,23 10,20 15,18 C25,15 35,10 45,15 C55,20 65,25 75,20 C85,15 95,5 100,0 L100,30 Z"
                  fill="rgba(37, 99, 235, 0.5)"
                />
                <path
                  d="M0,25 C5,23 10,20 15,18 C25,15 35,10 45,15 C55,20 65,25 75,20 C85,15 95,5 100,0"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;