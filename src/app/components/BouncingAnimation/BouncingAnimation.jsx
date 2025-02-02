/** @format */
"use client";

import { motion } from "framer-motion";

export default function BouncingAnimation() {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="bg-green-400 p-10 rounded-full">
        Bouncing Text
      </motion.div>
    </div>
  );
}

