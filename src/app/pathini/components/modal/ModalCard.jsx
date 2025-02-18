/** @format */

"use client";
import Image from "next/image";
import { createPortal } from "react-dom";

const ModalCard = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const modalConfig =
    type === "success"
      ? {
          imagePath: "/assets/ok.png",
          title: "Task Successful",
          description: "Your task has been completed successfully.",
        }
      : {
          imagePath: "/assets/warning.png",
          title: "Are you sure?",
          description: "Are you sure you want to delete your account",
          description2: "This action cannot be undone",
        };

  const closeIconPath = "/assets/close.png";

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300" />

      <div className="relative p-8 rounded-2xl  shadow-xl max-w-md w-full mx-4 transform transition-all duration-300 ease-out bg-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 transition-all duration-300 hover:bg-red-300 hover:rounded-md">
          <Image src={closeIconPath} alt="Close" width={24} height={24} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="bg-green-100 rounded-md p-2">
            <Image
              src={modalConfig.imagePath}
              alt="Success icon"
              width={48}
              height={48}
              className="transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          <h2 className="mt-6 text-2xl font-bold ">{modalConfig.title}</h2>
          <p className="mt-3 text-gray-600">{modalConfig.description}</p>

          <button
            onClick={onClose}
            className="mt-5 w-full bg-white rounded-xl py-3 transition-all duration-300 hover:bg-gray-400 border-2 border-gray-400">
            Got it
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalCard;
