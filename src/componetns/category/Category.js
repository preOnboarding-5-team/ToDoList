import { useState } from 'react';
import styles from './Category.module.scss';
import Card from './Card';

export default function Category() {
  const categories = ['Business', 'Personal', 'Special'];
  const TODOS = [
    {
      id: 1,
      title: '계란 2판 사기',
      category: 'Business',
      done: false,
    },
    {
      id: 2,
      title: '맥북 프로 M1 Max CTO 버전 사기',
      category: 'Business',
      done: true,
    },
    {
      id: 3,
      title: '오늘의 TIL 작성하기',
      category: 'Personal',
      done: true,
    },

    {
      id: 4,
      title: '아침 영양제 챙겨 먹기',
      category: 'Special',
      done: true,
    },
  ];

  return (
    <div className={styles.category}>
      {categories.map((categoryItem) => {
        const newTodo = TODOS.filter((todoItem) => todoItem.category === categoryItem);
        return <Card todo={newTodo} key={newTodo[0].category} />;
      })}
    </div>
  );
}
