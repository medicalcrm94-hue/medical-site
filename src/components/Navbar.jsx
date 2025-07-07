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
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
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

  const isActive = (href) => pathname === href;
  const isHomePage = pathname === "/";

  // Nav links data for cleaner JSX
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/services", text: "Tests & Services" },
    { href: "/pricing", text: "Price List" },
    { href: "/book", text: "Book Appointment" },
    { href: "/reports", text: "Download Report" },
    { href: "/contact", text: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHomePage && !isScrolled ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img 
                src="/logo.jpg" 
                height={50} 
                width={50} 
                alt="Company Logo"
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-1 text-sm lg:text-base transition-colors duration-300 ${
                  isActive(link.href)
                    ? isHomePage && !isScrolled
                      ? "text-white font-medium"
                      : "text-blue-700 font-medium"
                    : isHomePage && !isScrolled
                    ? "text-gray-200 hover:text-white"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Right Side: Login/Signup or Profile Dropdown (Desktop only) */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center space-x-1 focus:outline-none"
                  aria-label="Profile menu"
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
                    className={`px-4 py-1 text-sm border rounded transition-all duration-300 ${
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
                    className={`px-4 py-1 text-sm rounded transition-all duration-300 ${
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
              aria-label="Toggle menu"
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-2 py-2 ${
                  isActive(link.href) 
                    ? "text-blue-700 font-medium" 
                    : "text-gray-700"
                } hover:text-blue-700 hover:bg-blue-50 rounded transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            ))}

            {/* Mobile Auth Buttons - Always show login/signup or profile/logout */}
            <div className="pt-2 space-y-3">
              {isLoggedIn ? (
                <>
                  <Link 
                    href="/profile" 
                    className="w-full block"
                    onClick={() => setIsOpen(false)}
                  >
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 text-sm space-x-2">
                      <UserCircle size={20} />
                      <span>Profile</span>
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center justify-center px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50 transition duration-200 text-sm space-x-2"
                  >
                    <LogOut size={20} />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    href="/login" 
                    className="w-full block"
                    onClick={() => setIsOpen(false)}
                  >
                    <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition duration-200 text-sm">
                      Login
                    </button>
                  </Link>
                  <Link 
                    href="/signup" 
                    className="w-full block"
                    onClick={() => setIsOpen(false)}
                  >
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