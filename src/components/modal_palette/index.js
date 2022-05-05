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

      {/* <button
        className={cn(styles.colorChip, styles.red)}
        type="button"
        aria-label="Red color button"
        data-color="RED"
        onClick={choiceColor}
      />
      <button
        className={cn(styles.colorChip, styles.orange)}
        type="button"
        aria-label="Orange color button"
        data-color="ORANGE"
        onClick={choiceColor}
      />
      <button
        className={cn(styles.colorChip, styles.yellow)}
        type="button"
        aria-label="Yellow color button"
        data-color="YELLOW"
        onClick={choiceColor}
      />
      <button
        className={cn(styles.colorChip, styles.green)}
        type="button"
        aria-label="Green color button"
        data-color="GREEN"
        onClick={choiceColor}
      /> */}
    </div>
  );
}
