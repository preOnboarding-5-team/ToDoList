import styles from '../../routes/Menu/Menu.module.scss';

function MenuList() {
  return (
    <ul className={styles.menulist}>
      <li key="tamplates" className={styles.userMenu}>
        <p className={styles.menusTitle}>Tamplates</p>
      </li>
      <li key="categories" className={styles.userMenu}>
        <p className={styles.menusTitle}>Categories</p>
      </li>
      <li key="analystics" className={styles.userMenu}>
        <p className={styles.menusTitle}>Analytics</p>
      </li>
      <li key="settings" className={styles.userMenu}>
        <p className={styles.menusTitle}>Settings</p>
      </li>
    </ul>
  );
}

export default MenuList;
