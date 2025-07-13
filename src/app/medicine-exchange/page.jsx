"use client"
import React, { useState } from "react";
import {
  Pill,
  Heart,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Globe,
  Gift,
  Users,
  Recycle,
  Award,
  Plus,
  Minus,
  Check,
  HandHeart,
  Coins,
  ShoppingCart,
} from "lucide-react";
import MedicineExchangeCarousel from "@/components/carousels/MedicineCarousel";

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const faqs = [
    {
      question: "What kind of medicines are accepted?",
      answer:
        "We accept unused, unexpired prescription and over-the-counter medicines in their original packaging. Tablets, capsules, syrups, and topical medications are all welcome.",
    },
    {
      question: "Can I give expired medicines?",
      answer:
        "No, we only accept unexpired medicines to ensure safety and efficacy for those who will receive them through our NGO partners.",
    },
    {
      question: "How long are LARA Points valid?",
      answer:
        "LARA Points are valid for 12 months from the date of earning. You'll receive reminders before they expire.",
    },
    {
      question: "How can I use the ₹100 discount?",
      answer:
        "The ₹100 discount is automatically applied to your first medicine order after participating in the exchange drive. It can be combined with LARA Points for additional savings.",
    },
  ];

  const steps = [
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Give us your unused medicines",
      description: "Collect your unused, unexpired medicines at home",
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Earn LARA Points",
      description: "Receive points for each valid medicine donated",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Use points for discounts",
      description: "Redeem points to buy new medicines at discounted rates",
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Help someone in need",
      description: "Your donated medicines reach underserved communities",
    },
  ];

  const pointsTable = [
    { points: 25, discount: "₹25" },
    { points: 50, discount: "₹50" },
    { points: 100, discount: "₹100" },
    { points: 200, discount: "₹200" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-orange-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 lg:mt-30">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              MEDICINE EXCHANGE DRIVE
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto">
              Exchange your unused, unexpired medicines at your doorstep. Get
              ₹100 OFF!
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Collected medicines are donated to underserved communities via
              partnered NGOs.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            Exchange Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-blue-200 opacity-20">
          <Pill className="w-16 h-16" />
        </div>
        <div className="absolute bottom-10 right-10 text-green-200 opacity-20">
          <Heart className="w-20 h-20" />
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/exchange/3.png"
                alt="Medicine Exchange Drive Poster 1"
                className="w-full h-64 sm:h-80 object-cover"
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='0.3em'%3EPoster 1%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/exchange/4.png"
                alt="Medicine Exchange Drive Poster 2"
                className="w-full h-64 sm:h-80 object-cover"
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='0.3em'%3EPoster 2%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200 flex items-center justify-center">
                  <div className="text-blue-600">{step.icon}</div>
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 mx-auto mb-4 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LARA Points Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
            How LARA Points Work
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Gift className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Earn Points
                    </h3>
                    <p className="text-gray-600">
                      Each valid medicine gives you points (1 tablet = 1 point)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Store Points
                    </h3>
                    <p className="text-gray-600">
                      Points are safely stored in your user account
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Redeem Discounts
                    </h3>
                    <p className="text-gray-600">
                      Use points to get discounts on medicine orders
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Points Conversion Table
              </h3>
              <div className="space-y-4">
                {pointsTable.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <span className="text-gray-700 font-medium">
                      {item.points} Points
                    </span>
                    <span className="text-green-600 font-bold">
                      {item.discount} OFF
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NGO Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Making a Difference Together
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Supporting Underserved Communities
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Your donated medicines are carefully forwarded to our trusted
                NGO partners who work directly with underserved communities. By
                participating in our Medicine Exchange Drive, you're not just
                getting great value - you're helping ensure that safe, unused
                medicines reach those who need them most.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Every medicine you donate has the potential to improve someone's
                health and well-being. Together, we're creating a sustainable
                cycle of care and compassion.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <blockquote className="text-gray-700 italic text-lg">
                  "LARA's Medicine Exchange Drive has been a game-changer for
                  our community outreach programs. The quality medicines we
                  receive help us provide better healthcare to families who
                  otherwise couldn't afford it."
                </blockquote>
                <cite className="text-blue-600 font-semibold mt-4 block">
                  - Dr. Sarah Johnson, Hope Healthcare NGO
                </cite>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  10,000+
                </h4>
                <p className="text-gray-600">People Helped</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Recycle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  50,000+
                </h4>
                <p className="text-gray-600">Medicines Exchanged</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <HandHeart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">25+</h4>
                <p className="text-gray-600">NGO Partners</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">100%</h4>
                <p className="text-gray-600">Safe & Verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Phone Numbers</p>
                    <p className="text-gray-900 font-medium">+91-6309583777</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Website</p>
                    <p className="text-gray-900 font-medium">www.laralabs.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-900 font-medium">
                      [Add location here]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
