import cn from 'classnames';
import styles from './ModalPalette.module.scss';

const COLOR_VALUE = ['red', 'orange', 'yellow', 'green', 'blue'];

export default function ModalPalette({ onChangeColor, isOpen }) {
  const choiceColor = (event) => {
    onChangeColor(event.currentTarget.dataset.color);
  };
  return (
    <div className={cn(styles.modalPalette, { [styles.open]: isOpen }, { [styles.close]: !isOpen })}>
      {COLOR_VALUE.map((color) => (
        <button
          className={cn(styles.colorChip, styles[color])}
          type="button"
          aria-label="color button"
          data-color={color}
          onClick={choiceColor}
          key={`${color}-color`}
        />
      ))}
    </div>
  );
}
