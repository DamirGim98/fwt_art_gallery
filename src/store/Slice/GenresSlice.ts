import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IGenre } from '../../types/types';
import { ArtistAPI } from '../../Api/API';

const genresAdapter = createEntityAdapter<IGenre>({
  selectId: (genre) => genre._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
  return ArtistAPI.getAllGenres();
});

const initialState = genresAdapter.getInitialState();

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      genresAdapter.upsertMany(state, action.payload);
    });
  },
});

export const { selectById: selectGenreById } = genresAdapter.getSelectors<RootState>(
  (state) => state.genres,
);

export default genresSlice.reducer;
