import { newCard, Errors, NewPerson } from './interfaces';

export type HomepageState = {
  people: NewPerson[];
  searchValue: string;
  isLoaded: boolean;
  disabled: boolean;
  personNotFound: boolean;
  modalWindowActive: boolean;
  madalWindowPerson: null | NewPerson;
};

export type FormpageState = {
  cards: newCard[];
};

export type FormpageProps = {
  addCard?: (newCard: newCard) => void;
};

export type CardProp = {
  person: NewPerson;
  showModalWindow: (person: NewPerson) => void;
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
  errorMessage: string | undefined;
};

export type CardListProp = {
  people: NewPerson[];
  showModalWindow: (person: NewPerson) => void;
};

export type SearchProp = {
  onInputChange: (value: string) => void;
  searchValue: string;
};

export type ModalWindowProp = {
  closeModalWindow: () => void;
  person: NewPerson | null;
};

export type formProps = {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  notification: boolean;
  picture: FileList;
  accept: boolean;
};

export type PaginationBtnsProps = {
  page: number;
  currentPage: number;
  disabled: boolean;
  changePage: (page: number) => void;
};

export type SelectFieldProps = {
  sortValue: string;
  changeSortValue: (value: string) => void;
};

export type SelectPaginationProps = {
  paginationSortValue: number;
  changePaginationValue: (value: number) => void;
};
