"use client";

import React, { useState } from "react";
import Head from "next/head";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqs = [
    {
      question: "Where is the lab located?",
      answer:
        "Our main lab - Lara health care House no:1, porteco, chintala gorlevanipalem, parawada, visakhapatnam, India.",
    },
    {
      question: "What are your working hours?",
      answer:
        "We're open Monday through Sunday from 8:00 AM to 9:00 PM, including holidays for emergency testing.",
    },
    {
      question: "How can I book a test?",
      answer:
        "You can book tests through our online booking system, by calling us at +91-6309583777, or by visiting our lab in person.",
    },
    {
      question: "Do you provide home sample collection?",
      answer:
        "Yes, we offer home collection services across Hyderabad. Please call us to schedule a home collection appointment.",
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

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, this would call an API to send the message
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>
          Contact Us | Diagnostic Lab Name - Get in Touch for Testing Services
        </title>
        <meta
          name="description"
          content="Contact our diagnostic lab for inquiries, test bookings, or support. We're available via phone, email, or visit our Hyderabad location. Get quick responses to your questions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="diagnostic lab contact, medical tests Hyderabad, lab testing contact, healthcare support"
        />
        <meta
          property="og:title"
          content="Contact Our Diagnostic Lab | Get in Touch for Testing Services"
        />
        <meta
          property="og:description"
          content="Reach out to our diagnostic lab for inquiries, test bookings, or support. We're here to help with all your medical testing needs in Hyderabad."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourlabwebsite.com/contact" />
      </Head>

      <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
        {/* Page Header with semantic HTML */}
        <header className="relative bg-blue-900 text-white py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-blue-800 opacity-90"></div>
          <div className="container  mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-8 md:py-20 text-center md:text-start">
            <h1 className="mt-14 md:px-12 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get in Touch with Us
            </h1>
            <p className="text-lg md:px-12 sm:text-xl md:text-2xl max-w-2xl mx-auto md:mx-0">
              We're here to answer your questions and assist with your
              diagnostic needs.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            {/* Contact Information */}
            <aside className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-900 mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Address
                      </h3>
                      <p className="text-gray-600">
                        Main branch:Lara health care House no:1, porteco,
                        chintala gorlevanipalem, parawada, visakhapatnam
                        <br />
                        <br />
                        Branch office: 46-1,Aditya nagar , chanakyapuri colony,A
                        camp , kurnool, andhrapradesh 518002
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-900 mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="tel:+916309583777"
                          className="hover:text-blue-900 hover:underline"
                          aria-label="Call us at +91-6309583777"
                        >
                          +91-6309583777
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-900 mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:larahealth777@gmail.com"
                          className="hover:text-blue-900 hover:underline"
                          aria-label="Email us at larahealth777@gmail.com"
                        >
                          larahealth777@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-900 mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Working Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Sunday: 8:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Emergency Support
                    </h3>
                    <p className="text-gray-600 text-sm">
                      For urgent medical testing needs outside working hours,
                      please call our emergency line at{" "}
                      <a
                        href="tel:+91 6309583777"
                        className="text-blue-900 hover:underline"
                        aria-label="Emergency number +91-6309583777"
                      >
                        +91-6309583777
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Contact Form and Map */}
            <div className="lg:w-2/3">
              {/* Contact Form */}
              <section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8 md:mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div
                      className="text-green-500 text-6xl mb-4"
                      aria-hidden="true"
                    >
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    aria-label="Contact form"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Enter your full name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
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
                        placeholder="example@email.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="9876543210"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject (Optional)
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="What's your question about?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="How can we help you?"
                        aria-required="true"
                        aria-invalid={!!errors.message}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </section>

              {/* Map */}
              <section
                className="bg-white rounded-xl shadow-md overflow-hidden mb-8 md:mb-12"
                aria-label="Our location"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14454.842309833617!2d83.08244613390586!3d17.658609424765206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLara%20Health%20Care%2C%20House%20No%3A1%2C%20Porteco%2C%20Chintala%20Gorlevanipalem%2C%20Parawada%2C%20Visakhapatnam!5e1!3m2!1sen!2sin!4v1754062744778!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Our Lab Location in Visakhapatnam"
                  aria-label="Map showing our lab location at Lara Health Care, House No:1, Porteco, Chintala Gorlevanipalem, Parawada, Visakhapatnam"
                ></iframe>

                <div className="p-4 md:p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-600">
                    Lara Health Care, House No:1, Porteco, Chintala
                    Gorlevanipalem, Parawada, Visakhapatnam
                  </p>
                </div>
              </section>

              {/* FAQs */}
              <section
                className="bg-white rounded-xl shadow-md p-6 md:p-8"
                aria-labelledby="faq-heading"
              >
                <h2
                  id="faq-heading"
                  className="text-2xl font-bold text-blue-900 mb-6"
                >
                  Common Questions
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <article
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full text-left p-4 font-medium bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeAccordion === index}
                        aria-controls={`faq-answer-${index}`}
                        id={`faq-question-${index}`}
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
                          aria-hidden="true"
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
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          activeAccordion === index ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        {activeAccordion === index && (
                          <div className="p-4 bg-white text-gray-700">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* CTA Banner */}
        <section className="bg-blue-900 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
              Need help or more info? We're just a call or message away!
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/book#second-section"
                className="bg-white text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="Book a test online"
              >
                Book a Test
              </a>
              <a
                href="tel:+916309583777"
                className="border-2 border-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="Call us at +91-6309583777"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUsPage;
