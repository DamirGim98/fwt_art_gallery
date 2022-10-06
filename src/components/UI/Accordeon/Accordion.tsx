import React, { FC, useContext, useState } from 'react';
import cn from 'classnames/bind';
import styles from './Accordion.styles.scss';
import Button from '../Button';
import { ReactComponent as DownArrow } from '../../../images/svg/DropdownArrow.svg';
import { ThemeContext } from '../../../context/context';

export interface IAccordionProps {
  content: string;
}

const Accordion: FC<IAccordionProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkTheme } = useContext(ThemeContext);
  const ButtonAvailable = content.length < 256;
  const shortString = content.length > 256 ? content.slice(0, 256).concat('...') : content;

  const handleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  const cx = cn.bind(styles);
  return (
    <div className={cx('accordion')}>
      <div className={cx('accordion-content')}>{isOpen ? content : shortString}</div>
      <div>
        <Button
          variant={'underlined'}
          svgPos={'right'}
          theme={isDarkTheme}
          onClick={handleAccordion}
          isDisabled={ButtonAvailable}
        >
          <span>{isOpen ? 'Read less' : 'Read More'}</span>
          <DownArrow />
        </Button>
      </div>
    </div>
  );
};

export default Accordion;
