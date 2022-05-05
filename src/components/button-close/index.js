import styles from './ButtonClose.module.scss';
import cn from 'classnames';
import { CloseIcon } from '../../assets/svgs';

export default function ButtonClose({ onClick }) {
  return (
    <button type="button" className={cn(styles.buttonClose)} onClick={onClick} aria-label="Close button">
      <CloseIcon />
    </button>
  );
}
