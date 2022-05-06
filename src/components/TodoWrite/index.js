import cn from 'classnames';
import { useState } from 'react';
import styles from './TodoWrite.module.scss';
import TaskInput from './task-input';
import ButtonsWrap from './buttons-wrap';
import ButtonClose from './button-close';
import ButtonNewTask from './button-newTask';
import NewTitle from './new-title';

function TodoWrite({ todoList, setTodoList, setIsWriting, CATEGORY }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [newTask, setNewTask] = useState({
    id: todoList.length + 1,
    title: '',
    category: '운동',
    done: false,
  });

  const handleCloseClick = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsCanceled(true);
    }, 500);

    setTimeout(() => setIsWriting(false), 1000);
  };

  const submitTaskValue = () => {
    setIsClosing(true);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsMoving(true);
    }, 250);

    setTimeout(() => {
      setTodoList((prev) => [newTask, ...prev]);
      setHasMoved(true);
    }, 1000);

    setTimeout(() => {
      setIsWriting(false);
    }, 2000);
  };

  return (
    <>
      <div className={cn(styles.todoWrite, { [styles.closing]: isClosing })}>
        <ButtonClose onClick={handleCloseClick} />
        <div className={cn(styles.centering)}>
          <TaskInput setNewTask={setNewTask} />
          <ButtonsWrap setNewTask={setNewTask} category={CATEGORY} />
        </div>
        <ButtonNewTask isValid={!!newTask.title} onClick={submitTaskValue} />
      </div>
      <NewTitle
        newTask={newTask}
        isClosing={isClosing}
        isMoving={isMoving}
        isSubmitted={isSubmitted}
        hasMoved={hasMoved}
        isCanceled={isCanceled}
        categoryValue={CATEGORY}
      />
    </>
  );
}

export default TodoWrite;
