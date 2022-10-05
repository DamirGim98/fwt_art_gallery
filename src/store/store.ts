import { configureStore } from '@reduxjs/toolkit';
import ArtistReducer from './Slice/ArtistSlice';
import GenresReducer from './Slice/GenresSlice';

export const store = configureStore({
  reducer: {
    artist: ArtistReducer,
    genres: GenresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
