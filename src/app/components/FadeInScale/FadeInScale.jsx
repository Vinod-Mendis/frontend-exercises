/** @format */

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FadeInScale() {
  const [key, setKey] = useState(0);

  // Restart or reset animation
  const resetAnimation = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <motion.div
        key={key}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 p-4 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 text-left mb-2">
          Framer Motion
        </h2>
        <p className="text-sm text-gray-600 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>
      <button
        onClick={resetAnimation}
        className="absolute bottom-0 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
        Reset Animation
      </button>
    </div>
  );
}
