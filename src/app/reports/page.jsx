"use client";

import React, { useState } from "react";

const DownloadReportPage = () => {
  const [formData, setFormData] = useState({
    patientId: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqs = [
    {
      question: "What if I forgot my Patient ID?",
      answer:
        "Please contact our support team at +91-98765-43210 or email support@namelab.com with your full name and registered phone number.",
    },
    {
      question: "How long after testing can I download reports?",
      answer:
        "Most reports are available within 24-48 hours after sample collection. Some specialized tests may take 3-5 days.",
    },
    {
      question: "Can I access reports on mobile?",
      answer:
        "Yes, our portal is fully mobile-friendly. You can view and download your reports on any smartphone or tablet.",
    },
    {
      question: "Are my reports secure?",
      answer:
        "Absolutely. We use bank-grade encryption and your reports are only accessible with your unique Patient ID and registered email.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.patientId.trim())
      newErrors.patientId = "Patient ID is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, this would call an API to fetch reports
      setIsSubmitted(true);
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="relative bg-blue-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-90"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-700 opacity-20 transform skew-x-12"></div>
        <div className="container mx-auto relative z-10 py-20 px-20 text-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Access Your Diagnostic Reports
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Quickly and securely download your test reports using your patient
            ID or registered email.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Download Form */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Download Your Report
            </h2>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-green-500 text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Report Retrieved Successfully
                </h3>
                <p className="text-gray-600 mb-6">
                  Your diagnostic report is ready to download.
                </p>
                <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                  Download PDF Report
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Patient ID */}
                <div>
                  <label
                    htmlFor="patientId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Patient ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="patientId"
                    name="patientId"
                    value={formData.patientId}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.patientId ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your 8-digit Patient ID"
                  />
                  {errors.patientId && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.patientId}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Registered Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your registered email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Download Report
                  </button>
                </div>
              </form>
            )}

            {/* Security Note */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-900 mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <p className="text-sm text-gray-700">
                  <strong>Your data privacy is our priority.</strong> Reports
                  are accessible only with your Patient ID and registered email.
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              How to Download Your Report
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Enter your Patient ID
                  </h3>
                  <p className="text-gray-600">
                    Use the unique 8-digit ID provided at the time of booking.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Provide registered email
                  </h3>
                  <p className="text-gray-600">
                    Must match the email used during test booking.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Download your report
                  </h3>
                  <p className="text-gray-600">
                    Get your PDF report instantly after verification.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Need help?</strong> Call us at{" "}
                <a
                  href="tel:+919876543210"
                  className="text-blue-900 hover:underline"
                >
                  +91-98765-43210
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:support@namelab.com"
                  className="text-blue-900 hover:underline"
                >
                  support@namelab.com
                </a>
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
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
      </div>

      {/* CTA Banner */}
      <section className="bg-blue-900 text-white py-12 mb-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Need to book a Appointment first?
          </h2>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
            Book a Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default DownloadReportPage;
