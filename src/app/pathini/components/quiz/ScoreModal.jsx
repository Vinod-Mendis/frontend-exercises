"use client";

import {createPortal} from "react-dom";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScoreModal({ score, onRestart }) {
  const [modalContainer, setModalContainer] = useState(null);

  useEffect(() => {
    const container = document.createElement("div");
    container.id = "modal-root";
    document.body.appendChild(container);
    setModalContainer(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  if (!modalContainer) return null;

  const scoreStyle = score > 0 
    ? "text-green-600 text-2xl font-bold" 
    : "text-red-600 text-xl font-bold";

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-4">
          {score > 0 ? "Congratulations!" : "Better Luck Next Time!"}
        </h2>
        {score > 0 ? 
          <Image 
          src="/assets/3d-cup.png" 
          alt="Congratulations"
          className="mx-auto mb-4"
          width={100}
          height={100}
          />
        : <Image 
        src="/assets/3d-sad.png" 
        alt="Congratulations"
        className="mx-auto mb-4"
        width={100}
        height={100}
        />}
        <p className={`mb-4 font-sans ${score > 0 ? "text-green-600" : "text-red-600"}`}>{score > 0 ? `Your score: ${score}` : "Try again to improve your score!"}</p>
       <div className="flex justify-center">
            {score >0 ? 
            
            <button
                onClick={onRestart}
                className="flex px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
                >
                Restart
                <img 
                    src="/assets/restart-icon.png"
                    alt="restart"
                    className="w-5 h-5 ml-2"
                />
            
            </button> : 
            <button
                onClick={onRestart}
                className="flex px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                >
                Try Again
                <img 
                    src="/assets/restart-icon.png"
                    alt="restart"
                    className="w-5 h-5 ml-2"
                />
            
            </button>}
       </div>
      </div>
    </div>,document.body,
    
  );
}

