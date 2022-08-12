import React, { useState } from "react";
import { Note } from "../Note/Note";
import styles from "./ListNotes.module.css";

export const ListNotes = ({ notes }) => {
  // Extract counter for !completed notes
  const notCompletedNotes = notes.filter((note) => note.complete !== true);
  const numberNotCompleted = notCompletedNotes.length;

  // Handlers functions
  const deleteNote = () => {};
  return (
    <div className={styles.list}>
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            title={note.content}
            toDelete={deleteNote}
            completed={note.complete}
          />
        );
      })}
      <div className={styles.counter}>
        <p>{numberNotCompleted} items left</p>
        <p>Clear completed</p>
      </div>
    </div>
  );
};
