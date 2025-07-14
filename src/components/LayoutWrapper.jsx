// components/LayoutWrapper.jsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo, useEffect, useState } from "react";
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
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const shouldHideLayout = useMemo(() => AUTH_PATHS.includes(pathname), [pathname]);

  useEffect(() => {
    setIsCheckingAuth(true);
    const token = localStorage.getItem("token");

    if (AUTH_PATHS.includes(pathname)) {
      setIsCheckingAuth(false);
      return;
    }

    if (pathname === "/") {
      if (token) {
        router.push("/home");
      } else {
        router.push("/login");
      }
    } else if (!token) {
      router.push("/login");
    } else {
      setIsCheckingAuth(false);
    }
  }, [pathname, router]);

  if (isCheckingAuth && (pathname === "/" || !AUTH_PATHS.includes(pathname))) {
    return null;
  }

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {children}
      {!shouldHideLayout && <Footer />}
      {!shouldHideLayout && <WhatsAppButton />}
    </>
  );
}
