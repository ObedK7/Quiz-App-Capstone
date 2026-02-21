import React from "react";

const QuestionCard = ({ question, options, onAnswer }) => {
  if (!question || !options) return null;

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-5 md:p-8 bg-blue-50/50 border-b border-blue-100">
        <h3
          className="text-lg md:text-2xl font-bold text-gray-800"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>

      <div className="p-5 md:p-8 grid grid-cols-1 gap-3 md:gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full text-left p-4 md:p-5 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all"
          >
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold">
                {String.fromCharCode(65 + index)}
              </span>
              <span
                className="text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: option }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard; // <--- CRITICAL LINE
