import React from "react";

const PriceListPage = () => {
  const priceData = [
    { id: 1, testName: "AFP", price: "₹550" },
    { id: 2, testName: "APTT", price: "₹500" },
    { id: 3, testName: "ASO", price: "₹320" },
    { id: 4, testName: "Beta‑HCG", price: "₹650" },
    { id: 5, testName: "Bilirubin", price: "₹180" },
    { id: 6, testName: "Calcium", price: "₹200" },
    { id: 7, testName: "Cholesterol", price: "₹250" },
    { id: 8, testName: "Creatinine", price: "₹120" },
    { id: 9, testName: "CRP quantitative", price: "₹220" },
    { id: 10, testName: "Lipase", price: "₹300" },
    { id: 11, testName: "Urea / BUN", price: "₹180" },
    { id: 12, testName: "Lipid Profile (complete)", price: "₹450" },
    { id: 13, testName: "LFT (SGOT/SGPT/ALP etc.)", price: "₹460" },
    { id: 14, testName: "LDH", price: "₹400" },
    { id: 15, testName: "CRP", price: "₹200" },
    { id: 16, testName: "HbA1c", price: "₹550" },
    { id: 17, testName: "Thyroid (TSH)", price: "₹200" },
    { id: 18, testName: "Full thyroid test", price: "₹550" },
    { id: 19, testName: "Basic thyroid panel", price: "₹550" },
    { id: 20, testName: "Electrolytes panel", price: "₹300" },
    { id: 21, testName: "Iron", price: "₹600" },
    { id: 22, testName: "Prolactin", price: "₹600" },
    { id: 23, testName: "Progesterone", price: "₹700" },
    { id: 24, testName: "Lipid Profile", price: "₹550" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="relative bg-blue-700 opacity-90 text-white py-20 md:py-28">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600 opacity-50 transform skew-x-12"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container py-20 mx-auto relative z-10 px-30 text-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Test Price List - 2024
          </h1>
          <p className="text-xl md:text-2xl mx-auto">
            Explore our affordable diagnostic test pricing for individuals and
            lab-to-lab partners.
          </p>
        </div>
      </section>

      {/* Pricing Tabs (Static UI) */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex border-b border-gray-200">
            <button className="px-6 py-3 font-medium text-blue-900 border-b-2 border-blue-900">
              For Individuals
            </button>
            <button className="px-6 py-3 font-medium text-gray-500 hover:text-blue-900">
              Lab-to-Lab Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Price Table Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Search Input */}
            <div className="mb-8">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search test..."
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

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Test Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price (INR)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {priceData.map((test) => (
                    <tr key={test.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">
                        {test.testName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-blue-900 font-semibold">
                        {test.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Note */}
            <div className="mt-4 text-sm text-gray-500">
              * Prices are inclusive of all taxes. Home collection charges may
              apply.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12 text-center border border-blue-100">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Need a custom quotation or lab-to-lab partnership rates?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team for bulk pricing, corporate packages, and special
              arrangements.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceListPage;
