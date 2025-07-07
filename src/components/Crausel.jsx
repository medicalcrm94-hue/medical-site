// "use client";

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Calendar,
//   Phone,
//   MessageCircle,
//   Clock,
//   Users,
//   Shield,
// } from "lucide-react";

// const carouselItems = [
//   {
//     id: 1,
//     title: "Book Your Appointment Today",
//     subtitle: "Expert Medical Care When You Need It",
//     description:
//       "Schedule your consultation with our certified medical professionals. Available 24/7 online booking for your convenience.",
//     features: ["Instant Confirmation", "Flexible Scheduling", "Expert Doctors"],
//     image:
//       "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
//     buttonText: "Book Appointment Now",
//     buttonAction: "/book#appointment",
//     icon: Calendar,
//     bgGradient: "from-blue-600 to-blue-800",
//     accentColor: "bg-blue-500",
//   },
//   {
//     id: 2,
//     title: "Call Us Immediately",
//     subtitle: "24/7 Medical Emergency Hotline",
//     description:
//       "Speak directly with our medical team for urgent consultations and emergency support. No waiting, immediate assistance.",
//     features: ["24/7 Availability", "Instant Response", "Emergency Care"],
//     image:
//       "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
//     buttonText: "Call Now: +1 (555) 123-4567",
//     buttonAction: "tel:+15551234567",
//     icon: Phone,
//     bgGradient: "from-green-600 to-green-800",
//     accentColor: "bg-green-500",
//   },
//   {
//     id: 3,
//     title: "Chat with Us on WhatsApp",
//     subtitle: "Quick Medical Consultations",
//     description:
//       "Get instant medical advice and support through our WhatsApp service. Quick, convenient, and secure messaging.",
//     features: ["Instant Messaging", "Secure Chat", "Quick Response"],
//     image:
//       "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
//     buttonText: "Start WhatsApp Chat",
//     buttonAction: "https://wa.me/15551234567",
//     icon: MessageCircle,
//     bgGradient: "from-emerald-600 to-emerald-800",
//     accentColor: "bg-emerald-500",
//   },
// ];

// const MedicalCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isInitialLoad, setIsInitialLoad] = useState(true);

//   useEffect(() => {
//     const initialTimer = setTimeout(() => {
//       setIsInitialLoad(false);
//     }, 100);
//     return () => clearTimeout(initialTimer);
//   }, []);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
//         );
//         setIsTransitioning(false);
//       }, 100);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

//   const goToPrevious = () => {
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentIndex(
//         currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1
//       );
//       setIsTransitioning(false);
//     }, 100);
//     setIsAutoPlaying(false);
//   };

//   const goToNext = () => {
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentIndex(
//         currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1
//       );
//       setIsTransitioning(false);
//     }, 100);
//     setIsAutoPlaying(false);
//   };

//   const goToSlide = (index) => {
//     if (index === currentIndex) return;
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentIndex(index);
//       setIsTransitioning(false);
//     }, 100);
//     setIsAutoPlaying(false);
//   };

//   const handleButtonClick = (buttonAction) => {
//     if (
//       buttonAction.startsWith("tel:") ||
//       buttonAction.startsWith("https://wa.me/")
//     ) {
//       window.open(buttonAction, "_blank");
//     } else {
//       // Handle internal navigation
//       window.location.href = buttonAction;
//     }
//   };

//   return (
//     <div className="relative w-full overflow-hidden rounded-b-3xl shadow-2xl h-screen">
//       {carouselItems.map((item, index) => {
//         const IconComponent = item.icon;
//         return (
//           <div
//             key={item.id}
//             className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
//               index === currentIndex
//                 ? "translate-x-0"
//                 : index < currentIndex
//                 ? "-translate-x-full"
//                 : "translate-x-full"
//             }`}
//           >
//             <div className="relative h-full">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//               />
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient}/85`}
//               ></div>

//               {/* Decorative elements */}
//               <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
//               <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="text-center text-white px-8 max-w-6xl">
//                   {/* Icon */}
//                   <div
//                     className={`mx-auto mb-8 w-20 h-20 ${
//                       item.accentColor
//                     } rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-1000 ${
//                       index === currentIndex &&
//                       !isTransitioning &&
//                       !isInitialLoad
//                         ? "translate-y-0 opacity-100 scale-100"
//                         : "translate-y-8 opacity-0 scale-75"
//                     }`}
//                     style={{
//                       transitionDelay:
//                         index === currentIndex &&
//                         !isTransitioning &&
//                         !isInitialLoad
//                           ? "100ms"
//                           : "0ms",
//                     }}
//                   >
//                     <IconComponent size={36} className="text-white" />
//                   </div>

//                   {/* Main Title */}
//                   <h1
//                     className={`text-6xl font-bold mb-4 leading-tight transform transition-all duration-1000 ${
//                       index === currentIndex &&
//                       !isTransitioning &&
//                       !isInitialLoad
//                         ? "translate-y-0 opacity-100"
//                         : "translate-y-8 opacity-0"
//                     }`}
//                     style={{
//                       transitionDelay:
//                         index === currentIndex &&
//                         !isTransitioning &&
//                         !isInitialLoad
//                           ? "200ms"
//                           : "0ms",
//                     }}
//                   >
//                     {item.title}
//                   </h1>

//                   {/* Subtitle */}
//                   <h2
//                     className={`text-2xl font-semibold mb-6 text-blue-100 transform transition-all duration-1000 ${
//                       index === currentIndex &&
//                       !isTransitioning &&
//                       !isInitialLoad
//                         ? "translate-y-0 opacity-100"
//                         : "translate-y-8 opacity-0"
//                     }`}
//                     style={{
//                       transitionDelay:
//                         index === currentIndex &&
//                         !isTransitioning &&
//                         !isInitialLoad
//                           ? "300ms"
//                           : "0ms",
//                     }}
//                   >
//                     {item.subtitle}
//                   </h2>

//                   {/* Description */}
//                   <p
//                     className={`text-xl mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto transform transition-all duration-1000 ${
//                       index === currentIndex &&
//                       !isTransitioning &&
//                       !isInitialLoad
//                         ? "translate-y-0 opacity-90"
//                         : "translate-y-8 opacity-0"
//                     }`}
//                     style={{
//                       transitionDelay:
//                         index === currentIndex &&
//                         !isTransitioning &&
//                         !isInitialLoad
//                           ? "400ms"
//                           : "0ms",
//                     }}
//                   >
//                     {item.description}
//                   </p>

//                   {/* Features */}
//                   <div
//                     className={`flex justify-center gap-8 mb-10 transform transition-all duration-1000 ${
//                       index === currentIndex &&
//                       !isTransitioning &&
//                       !isInitialLoad
//                         ? "translate-y-0 opacity-100"
//                         : "translate-y-8 opacity-0"
//                     }`}
//                     style={{
//                       transitionDelay:
//                         index === currentIndex &&
//                         !isTransitioning &&
//                         !isInitialLoad
//                           ? "500ms"
//                           : "0ms",
//                     }}
//                   >
//                     {item.features.map((feature, idx) => (
//                       <div
//                         key={idx}
//                         className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
//                       >
//                         <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
//                         <span className="text-sm font-medium">{feature}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* CTA Button */}
//                   <button
//                     onClick={() => handleButtonClick(item.buttonAction)}
//                     className={`bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95 hover:bg-black hover:text-white ${
//                       index === currentIndex &&
//                       !isTransitioning &&
//                       !isInitialLoad
//                         ? "translate-y-0 opacity-100 scale-100"
//                         : "translate-y-8 opacity-0 scale-95"
//                     }`}
//                     style={{
//                       transitionDelay:
//                         index === currentIndex &&
//                         !isTransitioning &&
//                         !isInitialLoad
//                           ? "50ms"
//                           : "0ms",
//                       transitionDuration: "800ms",
//                     }}
//                   >
//                     {item.buttonText}
//                   </button>

//                   {/* Urgency indicator */}
//                   <div
//                     className={`mt-6 flex items-center justify-center text-yellow-300 transform transition-all duration-1000 ${
//                       index === currentIndex &&
//                       !isTransitioning &&
//                       !isInitialLoad
//                         ? "translate-y-0 opacity-100"
//                         : "translate-y-8 opacity-0"
//                     }`}
//                     style={{
//                       transitionDelay:
//                         index === currentIndex &&
//                         !isTransitioning &&
//                         !isInitialLoad
//                           ? "700ms"
//                           : "0ms",
//                     }}
//                   >
//                     <Clock size={20} className="mr-2" />
//                     <span className="text-sm font-medium">
//                       {index === 0 && "Available 24/7"}
//                       {index === 1 && "Immediate Response"}
//                       {index === 2 && "Instant Connection"}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}

//       {/* Navigation Arrows */}
//       <button
//         onClick={goToPrevious}
//         className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-2xl transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 shadow-lg"
//       >
//         <ChevronLeft size={28} />
//       </button>
//       <button
//         onClick={goToNext}
//         className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-2xl transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 shadow-lg"
//       >
//         <ChevronRight size={28} />
//       </button>

//       {/* Enhanced Dots Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
//         {carouselItems.map((item, index) => {
//           const IconComponent = item.icon;
//           return (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`flex items-center transition-all duration-300 hover:scale-110 ${
//                 index === currentIndex
//                   ? "bg-white/30 backdrop-blur-sm rounded-full px-4 py-2"
//                   : "bg-white/20 rounded-full p-2"
//               }`}
//             >
//               <IconComponent
//                 size={16}
//                 className={`${
//                   index === currentIndex ? "text-white" : "text-white/70"
//                 }`}
//               />
//               {index === currentIndex && (
//                 <span className="ml-2 text-white text-sm font-medium">
//                   {item.title.split(" ")[0]}
//                 </span>
//               )}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default MedicalCarousel;

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Phone,
  MessageCircle,
  Clock,
} from "lucide-react";

const carouselItems = [
  {
    id: 1,
    title: "Book Your Appointment Today",
    subtitle: "Expert Medical Care When You Need It",
    description:
      "Schedule your consultation with our certified medical professionals. Available 24/7 online booking for your convenience.",
    features: ["Instant Confirmation", "Flexible Scheduling", "Expert Doctors"],
    image:
      "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    buttonText: "Book Appointment Now",
    buttonAction: "/book#second-section",
    icon: Calendar,
    bgGradient: "from-blue-600 to-blue-800",
    accentColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Call Us Immediately",
    subtitle: "24/7 Medical Emergency Hotline",
    description:
      "Speak directly with our medical team for urgent consultations and emergency support. No waiting, immediate assistance.",
    features: ["24/7 Availability", "Instant Response", "Emergency Care"],
    image:
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    buttonText: "Call Now: +91 6309583777",
    buttonAction: "tel:+91 6309583777",
    icon: Phone,
    bgGradient: "from-green-600 to-green-800",
    accentColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Chat with Us on WhatsApp",
    subtitle: "Quick Medical Consultations",
    description:
      "Get instant medical advice and support through our WhatsApp service. Quick, convenient, and secure messaging.",
    features: ["Instant Messaging", "Secure Chat", "Quick Response"],
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    buttonText: "Start WhatsApp Chat",
    buttonAction: "https://wa.me/916309583777",
    icon: MessageCircle,
    bgGradient: "from-emerald-600 to-emerald-800",
    accentColor: "bg-emerald-500",
  },
];

const MedicalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
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
    }, 7000);

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

  const handleButtonClick = (buttonAction) => {
    if (
      buttonAction.startsWith("tel:") ||
      buttonAction.startsWith("https://wa.me/")
    ) {
      window.open(buttonAction, "_blank");
    } else {
      // Handle internal navigation
      window.location.href = buttonAction;
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-b-3xl shadow-2xl h-screen min-h-[500px]">
      {carouselItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
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
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient}/85`}
              ></div>

              {/* Decorative elements - Hidden on mobile */}
              <div className="hidden md:block absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="hidden md:block absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
                <div className="text-center text-white max-w-6xl w-full">
                  {/* Icon */}
                  <div
                    className={`mx-auto mb-4 sm:mb-8 w-12 h-12 sm:w-16 md:w-20 sm:h-16 md:h-20 ${
                      item.accentColor
                    } rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-1000 ${
                      index === currentIndex &&
                      !isTransitioning &&
                      !isInitialLoad
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-8 opacity-0 scale-75"
                    }`}
                    style={{
                      transitionDelay:
                        index === currentIndex &&
                        !isTransitioning &&
                        !isInitialLoad
                          ? "100ms"
                          : "0ms",
                    }}
                  >
                    <IconComponent className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                  </div>

                  {/* Main Title */}
                  <h1
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 leading-tight transform transition-all duration-1000 ${
                      index === currentIndex &&
                      !isTransitioning &&
                      !isInitialLoad
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
                  </h1>

                  {/* Subtitle */}
                  <h2
                    className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-3 sm:mb-6 text-blue-100 transform transition-all duration-1000 ${
                      index === currentIndex &&
                      !isTransitioning &&
                      !isInitialLoad
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay:
                        index === currentIndex &&
                        !isTransitioning &&
                        !isInitialLoad
                          ? "300ms"
                          : "0ms",
                    }}
                  >
                    {item.subtitle}
                  </h2>

                  {/* Description */}
                  <p
                    className={`text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-8 leading-relaxed opacity-90 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto transform transition-all duration-1000 ${
                      index === currentIndex &&
                      !isTransitioning &&
                      !isInitialLoad
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

                  {/* Features */}
                  <div
                    className={`flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-10 transform transition-all duration-1000 ${
                      index === currentIndex &&
                      !isTransitioning &&
                      !isInitialLoad
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay:
                        index === currentIndex &&
                        !isTransitioning &&
                        !isInitialLoad
                          ? "500ms"
                          : "0ms",
                    }}
                  >
                    {item.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-2"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-1.5 sm:mr-3"></div>
                        <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleButtonClick(item.buttonAction)}
                    className={`bg-white text-gray-900 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95 hover:bg-black hover:text-white ${
                      index === currentIndex &&
                      !isTransitioning &&
                      !isInitialLoad
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
                    <span className="hidden sm:inline">{item.buttonText}</span>
                    <span className="sm:hidden">
                      {index === 0 && "Book Now"}
                      {index === 1 && "Call Now"}
                      {index === 2 && "Chat Now"}
                    </span>
                  </button>

                  {/* Urgency indicator */}
                  <div
                    className={`mt-3 sm:mt-6 flex items-center justify-center text-yellow-300 transform transition-all duration-1000 ${
                      index === currentIndex &&
                      !isTransitioning &&
                      !isInitialLoad
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay:
                        index === currentIndex &&
                        !isTransitioning &&
                        !isInitialLoad
                          ? "700ms"
                          : "0ms",
                    }}
                  >
                    <Clock className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium">
                      {index === 0 && "Available 24/7"}
                      {index === 1 && "Immediate Response"}
                      {index === 2 && "Instant Connection"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 shadow-lg"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4">
        {carouselItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex items-center transition-all duration-300 hover:scale-110 ${
                index === currentIndex
                  ? "bg-white/30 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-2"
                  : "bg-white/20 rounded-full p-1 sm:p-2"
              }`}
            >
              <IconComponent
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  index === currentIndex ? "text-white" : "text-white/70"
                }`}
              />
              {index === currentIndex && (
                <span className="hidden sm:inline ml-2 text-white text-xs sm:text-sm font-medium">
                  {item.title.split(" ")[0]}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MedicalCarousel;
