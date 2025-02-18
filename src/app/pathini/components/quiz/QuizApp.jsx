"use client";

import { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import ScoreModal from "./ScoreModal";

const questions = [
  { id: 1, text: "Known for the Eiffel Tower and Louvre Museum, which city is France's capital?", options: ["Madrid", "Paris", "Rome", "Berlin"], correct: 1 },
  { id: 2, text: "What is 3 x 3?", options: ["6", "9", "12", "15"], correct: 1 },
  { id: 3, text: "What is 5 - 3?", options: ["2", "3", "4", "1"], correct: 0 },
  { id: 4, text: "What is 10 / 2?", options: ["2", "3", "5", "4"], correct: 2 },
  { id: 5, text: "Which is the largest planet in the solar system?", options: ["Mars", "Earth", "Jupiter", "Venus"], correct: 2 },
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      handleFinish();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswerSelect = (index) => {
    setAnswers({ ...answers, [currentQuestion]: index });
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleFinish = () => {
    let calculatedScore = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) calculatedScore += 10;
    });
    setScore(calculatedScore);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScore(null);
    setTimeLeft(60);
  };

  return (
    <div className="p-6 max-w-xl mx-auto border rounded-lg shadow mt-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold">Mock Exam </h1>
        </div>
        <div className="text-gray-600 flex items-center">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9V5a1 1 0 112 0v4a1 1 0 01-.293.707L8.293 11a1 1 0 101.414 1.414l1.293-1.293A1 1 0 0010 9z" />
          </svg>
          <span>{timeLeft} seconds</span>
        </div>
      </div>

      <ProgressBar progress={((currentQuestion + 1) / questions.length) * 100} />

      {score === null ? (
        <>
          <QuestionCard
            question={questions[currentQuestion]}
            selectedAnswer={answers[currentQuestion]}
            onAnswerSelect={handleAnswerSelect}
          />
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 rounded-full border-purple-500 border-2 text-purple-500 hover:bg-purple-500 hover:text-white ${
                currentQuestion === 0 ? "bg-white" : "bg-white text-purple-500"
              }`}
            >
              Previous
            </button>
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-white border-2 border-purple-500 text-purple-500  hover:bg-purple-500 hover:text-white rounded-full w-[90px]"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="px-4 py-2 bg-purple-500 text-white rounded"
              >
                Finish
              </button>
            )}
          </div>
        </>
      ) : (
        <ScoreModal score={score} onRestart={restartQuiz} />
      )}
    </div>
  );
}
