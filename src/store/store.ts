import { configureStore } from '@reduxjs/toolkit';
import { ArtistReducer, GenresReducer, AuthReducer } from './Slice';

export const store = configureStore({
  reducer: {
    artist: ArtistReducer,
    genres: GenresReducer,
    auth: AuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
