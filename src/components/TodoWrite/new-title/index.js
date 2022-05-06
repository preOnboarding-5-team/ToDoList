import cn from 'classnames';
import styles from './NewTitle.module.scss';

function NewTitle({ newTask, isClosing, isSubmitted, isMoving, hasMoved, isCanceled, categoryValue }) {
  return (
    <div
      className={cn(styles.submitTitleWrapper, {
        [styles.submitTitleWrapperVisible]: isSubmitted,
        [styles.submitCanceled]: isCanceled,
      })}
    >
      {isClosing && (
        <div
          className={cn(styles.submittedTitleHidden, {
            [styles.submittedTitleVisible]: isSubmitted,
            [styles.submittedTitleOn]: isMoving,
          })}
        >
          <span>{newTask.title}</span>
          {hasMoved && (
            <div
              className={styles.checkboxWrapper}
              style={{ border: `2px solid ${categoryValue.find((v) => v.category === newTask.category).color}` }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default NewTitle;
