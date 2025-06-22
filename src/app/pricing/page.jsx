import React from "react";

const PriceListPage = () => {
  const priceData = [
    { id: 1, testName: "HbA1C", category: "Biochemistry", price: "₹INR" },
    { id: 2, testName: "TSH", category: "Hormonal", price: "₹INR" },
    {
      id: 3,
      testName: "Complete Blood Picture (CBP)",
      category: "Pathology",
      price: "₹INR",
    },
    {
      id: 4,
      testName: "Vitamin D (25-OH)",
      category: "Biochemistry",
      price: "₹INR",
    },
    {
      id: 5,
      testName: "Dengue NS1 Antigen",
      category: "Infectious",
      price: "₹INR",
    },
    {
      id: 6,
      testName: "Liver Function Test (LFT)",
      category: "Biochemistry",
      price: "₹INR",
    },
    {
      id: 7,
      testName: "Urine Culture",
      category: "Microbiology",
      price: "₹INR",
    },
    {
      id: 8,
      testName: "Thyroid Profile (T3, T4, TSH)",
      category: "Hormonal",
      price: "₹INR",
    },
    {
      id: 9,
      testName: "Lipid Profile",
      category: "Biochemistry",
      price: "₹INR",
    },
    {
      id: 10,
      testName: "HIV Combo Test",
      category: "Infectious",
      price: "₹INR",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen ">
      {/* Page Header */}
      <section className="relative bg-blue-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container py-20 mx-auto relative z-10 px-30 text-start ">
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

            {/* Responsive Table */}
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
                      Category
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {test.testName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-600">{test.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-semibold text-blue-900">
                          {test.price}
                        </div>
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
