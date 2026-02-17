// src/utils/helpers.js

/**
 * Decodes HTML entities from a string (e.g., converts &quot; to ")
 */
export const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

/**
 * Shuffles an array using the Fisher-Yates algorithm
 * Useful for mixing correct and incorrect answers
 */
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
