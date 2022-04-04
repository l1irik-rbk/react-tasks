import { IHouse, newCard } from './interfaces';

export type HomepageState = {
  houses: IHouse[];
};

export type FormpageState = {
  cards: newCard[];
};

export type FormpageProps = {
  addCard?: (newCard: newCard) => void;
};

export type CardProp = {
  house: IHouse;
};

export type NewCardProp = {
  card: newCard;
};
