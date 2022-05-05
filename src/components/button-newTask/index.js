import styles from './ButtonNewTask.module.scss';
import { UpIcon } from '../../assets/svgs';
import cn from 'classnames';

export default function ButtonNewTask({ onClick }) {
  return (
    <button type="button" className={styles.buttonNewTask} onClick={onClick} aria-label="New task button">
      <div className={cn(styles.buttonTitle)}>
        <p className={cn(styles.title)}>New task</p>
        <UpIcon />
      </div>
    </button>
  );
}
