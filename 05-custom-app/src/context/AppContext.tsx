import { createContext } from 'react';
import {
  ActionKind,
  actionType,
  ContextType,
  initialStateType,
  newCard,
  NewPerson,
} from '../helpers/TypeScript/interfaces';

export const initialState: initialStateType = {
  cards: [],
  people: [],
  sortValue: '',
  paginationSortValue: 10,
  paginatiionBtns: [],
  peopleLoaded: false,
  searchValue: '',
  pageNumber: 1,
  totalPeople: 0,
};

export const AppContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

export const appReducer = (state: initialStateType, action: actionType): initialStateType => {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.ADD_CARD:
      return { ...state, cards: [payload as newCard, ...state.cards] };
    case ActionKind.FIND_PEOPLE:
      return { ...state, people: payload as NewPerson[] };
    case ActionKind.SORT_PEOPLE:
      return { ...state, sortValue: payload as string };
    case ActionKind.SORT_PAGINATION:
      return { ...state, paginationSortValue: payload as number };
    case ActionKind.ADD_PAGINATION_BTNS:
      return { ...state, paginatiionBtns: payload as number[] };
    case ActionKind.PEOPLE_LOADED:
      return { ...state, peopleLoaded: payload as boolean };
    case ActionKind.SEARCH:
      return { ...state, searchValue: payload as string };
    case ActionKind.PAGE_NUMBER:
      return { ...state, pageNumber: payload as number };
    case ActionKind.TOTAL_PEOPLE:
      return { ...state, totalPeople: payload as number };
    default:
      return state;
  }
};
