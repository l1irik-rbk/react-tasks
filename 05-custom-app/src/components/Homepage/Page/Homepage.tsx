import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import { getSlicedArray } from '../../../helpers/getAllPeople';
import { getPagesArray } from '../../../helpers/getPaginationBtns';
import { sortPeople } from '../../../helpers/sortPeople';
import { ActionKind, NewPerson } from '../../../helpers/TypeScript/interfaces';
import ApiCall from '../../../services/ApiCall';
import Spinner from '../../Spinner/Spinner';
import CardsList from '../CardsList/CardsList';
import NotFound from '../NotFound/NotFound';
import PaginationBtns from '../PaginationBtns/PaginationBtns';
import PaginationSort from '../PaginationBtns/PaginationSort';
import Search from '../Search/Search';
import SelectField from '../SelectField/SelectValue';

const Homepage: React.FC = () => {
  const API = new ApiCall();
  const [isLoaded, setLoaded] = useState(false);
  const [personNotFound, setNotFoundPerson] = useState(false);

  const { state, dispatch } = useContext(AppContext);
  const {
    people,
    sortValue,
    paginationSortValue,
    paginatiionBtns,
    peopleLoaded,
    searchValue,
    pageNumber,
    totalPeople,
  } = state;

  useEffect(() => {
    if (peopleLoaded) {
      setLoaded(true);
      return;
    }

    fetchPeople();
  }, [pageNumber, sortValue, paginationSortValue]);

  const fetchPeople = async () => {
    setLoaded(false);
    setNotFoundPerson(false);

    let people: NewPerson[];
    let sortedArray: NewPerson[] | undefined;
    let paginatiionBtns: number[] | undefined;

    if (paginationSortValue === 10) {
      const data = await API.findPerson(searchValue, pageNumber);
      people = data.results;
      sortedArray = sortPeople(people, sortValue);
      dispatch({ type: ActionKind.TOTAL_PEOPLE, payload: data.count });
      paginatiionBtns = getPagesArray(data.count, paginationSortValue);
    }

    if (paginationSortValue === 15 || paginationSortValue === 5) {
      const allPeople = await getSlicedArray(paginationSortValue, totalPeople, searchValue);
      people = allPeople[pageNumber - 1];
      sortedArray = sortPeople(people, sortValue);
      paginatiionBtns = getPagesArray(totalPeople, paginationSortValue);
    }

    dispatch({ type: ActionKind.ADD_PAGINATION_BTNS, payload: paginatiionBtns });
    dispatch({ type: ActionKind.FIND_PEOPLE, payload: sortedArray });
    dispatch({ type: ActionKind.SEARCH, payload: searchValue });
    setLoaded(true);
    dispatch({ type: ActionKind.PEOPLE_LOADED, payload: true });
  };

  const InputChange = (value: string) => {
    dispatch({ type: ActionKind.SEARCH, payload: value });
  };

  const findNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPeople();
    dispatch({ type: ActionKind.PAGE_NUMBER, payload: 1 });
  };

  const changePage = (page: number) => {
    dispatch({ type: ActionKind.PEOPLE_LOADED, payload: false });
    dispatch({ type: ActionKind.PAGE_NUMBER, payload: page });
  };

  const changeSortValue = (value: string) => {
    dispatch({ type: ActionKind.PEOPLE_LOADED, payload: false });
    dispatch({ type: ActionKind.SORT_PEOPLE, payload: value });
  };

  const changePaginationValue = (value: number) => {
    dispatch({ type: ActionKind.PEOPLE_LOADED, payload: false });
    dispatch({ type: ActionKind.SORT_PAGINATION, payload: value });
    dispatch({ type: ActionKind.PAGE_NUMBER, payload: 1 });
  };

  return (
    <section className="home-page" data-testid="home-page">
      <h1 className="main-title">Star wars heroes</h1>
      <form onSubmit={findNewItem}>
        <Search onInputChange={InputChange} searchValue={searchValue} />
      </form>
      {!isLoaded ? (
        <Spinner />
      ) : (
        <>
          <div className="row align-items-start">
            <div className="col">
              <ul className="pagination pagination-menu">
                {paginatiionBtns.map((page) => (
                  <PaginationBtns
                    key={page}
                    page={page}
                    currentPage={pageNumber}
                    disabled={false}
                    changePage={changePage}
                  />
                ))}
              </ul>
            </div>
            <PaginationSort
              changePaginationValue={changePaginationValue}
              paginationSortValue={paginationSortValue}
            />
          </div>
          <SelectField changeSortValue={changeSortValue} sortValue={sortValue} />
          <CardsList people={people} />
        </>
      )}
      {personNotFound ? <NotFound /> : null}
    </section>
  );
};

export default Homepage;
