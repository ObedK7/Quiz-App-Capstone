import React from "react";

const Button = ({
  children,
  onClick,
  variant = "black",
  className = "",
  type = "button",
}) => {
  // Define base styles and variants
  const baseStyles =
    "px-6 py-2 rounded-lg font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
