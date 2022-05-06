import { useState, useRef } from 'react';
import styles from './TodoList.module.scss';
import Task from '../../components/task/Task';

function TodoList() {
  const [openMenu, setOpenMenu] = useState(false);
  const clickMenuBtn = useRef();

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    if(openMenu) {
      clickMenuBtn.current.style = 'transform: scale(0.85, 0.85) translateX(280px);';
    }else {
      clickMenuBtn.current.style = 'transform: scale(1, 1) translateX(0px);';
    }
  };

  return (
    <div className = {styles.todoListWrapper}>
      <div className={styles.todoList} ref={clickMenuBtn}>
        <div className={styles.menuIconWrapper}>
          <label htmlFor='menuIcon' className={styles.menuIcon}>=</label>
          <input name='menuIcon' type='checkbox' checked={openMenu} onChange={handleOpenMenu} />
        </div>
        <div className={styles.centering}>
          <Task />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
