import styles from './TaskInput.module.scss';
import cn from 'classnames';

function TaskInput({ onGetTaskValue }) {
  const test = (event) => {
    // console.log(event.currentTarget.value);
    onGetTaskValue(event.currentTarget.value);
  };

  return (
    <div className={cn(styles.taskInput)}>
      <input type="text" placeholder="Enter new task" onChange={test} />
    </div>
  );
}

export default TaskInput;
