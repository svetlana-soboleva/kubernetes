import { useEffect, useRef, useState } from "react";
import { updateNote } from "../api/api";

export interface NoteType {
  id: number;
  title: string;
  text: string;
  date: string;
  color: string;
}

interface NoteProps {
  note: NoteType;
  onDelete: (id: number) => void;
}
export const Note = ({ note, onDelete }: NoteProps) => {
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (noteRef.current && !noteRef.current.contains(event.target as Node)) {
        if (title !== note.title || text !== note.text) {
          updateNote({ id: note.id, title, text, color: note.color });
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [title, text, note.id, note.color, note.text, note.title]);

  return (
    <div>
      <div
        ref={noteRef}
        key={note.id}
        className={`w-64 p-4 rounded-lg shadow-md ${note.color} flex flex-col gap-2`}
      >
        <div className="flex flex-row justify-between text-gray-800 gap-2">
          <input
            type="text"
            className="w-full bg-transparent text-md font-bold focus:outline-none"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={() => onDelete(note.id)}
            className="w-8 h-8 cursor-pointer rounded-full bg-gray-700 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
            aria-label="edit note"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trash"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2l8 0a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7l0 -3a1 1 0 0 1 1 -1l4 0a1 1 0 0 1 1 1l0 3" />
            </svg>
          </button>
        </div>
        <textarea
          className="w-full bg-transparent resize-none focus:outline-none"
          placeholder="Write something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div>
          <div className="flex items-center gap-2 justify-between text-gray-800 dark:text-gray-100">
            <p className="text-sm text-gray-500">{note.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
