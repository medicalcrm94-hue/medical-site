// "use client";

// import React, { useState, useEffect } from "react";

// import Link from "next/link";

// export default function PriceListPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {

//       const token =
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NzM5NzlhMDkxYjViNmYzNWViMDk2NCIsInVzZXJJRCI6Ik11a3VsXzAwMiIsIm5hbWUiOiJNdWt1bCBWZXJtYSIsInJvbGUiOiJkcml2ZXIiLCJ0ZW5hbnRJZCI6IjY4NzM5NDhiMDkxYjViNmYzNWViMDkyZiIsImlhdCI6MTc1NDE2MDc5NCwiZXhwIjoxNzU0MTY0Mzk0fQ.bNwvK6acpXIbKFMJDOHChv5JA9lj5q-Fj4KK_DGSTso";

//       try {
//         const response = await fetch(
//           "https://medical-deploy-784797008827.europe-west1.run.app/api/services",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           // Handle specific HTTP errors like 401 Unauthorized or 404 Not Found
//           if (response.status === 401) {
//             throw new Error("Authorization failed. Please check the token.");
//           }
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         const bookATestService = data.find(
//           (service) => service.serviceName === "Book a Test"
//         );

//         if (bookATestService && bookATestService.products) {
//           setProducts(bookATestService.products);
//         } else {
//           throw new Error('Could not find the "Book a Test" service data.');
//         }
//       } catch (e) {
//         setError(e.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this effect runs only once

//   const filteredProducts = products.filter((product) =>
//     product.productName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // This helper function renders the content of the price list section
//   const renderPriceListContent = () => {
//     if (loading) {
//       return (
//         <div className="text-center py-10">
//           <p className="text-lg font-semibold text-gray-600">
//             Loading tests...
//           </p>
//         </div>
//       );
//     }

//     if (error) {
//       return (
//         <div className="text-center py-10 bg-red-50 rounded-lg border border-red-200">
//           <p className="text-lg font-semibold text-red-600">
//             Failed to load data
//           </p>
//           <p className="text-sm text-gray-500 mt-2">{error}</p>
//         </div>
//       );
//     }

//     if (filteredProducts.length === 0) {
//       return (
//         <div className="text-center py-10">
//           <p className="text-lg font-semibold text-gray-600">
//             No tests found matching your search.
//           </p>
//         </div>
//       );
//     }

//     return (
//       <>
//         {/* Desktop Table */}
//         <div className="hidden sm:block overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Test Name
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Price (INR)
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredProducts.map((product) => (
//                 <tr key={product._id} className="hover:bg-gray-50">
//                   <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-900 font-medium text-sm sm:text-base">
//                     {product.productName}
//                   </td>
//                   <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-blue-900 font-semibold text-sm sm:text-base">
//                     ₹{product.price}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Mobile Card Layout */}
//         <div className="block sm:hidden space-y-4">
//           {filteredProducts.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white rounded-lg border border-gray-200 shadow-sm p-4"
//             >
//               <div className="flex justify-between items-center">
//                 <div className="flex-1">
//                   <h3 className="text-gray-900 font-medium text-sm leading-tight">
//                     {product.productName}
//                   </h3>
//                 </div>
//                 <div className="ml-4">
//                   <span className="text-blue-900 font-semibold text-base">
//                     ₹{product.price}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   };

//   return (
//     <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
//       {/* Page Header */}
//       <section className="relative bg-blue-700 text-white py-16 sm:py-20 md:py-28 px-4">
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//         <div className="container mx-auto relative z-10 text-start md:py-20 md:mx-20">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4  leading-tight">
//             Test Price List - 2024
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed">
//             Explore our affordable diagnostic test pricing for individuals and
//             lab-to-lab partners.
//           </p>
//         </div>
//       </section>

//       {/* Pricing Tabs (Static UI) */}
//       <section className="py-6 sm:py-8 bg-white">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <div className="flex border-b border-gray-200 overflow-x-auto">
//             <button className="px-4 sm:px-6 py-3 font-medium text-blue-900 border-b-2 border-blue-900 whitespace-nowrap text-sm sm:text-base">
//               For Individuals
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Price Table Section */}
//       <section className="py-8 sm:py-12 bg-white px-4">
//         <div className="container mx-auto">
//           <div className="max-w-6xl mx-auto">
//             {/* Search Input */}
//             <div className="mb-6 sm:mb-8">
//               <div className="relative max-w-md">
//                 <input
//                   type="text"
//                   placeholder="Search test..."
//                   className="w-full py-3 px-4 sm:px-6 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   value={searchTerm}
//                 />
//                 <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 sm:h-6 sm:w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Render the dynamic content here */}
//             {renderPriceListContent()}

//             {/* Table Note */}
//             <div className="mt-4 text-xs sm:text-sm text-gray-500">
//               * Prices are inclusive of all taxes. Home collection charges may
//               apply.
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-12 sm:py-16 bg-gray-50 px-4">
//         <div className="container mx-auto">
//           <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-8 md:p-12 text-center border border-blue-100">
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 leading-tight">
//               Need a custom quotation or lab-to-lab partnership rates?
//             </h2>
//             <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
//               Contact our team for bulk pricing, corporate packages, and special
//               arrangements.
//             </p>
//             <Link href="/contact" legacyBehavior>
//               <a className="bg-blue-900 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 inline-block w-full sm:w-auto text-sm sm:text-base">
//                 Contact Us
//               </a>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function PriceListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const TENANT_ID = "68935132c1fa55f36f3a4105";

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8005/api/web-user/services?tenantId=${TENANT_ID}`
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Authorization failed. Please check your login credentials.");
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const bookATestService = data.find(
        (service) => service.serviceName === "Book a Test"
      );

      if (bookATestService && bookATestService.products) {
        setProducts(bookATestService.products);
      } else {
        throw new Error('Could not find the "Book a Test" service data.');
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);


  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // This helper function renders the content of the price list section based on the current state
  const renderPriceListContent = () => {
    if (loading) {
      return (
        <div className="text-center py-10">
          <p className="text-lg font-semibold text-gray-600">
            Loading tests...
          </p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-10 bg-red-50 rounded-lg border border-red-200">
          <p className="text-lg font-semibold text-red-600">
            Failed to load data
          </p>
          <p className="text-sm text-gray-500 mt-2">{error}</p>
        </div>
      );
    }

    if (filteredProducts.length === 0) {
      return (
        <div className="text-center py-10">
          <p className="text-lg font-semibold text-gray-600">
            No tests found matching your search.
          </p>
        </div>
      );
    }

    return (
      <>
        {/* Desktop Table */}
        <div className="hidden sm:block overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Test Name
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price (INR)
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Points
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-900 font-medium text-sm sm:text-base">
                    {product.productName}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-blue-900 font-semibold text-sm sm:text-base">
                    ₹{product.price}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-blue-900 font-semibold text-sm sm:text-base">
                    {product.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="block sm:hidden space-y-4">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-4"
            >
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <h3 className="text-gray-900 font-medium text-sm leading-tight">
                    {product.productName}
                  </h3>
                </div>
                <div className="ml-4">
                  <span className="text-blue-900 font-semibold text-base">
                    ₹{product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="relative bg-blue-700 text-white py-16 sm:py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto relative z-10 text-start md:py-20 md:mx-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4  leading-tight">
            Test Price List - 2024
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed">
            Explore our affordable diagnostic test pricing for individuals and
            lab-to-lab partners.
          </p>
        </div>
      </section>

      {/* Pricing Tabs (Static UI) */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button className="px-4 sm:px-6 py-3 font-medium text-blue-900 border-b-2 border-blue-900 whitespace-nowrap text-sm sm:text-base">
              For Individuals
            </button>
          </div>
        </div>
      </section>

      {/* Price Table Section */}
      <section className="py-8 sm:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Search Input */}
            <div className="mb-6 sm:mb-8">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search test..."
                  className="w-full py-3 px-4 sm:px-6 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
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
            </div>

            {/* Render the dynamic content here */}
            {renderPriceListContent()}

            {/* Table Note */}
            <div className="mt-4 text-xs sm:text-sm text-gray-500">
              * Prices are inclusive of all taxes. Home collection charges may
              apply.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-8 md:p-12 text-center border border-blue-100">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 leading-tight">
              Need a custom quotation or lab-to-lab partnership rates?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Contact our team for bulk pricing, corporate packages, and special
              arrangements.
            </p>
            <Link href="/contact" legacyBehavior>
              <a className="bg-blue-900 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 inline-block w-full sm:w-auto text-sm sm:text-base">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
