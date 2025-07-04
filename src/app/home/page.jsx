"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  Phone,
  Download,
  Shield,
  Award,
} from "lucide-react";

const nameLabHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    email: "",
    test: "",
  });

  // Testimonials data
  const testimonials = [
    {
      name: "Ramesh K.",
      review:
        "Very accurate reports and professional staff. Got my reports on time. The home collection service is excellent!",
      rating: 5,
      location: "Anantapur",
    },
    {
      name: "Sunitha P.",
      review:
        "Home collection was very convenient. Reasonable prices and quick results. Highly recommended!",
      rating: 5,
      location: "Kurnool",
    },
    {
      name: "Dr. Arjun Reddy",
      review:
        "As a physician, I trust Logo for accurate diagnostics. Their reports are detailed and reliable.",
      rating: 5,
      location: "Tirupati",
    },
    {
      name: "Lakshmi Devi",
      review:
        "Excellent service and professional staff. The online booking system is very user-friendly.",
      rating: 4,
      location: "Kadapa",
    },
  ];

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleBookingSubmit = () => {
    if (bookingForm.name && bookingForm.phone && bookingForm.test) {
      alert(
        `Thank you ${bookingForm.name}! Your booking request has been submitted. We'll contact you at ${bookingForm.phone} to confirm your appointment.`
      );
      setBookingForm({
        name: "",
        phone: "",
        email: "",
        test: "",
      });
    } else {
      alert("Please fill in all required fields (Name, Phone, and Test).");
    }
  };

  const popularTests = [
    {
      name: "Full Body Checkup",
      price: "₹1,499",
      originalPrice: "₹2,999",
      tests: "60+ Tests",
      icon: "🏥",
    },
    {
      name: "Thyroid Profile",
      price: "₹699",
      originalPrice: "₹999",
      tests: "3 Tests",
      icon: "🦋",
    },
    {
      name: "Diabetes Panel",
      price: "₹899",
      originalPrice: "₹1,299",
      tests: "8 Tests",
      icon: "🩸",
    },
    {
      name: "Liver Function Test",
      price: "₹799",
      originalPrice: "₹1,199",
      tests: "12 Tests",
      icon: "🫁",
    },
    {
      name: "Vitamin D & B12",
      price: "₹1,299",
      originalPrice: "₹1,799",
      tests: "2 Tests",
      icon: "☀️",
    },
    {
      name: "Fever Panel",
      price: "₹599",
      originalPrice: "₹899",
      tests: "5 Tests",
      icon: "🌡️",
    },
    {
      name: "Heart Health Package",
      price: "₹1,899",
      originalPrice: "₹2,699",
      tests: "15 Tests",
      icon: "❤️",
    },
    {
      name: "Women's Health",
      price: "₹1,599",
      originalPrice: "₹2,299",
      tests: "25 Tests",
      icon: "👩‍⚕️",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans bg-white text-gray-800 overflow-hidden ">
      {/* Hero Section */}
      <section
        id="home"
        className="relative px-20 pt-10 min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Reliable. Accurate.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  Trusted Diagnostics.
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Serving quality healthcare with advanced testing and timely
                reports across name region.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                  Book a Test
                </button>
                <button
                  onClick={() => scrollToSection("tests")}
                  className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:shadow-xl"
                >
                  View Test Packages
                </button>
              </div>

              <div className="flex gap-15">
                <div className="text-start">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-blue-200 text-sm">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-blue-200 text-sm">Test Types</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-blue-200 text-sm">Locations</div>
                </div>
              </div>
            </div>

            {/* Quick Booking Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Quick Book Test</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={bookingForm.name}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={bookingForm.phone}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <select
                  value={bookingForm.test}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, test: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="">Select Test</option>
                  {popularTests.map((test, index) => (
                    <option
                      key={index}
                      value={test.name}
                      className="text-gray-800"
                    >
                      {test.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleBookingSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
    {/* Why Choose Us */}
<section
  id="about"
  className="py-20 px-20 bg-gradient-to-b from-gray-50 to-white"
>
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-blue-900">
        Why Choose Lara Health Care
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Healthcare diagnostics made simple, accessible and reliable
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: <MapPin className="w-12 h-12 text-blue-600" />,
          title: "Doorstep Convenience",
          desc: "No travel, no waiting rooms - we come to you",
        },
        {
          icon: <Shield className="w-12 h-12 text-green-600" />,
          title: "Certified Labs",
          desc: "Tests processed by trusted NABL/ISO-accredited labs",
        },
        {
          icon: <Clock className="w-12 h-12 text-orange-600" />,
          title: "Fast Report Turnaround",
          desc: "Reports delivered within 24-48 hours",
        },
        {
          icon: "💰",
          title: "Affordable Prices",
          desc: "Quality diagnostics that fit your budget",
          customIcon: true,
        },
        {
          icon: "👩‍⚕️",
          title: "Trained Phlebotomists",
          desc: "Hygienic and professional sample collection",
          customIcon: true,
        },
        {
          icon: "🌐",
          title: "Multilingual Support",
          desc: "Service in English, Hindi, Telugu, and more",
          customIcon: true,
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
        >
          <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
            {item.customIcon ? (
              <span className="text-4xl">{item.icon}</span>
            ) : (
              item.icon
            )}
          </div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Popular Tests */}
<section id="tests" className="py-20 px-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-blue-900">
        Popular Tests & Packages
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Quality diagnostics at affordable prices
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {[
        {
          name: "Thyroid (TSH)",
          price: "₹200",
          originalPrice: "₹300",
          tests: "1 Test",
          icon: "🦋",
        },
        {
          name: "Full Thyroid Test",
          price: "₹550",
          originalPrice: "₹750",
          tests: "3 Tests",
          icon: "🦋",
        },
        {
          name: "Lipid Profile",
          price: "₹450",
          originalPrice: "₹600",
          tests: "4 Tests",
          icon: "❤️",
        },
        {
          name: "Liver Function Test",
          price: "₹460",
          originalPrice: "₹650",
          tests: "8 Tests",
          icon: "🫁",
        },
        {
          name: "HbA1c",
          price: "₹550",
          originalPrice: "₹700",
          tests: "1 Test",
          icon: "🩸",
        },
        {
          name: "Complete Blood Count",
          price: "₹350",
          originalPrice: "₹500",
          tests: "15 Tests",
          icon: "💉",
        },
        {
          name: "Iron Studies",
          price: "₹600",
          originalPrice: "₹850",
          tests: "4 Tests",
          icon: "🧲",
        },
        {
          name: "Diabetes Panel",
          price: "₹800",
          originalPrice: "₹1,100",
          tests: "6 Tests",
          icon: "🍬",
        },
      ].map((test, index) => (
        <div
          key={index}
          className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div className="p-6">
            <div className="text-4xl mb-4">{test.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {test.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{test.tests}</p>

            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-900">
                  {test.price}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  {test.originalPrice}
                </span>
              </div>
              <div className="text-sm text-green-600 font-medium">
                Save{" "}
                {Math.round(
                  (1 -
                    parseInt(test.price.replace(/[₹,]/g, "")) /
                    parseInt(test.originalPrice.replace(/[₹,]/g, ""))) *
                    100
                )}
                %
              </div>
            </div>

            <button
              onClick={() =>
                setBookingForm({ ...bookingForm, test: test.name })
              }
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 hover:shadow-lg transform group-hover:scale-105"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* How It Works */}
      <section className="py-20 px-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to get your health reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                step: "Book Test",
                desc: "Online booking or call us directly",
                color: "bg-blue-500",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                step: "Sample Collection",
                desc: "At our lab or your home",
                color: "bg-green-500",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                step: "Lab Processing",
                desc: "Advanced testing with quality checks",
                color: "bg-purple-500",
              },
              {
                icon: <Download className="w-8 h-8" />,
                step: "Report Delivery",
                desc: "Email, SMS, or mobile app",
                color: "bg-orange-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`${item.color} text-white p-6 rounded-full mb-6 shadow-lg`}
                >
                  {item.icon}
                </div>
                <div className="bg-white p-4 rounded-full w-12 h-12 flex items-center justify-center mb-4 font-bold text-blue-900 shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {item.step}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
    

      {/* Download Report Section */}
      <section className="py-20 px-20 mb-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Download Your Reports Easily
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-blue-100 leading-relaxed">
            Access your test reports anytime, anywhere through our secure
            portal. Get instant notifications and share reports with your
            doctors seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <Download className="w-5 h-5 inline mr-2" />
              Access Reports
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:shadow-xl">
              <Phone className="w-5 h-5 inline mr-2" />
              Call Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default nameLabHome;
