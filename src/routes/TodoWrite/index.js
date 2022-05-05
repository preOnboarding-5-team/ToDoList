import styles from './TodoWrite.module.scss';
import TaskInput from '../../components/task-input';
import ButtonsWrap from '../../components/buttons-wrap';
import ButtonClose from '../../components/button-close';
import ButtonNewTask from '../../components/button-newTask';
import cn from 'classnames';
import { useState, useRef } from 'react';

function TodoWrite({ setIsWriting }) {
  const [taskValue, setTaskValue] = useState('');
  const [isClosing, setIsClosing] = useState(false);

  const ref = useRef(null);

  const getTaskValue = (writeTaskValue) => {
    setTaskValue(writeTaskValue);
  };

  const handleCloseClick = () => {
    setIsClosing(true);
    setTimeout(() => setIsWriting(false), 1000);
  };

  const submitTaskValue = () => {
    console.log(taskValue);
  };

  return (
    <div className={cn(styles.todoWrite, { [styles.closing]: isClosing })} ref={ref}>
      <ButtonClose onClick={handleCloseClick} />
      <div className={cn(styles.centering)}>
        <TaskInput onGetTaskValue={getTaskValue} />
        <ButtonsWrap />
      </div>
      <ButtonNewTask onClick={submitTaskValue} />
    </div>
  );
}

export default TodoWrite;
