import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IState, IArtist } from '../types/types';
import type { RootState } from './store';

export const fetchArtist = createAsyncThunk('artist/fetchArtist', async () => {
  const response = await axios.get('https://internship-front.framework.team/artists/static');
  return response.data as IArtist;
});

const initialState: IState = {
  cards: [
    {
      id: 1,
      name: 'Ivan Ivanov',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998-1999',
    },
    {
      id: 2,
      name: 'Ivan Ivanov',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998-1999',
    },
    {
      id: 3,
      name: 'Anton Anton ',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998-1999',
    },
    {
      id: 4,
      name: 'Sergey Sergeev',
      imgUrl: 'https://legacy-time.ru/img/content/shishkin/sosnovyj-bor-1895.jpg',
      year: '1998-1999',
    },
  ],
  status: 'idle',
  error: '',
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtist.fulfilled, () => {
      // console.log(action.payload);
    });
  },
});

export const selectAllArtists = (state: RootState) => state.artist.cards;

export default artistSlice.reducer;
