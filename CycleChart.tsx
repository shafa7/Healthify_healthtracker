import React from 'react';
import { Calendar } from 'lucide-react';

const CycleChart: React.FC = () => {
  return (
    <div className="bg-purple-100 rounded-lg p-6 relative overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Calendar className="text-purple-600 mr-2" size={20} />
          <span className="text-sm text-gray-600">Tue, 11 April</span>
        </div>
      </div>
      <div className="relative">
        <svg viewBox="0 0 100 50" className="w-full">
          <path
            d="M0,50 Q50,0 100,50"
            fill="none"
            stroke="#E9D5FF"
            strokeWidth="40"
          />
          <path
            d="M0,50 Q50,0 100,50"
            fill="none"
            stroke="#A855F7"
            strokeWidth="40"
            strokeDasharray="31.4 188.4"
            strokeDashoffset="-31.4"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl font-bold text-white">4</p>
          <p className="text-sm text-white">Day</p>
        </div>
      </div>
      <p className="text-center mt-4 text-purple-700">Period in</p>
      <p className="text-center text-sm text-purple-600">Lower chance to get pregnant</p>
    </div>
  );
};

export default CycleChart;