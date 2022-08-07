import React from "react";
import styles from "./Note.module.css";

export const Note = ({ title }) => {
  return (
    <div className={styles.note}>
      <div className={styles.noteText}>
        <button className={styles.noteCheck}></button>
        <p>{title}</p>
      </div>
      <button className={styles.noteDeleted}>
        <img src="./icon-cross.svg" />
      </button>
    </div>
  );
};
