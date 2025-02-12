//const URL = "http://localhost:8080/api/v1/notes"

const API_URL = import.meta.env.VITE_API_URL;

export const getNotes = async () => {
  const notes = await fetch(`${API_URL}/notes`);
  const data = await notes.json();
  return data;
};

export const postNote = async (body: { text: string }) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error while posting" + error);
  }
};
