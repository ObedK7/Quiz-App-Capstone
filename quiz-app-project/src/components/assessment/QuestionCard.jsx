import React from "react";
import Button from "../ui/Button";

const QuestionCard = ({ question, options, onAnswer, selectedAnswer }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto">
      {/* The Question Text - Using dangerouslySetInnerHTML because Open Trivia API returns encoded HTML entities */}
      <h3
        className="text-xl font-bold text-gray-800 mb-8 leading-snug"
        dangerouslySetInnerHTML={{ __html: question }}
      />

      {/* Answer Options Grid */}
      <div className="grid grid-cols-1 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium 
              ${
                selectedAnswer === option
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-700"
              }`}
            dangerouslySetInnerHTML={{ __html: option }}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
