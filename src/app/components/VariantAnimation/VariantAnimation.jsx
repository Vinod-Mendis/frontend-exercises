/** @format */

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  fadeInScale: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } },
  slideLeft: { x: -100, opacity: 0, transition: { duration: 0.5 } },
  rotate: { rotate: 180, opacity: 0, transition: { duration: 0.5 } },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.5 },
  },
};

export default function VariantAnimation() {
  const [animation, setAnimation] = useState("fadeInScale");

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <motion.div
        key={animation}
        variants={variants}
        initial={animation}
        animate="visible"
        className="w-64 p-4 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 text-left mb-2">
          Framer Motion
        </h2>
        <p className="text-sm text-gray-600 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>

      <div className="flex absolute bottom-0 gap-2">
        <button
          onClick={() => setAnimation("fadeInScale")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Fade & Scale
        </button>
        <button
          onClick={() => setAnimation("slideLeft")}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
          Slide Left
        </button>
        <button
          onClick={() => setAnimation("rotate")}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition">
          Rotate
        </button>
      </div>
    </div>
  );
}

//  Individual animation with invidual variants



// Define the different variants for each animation
// const variants = {
//   fadeInScale: {
//     initial: { opacity: 0, scale: 0.5 },
//     animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   },
//   slideLeft: {
//     initial: { x: -100, opacity: 0 },
//     animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
//   },
//   rotate: {
//     initial: { rotate: 180, opacity: 0 },
//     animate: { rotate: 0, opacity: 1, transition: { duration: 0.5 } },
//   },
// };

// export default function VariantAnimation() {
//   const [animation, setAnimation] = useState("fadeInScale");

//   return (
//     <div className="flex flex-col items-center gap-4">
//       <motion.div
//         variants={variants[animation]} // Apply the selected variant
//         initial="initial"              // Start with initial state
//         animate="animate"              // Animate to the final state
//         className="w-64 p-4 bg-white shadow-lg rounded-2xl border border-gray-200"
//       >
//         <h2 className="text-xl font-bold text-gray-800 text-left mb-2">Framer Motion</h2>
//         <p className="text-sm text-gray-600 text-left">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </motion.div>

//       <div className="flex gap-2">
//         <button
//           onClick={() => setAnimation("fadeInScale")}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
//         >
//           Fade & Scale
//         </button>
//         <button
//           onClick={() => setAnimation("slideLeft")}
//           className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
//         >
//           Slide Left
//         </button>
//         <button
//           onClick={() => setAnimation("rotate")}
//           className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
//         >
//           Rotate
//         </button>
//       </div>
//     </div>
//   );
// }
