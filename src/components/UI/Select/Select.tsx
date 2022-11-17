import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import cn from 'classnames/bind';
import styles from './Select.module.scss';
import type { IGenre } from '../../../types/types';
import Label from '../Label';
import { ThemeContext } from '../../../context/context';

type MultipleSelectProps = {
  label: string;
  value: IGenre[];
  onChange: (value: IGenre[]) => void;
};

type SelectProps = {
  options: IGenre[];
} & MultipleSelectProps;

const Select: FC<SelectProps> = ({ value, onChange, options, label }) => {
  const cx = cn.bind(styles);

  const { isDarkTheme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectOption = (option: IGenre) => {
    if (value.some((val) => val.name === option.name)) {
      onChange(value.filter((o) => o.name !== option.name));
    } else {
      onChange([...value, option]);
    }
  };

  const isOptionSelected = (option: IGenre) => value.some((val) => val.name === option.name);

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={cx('container', { dark: isDarkTheme })}
    >
      <div className={cx('label')}>{label}</div>
      <span className={cx('value')}>
        {value.map((val) => (
          <Label
            isActive
            title={val.name}
            key={val._id}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(val);
            }}
          />
        ))}
      </span>
      <div className={cx('caret', { down: isOpen && options.length })}></div>
      <ul className={cx('options', { show: isOpen && options.length })}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option._id}
            className={cx(
              'option',
              { selected: isOptionSelected(option) },
              { highlighted: index === highlightedIndex },
            )}
          >
            <input
              className={cx('checkbox', { dark: isDarkTheme })}
              id={`checkbox_${index}`}
              type="checkbox"
              readOnly
              checked={isOptionSelected(option)}
            />
            <label htmlFor={`checkbox_${index}`}></label>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
