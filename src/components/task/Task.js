import { useState } from 'react';
import styles from '../../routes/TodoList/TodoList.module.scss';
import { CheckIcon } from '../../assets/svgs';

const INIT_TODO = [
  {
    id: 1,
    title: '계란 2판 사기',
    done: false,
  },
  {
    id: 2,
    title: '맥북 프로 M1 Max CTO 버전 사기',
    done: false,
  },
  {
    id: 3,
    title: '오늘의 TIL 작성하기',
    done: false,
  },
  {
    id: 4,
    title: '계란 2판 사기',
    done: false,
  },
  {
    id: 5,
    title: '맥북 프로 M1 Max CTO 버전 사기',
    done: false,
  },
  {
    id: 6,
    title: '오늘의 TIL 작성하기',
    done: false,
  },
  {
    id: 7,
    title: '계란 2판 사기',
    done: false,
  },
  {
    id: 8,
    title: '맥북 프로 M1 Max CTO 버전 사기',
    done: false,
  },
  {
    id: 9,
    title: '오늘의 TIL 작성하기',
    done: false,
  },
];

function Task() {
  const [todoList, setTodoList] = useState(INIT_TODO);
  const swiped = false;

  const deleteList = (e) => {
    const { dataset, checked } = e.currentTarget;
    const { id } = dataset;
    if (swiped) {
      const deletedList = [...todoList.filter(id)];
      setTodoList(deletedList);
    }
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
    <>
      <h1>Hi! this is your assignment.</h1>
      <p className={styles.tasksTitle}>Today&apos;s</p>
      <ul className={styles.tasks}>
        {todoList.map((todo) => (
          <li key={`todo-${todo.id}`} className={styles.task}>
            <div className={styles.checkboxWrapper}>
              <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
              <CheckIcon />
            </div>
            <p className={styles.title}>{todo.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Task;
