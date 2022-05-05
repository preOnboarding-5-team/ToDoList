import cn from 'classnames';
import { useState } from 'react';
import styles from './TodoWrite.module.scss';
import TaskInput from '../../components/task-input';
import ButtonsWrap from '../../components/buttons-wrap';
import ButtonClose from '../../components/button-close';
import ButtonNewTask from '../../components/button-newTask';
import NewTitle from '../../components/new-title';

function TodoWrite({ todoList, setTodoList, setIsWriting }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [newTask, setNewTask] = useState({
    id: todoList.length + 1,
    title: '',
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
          <ButtonsWrap />
        </div>
        <ButtonNewTask onClick={submitTaskValue} />
      </div>
      <NewTitle
        newTask={newTask}
        isClosing={isClosing}
        isMoving={isMoving}
        isSubmitted={isSubmitted}
        hasMoved={hasMoved}
        isCanceled={isCanceled}
      />
    </>
  );
}

export default TodoWrite;
