import { useState } from 'react';
import styles from '../../routes/TodoList/TodoList.module.scss';
import { CheckIcon } from '../../assets/svgs';
import { INIT_TODO } from './initialData';
import Swiper from './Swiper';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

function Task() {
  const [todoList, setTodoList] = useState(INIT_TODO);

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive>Delete</SwipeAction>
    </TrailingActions>
  );

  // if (localStorage.getItem.length === true) {
  //   localStorage.getItem(todoList);
  // } else {
  //   setTodoList(INIT_TODO);
  // }

  // const swiped = false;

  // const deleteListItem = (e) => {
  //   const { dataset } = e.currentTarget;
  //   const { id } = dataset;
  //   if (swiped) {
  //     const filteredList = [...todoList.filter(id)];
  //     localStorage.removeItem(todoList.id);
  //     setTodoList(filteredList);
  //   }
  // };

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
          <SwipeableList Tag='li' key={`todo-${todo.id}`} className={styles.task}>
            <SwipeableListItem trailingActions={trailingActions()}>
              <div className={styles.checkboxWrapper}>
                <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
                <CheckIcon />
              </div>
              <p className={styles.title}>{todo.title}</p>
            </SwipeableListItem>
          </SwipeableList>
        ))}
      </ul>
      <Swiper />
    </>
  );
}

export default Task;
