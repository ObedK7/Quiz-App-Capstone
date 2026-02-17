import { useState, useEffect, useCallback } from "react";

const useQuiz = (questions = []) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  const nextQuestion = useCallback(
    (isCorrect) => {
      if (isCorrect) setScore((prev) => prev + 1);

      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setTimeLeft(15);
      } else {
        setIsFinished(true);
      }
    },
    [currentIndex, questions.length],
  );

  useEffect(() => {
    if (isFinished || !questions.length) return;

    if (timeLeft === 0) {
      nextQuestion(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isFinished, nextQuestion, questions.length]);

  return {
    currentQuestion: questions.length > 0 ? questions[currentIndex] : null,
    currentIndex,
    score,
    isFinished,
    timeLeft,
    nextQuestion,
  };
};

export default useQuiz;
