import React, { useEffect } from 'react';
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
} from '../../store/ArtistSlice';
import Card from '../Card';

const CardExcerpt = ({ id }: { id: EntityId }) => {
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

function App() {
  const artistsIds = useAppSelector(selectArtistsIds);
  const artistsStatus = useAppSelector(selectArtistsStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (artistsStatus === 'idle') {
      dispatch(fetchArtist());
    }
  }, [artistsStatus, dispatch]);

  let content;

  if (artistsStatus === 'loading') {
    content = <h1>Loading</h1>;
  } else if (artistsStatus === 'succeeded') {
    content = artistsIds.map((artistId) => <CardExcerpt id={artistId} key={artistId} />);
  }
  return (
    <>
      <Header />
      <CardGrid>{content}</CardGrid>
      <Footer />
    </>
  );
}

export default App;
