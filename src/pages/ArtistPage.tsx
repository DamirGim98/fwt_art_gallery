import React from 'react';
import { useParams } from 'react-router-dom';
import ArtistAbout from '../components/ArtistAbout';

const ArtistPage = () => {
  const { id } = useParams();
  return (
    <>
      <ArtistAbout id={id || ''} />;
    </>
  );
};

export default ArtistPage;
