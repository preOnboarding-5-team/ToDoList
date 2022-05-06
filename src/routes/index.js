import styles from './Routes.module.scss';
import TodoList from './TodoList';
import cn from 'classnames';
import { INIT_TODO, CATEGORY } from '../data/data';

function App() {
  return (
    <div className={cn(styles.app)}>
      <TodoList INIT_TODO={INIT_TODO} CATEGORY={CATEGORY} />
    </div>
  );
}

export default App;
