import styles from './ButtonsWrap.module.scss';
import BasicButton from '../basic-button';
import { FolderIcon, FlagIcon, MoonIcon } from '../../assets/svgs';
import cn from 'classnames';
import DateButton from '../date-button';
import ButtonChoiceColor from '../button-choiceColor';

function ButtonsWrap() {
  return (
    <div>
      <div className={cn(styles.buttonsWrapper)}>
        <DateButton />
        <div className={cn(styles.button)}>
          <ButtonChoiceColor />
        </div>
      </div>
      <div className={cn(styles.wrapButtons)}>
        <BasicButton SVGIcon={FolderIcon} outline={false} />
        <BasicButton SVGIcon={FlagIcon} outline={false} />
        <BasicButton SVGIcon={MoonIcon} outline={false} />
      </div>
    </div>
  );
}

export default ButtonsWrap;
