// app/components/Footer.jsx
import React from 'react';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = ({ className = "" }) => {
  return (
    <footer className={`bg-black text-white px-6 py-10 text-sm ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-700 pb-8 gap-8">
          {/* Newsletter */}
          <div className="md:w-1/2 flex flex-col gap-y-4">
            <h3 className="font-bold uppercase">Be the first to know</h3>
            <p className="mt-2 text-white text-xs">Sign up for updates from mettà muse.</p>
            <div className="flex flex-col sm:flex-row mt-4 gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="w-full px-4 py-2 bg-white text-black"
              />
              <button className="border border-gray-600 text-gray-800 px-4 py-2 sm:ml-2 bg-white">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Contact & Currency */}
          <div className="md:w-1/2 flex flex-col gap-y-6 text-gray-400">
            <div>
              <h3 className="uppercase font-bold text-white">Contact Us</h3>
              <p className="mt-1 text-xs">+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div>
              <h3 className="uppercase font-bold text-white">Currency</h3>
              <p className="mt-2 flex items-center space-x-1">
                <span>🇺🇸</span> <span>USD</span>
              </p>
              <p className="text-[9px]">Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8">
          {/* Section 1 */}
          <div>
            <h4 className="uppercase font-bold mb-2">mettà muse</h4>
            <ul className="text-white space-y-2">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h4 className="uppercase font-bold mb-2">Quick Links</h4>
            <ul className="text-white space-y-2">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Section 3 & 4 */}
          <div className="flex flex-col gap-y-8">
            <div>
              <h4 className="uppercase font-bold mb-2">Follow Us</h4>
              <div className="flex space-x-4 mt-2">
                <Instagram className="w-5 h-5" />
                <Linkedin className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h4 className="uppercase font-bold mb-2">mettà muse Accepts</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <Image src="/payments/googlepay.svg" alt="GPay" width={36} height={24} />
                <Image src="/payments/mastercard.svg" alt="Mastercard" width={36} height={24} />
                <Image src="/payments/visa.svg" alt="Visa" width={36} height={24} />
                <Image src="/payments/amex.svg" alt="Amex" width={36} height={24} />
                <Image src="/payments/applepay.svg" alt="Apple Pay" width={36} height={24} />
                <Image src="/payments/paypal.svg" alt="PayPal" width={36} height={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4 text-xs">
          © {new Date().getFullYear()} mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
