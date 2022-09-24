export interface ICard {
  id?: number;
  name: string;
  title?: string;
  year: string;
  imgUrl: string;
  OnClick?: () => void;
}
