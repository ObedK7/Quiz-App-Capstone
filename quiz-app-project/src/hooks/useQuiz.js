import { useState, useEffect, useCallback } from "react";

const useQuiz = (questions) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); // 15 seconds per question

  // Function to move to next question
  const nextQuestion = useCallback(
    (isCorrect) => {
      if (isCorrect) setScore((prev) => prev + 1);

      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setTimeLeft(15); // Reset timer
      } else {
        setIsFinished(true);
      }
    },
    [currentIndex, questions.length],
  );

  // Timer logic
  useEffect(() => {
    if (isFinished) return;

    if (timeLeft === 0) {
      nextQuestion(false); // Auto-fail if time runs out
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isFinished, nextQuestion]);

  return {
    currentQuestion: questions[currentIndex],
    currentIndex,
    score,
    isFinished,
    timeLeft,
    nextQuestion,
  };
};

export default useQuiz;
