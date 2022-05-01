import { createContext } from 'react';
import { newCard, NewPerson } from '../helpers/TypeScript/interfaces';

interface initialStateType {
  cards: newCard[];
  people: NewPerson[];
}

interface actionType {
  type: ActionKind;
  payload: NewPerson[] | newCard;
}

interface ContextType {
  state: initialStateType;
  dispatch: React.Dispatch<actionType>;
}

export enum ActionKind {
  ADD_CARD = 'ADD_CARD',
  FIND_PEOPLE = 'FIND_PEOPLE',
}

export const initialState: initialStateType = {
  cards: [],
  people: [],
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
    default:
      return state;
  }
};
