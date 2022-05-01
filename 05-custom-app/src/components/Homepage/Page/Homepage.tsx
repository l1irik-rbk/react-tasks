import React, { useContext, useEffect, useState } from 'react';
import { ActionKind, AppContext } from '../../../context/AppContext';
import { getPagesArray } from '../../../helpers/getPaginationBtns';
import { sortPeople } from '../../../helpers/sortPeople';
import { NewPerson } from '../../../helpers/TypeScript/interfaces';
import ApiCall from '../../../services/ApiCall';
import Spinner from '../../Spinner/Spinner';
import CardsList from '../CardsList/CardsList';
import Modal from '../Modal/Modal';
import ModalWindow from '../ModalWindow/ModalWindow';
import NotFound from '../NotFound/NotFound';
import PaginationBtns from '../PaginationBtns/PaginationBtns';
import Search from '../Search/Search';
import SelectField from '../SelectField/SelectValue';

const Homepage: React.FC = () => {
  const API = new ApiCall();
  // const [people, setPeople] = useState<NewPerson[]>([]);
  const [searchValue, setSearchVlaue] = useState('');
  const [isLoaded, setLoaded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [personNotFound, setNotFoundPerson] = useState(false);
  const [modalWindowActive, setModalWindowActive] = useState(false);
  const [madalWindowPerson, setMadalWindowPerson] = useState<null | NewPerson>(null);

  const [totalPeople, setTotalPeople] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(true);
  const [sortValue, setSortValue] = useState('');
  const [sortedField, setSortedField] = useState(false);

  const pagesArray = getPagesArray(totalPeople);

  const { state, dispatch } = useContext(AppContext);
  const { people } = state;

  useEffect(() => {
    if (people.length) {
      setLoaded(true);
      return;
    }
    fetchPeople();
  }, [currentPage, sortValue]);

  const fetchPeople = () => {
    setLoaded(false);
    setDisabled(true);
    setNotFoundPerson(false);

    API.findPerson(searchValue).then((data) => {
      const people: NewPerson[] = data.results;
      dispatch({
        type: ActionKind.FIND_PEOPLE,
        payload: people,
      });
      setSearchVlaue('');
      setLoaded(true);
      setDisabled(false);
      setNotFoundPerson(!Boolean(people.length));
      if (!searchValue) setCurrentPage(1);
    });
  };

  const InputChange = (value: string) => {
    setSearchVlaue(value);
  };

  const findNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPeople();
  };

  const showModalWindow = (person: NewPerson) => {
    setModalWindowActive(true);
    setMadalWindowPerson(person);
  };

  const closeModalWindow = () => {
    setModalWindowActive(false);
    setMadalWindowPerson(null);
  };

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const changeSortValue = (value: string) => {
    setSortValue(value);
  };

  return (
    <section className="home-page" data-testid="home-page">
      <h1 className="main-title">Star wars heroes</h1>
      <form onSubmit={findNewItem}>
        <Search onInputChange={InputChange} searchValue={searchValue} />
      </form>
      <div className="row align-items-start">
        {/* <div className="col">
          <ul className="pagination pagination-menu">
            {pagesArray.map((page) => (
              <PaginationBtns
                key={page}
                page={page}
                currentPage={currentPage}
                disabled={disabled}
                changePage={changePage}
              />
            ))}
          </ul>
        </div> */}
      </div>
      <SelectField changeSortValue={changeSortValue} sortValue={sortValue} />
      {!isLoaded ? <Spinner /> : <CardsList people={people} showModalWindow={showModalWindow} />}
      {personNotFound ? <NotFound /> : null}
      {modalWindowActive ? (
        <Modal data-testid="homeModalWindow">
          <ModalWindow person={madalWindowPerson} closeModalWindow={closeModalWindow} />
        </Modal>
      ) : null}
    </section>
  );
};

export default Homepage;
