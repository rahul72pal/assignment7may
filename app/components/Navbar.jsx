// app/components/Navbar.jsx
'use client';
import { useState } from 'react';
import { Search, Heart, ShoppingBag, User, ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b shadow-sm">
      {/* Top Nav */}
      <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/Logo.svg" alt="Logo Icon" width={32} height={32} />
          <h1 className="text-lg font-extrabold tracking-wide block md:hidden">LOGO</h1>
        </div>

        {/* Center: Logo (Desktop only) */}
        <div className="hidden md:block text-center">
          <h1 className="text-xl font-extrabold tracking-wide">LOGO</h1>
        </div>

        {/* Right: Icons */}
        <div className="hidden md:flex items-center space-x-5 text-gray-800">
          <Search className="w-5 h-5 cursor-pointer" />
          <Heart className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-sm">ENG</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Bottom Menu (Desktop) */}
      <div className="hidden md:flex justify-center space-x-12 text-sm font-semibold text-gray-900 py-2">
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </div>

      {/* Bottom Menu (Mobile) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-4 pb-4 space-y-2 text-sm font-semibold text-gray-900 bg-white shadow">
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
          <div className="flex items-center space-x-4 mt-4">
            <Search className="w-5 h-5" />
            <Heart className="w-5 h-5" />
            <ShoppingBag className="w-5 h-5" />
            <User className="w-5 h-5" />
            <div className="flex items-center space-x-1">
              <span className="text-sm">ENG</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
