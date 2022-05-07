import { useState, useRef } from 'react';
import styles from './TodoList.module.scss';
import Category from '../../components/category/Category';
import Task from '../../components/task/Task';
import TodoWrite from '../../components/TodoWrite';
import AddButton from '../../components/button-add';

function TodoList({ INIT_TODO, CATEGORIES }) {
  const [todoList, setTodoList] = useState(INIT_TODO);
  const [categories] = useState(CATEGORIES);
  const [isWriting, setIsWriting] = useState(false);

  const taskListRef = useRef();

  return (
    <div className={styles.todoList}>
      <input className="button" />
      <div className={styles.centering}>
        <h1>Hi! this is your assignment.</h1>
        <p className={styles.tasksTitle}>CATEGORIES</p>
        <Category categories={categories} todoList={todoList} />
        <p className={styles.tasksTitle}>TODAY&apos;S TASK</p>
        <Task containerRef={taskListRef} todoList={todoList} setTodoList={setTodoList} categories={categories} />
        <AddButton isWriting={isWriting} setIsWriting={setIsWriting} />
      </div>
      {isWriting && (
        <TodoWrite
          todoList={todoList}
          setTodoList={setTodoList}
          setIsWriting={setIsWriting}
          CATEGORY={categories}
          taskListRef={taskListRef}
        />
      )}
    </div>
  );
}

export default TodoList;
