import React, { useState } from "react";
import { Note } from "../Note/Note";
import NOTES from "../../data/notes.json";
import styles from "./ListNotes.module.css";

export const ListNotes = () => {
  const [notes, setNotes] = useState(NOTES);
  return (
    <div className={styles.list}>
      {notes.map((note) => {
        return <Note key={note.id} title={note.content} />;
      })}
      <div className={styles.counter}>
        <p>5 items left</p>
        <p>Clear completed</p>
      </div>
    </div>
  );
};
