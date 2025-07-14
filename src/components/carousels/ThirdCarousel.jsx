"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, CheckCircle, Clock } from "lucide-react";

const ChatUsPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
          alt="WhatsApp medical consultation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-teal-950/90" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-24 py-12 lg:py-0">
        <div className="max-w-2xl text-white lg:mr-8 z-10">
          {/* Icon Badge */}
          <div className="bg-teal-600 w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-lg">
            <MessageCircle className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
            Chat with Doctor
          </h1>

          {/* Subtitle */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3 lg:mb-4 text-white/90">
            Free Consultation | Medicine Advice
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-6 opacity-90">
            Get instant responses to your medical queries from certified
            pharmacists via WhatsApp.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-8">
            {["Free Service", "Prescription Help", "Dosage Guidance"].map(
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
            onClick={() => window.open("https://wa.me/916309583777", "_blank")}
            className="bg-white text-teal-900 px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-bold text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto"
          >
            Start WhatsApp Chat
          </button>

          {/* Urgency Indicator */}
          <div className="mt-3 lg:mt-4 flex items-center text-white/80">
            <Clock className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2" />
            <span className="text-xs lg:text-sm">
              Typically replies in 2 minutes
            </span>
          </div>
        </div>

        {/* Right Section with Enlarged Image - Hidden on mobile */}
        <div className="hidden lg:flex items-center justify-center ml-auto w-[45%] max-w-2xl h-full pl-10">
          <div className="relative w-full h-[36rem]">
            <Image
              src="/57.png"
              alt="WhatsApp chat interface"
              height={1200}
              width={1200}
              className="w-full h-full object-contain rounded-lg transform scale-110"
              loading="lazy"
              style={{ maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUsPage;
