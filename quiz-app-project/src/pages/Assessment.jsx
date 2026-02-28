import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchQuizQuestions } from "../services/api";
import { decodeHtml, shuffleArray } from "../utilities/helpers.js";
import { saveQuizResult } from "../utilities/storage";
import useQuiz from "../hooks/useQuiz";
import QuestionCard from "../components/assessment/QuestionCard";
import ProgressBar from "../components/assessment/ProgressBar";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Assessment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const config = location.state || { category: "", difficulty: "medium" };
  const { category, difficulty, categoryName } = config;

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    let isMounted = true;
    const getQuestions = async () => {
      setLoading(true);
      const data = await fetchQuizQuestions(10, category, difficulty);

      if (isMounted) {
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
        setLoading(false);
      }
    };
    getQuestions();
    return () => {
      isMounted = false;
    };
  }, [category, difficulty]);

  const {
    currentQuestion,
    currentIndex,
    isFinished,
    score,
    timeLeft,
    nextQuestion,
  } = useQuiz(questions);

  useEffect(() => {
    if (isFinished && questions.length > 0) {
      saveQuizResult({
        score: score,
        total: questions.length,
        categoryName: categoryName || "General Knowledge",
        difficulty: difficulty,
      });
      navigate("/results", {
        state: { finalScore: score, total: questions.length },
      });
    }
  }, [isFinished, score, questions.length, categoryName, difficulty, navigate]);

  if (loading) return <LoadingSpinner />;

  if (!questions || questions.length === 0) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold text-gray-700">Loading API...</h2>
        <p className="text-gray-500">
          If this persists, your IP might be rate-limited.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="grow">
          <ProgressBar current={currentIndex + 1} total={questions.length} />
        </div>

        <div
          className={`font-mono text-xl font-black ${timeLeft < 10 ? "text-red-600 animate-pulse" : "text-blue-600"} flex items-center gap-2 justify-center md:justify-end`}
        >
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            Time
          </span>
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
        />
      )}
    </div>
  );
};

export default Assessment;
