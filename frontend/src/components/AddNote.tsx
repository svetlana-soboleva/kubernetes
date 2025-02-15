import { useState } from "react";

export const AddNote = ({
  onColorSelect,
}: {
  onColorSelect: (color: string) => void;
}) => {
  const colors = [
    "bg-amber-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-purple-300",
    "bg-red-300",
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex flex-col justify-center items-center gap-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <p className="text-gray-400">New note</p>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 
          text-sm font-medium rounded-lg border border-gray-200 bg-gray-800 text-gray-100 shadow-sm 
          hover:bg-gray-700 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        +
      </button>

      {isOpen && (
        <div
          className="absolute top-12 min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="flex gap-2 justify-between">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-5 h-5 rounded-full ${color} border border-gray-300 hover:scale-110 transition`}
                onClick={() => onColorSelect(color)}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
