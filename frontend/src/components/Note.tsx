export interface NoteType {
  id: number;
  text: string;
  date: string;
}

interface NoteProps {
  note: NoteType;
  onDelete: (id: number) => void;
}
export const Note = ({ note, onDelete }: NoteProps) => {
  return (
    <div>
      <div
        key={note.id}
        className="w-full h-64 flex flex-col justify-between bg-pink-200 dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4"
      >
        <div className="flex flex-row justify-between text-gray-800">
          <p className="text-gray-700 text-sm">{note.text}</p>
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
        <div>
          <div className="flex items-center gap-2 justify-between text-gray-800 dark:text-gray-100">
            <p className="text-sm text-gray-700">{note.date}</p>
            <button
              className="w-8 h-8 cursor-pointer rounded-full bg-gray-700 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
              aria-label="edit note"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-pencil"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
