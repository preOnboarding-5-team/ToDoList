import { useState, useRef } from 'react';
import styles from './Routes.module.scss';
import TodoList from './TodoList';
import Menu from './Menu';

function App() {
  const [openMenu, setOpenMenu] = useState(true);
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
    <div className={styles.app}>
      <div className={styles.componentWrapper}>
        <Menu {... {handleOpenMenu}} />
        <TodoList {... {openMenu, clickMenuBtn, handleOpenMenu}} />
      </div>
    </div>
  );
}

export default App;
