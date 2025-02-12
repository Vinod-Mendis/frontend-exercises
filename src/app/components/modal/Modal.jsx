/** @format */

"use client";

import { useState } from "react";
import ModalCard from "./ModalCard";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("success");

  const showModal = (type) => {
    setModalType(type);
    setIsOpen(true);
  };

  return (
    <main className="flex items-center justify-center gap-4">
      <button
        onClick={() => showModal("success")}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Show Success Modal
      </button>

      <button
        onClick={() => showModal("warning")}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
        Show Warning Modal
      </button>

      <ModalCard
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        type={modalType}
      />
    </main>
  );
}
