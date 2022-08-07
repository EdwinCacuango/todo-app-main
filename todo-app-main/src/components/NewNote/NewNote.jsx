import React from "react";
import styles from "./NewNote.module.css";
export const NewNote = () => {
  return (
    <div className={styles.newNote}>
      <button></button>
      <input placeholder="Create a new todo..." />
    </div>
  );
};
