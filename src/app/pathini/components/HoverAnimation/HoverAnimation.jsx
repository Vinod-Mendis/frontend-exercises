/** @format */
"use client";

import { motion } from "framer-motion";

export default function HoverAnimation() {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <motion.div
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.1, opacity: 0.8 }} // Hover effect
        whileTap={{ scale: 0.95 }} // Tap effect
        className="w-64 p-4 bg-white shadow-lg rounded-2xl border border-gray-200 cursor-pointer">
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
