import styles from './ButtonClose.module.scss';
import cn from 'classnames';

export default function ButtonClose({ onClick }) {
  return <button type="button" className={cn(styles.buttonClose)} onClick={onClick} aria-label="Close button" />;
}
