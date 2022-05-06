import cn from 'classnames';
import styles from './BasicButton.module.scss';

export default function BasicButton({ SVGIcon, outline, onClick }) {
  return (
    <button className={cn(styles.basicButton, { [styles.outline]: outline })} type="button" onClick={onClick}>
      <div className={cn(styles.svgWrap)}>
        <SVGIcon />
      </div>
    </button>
  );
}
