"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, UserCircle, ChevronDown, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfileMenu = () => setIsProfileOpen(!isProfileOpen);

  useEffect(() => {
    // Check for token or login flag
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    // Handle scroll event to detect when to show/hide navbar background
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Adjust this value based on your hero section height
      // For example, if hero section is 100vh, you might want to trigger at 80vh
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsProfileOpen(false);
    window.location.href = "/";
  };

  // Function to check if a link is active
  const isActive = (href) => {
    return pathname === href;
  };

  // Check if we're on the home page (where hero section exists)
  const isHomePage = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHomePage && !isScrolled ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className={`flex-shrink-0 text-xl font-bold transition-colors duration-300 ${
              isHomePage && !isScrolled ? "text-white" : "text-blue-700"
            }`}
          >
            <Link href="/">Logo</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden text-sm md:flex items-center space-x-6">
            <Link
              href="/"
              className={`transition-colors duration-300 ${
                isActive("/")
                  ? isHomePage && !isScrolled
                    ? "text-white font-medium"
                    : "text-blue-700 font-medium"
                  : isHomePage && !isScrolled
                  ? "text-gray-200 hover:text-white"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              Home
              <span className="block h-0.5 max-w-0 bg-blue-500 transition-all duration-300 group-hover:max-w-full"></span>
            </Link>
            <Link
              href="/about"
              className={`transition-colors duration-300 ${
                isActive("/about")
                  ? isHomePage && !isScrolled
                    ? "text-white font-medium"
                    : "text-blue-700 font-medium"
                  : isHomePage && !isScrolled
                  ? "text-gray-200 hover:text-white"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`transition-colors duration-300 ${
                isActive("/services")
                  ? isHomePage && !isScrolled
                    ? "text-white font-medium"
                    : "text-blue-700 font-medium"
                  : isHomePage && !isScrolled
                  ? "text-gray-200 hover:text-white"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              Tests & Services
            </Link>
            <Link
              href="/pricing"
              className={`transition-colors duration-300 ${
                isActive("/pricing")
                  ? isHomePage && !isScrolled
                    ? "text-white font-medium"
                    : "text-blue-700 font-medium"
                  : isHomePage && !isScrolled
                  ? "text-gray-200 hover:text-white"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              Price List
            </Link>
            <Link
              href="/book"
              className={`transition-colors duration-300 ${
                isActive("/book")
                  ? isHomePage && !isScrolled
                    ? "text-white font-medium"
                    : "text-blue-700 font-medium"
                  : isHomePage && !isScrolled
                  ? "text-gray-200 hover:text-white"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              Book a Appointment
            </Link>
            <Link
              href="/reports"
              className={`transition-colors duration-300 ${
                isActive("/reports")
                  ? isHomePage && !isScrolled
                    ? "text-white font-medium"
                    : "text-blue-700 font-medium"
                  : isHomePage && !isScrolled
                  ? "text-gray-200 hover:text-white"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              Download Report
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-300 ${
                isActive("/contact")
                  ? isHomePage && !isScrolled
                    ? "text-white font-medium"
                    : "text-blue-700 font-medium"
                  : isHomePage && !isScrolled
                  ? "text-gray-200 hover:text-white"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
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
                  <UserCircle
                    size={28}
                    className={`transition-colors duration-300 ${
                      isHomePage && !isScrolled ? "text-white" : "text-blue-700"
                    }`}
                  />
                  <ChevronDown
                    size={16}
                    className={`transition-all duration-300 ${
                      isProfileOpen ? "rotate-180" : ""
                    } ${
                      isHomePage && !isScrolled
                        ? "text-gray-200"
                        : "text-gray-600"
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
                  <button
                    className={`px-4 py-1 border rounded transition-all duration-300 text-sm ${
                      isHomePage && !isScrolled
                        ? "border-white text-white hover:bg-white hover:text-blue-700"
                        : "border-blue-600 text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button
                    className={`px-4 py-1 rounded transition-all duration-300 text-sm ${
                      isHomePage && !isScrolled
                        ? "bg-white text-blue-700 hover:bg-gray-100"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
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
              className={`focus:outline-none transition-colors duration-300 ${
                isHomePage && !isScrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-700 hover:text-blue-700"
              }`}
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
            <Link
              href="/"
              className={`block ${
                isActive("/") ? "text-blue-700 font-medium" : "text-gray-700"
              } hover:text-blue-700`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block ${
                isActive("/about")
                  ? "text-blue-700 font-medium"
                  : "text-gray-700"
              } hover:text-blue-700`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`block ${
                isActive("/services")
                  ? "text-blue-700 font-medium"
                  : "text-gray-700"
              } hover:text-blue-700`}
            >
              Tests & Services
            </Link>
            <Link
              href="/pricing"
              className={`block ${
                isActive("/pricing")
                  ? "text-blue-700 font-medium"
                  : "text-gray-700"
              } hover:text-blue-700`}
            >
              Price List
            </Link>
            <Link
              href="/book"
              className={`block ${
                isActive("/book")
                  ? "text-blue-700 font-medium"
                  : "text-gray-700"
              } hover:text-blue-700`}
            >
              Book a Appointment
            </Link>
            <Link
              href="/reports"
              className={`block ${
                isActive("/reports")
                  ? "text-blue-700 font-medium"
                  : "text-gray-700"
              } hover:text-blue-700`}
            >
              Download Report
            </Link>
            <Link
              href="/faq"
              className={`block ${
                isActive("/faq") ? "text-blue-700 font-medium" : "text-gray-700"
              } hover:text-blue-700`}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className={`block ${
                isActive("/contact")
                  ? "text-blue-700 font-medium"
                  : "text-gray-700"
              } hover:text-blue-700`}
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
