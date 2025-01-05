/** @format */
"use client";
import React, { useState } from "react";

export default function Sidebar({ onSelectFunction }) {
  const exercises = ["Navbar", "Modal", "Quiz"];
  const [selectedExercise, setSelectedExercise] = useState(null);
  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
    onSelectFunction(exercise)
  };
  

  return (
    <div className=" bg-white h-full w-64 rounded-xl p-4 border shadow-xl">
      <h1 className="my-2 text-3xl font-semibold">Exercises.</h1>
      <hr />
      <div className="mt-4 flex flex-col ">
        {exercises.map((exercise, index) => (
          <button
            key={index}
            className=" text-left p-2 rounded-md hover:bg-gray-100"
            onClick={() => handleSelectExercise(exercise)}>
            {exercise}
          </button>
        ))}
      </div>
    </div>
  );
}
