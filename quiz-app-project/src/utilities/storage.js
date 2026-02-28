const HISTORY_KEY = "knowledge_engine_history";

// 1. Save a new result to the list
export const saveQuizResult = (result) => {
  try {
    const history = getQuizHistory();
    const newEntry = {
      id: Date.now(), // Unique ID for React keys
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      score: result.score || 0,
      total: result.total || 0,
      categoryName: result.categoryName || "General Knowledge",
      difficulty: result.difficulty || "medium",
    };

    // Add new entry to the start and keep only the last 20
    const updatedHistory = [newEntry, ...history].slice(0, 20);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
    console.log("✅ Quiz saved to storage!");
  } catch (error) {
    console.error("Storage Save Error:", error);
  }
};

// 2. Retrieve all results
export const getQuizHistory = () => {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Storage Read Error:", error);
    return [];
  }
};

// 3. Clear all results
export const clearHistory = () => {
  localStorage.removeItem(HISTORY_KEY);
};
