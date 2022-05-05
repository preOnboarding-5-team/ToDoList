import styles from './TaskInput.module.scss';
import cn from 'classnames';

function TaskInput({ setNewTask }) {
  const test = (event) => {
    const { value } = event.currentTarget;
    setNewTask((prev) => {
      const updated = { ...prev };
      updated.title = value;
      return updated;
    });
  };

  return (
    <div className={cn(styles.taskInput)}>
      <input type="text" placeholder="Enter new task" onChange={test} tabIndex={0} />
    </div>
  );
}

export default TaskInput;
