import styles from './Routes.module.scss';
import TodoList from './TodoList';
import cn from 'classnames';

function App() {
  return (
    <div className={cn(styles.app)}>
      <TodoList />
    </div>
  );
}

export default App;
