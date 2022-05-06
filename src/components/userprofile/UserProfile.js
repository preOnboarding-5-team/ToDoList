import styles from '../../routes/Menu/Menu.module.scss';

function UserProfile() {
  return (
    <>
      <div className={styles.userImageWrapper}>
        <img
          className={styles.userImage}
          alt="test_userimage"
          src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg"
        />
      </div>
      <h1>Joy</h1>
      <h1>Mitchell</h1>
    </>
  );
}

export default UserProfile;
