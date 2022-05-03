import { getPagesArray } from './../helpers/getPaginationBtns';
import { getSlicedArray } from './../helpers/getAllPeople';
import { appSlice } from './toolkitSlice';
import { FetchParams, NewPerson } from './../helpers/TypeScript/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiCall from '../services/ApiCall';
import { sortPeople } from '../helpers/sortPeople';

export const fetchPeople = createAsyncThunk(
  'fetchPeople',
  async (
    { searchValue, pageNumber, paginationSortValue, sortValue, totalPeople }: FetchParams,
    thunkAPI
  ) => {
    console.log(1);
    const { dispatch } = thunkAPI;
    const { setPaginatiionBtns, setTotalPeople, setSearchValue, setNotFoundPerson } =
      appSlice.actions;
    dispatch(setNotFoundPerson(false));

    const API = new ApiCall();

    let people: NewPerson[];
    let sortedArray: NewPerson[] | undefined;
    let paginatiionBtns: number[] | undefined;

    if (paginationSortValue === 10) {
      const data = await API.findPerson(searchValue, pageNumber);
      people = data.results;
      sortedArray = sortPeople(people, sortValue);
      paginatiionBtns = getPagesArray(data.count, paginationSortValue);
      dispatch(setTotalPeople(data.count));
      if (!people.length) dispatch(setNotFoundPerson(true));
    }

    if (paginationSortValue === 15 || paginationSortValue === 5) {
      const allPeople = await getSlicedArray(paginationSortValue, totalPeople, searchValue);
      people = allPeople[pageNumber - 1];
      sortedArray = sortPeople(people, sortValue);
      paginatiionBtns = getPagesArray(totalPeople, paginationSortValue);
      if (!people.length) dispatch(setNotFoundPerson(true));
    }

    if (paginatiionBtns) dispatch(setPaginatiionBtns(paginatiionBtns));
    dispatch(setSearchValue(searchValue));
    return sortedArray;
  }
);
