export interface ICard {
  id: string | number;
  name: string;
  title?: string;
  year: string;
  imgUrl: string;
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
  artists: IArtist[];
  status?: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

export interface IImage {
  _id: string;
  src: string;
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
  id: string;
  name: string;
  description: string;
  yearsOfLife: string;
  mainPainting: IMainPainting;
  __v: number;
}
