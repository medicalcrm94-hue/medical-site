"use client";

import React from "react";
import { Phone, CheckCircle, Clock } from "lucide-react";

const CallUsPage = () => {
  return (
    <div className="relative min-h-screen w-full pt-10 md:pt-30">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg"
          alt="Medical phone consultation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-950/90" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-24 py-12 lg:py-0">
        <div className="max-w-2xl text-white lg:mr-8 z-10">
          {/* Icon Badge */}
          <div className="bg-blue-800 w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-lg">
            <Phone className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
            24/7 Medical Helpline
          </h1>

          {/* Subtitle */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3 lg:mb-4 text-white/90">
            Immediate Assistance | Emergency Support
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-6 opacity-90">
            Speak directly with our medical team for urgent consultations and
            prescription refills.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-8">
            {["Instant Connect", "Emergency Care", "Senior Doctors"].map(
              (feature, i) => (
                <div
                  key={i}
                  className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 lg:px-4 lg:py-2"
                >
                  <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                  <span className="text-xs lg:text-sm font-medium">
                    {feature}
                  </span>
                </div>
              )
            )}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => window.open("tel:+916309583777", "_self")}
            className="bg-white text-blue-900 px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-bold text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto"
          >
            Call +91 6309583777
          </button>

          {/* Urgency Indicator */}
          <div className="mt-3 lg:mt-4 flex items-center text-white/80">
            <Clock className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2" />
            <span className="text-xs lg:text-sm">
              Average wait time: 45 seconds
            </span>
          </div>
        </div>

        {/* Right Section with Additional Image - Hidden on mobile */}
        <div className="hidden lg:block h-96 ml-auto w-1/2 max-w-md">
          <img
            src="/call.png"
            alt="Medical support"
            className="items-center w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CallUsPage;
