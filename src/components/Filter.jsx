import React from "react";
import styles from "./home.module.scss";

const Filter = () => {
  return (
    <>
      <button className={styles.filterBtn__active}>Активные</button>
      <button className={styles.filterBtn__complete}>Завершенные</button>
    </>
  );
};

export default Filter;
