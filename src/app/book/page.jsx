"use client";
import OrderForm from "@/components/OrderForm";
import React, { useState } from "react";

const BookTestPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqs = [
    {
      question: "Can I book multiple tests at once?",
      answer:
        "Yes, you can select multiple tests from the dropdown menu in the booking form.",
    },
    {
      question: "What safety measures do you take for home collection?",
      answer:
        "Our phlebotomists follow strict sanitization protocols, use PPE (masks, gloves, sanitizers), and properly dispose of all used materials.",
    },
    {
      question: "How long does it take to get test results?",
      answer:
        "Most test results are available within 24-48 hours. Some specialized tests may take longer (3-5 days).",
    },
    {
      question: "Can I reschedule my sample collection?",
      answer:
        "Yes, please contact us at least 24 hours in advance to reschedule your appointment.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800  bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="relative bg-blue-900 px-20 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-90"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-700 opacity-20 transform skew-x-12"></div>
        <div className="container mx-auto px-6 relative z-10 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Diagnostic Test Easily
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Schedule a lab visit or home sample collection with confidence and
            convenience.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container px-20 mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Booking Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Test Booking Form
              </h2>

              <OrderForm />
            </div>

            {/* How Booking Works */}
            <div className="mt-12 bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                How Booking Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  {
                    icon: "📝",
                    title: "Fill Booking Form",
                    desc: "Complete our simple online form with your details and test requirements",
                  },
                  {
                    icon: "🚑",
                    title: "Sample Collection",
                    desc: "Visit our lab or have our trained professional collect samples at your home",
                  },
                  {
                    icon: "🔬",
                    title: "Lab Processing",
                    desc: "Our certified experts process your samples with advanced equipment",
                  },
                  {
                    icon: "📥",
                    title: "Get Results",
                    desc: "Receive your digital report securely via email or our patient portal",
                  },
                ].map((step, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mt-12 bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full text-left p-4 font-medium bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span>{faq.question}</span>
                      <svg
                        className={`w-5 h-5 transform transition ${
                          activeAccordion === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeAccordion === index && (
                      <div className="p-4 bg-white text-gray-700">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Information Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Important Information
              </h3>

              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Urgent Testing
                  </h4>
                  <p className="text-gray-700">
                    For emergency requests, please call us at{" "}
                    <strong>+91-98765-43210</strong>
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    Home Sample Collection
                  </h4>
                  <p className="text-gray-700">
                    Available across Hyderabad and surrounding areas. We follow
                    all COVID-19 safety protocols.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Report Delivery
                  </h4>
                  <p className="text-gray-700">
                    Receive your test report via email or download from our
                    portal within 24-48 hours.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Lab Hours
                  </h4>
                  <p className="text-gray-700">
                    <strong>Monday-Saturday:</strong> 7:00 AM - 8:00 PM
                    <br />
                    <strong>Sunday:</strong> 7:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <section className="bg-blue-900 mb-30 h-80 text-white py-12">
        <div className="container mt-15 mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to book your test or have questions?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#booking-form"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition inline-block"
            >
              Book a Test Now
            </a>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookTestPage;
