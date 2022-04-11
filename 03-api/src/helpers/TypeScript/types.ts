import { IHouse, newCard, Errors } from './interfaces';

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

export type FormState = {
  errors: Errors;
  disabledButton?: boolean;
  submitButtonClicks: number;
};

export type ValidationErrorProps = {
  errorMessage: string;
};
