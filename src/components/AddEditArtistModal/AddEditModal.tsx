import React, { FC, useContext, useState } from 'react';
import cn from 'classnames/bind';
import styles from './AddEditModal.module.scss';
import { Button, Modal, Input, TextArea, Select, Icon } from '../UI';
import { ThemeContext } from '../../context/context';

export interface IAddEditModalProps {
  toggleActive: () => void;
  addEditProfile: () => void;
  isActive: boolean;
}

const AddEditModal: FC<IAddEditModalProps> = ({ toggleActive, isActive }) => {
  const cx = cn.bind(styles);
  const [isDrag, setIsDrag] = useState(false);
  const { isDarkTheme } = useContext(ThemeContext);
  const [newFile, setNewFile] = useState<File | null>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setNewFile(file);
  };

  return (
    <Modal
      className={cx('modal', { dark: isDarkTheme })}
      setIsActive={toggleActive}
      isActive={isActive}
    >
      {isDrag ? (
        <div
          className={cx('photo-block', 'drag')}
          onDragStart={(e) => handleDragEnter(e)}
          onDragLeave={(e) => handleDragLeave(e)}
          onDragOver={(e) => handleDragEnter(e)}
        >
          <Icon type={'Profile'} className={cx('photo-icon')} />
          <span className={cx('photo-drop')}>Drop your image here</span>
          <span className={cx('photo-load')}>Upload only .jpg or .png format less than 3 MB </span>
        </div>
      ) : (
        <div
          className={cx('container', { drag: isDrag })}
          onDragStart={(e) => handleDragEnter(e)}
          onDragLeave={(e) => handleDragLeave(e)}
          onDragOver={(e) => handleDragEnter(e)}
        >
          <div className={cx('photo')}>
            <div className={cx('photo-block')}>
              <Icon type={'Profile'} className={cx('photo-icon')} />
              <span className={cx('photo-drop')}>You can drop your image here</span>
            </div>
            <label className={cx('input-label')} htmlFor="input">
              {'Browse profile photo'}
              <input
                type="file"
                id="input"
                accept=".jpg,.jpeg,.png,.web"
                className={cx('input')}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className={cx('wrapper')}>
            <Input name={'name'} label={'Name'} isRequired />
            <Input name={'years'} label={'Years of life'} />
            <Input name={'location'} label={'Location'} />
            <TextArea className={cx('text')} name={'description'} label={'Description'} />
            <Select options={[]} label={'Genres*'} value={[]} onChange={() => {}} />
            <Button
              className={cx('button')}
              variant={'outlined'}
              children={'save'}
              typeButton={'submit'}
              theme={isDarkTheme}
            />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default AddEditModal;
