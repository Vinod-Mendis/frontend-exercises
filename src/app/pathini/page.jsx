/** @format */
"use client";

import { useState } from "react";
import Navbar from "./components/navbar/NavBar";
import Modal from "./components/modal/Modal";
import QuizApp from "./components/quiz/QuizApp";
import FadeInScale from "./components/FadeInScale/FadeInScale";
import VariantAnimation from "./components/VariantAnimation/VariantAnimation";
import HoverAnimation from "./components/HoverAnimation/HoverAnimation";
import DragAnimation from "./components/DragAnimation/DragAnimation";
import BouncingAnimation from "./components/BouncingAnimation/BouncingAnimation";
import Sidebar from "../components/Sidebar";
// import the your component here (the component file name should not be Page.jsx)

export default function Home() {
  const [selectedExercise, setSelectedExercise] = useState("Navbar");

  const handleSelect = (exercise) => {
    setSelectedExercise(exercise);
  };
  console.log(selectedExercise);
  return (
    <div className="w-screen h-screen p-5 flex gap-5 overflow-hidden">
      <Sidebar onSelectFunction={handleSelect} />
      <div className="w-full h-full rounded-xl border shadow-xl  p-4">
        <h1 className="text-4xl mb-3 font-semibold">{selectedExercise}.</h1>
        <hr />
        <div className="w-full h-5/6 mt-10 p-20 bg-slate-50 rounded-xl flex justify-center items-center ">
          {selectedExercise === "Navbar" && <Navbar />}
          {selectedExercise === "Modal" && <Modal />}
          {selectedExercise === "Quiz" && <QuizApp />}
          {selectedExercise === "FadeInScale" && <FadeInScale />}
          {selectedExercise === "VariantAnimation" && <VariantAnimation />}
          {selectedExercise === "HoverAnimation" && <HoverAnimation />}
          {selectedExercise === "DragAnimation" && <DragAnimation />}
          {selectedExercise === "BouncingAnimation" && <BouncingAnimation />}
        </div>
      </div>
    </div>
  );
}
