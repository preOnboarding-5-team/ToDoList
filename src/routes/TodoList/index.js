import { useState } from 'react';
import styles from './TodoList.module.scss';
import { CheckIcon } from '../../assets/svgs';
import AddButton from '../../components/button-add';
import TodoWrite from '../../components/TodoWrite';

function TodoList({ INIT_TODO, CATEGORY }) {
  const [todoList, setTodoList] = useState(INIT_TODO);
  const [isWriting, setIsWriting] = useState(false);

  const handleChange = (e) => {
    const { dataset, checked } = e.currentTarget;
    const { id } = dataset;

    setTodoList((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === Number(id));
      const newList = [...prev];
      newList[targetIndex].done = checked;
      return newList;
    });
  };

  return (
    <div className={styles.todoList}>
      <div className={styles.centering}>
        <h1>Hi! this is your assignment.</h1>
        <ul className={styles.tasks}>
          <p className={styles.tasksTitle}>Today&apos;s</p>
          {todoList.map((todo) => (
            <li key={`todo-${todo.id}`} className={styles.task}>
              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  data-id={todo.id}
                  onChange={handleChange}
                  style={{
                    border: `2px solid ${CATEGORY.find((v) => v.category === todo.category).color}`,
                    backgroundColor: todo.done
                      ? `${CATEGORY.find((v) => v.category === todo.category).color}`
                      : 'transparent',
                  }}
                />
                <CheckIcon />
              </div>
              <p className={styles.title}>{todo.title}</p>
            </li>
          ))}
        </ul>
        <AddButton isWriting={isWriting} setIsWriting={setIsWriting} />
      </div>
      {isWriting && (
        <TodoWrite todoList={todoList} setTodoList={setTodoList} setIsWriting={setIsWriting} CATEGORY={CATEGORY} />
      )}
    </div>
  );
}

export default TodoList;
