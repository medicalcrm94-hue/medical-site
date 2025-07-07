import React from "react";

import Link from "next/link";

const TestsServicesPage = () => {
  const testCategories = [
    {
      name: "Biochemistry Tests",
      tests: [
        "Liver Function Test (LFT)",
        "Renal Function Test (RFT)",
        "Lipid Profile",
        "HbA1C",
        "Blood Glucose",
        "Electrolytes",
      ],
    },
    {
      name: "Pathology Tests",
      tests: [
        "Complete Blood Picture (CBP)",
        "ESR",
        "FNAC",
        "Biopsy",
        "Peripheral Smear",
        "Coagulation Profile",
      ],
    },
    {
      name: "Microbiology",
      tests: [
        "Urine Culture",
        "Blood Culture",
        "Sputum AFB",
        "Gram Stain",
        "Wound Swab",
        "Sensitivity Testing",
      ],
    },
    {
      name: "Hormonal & Endocrine",
      tests: [
        "Thyroid Profile (TSH, T3, T4)",
        "Prolactin",
        "LH/FSH",
        "Testosterone",
        "Cortisol",
        "Estradiol",
      ],
    },
    {
      name: "Cancer Markers",
      tests: ["AFP", "CA 125", "CEA", "PSA", "CA 19-9", "Beta HCG"],
    },
    {
      name: "Infectious Disease Panels",
      tests: [
        "Dengue NS1/IgM/IgG",
        "Typhoid IgM/IgG",
        "HIV Combo",
        "HBSAg",
        "HCV Antibody",
        "Malaria Antigen",
      ],
    },
    {
      name: "Urine & Stool Tests",
      tests: [
        "Complete Urine Examination",
        "Occult Blood",
        "Ova & Cyst",
        "Urine Micro Albumin",
        "Stool Culture",
        "Reducing Substances",
      ],
    },
  ];

  const services = [
    {
      name: "Home Sample Collection",
      icon: "🏠",
      desc: "Convenient at-home blood, urine, or swab collection by certified phlebotomists with strict hygiene protocols",
    },
    {
      name: "Digital Reports",
      icon: "📱",
      desc: "Secure online access to test results via app/email with doctor consultation recommendations",
    },
    {
      name: "Senior Citizen Care",
      icon: "👵",
      desc: "Specialized services for elderly including priority slots, chronic condition monitoring, and caregiver support",
    },
    {
      name: "Easy Booking & Support",
      icon: "🏢",
      desc: "Book online or via call/WhatsApp — with flexible appointment slots, real-time tracking, and 24/7 support.",
    },
  ];

  return (
    <div className="font-sans  text-gray-800">
      {/* Page Header */}
      <section className="relative bg-blue-600 opacity-95 text-white py-20 px-20 md:py-28">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-500 opacity-30 transform skew-x-12"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto py-20 px-6 relative z-10 text-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Diagnostic Tests & Services
          </h1>
          <p className="text-xl md:text-2xl mx-auto">
            Explore our wide range of laboratory tests across biochemistry,
            pathology, microbiology, and more.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white px-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a test..."
              className="w-full py-3 px-6 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-3 text-gray-400 hover:text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>
          </div>
        </div>
      </section>

      {/* Test Categories */}
      <section className="py-16 bg-gray-50 px-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Test Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="bg-blue-900 text-white p-4">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.tests.map((test, testIndex) => (
                      <li key={testIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{test}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 text-blue-900 font-medium hover:underline">
                    View all {category.name} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-white px-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Test CTA */}
      <section className="py-16 bg-blue-900 mb-20 text-white px-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-blue-800 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need to book a Appointment?
            </h2>
            <p className="text-xl mb-8">
              Our certified team is ready to serve you with accurate diagnostics
              and compassionate care.
            </p>
            <Link href="/book#second-section">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                Book a Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestsServicesPage;
