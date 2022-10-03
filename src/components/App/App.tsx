import React, { useEffect } from 'react';
import CardGrid from '../CardGrid';
import Header from '../Header';
import Footer from '../Footer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchArtist, selectAllArtists, selectArtistsStatus } from '../../store/ArtistSlice';
import Card from '../Card';

function App() {
  const artists = useAppSelector(selectAllArtists);
  const artistsStatus = useAppSelector(selectArtistsStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (artistsStatus === 'idle') {
      dispatch(fetchArtist());
    }
  }, [artistsStatus, dispatch]);
  return (
    <>
      <Header />
      <CardGrid>
        {artists.map((artist) => (
          <Card
            key={artist.id}
            id={artist.id}
            name={artist.name}
            year={artist.yearsOfLife}
            imgUrl={artist.mainPainting.image.src}
          />
        ))}
      </CardGrid>
      <Footer />
    </>
  );
}
export default App;
