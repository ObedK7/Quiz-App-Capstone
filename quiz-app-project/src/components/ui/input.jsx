import React from "react";

const Input = ({ label, placeholder, value, onChange, type = "text" }) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      {label && (
        <label className="text-sm font-semibold text-gray-700">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
    </div>
  );
};

export default Input;
