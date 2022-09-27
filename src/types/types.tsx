export interface ICard {
  id?: number;
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
