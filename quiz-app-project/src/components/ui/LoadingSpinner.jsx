import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
      <p className="text-gray-500 font-medium animate-pulse">
        Loading Questions...
      </p>
    </div>
  );
};

export default LoadingSpinner;
