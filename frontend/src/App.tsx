import { Note } from "./components/Note";

function App() {
  return (
    <>
      <h1>My notes</h1>
      <label htmlFor="">Search</label>
      <input type="text" />
      <p>Filter</p>
      <Note />
    </>
  );
}

export default App;
