"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useEffect } from "react";
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

const HIDDEN_LAYOUT_PATHS = ["/login", "/signup"];

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const hideLayout = useMemo(
    () => HIDDEN_LAYOUT_PATHS.includes(pathname),
    [pathname]
  );

  useEffect(() => {
    // Skip auth check for auth pages and home page
    if (HIDDEN_LAYOUT_PATHS.includes(pathname)) return;
    if (pathname === "/home") return;

    const token = localStorage.getItem("token");
    if (pathname === "/") {
      // Handle root path redirect
      if (token) {
        router.push("/home");
      } else {
        router.push("/login");
      }
    } else if (!token) {
      // Redirect to login if trying to access any protected page without auth
      router.push("/login");
    }
  }, [pathname, router]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!hideLayout && <Navbar />}
        {children}
        {!hideLayout && <Footer />}
        {!hideLayout && <WhatsAppButton />}
      </body>
    </html>
  );
}
