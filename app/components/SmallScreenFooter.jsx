"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Instagram, Linkedin, ChevronDown } from 'lucide-react';

const SmallScreenFooter = ({ className = "" }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className={`bg-black text-white px-6 py-10 text-sm ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Newsletter */}
        <div className="border-b border-gray-700 pb-6">
          <h3 className="font-bold uppercase">Be the first to know</h3>
          <p className="text-xs mt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="w-full px-4 py-2 text-black"
            />
            <button className="ml-2 bg-white text-black px-4 py-2">SUBSCRIBE</button>
          </div>
        </div>

        {/* Contact & Currency */}
        <div className="border-b border-gray-700 py-6">
          <h3 className="uppercase font-bold">Call Us</h3>
          <p className="mt-1">+44 221 133 5360 • customercare@mettamuse.com</p>
        </div>

        <div className="border-b border-gray-700 py-6">
          <h3 className="uppercase font-bold">Currency</h3>
          <p className="mt-1 flex items-center space-x-2">
            <span>🇺🇸</span> <span>USD</span>
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="divide-y divide-gray-700">
          {[
            { title: 'mettà muse', items: ['About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs'] },
            { title: 'Quick Links', items: ['Orders & Shipping', 'Join/Login as a Seller', 'Payment & Pricing', 'Return & Refunds', 'FAQs', 'Privacy Policy', 'Terms & Conditions'] },
            { title: 'Follow Us', items: [] },
          ].map((section) => (
            <div key={section.title} className="py-4">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex justify-between w-full uppercase font-bold"
              >
                {section.title}
                <ChevronDown className={`w-5 h-5 transform transition-transform ${openSection === section.title ? 'rotate-180' : ''}`} />
              </button>
              {(openSection === section.title || section.title === 'Follow Us') && (
                <div className="mt-2 space-y-2 text-sm">
                  {section.title === 'Follow Us' ? (
                    <div className="flex space-x-4">
                      <Instagram className="w-5 h-5" />
                      <Linkedin className="w-5 h-5" />
                    </div>
                  ) : (
                    section.items.map((item) => <p key={item}>{item}</p>)
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Payment Icons */}
        <div className="border-t border-gray-700 py-6">
          <h3 className="uppercase font-bold mb-2">mettà muse Accepts</h3>
          <div className="flex flex-wrap gap-2">
            <Image src="/payments/googlepay.svg" alt="GPay" width={36} height={24} />
            <Image src="/payments/mastercard.svg" alt="Mastercard" width={36} height={24} />
            <Image src="/payments/visa.svg" alt="Visa" width={36} height={24} />
            <Image src="/payments/amex.svg" alt="Amex" width={36} height={24} />
            <Image src="/payments/applepay.svg" alt="Apple Pay" width={36} height={24} />
            <Image src="/payments/paypal.svg" alt="PayPal" width={36} height={24} />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-6 text-xs">
          © {new Date().getFullYear()} mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SmallScreenFooter;
