export interface ICard {
  id: number;
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

export interface IArtist {
  genres: string;
  id: string;
  name: string;
  description: string;
  yearsOfLife: string;
}

export interface IState {
  cards: ICard[];
  status?: 'idle' | 'loading' | 'succeeded' | 'rejected';
  error?: string;
}
