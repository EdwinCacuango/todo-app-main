import React from "react";
import styles from "./Note.module.css";

export const Note = ({ title, completed }) => {
  let activeCheck = "";
  let active = "";
  if (completed) {
    activeCheck = styles.noteCheckActive;
    active = styles.activeText;
  }

  return (
    <div className={styles.note}>
      <div className={`${styles.noteText} ${active}`}>
        <button className={`${styles.noteCheck} ${activeCheck}`}>
          {completed && <img src="/icon-check.svg" />}
        </button>
        <p>{title}</p>
      </div>
      <button className={styles.noteDeleted}>
        <img src="./icon-cross.svg" />
      </button>
    </div>
  );
};
