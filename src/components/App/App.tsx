import React, { FC, useEffect } from 'react';
import CardGrid from '../CardGrid';
import Header from '../Header';
import Footer from '../Footer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  fetchArtist,
  selectArtistById,
  selectArtistsIds,
  selectArtistsStatus,
  EntityId,
} from '../../store/Slice/ArtistSlice';
import Card from '../Card';
import Loader from '../UI/Loader';
import ArtistAbout from '../ArtistAbout';
import { fetchGenres } from '../../store/Slice/GenresSlice';

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

function App() {
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
      <Header />
      {artistsStatus === 'loading' && <Loader />}
      <ArtistAbout id={'62e148114df711d4f7f68f05'} />
      <CardGrid>{content}</CardGrid>
      <Footer />
    </>
  );
}

export default App;
