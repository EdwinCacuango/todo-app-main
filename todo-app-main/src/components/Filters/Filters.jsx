import React from "react";
import styles from "./Filters.module.css";
export const Filters = () => {
  return (
    <div className={styles.filters}>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};
