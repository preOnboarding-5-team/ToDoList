import styles from './Routes.module.scss';
import TodoList from './TodoList/index';
import { INIT_TODO, CATEGORIES } from '../data/data';

function App() {
  return (
    <div className={styles.app}>
      <TodoList INIT_TODO={INIT_TODO} CATEGORIES={CATEGORIES} />
    </div>
  );
}

export default App;
