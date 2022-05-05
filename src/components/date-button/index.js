import styles from './DateButton.module.scss';
import { CalendarIcon } from '../../assets/svgs';
import cn from 'classnames';

export default function DateButton({ onClick }) {
  return (
    <button type="button" className={cn(styles.dateButton)} onClick={onClick}>
      <div className={cn(styles.dateButtonWrapper)}>
        <CalendarIcon />
        <p className={cn(styles.title)}>Today</p>
      </div>
    </button>
  );
}
