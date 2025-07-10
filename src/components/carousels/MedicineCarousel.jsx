import React from "react";
import { RefreshCw, CheckCircle, Clock, BadgePercent } from "lucide-react";

const MedicineExchangePage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3560400/pexels-photo-3560400.jpeg"
          alt="Medicine exchange program"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-700/90" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-8 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-2xl text-white">
          {/* Icon Badge with 100Rs off badge */}
          <div className="relative">
            <div className="bg-amber-400 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <RefreshCw className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <BadgePercent className="w-3 h-3 mr-1" />
              ₹100 OFF
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Medicine Exchange Program
          </h1>

          {/* Subtitle with promotion */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-white/90">
            Return Unused Medicines | Get Store Credits + ₹100 Bonus
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg mb-6 opacity-90">
            Exchange your unused, unexpired medications and receive credits for future purchases through our eco-friendly program. <span className="font-semibold">Get an additional ₹100 off your first exchange!</span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Full Value Credits", "Eco-Friendly Process", "Easy Drop-Off", "₹100 Bonus"].map((feature, i) => (
              <div 
                key={i} 
                className={`flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 ${feature.includes('₹100') ? 'border-2 border-yellow-300' : ''}`}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button with promotion highlight */}
          <div className="relative">
            <button
              onClick={() => window.location.href = "/medicine-exchange"}
              className="bg-white text-amber-500 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 "
            >
              View Exchange Policy
            </button>
          </div>

          {/* Urgency Indicator */}
          <div className="mt-8 flex items-center text-white/80">
            <Clock className="w-5 h-5 mr-2" />
            <span className="text-sm">Limited time offer - 20% bonus credits + ₹100 extra</span>
          </div>
        </div>

        {/* Right Section with Medicine Image */}
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