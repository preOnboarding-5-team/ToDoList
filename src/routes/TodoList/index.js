
import { useState } from 'react';
import styles from './TodoList.module.scss';
import Category from '../../components/category/Category';
import Task from '../../components/task/Task';

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
        <Task todoList={todoList} setTodoList={setTodoList} categories={categories} />
        <button type="button" className={styles.addButton} onClick={handleAddClick} aria-label="Add button" />
      </div>
    </div>
  );
}

export default TodoList;
