import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = " ",
  type = "button",
}) => {
  // Define base styles and variants
  const baseStyles =
    "px-6 py-2 rounded-lg font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50";

  const variants = {
    primary: "!bg-green-600 hover:!bg-blue-500 shadow-md",
    secondary: "bg-gray-200 hover:bg-gray-300",
    outline: "border-2 border-blue-600 hover:bg-blue-50",
    danger: "!bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
