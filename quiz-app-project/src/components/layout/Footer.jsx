import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 font-medium">
          &copy; {currentYear} Knowledge Engine.
        </p>
        <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-blue-500">
            GitHub
          </a>
          <a href="#" className="hover:text-blue-500">
            Documentation
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
