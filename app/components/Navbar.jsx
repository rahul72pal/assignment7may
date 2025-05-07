// app/components/Navbar.jsx
import { Search, Heart, ShoppingBag, User } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="border-b shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Left Icon */}
        <div className="flex items-center">
          <Image src="/Logo.svg" alt="Logo Icon" width={32} height={32} />
        </div>

        {/* Center Logo */}
        <div className="text-center">
          <h1 className="text-xl font-extrabold tracking-wide">LOGO</h1>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-5 text-gray-800">
          <Search className="w-5 h-5 cursor-pointer" />
          <Heart className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-sm">ENG</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="flex justify-center space-x-12 text-sm font-semibold text-gray-900 py-2">
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </div>
    </nav>
  );
};

export default Navbar;
