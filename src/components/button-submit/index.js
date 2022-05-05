import styles from './ButtonSubmit.module.scss';

export default function ButtonSubmit({ title = 'Add Task', onClick }) {
  return (
    <button type="button" className={styles.buttonSubmit} onClick={onClick} aria-label="Submit button">
      <span className={styles.title}>{title}</span>
      <span className={styles.icon} />
    </button>
  );
}
