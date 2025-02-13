import { useEffect, useState } from "react";
import { Note, NoteType } from "./components/Note";
import { deleteNoteById, getNotes, postNote } from "./api/api";
import "./index.css";

function App() {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [newNote, setNewNote] = useState("");

  const fetchData = async () => {
    try {
      const result = await getNotes();
      setNotes(result);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleBtnClick = async () => {
    if (newNote.trim() === "") {
      alert("Note cannot be empty!");
      return;
    }
    try {
      await postNote({ text: newNote });
      setNewNote("");
      fetchData();
    } catch (error) {
      console.error("Error adding new note:", error);
    }
  };

  const handleDeleteNote = async (id: number) => {
    try {
      const response = await deleteNoteById(id);
      if (response.ok) {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      }
    } catch (error) {
      console.error(`Error deleting the note: ${error}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 m-8">
      <h1>My notes</h1>
      <div className="flex flex-row justify-center items-center gap-2 ">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-400"
        >
          New note
        </label>
        <input
          onChange={(e) => setNewNote(e.target.value)}
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=""
          required
        />
        <button
          onClick={handleBtnClick}
          type="button"
          className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {notes.length === 0 ? (
          <p>Loading notes...</p>
        ) : (
          notes.map((note) => <Note note={note} onDelete={handleDeleteNote} />)
        )}
      </div>
    </div>
  );
}

export default App;
