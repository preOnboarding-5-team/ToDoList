import styles from './Menu.module.scss';
import UserProfile from '../../components/menu/UserProfile';
import MenuList from '../../components/menu/MenuList';
import CloseMenuButton from '../../components/menu/CloseMenuButton';

function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.centering} />
      <UserProfile />
      <MenuList />
      <CloseMenuButton />
    </div>
  );
}

export default Menu;
