import type { IArtist, IGenre } from '../../types/types';
import { instance } from '../instance';

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
