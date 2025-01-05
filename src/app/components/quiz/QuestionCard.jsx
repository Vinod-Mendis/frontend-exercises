"use client";

export default function QuestionCard({ question, selectedAnswer, onAnswerSelect }) {
  return (
    <div className="border p-6 rounded-lg shadow-md bg-white mt-5">
      <h2 className="text-lg font-bold mb-4">
        Question {question.id} - {question.text}
      </h2>
      {question.options.map((option, index) => (
        <div
          key={index}
          className={`p-2 rounded-lg cursor-pointer border mt-3 transition-colors duration-200 ${
            selectedAnswer === index
              ? "bg-purple-100 border-purple-600"
              : "border-gray-300 hover:bg-gray-100 hover:border-purple-400"
          }hover:shadow-lg hover:-translate-y-2 `}
          onClick={() => onAnswerSelect(index)}
        >
          {option}
        </div>
      ))}
    </div>
  );
}


