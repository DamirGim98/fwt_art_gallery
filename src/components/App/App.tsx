import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, ArtistPage } from '../../pages';
import Layout from '../Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Navigate replace to={'/artist'} />} />
          <Route path="artist" element={<HomePage />} />
          <Route path="artist/:id" element={<ArtistPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
