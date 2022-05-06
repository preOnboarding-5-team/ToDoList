import styles from './TodoList.module.scss';
import Task from  '../../components/task/Task';

function TodoList({openMenu, clickMenuBtn, handleOpenMenu}) {

  return (
    <div className={styles.todoList} ref={clickMenuBtn}>
      <div className={styles.menuIconWrapper}>
        <label htmlFor='menuIcon' className={styles.menuIcon}>=</label>
        <input name='menuIcon' type='checkbox' checked={openMenu} onChange={handleOpenMenu} />
      </div>
      <div className={styles.centering}>
        <Task />
      </div>
    </div>
  );
} 

export default TodoList;
