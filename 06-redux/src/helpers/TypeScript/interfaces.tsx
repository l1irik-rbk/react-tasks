export interface IPerson {
  birth_year?: string;
  eye_color?: string;
  gender: string;
  hair_color?: string;
  height: string;
  mass: string;
  name: string;
  skin_color?: string;
  birthYear?: string;
  eyeColor?: string;
  hairColor?: string;
  skinColor?: string;
}

export interface NewPerson {
  [key: string]: string;
}

export interface fakeStore {
  [key: string]: string;
}

export interface newCard {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  notification: boolean;
  picture?: FileList;
  accept: boolean;
  id?: number;
  newPicture?: string;
}

export interface Errors {
  acceptError?: boolean;
  firstNameError?: boolean;
  lastNameError?: boolean;
  countryError?: boolean;
  pictureError?: boolean;
  birthdayError?: boolean;
}

export interface initialStateType {
  cards: newCard[];
  people: NewPerson[];
  sortValue: string;
  paginationSortValue: number;
  paginatiionBtns: number[];
  peopleLoaded: boolean;
  searchValue: string;
  pageNumber: number;
  totalPeople: number;
  clickedPersonName: string;
  isLoaded: boolean;
  personNotFound: boolean;
}

export interface actionType {
  type: ActionKind;
  payload: NewPerson[] | newCard | string | number | number[] | boolean | undefined;
}

export interface ContextType {
  state: initialStateType;
  dispatch: React.Dispatch<actionType>;
}

export enum ActionKind {
  ADD_CARD = 'ADD_CARD',
  FIND_PEOPLE = 'FIND_PEOPLE',
  SORT_PEOPLE = 'SORT_PEOPLE',
  SORT_PAGINATION = 'SORT_PAGINATION',
  ADD_PAGINATION_BTNS = 'ADD_PAGINATION_BTNS',
  PEOPLE_LOADED = 'IS_LOADED',
  SEARCH = 'SEARCH',
  PAGE_NUMBER = 'PAGE_NUMBER',
  TOTAL_PEOPLE = 'TOTAL_PEOPLE',
  PERSON = 'PERSON',
}

export interface FetchParams {
  searchValue: string;
  pageNumber: number;
  paginationSortValue: number;
  sortValue: string;
  totalPeople: number;
}
