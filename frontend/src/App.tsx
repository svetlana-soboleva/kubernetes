import { useEffect, useState } from "react";
import { Note } from "./components/Note";
import { getNotes } from "./api/api";

function App() {

  const [notes, setNotes] = useState([])

  useEffect( () => {
    const fetchData = async () => {
      try{

        const result = await getNotes();
        setNotes(result);
      } catch(error){
        console.error('Error fetching notes:', error);
      }
  
    };
  
    fetchData();
  }, [])
  
  return (
    <>
      <h1>My notes</h1>
      <label htmlFor="">Search</label>
      <input type="text" />
      <p>Filter</p>
      {notes.length === 0 ? ( 
        <p>Loading notes...</p>
      ) : ( <Note notes={notes} />)}
     
    </>
  );
}

export default App;
