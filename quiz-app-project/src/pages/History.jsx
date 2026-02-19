import React from "react";

const History = () => {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-black">Your Performance History</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-500">
          No past assessments found yet. Start a quiz to see your progress!
        </p>
      </div>
    </div>
  );
};

export default History;
