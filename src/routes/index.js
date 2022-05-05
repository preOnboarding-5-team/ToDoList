import styles from './Routes.module.scss';
import TodoList from './TodoList';
import Menu from './Menu';


function App() {
  return (
    <div className={styles.app}>
      <Menu />
      <TodoList />
    </div>
  );
}

export default App;
