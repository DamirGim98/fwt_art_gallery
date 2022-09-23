export interface ICard {
  title?: string;
  name: string;
  imgUrl: string;
  id?: number;
  year: string;
  OnClick?: () => void;
}
