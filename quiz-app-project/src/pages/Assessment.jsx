import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuizQuestions } from "../services/api"; // Check if this needs .js too
import { decodeHtml, shuffleArray } from "../utilities/helpers.js";
import useQuiz from "../hooks/useQuiz"; // Added .js if needed
import QuestionCard from "../components/assessment/QuestionCard.jsx";
import ProgressBar from "../components/assessment/ProgressBar.jsx";
import LoadingSpinner from "../components/ui/LoadingSpinner.jsx";

const Assessment = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await fetchQuizQuestions(10);
        const formatted = data.map((q) => ({
          question: decodeHtml(q.question),
          options: shuffleArray([...q.incorrect_answers, q.correct_answer]).map(
            (opt) => decodeHtml(opt),
          ),
          correctAnswer: decodeHtml(q.correct_answer),
        }));
        setQuestions(formatted);
      } catch (error) {
        console.error("Failed to load quiz", error);
      } finally {
        setLoading(false);
      }
    };
    getQuestions();
  }, []);

  // We pass questions here. If it's empty, the hook handles it gracefully.
  const {
    currentQuestion,
    currentIndex,
    isFinished,
    score,
    timeLeft,
    nextQuestion,
  } = useQuiz(questions);

  useEffect(() => {
    if (isFinished) {
      navigate("/results", {
        state: { finalScore: score, total: questions.length },
      });
    }
  }, [isFinished, score, navigate, questions.length]);

  // IMPORTANT: Guard Clause
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!questions.length) {
    return (
      <div className="text-center py-20">
        No questions found. Check your connection.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <ProgressBar current={currentIndex + 1} total={questions.length} />
        <div
          className={`font-mono text-xl font-bold ml-4 ${timeLeft < 5 ? "text-red-500" : "text-blue-600"}`}
        >
          {timeLeft}s
        </div>
      </div>

      {currentQuestion && (
        <QuestionCard
          question={currentQuestion.question}
          options={currentQuestion.options}
          onAnswer={(selected) =>
            nextQuestion(selected === currentQuestion.correctAnswer)
          }
          selectedAnswer={null}
        />
      )}
    </div>
  );
};

export default Assessment;
