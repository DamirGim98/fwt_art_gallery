import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IState, IArtist } from '../types/types';
import type { RootState } from './store';

export const fetchArtist = createAsyncThunk('artist/fetchArtist', async () => {
  const response = await axios.get('https://internship-front.framework.team/artists/static');
  return response.data as IArtist[];
});

const initialState: IState = {
  artists: [],
  status: 'idle',
  error: '',
};

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
        state.artists.push(...action.payload.slice(0, 3));
      })
      .addCase(fetchArtist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const selectArtistsStatus = (state: RootState) => state.artist.status;

export const selectAllArtists = (state: RootState) => state.artist.artists;

export default artistSlice.reducer;
