import cn from 'classnames';
import styles from './CategoryButton.module.scss';

function CategoryButton() {
  return (
    <button type="button" className={cn(styles.categoryButton)}>
      <div className={cn(styles.categoryColorOutline)}>
        <div className={cn(styles.categoryColor)} />
      </div>
    </button>
  );
}

export default CategoryButton;
