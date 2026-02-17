import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Grab the data sent from the Assessment page
  // Fallback to 0 if someone navigates here directly
  const { finalScore = 0, total = 10 } = location.state || {};

  // The Dynamic Percentage Calculation
  const percentage = Math.round((finalScore / total) * 100);

  // Performance Message Logic
  const getMessage = () => {
    if (percentage >= 80)
      return { title: "Excellent!", color: "text-green-600" };
    if (percentage >= 50) return { title: "Good Job!", color: "text-blue-600" };
    return { title: "Keep Practicing!", color: "text-orange-600" };
  };

  const message = getMessage();

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
        <h1 className={`text-4xl font-black mb-2 ${message.color}`}>
          {message.title}
        </h1>
        <p className="text-gray-500 mb-8">You have completed the assessment.</p>

        {/* Score Circle */}
        <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-gray-100"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={553}
              strokeDashoffset={553 - (553 * percentage) / 100}
              className={`${message.color} transition-all duration-1000 ease-out`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-black text-gray-800">
              {percentage}%
            </span>
            <span className="text-sm font-bold text-gray-400">
              {finalScore} / {total}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => navigate("/assessment")}
            className="py-4 px-6 bg-blue-600 text-red rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Try Again
          </button>
          <button
            onClick={() => navigate("/")}
            className="py-4 px-6 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
