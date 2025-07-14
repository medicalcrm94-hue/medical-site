"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const WhatsAppButton = () => (
  <a
    href="https://wa.me/916309583777"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    className="fixed bottom-5 right-5 z-[1000] w-14 h-14 flex justify-center items-center cursor-pointer bg-[#25D366] rounded-full shadow-lg hover:scale-105 transition-transform duration-200 hover:shadow-xl"
  >
    <FaWhatsapp className="text-white text-3xl" />
  </a>
);

const AUTH_PATHS = ["/login", "/signup"];

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  
  const shouldHideLayout = useMemo(() => {
    return AUTH_PATHS.includes(pathname);
  }, [pathname]);

  useEffect(() => {
    setIsCheckingAuth(true);
    const token = localStorage.getItem('token');

    // Skip auth check for auth pages
    if (AUTH_PATHS.includes(pathname)) {
      setIsCheckingAuth(false);
      return;
    }

    if (pathname === '/') {
      if (token) {
        router.push('/home');
      } else {
        router.push('/login');
      }
    } else if (!token) {
      router.push('/login');
    } else {
      setIsCheckingAuth(false);
    }
  }, [pathname, router]);

  // Show nothing while checking auth to prevent layout flash
  if (isCheckingAuth && (pathname === '/' || !AUTH_PATHS.includes(pathname))) {
    return null;
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {!shouldHideLayout && <Navbar />}
        {children}
        {!shouldHideLayout && <Footer />}
        {!shouldHideLayout && <WhatsAppButton />}
      </body>
    </html>
  );
}