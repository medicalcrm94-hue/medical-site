// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { GoogleOAuthProvider } from "@react-oauth/google";

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

export const metadata = {
  title: "Lara healthcare",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>
          <GoogleOAuthProvider clientId="698075966116-prm9j1167vt5m983qau93oudrt9spo9j.apps.googleusercontent.com">
            {children}
          </GoogleOAuthProvider>
        </LayoutWrapper>
      </body>
    </html>
  );
}
