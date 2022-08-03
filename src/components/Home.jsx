import React from "react";
import Task from "./Task";
import styles from "./home.module.scss";
import moment from "moment";
import Filter from "./Filter";

const Home = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [taskItem, setTaskItem] = React.useState([]);

  const addTask = () => {
    const date = moment().format("DD.MM.Y, HH:mm");
    const taskHeap = [...taskItem];
    taskHeap.push({ title: inputValue, date, active: true });

    setTaskItem(taskHeap);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.filter}>
            <Filter />
          </div>
          <div className={styles.inner}>
            <h1 className={styles.title}>TODUSHKA HUUSHKA</h1>
            <div className={styles.input__inner}>
              <input
                onChange={e => setInputValue(e.target.value)}
                className={styles.input}
                placeholder="Введите задачу..."
                type="text"
              />
              <button onClick={addTask}>добавить задачу</button>
            </div>

            <div className={styles.task__inner}>
              {taskItem.map((obj, i) => (
                <Task {...obj} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
