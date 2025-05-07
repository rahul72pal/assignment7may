"use client";
import { useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" bg-white">
      <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
        {/* Left: Menu + Logo Icon */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <Image src="/Logo.svg" alt="Logo Icon" width={28} height={28} />
        </div>

        {/* Center: Logo Text */}
        <div className="text-center hidden md:block">
          <h1 className="text-xl font-extrabold tracking-wide">LOGO</h1>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-5 text-gray-800">
          <Search className="w-5 h-5 cursor-pointer" />
          <Heart className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {!menuOpen && (
  <div className="hidden sm:flex px-4 pt-8 bg-white shadow mx-auto text-center w-full justify-center items-center">
    <nav className="flex space-x-10 text-sm font-semibold text-gray-800">
      <a href="#">SHOP</a>
      <a href="#">SKILLS</a>
      <a href="#">STORIES</a>
      <a href="#">ABOUT</a>
      <a href="#">CONTACT US</a>
    </nav>
  </div>
)}

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-gray-800">
            <a href="#">SHOP</a>
            <a href="#">SKILLS</a>
            <a href="#">STORIES</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT US</a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
