import cn from 'classnames';
import styles from './CategoryButton.module.scss';

function CategoryButton() {
  return (
    <div className={cn(styles.categoryButton)}>
      <button type="button">
        <div className={cn(styles.categoryColorOutline)}>
          <div className={cn(styles.categoryColor)} />
        </div>
      </button>
    </div>
  );
}

export default CategoryButton;
