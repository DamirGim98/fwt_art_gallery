import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IArtist, IState } from '../types/types';
import type { RootState } from './store';

export type EntityId = number | string;

const artistAdapter = createEntityAdapter<IArtist>({
  selectId: (artist) => artist._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const fetchArtist = createAsyncThunk('artist/fetchArtist', async () => {
  const response = await axios.get('https://internship-front.framework.team/artists/static');
  return response.data as IArtist[];
});

const options = {
  status: 'idle',
  error: '',
} as IState;

const initialState = artistAdapter.getInitialState(options);

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtist.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArtist.fulfilled, (state, action) => {
        state.status = 'succeeded';
        artistAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchArtist.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error.message) state.error = action.error.message;
      });
  },
});
export const selectArtistsStatus = (state: RootState) => state.artist.status;

export const {
  selectAll: selectAllArtists,
  selectById: selectArtistById,
  selectIds: selectArtistsIds,
} = artistAdapter.getSelectors<RootState>((state) => state.artist);

export default artistSlice.reducer;
