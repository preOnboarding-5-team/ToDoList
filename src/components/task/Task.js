import { useRef, useState } from 'react';
import styles from './Task.module.scss';
import { CheckIcon } from '../../assets/svgs';
import DeleteIcon from '../../assets/pngs/delete.png';

function Task({ todoList, setTodoList, categories }) {
  const [isDrag, setIsDrag] = useState(false);
  const [locationX, setLocationX] = useState(null);
  const [taskWidth, setTaskWidth] = useState(null);
  const [dragTarget, setDragTarget] = useState(null);

  const handleChange = (e) => {
    const { id } = e.currentTarget.dataset;
    setTodoList((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === Number(id));
      const newList = todoList.map((todo) => ({ ...todo }));
      newList[targetIndex].done = !newList[targetIndex].done;
      return newList;
    });
  };

  const changeSlideStyle = (taskNode, taskList) => {
    taskNode.style.transform = `translateX(${taskWidth / 4}px)`;
    taskNode.style.opacity = '0';
    taskNode.style.height = '0';
    taskNode.style.margin = '0';

    setTimeout(() => {
      setTodoList(taskList);
    }, 1200);
  };

  const handleDeleteTodo = (e) => {
    const { id } = e.currentTarget.dataset;
    const listNode = e.currentTarget.parentNode.parentNode.parentNode;
    const targetIndex = todoList.findIndex((todo) => todo.id === Number(id));
    const deleteAfterList = todoList.map((todo) => ({ ...todo }));
    deleteAfterList.splice(targetIndex, 1);

    changeSlideStyle(listNode, deleteAfterList);
  };

  const handleUndoTodo = (e) => {
    e.target.offsetParent.style.transform = 'translateX(0)';
  };

  const handleMouseDown = (e) => {
    setLocationX(e.pageX);
    const { id } = e.currentTarget.dataset;
    setDragTarget(id);
    setTaskWidth(e.currentTarget.getBoundingClientRect().width);
    setIsDrag(true);
  };

  const handleMouseUp = () => {
    setIsDrag(false);
  };

  const handleMouseMove = (e) => {
    const { id } = e.currentTarget.dataset;
    const mouseMovePositionX = e.pageX;
    const dragDistance = locationX - mouseMovePositionX;
    if (isDrag && id === dragTarget && dragDistance >= 80) {
      e.currentTarget.style.transform = `translateX(-${taskWidth / 2}px)`;
    }
  };

  let position = { top: 0, y: 0 };
  const containerRef = useRef();

  const onMouseMove = (e) => {
    const y = e.clientY - position.y;
    if (Math.abs(y) > 15) {
      containerRef.current.scrollTop = position.top - y;
    }
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseDown = (e) => {
    position = {
      top: containerRef.current.scrollTop,
      y: e.clientY,
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const list = todoList.map((todo) => {
    const { color } = categories.find((categoryName) => categoryName.category === todo.category);
    const categoryColor = { backgroundColor: todo.done ? `${color}` : '', border: `2px solid ${color}` };

    return (
      <li key={`todo-${todo.id}`} className={styles.taskBox}>
        <div
          className={styles.task}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          aria-hidden="true"
          data-id={todo.id}
        >
          <div data-id={todo.id} className={styles.taskStatic}>
            <div className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                checked={todo.done}
                data-id={todo.id}
                onChange={handleChange}
                style={categoryColor}
              />
              <CheckIcon />
            </div>
            <p className={todo.done ? `${styles.title} ${styles.clear}` : styles.title}>{todo.title}</p>
          </div>

          <div className={styles.taskDelete} data-id={todo.id}>
            <button type="button" data-id={todo.id} className={styles.deleteIcon} onClick={handleDeleteTodo}>
              <img src={DeleteIcon} alt="delete_icon" />
            </button>
            <p className={styles.deleteText}>The task was deleted</p>
            <button type="button" data-id={todo.id} className={styles.deleteButton} onClick={handleUndoTodo}>
              UNDO
            </button>
          </div>
        </div>
      </li>
    );
  });

  return (
    <ul ref={containerRef} onMouseDown={onMouseDown} role="presentation" className={styles.taskContainer}>
      {list}
    </ul>
  );
}

export default Task;
