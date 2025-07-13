import React from "react";
import { Phone, CheckCircle, Clock } from "lucide-react";

const CallUsPage = () => {
  return (
    <div className="relative h-full w-full">
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
      <div className="relative h-full flex items-center px-8 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-2xl text-white">
          {/* Icon Badge */}
          <div className="bg-blue-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
            <Phone className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            24/7 Medical Helpline
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-white/90">
            Immediate Assistance | Emergency Support
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg mb-6 opacity-90">
            Speak directly with our medical team for urgent consultations and
            prescription refills.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Instant Connect", "Emergency Care", "Senior Doctors"].map(
              (feature, i) => (
                <div
                  key={i}
                  className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              )
            )}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => window.open("tel:+916309583777", "_self")}
            className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Call +91 6309583777
          </button>

          {/* Urgency Indicator */}
          <div className="mt-4 flex items-center text-white/80">
            <Clock className="w-5 h-5 mr-2" />
            <span className="text-sm">Average wait time: 45 seconds</span>
          </div>
        </div>

        {/* Right Section with Additional Image */}
        <div className="h-96 hidden lg:block ml-auto w-1/2 max-w-md">
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
