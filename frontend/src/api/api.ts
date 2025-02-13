//const URL_LOCAL = "http://localhost:8080/api/v1";

//const API_URL = import.meta.env.VITE_API_URL;

//const DEV_URL = "http://35.228.137.250:8080/api/v1";

const API_URL_PROD = "/api";

export const getNotes = async () => {
  const notes = await fetch(`${API_URL_PROD}/notes`);
  const data = await notes.json();
  return data;
};

export const postNote = async (body: { text: string }) => {
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
    const data = await response.json();
    console.log(data);
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
    console.log("Deleted" + response);
    return response
  } catch (error) {
    throw new Error(`Error deleting the story: ${error}`);
  }
};
