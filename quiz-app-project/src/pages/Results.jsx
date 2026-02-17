import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const Results = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Results</h2>
        <div className="text-6xl font-black text-blue-600 my-6">80%</div>
        <p className="text-gray-600 mb-8">
          Great job! You have a solid understanding of this topic.
        </p>

        <div className="flex flex-col gap-3">
          <Link to="/assessment">
            <Button className="w-full">Try Again</Button>
          </Link>
          <Link to="/">
            <Button variant="outline" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
