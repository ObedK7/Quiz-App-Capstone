// src/services/api.js

const BASE_URL = "https://opentdb.com/api.php";

/**
 * Fetches questions from the Open Trivia DB
 * @param {number} amount - Number of questions (default 10)
 * @param {string} category - Category ID
 * @param {string} difficulty - easy, medium, or hard
 */
export const fetchQuizQuestions = async (
  amount = 10,
  category = "",
  difficulty = "",
) => {
  try {
    // Construct the URL with parameters
    const url = `${BASE_URL}?amount=${amount}${category ? `&category=${category}` : ""}${difficulty ? `&difficulty=${difficulty}` : ""}&type=multiple`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // The API returns an array in data.results
    return data.results;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};
