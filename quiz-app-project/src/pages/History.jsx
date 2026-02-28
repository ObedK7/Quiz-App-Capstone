import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getQuizHistory, clearHistory } from "../utilities/storage";

const History = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load data when the page opens
    const data = getQuizHistory();
    setHistory(data);
  }, []);

  const handleClear = () => {
    if (window.confirm("Delete all performance records?")) {
      clearHistory();
      setHistory([]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-black">My Records</h1>
        {history.length > 0 && (
          <button
            onClick={handleClear}
            className="text-red-500 font-bold hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      {/* THE GUARD: Checks if history has items before trying to show them */}
      {history && history.length > 0 ? (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                  Date
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                  Topic
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">
                  Score
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {history.map((record) => (
                <tr
                  key={record.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-5">
                    <p className="font-bold">{record.date}</p>
                    <p className="text-xs text-gray-400">{record.time}</p>
                  </td>
                  <td className="px-6 py-5 font-medium">
                    {record.categoryName}
                    <span className="ml-2 text-[10px] bg-gray-100 px-2 py-0.5 rounded uppercase">
                      {record.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right font-black text-xl">
                    {record.score} / {record.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-3xl p-20 text-center border-2 border-dashed border-gray-200">
          <p className="text-gray-400 text-lg">
            No records found yet. Take a quiz to see your progress!
          </p>
        </div>
      )}

      <button
        onClick={() => navigate("/")}
        className="mt-10 text-gray-500 font-bold hover:text-gray flex items-center gap-2"
      >
        ← Back to Dashboard
      </button>
    </div>
  );
};

export default History;
