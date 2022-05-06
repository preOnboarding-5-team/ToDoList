import styles from './Card.module.scss';

export default function Card(prop) {
  const { todo, color } = prop;
  const done = todo.filter((todoItem) => todoItem.done).length;
  const percent = (done / todo.length) * 100;

  return (
    <div className={styles.card}>
      <p className={styles.totalTasks}>{todo.length} tasks</p>
      <p className={styles.categoryTitle}>{todo[0].category}</p>
      <div className={styles.progress}>
        <span
          className={styles.progressBar}
          style={{
            width: `${percent}%`,
            backgroundColor: [color],
          }}
        />
      </div>
      <div className={styles.percentage}>{Math.floor(percent)}%</div>
    </div>
  );
}
