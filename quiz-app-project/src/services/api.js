export const fetchQuizQuestions = async (
  amount = 10,
  category = "",
  difficulty = "medium",
  retries = 3,
) => {
  try {
    const categoryParam = category ? `&category=${category}` : "";

    // Attempt 1: Specific category and difficulty
    let url = `https://opentdb.com/api.php?amount=${amount}${categoryParam}&difficulty=${difficulty}&type=multiple`;
    console.log(`Fetching from: ${url}`);

    let response = await fetch(url);
    let data = await response.json();

    // If success, return data
    if (data.response_code === 0) return data.results;

    // If API limit reached (code 5) or no results (code 1), try a broader search
    if (data.response_code === 1 || data.response_code === 5) {
      console.warn("API restricted, trying broader search...");

      // Attempt 2: Same category, any difficulty
      url = `https://opentdb.com/api.php?amount=${amount}${categoryParam}&type=multiple`;
      response = await fetch(url);
      data = await response.json();

      if (data.response_code === 0) return data.results;
    }

  
    if (retries > 0) {
      console.log(`Retrying... (${retries} attempts left)`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return fetchQuizQuestions(amount, category, difficulty, retries - 1);
    }

    return []; 
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
