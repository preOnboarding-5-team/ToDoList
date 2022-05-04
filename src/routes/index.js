import styles from './Routes.module.scss';
import TodoList from './TodoList';
import Menu from './Menu';

function App() {
  return (
    <div className={styles.app}>
      <TodoList />
      <Menu />
    </div>
  );
}

export default App;
