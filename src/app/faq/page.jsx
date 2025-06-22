"use client";

import React, { useState } from "react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "How do I book a test?",
      answer:
        "You can book tests online through our booking page or call us directly at +91-98765-43210. Our online booking system is available 24/7 for your convenience.",
    },
    {
      question: "What is the turnaround time for reports?",
      answer:
        "Most routine test reports are delivered within 24-48 hours after sample collection. Some specialized tests may take 3-5 days. You'll receive an SMS and email notification when your report is ready.",
    },
    {
      question: "Do you offer home sample collection?",
      answer:
        "Yes, we provide safe and hygienic home sample collection services across Hyderabad. Our trained phlebotomists follow strict safety protocols including full PPE. Home collection can be scheduled during booking.",
    },
    {
      question: "How can I download my test report?",
      answer:
        "Visit our Download Report page and enter your Patient ID (provided at the time of booking) and registered email address. Reports are available in PDF format and can be downloaded multiple times.",
    },
    {
      question: "Are your labs certified?",
      answer:
        "Yes, Logo is NABL accredited and follows strict quality standards. Our equipment is regularly calibrated and our technicians undergo continuous training to ensure accurate results.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit/debit cards, UPI payments, and net banking. Corporate clients and hospital partners can also avail invoice-based payments.",
    },
    {
      question: "Can I reschedule or cancel my test?",
      answer:
        "Yes, tests can be rescheduled or cancelled up to 24 hours before your appointment. Please call our support team or use the link in your confirmation email to make changes.",
    },
    {
      question: "Is there any discount on bulk or lab-to-lab tests?",
      answer:
        "We offer special pricing for bulk tests, corporate packages, and lab-to-lab referrals. Please contact our support team at +91-98765-43210 or email partners@namelab.com for customized quotes.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="relative bg-blue-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-90"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-700 opacity-20 transform skew-x-12"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Find answers to the most common questions about our diagnostic
            services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute right-4 top-4 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    className="w-full text-left p-6 md:p-8 font-medium text-lg flex justify-between items-center hover:bg-gray-50 transition"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="mr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition ${
                        activeIndex === index ? "rotate-180" : ""
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
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 md:p-8 pt-0 text-gray-600 bg-gray-50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                No FAQs found matching your search. Please try different
                keywords.
              </div>
            )}
          </div>

          {/* Contact Prompt */}
          <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Contact us at{" "}
              <a
                href="tel:+919876543210"
                className="text-blue-900 hover:underline"
              >
                +91-98765-43210
              </a>{" "}
              or email{" "}
              <a
                href="mailto:info@namelab.com"
                className="text-blue-900 hover:underline"
              >
                info@namelab.com
              </a>
            </p>
            <a
              href="#contact" // Replace with actual contact page link
              className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
