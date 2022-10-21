import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IArtistPaintings, IState } from '../../types/types';
import { ArtistAPI } from '../../Api/artists/artistApi';

const PaintingsAdapter = createEntityAdapter<IArtistPaintings>({
  selectId: (painting) => painting._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const fetchArtistPaintings = createAsyncThunk(
  'paintings/fetchPaintings',
  async (id: string) => {
    return ArtistAPI.getAllArtistPaintings(id);
  },
);

const options = {
  status: 'idle',
  error: '',
} as IState;

const initialState = PaintingsAdapter.getInitialState(options);

const paintingsSlice = createSlice({
  name: 'paintings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtistPaintings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArtistPaintings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        PaintingsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchArtistPaintings.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error.message) state.error = action.error.message;
      });
  },
});

export const { selectById: selectPaintingById, selectIds: selectPaintingsIds } =
  PaintingsAdapter.getSelectors<RootState>((state) => state.paintings);

export const selectPaintingsStatus = (state: RootState) => state.paintings.status;

export default paintingsSlice.reducer;
