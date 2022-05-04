import styles from './Menu.module.scss';
import UserProfile from '../../components/menu/UserProfile';

function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.centering} />
      <UserProfile />
    </div>
  );
}

export default Menu;
