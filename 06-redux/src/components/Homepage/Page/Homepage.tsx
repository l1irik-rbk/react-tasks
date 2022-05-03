import React, { useEffect } from 'react';
import Spinner from '../../Spinner/Spinner';
import CardsList from '../CardsList/CardsList';
import NotFound from '../NotFound/NotFound';
import PaginationBtns from '../PaginationBtns/PaginationBtns';
import PaginationSort from '../PaginationBtns/PaginationSort';
import Search from '../Search/Search';
import SelectField from '../SelectField/SelectValue';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../toolkitRedux/store';
import { appSlice } from '../../../toolkitRedux/toolkitSlice';
import { useAppSelector } from '../../../toolkitRedux/reduxHooks';
import { fetchPeople } from '../../../toolkitRedux/actionCreator';

const Homepage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    people,
    isLoaded,
    sortValue,
    paginationSortValue,
    searchValue,
    peopleLoaded,
    paginatiionBtns,
    pageNumber,
    totalPeople,
    personNotFound,
  } = useAppSelector((state) => state.appReducer);

  const { setSortValue, setPginationSortValue, setSearchValue, setPeopleLoaded, setPageNumber } =
    appSlice.actions;

  useEffect(() => {
    if (peopleLoaded) {
      return;
    }

    dispatch(fetchPeople({ searchValue, pageNumber, paginationSortValue, sortValue, totalPeople }));
  }, [pageNumber, sortValue, paginationSortValue]);

  const InputChange = (value: string) => {
    dispatch(setSearchValue(value));
  };

  const findNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchPeople({ searchValue, pageNumber, paginationSortValue, sortValue, totalPeople }));
    dispatch(setPageNumber(1));
  };

  const changePage = (page: number) => {
    dispatch(setPeopleLoaded(false));
    dispatch(setPageNumber(page));
  };

  const changeSortValue = (value: string) => {
    dispatch(setPeopleLoaded(false));
    dispatch(setSortValue(value));
  };

  const changePaginationValue = (value: number) => {
    dispatch(setPeopleLoaded(false));
    dispatch(setPginationSortValue(value));
    dispatch(setPageNumber(1));
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
