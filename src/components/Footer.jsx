import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo & About */}
        <div>
          <div className="bg-white max-w-30 rounded-md">

          <img
            className="mb-5 h-25 w-40 object-contain "
            src="/logo.jpg"
            height={60}
            width={60}
            alt="Error"
            />
            </div>
          <p className="text-sm">
            Trusted medical diagnostics with accurate results and advanced
            technology. Serving hospitals, labs, and individuals since [Year].
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Tests & Services
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:underline">
                Price List
              </a>
            </li>
            <li>
              <a href="/book" className="hover:underline">
                Book a Test
              </a>
            </li>
            <li>
              <a href="/reports" className="hover:underline">
                Download Report
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">
            📍 Main branch : Lara healthcare House no:1, porteco, chintala
            gorlevanipalem, parawada, visakhapatnam

            <br />
            <br />
            📍 Branch office: 46-1,Aditya nagar , chanakyapuri colony,A camp ,
            kurnool, andhrapradesh 518002
            <br />
            <br />
            📞 Phone: +91-6309583777
            <br />
          </p>
          <Link href="mailto:larahealth777@gmail.com">
            ✉️ Email: larahealth777@gmail.com
          </Link>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-white text-xl">
            <a href="https://www.facebook.com/photo/?fbid=122116446782942562&set=a.122116446938942562" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="https://x.com/larahealth777/status/1950182665597940024/photo/1" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/p/DMsV_oGTqQS/" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/feed/update/urn:li:share:7355947959542337536/?actorCompanyId=108092546" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-gray-500 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Lara health care. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
