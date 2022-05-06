import styles from '../../routes/Menu/Menu.module.scss';
import { BiBookmark , BiGridAlt, BiTime, BiCog } from "react-icons/bi";

function MenuList() {
  return (
    <ul className={styles.menulist}>
      <li key="tamplates" className={styles.userMenu}>
        <p className={styles.menusTitle}><BiBookmark className={styles.menuIcon} />Tamplates</p>
      </li>
      <li key="categories" className={styles.userMenu}>
        <p className={styles.menusTitle}><BiGridAlt className={styles.menuIcon} />Categories</p>
      </li>
      <li key="analystics" className={styles.userMenu}>
        <p className={styles.menusTitle}><BiTime className={styles.menuIcon} />Analytics</p>
      </li>
      <li key="settings" className={styles.userMenu}>
        <p className={styles.menusTitle}><BiCog className={styles.menuIcon} />Settings</p>
      </li>
    </ul>
  );
}

export default MenuList;
