import { IPerson, newCard, Errors } from './interfaces';

export type HomepageState = {
  people: IPerson[];
  searchValue: string;
  isLoaded: boolean;
  disabled: boolean;
  personNotFound: boolean;
  modalWindowActive: boolean;
  madalWindowPerson: null | IPerson;
};

export type FormpageState = {
  cards: newCard[];
};

export type FormpageProps = {
  addCard?: (newCard: newCard) => void;
};

export type CardProp = {
  person: IPerson;
  showModalWindow: (person: IPerson) => void;
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
  showModalWindow: (person: IPerson) => void;
};

export type SearchProp = {
  onInputChange: (value: string) => void;
  searchValue: string;
};

export type ModalWindowProp = {
  closeModalWindow: () => void;
  person: IPerson | null;
};
