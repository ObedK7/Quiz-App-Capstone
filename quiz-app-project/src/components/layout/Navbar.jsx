import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-black text-blue-600 tracking-tighter uppercase"
        >
          Knowledge
          <span className="text-gray-800 underline decoration-blue-500">
            Engine
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 md:gap-8 font-medium text-sm md:text-base text-gray-600">
          <Link to="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link to="/history" className="hover:text-blue-600 transition-colors">
            History
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600 transition-colors hidden sm:block"
          >
            About
          </Link>

          <Link
            to="/assessment"
            className="bg-green-700 text-white px-4 py-2 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg--700 shadow-md"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
