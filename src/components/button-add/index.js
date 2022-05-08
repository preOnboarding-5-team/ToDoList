import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './ButtonAdd.module.scss';

export default function ButtonAdd({ isWriting, setIsWriting }) {
  const [expands, setExpands] = useState(false);

  const handleClick = () => {
    setExpands(true);
    setTimeout(() => setIsWriting(true), 500);
  };

  useEffect(() => {
    setExpands(isWriting);
    setTimeout(() => setExpands(false), 1800);
  }, [isWriting]);

  return (
    <>
      <button type="button" className={styles.buttonAdd} onClick={handleClick} aria-label="Add button" />
      <div className={cn(styles.transition, { [styles.expands]: expands })} />
    </>
  );
}
