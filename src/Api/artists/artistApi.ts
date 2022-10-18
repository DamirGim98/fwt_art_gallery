import type { IArtist, IGenre } from '../../types/types';
import { privateInstance } from '../privateInstance';

export const ArtistAPI = {
  getAllArtists: async () => {
    const response = await privateInstance.get<IArtist[]>('/artists/static');
    return response.data;
  },
  getArtistById: async (id: string) => {
    const response = await privateInstance.get<IArtist>(`/artists/static/${id}`);
    return response.data;
  },
  getAllGenres: async () => {
    const response = await privateInstance.get<IGenre[]>('genres/static');
    return response.data;
  },
};
