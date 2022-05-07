import styles from './DateButton.module.scss';
import cn from 'classnames';

export default function DateButton({ SVGIcon }) {
  return (
    <button type="button" className={cn(styles.dateButton)}>
      <div className={cn(styles.dateButtonWrapper)}>
        <SVGIcon />
        <p className={cn(styles.title)}>Today</p>
      </div>
    </button>
  );
}
