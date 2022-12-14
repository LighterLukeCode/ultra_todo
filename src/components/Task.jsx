import React from "react";
import styles from "./home.module.scss";
import check from "../assets/check.svg";
import trash from "../assets/trash.svg";
import close from "../assets/close.svg";

const Task = ({ title, date }) => {
  return (
    <>
      <ul className={styles.task__inner}>
        <li className={styles.task__item}>
          <p className={styles.text}>{title}</p>
          <span>{date}</span>
          <button className={styles.action__btn}>
            <img src={check} alt="check" />
          </button>
          <button className={styles.action__btn}>
            <img src={close} alt="trash" />
          </button>
        </li>
      </ul>
    </>
  );
};

export default Task;
