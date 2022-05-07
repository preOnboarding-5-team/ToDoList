
import { useState } from 'react';
import styles from './TodoList.module.scss';
import Category from '../../components/category/Category';
import Task from '../../components/task/Task';

import { CheckIcon } from '../../assets/svgs';

function TodoList({ INIT_TODO, CATEGORIES }) {
  const [todoList, setTodoList] = useState(INIT_TODO);
  const [categories] = useState(CATEGORIES);
  const [isWriting, setIsWriting] = useState(false);

  const handleAddClick = () => {
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
        <Task todoList={todoList} setTodoList={setTodoList} categories={categories} />
        <button type="button" className={styles.addButton} onClick={handleAddClick} aria-label="Add button" />
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
                    border: `2px solid ${categories.find((v) => v.category === todo.category).color}`,
                    backgroundColor: todo.done
                      ? `${categories.find((v) => v.category === todo.category).color}`
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
        <TodoWrite todoList={todoList} setTodoList={setTodoList} setIsWriting={setIsWriting} CATEGORY={categories} />
      )}
    </div>
  );
}

export default TodoList;
