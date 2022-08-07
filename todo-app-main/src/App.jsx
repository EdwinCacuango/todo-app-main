import React from "react";
import "./App.css";
import { ListNotes } from "./components/ListNotes/ListNOtes";
import { Filters } from "./components/Filters/Filters";
import { NewNote } from "./components/NewNote/NewNote";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>To do</h1>
        <img src="./icon-moon.svg" />
      </div>
      <NewNote />
      <ListNotes />
      <Filters></Filters>
      <p className="instruction">Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
