import React, { useEffect } from 'react';

const List = () => {
  useEffect(() => {
    const list = todoList.map((todo) => {
      const color = categoryMap.get(todo.category);

      return (
        <li key={`todo-${todo.id}`} className={styles.taskBox}>
          <div
            className={styles.task}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            aria-hidden='true'
            data-id={todo.id}
          >
            <div data-id={todo.id} className={styles.taskStatic}>
              <div className={styles.checkboxWrapper}>
                <input type='checkbox' checked={todo.done} data-id={todo.id} onChange={handleChange} />
                <CheckIcon />
              </div>
              <div style={todo.done ? { backgroundColor: 'red' } : { backgroundColor: color }}>1111</div>
              <p className={todo.done ? `${styles.title} ${styles.clear}` : styles.title}>{todo.title}</p>
            </div>

            <div className={styles.taskDelete} data-id={todo.id}>
              <button type='button' data-id={todo.id} className={styles.deleteIcon} onClick={handleDeleteTodo}>
                <img alt='delete_icon' />
              </button>
              <p className={styles.deleteText}>The task was deleted</p>
              <button type='button' data-id={todo.id} className={styles.deleteButton} onClick={handleUndoTodo}>
                UNDO
              </button>
            </div>
          </div>
        </li>
      );
    });
  });

  return <div>{list}</div>;
};

export default List;
