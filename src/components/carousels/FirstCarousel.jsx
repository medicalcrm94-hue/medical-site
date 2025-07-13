"use client";

import React from "react";
import { Calendar, CheckCircle, Clock } from "lucide-react";

const BookAppointmentPage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg"
          alt="Doctor consultation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800/90" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-8 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-2xl text-white">
          {/* Icon Badge */}
          <div className="bg-gray-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
            <Calendar className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Book Doctor Appointment
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-white/90">
            Instant Confirmation | 5000+ Specialists
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg mb-6 opacity-90">
            Consult with top doctors via video or in-clinic. Available across 50+ specialties.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["No Waiting Time", "24/7 Availability", "Verified Doctors"].map((feature, i) => (
              <div key={i} className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => window.location.href = "/book"}
            className="bg-white text-gray-500 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 hover:text-black"
          >
            Book Now
          </button>

          {/* Urgency Indicator */}
          <div className="mt-4 flex items-center text-white/80">
            <Clock className="w-5 h-5 mr-2" />
            <span className="text-sm">Next slot available in 15 mins</span>
          </div>
        </div>

        {/* Right Section with Doctor Image */}
        <div className="hidden lg:flex items-center justify-center ml-auto w-2/5 max-w-xl h-full pl-10">
          <div className="relative w-full h-[32rem]">
            <img
              src="/exchange1.png"
              alt="Doctor consultation illustration"
              className="w-96 h-96 object-cover rounded-xl transform scale-105 md:mt-25"
              loading="lazy"
              style={{ maxHeight: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentPage;