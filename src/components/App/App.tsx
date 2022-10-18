import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ClientJS } from 'clientjs';
import { HomePage, ArtistPage, Layout } from '../../pages';
import { useAppDispatch } from '../../store/hooks';
import { setFingerPrint } from '../../store/Slice/AuthSlice';

function App() {
  const dispatch = useAppDispatch();
  const client = new ClientJS();
  const fingerprint = client.getFingerprint().toString();
  useEffect(() => {
    dispatch(setFingerPrint(fingerprint));
  });
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
