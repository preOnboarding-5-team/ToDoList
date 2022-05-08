import { useState, useEffect } from 'react';
import styles from './UserProfile.module.scss';

function UserProfile({ todoList }) {
  const [percent, setPercent] = useState(0);
  const [doneNum, setDoneNum] = useState(0);
  useEffect(() => {
    let num = 0;
    todoList.forEach((todo) => {
      if (todo.done) {
        num += 1;
      }
    });
    setDoneNum(num);
    setPercent((doneNum / todoList.length) * 100);
  }, [todoList, doneNum]);

  return (
    <>
      <div
        className={styles.userImageWrapper}
        style={{
          backgroundImage: percent >= 0 && `conic-gradient(#8c1bb8 ${percent * 3.6}deg, #aaaaaa ${percent * 3.6}deg)`,
        }}
      >
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
