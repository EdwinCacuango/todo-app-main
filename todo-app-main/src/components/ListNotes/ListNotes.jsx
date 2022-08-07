import React, { useState } from "react";
import { Note } from "../Note/Note";
import styles from "./ListNotes.module.css";

export const ListNotes = ({ notes }) => {
  const notCompletedNotes = notes.map((note) => note.complete !== true);
  const numberNotCompleted = notCompletedNotes.length;
  return (
    <div className={styles.list}>
      {notes.map((note) => {
        return <Note key={note.id} title={note.content} />;
      })}
      <div className={styles.counter}>
        <p>{numberNotCompleted} items left</p>
        <p>Clear completed</p>
      </div>
    </div>
  );
};
