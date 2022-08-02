import React from "react";
import Task from "./Task";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <h1 className={styles.title}>TODUSHKA HUUSHKA</h1>
            <div className={styles.input__inner}>
              <input className={styles.input} placeholder="Введите задачу..." type="text" />
              <button>добавить задачу</button>
            </div>
            <div className={styles.task__inner}>
              <Task />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
