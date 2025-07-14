import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookAppointmentPage from "./carousels/FirstCarousel";
import CallUsPage from "./carousels/SecondCarousel";
import ChatUsPage from "./carousels/ThirdCarousel";
import MedicineExchangePage from "./carousels/MedicineCarousel";

const MedicalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play with pause on interaction
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === 3 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Touch handling for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) goToNext();
    if (touchStart - touchEnd < -50) goToPrevious();
  };

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? 3 : prev - 1));
    handleInteraction();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === 3 ? 0 : prev + 1));
    handleInteraction();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    handleInteraction();
  };

  // Slide transition styles
  const getSlideStyle = (index) => {
    if (index === currentIndex) return "translate-x-0";
    if (index < currentIndex) return "-translate-x-full";
    return "translate-x-full";
  };

  return (
    <div
      className="mt-10 relative w-full h-[80vh] sm:h-[90vh] max-h-[800px] min-h-[600px] sm:min-h-[500px] overflow-hidden rounded-b-xl shadow-xl sm:shadow-2xl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="relative h-full">
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getSlideStyle(
            0
          )}`}
        >
          <BookAppointmentPage />
        </div>
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getSlideStyle(
            1
          )}`}
        >
          <CallUsPage />
        </div>
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getSlideStyle(
            2
          )}`}
        >
          <ChatUsPage />
        </div>
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getSlideStyle(
            3
          )}`}
        >
          <MedicineExchangePage />
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={goToPrevious}
        className="hidden sm:block absolute left-2 sm:left-4 top-1/2 z-20 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="hidden sm:block absolute right-2 sm:right-4 top-1/2 z-20 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-6 sm:w-8 scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MedicalCarousel;
