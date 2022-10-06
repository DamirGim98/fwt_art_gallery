import React, { FC, useEffect } from 'react';
import CardGrid from '../components/CardGrid';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  fetchArtist,
  selectArtistById,
  selectArtistsIds,
  selectArtistsStatus,
  EntityId,
} from '../store/Slice/ArtistSlice';
import Card from '../components/Card';
import { Loader } from '../components/UI';
import { fetchGenres } from '../store/Slice/GenresSlice';

interface CardExcerptProps {
  id: EntityId;
}

let CardExcerpt: FC<CardExcerptProps> = ({ id }) => {
  const artist = useAppSelector((state) => selectArtistById(state, id));
  return (
    <>
      {artist && (
        <Card
          id={artist._id}
          name={artist.name}
          year={artist.yearsOfLife}
          imgUrl={artist.mainPainting.image.src}
        />
      )}
    </>
  );
};

CardExcerpt = React.memo(CardExcerpt);

const HomePage = () => {
  const artistsIds = useAppSelector(selectArtistsIds);
  const artistsStatus = useAppSelector(selectArtistsStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (artistsStatus === 'idle') {
      dispatch(fetchArtist());
      dispatch(fetchGenres());
    }
  }, [artistsStatus, dispatch]);

  let content;

  if (artistsStatus === 'succeeded') {
    content = artistsIds.map((artistId) => <CardExcerpt id={artistId} key={artistId} />);
  } else if (artistsStatus === 'failed') {
    content = <h1>Error, try later</h1>;
  }
  return (
    <>
      {artistsStatus === 'loading' && <Loader />}
      <CardGrid>{content}</CardGrid>
    </>
  );
};

export default HomePage;
