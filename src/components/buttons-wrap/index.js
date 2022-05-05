import styles from './ButtonsWrap.module.scss';
import BasicButton from '../basic-button';
import { FolderIcon, FlagIcon, MoonIcon } from '../../assets/svgs';
import cn from 'classnames';
import DateButton from '../date-button';

import ButtonChoiceColor from '../button-choiceColor';
import ModalPalette from '../modal_palette';
import { useState } from 'react';

function ButtonsWrap() {
  const [selectColor, setSelectColor] = useState('blue');
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  return (
    <div>
      <div className={cn(styles.buttonsWrapper)}>
        <DateButton />
        <div className={cn(styles.button)}>
          <ButtonChoiceColor changeColor={selectColor} onClickButton={setIsPaletteOpen} />
        </div>
      </div>
      <div className={cn(styles.wrapButtons)}>
        <BasicButton SVGIcon={FolderIcon} outline={false} />
        <BasicButton SVGIcon={FlagIcon} outline={false} />
        <BasicButton SVGIcon={MoonIcon} outline={false} />
      </div>
      <ModalPalette onChangeColor={setSelectColor} isOpen={isPaletteOpen} />
    </div>
  );
}

export default ButtonsWrap;
