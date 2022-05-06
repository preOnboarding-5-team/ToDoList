import { useState, useRef } from 'react';
import styles from './TodoList.module.scss';
import { CheckIcon } from '../../assets/svgs';

const INIT_TODO = [
  {
    id: 1,
    title: '계란 2판 사기',
    done: false,
  },
  {
    id: 2,
    title: '맥북 프로 M1 Max CTO 버전 사기',
    done: false,
  },
  {
    id: 3,
    title: '오늘의 TIL 작성하기',
    done: false,
  },
];

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