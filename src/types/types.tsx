export interface ICard {
  id: string | number;
  name: string;
  title?: string;
  year: string;
  img: IImage;
  OnClick?: () => void;
}

export interface IUser {
  name: string;
}

export interface IHeaderProps {
  user?: IUser;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export interface IState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string;
}

export interface IImage {
  _id: string;
  src: string;
  src2x: string;
  webp: string;
  webp2x: string;
}

export interface IMainPainting {
  _id: string;
  artist: string;
  image: IImage;
  name: string;
  yearOfCreation: string;
}

export interface IArtist {
  genres: string[];
  _id: string;
  name: string;
  description: string;
  yearsOfLife: string;
  mainPainting: IMainPainting;
  __v: number;
}

export interface IGenre {
  _id: string;
  name: string;
}

export interface IArtistPaintings {
  _id: string;
  name: string;
  yearOfCreation: string;
  image: IImage;
}
