import { IPerson, newCard, Errors } from './interfaces';

export type HomepageState = {
  people: IPerson[];
  searchValue: string;
  isLoaded: boolean;
  disabled: boolean;
  personNotFound: boolean;
};

export type FormpageState = {
  cards: newCard[];
};

export type FormpageProps = {
  addCard?: (newCard: newCard) => void;
};

export type CardProp = {
  person: IPerson;
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

export type CardListProp = {
  people: IPerson[];
};

export type SearchProp = {
  onInputChange: (value: string) => void;
  searchValue: string;
};
