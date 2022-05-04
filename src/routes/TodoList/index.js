import styles from './TodoList.module.scss';
import Task from '../../components/task/Task';

function TodoList() {
  return (
    <div className={styles.todoList}>
      <div className={styles.centering}>
        <Task />
      </div>
    </div>
  );
}

export default TodoList;
