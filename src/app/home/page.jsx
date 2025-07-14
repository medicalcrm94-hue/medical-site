"use client";

import Link from "next/link";
import Head from "next/head";
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
import Carousel from "@/components/Crausel";
import ProtectedRoute from "@/components/ProtectedRoute";

const NameLabHome = () => {
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
      name: "Liver Function Test",
      price: "₹460",
      originalPrice: "₹600",
      tests: "SGOT/SGPT/ALP etc.",
      icon: "🫁",
    },
    {
      name: "Complete Lipid Profile",
      price: "₹450",
      originalPrice: "₹600",
      tests: "Cholesterol, Triglycerides",
      icon: "🩺",
    },
    {
      name: "Full Thyroid Test",
      price: "₹550",
      originalPrice: "₹700",
      tests: "Thyroid hormones",
      icon: "🦋",
    },
    {
      name: "Diabetes Monitoring",
      price: "₹550",
      originalPrice: "₹700",
      tests: "HbA1c Test",
      icon: "🩸",
    },
    {
      name: "Kidney Function Test",
      price: "₹300",
      originalPrice: "₹400",
      tests: "Creatinine, Urea/BUN",
      icon: "🧪",
    },
    {
      name: "Electrolytes Panel",
      price: "₹300",
      originalPrice: "₹400",
      tests: "Sodium, Potassium",
      icon: "⚡",
    },
    {
      name: "Pregnancy Test",
      price: "₹650",
      originalPrice: "₹800",
      tests: "Beta-HCG",
      icon: "🤰",
    },
    {
      name: "Iron Deficiency Test",
      price: "₹600",
      originalPrice: "₹750",
      tests: "Iron levels",
      icon: "🧲",
    },
    {
      name: "Inflammation Marker",
      price: "₹220",
      originalPrice: "₹300",
      tests: "CRP quantitative",
      icon: "🔥",
    },
    {
      name: "Pancreas Function",
      price: "₹300",
      originalPrice: "₹400",
      tests: "Lipase Test",
      icon: "🩻",
    },
    {
      name: "Blood Clotting Test",
      price: "₹500",
      originalPrice: "₹650",
      tests: "APTT",
      icon: "⏳",
    },
    {
      name: "Reproductive Health",
      price: "₹700",
      originalPrice: "₹900",
      tests: "Progesterone",
      icon: "🌸",
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
    <>
      <ProtectedRoute>
        <Head>
          <title>Lara Health Care | Diagnostic Lab Services in Hyderabad</title>
          <meta
            name="description"
            content="Lara Health Care offers accurate diagnostic tests, health packages, and home sample collection services in Hyderabad. Book tests online with quick results."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="keywords"
            content="diagnostic lab Hyderabad, medical tests, health checkup, blood tests, home collection, lab near me"
          />
          <meta
            property="og:title"
            content="Lara Health Care | Quality Diagnostic Services"
          />
          <meta
            property="og:description"
            content="Get accurate diagnostic tests with quick results. Book online for home sample collection or visit our lab in Hyderabad."
          />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://larahealthcare.com" />
        </Head>

        <div className="font-sans bg-white text-gray-800 overflow-hidden">
          {/* Hero Section */}
          <Carousel />

          {/* Why Choose Us */}
          <section
            id="about"
            className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
          >
            <div className="container mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900">
                  Why Choose Lara Health Care
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                  Healthcare diagnostics made simple, accessible and reliable
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    icon: (
                      <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                    ),
                    title: "Doorstep Convenience",
                    desc: "No travel, no waiting rooms - we come to you",
                  },
                  {
                    icon: (
                      <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
                    ),
                    title: "Certified Labs",
                    desc: "Tests processed by trusted NABL/ISO-accredited labs",
                  },
                  {
                    icon: (
                      <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600" />
                    ),
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
                    className="group bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {item.customIcon ? (
                        <span className="text-3xl sm:text-4xl">
                          {item.icon}
                        </span>
                      ) : (
                        item.icon
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Popular Tests */}
          <section
            id="tests"
            className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
          >
            <div className="container mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900">
                  Popular Tests & Packages
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                  Quality diagnostics at affordable prices
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {popularTests.map((test, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
                  >
                    <div className="p-4 sm:p-6">
                      <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                        {test.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                        {test.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                        {test.tests}
                      </p>

                      <div className="mb-3 sm:mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl sm:text-2xl font-bold text-blue-900">
                            {test.price}
                          </span>
                          <span className="text-sm sm:text-lg text-gray-400 line-through">
                            {test.originalPrice}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm text-green-600 font-medium">
                          Save{" "}
                          {Math.round(
                            (1 -
                              parseInt(test.price.replace(/[₹,]/g, "")) /
                                parseInt(
                                  test.originalPrice.replace(/[₹,]/g, "")
                                )) *
                              100
                          )}
                          %
                        </div>
                      </div>
                      <Link href="/book#second-section">
                        <button
                          onClick={() =>
                            setBookingForm({ ...bookingForm, test: test.name })
                          }
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 sm:py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 hover:shadow-md transform group-hover:scale-105 text-sm sm:text-base"
                        >
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900">
                  How It Works
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                  Simple 4-step process to get your health reports
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[
                  {
                    icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
                    step: "Book Test",
                    desc: "Online booking or call us directly",
                    color: "bg-blue-500",
                  },
                  {
                    icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
                    step: "Sample Collection",
                    desc: "At our lab or your home",
                    color: "bg-green-500",
                  },
                  {
                    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
                    step: "Lab Processing",
                    desc: "Advanced testing with quality checks",
                    color: "bg-purple-500",
                  },
                  {
                    icon: <Download className="w-6 h-6 sm:w-8 sm:h-8" />,
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
                      className={`${item.color} text-white p-4 sm:p-6 rounded-full mb-4 sm:mb-6 shadow-md`}
                    >
                      {item.icon}
                    </div>
                    <div className="bg-white p-3 sm:p-4 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4 font-bold text-blue-900 shadow-md text-sm sm:text-base">
                      {index + 1}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-800">
                      {item.step}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Download Report Section */}
          <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 mb-12 md:mb-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Download Your Reports Easily
              </h2>
              <p className="max-w-3xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed">
                Access your test reports anytime, anywhere through our secure
                portal. Get instant notifications and share reports with your
                doctors seamlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/reports"
                  className="bg-white text-blue-900 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-sm sm:text-base flex items-center justify-center"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                  Access Reports
                </Link>
                <a
                  href="tel:+919876543210"
                  className="border-2 border-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:shadow-lg text-sm sm:text-base flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                  Call Support
                </a>
              </div>
            </div>
          </section>
        </div>
      </ProtectedRoute>
    </>
  );
};

export default NameLabHome;
