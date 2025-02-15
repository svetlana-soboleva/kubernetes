import { useEffect, useState } from "react";
import { Note, NoteType } from "./components/Note";
import { deleteNoteById, getNotes, postNote } from "./api/api";
import "./index.css";
import { AddNote } from "./components/AddNote";

function App() {
  const [notes, setNotes] = useState<NoteType[]>([]);

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

  const handleColorSelect = async (color: string) => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newNote = {
      title: "",
      text: "",
      date: `${formattedDate} ${formattedTime}`,
      color,
    };
    try {
      const response=await postNote(newNote);
      console.log("New Note Response:", response);
      fetchData();
    } catch (error) {
      console.error("Error adding new note:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 m-8 h-full ">
      <h1 className="text-lg font-extrabold text-indigo-900">Notes</h1>
      <AddNote onColorSelect={handleColorSelect} />

      <div className="flex flex-wrap gap-4 justify-center">
        {notes.length === 0 ? (
          <p>Loading notes...</p>
        ) : (
          notes.map((note) => <Note key={note.id} note={note} onDelete={handleDeleteNote} />)
        )}
      </div>
    </div>
  );
}

export default App;
