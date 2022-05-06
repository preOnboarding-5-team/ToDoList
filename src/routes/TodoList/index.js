import { useState } from 'react';
import styles from './TodoList.module.scss';
import { CheckIcon } from '../../assets/svgs';
import Category from '../../components/category/Category';

const INIT_TODO = [
  {
    id: 1,
    title: '계란 2판 사기',
    category: '쇼핑',
    done: false,
  },
  {
    id: 2,
    title: '맥북 프로 M1 Max CTO 버전 사기',
    category: '쇼핑',
    done: false,
  },
  {
    id: 3,
    title: '오늘의 TIL 작성하기',
    category: '공부',
    done: false,
  },
  {
    id: 4,
    title: '숨쉬기',
    category: '운동',
    done: false,
  },
  {
    id: 5,
    title: '우유사기',
    category: '쇼핑',
    done: false,
  },
  {
    id: 6,
    title: '러닝머신 뛰기',
    category: '운동',
    done: false,
  },
  {
    id: 7,
    title: '풀업하기',
    category: '운동',
    done: false,
  },
  {
    id: 8,
    title: '벤치프레스하기',
    category: '운동',
    done: false,
  },
];
const CATEGORIES = ['쇼핑', '공부', '운동'];
function TodoList() {
  const [todoList, setTodoList] = useState(INIT_TODO);
  const [categories, setCategories] = useState(CATEGORIES);

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
