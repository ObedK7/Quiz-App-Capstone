import React from "react";

const QuestionCard = ({ question, options, onAnswer, selectedAnswer }) => {
  return (
    <div className="bg-white p-4 md:p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-2xl mx-auto">
      {/* Dynamic text size for the question */}
      <h3
        className="text-lg md:text-2xl font-bold text-gray-800 mb-6 md:mb-8 leading-tight"
        dangerouslySetInnerHTML={{ __html: question }}
      />

      <div className="grid grid-cols-1 gap-3 md:gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className={`w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-200 text-sm md:text-base font-medium 
              ${
                selectedAnswer === option
                  ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                  : "border-gray-100 hover:border-blue-200 hover:bg-gray-50 text-gray-700"
              }`}
            dangerouslySetInnerHTML={{ __html: option }}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
