import styles from './Menu.module.scss';
import UserProfile from '../../components/menu/UserProfile';
import MenuList from '../../components/menu/MenuList';

function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.centering} />
      <UserProfile />
      <MenuList />
    </div>
  );
}

export default Menu;
