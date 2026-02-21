import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuizQuestions } from "../services/api";
import { decodeHtml, shuffleArray } from "../utilities/helpers";
import useQuiz from "../hooks/useQuiz";
import QuestionCard from "../components/assessment/QuestionCard";
import ProgressBar from "../components/assessment/ProgressBar";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Assessment = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await fetchQuizQuestions(10);
        if (data && data.length > 0) {
          const formatted = data.map((q) => ({
            question: decodeHtml(q.question),
            options: shuffleArray([
              ...q.incorrect_answers,
              q.correct_answer,
            ]).map((opt) => decodeHtml(opt)),
            correctAnswer: decodeHtml(q.correct_answer),
          }));
          setQuestions(formatted);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    getQuestions();
  }, []);

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

  if (loading) return <LoadingSpinner />;

  // CRASH GUARD: If questions didn't load, show this instead of a white page
  if (!questions || questions.length === 0) {
    return (
      <div className="text-center p-10 text-black">
        Opps! Make sure your device is connected to the internet.
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <ProgressBar current={currentIndex + 1} total={questions.length} />
      </div>

      <div className="flex justify-end mb-4">
        <span
          className={`text-xl font-bold ${timeLeft < 5 ? "text-red-500 animate-pulse" : "text-blue-600"}`}
        >
          Timer: {timeLeft}s
        </span>
      </div>

      {currentQuestion ? (
        <QuestionCard
          question={currentQuestion.question}
          options={currentQuestion.options}
          onAnswer={(selected) =>
            nextQuestion(selected === currentQuestion.correctAnswer)
          }
        />
      ) : (
        <div>Loading next question...</div>
      )}
    </div>
  );
};

export default Assessment;
