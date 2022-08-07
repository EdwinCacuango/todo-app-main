import React, { useState } from "react";
import NOTES from "./data/notes.json";
import { ListNotes } from "./components/ListNotes/ListNotes";
import { Filters } from "./components/Filters/Filters";
import { NewNote } from "./components/NewNote/NewNote";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(NOTES);
  const newNote = (element) => {
    setNotes([...notes, element]);
  };
  return (
    <div className="App">
      <div className="main">
        <div className="title">
          <h1>To do</h1>
          <img src="./icon-moon.svg" />
        </div>
        <NewNote newNote={{ notes, newNote }} />
        <ListNotes notes={notes} />
        <Filters></Filters>
        <p className="instruction">Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
