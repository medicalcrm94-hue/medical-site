// components/LayoutWrapper.jsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const AUTH_PATHS = ["/login", "/signup"];

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

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const shouldHideLayout = AUTH_PATHS.includes(pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <main className="min-h-[calc(100vh-64px)]">{children}</main>
      {!shouldHideLayout && <Footer />}
      {!shouldHideLayout && <WhatsAppButton />}
    </>
  );
}
