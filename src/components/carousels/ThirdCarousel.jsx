import React from "react";
import Image from "next/image";
import { MessageCircle, CheckCircle, Clock } from "lucide-react";

const ChatUsPage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
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
      <div className="relative h-full flex items-center px-8 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-2xl text-white">
          {/* Icon Badge */}
          <div className="bg-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Chat with Doctor
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-white/90">
            Free Consultation | Medicine Advice
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg mb-6 opacity-90">
            Get instant responses to your medical queries from certified
            pharmacists via WhatsApp.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Free Service", "Prescription Help", "Dosage Guidance"].map(
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
            onClick={() => window.open("https://wa.me/916309583777", "_blank")}
            className="bg-white text-teal-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Start WhatsApp Chat
          </button>

          {/* Urgency Indicator */}
          <div className="mt-4 flex items-center text-white/80">
            <Clock className="w-5 h-5 mr-2" />
            <span className="text-sm">Typically replies in 2 minutes</span>
          </div>
        </div>

        {/* Right Section with Enlarged Image */}
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
