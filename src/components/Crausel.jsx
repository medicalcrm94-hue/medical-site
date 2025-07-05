"use client"

import Link from "next/link";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    title: "Advanced Cardiology Services",
    description:
      "State-of-the-art cardiac care with experienced specialists using the latest technology to ensure your heart health.",
    image:
      "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    buttonText: "Book Appointment",
  },
  {
    id: 2,
    title: "Comprehensive Diagnostic Center",
    description:
      "Complete diagnostic services including MRI, CT scans, and laboratory testing for accurate and timely results.",
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    buttonText: "Book Appointment",
  },
  {
    id: 3,
    title: "24/7 Emergency Care",
    description:
      "Round-the-clock emergency medical services with skilled professionals ready to handle any medical emergency.",
    image:
      "https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    buttonText: "Emergency Info",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Initial load animation trigger
    const initialTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 100);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1
      );
      setIsTransitioning(false);
    }, 100);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1
      );
      setIsTransitioning(false);
    }, 100);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 100);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-b-2xl shadow-2xl h-screen">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentIndex
              ? "translate-x-0"
              : index < currentIndex
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <div className="relative h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-8 max-w-4xl">
                <h2
                  className={`text-5xl font-bold mb-6 leading-tight transform transition-all duration-1000 ${
                    index === currentIndex && !isTransitioning && !isInitialLoad
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay:
                      index === currentIndex &&
                      !isTransitioning &&
                      !isInitialLoad
                        ? "200ms"
                        : "0ms",
                  }}
                >
                  {item.title}
                </h2>
                <p
                  className={`text-xl mb-8 leading-relaxed opacity-90 transform transition-all duration-1000 ${
                    index === currentIndex && !isTransitioning && !isInitialLoad
                      ? "translate-y-0 opacity-90"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay:
                      index === currentIndex &&
                      !isTransitioning &&
                      !isInitialLoad
                        ? "400ms"
                        : "0ms",
                  }}
                >
                  {item.description}
                </p>
                <Link href='/book#second-section'>
                <button
                  className={`bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    index === currentIndex && !isTransitioning && !isInitialLoad
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-8 opacity-0 scale-95"
                  }`}
                  style={{
                    transitionDelay:
                      index === currentIndex &&
                      !isTransitioning &&
                      !isInitialLoad
                        ? "600ms"
                        : "0ms",
                    transitionDuration: "800ms",
                  }}
                >
                  {item.buttonText}
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
