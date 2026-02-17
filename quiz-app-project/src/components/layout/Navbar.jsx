import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-2xl font-black text-blue-600 tracking-tighter uppercase"
        >
          Knowledge
          <span className="text-gray-800 underline decoration-blue-500">
            Engine
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 font-medium text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/history" className="hover:text-blue-600 transition-colors">
            History
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>

          {/* CTA Button for mobile/desktop visibility */}
          <Link
            to="/assessment"
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
