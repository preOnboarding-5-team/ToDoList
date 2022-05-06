import { useState } from 'react';
import styles from './TodoList.module.scss';
import { CheckIcon } from '../../assets/svgs';
import Category from '../../components/category/Category';

function TodoList({ INIT_TODO, CATEGORIES }) {
  const [todoList, setTodoList] = useState(INIT_TODO);
  const [categories] = useState(CATEGORIES);

  const handleAddClick = () => {
    // console.log('handleAddClick')
  };

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
      <input className="button" />
      <div className={styles.centering}>
        <h1>Hi! this is your assignment.</h1>
        <p className={styles.tasksTitle}>CATEGORIES</p>
        <Category categories={categories} todoList={todoList} />
        <ul className={styles.tasks}>
          <p className={styles.tasksTitle}>Today&apos;s</p>
          {todoList.map((todo) => (
            <li key={`todo-${todo.id}`} className={styles.task}>
              <div className={styles.checkboxWrapper}>
                <input type="checkbox" checked={todo.done} data-id={todo.id} onChange={handleChange} />
                <CheckIcon />
              </div>
              <p className={styles.title}>{todo.title}</p>
            </li>
          ))}
        </ul>
        <button type="button" className={styles.addButton} onClick={handleAddClick} aria-label="Add button" />
      </div>
    </div>
  );
}

export default TodoList;
