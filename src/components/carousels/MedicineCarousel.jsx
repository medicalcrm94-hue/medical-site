"use client";

import React from "react";
import { RefreshCw, CheckCircle, Clock, BadgePercent } from "lucide-react";

const MedicineExchangePage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-10 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3560400/pexels-photo-3560400.jpeg"
          alt="Medicine exchange program"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-800/90" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-24 py-12 lg:py-0">
        {/* Text Content */}
        <div className="max-w-2xl text-white lg:mr-8 z-10">
          {/* Icon Badge with 100Rs off badge */}
          <div className="relative">
            <div className="bg-yellow-600 w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-lg">
              <RefreshCw className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <BadgePercent className="w-3 h-3 mr-1" />
              ₹100 OFF
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
            Medicine Exchange Program
          </h1>

          {/* Subtitle with promotion */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3 lg:mb-4 text-white/90">
            Return Unused Medicines | Get Store Credits + ₹100 Bonus
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-6 opacity-90">
            Exchange your unused, unexpired medications and receive credits for future purchases through our eco-friendly program. <span className="font-semibold">Get an additional ₹100 off your first exchange!</span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-8">
            {["Full Value Credits", "Eco-Friendly Process", "Easy Drop-Off", "₹100 Bonus"].map((feature, i) => (
              <div 
                key={i} 
                className={`flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 lg:px-4 lg:py-2 ${feature.includes('₹100') ? 'border-2 border-yellow-300' : ''}`}
              >
                <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <span className="text-xs lg:text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button with promotion highlight */}
          <div className="relative">
            <button
              onClick={() => window.location.href = "/medicine-exchange"}
              className="bg-white text-amber-600 px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-bold text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto"
            >
              View Exchange Policy
            </button>
          </div>

          {/* Urgency Indicator */}
          <div className="mt-4 lg:mt-8 flex items-center text-white/80">
            <Clock className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2" />
            <span className="text-xs lg:text-sm">Limited time offer - 20% bonus credits + ₹100 extra</span>
          </div>
        </div>

        {/* Right Section with Medicine Image - Hidden on mobile, shown on lg+ */}
        <div className="hidden lg:flex items-center justify-center ml-auto w-2/5 max-w-xl h-full pl-10">
          <div className="relative w-full h-[32rem]">
            <img
              src="/medicine.png"
              alt="Medicine exchange illustration"
              className="w-full h-full object-contain rounded-lg transform scale-105"
              loading="lazy"
              style={{ maxHeight: '100%' }}
            />
            {/* Promotion badge on image */}
            <div className="absolute top-4 right-4 bg-white text-amber-600 font-bold px-3 py-1 rounded-full text-sm shadow-lg">
              ₹100 OFF
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineExchangePage;