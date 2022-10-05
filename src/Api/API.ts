import axios from 'axios';
import type { IArtist, IGenre } from '../types/types';

export const BASE_URL = 'https://internship-front.framework.team';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const ArtistAPI = {
  getAllArtists: async () => {
    const response = await instance.get<IArtist[]>('/artists/static');
    return response.data;
  },
  getArtistById: async (id: string) => {
    const response = await instance.get<IArtist>(`/artists/static/${id}`);
    return response.data;
  },
  getAllGenres: async () => {
    const response = await instance.get<IGenre[]>('genres/static');
    return response.data;
  },
};
