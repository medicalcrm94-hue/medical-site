import React from "react";

const AboutUsPage = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Page Header */}
      <section className="relative px-20 bg-blue-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-6 relative z-10 text-start py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About name Diagnostic Center
          </h1>
          <p className="text-xl md:text-2xl  mx-auto">
            We are a trusted name in diagnostics, committed to delivering
            accurate test results with advanced lab technology.
          </p>
        </div>
      </section>

      {/* Our Story / Who We Are */}
      <section className="py-16 px-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Lab technicians working"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg mb-4">
                Established in 2005, name Diagnostic Center has grown
                from a small local lab to one of the region's most trusted
                diagnostic service providers.
              </p>
              <p className="text-lg mb-4">
                With over 18 years of experience, we've served more than 50,000
                patients and partnered with 200+ hospitals and clinics across
                the region.
              </p>
              <p className="text-lg">
                Our journey has been guided by a simple principle: every test we
                conduct impacts someone's health journey, and we treat that
                responsibility with the utmost seriousness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="text-4xl mb-4">📌</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To provide reliable, timely, and affordable diagnostic solutions
                with care and compassion.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the region's most trusted diagnostic partner through
                innovation and service excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Accuracy",
                desc: "Precision in every test with advanced technology",
              },
              {
                title: "Transparency",
                desc: "Clear pricing and honest reporting",
              },
              {
                title: "Innovation",
                desc: "Continual investment in latest diagnostic methods",
              },
              { title: "Patient-Centric", desc: "Your health is our priority" },
              {
                title: "Certified Standards",
                desc: "NABL-accredited lab protocols",
              },
              {
                title: "Professional Team",
                desc: "Highly trained medical experts",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team (Optional) */}
      <section className="py-16 px-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Meet Our Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. K. Reddy",
                role: "Chief Pathologist",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Dr. P. Nair",
                role: "Microbiology Specialist",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Dr. S. Gupta",
                role: "Biochemistry Head",
                img: "https://randomuser.me/api/portraits/men/75.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-20 mb-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to book your test or want to partner with us?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
              Book a Test
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
