import cn from 'classnames';
import { useState } from 'react';
import styles from './ButtonChoiceColor.module.scss';

import ModalPalette from '../modal_palette';

export default function ButtonChoiceColor() {
  const [isClicked, setIsClicked] = useState(false);
  const [selectColor, setSelectColor] = useState('blue');
  const clickButton = () => {
    setIsClicked((prev) => !prev);
  };

  const getChangeColor = (getColor) => {
    setSelectColor(getColor);
    setIsClicked((prev) => !prev);
  };

  return (
    <div>
      <button
        type="button"
        className={cn(styles.buttonChoiceColor, { [styles.clicked]: isClicked })}
        onClick={clickButton}
      >
        <div className={cn(styles.svgWrap)}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill={selectColor}
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            />
          </svg>
        </div>
      </button>
      <ModalPalette onChangeColor={getChangeColor} isOpen={isClicked} />
    </div>
  );
}
