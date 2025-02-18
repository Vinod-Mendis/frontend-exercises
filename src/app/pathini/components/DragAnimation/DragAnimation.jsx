/** @format */
"use client";

import { motion } from "framer-motion";

export default function DragAnimation() {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <motion.div
        drag // Enable dragging
        dragConstraints={{
          left: -100, // Set horizontal left constraint
          right: 100, // Set horizontal right constraint
          top: -100, // Set vertical top constraint
          bottom: 100, // Set vertical bottom constraint
        }} // Set both horizontal and vertical drag constraints
        className="w-64 p-4 bg-white shadow-lg rounded-2xl border border-gray-200 cursor-move">
        <h2 className="text-xl font-bold text-gray-800 text-left mb-2">
          Framer Motion
        </h2>
        <p className="text-sm text-gray-600 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>
    </div>
  );
}
