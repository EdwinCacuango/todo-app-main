import React, { useState } from "react";
import styles from "./NewNote.module.css";

export const NewNote = ({ newNote }) => {
  const [note, setNote] = useState("");

  // Handler functions
  const handleChange = (e) => {
    setNote(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const listIds = newNote.notes.map((el) => el.id);
    const noteObject = {
      id: Math.max(...listIds) + 1,
      content: note,
      complete: false,
    };
    newNote.newNote(noteObject);
    setNote("");
  };
  return (
    <form className={styles.newNote} onSubmit={handleSubmit}>
      <button type="click"></button>
      <input
        placeholder="Create a new todo..."
        value={note}
        onChange={handleChange}
      />
    </form>
  );
};
