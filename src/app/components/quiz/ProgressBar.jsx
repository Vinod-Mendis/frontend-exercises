"use client";

export default function ProgressBar({ progress }) {
  return (
    <div className="relative w-full h-3 bg-gray-200 rounded-full mb-4">
      <div
        className="absolute top-0 left-0 h-full bg-purple-500 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
