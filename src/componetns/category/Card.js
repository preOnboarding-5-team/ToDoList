import { useState } from 'react';
import styles from './Card.module.scss';

export default function Card(prop) {
  const { todo } = prop;
  const done = todo.filter((todoItem) => todoItem.done).length;
  const percent = (done / todo.length) * 100;

  return (
    <div className={styles.card}>
      <p className={styles.totalTasks}>{todo.length} tasks</p>
      <p className={styles.categoryTitle}>{todo[0].category}</p>
      <div className={styles.slider}>
        <div className={styles.sliderBase} />
        <div className={styles.sliderColor} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
