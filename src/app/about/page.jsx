import React from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

const AboutUsPage = () => {
  return (
    <ProtectedRoute>
      <div className="font-sans bg-gray-50 text-gray-800">
        {/* Page Header */}
        <section className="relative px-4 sm:px-8 md:px-12 lg:px-20 bg-blue-700 text-white py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-start py-12 sm:py-16 md:py-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              About Lara Health Care
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed">
              We're a next-generation healthcare startup focused on delivering
              diagnostic lab services at your doorstep.
            </p>
          </div>
        </section>

        {/* Our Story / Who We Are */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
              <div className="w-full lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Lab technicians working"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
                  Who We Are
                </h2>
                <p className="text-base sm:text-lg mb-4 leading-relaxed">
                  In a fast-paced world where time, convenience, and
                  accessibility are critical, we provide a seamless experience
                  for individuals and families to get their medical tests done
                  without stepping out.
                </p>
                <p className="text-base sm:text-lg mb-4 leading-relaxed">
                  Our services include home sample collection, NABL-accredited
                  lab testing, and digital report delivery, all at affordable
                  pricing. We cater to people from all walks of life — from
                  working professionals and home-bound elderly to patients in
                  remote areas who lack easy access to diagnostic centers.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  We're not just another healthcare provider — we're a care
                  partner working to make diagnostic services simple,
                  trustworthy, and accessible. With our growing network of
                  trained phlebotomists, certified labs, and digital tools, we
                  are creating a healthier, more connected India — one doorstep
                  at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="text-3xl sm:text-4xl mb-4">📌</div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
                  Our Mission
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>
                    Deliver trusted lab testing to homes with precision,
                    hygiene, and speed
                  </li>
                  <li>
                    Bridge the healthcare access gap by reaching underserved,
                    rural, and immobile populations
                  </li>
                  <li>
                    Empower users through digital health tools including online
                    booking and real-time tracking
                  </li>
                  <li>
                    Uphold the values of integrity, empathy, and service
                    excellence
                  </li>
                  <li>
                    Act as a healthcare partner — not just a provider — offering
                    end-to-end support
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="text-3xl sm:text-4xl mb-4">👁️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                  To revolutionize healthcare access by making diagnostic
                  services fast, affordable, and available at every doorstep —
                  empowering healthier communities through innovation,
                  compassion, and trust.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  We envision a world where no one misses a medical test due to
                  time, distance, or cost. By bringing diagnostics home, we aim
                  to promote preventive healthcare and early detection, leading
                  to healthier lives and reduced healthcare burdens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Goals */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-8 sm:mb-12">
              Our Strategic Goals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Doorstep Diagnostics",
                  desc: "Build a robust network of trained phlebotomists and mobile units with <24-hour turnaround time and flexible scheduling including weekends.",
                },
                {
                  title: "Affordability for All",
                  desc: "Introduce package pricing, health subscriptions, and partner with government schemes to serve low-income families with transparent billing.",
                },
                {
                  title: "Customer-Centric Experience",
                  desc: "User-friendly digital tools, multilingual support, and follow-up assistance for seamless service.",
                },
                {
                  title: "Trusted Partnerships",
                  desc: "Partner with top-tier NABL/ISO-certified labs with regular quality audits and specialized test offerings.",
                },
                {
                  title: "Community Health",
                  desc: "Organize health camps, awareness drives, and provide subsidized tests to vulnerable populations.",
                },
                {
                  title: "Innovation & Growth",
                  desc: "Launch AI health dashboards, integrate with telemedicine, and expand to Tier 2 & 3 cities while maintaining quality.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 sm:p-6 rounded-lg hover:shadow-md transition"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-8 sm:mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Innovation",
                  desc: "Continually improving our services through technology and creative solutions",
                },
                {
                  title: "Compassion",
                  desc: "Treating every patient with empathy and understanding",
                },
                {
                  title: "Accessibility",
                  desc: "Removing barriers to healthcare for all communities",
                },
                {
                  title: "Trust",
                  desc: "Building relationships through reliable and transparent services",
                },
                {
                  title: "Quality",
                  desc: "Maintaining highest standards in testing and service delivery",
                },
                {
                  title: "Community Focus",
                  desc: "Prioritizing health needs of underserved populations",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg hover:shadow-md transition border border-gray-200"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 mb-12 sm:mb-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to book your home test or want to partner with us?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 sm:mt-8">
              <Link href="/book#second-section">
                <button className="bg-white text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition w-full sm:w-auto">
                  Book Appointment Now
                </button>
              </Link>
              <button className="border-2 border-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition w-full sm:w-auto">
                Call Support
              </button>
            </div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
};

export default AboutUsPage;
