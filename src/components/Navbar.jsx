"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/"); // Use router.push for client-side navigation
  };

  const isActive = (href) => pathname === href;

  // Nav links with conditional inclusion based on login status
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/services", text: "Services" },
    { href: "/pricing", text: "Pricing" },
    ...(isLoggedIn
      ? [
          { href: "/book", text: "Book" },
          { href: "/reports", text: "Reports" },
          { href: "/profile", text: "Profile" },
        ]
      : []),
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <div className="h-16 w-20 object-cover"
>
            <Link href="/">
            <img
  src="/logo.jpg"
  alt="Company Logo"
  className="h-20 w-20 object-cover"
/>

            </Link>
          </div>

          {/* Desktop Menu - Compact */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 xl:px-3 py-1 text-xs xl:text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Tablet Menu - Medium screens */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                {link.text}
              </Link>
            ))}
            {navLinks.length > 5 && (
              <div className="relative">
                <button
                  onClick={toggleMenu}
                  className="px-2 py-1 text-xs font-medium rounded-md transition-all duration-200 text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                >
                  More
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg py-1 z-50">
                    {navLinks.slice(5).map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-1 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Side: Only Logout Button when logged in */}
          <div className="hidden md:flex items-center">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-xs rounded-md transition-all duration-300 flex items-center text-red-600 hover:bg-red-50"
              >
                <LogOut size={14} className="mr-1" />
                Logout
              </button>
            ) : (
              <>
                <Link href="/login">
                  <button className="px-3 py-1 text-xs border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-all duration-300">
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="px-3 py-1 text-xs rounded-md transition-all duration-300 ml-2 bg-blue-600 text-white hover:bg-blue-700">
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
              className="focus:outline-none transition-colors duration-300 p-1 text-gray-700 hover:text-blue-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-3 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive(link.href)
                    ? "text-blue-700 font-medium bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            ))}

            {/* Mobile Auth Section */}
            <div className="pt-3 border-t border-gray-200 space-y-2">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="w-full flex items-center justify-center px-3 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition duration-200 text-sm"
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <button className="w-full px-3 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition duration-200 text-sm">
                      Login
                    </button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    <button className="w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 text-sm">
                      Signup
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;