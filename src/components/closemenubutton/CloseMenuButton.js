import styles from '../../routes/Menu/Menu.module.scss';

function CloseMenuButton({handleOpenMenu}) {
  return <button type='button' className={styles.closeMenuButton} aria-label='Close menu button' onClick={handleOpenMenu} />;
}

export default CloseMenuButton;
