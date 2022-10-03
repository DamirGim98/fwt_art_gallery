import React, { useEffect } from 'react';
import CardGrid from '../CardGrid';
import Header from '../Header';
import Footer from '../Footer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchArtist, selectAllArtists, selectArtistsStatus } from '../../store/ArtistSlice';

function App() {
  const artists = useAppSelector(selectAllArtists);
  const artistsStatus = useAppSelector(selectArtistsStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (artistsStatus === 'idle') {
      dispatch(fetchArtist());
    }
  }, [artistsStatus]);
  return (
    <>
      <Header />
      <CardGrid></CardGrid>
      <Footer />
    </>
  );
}
export default App;
