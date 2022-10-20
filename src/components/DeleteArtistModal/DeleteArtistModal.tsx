import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './DeleteArtistModal.module.scss';
import { Button, Icon, Modal } from '../UI';
import { ThemeContext } from '../../context/context';

export interface IDeleteArtistModalProps {
  toggleActive: () => void;
  deleteArtistProfile: () => void;
  isActive: boolean;
}

const DeleteArtistModal: FC<IDeleteArtistModalProps> = ({
  toggleActive,
  isActive,
  deleteArtistProfile,
}) => {
  const cx = cn.bind(styles);
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <Modal
      setIsActive={toggleActive}
      className={cx('DeleteModal', { dark: isDarkTheme })}
      isActive={isActive}
    >
      <section className={cx('DeleteModal-content')}>
        <Icon type={'bigTrashCan'} className={cx('DeleteModal-deleteIcon')} />
        <h2 className={cx('DeleteModal-header')}>Do you want to delete this artist profile?</h2>
        <h3 className={cx('DeleteModal-subheader')}>
          You will not be able to recover this profile afterwards.
        </h3>
        <Button variant={'outlined'} children={'Delete'} onClick={deleteArtistProfile} />
        <Button variant={'underlined'} children={'cancel'} onClick={toggleActive} />
      </section>
    </Modal>
  );
};

export default DeleteArtistModal;
