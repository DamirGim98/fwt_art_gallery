import React, { useEffect } from 'react';
import CardGrid from '../CardGrid';
import Header from '../Header';
import Footer from '../Footer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchArtist, selectAllArtists } from '../../store/ArtistSlice';

function App() {
  const cards = useAppSelector(selectAllArtists);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchArtist());
  }, []);
  return (
    <>
      <Header />
      <CardGrid cards={cards} />
      <Footer />
    </>
  );
}
export default App;
