import styles from './CloseMenuButton.module.scss';

function CloseMenuButton({ handleOpenMenu }) {
  return (
    <button type="button" className={styles.closeMenuButton} aria-label="Close menu button" onClick={handleOpenMenu} />
  );
}

export default CloseMenuButton;
