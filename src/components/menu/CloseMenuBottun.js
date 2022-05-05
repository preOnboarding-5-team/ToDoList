import styles from '../../routes/Menu/Menu.module.scss';

function CloseMenuButton() {
  return <button type='button' className={styles.closeMenuButton} aria-label='Close menu button' />;
}

export default CloseMenuButton;
