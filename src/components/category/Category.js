import { useEffect, useRef, useState } from 'react';
import styles from './Category.module.scss';

function Category({ categories, todoList }) {
  const [categoryList, setCategoryList] = useState({});
  const containerRef = useRef();

  let position = { left: 0, x: 0 };
  const onMouseMove = (e) => {
    const x = e.clientX - position.x;

    containerRef.current.scrollLeft = position.left - x;
  };

  const onMouseUp = () => {
    containerRef.current.style.cursor = 'grab';
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseDown = (e) => {
    position = {
      left: containerRef.current.scrollLeft,
      x: e.clientX,
    };
    containerRef.current.style.cursor = 'grabbing';
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  useEffect(() => {
    categories.forEach((category) => {
      const card = todoList.filter((todo) => todo.category === category);
      setCategoryList((prev) => ({ ...prev, [category]: card }));
    });
  }, [categories, todoList]);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div ref={containerRef} className={styles.container} onMouseDown={onMouseDown}>
      {Object.keys(categoryList).map((category, idx) => {
        const key = `card-key-${idx}`;
        const total = categoryList[category].length;
        const done = categoryList[category].filter((todo) => todo.done).length;
        const doneRatio = (100 / total) * done;
        return (
          <div key={key} className={styles.card}>
            <div className={styles.total}>{total} tasks</div>
            <div className={styles.title}>{category}</div>
            <div className={styles.progress}>
              <span
                className={styles.progressBar}
                style={{
                  width: `${doneRatio}%`,
                }}
              />
            </div>
            <div className={styles.percentage}>{Math.floor(doneRatio)}%</div>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
