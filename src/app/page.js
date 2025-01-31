/** @format */
"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/navbar/NavBar";
import Modal from "./components/modal/Modal";
// import the your component here (the component file name should not be Page.jsx)

export default function Home() {
  const [selectedExercise, setSelectedExercise] = useState("Navbar");

  const handleSelect = (exercise) => {
    setSelectedExercise(exercise);
  };
  console.log(selectedExercise);
  return (
    <div className="w-screen h-screen p-5 flex gap-5">
      <Sidebar onSelectFunction={handleSelect} />
      <div className="w-full h-full rounded-xl border shadow-xl  p-4">
        <h1 className="text-4xl mb-3 font-semibold">{selectedExercise}.</h1>
        <hr />
        <div className="w-full h-5/6 mt-10 p-20 bg-slate-50 rounded-xl flex justify-center items-center ">
          {selectedExercise === "Navbar" && <Navbar />}
          {selectedExercise === "Modal" && <Modal />}
          {/* Go to the sidebar component and add the your component name in the exercises array. */}
          {/* then conditionally render the component as done above. */}
        </div>
      </div>
    </div>
  );
}
