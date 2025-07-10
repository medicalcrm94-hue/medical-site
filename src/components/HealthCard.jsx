"use client";

import React from 'react';
import { CheckCircle, Shield, Award, Clock } from 'lucide-react';

const HealthCard = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-transparent rounded-full translate-y-12 -translate-x-12 opacity-40"></div>
      
      <div className="relative p-6 md:p-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                Lara
              </h2>
              <p className="text-gray-600 text-sm font-medium">Redefining Lab Care at Home</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-3 py-1 rounded-full mb-2">
              <p className="text-gray-600 text-xs font-semibold tracking-wide uppercase">Health Card</p>
            </div>
            <p className="text-gray-500 text-sm mb-1">Special Offer</p>
            <div className="flex items-baseline justify-end gap-2">
              <span className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                ₹499
              </span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-gray-400 line-through text-sm">₹1,600</span>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">
                69% OFF
              </span>
            </div>
          </div>
        </div>

        {/* Patient Info Section */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-5 mb-6 border border-blue-100">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-teal-600" />
            <span className="text-teal-700 font-semibold text-sm">Patient Information</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">M. Srinivasulu</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white px-3 py-1 rounded-lg shadow-sm">
              <span className="text-gray-500 text-xs">Age</span>
              <p className="font-semibold text-gray-800">41</p>
            </div>
            <div className="bg-white px-3 py-1 rounded-lg shadow-sm">
              <span className="text-gray-500 text-xs">Gender</span>
              <p className="font-semibold text-gray-800">Male</p>
            </div>
            <div className="bg-white px-3 py-1 rounded-lg shadow-sm">
              <span className="text-gray-500 text-xs">ID</span>
              <p className="font-semibold text-gray-800">2025LA01</p>
            </div>
          </div>
        </div>

        {/* Tests Section */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800">Tests Included</h4>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent ml-2"></div>
          </div>
          
          <div className="space-y-4">
            {/* Primary Tests */}
            <div className="space-y-3">
              {[
                { name: "Complete blood picture", count: "16 tests", primary: true },
                { name: "Lipid profile", count: "5 tests", primary: true },
                { name: "Diabetes (sugar) test", count: "1 test", primary: true }
              ].map((test, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-gradient-to-r from-green-50 to-transparent rounded-xl border border-green-100 hover:from-green-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-sm">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-800 font-medium">{test.name}</span>
                    <p className="text-green-600 text-sm font-semibold">{test.count}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary Tests */}
            <div className="space-y-3">
              {[
                { name: "Thyroid screening", count: "1 test" },
                { name: "Complete urine test", count: "16 tests" }
              ].map((test, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border border-blue-100 hover:from-blue-100 transition-colors">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-800 font-medium">{test.name}</span>
                    <p className="text-blue-600 text-sm font-semibold">{test.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Valid until Dec 2025</span>
            </div>
            <div className="bg-gradient-to-r from-teal-100 to-teal-50 text-teal-700 px-3 py-1 rounded-full font-semibold text-xs">
              Home Collection Available
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Border Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-200 via-transparent to-blue-200 opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default HealthCard;