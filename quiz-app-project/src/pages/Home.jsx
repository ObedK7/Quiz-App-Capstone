import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [config, setConfig] = useState({ category: "", difficulty: "medium" });
  const navigate = useNavigate();

  const categories = [
    { id: "", name: "Any Category" },
    { id: "9", name: "General Knowledge" },
    { id: "18", name: "Computer Science" },
    { id: "21", name: "Sports" },
    { id: "23", name: "History" },
    { id: "27", name: "Animals" },
  ];

  const handleStart = () => {
    // --- CHANGES START HERE ---
    const selectedCat = categories.find((c) => c.id === config.category);

    // Send the ID, Difficulty, and Name to the Assessment page
    navigate("/assessment", {
      state: {
        category: config.category,
        difficulty: config.difficulty,
        categoryName: selectedCat ? selectedCat.name : "General Knowledge",
      },
    });
    // --- CHANGES END HERE ---
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] max-w-[100vw] text-center px-6 py-10">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 tracking-tight">
          Welcome to Knowledge Engine!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          A place to test your understanding.
        </p>
      </header>

      <main className="mt-10">
        <Button
          onClick={() => setShowModal(true)}
          className="px-10 py-4 text-lg text-white bg-black hover:bg-gray-800"
        >
          Start Quiz.
        </Button>
      </main>

      {/* MODAL POPUP */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Configure Quiz
            </h2>

            <div className="space-y-4 text-left">
              {/* Category Dropdown */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  // --- STYLE CHANGE HERE (bg-white, text-black) ---
                  className="w-full p-3 border-2 border-gray-100 rounded-xl focus:border-blue-500 outline-none bg-white text-black"
                  value={config.category}
                  onChange={(e) =>
                    setConfig({ ...config, category: e.target.value })
                  }
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Level */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Level
                </label>
                <div className="flex gap-2">
                  {["easy", "medium", "hard"].map((level) => (
                    <button
                      key={level}
                      onClick={() =>
                        setConfig({ ...config, difficulty: level })
                      }
                      className={`flex-1 py-2 rounded-lg border-2 capitalize font-bold transition-all ${
                        config.difficulty === level
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "border-gray-100 text-gray-400 hover:border-gray-200"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              onClick={handleStart}
              className="w-full mt-8 py-4 bg-green-600 text-white text-xl hover:bg-green-700"
            >
              Ready!
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
