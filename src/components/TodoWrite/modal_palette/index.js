import cn from 'classnames';
import styles from './ModalPalette.module.scss';

export default function ModalPalette({ onChangeColor, isOpen, categoryValue }) {
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  return (
    <div className={cn(styles.modalPalette, { [styles.open]: isOpen }, { [styles.close]: !isOpen })}>
      {categoryValue.map((value, listIndex) => (
        <button
          type="button"
          className={cn(styles.colorButton)}
          aria-label="color button"
          data-color={value.color}
          data-id={listIndex}
          onKeyPress={onKeyPress}
          onClick={onChangeColor}
          key={`${value.color}-color`}
        >
          <div className={cn(styles.colorChip, styles[value.color])} />
          <p>{value.category}</p>
        </button>
      ))}
    </div>
  );
}
