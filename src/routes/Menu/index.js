import styles from './Menu.module.scss';
import UserProfile from '../../components/userprofile/UserProfile';
import MenuList from '../../components/menulist/MenuList';
import CloseMenuButton from '../../components/closemenubutton/CloseMenuButton';

function Menu({ handleOpenMenu, todoList }) {
  return (
    <div className={styles.menu}>
      <div className={styles.centering} />
      <UserProfile todoList={todoList} />
      <MenuList />
      <CloseMenuButton {...{ handleOpenMenu }} />
    </div>
  );
}

export default Menu;
