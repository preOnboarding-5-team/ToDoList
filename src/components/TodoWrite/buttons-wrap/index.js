import styles from './ButtonsWrap.module.scss';
import BasicButton from '../basic-button';
import { FolderIcon, FlagIcon, MoonIcon, CalendarIcon } from '../../../assets/svgs';
import cn from 'classnames';
import DateButton from '../date-button';
import ButtonChoiceColor from '../button-choiceColor';

function ButtonsWrap({ setNewTask, category }) {
  return (
    <div className={styles.buttonWraps}>
      <div className={cn(styles.buttonsWrapper)}>
        <DateButton SVGIcon={CalendarIcon} />
        <div className={cn(styles.button)}>
          <ButtonChoiceColor setNewTask={setNewTask} CATEGORY={category} />
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
