import { NoteType } from "../components/Note";

//const URL_LOCAL = "http://localhost:8080/api/v1";

//const API_URL = import.meta.env.VITE_API_URL;

//const DEV_URL = "http://35.228.137.250:8080/api/v1";

const API_URL_PROD = "/api";

export const getNotes = async (): Promise<NoteType[]> => {
  const notes = await fetch(`${API_URL_PROD}/notes`);
  const data = await notes.json();
  return data
  .sort(
    (a: NoteType, b: NoteType) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const postNote = async (body: {
  title: string;
  text: string;
  date: string;
  color: string;
}) => {
  try {
    const response = await fetch(`${API_URL_PROD}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    await response.json();
  } catch (error) {
    console.log("Error while posting" + error);
  }
};

export const deleteNoteById = async (id: number) => {
  try {
    const response = await fetch(`${API_URL_PROD}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.statusText}`);
    }
    return response;
  } catch (error) {
    throw new Error(`Error deleting the story: ${error}`);
  }
};

export const updateNote = async (updatedNote: {
  id: number;
  title: string;
  text: string;
  color: string;
}) => {
  try {
    const response = await fetch(`${API_URL_PROD}/notes/${updatedNote.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedNote),
    });

    if (!response.ok) {
      throw new Error("Failed to update note");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating note:", error);
  }
};
