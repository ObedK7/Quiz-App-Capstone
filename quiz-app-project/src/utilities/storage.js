// src/utils/storage.js

const HISTORY_KEY = "knowledge_engine_history";

export const saveQuizResult = (result) => {
  const history = getQuizHistory();
  const newResult = {
    ...result,
    id: Date.now(),
    date: new Date().toLocaleDateString(),
  };

  localStorage.setItem(HISTORY_KEY, JSON.stringify([newResult, ...history]));
};

export const getQuizHistory = () => {
  const history = localStorage.getItem(HISTORY_KEY);
  return history ? JSON.parse(history) : [];
};

export const clearHistory = () => {
  localStorage.removeItem(HISTORY_KEY);
};
