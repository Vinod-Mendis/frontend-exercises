/** @format */
"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [selectedExercise, setSelectedExercise] = useState('Navbar');

  const handleSelect = (exercise) => {
    setSelectedExercise(exercise);
  };
  console.log(selectedExercise);
  return (
    <div className="w-screen h-screen p-5 flex gap-5">
      <Sidebar onSelectFunction={handleSelect} />
      <div className="w-full h-full rounded-xl border shadow-xl p-4">
        <h1 className="text-4xl mb-3 font-semibold">{selectedExercise}.</h1>
        <hr />
      </div>
    </div>
  );
}
