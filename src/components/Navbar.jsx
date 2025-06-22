"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, UserCircle, ChevronDown, LogOut } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfileMenu = () => setIsProfileOpen(!isProfileOpen);

  useEffect(() => {
    // Example: check for token or login flag
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsProfileOpen(false);
    window.location.href = "/";
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-blue-700">
            <Link href="/">Logo</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden text-sm md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-700">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-700">
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-700"
            >
              Tests & Services
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-700">
              Price List
            </Link>
            <Link href="/book" className="text-gray-700 hover:text-blue-700">
              Book a Test
            </Link>
            <Link href="/reports" className="text-gray-700 hover:text-blue-700">
              Download Report
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700">
              Contact Us
            </Link>
          </div>

          {/* Right Side: Login/Signup or Profile Dropdown */}
          <div className="ml-4 flex items-center space-x-3">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center space-x-1 focus:outline-none"
                >
                  <UserCircle size={28} className="text-blue-700" />
                  <ChevronDown
                    size={16}
                    className={`text-gray-600 transition-transform ${
                      isProfileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 flex items-center"
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login">
                  <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition duration-200 text-sm">
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 text-sm">
                    Signup
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-700">
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-700"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-blue-700"
            >
              Tests & Services
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-blue-700"
            >
              Price List
            </Link>
            <Link
              href="/book"
              className="block text-gray-700 hover:text-blue-700"
            >
              Book a Test
            </Link>
            <Link
              href="/reports"
              className="block text-gray-700 hover:text-blue-700"
            >
              Download Report
            </Link>
            <Link
              href="/faq"
              className="block text-gray-700 hover:text-blue-700"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-700"
            >
              Contact Us
            </Link>

            {/* Mobile Auth Buttons */}
            <div className="pt-2 space-y-3">
              {isLoggedIn ? (
                <>
                  <Link href="/profile" className="w-full">
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 text-sm space-x-2">
                      <UserCircle size={20} />
                      <span>Profile</span>
                    </button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50 transition duration-200 text-sm space-x-2"
                  >
                    <LogOut size={20} />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="w-full">
                    <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition duration-200 text-sm">
                      Login
                    </button>
                  </Link>
                  <Link href="/signup" className="w-full">
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 text-sm">
                      Signup
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
