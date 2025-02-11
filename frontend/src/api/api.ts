export const getNotes = async () => {
  const notes = await fetch("http://35.228.137.250:8080/api/v1/notes");
  const data = await notes.json();
  return data;
};

export const postNote = async (body) => {
  try {
    const response = await fetch("http://35.228.137.250:8080/api/v1/notes", {
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
