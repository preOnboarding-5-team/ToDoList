import styles from './Routes.module.scss';
import TodoList from './TodoList/index';

function App() {
  return (
    <div className={styles.app}>
      <TodoList />
    </div>
  );
}

export default App;
