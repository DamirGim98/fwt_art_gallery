import React, { FC, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import styles from './ArtistPage.module.scss';
import ArtistAbout from '../components/ArtistAbout';
import CardGrid from '../components/CardGrid';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  fetchArtistPaintings,
  selectAllPaintings,
  selectPaintingsStatus,
} from '../store/Slice/PaintingSlice';
import Card from '../components/Card';
import PhotoPlug from '../components/PhotoPlug';
import { ThemeContext } from '../context/context';
import Slider from '../components/Slider';
import { IArtistPaintings } from '../types/types';
import { selectArtistById } from '../store/Slice/ArtistSlice';

interface ArtistCardExcerptProps {
  painting: IArtistPaintings;
  onClick?: () => void;
}

let ArtistCardExcerpt: FC<ArtistCardExcerptProps> = ({ painting, onClick }) => {
  return (
    <>
      {painting && (
        <Card
          id={painting._id}
          name={painting.name}
          year={painting.yearOfCreation}
          img={painting.image}
          OnClick={onClick}
        />
      )}
    </>
  );
};

ArtistCardExcerpt = React.memo(ArtistCardExcerpt);

const ArtistPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isDarkTheme } = useContext(ThemeContext);

  const artist = useAppSelector((state) => selectArtistById(state, id || ''));

  const paintingsStatus = useAppSelector(selectPaintingsStatus);
  const paintings = useAppSelector(selectAllPaintings);

  const [isSliderVisible, setIsSliderVisible] = useState<boolean>(false);
  const [initialSlide, setInitialSlide] = useState<number>(0);

  const handleSlider = (index: number) => {
    setInitialSlide(index);
    setIsSliderVisible(true);
  };

  useEffect(() => {
    if (paintingsStatus === 'idle' && id) {
      dispatch(fetchArtistPaintings(id));
    }
  }, [paintingsStatus, dispatch]);

  let content;

  if (paintingsStatus === 'succeeded') {
    content = paintings.map((painting, index) => (
      <ArtistCardExcerpt
        painting={painting}
        key={painting._id}
        onClick={() => handleSlider(index)}
      />
    ));
  } else if (paintingsStatus === 'failed' || !paintings.length) {
    content = <PhotoPlug />;
  }
  if (artist)
    return (
      <>
        <ArtistAbout artist={artist} />
        <Slider
          paintings={paintings}
          initialSlideIndex={initialSlide}
          isSliderVisible={isSliderVisible}
          closeSlider={() => setIsSliderVisible(false)}
        />
        <CardGrid>{content}</CardGrid>
        {!paintings.length && (
          <div className={cn(styles.NotUploaded, isDarkTheme && styles.dark)}>
            The paintings of this artist have not been uploaded yet.
          </div>
        )}
      </>
    );
  return <></>;
};

export default ArtistPage;
