import { fetchPeople } from './actionCreator';
import { newCard, initialStateType, NewPerson } from './../helpers/TypeScript/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: initialStateType = {
  cards: [],
  people: [],
  sortValue: '',
  paginationSortValue: 10,
  paginatiionBtns: [],
  peopleLoaded: false,
  searchValue: '',
  pageNumber: 1,
  totalPeople: 0,
  clickedPersonName: '',
  isLoaded: false,
  personNotFound: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<newCard>) => {
      state.cards.push(action.payload);
    },
    setSortValue: (state, action: PayloadAction<string>) => {
      state.sortValue = action.payload;
    },
    setPginationSortValue: (state, action: PayloadAction<number>) => {
      state.paginationSortValue = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setPaginatiionBtns: (state, action: PayloadAction<number[]>) => {
      state.paginatiionBtns = action.payload;
    },
    setPeopleLoaded: (state, action: PayloadAction<boolean>) => {
      state.peopleLoaded = action.payload;
    },
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    setTotalPeople: (state, action: PayloadAction<number>) => {
      state.totalPeople = action.payload;
    },
    setNotFoundPerson: (state, action: PayloadAction<boolean>) => {
      state.personNotFound = action.payload;
    },
    setClickedPersonName: (state, action: PayloadAction<string>) => {
      state.clickedPersonName = action.payload;
    },
  },
  extraReducers: {
    [fetchPeople.pending.type]: (state) => {
      state.isLoaded = false;
    },
    [fetchPeople.fulfilled.type]: (state, action: PayloadAction<NewPerson[]>) => {
      state.isLoaded = true;
      state.peopleLoaded = true;
      state.people = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setCard } = appSlice.actions;
