import { useEffect, useRef, useState } from 'react';
import styles from './Category.module.scss';
import Card from './Card';

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
      const card = todoList.filter((todo) => todo.category === category.category);
      setCategoryList((prev) => ({ ...prev, [category.category]: card }));
    });
  }, [categories, todoList]);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div ref={containerRef} className={styles.container} onMouseDown={onMouseDown}>
      {Object.keys(categoryList).map((category, idx) => {
        const key = `card-key-${idx}`;
        const { color } = categories.find((list) => list.category === category);
        return <Card key={key} color={color} todo={categoryList[category]} />;
      })}
    </div>
  );
}

export default Category;
