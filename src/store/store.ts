import { configureStore } from '@reduxjs/toolkit';
import { ArtistReducer, PaintingReducer, GenresReducer, AuthReducer } from './Slice';

export const store = configureStore({
  reducer: {
    artist: ArtistReducer,
    genres: GenresReducer,
    auth: AuthReducer,
    paintings: PaintingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
